import React, { useMemo, useState } from 'react';
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

interface ExperienceComparisonChartProps {
  reservations: SevenRoomsReservation[];
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

const getPeriodKey = (date: Date, period: string) => {
  if (period === 'day') return date.toISOString().slice(0, 10);
  if (period === 'week') {
    const d = new Date(date);
    const firstDay = d.getDate() - d.getDay();
    const weekStart = new Date(d.setDate(firstDay));
    return weekStart.toISOString().slice(0, 10);
  }
  if (period === 'month') return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
  return '';
};

const ExperienceComparisonChart: React.FC<ExperienceComparisonChartProps> = ({ reservations }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');

  // Filtrage des réservations confirmées et avec montant > 0
  const filtered = useMemo(() =>
    reservations.filter(r => r.status === 'confirmed' && r.total_spend > 0),
    [reservations]
  );

  // Regroupement par période
  const grouped = useMemo(() => {
    const map: Record<string, SevenRoomsReservation[]> = {};
    filtered.forEach(r => {
      const key = getPeriodKey(r.reservation_date, period);
      if (!map[key]) map[key] = [];
      map[key].push(r);
    });
    return map;
  }, [filtered, period]);

  // Générer les labels (périodes triées)
  const labels = useMemo(() => Object.keys(grouped).sort(), [grouped]);

  // Calcul des paniers moyens
  const globalAverages = labels.map(label => {
    const values = grouped[label]?.map(r => r.total_spend) || [];
    if (!values.length) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  });
  const experienceAverages = labels.map(label => {
    const values = grouped[label]?.filter(r => r.package && r.package.length > 0).map(r => r.total_spend) || [];
    if (!values.length) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  });

  // Calcul de l'écart en % (expérience vs global)
  const percentDiffs = experienceAverages.map((exp, i) => {
    const global = globalAverages[i];
    if (global === 0) return 0;
    return ((exp - global) / global) * 100;
  });

  // Préparation des datasets pour Chart.js
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Panier moyen global',
        data: globalAverages,
        backgroundColor: '#6366F1',
        borderRadius: 6,
        barPercentage: 0.45
      },
      {
        label: 'Panier moyen expérience',
        data: experienceAverages,
        backgroundColor: '#10B981',
        borderRadius: 6,
        barPercentage: 0.45
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Comparaison panier moyen : global vs expérience</h2>
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
                afterBody: (ctx) => {
                  const i = ctx[0].dataIndex;
                  const diff = percentDiffs[i];
                  if (diff === 0) return '';
                  return `Écart expérience vs global : ${diff > 0 ? '+' : ''}${diff.toFixed(1)}%`;
                }
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
        <span className="inline-block w-3 h-3 bg-green-500 mr-1 align-middle"></span> Panier moyen expérience
        <span className="inline-block w-3 h-3 bg-indigo-500 mx-2 align-middle"></span> Panier moyen global
        <span className="ml-2">Écart en % affiché dans le tooltip</span>
      </div>
    </div>
  );
};

export default ExperienceComparisonChart; 