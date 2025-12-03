import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Papa from 'papaparse';

// Types pour les données brutes du CSV
interface RawReservation {
  date: string;
  jour: string;
  mois: string;
  nombre_reservations: string;
  montant_total: string;
  [key: string]: string; // Pour les autres colonnes éventuelles
}

// Types pour les KPI
export interface ReservationKPIs {
  conversionRate: number;
  averageBasketBySegment: {
    segment: string;
    averageBasket: number;
  }[];
  experienceRevenue: number;
  upsellRate: number;
  experienceAverageBasket: number;
}

// Types pour les réservations SevenRooms
export interface SevenRoomsReservation {
  id_reservation: string;
  client_name: string;
  reservation_date: Date;
  reservation_time: string;
  channel: string;
  status: 'confirmed' | 'cancelled' | 'no-show';
  total_spend: number;
  party_size: number;
  package?: string; // Ajout du champ package pour les expériences
  segment?: string; // Ajout du champ segment client
  reservation_tags?: string;
}

// Types pour les données transformées
export interface ProcessedData {
  pageViewsData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
      fill: boolean;
    }[];
  };
  weekdayPerformanceData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  monthlyPerformanceData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  kpis: ReservationKPIs;
}

export interface SevenRoomsCSVRow {
  "": string; // Numéro de ligne
  "venue name": string;
  "shift name": string;
  "created date": string;
  "created time": string;
  "reservation date": string;
  "reservation time": string;
  "updated - local date": string;
  "updated - local time": string;
  "full name": string;
  "reservation status": string;
  "detailed status": string;
  "confirmation #": string;
  "booked by": string;
  "reservation notes": string;
  "booked covers": string;
  "reservation tag categories + names": string;
  "phone number": string;
  "guest email": string;
  "birthday": string;
  "client notes": string;
  "anniversary": string;
  "company": string;
  "job title": string;
  "loyalty id": string;
  "loyalty rank": string;
  "loyalty tier": string;
  "marketing opt in - parent group (yes / no)": string;
  "marketing opt in- venue names": string;
  "client tag categories + names": string;
  "guest total spend": string;
  [key: string]: string;
}

export interface ReservationMetrics {
  conversionRate: number;
  averageBasketBySegment: {
    segment: string;
    averageBasket: number;
  }[];
  noShowCancellationRate: number;
}

export class CSVProcessingService {
  private static instance: CSVProcessingService;
  private rawData: RawReservation[] = [];
  private processedData: ProcessedData | null = null;
  private sevenRoomsReservations: SevenRoomsReservation[] = [];
  private sevenRoomsData: string = '';
  private noShowCancellationData: string = '';

  private constructor() {}

  public static getInstance(): CSVProcessingService {
    if (!CSVProcessingService.instance) {
      CSVProcessingService.instance = new CSVProcessingService();
    }
    return CSVProcessingService.instance;
  }

  /**
   * Charge et parse le fichier CSV
   */
  public async loadCSVData(): Promise<void> {
    try {
      console.log('Tentative de chargement du fichier CSV SevenRooms...');
      const sevenRoomsResponse = await fetch('/data/Reservations Export 2025-05-19T1116.csv');
      
      if (!sevenRoomsResponse.ok) {
        throw new Error(`Erreur HTTP: ${sevenRoomsResponse.status} ${sevenRoomsResponse.statusText}`);
      }
      
      this.sevenRoomsData = await sevenRoomsResponse.text();
      console.log('Données SevenRooms chargées, longueur:', this.sevenRoomsData.length);

      // Charger les données de no-show et d'annulations
      console.log('Tentative de chargement du fichier CSV no-show...');
      const noShowResponse = await fetch('/data/timing_of_new_covers_booked_vs_covers_cancelled_by_day.csv');
      
      if (!noShowResponse.ok) {
        throw new Error(`Erreur HTTP: ${noShowResponse.status} ${noShowResponse.statusText}`);
      }
      
      this.noShowCancellationData = await noShowResponse.text();
      console.log('Données no-show chargées, longueur:', this.noShowCancellationData.length);
      
      return new Promise((resolve, reject) => {
        Papa.parse(this.sevenRoomsData, {
          header: true,
          skipEmptyLines: true,
          complete: (results: Papa.ParseResult<RawReservation>) => {
            console.log('Parsing CSV terminé. Nombre de lignes:', results.data.length);
            console.log('Première ligne:', results.data[0]);
            this.rawData = results.data;
            this.processData();
            resolve();
          },
          error: (error: Error) => {
            console.error('Erreur lors du parsing:', error);
            reject(new Error('Erreur lors du parsing du CSV: ' + error.message));
          }
        });
      });
    } catch (error: unknown) {
      console.error('Erreur lors du chargement du CSV:', error);
      throw new Error('Erreur lors du chargement du CSV: ' + (error instanceof Error ? error.message : String(error)));
    }
  }

