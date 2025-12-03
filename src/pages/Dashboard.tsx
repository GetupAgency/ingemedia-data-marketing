import React from 'react';
import ComprehensiveDashboard from '../components/ComprehensiveDashboard';
import RankTrackerChart from '../components/RankTrackerChart';

/**
 * Page Dashboard - Accueil avec dashboard data marketing complet
 */
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du dashboard */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Plateforme d'apprentissage data marketing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez la puissance de l'analyse de données marketing à travers des exemples concrets 
            et des outils professionnels. Chaque graphique illustre un cas d'usage réel.
          </p>
        </div>

        {/* Graphique d'introduction - Analyse SEO */}
        <div className="mb-16">
          <RankTrackerChart />
        </div>

        {/* Dashboard complet */}
        <ComprehensiveDashboard />

        {/* Section call-to-action */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/learn" className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🎓</div>
            <h3 className="text-xl font-bold mb-2">Apprendre</h3>
            <p className="text-indigo-100 text-sm">
              Formation intensive complète avec exercices pratiques et quiz interactifs
            </p>
          </a>

          <a href="/quizzes" className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-2">Évaluer</h3>
            <p className="text-green-100 text-sm">
              Testez vos connaissances avec des quiz adaptés au niveau de chacun
            </p>
          </a>

          <a href="/tools" className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold mb-2">Explorer</h3>
            <p className="text-orange-100 text-sm">
              Découvrez les outils professionnels du data marketing moderne
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 