import React from 'react';
import { Link } from 'react-router-dom';
import { tutorials } from '../data/tutorialData';
import { Clock, ChevronRight, Play, BookOpen, Sparkles, GraduationCap } from 'lucide-react';

/**
 * Page de liste des tutoriels
 * Thème Cyber/Neon
 */
const Tutorials: React.FC = () => {
  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'débutant':
        return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'intermédiaire':
        return 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30';
      case 'avancé':
        return 'bg-neon-pink/20 text-neon-pink border-neon-pink/30';
      default:
        return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-dark-300 font-mono">Apprentissage guidé</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Tutoriels Data Marketing
            </span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Maîtrise les outils et techniques du data marketing à travers des tutoriels
            détaillés et pratiques, du débutant à l'expert.
          </p>
        </div>

        {/* Grille de tutoriels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tutorials.map(tutorial => (
            <div
              key={tutorial.id}
              className="group bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-neon-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              {/* Image */}
              {tutorial.image && (
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getDifficultyStyle(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-dark-300 text-sm bg-dark-900/70 px-2 py-1 rounded-lg backdrop-blur-sm">
                      <Clock className="w-3 h-3" />
                      {tutorial.duration}
                    </div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-lg text-xs font-medium border border-neon-purple/30">
                    {tutorial.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {tutorial.title}
                </h3>

                <p className="text-dark-400 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>

                <Link
                  to={`/tutorial/${tutorial.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-xl font-medium text-sm hover:shadow-neon transition-all group-hover:scale-105"
                >
                  <Play className="w-4 h-4" />
                  Commencer
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Carte CSV Tutorial */}
          <div className="group bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-neon-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10">
            {/* Gradient header */}
            <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-neon-purple via-neon-pink to-neon-cyan flex items-center justify-center relative">
              <div className="absolute inset-0 bg-dark-900/30" />
              <BookOpen className="w-16 h-16 text-white opacity-80 relative z-10" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2 py-1 bg-neon-green/20 text-neon-green rounded-lg text-xs font-medium border border-neon-green/30">
                  Débutant
                </span>
                <div className="flex items-center gap-1 text-white text-sm bg-dark-900/70 px-2 py-1 rounded-lg backdrop-blur-sm">
                  <Clock className="w-3 h-3" />
                  30 min
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded-lg text-xs font-medium border border-neon-cyan/30">
                  CSV
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                Analyse des données CSV
              </h3>

              <p className="text-dark-400 text-sm mb-4 line-clamp-3">
                Apprends à importer, nettoyer et analyser des fichiers CSV pour extraire des informations marketing utiles.
              </p>

              <Link
                to="/tutorial/csv-analysis"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-xl font-medium text-sm hover:shadow-neon transition-all group-hover:scale-105"
              >
                <Play className="w-4 h-4" />
                Commencer
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section info */}
        <div className="bg-gradient-to-r from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10 border border-neon-purple/20 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-neon-cyan" />
            <h2 className="text-2xl font-bold text-white">Apprendre par la pratique</h2>
          </div>
          <p className="text-dark-300 text-center max-w-2xl mx-auto mb-6">
            Chaque tutoriel est conçu pour te donner des compétences concrètes et applicables immédiatement.
            Progresse à ton rythme et reviens autant de fois que nécessaire.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 border border-dark-700 text-white rounded-xl font-medium hover:border-neon-cyan transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Voir les cours
            </Link>
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-xl font-medium hover:shadow-neon transition-all"
            >
              Tester mes connaissances
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
