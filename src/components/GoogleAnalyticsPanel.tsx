import React, { useState } from 'react';
import googleAnalyticsService from '../services/GoogleAnalyticsService';

interface GoogleAnalyticsPanelProps {
  viewId: string;
  siteUrl: string;
}

const GoogleAnalyticsPanel: React.FC<GoogleAnalyticsPanelProps> = ({ viewId, siteUrl }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    sessions: number;
    users: number;
    clicks?: number;
    ctr?: number;
  } | null>(null);

  // Charger les données analytiques
  const loadAnalyticsData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Vérifier si l'authentification est déjà effectuée
      if (!isAuthenticated) {
        await googleAnalyticsService.authenticate();
        setIsAuthenticated(true);
      }
      
      // Obtenir la plage de dates pour les 30 derniers jours
      const dateRange = googleAnalyticsService.getLast30Days();
      
      // Récupérer les données combinées
      const result = await googleAnalyticsService.getCombinedData(
        { viewId, dateRange },
        { siteUrl, dateRange }
      );
      
      console.log('Données analytiques chargées:', result);
      setData(result);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
      setError('Impossible de charger les données analytiques. Veuillez vérifier vos identifiants.');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Se déconnecter de Google
  const handleSignOut = () => {
    googleAnalyticsService.signOut();
    setIsAuthenticated(false);
    setData(null);
  };

  // Formater un nombre avec des séparateurs de milliers
  const formatNumber = (num: number | undefined): string => {
    if (num === undefined) return 'N/A';
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  // Formater un pourcentage
  const formatPercentage = (value: number | undefined): string => {
    if (value === undefined) return 'N/A';
    return new Intl.NumberFormat('fr-FR', { 
      style: 'percent', 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Statistiques Google (30 derniers jours)</h2>
      
      {!isAuthenticated ? (
        <div className="mb-4">
          <button
            onClick={loadAnalyticsData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Chargement...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
                Se connecter à Google
              </>
            )}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm text-blue-600 font-medium">Sessions</h3>
              <p className="text-2xl font-bold">{data ? formatNumber(data.sessions) : '...'}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm text-green-600 font-medium">Utilisateurs</h3>
              <p className="text-2xl font-bold">{data ? formatNumber(data.users) : '...'}</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm text-yellow-600 font-medium">Clics</h3>
              <p className="text-2xl font-bold">{data ? formatNumber(data.clicks) : '...'}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm text-purple-600 font-medium">CTR</h3>
              <p className="text-2xl font-bold">{data ? formatPercentage(data.ctr) : '...'}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Données des 30 derniers jours</p>
            <button
              onClick={handleSignOut}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Se déconnecter
            </button>
          </div>
        </>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default GoogleAnalyticsPanel; 