  /**
   * Transforme les données brutes en format compatible avec le dashboard
   */
  private processData(): void {
    if (!this.rawData.length) return;

    // Traitement des données par jour de la semaine
    const weekdayData = this.processWeekdayData();
    
    // Traitement des données par mois
    const monthlyData = this.processMonthlyData();
    
    // Traitement des données chronologiques
    const timeSeriesData = this.processTimeSeriesData();

    this.processedData = {
      pageViewsData: timeSeriesData,
      weekdayPerformanceData: weekdayData,
      monthlyPerformanceData: monthlyData,
      kpis: {
        conversionRate: 0,
        averageBasketBySegment: [],
        experienceRevenue: 0,
        upsellRate: 0,
        experienceAverageBasket: 0
      }
    };
  }

  /**
   * Traite les données par jour de la semaine
   */
  private processWeekdayData() {
    const weekdayMap = new Map<string, number>();
    const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    this.rawData.forEach(record => {
      const count = parseInt(record.nombre_reservations) || 0;
      weekdayMap.set(record.jour, (weekdayMap.get(record.jour) || 0) + count);
    });

    return {
      labels: joursSemaine,
      datasets: [{
        label: 'Réservations',
        data: joursSemaine.map(jour => weekdayMap.get(jour) || 0),
        backgroundColor: 'rgba(79, 70, 229, 0.6)'
      }]
    };
  }

  /**
   * Traite les données par mois
   */
  private processMonthlyData() {
    const monthlyMap = new Map<string, number>();
    const mois = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    this.rawData.forEach(record => {
      const count = parseInt(record.nombre_reservations) || 0;
      monthlyMap.set(record.mois, (monthlyMap.get(record.mois) || 0) + count);
    });

    return {
      labels: mois,
      datasets: [{
        label: 'Réservations',
        data: mois.map(mois => monthlyMap.get(mois) || 0),
        backgroundColor: 'rgba(16, 185, 129, 0.6)'
      }]
    };
  }

  /**
   * Traite les données chronologiques
   */
  private processTimeSeriesData() {
    if (!this.rawData || this.rawData.length === 0) {
      return {
        labels: [],
        datasets: [{
          label: 'Réservations',
          data: [],
          borderColor: 'rgb(79, 70, 229)',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          tension: 0.3,
          fill: true
        }]
      };
    }

    const sortedData = [...this.rawData]
      .filter(record => record.reservation_date && record.nombre_reservations)
      .sort((a, b) => {
        const dateA = new Date(a.reservation_date);
        const dateB = new Date(b.reservation_date);
        return dateA.getTime() - dateB.getTime();
      });

    return {
      labels: sortedData.map(record => 
        format(new Date(record.reservation_date), 'dd/MM', { locale: fr })
      ),
      datasets: [{
        label: 'Réservations',
        data: sortedData.map(record => parseInt(record.nombre_reservations) || 0),
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true
      }]
    };
  }

  /**
   * Récupère les données transformées
   */
  public getProcessedData(): ProcessedData {
    if (!this.processedData) {
      throw new Error('Les données n\'ont pas encore été traitées');
    }
    return this.processedData;
  }

  /**
   * Récupère les données brutes
   */
  public getRawData(): RawReservation[] {
    return this.rawData;
  }

  /**
   * Calcule les métriques de réservation
   */
  public calculateReservationMetrics(): ReservationMetrics {
    if (!this.sevenRoomsReservations.length) {
      throw new Error('Aucune donnée de réservation disponible');
    }

    // 1. Taux de conversion
    const totalReservations = this.sevenRoomsReservations.length;
    const confirmedReservations = this.sevenRoomsReservations.filter(
      r => r.status === 'confirmed'
    ).length;
    const conversionRate = (confirmedReservations / totalReservations) * 100;

    // 2. Panier moyen par segment
    const segmentBaskets = new Map<string, { total: number; count: number }>();
    this.sevenRoomsReservations
      .filter(r => r.status === 'confirmed' && r.total_spend > 0)
      .forEach(reservation => {
        const segment = reservation.reservation_tags || 'Non défini';
        const totalSpend = reservation.total_spend;
        const current = segmentBaskets.get(segment) || { total: 0, count: 0 };
        segmentBaskets.set(segment, {
          total: current.total + totalSpend,
          count: current.count + 1
        });
      });

    const averageBasketBySegment = Array.from(segmentBaskets.entries()).map(
      ([segment, { total, count }]) => ({
        segment,
        averageBasket: total / count
      })
    );

    // 3. Taux de no-show et d'annulations
    const noShowCancellations = this.sevenRoomsReservations.filter(
      r => r.status === 'no-show' || r.status === 'cancelled'
    ).length;
    const noShowCancellationRate = (noShowCancellations / totalReservations) * 100;

    return {
      conversionRate,
      averageBasketBySegment,
      noShowCancellationRate
    };
  }

