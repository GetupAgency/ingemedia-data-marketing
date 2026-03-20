import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Timer, Target, RefreshCw } from 'lucide-react';
import { generateMixedOlympiadQuestions, teams, OlympiadQuestion } from '../data/olympiadesData';

/**
 * Mode Olympiades - Quiz par équipes avec timer
 * Format ludique et compétitif pour terminer le cours
 * Utilise le pool de +110 questions avec mélange aléatoire
 */
const Olympiades: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [teamScores, setTeamScores] = useState([0, 0]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [bonusSpeed, setBonusSpeed] = useState(0);
  const [questions, setQuestions] = useState<OlympiadQuestion[]>(() => generateMixedOlympiadQuestions(4, 12));

  const currentQ = questions[currentQuestion];

  // Timer countdown
  useEffect(() => {
    if (gameStarted && !isAnswered && !gameFinished && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    
    if (timeLeft === 0 && !isAnswered) {
      // Temps écoulé, pas de points
      handleTimeout();
    }
  }, [timeLeft, gameStarted, isAnswered, gameFinished]);

  // Gérer le timeout
  const handleTimeout = () => {
    setIsAnswered(true);
    setShowExplanation(true);
    setTimeout(() => nextQuestion(), 4000);
  };

  // Démarrer le jeu
  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(30);
  };

  // Gérer la réponse
  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    // Calculer les points
    if (answerIndex === currentQ.correctAnswer) {
      let points = currentQ.points;
      
      // Bonus de rapidité
      const speed = 30 - timeLeft;
      if (speed <= 5) {
        setBonusSpeed(50); // Ultra rapide
        points += 50;
      } else if (speed <= 10) {
        setBonusSpeed(30); // Rapide
        points += 30;
      } else if (speed <= 15) {
        setBonusSpeed(10); // Bon
        points += 10;
      }
      
      // Ajouter les points à l'équipe
      const newScores = [...teamScores];
      newScores[currentTeam] += points;
      setTeamScores(newScores);
    }
    
    setShowExplanation(true);
    
    // Passer à la question suivante après 5 secondes
    setTimeout(() => nextQuestion(), 5000);
  };

  // Question suivante
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentTeam((currentTeam + 1) % teams.length); // Rotation des équipes
      setTimeLeft(30);
      setIsAnswered(false);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setBonusSpeed(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setGameFinished(true);
    }
  };

  // Recommencer avec de nouvelles questions
  const restartGame = () => {
    // Générer un nouveau set de questions aléatoires
    setQuestions(generateMixedOlympiadQuestions(4, 12));
    setGameStarted(false);
    setCurrentQuestion(0);
    setTeamScores(teams.map(() => 0));
    setCurrentTeam(0);
    setTimeLeft(30);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setGameFinished(false);
    setBonusSpeed(0);
  };

  // Déterminer le gagnant
  const getWinner = () => {
    const maxScore = Math.max(...teamScores);
    const winnerIndex = teamScores.indexOf(maxScore);
    return { team: teams[winnerIndex], score: maxScore };
  };

  // Page d'accueil
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl animate-pulse">
              <Trophy className="w-24 h-24 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              OLYMPIADES DATA MARKETING
            </h1>
            <p className="text-2xl text-indigo-200 mb-8">
              Quiz rapide par équipes • 30 secondes par question • Que la meilleure équipe gagne ! 🏆
            </p>
          </div>

          {/* Règles du jeu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Format</h3>
              </div>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>16 questions aléatoires par partie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>30 secondes par question</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>Pool de <strong className="text-yellow-400">+110 questions</strong> différentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>Rotation automatique des équipes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Parties rejouables à l'infini !</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Points</h3>
              </div>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span>Facile : 100 points</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span>Moyen : 150 points</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span>Difficile : 200 points</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span>Bonus rapidité : +10 à +50 points ⚡</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Les 4 équipes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Les 4 Équipes en Compétition</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teams.map((team, index) => (
                <div key={team.id} className={`${team.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-2xl`}>
                  <div className="text-4xl mb-3">{team.name.split(' ')[1]}</div>
                  <div className="font-bold text-xl mb-2">{team.name.split(' ')[0]} {team.name.split(' ')[2]}</div>
                  <div className="text-sm opacity-90">Prêts à gagner !</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton start */}
          <div className="text-center">
            <button
              onClick={startGame}
              className="px-16 py-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-3xl font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all animate-pulse"
            >
              🚀 LANCER LES OLYMPIADES !
            </button>
            <p className="mt-6 text-indigo-300 text-lg">
              Que le meilleur data marketer gagne ! 💪
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Page de fin
  if (gameFinished) {
    const winner = getWinner();
    const sortedTeams = teams
      .map((team, index) => ({ ...team, score: teamScores[index] }))
      .sort((a, b) => b.score - a.score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animation de victoire */}
          <div className="text-center mb-12 animate-bounce">
            <div className="inline-block p-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl">
              <Trophy className="w-32 h-32 text-white" />
            </div>
            <h1 className="text-7xl font-bold text-white mb-4">
              🎉 VICTOIRE ! 🎉
            </h1>
            <div className={`inline-block ${winner.team.color} px-12 py-6 rounded-3xl shadow-2xl`}>
              <h2 className="text-5xl font-bold text-white mb-2">
                {winner.team.name}
              </h2>
              <p className="text-3xl text-white/90">
                {winner.score} points
              </p>
            </div>
          </div>

          {/* Podium */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 mb-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">🏆 Classement Final</h3>
            <div className="space-y-4">
              {sortedTeams.map((team, index) => (
                <div key={team.id} className={`flex items-center justify-between p-6 rounded-2xl ${
                  index === 0 ? 'bg-yellow-400/20 border-2 border-yellow-400' :
                  index === 1 ? 'bg-gray-300/20 border-2 border-gray-400' :
                  index === 2 ? 'bg-orange-400/20 border-2 border-orange-600' :
                  'bg-white/10 border-2 border-white/20'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl font-bold ${
                      index === 0 ? 'text-yellow-400' :
                      index === 1 ? 'text-gray-300' :
                      index === 2 ? 'text-orange-400' :
                      'text-white/50'
                    }`}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '4️⃣'}
                    </div>
                    <div className={`${team.color} px-6 py-3 rounded-xl`}>
                      <span className="text-white font-bold text-xl">{team.name}</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {team.score} pts
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <div className="flex gap-6 justify-center">
            <button
              onClick={restartGame}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all"
            >
              🔄 Recommencer
            </button>
            <a
              href="/learn"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all"
            >
              📚 Retour aux formations
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Page de jeu
  const team = teams[currentTeam];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scores des équipes */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {teams.map((t, index) => (
            <div 
              key={t.id} 
              className={`${t.color} rounded-2xl p-6 text-white text-center transform transition-all ${
                index === currentTeam ? 'scale-110 ring-4 ring-white shadow-2xl' : 'opacity-60 scale-95'
              }`}
            >
              <div className="text-2xl mb-2">{t.name.split(' ')[1]}</div>
              <div className="font-bold text-lg mb-1">{t.name}</div>
              <div className="text-3xl font-bold">{teamScores[index]}</div>
              {index === currentTeam && (
                <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
                  À VOUS ! 🎯
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Question actuelle */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header avec timer */}
          <div className={`${team.color} p-6 text-white relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 -translate-y-32"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{team.name.split(' ')[1]}</div>
                  <div>
                    <div className="font-bold text-xl">{team.name}</div>
                    <div className="text-sm opacity-90">Question {currentQuestion + 1}/{questions.length}</div>
                  </div>
                </div>
                
                {/* Timer circulaire */}
                <div className="relative">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Timer className={`w-6 h-6 mx-auto mb-1 ${timeLeft <= 10 ? 'animate-pulse' : ''}`} />
                      <div className={`text-3xl font-bold ${timeLeft <= 10 ? 'text-red-200' : ''}`}>
                        {timeLeft}
                      </div>
                    </div>
                  </div>
                  {timeLeft <= 10 && (
                    <div className="absolute inset-0 animate-ping">
                      <div className="w-24 h-24 bg-red-400 rounded-full opacity-75"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Difficulté et points */}
              <div className="flex gap-3 justify-center">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  {currentQ.difficulty.toUpperCase()}
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  {currentQ.points} points
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold">
                  ⚡ Bonus rapidité possible
                </span>
              </div>
            </div>
          </div>

          {/* Contenu de la question */}
          <div className="p-8">
            {/* Question */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentQ.question}
            </h2>

            {/* Visual (graphique ou métrique) */}
            {currentQ.visual && (
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-6 text-center">{currentQ.visual.title}</h3>
                
                {/* Affichage simple des données */}
                {currentQ.visual.type === 'metric-card' && currentQ.visual.data.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentQ.visual.data.metrics.map((metric: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-xl p-6 text-center border-2 border-indigo-200">
                        <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                        <div className="text-3xl font-bold text-indigo-600">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {currentQ.visual.type === 'metric-card' && currentQ.visual.data.channels && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQ.visual.data.channels.map((channel: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-xl p-6 border-2 border-indigo-200">
                        <div className="font-bold text-lg text-gray-900 mb-3">{channel.name}</div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-xs text-gray-600">Dépensé</div>
                            <div className="text-sm font-semibold text-gray-900">{channel.spent}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">CA</div>
                            <div className="text-sm font-semibold text-gray-900">{channel.revenue}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">ROAS</div>
                            <div className="text-lg font-bold text-indigo-600">{channel.roas}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentQ.visual.type === 'table' && currentQ.visual.data.alerts && (
                  <div className="bg-white rounded-xl overflow-hidden border-2 border-indigo-200">
                    <table className="w-full">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900">Métrique</th>
                          <th className="px-4 py-3 text-center font-semibold text-indigo-900">Actuel</th>
                          <th className="px-4 py-3 text-center font-semibold text-indigo-900">Objectif</th>
                          <th className="px-4 py-3 text-center font-semibold text-indigo-900">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentQ.visual.data.alerts.map((alert: any, idx: number) => (
                          <tr key={idx} className="border-t border-indigo-100">
                            <td className="px-4 py-3 font-semibold">{alert.metric}</td>
                            <td className="px-4 py-3 text-center font-mono">{alert.current}</td>
                            <td className="px-4 py-3 text-center font-mono">{alert.target}</td>
                            <td className="px-4 py-3 text-center">{alert.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Options de réponse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`p-6 rounded-2xl font-semibold text-lg transition-all transform ${
                    isAnswered
                      ? index === currentQ.correctAnswer
                        ? 'bg-green-500 text-white scale-105 ring-4 ring-green-300'
                        : selectedAnswer === index
                          ? 'bg-red-500 text-white scale-95'
                          : 'bg-gray-200 text-gray-500'
                      : `${team.lightColor} ${team.textColor} hover:scale-105 hover:shadow-xl border-2 ${team.borderColor} cursor-pointer`
                  } ${isAnswered ? 'cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isAnswered && index === currentQ.correctAnswer
                        ? 'bg-green-600 text-white'
                        : isAnswered && selectedAnswer === index
                          ? 'bg-red-600 text-white'
                          : 'bg-white/50'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1 text-left">{option}</span>
                    {isAnswered && index === currentQ.correctAnswer && <span className="text-2xl">✓</span>}
                    {isAnswered && selectedAnswer === index && index !== currentQ.correctAnswer && <span className="text-2xl">✗</span>}
                  </div>
                </button>
              ))}
            </div>

            {/* Explication et bonus */}
            {showExplanation && (
              <div className={`p-6 rounded-2xl mb-6 ${
                isCorrect ? 'bg-green-100 border-2 border-green-400' : 'bg-orange-100 border-2 border-orange-400'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  {isCorrect && bonusSpeed > 0 && (
                    <div className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      +{bonusSpeed} BONUS RAPIDITÉ !
                    </div>
                  )}
                  <div className="text-xl font-bold">
                    {isCorrect 
                      ? `✅ +${currentQ.points + bonusSpeed} points pour ${team.name} !` 
                      : '❌ Pas de points cette fois'}
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Prochain tour */}
            {isAnswered && currentQuestion < questions.length - 1 && (
              <div className="text-center">
                <div className="inline-block bg-indigo-100 px-6 py-3 rounded-xl">
                  <p className="text-indigo-900 font-semibold">
                    Prochain tour : {teams[(currentTeam + 1) % teams.length].name} 🎯
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olympiades;

