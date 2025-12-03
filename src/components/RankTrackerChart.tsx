import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, Cell, LineChart, Line, PieChart, Pie } from 'recharts';

interface RankTrackerChartProps {
  showAnalysisKeys?: boolean;
}

/**
 * Composant graphique d'introduction basé sur les données de rank-tracker.csv
 * Analyse les positions SEO de Déco Charpente pour différents mots-clés
 */
const RankTrackerChart: React.FC<RankTrackerChartProps> = ({ showAnalysisKeys = false }) => {
  const [showCorrection, setShowCorrection] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Analyse complète des données du fichier rank-tracker.csv (484 mots-clés)
  const comprehensiveRankData = [
    // Top performers - Positions 1-3
    { keyword: "abri voitures", position: 1, visibility: 0.42, category: "Leader", color: "#059669", potential: "Maintenir", volume: "Élevé", competition: "Forte", trend: 29 },
    { keyword: "abri voiture bois 34", position: 1, visibility: 0, category: "Leader", color: "#059669", potential: "Maintenir", volume: "Moyen", competition: "Faible", trend: 2 },
    { keyword: "Carport en bois Aix en Provence", position: 2, visibility: 0.07, category: "Leader", color: "#059669", potential: "Maintenir", volume: "Faible", competition: "Faible", trend: 4 },
    
    // Strong performers - Positions 4-6
    { keyword: "abri voiture bois fermé", position: 4, visibility: 0.77, category: "Fort potentiel", color: "#10B981", potential: "Optimiser", volume: "Très élevé", competition: "Moyenne", trend: 33 },
    { keyword: "carport en bois", position: 4, visibility: 0.1, category: "Fort potentiel", color: "#10B981", potential: "Optimiser", volume: "Élevé", competition: "Forte", trend: 6 },
    { keyword: "auvent bois sur mesure", position: 5, visibility: 0.05, category: "Fort potentiel", color: "#10B981", potential: "Optimiser", volume: "Moyen", competition: "Moyenne", trend: 4 },
    { keyword: "abri voiture", position: 6, visibility: 0.52, category: "Fort potentiel", color: "#10B981", potential: "Optimiser", volume: "Très élevé", competition: "Très forte", trend: 29 },
    
    // Medium performers - Positions 7-15
    { keyword: "Pergola en bois Cannes", position: 7, visibility: 0.13, category: "Moyen", color: "#F59E0B", potential: "Travailler", volume: "Faible", competition: "Faible", trend: 8 },
    { keyword: "appentis bois", position: 9, visibility: 0, category: "Moyen", color: "#F59E0B", potential: "Travailler", volume: "Moyen", competition: "Moyenne", trend: 6 },
    { keyword: "appenti bois", position: 11, visibility: 0, category: "Moyen", color: "#F59E0B", potential: "Travailler", volume: "Faible", competition: "Faible", trend: 9 },
    { keyword: "pool house bois", position: 14, visibility: 0.28, category: "Moyen", color: "#F59E0B", potential: "Travailler", volume: "Élevé", competition: "Moyenne", trend: 0 },
    
    // Low performers - Positions 16+
    { keyword: "abri voiture en bois", position: 16, visibility: 0.15, category: "Faible", color: "#EF4444", potential: "Long terme", volume: "Élevé", competition: "Très forte", trend: -8 },
    { keyword: "abris voiture bois", position: 11, visibility: 0.38, category: "Faible", color: "#EF4444", potential: "Long terme", volume: "Moyen", competition: "Forte", trend: -2 },
    { keyword: "pergola bois sur mesure", position: 6, visibility: 0.15, category: "Fort potentiel", color: "#10B981", potential: "Optimiser", volume: "Élevé", competition: "Forte", trend: -1 },
    
    // Déclassés - Positions > 20
    { keyword: "abri voiture bois", position: 21, visibility: 0, category: "Critique", color: "#DC2626", potential: "Urgent", volume: "Très élevé", competition: "Très forte", trend: -14 },
    { keyword: "carport bois", position: 21, visibility: 0, category: "Critique", color: "#DC2626", potential: "Urgent", volume: "Élevé", competition: "Forte", trend: 0 }
  ];

  // Données statistiques complètes basées sur l'analyse des 484 mots-clés
  const positionDistribution = [
    { range: "1-3", count: 45, percentage: 9.3, label: "Leaders (1-3)", color: "#059669" },
    { range: "4-6", count: 38, percentage: 7.9, label: "Fort potentiel (4-6)", color: "#10B981" },
    { range: "7-10", count: 42, percentage: 8.7, label: "Bon (7-10)", color: "#34D399" },
    { range: "11-15", count: 55, percentage: 11.4, label: "Moyen (11-15)", color: "#F59E0B" },
    { range: "16-20", count: 48, percentage: 9.9, label: "Faible (16-20)", color: "#EF4444" },
    { range: "> 20", count: 256, percentage: 52.8, label: "Critique (>20)", color: "#DC2626" }
  ];

  // Analyse par catégorie de mots-clés
  const categoryAnalysis = [
    { category: "Abri voiture", count: 89, avgPosition: 12.3, topPosition: 1, potential: "Élevé" },
    { category: "Carport", count: 67, avgPosition: 8.7, topPosition: 2, potential: "Très élevé" },
    { category: "Pergola", count: 78, avgPosition: 15.2, topPosition: 6, potential: "Moyen" },
    { category: "Pool house", count: 45, avgPosition: 18.4, topPosition: 2, potential: "Élevé" },
    { category: "Appentis/Auvent", count: 92, avgPosition: 14.6, topPosition: 5, potential: "Moyen" },
    { category: "Géolocalisés", count: 113, avgPosition: 6.8, topPosition: 1, potential: "Maintenir" }
  ];

  // Données pour l'analyse des tendances
  const trendAnalysis = [
    { month: "Jan", positions_1_3: 42, positions_4_10: 76, positions_11_20: 98, positions_20_plus: 268 },
    { month: "Fév", positions_1_3: 44, positions_4_10: 78, positions_11_20: 102, positions_20_plus: 260 },
    { month: "Mar", positions_1_3: 45, positions_4_10: 80, positions_11_20: 103, positions_20_plus: 256 },
  ];

  // Matrice de priorisation (Position vs Volume de recherche estimé)
  const priorityMatrix = comprehensiveRankData.map(item => ({
    ...item,
    volumeScore: item.volume === "Très élevé" ? 5 : item.volume === "Élevé" ? 4 : item.volume === "Moyen" ? 3 : item.volume === "Faible" ? 2 : 1,
    positionScore: item.position <= 3 ? 5 : item.position <= 6 ? 4 : item.position <= 10 ? 3 : item.position <= 15 ? 2 : 1,
    priorityScore: function() { return this.volumeScore + (6 - this.positionScore); }
  }));

  // Questions d'analyse pour l'exercice
  const analysisQuestions = [
    {
      id: 1,
      question: "Analysez la répartition des 484 mots-clés. Quel est le principal défi SEO de Déco Charpente ?",
      answer: "52.8% des mots-clés sont en position >20, ce qui représente 256 mots-clés critiques. Le principal défi est de réduire cette longue traîne de mots-clés mal positionnés qui représentent plus de la moitié du portefeuille.",
      difficulty: "Facile"
    },
    {
      id: 2,
      question: "Comparez les performances des catégories 'Carport' vs 'Pergola'. Quelle stratégie recommandez-vous ?",
      answer: "Les carports ont une position moyenne de 8.7 vs 15.2 pour les pergolas. Stratégie : Concentrer les efforts sur les carports (ROI plus rapide) tout en développant une stratégie long terme pour les pergolas qui ont un potentiel élevé mais nécessitent plus de travail.",
      difficulty: "Moyen"
    },
    {
      id: 3,
      question: "Analysez l'impact des mots-clés géolocalisés. Pourquoi performent-ils mieux ?",
      answer: "Les mots-clés géolocalisés ont une position moyenne de 6.8 (la meilleure) car ils ont moins de concurrence et correspondent à la stratégie locale de Déco Charpente. L'entreprise domine son marché géographique.",
      difficulty: "Moyen"
    },
    {
      id: 4,
      question: "Créez une matrice de priorisation basée sur Position vs Volume. Quels mots-clés traiter en priorité ?",
      answer: "Priorité 1: 'abri voiture bois fermé' (pos.4, volume très élevé) - fort ROI. Priorité 2: 'pool house bois' (pos.14, volume élevé) - potentiel important. Éviter: mots-clés génériques très concurrentiels comme 'abri voiture bois' (pos.21).",
      difficulty: "Difficile"
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg max-w-xs">
          <p className="font-semibold text-gray-800 text-sm">{data.keyword || data.category}</p>
          {data.position && <p className="text-xs text-gray-600">Position: {data.position}</p>}
          {data.visibility !== undefined && <p className="text-xs text-gray-600">Visibilité: {data.visibility}</p>}
          {data.volume && <p className="text-xs text-gray-600">Volume: {data.volume}</p>}
          {data.potential && <p className="text-xs font-medium text-indigo-600">Action: {data.potential}</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* En-tête avec bouton de correction */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            📈 Analyse SEO Avancée : Déco Charpente
          </h2>
          <p className="text-gray-600">
            Analyse complète de 484 mots-clés avec graphiques interactifs et tableau de priorisation
          </p>
        </div>
        <button
          onClick={() => setShowCorrection(!showCorrection)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            showCorrection 
              ? 'bg-red-100 text-red-700 hover:bg-red-200' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {showCorrection ? '🙈 Masquer correction' : '👁️ Voir correction'}
        </button>
      </div>

      {/* Navigation par onglets */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'overview', label: '📊 Vue d\'ensemble', icon: '📊' },
          { id: 'distribution', label: '📈 Distribution', icon: '📈' },
          { id: 'categories', label: '🏷️ Catégories', icon: '🏷️' },
          { id: 'matrix', label: '🎯 Matrice', icon: '🎯' },
          { id: 'table', label: '📋 Tableau', icon: '📋' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === tab.id
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Position vs Visibilité (Échantillon représentatif)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart data={comprehensiveRankData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="position" 
                  type="number" 
                  domain={[0, 25]}
                  label={{ value: 'Position Google', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  dataKey="visibility" 
                  type="number" 
                  domain={[0, 1]}
                  label={{ value: 'Visibilité', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Scatter dataKey="visibility" fill="#8884d8">
                  {comprehensiveRankData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'distribution' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Distribution complète des 484 mots-clés</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={positionDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis label={{ value: 'Nombre de mots-clés', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    `${value} mots-clés (${positionDistribution.find(d => d.count === value)?.percentage}%)`, 
                    'Répartition'
                  ]}
                />
                <Bar dataKey="count">
                  {positionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Répartition en camembert</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={positionDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percentage }) => `${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {positionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance par catégorie de produits</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categoryAnalysis} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 20]} />
              <YAxis dataKey="category" type="category" width={100} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="avgPosition" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryAnalysis.map((cat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{cat.category}</h4>
                <p className="text-sm text-gray-600">{cat.count} mots-clés</p>
                <p className="text-sm text-gray-600">Position moy: {cat.avgPosition}</p>
                <p className="text-sm font-medium text-indigo-600">Potentiel: {cat.potential}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'matrix' && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Matrice de priorisation : Position vs Volume</h3>
          <ResponsiveContainer width="100%" height={500}>
            <ScatterChart data={priorityMatrix}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="position" 
                type="number" 
                domain={[0, 25]}
                label={{ value: 'Position (plus bas = mieux)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                dataKey="volumeScore" 
                type="number" 
                domain={[1, 5]}
                label={{ value: 'Score Volume', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="volumeScore" fill="#8884d8">
                {priorityMatrix.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Lecture de la matrice</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li><strong>Quadrant haut-gauche</strong> : Position élevée + Volume élevé = 🎯 Priorité maximale</li>
              <li><strong>Quadrant haut-droite</strong> : Position faible + Volume élevé = ⚡ Opportunités</li>
              <li><strong>Quadrant bas-gauche</strong> : Position élevée + Volume faible = 🔒 Maintenir</li>
              <li><strong>Quadrant bas-droite</strong> : Position faible + Volume faible = ⏳ Long terme</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'table' && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tableau de priorisation des mots-clés</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mot-clé</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visibilité</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tendance</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comprehensiveRankData
                  .sort((a, b) => {
                    const aScore = (a.volume === "Très élevé" ? 5 : a.volume === "Élevé" ? 4 : 3) + (25 - a.position);
                    const bScore = (b.volume === "Très élevé" ? 5 : b.volume === "Élevé" ? 4 : 3) + (25 - b.position);
                    return bScore - aScore;
                  })
                  .map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.keyword}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.position <= 3 ? 'bg-green-100 text-green-800' :
                        item.position <= 6 ? 'bg-blue-100 text-blue-800' :
                        item.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                        item.position <= 15 ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.position}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.visibility}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.volume === "Très élevé" ? 'bg-purple-100 text-purple-800' :
                        item.volume === "Élevé" ? 'bg-indigo-100 text-indigo-800' :
                        item.volume === "Moyen" ? 'bg-gray-100 text-gray-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.volume}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      <span className={`inline-flex items-center ${
                        item.trend > 0 ? 'text-green-600' : item.trend < 0 ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {item.trend > 0 ? '↗️' : item.trend < 0 ? '↘️' : '→'} {item.trend}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.potential === "Maintenir" ? 'bg-green-100 text-green-800' :
                        item.potential === "Optimiser" ? 'bg-blue-100 text-blue-800' :
                        item.potential === "Travailler" ? 'bg-yellow-100 text-yellow-800' :
                        item.potential === "Long terme" ? 'bg-gray-100 text-gray-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.potential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Questions d'analyse avec correction cachée */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">🎓 Exercice d'analyse</h3>
        <div className="space-y-4">
          {analysisQuestions.map((q) => (
            <div key={q.id} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">Question {q.id}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  q.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                  q.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {q.difficulty}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{q.question}</p>
              {showCorrection && (
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-blue-800 text-sm"><strong>Réponse :</strong> {q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="/rank-tracker-analysis" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.253V16.747M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Exercice complet avec correction détaillée
          </a>
        </div>
      </div>
    </div>
  );
};

export default RankTrackerChart;
