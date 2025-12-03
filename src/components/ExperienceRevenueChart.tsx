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

interface ExperienceRevenueChartProps {
  reservations: SevenRoomsReservation[];
}

const PERIODS = [
  { label: 'Jour', value: 'day' },
  { label: 'Semaine', value: 'week' },
  { label: 'Mois', value: 'month' }
];

const ExperienceRevenueChart: React.FC<ExperienceRevenueChartProps> = ({ reservations }) => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');

  // Filtrage Confirmed + nettoyage montant + période
  const filtered = useMemo(() =>
    reservations.filter(r => {
      if (r.status !== 'confirmed') return false;
      // Nettoyage du montant (au cas où)
      if (typeof r.total_spend === 'string') {
        r.total_spend = parseFloat((r.total_spend as string).replace(/[^0-9.,-]+/g, '').replace(',', '.'));
      }
      return r.total_spend > 0;
    }),
    [reservations]
  );

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
  const periodFiltered = filtered.filter(r => r.reservation_date >= start && r.reservation_date <= now);

  // Groupement par expérience/package (tag)
  const tagMap: Record<string, number> = {};
  periodFiltered.forEach(r => {
    const tag = r.reservation_tags || 'Non défini';
    if (!tagMap[tag]) tagMap[tag] = 0;
    tagMap[tag] += r.total_spend;
  });

  // Tri décroissant
  const sortedTags = Object.entries(tagMap)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
  const sortedValues = sortedTags.map(tag => tagMap[tag]);

  const chartData = {
    labels: sortedTags,
    datasets: [
      {
        label: 'Revenu total (€)',
        data: sortedValues,
        backgroundColor: sortedTags.map((_, i) => ['#10B981', '#6366F1', '#F59E42', '#EC4899', '#A3A3A3'][i % 5]),
        borderRadius: 6,
        barPercentage: 0.6
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Revenus générés par expérience/package</h2>
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
              title: { display: true, text: 'Revenu total (€)' }
            }
          },
          interaction: { mode: 'index' as const, intersect: false }
        }}
      />
    </div>
  );
};

export default ExperienceRevenueChart; 