import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  ListChecks,
  Play,
  Sparkles,
  Shuffle,
  Target,
  Zap,
  HelpCircle,
  ChevronRight,
  Trophy
} from 'lucide-react';
import { availableQuizzes } from '../data/quizData';

const QuizList: React.FC = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'débutant':
      case 'facile':
        return 'text-neon-green bg-neon-green/10 border-neon-green/30';
      case 'intermédiaire':
      case 'moyen':
        return 'text-neon-yellow bg-neon-yellow/10 border-neon-yellow/30';
      case 'avancé':
      case 'difficile':
        return 'text-neon-pink bg-neon-pink/10 border-neon-pink/30';
      default:
        return 'text-cyber-400 bg-cyber-400/10 border-cyber-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-neon-green" />
            <span className="text-xs font-mono text-dark-300">
              <span className="text-neon-green">{availableQuizzes.length}</span> quiz disponibles
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-dark-100">Quiz </span>
            <span className="text-gradient-green">Data Marketing</span>
          </h1>

          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Testez vos connaissances avec nos quiz interactifs.
            <span className="text-neon-green font-mono"> test --knowledge</span>
          </p>
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availableQuizzes.map((quiz, index) => (
            <div
              key={quiz.id}
              className="group relative bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl overflow-hidden hover:border-cyber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyber-400/10"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                {/* Badge difficulty */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border ${getDifficultyColor(quiz.difficulty)}`}>
                    <Zap className="w-3 h-3 mr-1" />
                    {quiz.difficulty}
                  </span>
                </div>

                {/* Index number */}
                <div className="absolute top-4 right-4 text-dark-600 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  #{String(index + 1).padStart(2, '0')}
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-dark-100 group-hover:text-gradient transition-all font-display">
                    {quiz.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                  {quiz.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-dark-500 mb-5">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-4 h-4 text-cyber-400" />
                    <span>{quiz.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono">
                    <ListChecks className="w-4 h-4 text-neon-pink" />
                    <span>{quiz.questions.length} questions</span>
                  </div>
                </div>

                {/* Start button */}
                <Link
                  to={`/quiz/${quiz.id}`}
                  className="group/btn relative flex items-center justify-center w-full py-3 overflow-hidden rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-neon-purple opacity-90 group-hover/btn:opacity-100 transition-opacity" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                  {/* Content */}
                  <div className="relative flex items-center gap-2 text-dark-900">
                    <Play className="w-4 h-4" />
                    <span className="font-mono">start_quiz()</span>
                  </div>
                </Link>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Info Sections */}
        <div className="space-y-6">

          {/* Random Questions Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-neon-orange/10 to-neon-yellow/10 border border-neon-orange/30 rounded-2xl p-6 md:p-8">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-orange to-neon-yellow rounded-xl flex items-center justify-center shadow-lg">
                  <Shuffle className="w-7 h-7 text-dark-900" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-dark-100 mb-3 font-display flex items-center gap-2">
                  Questions Aléatoires
                  <Sparkles className="w-5 h-5 text-neon-yellow" />
                </h2>

                <p className="text-dark-300 text-lg mb-4">
                  Chaque quiz sélectionne <span className="text-neon-orange font-semibold">20 questions aléatoires</span> parmi une banque enrichie.
                  <span className="block mt-1 text-neon-yellow font-mono text-sm">// Aucun étudiant n'aura les mêmes questions !</span>
                </p>

                <div className="bg-dark-900/50 rounded-xl p-4 border border-dark-700/50">
                  <p className="text-sm font-mono text-dark-400 mb-3">
                    <span className="text-neon-green">$</span> advantages.list()
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Révisions variées à chaque passage',
                      'Évaluation équitable pour tous',
                      'Plus de 100 questions disponibles',
                      'Parfait pour réviser régulièrement'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
                        <ChevronRight className="w-4 h-4 text-neon-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How to use section */}
          <div className="relative overflow-hidden bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-6 md:p-8">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-400/5 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-dark-100 mb-4 font-display flex items-center gap-2">
                  <Target className="w-6 h-6 text-cyber-400" />
                  Comment utiliser nos quiz ?
                </h2>

                <p className="text-dark-400 leading-relaxed">
                  Nos quiz sont conçus pour tester et améliorer vos connaissances en data marketing.
                  Chaque quiz commence par des questions de base et progresse vers des concepts plus avancés.
                  À la fin, vous recevrez un <span className="text-cyber-400">score détaillé</span> et des recommandations personnalisées.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-dark-700/50 rounded-lg text-xs font-mono text-dark-300 border border-dark-600">
                    <span className="text-neon-green">+</span> Progression adaptative
                  </span>
                  <span className="px-3 py-1 bg-dark-700/50 rounded-lg text-xs font-mono text-dark-300 border border-dark-600">
                    <span className="text-neon-green">+</span> Explications détaillées
                  </span>
                  <span className="px-3 py-1 bg-dark-700/50 rounded-lg text-xs font-mono text-dark-300 border border-dark-600">
                    <span className="text-neon-green">+</span> Score personnalisé
                  </span>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyber-400/20 to-neon-purple/20 rounded-2xl flex items-center justify-center border border-cyber-400/20">
                  <Trophy className="w-12 h-12 text-cyber-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizList;
