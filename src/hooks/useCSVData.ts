import { useState, useEffect } from 'react';
import { 
  CSVProcessingService, 
  SevenRoomsReservation, 
  ProcessedData,
  ReservationMetrics 
} from '../services/CSVProcessingService';
import { NoShowCancellationMetrics, NoShowCancellationService } from '../services/NoShowCancellationService';

export interface CSVData {
  sevenRoomsReservations: SevenRoomsReservation[];
  lightspeedData: Array<{
    duration: number;
    segment: string;
  }>;
  processedData: ProcessedData;
  reservationMetrics: ReservationMetrics;
  noShowCancellationData: string;
  noShowMetrics?: NoShowCancellationMetrics;
}

export const useCSVData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CSVData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const service = CSVProcessingService.getInstance();
        await service.loadCSVData();
        await service.parseSevenRoomsCSV();
        
        // Traiter les données de no-show et d'annulations
        const noShowCancellationData = service.getNoShowCancellationData();
        const noShowMetrics = noShowCancellationData 
          ? await NoShowCancellationService.processData(noShowCancellationData)
          : undefined;
        
        setData({
          sevenRoomsReservations: service.getSevenRoomsReservations(),
          lightspeedData: [], // Pour l'instant vide car nous n'avons pas encore implémenté le parsing Lightspeed
          processedData: service.getProcessedData(),
          reservationMetrics: service.calculateReservationMetrics(),
          noShowCancellationData: noShowCancellationData,
          noShowMetrics
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, isLoading, error };
}; 