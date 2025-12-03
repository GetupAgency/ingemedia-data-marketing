import React from 'react';
import { AnalyticsDataSummary } from '../types/analytics';

interface AnalyticsSummaryProps {
  summary: AnalyticsDataSummary;
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ summary }) => {
  const { totalViews, totalUsers, avgEngagementTime, totalPaths, mostVisitedPath } = summary;
  
  // Métriques à afficher
  const metrics = [
    {
      label: 'Vues totales',
      value: totalViews.toLocaleString(),
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      label: 'Utilisateurs',
      value: totalUsers.toLocaleString(),
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      label: 'Temps d\'engagement moyen',
      value: `${avgEngagementTime.toFixed(2)}s`,
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: 'Chemins analysés',
      value: totalPaths.toLocaleString(),
      subtext: mostVisitedPath ? `Plus populaire: ${mostVisitedPath}` : '',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ];

  if (totalViews === 0 && totalUsers === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Résumé d'analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex"
          >
            <div className="mr-4 flex items-center justify-center">
              {metric.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
              {metric.subtext && <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSummary; 