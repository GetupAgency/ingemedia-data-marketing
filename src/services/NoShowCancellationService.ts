import Papa, { ParseResult } from 'papaparse';

interface NoShowCancellationData {
  dayOfWeek: string;
  advanceBooking: string;
  totalCovers: number;
  cancelledCovers: number;
  noShowCovers: number;
}

interface NoShowCancellationRecord {
  [key: string]: string;
}

export interface NoShowCancellationMetrics {
  byDayOfWeek: {
    day: string;
    totalCovers: number;
    cancelledCovers: number;
    noShowCovers: number;
    cancellationRate: number;
    noShowRate: number;
  }[];
  byAdvanceBooking: {
    period: string;
    totalCovers: number;
    cancelledCovers: number;
    noShowCovers: number;
    cancellationRate: number;
    noShowRate: number;
  }[];
  overall: {
    totalCovers: number;
    cancelledCovers: number;
    noShowCovers: number;
    cancellationRate: number;
    noShowRate: number;
  };
}

export class NoShowCancellationService {
  private static parseData(csvContent: string): Promise<NoShowCancellationData[]> {
    return new Promise((resolve, reject) => {
      // Création manuelle des données de no-show
      try {
        console.log("Processing CSV content manually...");
        
        // Séparer les lignes
        const lines = csvContent.split('\n');
        console.log(`CSV has ${lines.length} lines`);
        
        if (lines.length < 3) {
          console.error("CSV format unexpected: less than 3 lines");
          return resolve([]);
        }
        
        // Les jours que nous allons extraire
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log("Days to process:", days);
        
        const data: NoShowCancellationData[] = [];
        
        // Pour chaque ligne de données (à partir de la ligne 2)
        for (let i = 2; i < lines.length; i++) {
          if (!lines[i].trim()) continue;
          
          const values = lines[i].split(',');
          const advanceBooking = values[0];
          
          console.log(`Processing line: ${advanceBooking}, values length: ${values.length}`);
          
          // Pour chaque jour
          days.forEach((day, dayIndex) => {
            // Les valeurs sont organisées par jour, avec 3 colonnes par jour (Total, Cancelled, NoShow)
            // Donc pour "Monday", on commence à l'index 1 (après la colonne "Advance Booking")
            // Pour "Tuesday", on commence à l'index 4, etc.
            const startIndex = 1 + (dayIndex * 3);
            
            if (startIndex + 2 < values.length) {
              const totalCoversStr = values[startIndex];
              const cancelledCoversStr = values[startIndex + 1];
              const noShowCoversStr = values[startIndex + 2];
              
              const totalCovers = parseInt(totalCoversStr.replace(/[^\d.-]/g, '')) || 0;
              const cancelledCovers = Math.abs(parseInt(cancelledCoversStr.replace(/[^\d.-]/g, '')) || 0);
              const noShowCovers = parseInt(noShowCoversStr.replace(/[^\d.-]/g, '')) || 0;
              
              data.push({
                dayOfWeek: day,
                advanceBooking,
                totalCovers,
                cancelledCovers,
                noShowCovers
              });
              
              console.log(`Added data for ${day}, ${advanceBooking}: total=${totalCovers}, cancelled=${cancelledCovers}, noShow=${noShowCovers}`);
            }
          });
        }
        
        console.log(`Total data points: ${data.length}`);
        console.log("Sample data points:", data.slice(0, 5));
        
        resolve(data);
      } catch (error) {
        console.error("Error processing CSV manually:", error);
        reject(error);
      }
    });
  }

  private static calculateMetrics(data: NoShowCancellationData[]): NoShowCancellationMetrics {
    console.log("Calculating metrics from data:", data.length);
    
    // Calcul par jour de la semaine
    const byDayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
      const dayData = data.filter(d => d.dayOfWeek === day);
      const totalCovers = dayData.reduce((sum, d) => sum + d.totalCovers, 0);
      const cancelledCovers = dayData.reduce((sum, d) => sum + d.cancelledCovers, 0);
      const noShowCovers = dayData.reduce((sum, d) => sum + d.noShowCovers, 0);

      return {
        day,
        totalCovers,
        cancelledCovers,
        noShowCovers,
        cancellationRate: totalCovers > 0 ? (cancelledCovers / totalCovers) * 100 : 0,
        noShowRate: totalCovers > 0 ? (noShowCovers / totalCovers) * 100 : 0
      };
    });

    // Calcul par période de réservation
    const periods = Array.from(new Set(data.map(d => d.advanceBooking))).sort();
    const byAdvanceBooking = periods.map(period => {
      const periodData = data.filter(d => d.advanceBooking === period);
      const totalCovers = periodData.reduce((sum, d) => sum + d.totalCovers, 0);
      const cancelledCovers = periodData.reduce((sum, d) => sum + d.cancelledCovers, 0);
      const noShowCovers = periodData.reduce((sum, d) => sum + d.noShowCovers, 0);

      return {
        period,
        totalCovers,
        cancelledCovers,
        noShowCovers,
        cancellationRate: totalCovers > 0 ? (cancelledCovers / totalCovers) * 100 : 0,
        noShowRate: totalCovers > 0 ? (noShowCovers / totalCovers) * 100 : 0
      };
    });

    // Calcul global
    const totalCovers = data.reduce((sum, d) => sum + d.totalCovers, 0);
    const cancelledCovers = data.reduce((sum, d) => sum + d.cancelledCovers, 0);
    const noShowCovers = data.reduce((sum, d) => sum + d.noShowCovers, 0);

    const metrics = {
      byDayOfWeek,
      byAdvanceBooking,
      overall: {
        totalCovers,
        cancelledCovers,
        noShowCovers,
        cancellationRate: totalCovers > 0 ? (cancelledCovers / totalCovers) * 100 : 0,
        noShowRate: totalCovers > 0 ? (noShowCovers / totalCovers) * 100 : 0
      }
    };
    
    console.log("Calculated metrics:", metrics);
    return metrics;
  }

  public static async processData(csvContent: string): Promise<NoShowCancellationMetrics> {
    console.log("Processing NoShow data, content length:", csvContent.length);
    const parsedData = await this.parseData(csvContent);
    return this.calculateMetrics(parsedData);
  }
} 