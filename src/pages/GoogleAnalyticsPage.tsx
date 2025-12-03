import React, { useState } from 'react';
import GoogleAnalyticsPanel from '../components/GoogleAnalyticsPanel';

const GoogleAnalyticsPage: React.FC = () => {
  const [viewId, setViewId] = useState<string>('');
  const [siteUrl, setSiteUrl] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier que les champs sont remplis
    if (viewId.trim() && siteUrl.trim()) {
      setIsConfigured(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Données Google Analytics & Search Console</h1>
      
      {!isConfigured ? (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Configuration</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="viewId" className="block text-sm font-medium text-gray-700 mb-1">
                ID de la vue Google Analytics
              </label>
              <input
                type="text"
                id="viewId"
                value={viewId}
                onChange={(e) => setViewId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: 123456789"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                L'ID de votre propriété GA4, visible dans Admin &gt; Propriété &gt; Infos sur la propriété
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                URL du site Search Console
              </label>
              <input
                type="url"
                id="siteUrl"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: https://www.example.com/"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                L'URL complète de votre site enregistré dans Google Search Console
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Afficher les données
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <button
              onClick={() => setIsConfigured(false)}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Modifier la configuration
            </button>
          </div>
          
          <GoogleAnalyticsPanel viewId={viewId} siteUrl={siteUrl} />
          
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Remarques importantes</h2>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Pour utiliser cette fonctionnalité, vous devez disposer d'un accès à Google Analytics 4 et Search Console.
              </li>
              <li>
                Vous devez avoir créé un projet dans la <a href="https://console.developers.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google API Console</a> et activé les APIs nécessaires.
              </li>
              <li>
                L'authentification utilise OAuth 2.0 et est sécurisée. Aucune donnée d'identification n'est stockée sur notre serveur.
              </li>
              <li>
                Les données sont récupérées directement depuis votre compte Google via les APIs officielles.
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default GoogleAnalyticsPage; 