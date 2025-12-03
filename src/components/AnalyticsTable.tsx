import React, { useState, useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { AnalyticsData } from '../types/analytics';

interface AnalyticsTableProps {
  data: AnalyticsData[];
}

const AnalyticsTable: React.FC<AnalyticsTableProps> = ({ data }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnHelper = createColumnHelper<AnalyticsData>();

  const columns = useMemo(() => {
    // Déterminer le type de données pour choisir les colonnes appropriées
    const isSearchConsoleFormat = data.length > 0 && 'path' in data[0] && 'views' in data[0];
    const isAnalyticsFormat = data.length > 0 && 'date' in data[0] && 'sessions' in data[0];

    if (isSearchConsoleFormat) {
      return [
        columnHelper.accessor('path', {
          header: 'Chemin de la page',
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('views', {
          header: 'Vues',
          cell: info => info.getValue().toLocaleString(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('activeUsers', {
          header: 'Utilisateurs actifs',
          cell: info => info.getValue().toLocaleString(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('averageEngagementTime', {
          header: 'Durée d\'engagement',
          cell: info => `${info.getValue().toFixed(2)}s`,
          footer: props => props.column.id,
        }),
        columnHelper.accessor(row => row.eventCount?.toLocaleString() || '-', {
          id: 'eventCount',
          header: 'Événements',
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
      ];
    } else if (isAnalyticsFormat) {
      return [
        columnHelper.accessor('date', {
          header: 'Date',
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('sessions', {
          header: 'Sessions',
          cell: info => info.getValue().toLocaleString(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('users', {
          header: 'Utilisateurs',
          cell: info => info.getValue().toLocaleString(),
          footer: props => props.column.id,
        }),
        columnHelper.accessor('bounceRate', {
          header: 'Taux de rebond',
          cell: info => `${info.getValue().toFixed(2)}%`,
          footer: props => props.column.id,
        }),
        columnHelper.accessor(row => row.pageviews?.toLocaleString() || '-', {
          id: 'pageviews',
          header: 'Pages vues',
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
      ];
    } else {
      // Format générique adapté aux données disponibles
      const columns = [];
      
      // Ajouter les colonnes en fonction des données disponibles
      if (data.length > 0) {
        const sampleRow = data[0];
        const keys = Object.keys(sampleRow);
        
        for (const key of keys) {
          if (key !== 'key' && key !== 'id') {
            columns.push(
              columnHelper.accessor(key as any, {
                header: key.charAt(0).toUpperCase() + key.slice(1),
                cell: info => {
                  const value = info.getValue();
                  if (typeof value === 'number') {
                    return value.toLocaleString();
                  }
                  return value;
                },
                footer: props => props.column.id,
              })
            );
          }
        }
      }
      
      return columns;
    }
  }, [data, columnHelper]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnFilters: true,
    enableGlobalFilter: true,
  });

  // Fonction pour gérer le filtrage global
  const handleGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
  };

  if (data.length === 0) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-500">Aucune donnée disponible. Veuillez importer un fichier CSV.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Données d'Analytics</h2>
        <div>
          <input
            value={globalFilter ?? ''}
            onChange={handleGlobalFilterChange}
            className="p-2 border border-gray-300 rounded-md w-64"
            placeholder="Rechercher..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="py-3 px-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      <span>
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'asc' ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )
                        ) : (
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-3 px-4 text-sm text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length > 10 && (
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <div>Affichage de {table.getRowModel().rows.length} lignes sur {data.length}</div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsTable; 