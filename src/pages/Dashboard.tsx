import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import ComprehensiveDashboard from '../components/ComprehensiveDashboard';
import RankTrackerChart from '../components/RankTrackerChart';
import { teacherPassword } from '../data/unifiedLearningPath';

/**
 * Composant de toggle pour le mode enseignant
 */
interface TeacherModeProps {
  isTeacherMode: boolean;
  onToggleTeacherMode: (password?: string) => void;
}

const TeacherModeToggle: React.FC<TeacherModeProps> = ({ isTeacherMode, onToggleTeacherMode }) => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === teacherPassword) {
      onToggleTeacherMode(password);
      setShowPasswordInput(false);
      setPassword('');
      setError('');
    } else {
      setError('Mot de passe incorrect');
      setPassword('');
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      {isTeacherMode ? (
        <button
          onClick={() => onToggleTeacherMode()}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
        >
          <Unlock className="w-4 h-4" />
          Mode Enseignant
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowPasswordInput(!showPasswordInput)}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
          >
            <Lock className="w-4 h-4" />
            Mode Étudiant
          </button>
          
          {showPasswordInput && (
            <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-64">
              <form onSubmit={handlePasswordSubmit}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe enseignant
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Entrez le mot de passe"
                  autoFocus
                />
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                )}
                <div className="flex gap-2 mt-3">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Valider
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordInput(false);
                      setPassword('');
                      setError('');
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm hover:bg-gray-400 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Page Dashboard - Accueil avec dashboard data marketing complet
 */
const Dashboard: React.FC = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  const handleToggleTeacherMode = (password?: string) => {
    if (password === teacherPassword) {
      setIsTeacherMode(true);
    } else {
      setIsTeacherMode(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <TeacherModeToggle 
        isTeacherMode={isTeacherMode} 
        onToggleTeacherMode={handleToggleTeacherMode} 
      />
      
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
          {isTeacherMode && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 font-medium">
                🎓 Mode Enseignant Activé - Les détails des graphiques sont accessibles
              </p>
            </div>
          )}
        </div>

        {/* Graphique d'introduction - Analyse SEO */}
        <div className="mb-16">
          <RankTrackerChart />
        </div>

        {/* Dashboard complet */}
        <ComprehensiveDashboard isTeacherMode={isTeacherMode} />

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