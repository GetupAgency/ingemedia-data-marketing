import React, { useState, useEffect } from 'react';
import { Lock, Download, RefreshCw } from 'lucide-react';

interface ExamResult {
  url: string;
  pathname: string;
  uploadedAt: string;
  size: number;
}

/**
 * Page Enseignant - Consultation des résultats d'examen
 * Protégée par mot de passe
 */
const ExamResults: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedResult, setSelectedResult] = useState<any>(null);

  const teacherPassword = 'Grosac4Ever!';

  // Fonction de connexion
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === teacherPassword) {
      setIsAuthenticated(true);
      setError('');
      loadResults();
    } else {
      setError('Mot de passe incorrect');
      setPassword('');
    }
  };

  // Charger les résultats depuis l'API
  const loadResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/list-exam-results?password=${teacherPassword}`);
      const data = await response.json();
      
      if (data.success) {
        setResults(data.results);
      } else {
        setError('Erreur lors du chargement des résultats');
      }
    } catch (err) {
      setError('Erreur de connexion à l\'API');
    } finally {
      setLoading(false);
    }
  };

  // Charger un résultat spécifique
  const loadResultDetail = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedResult(data);
    } catch (err) {
      alert('Erreur lors du chargement du détail');
    }
  };

  // Télécharger tous les résultats en un seul fichier
  const downloadAllResults = async () => {
    const allResults = await Promise.all(
      results.map(async (result) => {
        const response = await fetch(result.url);
        return await response.json();
      })
    );

    const dataStr = JSON.stringify(allResults, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tous-resultats-examen-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Exporter en CSV
  const exportToCSV = async () => {
    const allResults = await Promise.all(
      results.map(async (result) => {
        const response = await fetch(result.url);
        return await response.json();
      })
    );

    let csv = 'Nom,Prénom,Date,Durée (min),Score,Pourcentage,Fondamentaux,Calculs,GA4,Diagnostic,Stratégie\n';
    
    allResults.forEach(result => {
      csv += `${result.etudiant.nom},${result.etudiant.prenom},${result.examen.date},${result.examen.duree_minutes},${result.examen.note_finale},${result.examen.pourcentage}%,`;
      csv += `${result.analyse_thematiques.fondamentaux.score}/8,`;
      csv += `${result.analyse_thematiques.calculs_kpis.score}/8,`;
      csv += `${result.analyse_thematiques.ga4_outils.score}/8,`;
      csv += `${result.analyse_thematiques.diagnostic.score}/8,`;
      csv += `${result.analyse_thematiques.strategie.score}/8\n`;
    });

    const csvBlob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `resultats-examen-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Page de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-24 pb-12 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white text-center">
              <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Lock className="w-12 h-12" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Résultats d'Examen</h1>
              <p className="text-indigo-100">Accès Enseignant</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mot de passe enseignant
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Entrez le mot de passe"
                    required
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-600 text-sm mt-2">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page de résultats
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Résultats d'Examen 2025</h1>
              <p className="text-gray-600">Consultez et exportez les résultats de vos étudiants</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={loadResults}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Actualiser
              </button>
              <button
                onClick={downloadAllResults}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4" />
                Tout en JSON
              </button>
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{results.length}</div>
            <div className="text-gray-600">Examens passés</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {results.length > 0 ? '~45' : '0'}
            </div>
            <div className="text-gray-600">Minutes (moyenne)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">40</div>
            <div className="text-gray-600">Questions</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Thématiques</div>
          </div>
        </div>

        {/* Liste des résultats */}
        {loading ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <RefreshCw className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Chargement des résultats...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun résultat pour le moment</h3>
            <p className="text-gray-600">Les résultats apparaîtront ici une fois que les étudiants auront passé l'examen</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Étudiant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fichier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((result, index) => {
                    const fileName = result.pathname.split('/').pop() || '';
                    const date = new Date(result.uploadedAt).toLocaleString('fr-FR');
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {fileName.replace('.json', '').replace(/-\d+$/, '').replace(/-/g, ' ')}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-xs font-mono text-gray-500">{fileName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => loadResultDetail(result.url)}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            Voir détail
                          </button>
                          <a
                            href={result.url}
                            download
                            className="text-green-600 hover:text-green-900"
                          >
                            Télécharger
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal détail */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedResult(null)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white sticky top-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {selectedResult.etudiant.prenom} {selectedResult.etudiant.nom}
                    </h2>
                    <p className="text-indigo-100">
                      Score : {selectedResult.examen.note_finale} ({selectedResult.examen.pourcentage}%)
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedResult(null)}
                    className="text-white hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Statistiques */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="bg-indigo-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      {selectedResult.analyse_thematiques.fondamentaux.score}/8
                    </div>
                    <div className="text-xs text-indigo-800">Fondamentaux</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {selectedResult.analyse_thematiques.calculs_kpis.score}/8
                    </div>
                    <div className="text-xs text-purple-800">Calculs</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-pink-600">
                      {selectedResult.analyse_thematiques.ga4_outils.score}/8
                    </div>
                    <div className="text-xs text-pink-800">GA4</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedResult.analyse_thematiques.diagnostic.score}/8
                    </div>
                    <div className="text-xs text-blue-800">Diagnostic</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {selectedResult.analyse_thematiques.strategie.score}/8
                    </div>
                    <div className="text-xs text-green-800">Stratégie</div>
                  </div>
                </div>

                {/* Détail des réponses */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">Détail des réponses</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {selectedResult.detail_reponses.map((reponse: any, idx: number) => (
                    <div key={idx} className={`p-4 rounded-lg border-2 ${
                      reponse.est_correcte 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          reponse.est_correcte 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white'
                        }`}>
                          {reponse.question_numero}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">Q{reponse.question_numero}</div>
                          <div className="text-sm text-gray-700 mb-2">
                            <strong>Réponse :</strong> {reponse.reponse_choisie}
                          </div>
                          {!reponse.est_correcte && (
                            <div className="text-sm text-gray-700">
                              <strong>Correct :</strong> {reponse.reponse_correcte}
                            </div>
                          )}
                        </div>
                        <div>
                          {reponse.est_correcte ? '✓' : '✗'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamResults;

