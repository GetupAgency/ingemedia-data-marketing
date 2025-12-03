import React, { useMemo, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { SevenRoomsReservation } from '../services/CSVProcessingService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AverageSpendChartProps {
  reservations: SevenRoomsReservation[];
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

// Fonction pour obtenir la clé de période (jour, semaine, mois)
const getPeriodKey = (date: Date, period: string): string => {
  // Vérifier que la date est valide avec plus de détails
  if (!date) {
    console.error('Date inexistante:', date);
    return 'Date invalide';
  }
  
  if (isNaN(date.getTime())) {
    console.error('Date invalide (NaN):', date, 'Type:', typeof date, 'Constructor:', date.constructor.name);
    return 'Date invalide';
  }
  
  try {
    if (period === 'day') {
      return format(date, 'yyyy-MM-dd');
    } else if (period === 'week') {
      return `S${format(date, 'w/yyyy', { locale: fr })}`;
    } else {
      return format(date, 'MMM yyyy', { locale: fr });
    }
  } catch (error) {
    console.error('Erreur lors du formatage de la date:', date, error);
    return 'Date invalide';
  }
};

const COLORS = [
  '#10B981', // vert - VIP
  '#6366F1', // indigo - Régulier
  '#F59E42', // orange - Occasionnel
  '#A3A3A3', // gris - Non défini
  '#EC4899', // rose
  '#EF4444', // rouge
  '#3B82F6', // bleu
];

const DEFAULT_SEGMENTS = ['VIP', 'Régulier', 'Occasionnel', 'Non défini'];

const AverageSpendChart: React.FC<AverageSpendChartProps> = ({ reservations }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("AverageSpendChart received reservations:", reservations.length);
    setIsLoaded(true);
  }, [reservations]);

  // Filtrage des réservations confirmées et avec montant > 0
  const filtered = useMemo(() => {
    console.log(`Filtering ${reservations.length} reservations for AverageSpendChart`);
    const result = reservations.filter(r => r.status === 'confirmed' && r.total_spend > 0);
    console.log(`Filtered to ${result.length} confirmed reservations with spend > 0`);
    return result;
  }, [reservations]);

  // Regroupement par période et segment
  const grouped = useMemo(() => {
    console.log('Création du regroupement pour', filtered.length, 'réservations avec période', period);
    
    const map: Record<string, Record<string, number[]>> = {};
    
    // Initialiser la structure pour toutes les périodes des 3 derniers mois
    let startDate = new Date();
    if (period === 'day') {
      startDate = subDays(startDate, 30); // 30 derniers jours
    } else if (period === 'week') {
      startDate = subDays(startDate, 90); // environ 12 semaines
    } else {
      startDate = subDays(startDate, 180); // environ 6 mois
    }
    
    // Générer les périodes pour garantir une continuité
    let currentDate = new Date(startDate);
    const now = new Date();
    while (currentDate <= now) {
      const key = getPeriodKey(currentDate, period);
      map[key] = {};
      DEFAULT_SEGMENTS.forEach(segment => {
        map[key][segment] = [];
      });
      
      if (period === 'day') {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      } else if (period === 'week') {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
      } else {
        currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
      }
    }
    
    // Aperçu des premières réservations pour débogage
    if (filtered.length > 0) {
      console.log('Exemple de réservation:', filtered[0]);
      console.log('Date de la première réservation:', filtered[0].reservation_date);
      console.log('Type de la date:', typeof filtered[0].reservation_date);
      console.log('Est une instance de Date:', filtered[0].reservation_date instanceof Date);
    }
    
    // Remplir avec les données réelles
    filtered.forEach((r, index) => {
      // Vérifier que la date de réservation est valide de façon détaillée
      if (!r.reservation_date) {
        console.error(`Réservation #${index} (${r.id_reservation}) a une date null:`, r.reservation_date);
        return; // Ignorer cette réservation
      }
      
      const dateType = typeof r.reservation_date;
      const isDateInstance = r.reservation_date instanceof Date;
      
      if (dateType !== 'object' || !isDateInstance) {
        console.error(`Réservation #${index} (${r.id_reservation}) a une date de type incorrect:`, 
          dateType, isDateInstance, r.reservation_date);
        
        // Tenter de convertir explicitement si c'est une chaîne de caractères
        if (dateType === 'string') {
          try {
            r.reservation_date = new Date(r.reservation_date as unknown as string);
            console.log(`Conversion en Date réussie pour ${r.id_reservation}`);
          } catch (error) {
            console.error(`Échec de conversion pour ${r.id_reservation}:`, error);
            return; // Ignorer cette réservation
          }
        } else {
          return; // Ignorer cette réservation si ce n'est pas une chaîne
        }
      }
      
      if (isNaN(r.reservation_date.getTime())) {
        console.error(`Réservation #${index} (${r.id_reservation}) a une date invalide:`, r.reservation_date);
        return; // Ignorer cette réservation
      }
      
      const key = getPeriodKey(r.reservation_date, period);
      
      // Ignorer les entrées avec clé 'Date invalide'
      if (key === 'Date invalide') {
        console.warn(`Clé de période invalide pour réservation #${index} (${r.id_reservation})`);
        return;
      }
      
      // Utiliser segment s'il existe, sinon extraire des tags ou utiliser "Non défini"
      let segment: string;
      if (r.segment) {
        segment = r.segment;
      } else if (r.reservation_tags && r.reservation_tags.trim() !== '') {
        const tags = r.reservation_tags.toLowerCase();
        if (tags.includes('vip') || tags.includes('premium')) {
          segment = 'VIP';
        } else if (tags.includes('régulier') || tags.includes('regular')) {
          segment = 'Régulier';
        } else {
          segment = 'Occasionnel';
        }
      } else {
        segment = 'Non défini';
      }
      
      if (!map[key]) map[key] = {};
      if (!map[key][segment]) map[key][segment] = [];
      map[key][segment].push(r.total_spend);
    });
    
    return map;
  }, [filtered, period]);

  // Générer les labels (périodes triées)
  const labels = useMemo(() => Object.keys(grouped).sort(), [grouped]);

  // Segments uniques (limiter aux segments par défaut pour la lisibilité)
  const segments = useMemo(() => {
    return DEFAULT_SEGMENTS.filter(segment => {
      // Vérifier si ce segment a des données dans au moins une période
      return Object.values(grouped).some(periodData => 
        periodData[segment] && periodData[segment].length > 0
      );
    });
  }, [grouped]);

  // Calcul du panier moyen par segment et période
  const dataBySegment: Record<string, number[]> = {};
  segments.forEach(segment => {
    dataBySegment[segment] = labels.map(label => {
      const values = grouped[label]?.[segment] || [];
      if (!values.length) return 0;
      return values.reduce((a, b) => a + b, 0) / values.length;
    });
  });

  // Créer les datasets avec les couleurs appropriées
  const datasets = segments.map((segment, index) => {
    const colorMap: Record<string, string> = {
      'VIP': COLORS[0],
      'Régulier': COLORS[1],
      'Occasionnel': COLORS[2],
      'Non défini': COLORS[3],
    };
    
    return {
      label: segment,
      data: dataBySegment[segment],
      borderColor: colorMap[segment] || COLORS[index + 4 % COLORS.length],
      backgroundColor: `${colorMap[segment] || COLORS[index + 4 % COLORS.length]}33`, // avec transparence
      tension: 0.3,
      fill: true
    };
  });

  const chartData = {
    labels,
    datasets
  };

  // Si nous n'avons pas de données, afficher un message
  if (segments.length === 0 && isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Évolution du panier moyen par segment</h2>
        <div className="text-center py-8 text-gray-500">
          Aucune donnée disponible pour cette période
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Évolution du panier moyen par segment</h2>
        <div className="flex gap-2">
          {PERIODS.map(opt => (
            <button
              key={opt.value}
              className={`px-3 py-1 rounded ${period === opt.value ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setPeriod(opt.value as 'day' | 'week' | 'month')}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' as const },
            title: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} €`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Panier moyen (€)' }
            }
          },
          interaction: { mode: 'index' as const, intersect: false }
        }}
      />
      <div className="text-xs text-gray-500 mt-2">
        <span className="inline-block w-3 h-3 bg-green-500 mr-1 align-middle"></span> VIP
        <span className="inline-block w-3 h-3 bg-indigo-500 mx-2 align-middle"></span> Régulier
        <span className="inline-block w-3 h-3 bg-orange-500 mx-2 align-middle"></span> Occasionnel
      </div>
    </div>
  );
};

export default AverageSpendChart; 