  /**
   * Parse le fichier CSV de SevenRooms et génère un tableau de réservations typées
   */
  public async parseSevenRoomsCSV(): Promise<SevenRoomsReservation[]> {
    try {
      console.log('Tentative de parsing du fichier SevenRooms CSV...');
      const response = await fetch('/data/Reservations Export 2025-05-19T1116.csv');
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
      }
      
      const csvText = await response.text();
      console.log('Contenu du CSV SevenRooms chargé:', csvText.substring(0, 500) + '...');
      
      return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim().toLowerCase(),
          transform: (value) => value.trim(),
          complete: (results: Papa.ParseResult<SevenRoomsCSVRow>) => {
            try {
              console.log('Parsing SevenRooms CSV terminé. Nombre de lignes:', results.data.length);
              console.log('Première ligne SevenRooms:', results.data[0]);
              
              this.sevenRoomsReservations = results.data
                .filter((row: SevenRoomsCSVRow) => {
                  const isValid = row["confirmation #"] && 
                    row["full name"] && 
                    row["reservation date"] && 
                    row["reservation time"] &&
                    row["reservation status"];
                  return isValid;
                })
                .map((row: SevenRoomsCSVRow) => {
                  // Parse la date et l'heure
                  const [datePart, timePart] = row["reservation date"].split(' ');
                  const [day, month, year] = datePart.split('/');
                  
                  // Tentative de création d'une date valide
                  let reservationDate;
                  try {
                    // Format attendu JJ/MM/AAAA
                    if (day && month && year && !isNaN(parseInt(day)) && !isNaN(parseInt(month)) && !isNaN(parseInt(year))) {
                      reservationDate = new Date(`${year}-${month}-${day}T${timePart || '00:00:00'}`);
                      
                      // Vérifier si la date est valide
                      if (isNaN(reservationDate.getTime())) {
                        console.warn(`Date invalide: ${datePart} pour réservation ${row["confirmation #"]}`);
                        reservationDate = new Date(); // Utiliser la date actuelle par défaut
                      }
                    } else {
                      console.warn(`Format de date incorrect: ${datePart} pour réservation ${row["confirmation #"]}`);
                      reservationDate = new Date(); // Utiliser la date actuelle par défaut
                    }
                  } catch (error) {
                    console.error(`Erreur lors du parsing de la date: ${datePart}`, error);
                    reservationDate = new Date(); // Utiliser la date actuelle par défaut
                  }

                  // Nettoyage du montant dépensé
                  let totalSpend = 0;
                  if (row["guest total spend"]) {
                    totalSpend = parseFloat(row["guest total spend"].replace(/[^0-9.,-]+/g, '').replace(',', '.'));
                    if (isNaN(totalSpend)) totalSpend = 0;
                  }

                  // Parse la taille du groupe
                  const partySize = parseInt(row["booked covers"] || '1', 10);

                  // Valide le statut
                  const validStatus = ['confirmed', 'cancelled', 'no-show'].includes(row["reservation status"].toLowerCase())
                    ? row["reservation status"].toLowerCase() as 'confirmed' | 'cancelled' | 'no-show'
                    : 'confirmed';
                  
                  // Extraire les informations de segment des tags de réservation
                  const reservationTags = row["reservation tag categories + names"] || '';
                  
                  // Pour le débogage
                  if (reservationTags) {
                    console.log(`Tags for ${row["full name"]}: ${reservationTags}`);
                  }
                  
                  // Assurez-vous que tous les champs sont correctement traités
                  const reservation: SevenRoomsReservation = {
                    id_reservation: row["confirmation #"],
                    client_name: row["full name"],
                    reservation_date: reservationDate,
                    reservation_time: timePart,
                    channel: row["booked by"] || 'Non spécifié',
                    status: validStatus,
                    total_spend: totalSpend,
                    party_size: partySize,
                    reservation_tags: reservationTags
                  };
                  
                  // Si pas de tags, utilisons des segments par défaut basés sur d'autres critères
                  if (!reservationTags || reservationTags.trim() === '') {
                    if (totalSpend > 200) {
                      reservation.segment = 'VIP';
                    } else if (totalSpend > 100) {
                      reservation.segment = 'Régulier';
                    } else {
                      reservation.segment = 'Occasionnel';
                    }
                  } else {
                    // Essayer d'extraire le segment des tags
                    const tagsLower = reservationTags.toLowerCase();
                    if (tagsLower.includes('vip') || tagsLower.includes('premium')) {
                      reservation.segment = 'VIP';
                    } else if (tagsLower.includes('régulier') || tagsLower.includes('regular') || tagsLower.includes('fidèle')) {
                      reservation.segment = 'Régulier';
                    } else {
                      reservation.segment = 'Occasionnel';
                    }
                  }
                  
                  return reservation;
                });

              console.log('Nombre de réservations SevenRooms valides:', this.sevenRoomsReservations.length);
              resolve(this.sevenRoomsReservations);
            } catch (error: unknown) {
              console.error('Erreur lors du traitement des données:', error);
              reject(new Error('Erreur lors du traitement des données: ' + (error instanceof Error ? error.message : String(error))));
            }
          },
          error: (error: Error) => {
            console.error('Erreur lors du parsing du CSV:', error);
            reject(new Error('Erreur lors du parsing du CSV: ' + error.message));
          }
        });
      });
    } catch (error) {
      console.error('Erreur lors du chargement du CSV:', error);
      throw new Error('Erreur lors du chargement du CSV: ' + (error instanceof Error ? error.message : String(error)));
    }
  }

  /**
   * Récupère les réservations SevenRooms
   */
  public getSevenRoomsReservations(): SevenRoomsReservation[] {
    // Filtrer les réservations avec des dates potentiellement invalides
    const validReservations = this.sevenRoomsReservations.filter(r => {
      // Vérifier que la date existe et est valide
      if (!r.reservation_date) {
        console.warn(`Réservation ${r.id_reservation} ignorée: date absente`);
        return false;
      }
      
      // Vérifier que c'est bien une instance de Date
      if (!(r.reservation_date instanceof Date)) {
        console.warn(`Réservation ${r.id_reservation} ignorée: pas une instance de Date`, 
          typeof r.reservation_date, r.reservation_date);
        return false;
      }
      
      // Vérifier que la date est valide (pas NaN)
      if (isNaN(r.reservation_date.getTime())) {
        console.warn(`Réservation ${r.id_reservation} ignorée: date invalide (NaN)`, r.reservation_date);
        return false;
      }
      
      return true;
    });
    
    console.log(`Filtrage de ${this.sevenRoomsReservations.length} réservations → ${validReservations.length} valides`);
    return validReservations;
  }

  /**
   * Calcule les KPI à partir des réservations
   */
  public calculateKPIs(): ReservationKPIs {
    if (!this.sevenRoomsReservations.length) {
      throw new Error('Aucune donnée de réservation disponible');
    }

    // 1. Taux de conversion
    const totalReservations = this.sevenRoomsReservations.length;
    const confirmedReservations = this.sevenRoomsReservations.filter(
      r => r.status === 'confirmed'
    ).length;
    const conversionRate = (confirmedReservations / totalReservations) * 100;

    // 2. Panier moyen par segment
    const segmentBaskets = new Map<string, { total: number; count: number }>();
    this.sevenRoomsReservations
      .filter(r => r.status === 'confirmed' && r.segment)
      .forEach(reservation => {
        const segment = reservation.segment || 'non-défini';
        const basketPerPerson = reservation.total_spend / reservation.party_size;
        
        const current = segmentBaskets.get(segment) || { total: 0, count: 0 };
        segmentBaskets.set(segment, {
          total: current.total + basketPerPerson,
          count: current.count + 1
        });
      });

    const averageBasketBySegment = Array.from(segmentBaskets.entries()).map(
      ([segment, { total, count }]) => ({
        segment,
        averageBasket: total / count
      })
    );

    // 3. Revenus des expériences
    const experienceRevenue = this.sevenRoomsReservations
      .filter(r => r.status === 'confirmed' && r.package?.toLowerCase().includes('expérience'))
      .reduce((sum, r) => sum + r.total_spend, 0);

    // 4. Taux d'upsell
    const reservationsWithPackage = this.sevenRoomsReservations
      .filter(r => r.status === 'confirmed' && r.package && r.package.length > 0)
      .length;
    const upsellRate = (reservationsWithPackage / confirmedReservations) * 100;

    // 5. Panier moyen des clients expérience
    const experienceReservations = this.sevenRoomsReservations
      .filter(r => r.status === 'confirmed' && r.package?.toLowerCase().includes('expérience'));
    
    const experienceAverageBasket = experienceReservations.length > 0
      ? experienceReservations.reduce((sum, r) => sum + r.total_spend, 0) / experienceReservations.length
      : 0;

    return {
      conversionRate,
      averageBasketBySegment,
      experienceRevenue,
      upsellRate,
      experienceAverageBasket
    };
  }

  /**
   * Met à jour les données du dashboard avec les KPI calculés
   */
  public updateDashboardData(): void {
    const kpis = this.calculateKPIs();
    
    if (!this.processedData) {
      throw new Error('Les données n\'ont pas encore été traitées');
    }

    // Mise à jour des données du dashboard
    this.processedData = {
      ...this.processedData,
      kpis
    };
  }

  public getNoShowCancellationData(): string {
    return this.noShowCancellationData;
  }
} 