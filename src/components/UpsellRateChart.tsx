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

interface UpsellRateChartProps {
  reservations: SevenRoomsReservation[];
  groupBy?: 'segment' | 'channel';
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

const DEFAULT_SEGMENTS = ['VIP', 'Régulier', 'Occasionnel', 'Non défini'];

const UpsellRateChart: React.FC<UpsellRateChartProps> = ({ reservations, groupBy = 'segment' }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("UpsellRateChart received reservations:", reservations.length);
    setIsLoaded(true);
  }, [reservations]);

  // Filtrage Confirmed + nettoyage montant + période
  const filtered = useMemo(() => {
    console.log(`Filtering ${reservations.length} reservations for UpsellRateChart`);
    const result = reservations.filter(r => {
      if (!r || typeof r !== 'object') return false;
      if (r.status !== 'confirmed') return false;
      // S'assurer que la date est valide
      if (!r.reservation_date || isNaN(r.reservation_date.getTime())) return false;
      return true;
    });
    console.log(`Filtered to ${result.length} confirmed reservations with valid dates`);
    return result;
  }, [reservations]);

  // Filtrage par période
  const now = new Date();
  let start: Date;
  if (period === 'day') {
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  } else if (period === 'week') {
    const day = now.getDay();
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  } else {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
  }
  
  const periodFiltered = useMemo(() => {
    return filtered.filter(r => r.reservation_date >= start && r.reservation_date <= now);
  }, [filtered, start, now]);

  // Groupement par segment ou canal
  const groupMap = useMemo(() => {
    const result: Record<string, { total: number; upsell: number }> = {};
    
    // Initialiser les segments par défaut si on groupe par segment
    if (groupBy === 'segment') {
      DEFAULT_SEGMENTS.forEach(segment => {
        result[segment] = { total: 0, upsell: 0 };
      });
    }
    
    periodFiltered.forEach(r => {
      // Déterminer le groupe (segment ou canal)
      let group: string;
      if (groupBy === 'segment') {
        // Utiliser segment s'il existe, sinon extraire des tags ou utiliser "Non défini"
        if (r.segment) {
          group = r.segment;
        } else if (r.reservation_tags && r.reservation_tags.trim() !== '') {
          const tags = r.reservation_tags.toLowerCase();
          if (tags.includes('vip') || tags.includes('premium')) {
            group = 'VIP';
          } else if (tags.includes('régulier') || tags.includes('regular')) {
            group = 'Régulier';
          } else {
            group = 'Occasionnel';
          }
        } else {
          group = 'Non défini';
        }
      } else {
        // Groupement par canal
        group = r.channel || 'Non spécifié';
      }
      
      // Considérer qu'il y a upsell s'il y a un package ou si le montant est élevé
      const hasUpsell = !!r.package || r.total_spend > 150;
      
      if (!result[group]) result[group] = { total: 0, upsell: 0 };
      result[group].total++;
      if (hasUpsell) result[group].upsell++;
    });
    
    // Supprimer les groupes sans données
    Object.keys(result).forEach(group => {
      if (result[group].total === 0) {
        delete result[group];
      }
    });
    
    return result;
  }, [periodFiltered, groupBy]);

  // Calcul du taux d'upsell par groupe
  const groups = Object.keys(groupMap);
  const rates = groups.map(g => {
    const { total, upsell } = groupMap[g];
    if (!total) return 0;
    return (upsell / total) * 100;
  });

  // Trier par taux décroissant pour une meilleure visualisation
  const sortedData = groups.map((group, index) => ({
    group,
    rate: rates[index]
  })).sort((a, b) => b.rate - a.rate);

  const sortedGroups = sortedData.map(d => d.group);
  const sortedRates = sortedData.map(d => d.rate);

  const chartData = {
    labels: sortedGroups,
    datasets: [
      {
        label: "Taux d'upsell (%)",
        data: sortedRates,
        backgroundColor: sortedGroups.map((_, i) => ['#10B981', '#6366F1', '#F59E42', '#EC4899', '#A3A3A3'][i % 5]),
        borderRadius: 6,
        barPercentage: 0.6
      }
    ]
  };

  // Si nous n'avons pas de données, afficher un message
  if (sortedGroups.length === 0 && isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Taux d'upsell par {groupBy === 'segment' ? 'segment' : 'canal'}</h2>
        <div className="text-center py-8 text-gray-500">
          Aucune donnée disponible pour cette période
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Taux d'upsell par {groupBy === 'segment' ? 'segment' : 'canal'}</h2>
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
                label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)} %`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: "Taux d'upsell (%)" }
            }
          },
          interaction: { mode: 'index' as const, intersect: false }
        }}
      />
    </div>
  );
};

export default UpsellRateChart; 