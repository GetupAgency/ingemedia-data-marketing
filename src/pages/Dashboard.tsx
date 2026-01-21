import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Unlock,
  BookOpen,
  Trophy,
  Wrench,
  Cpu,
  Database,
  TrendingUp,
  BarChart3,
  Zap,
  Code,
  Terminal,
  ChevronRight,
  Sparkles,
  Target,
  Users,
  FileSpreadsheet
} from 'lucide-react';
import ComprehensiveDashboard from '../components/ComprehensiveDashboard';
import RankTrackerChart from '../components/RankTrackerChart';
import { teacherPassword } from '../data/unifiedLearningPath';

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
          className="flex items-center gap-2 bg-neon-green/20 text-neon-green border border-neon-green/30 px-4 py-2 rounded-lg shadow-neon-green transition-all duration-300 hover:bg-neon-green/30 font-mono text-sm"
        >
          <Unlock className="w-4 h-4" />
          <span>sudo_mode</span>
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowPasswordInput(!showPasswordInput)}
            className="flex items-center gap-2 bg-dark-800/80 text-dark-300 border border-dark-600 px-4 py-2 rounded-lg hover:border-cyber-400/50 hover:text-cyber-400 transition-all duration-300 font-mono text-sm"
          >
            <Lock className="w-4 h-4" />
            <span>user_mode</span>
          </button>

          {showPasswordInput && (
            <div className="absolute top-12 right-0 bg-dark-900/95 backdrop-blur-xl border border-dark-700 rounded-xl shadow-2xl shadow-cyber-400/10 p-4 min-w-72">
              <form onSubmit={handlePasswordSubmit}>
                <label className="block text-sm font-mono text-dark-300 mb-2">
                  <span className="text-cyber-400">$</span> enter_password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg text-dark-100 font-mono focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all"
                  placeholder="••••••••"
                  autoFocus
                />
                {error && (
                  <p className="text-neon-pink text-xs mt-2 font-mono">
                    <span className="text-neon-pink">✗</span> {error}
                  </p>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyber-500 to-cyber-400 text-dark-900 px-4 py-2 rounded-lg text-sm font-mono font-semibold hover:shadow-neon transition-all"
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
                    className="flex-1 bg-dark-700 text-dark-300 px-4 py-2 rounded-lg text-sm font-mono hover:bg-dark-600 transition-all"
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

const Dashboard: React.FC = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  const handleToggleTeacherMode = (password?: string) => {
    if (password === teacherPassword) {
      setIsTeacherMode(true);
    } else {
      setIsTeacherMode(false);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Apprendre',
      description: 'Modules interactifs de formation complète avec exercices pratiques',
      link: '/learn',
      color: 'cyber',
      gradient: 'from-cyber-400 to-cyber-600'
    },
    {
      icon: Trophy,
      title: 'Évaluer',
      description: 'Quiz et tests pour valider vos connaissances en data marketing',
      link: '/quizzes',
      color: 'green',
      gradient: 'from-neon-green to-matrix-500'
    },
    {
      icon: Wrench,
      title: 'Explorer',
      description: 'Découvrez les outils professionnels du data marketing moderne',
      link: '/tools',
      color: 'pink',
      gradient: 'from-neon-pink to-neon-purple'
    }
  ];

  const stats = [
    { icon: Database, value: '8', label: 'Modules', color: 'text-cyber-400' },
    { icon: Target, value: '100+', label: 'Questions', color: 'text-neon-green' },
    { icon: Wrench, value: '18', label: 'Outils', color: 'text-neon-pink' },
    { icon: Users, value: '∞', label: 'Étudiants', color: 'text-neon-purple' }
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />

      <TeacherModeToggle
        isTeacherMode={isTeacherMode}
        onToggleTeacherMode={handleToggleTeacherMode}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          {/* Terminal-style badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-mono text-dark-300">
              <span className="text-neon-green">sys.status:</span> learning_enabled
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="text-dark-100">Bienvenue sur </span>
            <span className="text-gradient glitch" data-text="<Genius/>">
              &lt;Genius/&gt;
            </span>
          </h1>

          <p className="text-xl text-dark-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Plateforme d'apprentissage du <span className="text-cyber-400 font-semibold">data marketing</span>.
            Maîtrisez l'analyse de données, les KPIs et les outils professionnels.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-xl p-4 hover:border-cyber-400/30 transition-all duration-300 group"
                >
                  <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`text-2xl font-bold ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-xs text-dark-500 font-mono">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Teacher Mode Badge */}
          {isTeacherMode && (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green/10 border border-neon-green/30 rounded-xl mb-8 animate-fade-in">
              <Terminal className="w-5 h-5 text-neon-green" />
              <span className="font-mono text-neon-green">
                sudo_mode activated — Accès complet aux corrections
              </span>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.link}
                className="group relative overflow-hidden bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-6 hover:border-cyber-400/30 transition-all duration-500 hover:shadow-neon"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-100 mb-2 font-display group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-dark-400 text-sm mb-4">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-dark-500 group-hover:text-cyber-400 transition-colors font-mono text-sm">
                  <span>explorer</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 text-dark-700 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Data Visualization Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-cyber-400" />
              <h2 className="text-2xl font-bold text-dark-100 font-display">
                Données <span className="text-gradient">SEO en temps réel</span>
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-dark-700 to-transparent" />
          </div>

          <div className="bg-dark-800/20 backdrop-blur border border-dark-700/50 rounded-2xl p-6 hover:border-cyber-400/20 transition-all duration-300">
            <RankTrackerChart />
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-neon-green" />
              <h2 className="text-2xl font-bold text-dark-100 font-display">
                Dashboard <span className="text-gradient-green">Analytics</span>
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-dark-700 to-transparent" />
          </div>

          <ComprehensiveDashboard isTeacherMode={isTeacherMode} />
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-dark-800/50 to-dark-900/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-3 font-display">
                Prêt à <span className="text-gradient">coder</span> votre avenir en data ?
              </h3>
              <p className="text-dark-400 max-w-lg">
                Accédez à tous les fichiers CSV, exercices pratiques et ressources pédagogiques.
              </p>
            </div>

            <Link
              to="/student-space"
              className="group relative flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl font-semibold transition-all duration-300"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-neon-purple" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Content */}
              <div className="relative flex items-center gap-3 text-dark-900">
                <FileSpreadsheet className="w-5 h-5" />
                <span className="font-mono text-lg">Espace_Étudiant</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
