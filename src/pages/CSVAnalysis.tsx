import React, { useState } from 'react';
import CSVUploader from '../components/CSVUploader';
import AnalyticsTable from '../components/AnalyticsTable';
import AnalyticsSummary from '../components/AnalyticsSummary';
import { AnalyticsData, CSVImportResult } from '../types/analytics';
import { generateAnalyticsSummary, convertToCSV } from '../utils/csvUtils';

const CSVAnalysis: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileProcessed, setFileProcessed] = useState<boolean>(false);

  // Gère les données importées depuis le composant CSVUploader
  const handleDataLoaded = (result: CSVImportResult) => {
    setIsLoading(false);
    setFileProcessed(true);
    
    if (result.isValid) {
      setAnalyticsData(result.data);
    } else {
      // Même en cas d'erreurs, on affiche les données valides s'il y en a
      if (result.data.length > 0) {
        setAnalyticsData(result.data);
      }
    }
  };

  // Télécharger les données au format CSV
  const handleDownloadCSV = () => {
    if (analyticsData.length === 0) return;
    
    const csvData = convertToCSV(analyticsData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'analytics_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculer le résumé des données d'analytics
  const analyticsSummary = generateAnalyticsSummary(analyticsData);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Logo Marketing Digital" className="h-12 w-auto mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Analyse de données CSV</h1>
            </div>
            <p className="text-gray-600">
              Importez un fichier CSV de Google Analytics pour visualiser et analyser vos données de trafic web.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Importer un fichier CSV</h2>
            <CSVUploader 
              onDataLoaded={handleDataLoaded} 
              isLoading={isLoading} 
            />
          </div>

          {analyticsData.length > 0 && (
            <>
              <AnalyticsSummary summary={analyticsSummary} />
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Données détaillées</h2>
                  <button
                    onClick={handleDownloadCSV}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Télécharger CSV
                  </button>
                </div>
                <AnalyticsTable data={analyticsData} />
              </div>
            </>
          )}
          
          {fileProcessed && analyticsData.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center py-8">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune donnée valide</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Le fichier importé ne contient pas de données valides ou a rencontré des erreurs.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setFileProcessed(false)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Importer un autre fichier
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CSVAnalysis; 