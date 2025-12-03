import React, { useState, useEffect } from 'react';
import { quizSessionService, TeamScore as ServiceTeamScore } from '../services/QuizSessionService';

interface Question {
  id: string;
  question: string;
  answer: string;
  points: number;
  category: string;
  explanation?: string;
}

interface TeamScore {
  name: string;
  score: number;
  color: string;
}

const InteractiveQuiz: React.FC = () => {
  const [currentRound, setCurrentRound] = useState<'setup' | 'round1' | 'round2' | 'round3' | 'final' | 'results'>('setup');
  const [teams, setTeams] = useState<TeamScore[]>([
    { name: 'Équipe Alpha', score: 0, color: 'bg-blue-500' },
    { name: 'Équipe Beta', score: 0, color: 'bg-green-500' },
    { name: 'Équipe Gamma', score: 0, color: 'bg-purple-500' },
    { name: 'Équipe Delta', score: 0, color: 'bg-orange-500' }
  ]);
  const [sessionId, setSessionId] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Base de questions complète pour l'animation
  const questionBank = {
    round1: [
      {
        id: 'def1',
        question: "Que signifie CTR ?",
        answer: "Click-Through Rate (Taux de clic)",
        points: 1,
        category: 'Définition',
        explanation: "Métrique fondamentale qui mesure le pourcentage de personnes qui cliquent sur votre publicité par rapport au nombre d'impressions."
      },
      {
        id: 'def2',
        question: "Que mesure le ROAS ?",
        answer: "Return On Ad Spend (Retour sur investissement publicitaire)",
        points: 1,
        category: 'Définition',
        explanation: "Indique combien d'euros de chiffre d'affaires sont générés pour chaque euro dépensé en publicité."
      },
      {
        id: 'def3',
        question: "CPA signifie ?",
        answer: "Cost Per Acquisition (Coût par acquisition)",
        points: 1,
        category: 'Définition',
        explanation: "Le montant moyen dépensé pour acquérir un nouveau client ou obtenir une conversion."
      },
      {
        id: 'def4',
        question: "Que veut dire LTV ?",
        answer: "Lifetime Value (Valeur vie client)",
        points: 1,
        category: 'Définition',
        explanation: "Estimation du chiffre d'affaires total qu'un client générera pendant toute sa relation avec l'entreprise."
      },
      {
        id: 'def5',
        question: "CPM c'est quoi ?",
        answer: "Cost Per Mille (Coût pour 1000 impressions)",
        points: 1,
        category: 'Définition',
        explanation: "Modèle de tarification publicitaire où l'on paye pour 1000 affichages de l'annonce, idéal pour la notoriété."
      },
      {
        id: 'def6',
        question: "Que signifie CRO ?",
        answer: "Conversion Rate Optimization (Optimisation du taux de conversion)",
        points: 1,
        category: 'Définition',
        explanation: "Processus d'amélioration systématique d'un site web pour augmenter le pourcentage de visiteurs qui réalisent l'action souhaitée."
      }
    ],
    round2: [
      {
        id: 'calc1',
        question: "100 000 impressions, 2 000 clics. Quel est le CTR ?",
        answer: "2%",
        points: 2,
        category: 'Calcul',
        explanation: "CTR = (Clics ÷ Impressions) × 100 = (2000 ÷ 100000) × 100 = 2%"
      },
      {
        id: 'calc2',
        question: "CPC de 0,50€, 1000 clics. Budget dépensé ?",
        answer: "500€",
        points: 2,
        category: 'Calcul',
        explanation: "Budget = CPC × Nombre de clics = 0,50€ × 1000 = 500€"
      },
      {
        id: 'calc3',
        question: "1000€ de pub, 4000€ de CA. Quel ROAS ?",
        answer: "4:1 ou 400%",
        points: 2,
        category: 'Calcul',
        explanation: "ROAS = Chiffre d'affaires ÷ Coût publicitaire = 4000€ ÷ 1000€ = 4:1"
      },
      {
        id: 'calc4',
        question: "50 conversions pour 2000 visiteurs. Taux de conversion ?",
        answer: "2,5%",
        points: 2,
        category: 'Calcul',
        explanation: "Taux de conversion = (Conversions ÷ Visiteurs) × 100 = (50 ÷ 2000) × 100 = 2,5%"
      },
      {
        id: 'calc5',
        question: "CPA de 25€, 100 acquisitions. Budget total ?",
        answer: "2500€",
        points: 2,
        category: 'Calcul',
        explanation: "Budget total = CPA × Nombre d'acquisitions = 25€ × 100 = 2500€"
      },
      {
        id: 'calc6',
        question: "Panier moyen 60€, marge 40%. Marge par commande ?",
        answer: "24€",
        points: 2,
        category: 'Calcul',
        explanation: "Marge = Panier moyen × Taux de marge = 60€ × 40% = 24€"
      }
    ],
    round3: [
      {
        id: 'case1',
        question: "ROAS de 5:1 mais ventes stagnent. Cause probable ?",
        answer: "Budget trop faible ou marché saturé",
        points: 3,
        category: 'Cas pratique',
        explanation: "Un bon ROAS avec des ventes stagnantes indique généralement un problème de volume : soit le budget est insuffisant pour scaler, soit le marché accessible est saturé."
      },
      {
        id: 'case2',
        question: "CPA de 25€ pour un produit à 50€ de marge. Verdict ?",
        answer: "Acceptable, ratio CPA/marge de 50%",
        points: 3,
        category: 'Cas pratique',
        explanation: "Règle générale : CPA doit être inférieur à 30-50% de la marge pour être rentable en tenant compte des autres coûts."
      },
      {
        id: 'case3',
        question: "CTR baisse mais conversions stables. Que se passe-t-il ?",
        answer: "Trafic moins qualifié mais mieux ciblé",
        points: 3,
        category: 'Cas pratique',
        explanation: "Si le CTR baisse mais les conversions restent stables, cela signifie que le trafic est de meilleure qualité : moins de clics curiosité, plus de clics intentionnistes."
      },
      {
        id: 'case4',
        question: "Taux de rebond élevé : impact sur Google Ads ?",
        answer: "Diminue le Quality Score, augmente les CPC",
        points: 3,
        category: 'Cas pratique',
        explanation: "Google pénalise les pages avec mauvaise expérience utilisateur en diminuant le Quality Score, ce qui augmente automatiquement les coûts par clic."
      },
      {
        id: 'case5',
        question: "Pourquoi regarder uniquement le ROAS peut être trompeur ?",
        answer: "N'indique ni le volume ni la profitabilité nette",
        points: 3,
        category: 'Cas pratique',
        explanation: "Le ROAS ne tient pas compte des coûts opérationnels, du volume de ventes, de la saisonnalité ou de la scalabilité des campagnes."
      }
    ]
  };

  const finalQuestions = [
    {
      id: 'final1',
      question: "Ordre logique du funnel marketing ?",
      options: [
        "Conversion → Acquisition → Engagement → Rétention",
        "Acquisition → Engagement → Conversion → Rétention",
        "Engagement → Acquisition → Rétention → Conversion",
        "Rétention → Conversion → Acquisition → Engagement"
      ],
      correct: 1,
      explanation: "Le parcours client suit naturellement : on acquiert d'abord les prospects, on les engage avec du contenu, on les convertit en clients, puis on les fidélise."
    },
    {
      id: 'final2',
      question: "Bon taux de conversion e-commerce ?",
      options: ["Entre 0,5% et 1%", "Entre 1% et 3%", "Entre 5% et 10%", "Au-dessus de 10%"],
      correct: 1,
      explanation: "La moyenne e-commerce se situe entre 1% et 3%. Moins de 1% est faible, plus de 3% est excellent."
    },
    {
      id: 'final3',
      question: "Le modèle d'attribution 'dernier clic' :",
      options: [
        "Est le plus précis",
        "Survalorise les canaux de découverte",
        "Sous-estime les canaux de notoriété",
        "Répartit équitablement le crédit"
      ],
      correct: 2,
      explanation: "Le dernier clic attribue tout le mérite au dernier canal touché, sous-estimant massivement les canaux de découverte et de notoriété."
    }
  ];

  // Charger une session existante au démarrage
  useEffect(() => {
    const existingSession = quizSessionService.getCurrentSession();
    if (existingSession && existingSession.status === 'active') {
      setSessionId(existingSession.id);
      setTeams(existingSession.teams);
      setCurrentRound(existingSession.currentRound as any);
      setCurrentQuestionIndex(existingSession.currentQuestionIndex);
    }
  }, []);

  const startNewSession = () => {
    const sessionName = `Quiz ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    const session = quizSessionService.createSession(sessionName, teams);
    setSessionId(session.id);
    setCurrentRound('round1');
  };

  const updateTeamScore = (teamIndex: number, points: number, questionData: any) => {
    const newTeams = [...teams];
    newTeams[teamIndex].score += points;
    setTeams(newTeams);

    // Sauvegarder dans le service
    quizSessionService.updateTeamScore(
      teamIndex,
      questionData.id || `q_${currentQuestionIndex}`,
      questionData.question,
      questionData.answer,
      true,
      points
    );
  };

  const updateSessionState = () => {
    quizSessionService.updateSessionState(currentRound, currentQuestionIndex);
  };

  const getCurrentQuestions = () => {
    switch (currentRound) {
      case 'round1': return questionBank.round1;
      case 'round2': return questionBank.round2;
      case 'round3': return questionBank.round3;
      default: return [];
    }
  };

  const nextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
      setSelectedTeam(null);
    } else {
      // Passer au round suivant
      if (currentRound === 'round1') setCurrentRound('round2');
      else if (currentRound === 'round2') setCurrentRound('round3');
      else if (currentRound === 'round3') setCurrentRound('final');
      else if (currentRound === 'final') setCurrentRound('results');
      
      setCurrentQuestionIndex(0);
      setShowAnswer(false);
      setSelectedTeam(null);
    }
  };

  const resetQuiz = () => {
    setCurrentRound('setup');
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setSelectedTeam(null);
    setTeams(teams.map(team => ({ ...team, score: 0 })));
  };

  if (currentRound === 'setup') {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white border border-slate-200 rounded-xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">🏆 Battle des Métriques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="font-semibold text-indigo-900 mb-4">Règles du jeu</h3>
            <ul className="space-y-2 text-sm text-indigo-800">
              <li>• 3 rounds de difficulté croissante</li>
              <li>• Première équipe à lever la main répond</li>
              <li>• 1-2-3 points selon la difficulté</li>
              <li>• Bonus +1 point pour justification</li>
              <li>• Round final en QCM</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-4">Structure</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• <strong>Round 1 :</strong> Définitions (1 pt)</li>
              <li>• <strong>Round 2 :</strong> Calculs (2 pts)</li>
              <li>• <strong>Round 3 :</strong> Cas pratiques (3 pts)</li>
              <li>• <strong>Final :</strong> QCM projeté</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">Équipes participantes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teams.map((team, index) => (
              <div key={index} className={`${team.color} text-white p-4 rounded-lg text-center`}>
                <div className="font-semibold">{team.name}</div>
                <div className="text-2xl font-bold">{team.score}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={() => {
              startNewSession();
              setCurrentRound('round1');
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mr-4"
          >
            🚀 Commencer le Quiz !
          </button>
          
          {quizSessionService.getCurrentSession() && (
            <div className="text-sm text-slate-600">
              <p>Session en cours : {quizSessionService.getCurrentSession()?.sessionName}</p>
              <button
                onClick={() => {
                  quizSessionService.resetCurrentSession();
                  setTeams(teams.map(team => ({ ...team, score: 0 })));
                  setCurrentRound('setup');
                }}
                className="mt-2 text-slate-500 hover:text-slate-700 underline"
              >
                Réinitialiser et recommencer
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentRound === 'results') {
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    const winner = sortedTeams[0];
    
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white border border-slate-200 rounded-xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">🏆 Résultats Finaux</h2>
        
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👑</div>
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">Équipe Gagnante</h3>
          <div className={`${winner.color} text-white px-6 py-3 rounded-lg inline-block text-xl font-bold`}>
            {winner.name} - {winner.score} points
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {sortedTeams.map((team, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🎖️'}
              </div>
              <div className={`${team.color} text-white p-3 rounded-lg`}>
                <div className="font-semibold text-sm">{team.name}</div>
                <div className="text-lg font-bold">{team.score} pts</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="space-x-4">
            <button
              onClick={() => {
                quizSessionService.completeSession();
                resetQuiz();
              }}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              🔄 Nouveau Quiz
            </button>
            
            <button
              onClick={() => quizSessionService.downloadResults()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📥 Télécharger les résultats
            </button>
          </div>
          
          <div className="text-sm text-slate-600">
            <p>Session ID : {sessionId}</p>
            <button
              onClick={() => quizSessionService.exportAllSessions()}
              className="mt-2 text-slate-500 hover:text-slate-700 underline"
            >
              📊 Exporter toutes les sessions
            </button>
          </div>
        </div>
      </div>
    );
  }

  const questions = getCurrentQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  const roundTitle = currentRound === 'round1' ? 'Round 1: Définitions' :
                    currentRound === 'round2' ? 'Round 2: Calculs' :
                    currentRound === 'round3' ? 'Round 3: Cas Pratiques' : 'Round Final';

  if (currentRound === 'final') {
    const currentFinalQ = finalQuestions[currentQuestionIndex];
    
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white border border-slate-200 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">{roundTitle}</h2>
          <p className="text-slate-600">Question {currentQuestionIndex + 1} / {finalQuestions.length}</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">{currentFinalQ.question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentFinalQ.options.map((option, index) => (
              <button
                key={index}
                className={`p-3 text-left rounded-lg border transition-colors ${
                  showAnswer && index === currentFinalQ.correct
                    ? 'bg-green-100 border-green-500 text-green-900'
                    : 'bg-white border-purple-200 hover:bg-purple-50'
                }`}
              >
                <span className="font-medium">{String.fromCharCode(65 + index)})</span> {option}
              </button>
            ))}
          </div>
        </div>

        {showAnswer && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-green-900 mb-2">Explication :</h4>
            <p className="text-green-800 text-sm">{currentFinalQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            {showAnswer ? 'Masquer' : 'Révéler'} la réponse
          </button>
          
          <button
            onClick={nextQuestion}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {currentQuestionIndex === finalQuestions.length - 1 ? 'Voir les résultats' : 'Question suivante'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border border-slate-200 rounded-xl">
      {/* En-tête avec scores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {teams.map((team, index) => (
          <div key={index} className={`${team.color} text-white p-3 rounded-lg text-center text-sm`}>
            <div className="font-semibold">{team.name}</div>
            <div className="text-xl font-bold">{team.score}</div>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">{roundTitle}</h2>
        <p className="text-slate-600">Question {currentQuestionIndex + 1} / {questions.length}</p>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">{currentQuestion.question}</h3>
        <div className="text-sm text-indigo-700">
          <span className="bg-indigo-200 px-2 py-1 rounded">
            {currentQuestion.points} point{currentQuestion.points > 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {showAnswer && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-green-900 mb-2">Réponse :</h4>
          <p className="text-green-800 font-medium mb-2">{currentQuestion.answer}</p>
          {currentQuestion.explanation && (
            <p className="text-green-700 text-sm">{currentQuestion.explanation}</p>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-sm text-slate-600 mr-4">Équipe qui répond :</span>
        {teams.map((team, index) => (
          <button
            key={index}
            onClick={() => setSelectedTeam(index)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              selectedTeam === index
                ? `${team.color} text-white`
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {team.name}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {showAnswer ? 'Masquer' : 'Révéler'} la réponse
          </button>
          
              {selectedTeam !== null && showAnswer && (
                <button
                  onClick={() => {
                    updateTeamScore(selectedTeam, currentQuestion.points, currentQuestion);
                    updateSessionState();
                    nextQuestion();
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  ✓ Bonne réponse (+{currentQuestion.points} pts)
                </button>
              )}
        </div>
        
        <button
          onClick={nextQuestion}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {currentQuestionIndex === questions.length - 1 
            ? (currentRound === 'round3' ? 'Round Final' : 'Round suivant')
            : 'Question suivante'
          }
        </button>
      </div>
    </div>
  );
};

export default InteractiveQuiz;
