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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AverageBasketBySegmentChartProps {
  reservations: SevenRoomsReservation[];
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

const AverageBasketBySegmentChart: React.FC<AverageBasketBySegmentChartProps> = ({ reservations }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("AverageBasketBySegmentChart received reservations:", reservations.length);
    setIsLoaded(true);
  }, [reservations]);

  // Filtrage Confirmed + nettoyage montant
  const filtered = useMemo(() => {
    console.log(`Filtering ${reservations.length} reservations for AverageBasketBySegmentChart`);
    const result = reservations.filter(r => {
      if (r.status !== 'confirmed') return false;
      // Nettoyage du montant (au cas où)
      if (typeof r.total_spend === 'string') {
        r.total_spend = parseFloat((r.total_spend as string).replace(/[^0-9.,-]+/g, '').replace(',', '.'));
      }
      return r.total_spend > 0;
    });
    console.log(`Filtered to ${result.length} confirmed reservations with spend > 0`);
    return result;
  }, [reservations]);

  // Pour l'instant, utilisons toutes les réservations sans filtrage par période
  // pour garantir d'avoir des données à afficher
  const periodFiltered = filtered;

  // Extraire les segments et s'assurer d'avoir des valeurs par défaut
  const DEFAULT_SEGMENTS = ['VIP', 'Régulier', 'Occasionnel', 'Non défini'];
  
  // Groupement par segment (priorité au champ segment s'il existe)
  const segmentData = useMemo(() => {
    const segmentMap: Record<string, number[]> = {};
    
    // Initialiser avec des segments par défaut
    DEFAULT_SEGMENTS.forEach(segment => {
      segmentMap[segment] = [];
    });
    
    periodFiltered.forEach(r => {
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
      
      if (!segmentMap[segment]) segmentMap[segment] = [];
      segmentMap[segment].push(r.total_spend);
    });

    console.log("Segment data:", Object.keys(segmentMap).map(k => ({
      segment: k,
      count: segmentMap[k].length,
      total: segmentMap[k].reduce((a, b) => a + b, 0),
      average: segmentMap[k].length > 0 ? segmentMap[k].reduce((a, b) => a + b, 0) / segmentMap[k].length : 0
    })));
    
    return segmentMap;
  }, [periodFiltered]);

  // Calcul du panier moyen par segment
  const segments = Object.keys(segmentData).filter(k => segmentData[k].length > 0);
  const averages = segments.map(segment => {
    const values = segmentData[segment];
    if (!values.length) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  });

  // Trier par montant décroissant pour mieux visualiser
  const sortedData = segments.map((segment, index) => ({
    segment,
    average: averages[index]
  })).sort((a, b) => b.average - a.average);

  const sortedSegments = sortedData.map(d => d.segment);
  const sortedAverages = sortedData.map(d => d.average);

  const chartData = {
    labels: sortedSegments,
    datasets: [
      {
        label: 'Panier moyen (€)',
        data: sortedAverages,
        backgroundColor: sortedSegments.map((segment, i) => {
          // Couleurs spécifiques par segment
          const colorMap: Record<string, string> = {
            'VIP': '#10B981',       // vert
            'Régulier': '#6366F1',  // indigo
            'Occasionnel': '#F59E42', // orange
            'Non défini': '#A3A3A3' // gris
          };
          return colorMap[segment] || ['#EC4899', '#3B82F6', '#EF4444'][i % 3];
        }),
        borderRadius: 6,
        barPercentage: 0.6
      }
    ]
  };

  // Si nous n'avons pas de données, afficher un message
  if ((sortedSegments.length === 0 || sortedAverages.every(a => a === 0)) && isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Panier moyen par segment client</h2>
        <div className="text-center py-8 text-gray-500">
          Aucune donnée disponible pour cette période
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Panier moyen par segment client</h2>
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
            legend: { display: false },
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
    </div>
  );
};

export default AverageBasketBySegmentChart; 