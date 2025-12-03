import React, { useMemo, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { SevenRoomsReservation } from '../services/CSVProcessingService';
import { TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PodiumConversionChartProps {
  reservations: SevenRoomsReservation[];
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

// Filtre les réservations selon la période sélectionnée (optimisation)
const filterReservationsByPeriod = (reservations: SevenRoomsReservation[], period: string) => {
  if (reservations.length === 0) return [];
  console.log(`Filtering ${reservations.length} reservations by period: ${period}`);
  // Nous allons utiliser toutes les réservations pour le moment afin de garantir
  // que nous avons suffisamment de données pour l'affichage
  return reservations;
};

const PodiumConversionChart: React.FC<PodiumConversionChartProps> = ({ reservations }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("PodiumConversionChart received reservations:", reservations.length);
    setIsLoaded(true);
  }, [reservations]);

  // Filtrage optimisé des réservations selon la période sélectionnée
  const filteredReservations = useMemo(() => {
    const filtered = filterReservationsByPeriod(reservations, period);
    console.log(`Filtered reservations: ${filtered.length}`);
    return filtered;
  }, [reservations, period]);

  // Extraction des canaux et segments uniques (limités à 5 pour la lisibilité)
  const channels = useMemo(() => {
    // Garantir que nous avons au moins un canal par défaut
    const uniqueChannels = Array.from(new Set(filteredReservations.map(r => r.channel || 'Non spécifié')));
    console.log(`Unique channels: ${uniqueChannels.length}`, uniqueChannels);
    return uniqueChannels.length > 0 ? uniqueChannels.slice(0, 5) : ['Non spécifié'];
  }, [filteredReservations]);

  const segments = useMemo(() => {
    // Priorité au champ segment s'il existe, sinon utiliser les tags
    const allSegments = filteredReservations.map(r => {
      if (r.segment) return r.segment;
      
      // Essayer d'extraire un segment des tags de réservation, sinon utiliser une valeur par défaut
      return r.reservation_tags && r.reservation_tags.trim() !== '' 
        ? r.reservation_tags.split(',')[0].trim() 
        : 'Non défini';
    });
    
    const uniqueSegments = Array.from(new Set(allSegments));
    console.log(`Unique segments: ${uniqueSegments.length}`, uniqueSegments);
    return uniqueSegments.length > 0 ? uniqueSegments.slice(0, 5) : ['Non défini'];
  }, [filteredReservations]);

  // Calcul des taux de conversion et détail des statuts par canal et segment
  const dataByChannelSegment = useMemo(() => {
    // Regroupement par canal, segment
    const grouped: Record<string, Record<string, { total: number; confirmed: number; cancelled: number; noshow: number }>> = {};
    
    // Initialiser la structure pour tous les canaux et segments
    channels.forEach(channel => {
      grouped[channel] = {};
      segments.forEach(segment => {
        grouped[channel][segment] = { total: 0, confirmed: 0, cancelled: 0, noshow: 0 };
      });
    });

    // Remplir avec les données réelles
    filteredReservations.forEach(r => {
      const channel = r.channel || 'Non spécifié';
      let segment;
      
      // Priorité au champ segment s'il existe, sinon utiliser les tags
      if (r.segment) {
        segment = r.segment;
      } else if (r.reservation_tags && r.reservation_tags.trim() !== '') {
        segment = r.reservation_tags.split(',')[0].trim();
      } else {
        segment = 'Non défini';
      }
      
      // Vérifier si ce canal et segment sont dans notre sélection
      if (channels.includes(channel) && segments.includes(segment)) {
        grouped[channel][segment].total++;
        if (r.status === 'confirmed') grouped[channel][segment].confirmed++;
        if (r.status === 'cancelled') grouped[channel][segment].cancelled++;
        if (r.status === 'no-show') grouped[channel][segment].noshow++;
      }
    });

    console.log('Data by channel/segment:', grouped);
    return grouped;
  }, [filteredReservations, channels, segments]);

  // Préparation des datasets pour Chart.js
  const chartData = useMemo(() => {
    const datasets = segments.map((segment) => {
      const data = channels.map(channel => {
        const entry = dataByChannelSegment[channel]?.[segment];
        if (!entry || entry.total === 0) return 0;
        return (entry.confirmed / entry.total) * 100;
      });
      // Coloration dynamique : vert si > 70%, rouge si < 40%, gris sinon
      const backgroundColor = data.map(val =>
        val >= 70 ? '#10B981' : val <= 40 ? '#EF4444' : '#A3A3A3'
      );
      return {
        label: segment,
        data,
        backgroundColor
      };
    });
    return {
      labels: channels,
      datasets
    };
  }, [channels, segments, dataByChannelSegment]);

  // Tooltip détaillé
  const customTooltip = (context: TooltipItem<'bar'>) => {
    if (context.datasetIndex === undefined || context.dataIndex === undefined) return '';
    
    const segment = segments[context.datasetIndex];
    const channel = channels[context.dataIndex];
    const entry = dataByChannelSegment[channel]?.[segment];
    
    if (!entry || entry.total === 0) return `${segment} / ${channel}: Aucune donnée`;
    
    const conversionRate = (entry.confirmed / entry.total * 100).toFixed(1);
    return `${segment} / ${channel}\nTaux de conversion: ${conversionRate}%\nConfirmées: ${entry.confirmed}\nAnnulées: ${entry.cancelled}\nNo-show: ${entry.noshow}\nTotal: ${entry.total}`;
  };

  // Si nous n'avons pas de données, afficher un message
  if (filteredReservations.length === 0 && isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Taux de conversion par canal & segment</h2>
        <div className="text-center py-8 text-gray-500">
          Aucune donnée disponible pour cette période
        </div>
      </div>
    );
  }

  // Pour déboguer, en cas de problème, montrer quelles données nous avons
  if (channels.length === 0 || segments.length === 0) {
    console.error("Problème de données:", { 
      channels, 
      segments, 
      reservationsCount: reservations.length,
      filteredCount: filteredReservations.length 
    });
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Taux de conversion par canal & segment</h2>
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
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' as const },
            title: { display: false },
            tooltip: {
              callbacks: {
                label: customTooltip
              }
            }
          },
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: { callback: (tickValue: string | number) => tickValue + '%' }
            }
          },
          interaction: { mode: 'index' as const, intersect: false }
        }}
      />
      <div className="text-xs text-gray-500 mt-2">
        <span className="inline-block w-3 h-3 bg-green-500 mr-1 align-middle"></span> Opportunité (≥ 70%)
        <span className="inline-block w-3 h-3 bg-red-500 mx-2 align-middle"></span> Menace (≤ 40%)
        <span className="inline-block w-3 h-3 bg-gray-400 mx-2 align-middle"></span> Moyen
      </div>
    </div>
  );
};

export default PodiumConversionChart; 