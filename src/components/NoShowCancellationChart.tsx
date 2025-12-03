import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartData,
  Scale,
  CoreScaleOptions
} from 'chart.js';
import { NoShowCancellationMetrics } from '../services/NoShowCancellationService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface NoShowCancellationChartProps {
  metrics: NoShowCancellationMetrics;
}

const PERIODS = [
  { label: 'Par jour', value: 'day' },
  { label: 'Par période', value: 'period' }
];

// Type guard pour vérifier si un élément a la propriété 'day'
function hasDayProperty(obj: any): obj is { day: string } {
  return obj && typeof obj === 'object' && 'day' in obj;
}

// Type guard pour vérifier si un élément a la propriété 'period'
function hasPeriodProperty(obj: any): obj is { period: string } {
  return obj && typeof obj === 'object' && 'period' in obj;
}

const NoShowCancellationChart: React.FC<NoShowCancellationChartProps> = ({ metrics }) => {
  const [period, setPeriod] = useState<'day' | 'period'>('day');
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    console.log('NoShowCancellationChart metrics:', metrics);
    const data = period === 'day' ? metrics.byDayOfWeek : metrics.byAdvanceBooking;
    console.log(`Data for ${period} view:`, data);

    // Traduire les jours de la semaine
    const translateDay = (day: string) => {
      const translations: Record<string, string> = {
        'Monday': 'Lundi',
        'Tuesday': 'Mardi',
        'Wednesday': 'Mercredi',
        'Thursday': 'Jeudi',
        'Friday': 'Vendredi',
        'Saturday': 'Samedi',
        'Sunday': 'Dimanche'
      };
      return translations[day] || day;
    };

    const labels = data.map(d => {
      if (period === 'day' && hasDayProperty(d)) {
        return translateDay(d.day);
      }
      if (period === 'period' && hasPeriodProperty(d)) {
        return d.period;
      }
      return '';
    });

    setChartData({
      labels,
      datasets: [
        {
          label: 'Taux d\'annulation',
          data: data.map(d => d.cancellationRate),
          backgroundColor: '#EF4444',
          borderRadius: 6,
          barPercentage: 0.6
        },
        {
          label: 'Taux de no-show',
          data: data.map(d => d.noShowRate),
          backgroundColor: '#F59E0B',
          borderRadius: 6,
          barPercentage: 0.6
        }
      ]
    });
  }, [metrics, period]);

  const customTooltip = (context: TooltipItem<'bar'>) => {
    const dataIndex = context.dataIndex;
    const data = period === 'day' ? metrics.byDayOfWeek : metrics.byAdvanceBooking;
    
    if (dataIndex >= 0 && dataIndex < data.length) {
      const entry = data[dataIndex];
      
      return [
        `Total couverts: ${entry.totalCovers}`,
        `Annulations: ${entry.cancelledCovers} (${entry.cancellationRate.toFixed(1)}%)`,
        `No-show: ${entry.noShowCovers} (${entry.noShowRate.toFixed(1)}%)`
      ];
    }
    
    return [];
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Taux d'annulation et de no-show</h2>
        <div className="flex gap-2">
          {PERIODS.map(opt => (
            <button
              key={opt.value}
              className={`px-3 py-1 rounded ${period === opt.value ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setPeriod(opt.value as 'day' | 'period')}
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
              beginAtZero: true,
              title: { display: true, text: 'Taux (%)' },
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          interaction: { mode: 'index' as const, intersect: false }
        }}
      />
      <div className="text-xs text-gray-500 mt-2">
        <span className="inline-block w-3 h-3 bg-red-500 mr-1 align-middle"></span> Taux d'annulation
        <span className="inline-block w-3 h-3 bg-yellow-500 mx-2 align-middle"></span> Taux de no-show
      </div>
    </div>
  );
};

export default NoShowCancellationChart; 