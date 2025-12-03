import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
  Scale,
  CoreScaleOptions,
  Tick
} from 'chart.js';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import { fr } from 'date-fns/locale';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PodiumChartProps {
  data: {
    labels: string[];
    values: number[];
  };
  title: string;
  colors: string[];
  type: 'conversion' | 'basket' | 'cancellations';
  segments?: string[];
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  dateRange: {
    start: Date;
    end: Date;
  };
  segment?: string;
}

const PodiumChart: React.FC<PodiumChartProps> = ({ 
  data, 
  title, 
  colors, 
  type,
  segments = [],
  onFilterChange 
}) => {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: {
      start: startOfMonth(subMonths(new Date(), 1)),
      end: endOfMonth(new Date())
    },
    segment: undefined
  });

  const chartData = useMemo(() => ({
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  }), [data, colors]);

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            const value = context.raw as number;
            switch (type) {
              case 'conversion':
                return `${value.toFixed(1)}% de conversion`;
              case 'basket':
                return `${value.toFixed(2)}€ par personne`;
              case 'cancellations':
                return `${value.toFixed(1)}% d'annulations`;
              default:
                return value.toString();
            }
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function(this: Scale<CoreScaleOptions>, tickValue: number) {
            switch (type) {
              case 'conversion':
              case 'cancellations':
                return `${tickValue}%`;
              case 'basket':
                return `${tickValue}€`;
              default:
                return tickValue;
            }
          }
        }
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const handleDateChange = (start: Date, end: Date) => {
    const newFilters = { ...filters, dateRange: { start, end } };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSegmentChange = (segment: string | undefined) => {
    const newFilters = { ...filters, segment };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Période
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                value={format(filters.dateRange.start, 'yyyy-MM-dd')}
                onChange={(e) => handleDateChange(new Date(e.target.value), filters.dateRange.end)}
                className="border rounded-md px-2 py-1 text-sm"
              />
              <span className="self-center">à</span>
              <input
                type="date"
                value={format(filters.dateRange.end, 'yyyy-MM-dd')}
                onChange={(e) => handleDateChange(filters.dateRange.start, new Date(e.target.value))}
                className="border rounded-md px-2 py-1 text-sm"
              />
            </div>
          </div>
          
          {segments.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Segment
              </label>
              <select
                value={filters.segment || ''}
                onChange={(e) => handleSegmentChange(e.target.value || undefined)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value="">Tous les segments</option>
                {segments.map((segment) => (
                  <option key={segment} value={segment}>
                    {segment}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PodiumChart; 