import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { examQuestions, examQuizConfig } from '../data/examQuizData';

/**
 * Composant Examen Final
 * Quiz d'évaluation professionnelle avec 40 questions fixes
 */
const ExamQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(examQuestions.length).fill(-1));
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerValidated, setIsAnswerValidated] = useState(false);
  const [showNameForm, setShowNameForm] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentFirstName, setStudentFirstName] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const questions = examQuestions;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Fonction pour gérer la sélection d'une réponse
  const handleSelectAnswer = (index: number) => {
    if (!isAnswerValidated) {
      setSelectedAnswer(index);
    }
  };

  // Fonction pour valider la réponse
  const handleValidateAnswer = () => {
    if (selectedAnswer !== null) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(newUserAnswers);

      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      setIsAnswerValidated(true);
    }
  };

  // Fonction pour passer à la question suivante
  const handleNextQuestion = () => {
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerValidated(false);
      } else {
        setIsExamFinished(true);
        setEndTime(Date.now());
      }
    }, 0);
  };

  // Fonction pour passer du formulaire aux instructions
  const handleSubmitName = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim() && studentFirstName.trim()) {
      setShowNameForm(false);
      setShowInstructions(true);
    }
  };

  // Fonction pour commencer l'examen
  const handleStartExam = () => {
    setShowInstructions(false);
    setStartTime(Date.now());
  };

  // Calculer le temps passé
  const getTimeSpent = () => {
    if (!startTime || !endTime) return 0;
    return Math.floor((endTime - startTime) / 1000 / 60); // en minutes
  };

  // Calculer le pourcentage
  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  // Fonction pour sauvegarder les résultats en JSON
  const saveResultsToJSON = () => {
    const results = {
      etudiant: {
        nom: studentName,
        prenom: studentFirstName
      },
      examen: {
        date: new Date().toISOString(),
        duree_minutes: getTimeSpent(),
        note_finale: `${score}/${questions.length}`,
        pourcentage: getScorePercentage()
      },
      detail_reponses: questions.map((question, index) => ({
        question_numero: index + 1,
        question: question.question,
        reponse_choisie: question.options[userAnswers[index]] || "Non répondue",
        reponse_correcte: question.options[question.correctAnswer],
        est_correcte: userAnswers[index] === question.correctAnswer,
        explication: question.explanation
      })),
      analyse_thematiques: {
        fondamentaux: {
          score: userAnswers.slice(0, 8).filter((ans, idx) => ans === questions[idx].correctAnswer).length,
          total: 8
        },
        calculs_kpis: {
          score: userAnswers.slice(8, 16).filter((ans, idx) => ans === questions[idx + 8].correctAnswer).length,
          total: 8
        },
        ga4_outils: {
          score: userAnswers.slice(16, 24).filter((ans, idx) => ans === questions[idx + 16].correctAnswer).length,
          total: 8
        },
        diagnostic: {
          score: userAnswers.slice(24, 32).filter((ans, idx) => ans === questions[idx + 24].correctAnswer).length,
          total: 8
        },
        strategie: {
          score: userAnswers.slice(32, 40).filter((ans, idx) => ans === questions[idx + 32].correctAnswer).length,
          total: 8
        }
      }
    };

    // Créer le fichier JSON et le télécharger
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${studentName}-${studentFirstName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Obtenir le message de résultat
  const getResultMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return {
      title: "Excellent ! 🌟",
      message: "Vous maîtrisez remarquablement bien le data marketing. Félicitations pour ce parcours exemplaire !",
      color: "text-green-600"
    };
    if (percentage >= 80) return {
      title: "Très bien ! 👏",
      message: "Vous avez une solide compréhension du data marketing. Continuez sur cette lancée !",
      color: "text-green-600"
    };
    if (percentage >= 70) return {
      title: "Bien 👍",
      message: "Vous avez acquis les compétences essentielles. Quelques approfondissements seraient bénéfiques.",
      color: "text-blue-600"
    };
    if (percentage >= 60) return {
      title: "Correct ✓",
      message: "Vous avez une base solide. Continuez à travailler les points faibles identifiés.",
      color: "text-indigo-600"
    };
    return {
      title: "À améliorer 📚",
      message: "Révisez les fondamentaux et n'hésitez pas à revoir les modules de formation.",
      color: "text-orange-600"
    };
  };

  // Déclencher la sauvegarde automatique quand l'examen se termine
  useEffect(() => {
    if (isExamFinished && endTime) {
      setTimeout(() => {
        saveResultsToJSON();
      }, 500);
    }
  }, [isExamFinished, endTime]);

  const currentQuestionData = questions[currentQuestion];
  const resultInfo = getResultMessage();

  // Page de formulaire nom/prénom
  if (showNameForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 pt-24 pb-12 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* En-tête élégant */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
              </div>
              <div className="relative z-10">
                <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L12 10M12 18H12.01M9 2H15L21 8V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8L9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h1 className="text-4xl font-bold mb-2">Examen Final</h1>
                <p className="text-xl text-indigo-100">Data Marketing 2025 - Ingemedia</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Identification</h2>
              <p className="text-gray-600 text-center mb-8">Veuillez renseigner vos informations avant de commencer</p>
              
              <form onSubmit={handleSubmitName} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom de famille *
                  </label>
                  <input
                    id="nom"
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    placeholder="Dupont"
                    required
                    autoFocus
                  />
                </div>

                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    value={studentFirstName}
                    onChange={(e) => setStudentFirstName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    placeholder="Marie"
                    required
                  />
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                  <p className="text-sm text-indigo-900">
                    <strong>📌 Important :</strong> Vos résultats seront automatiquement sauvegardés avec ces informations.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Continuer vers les instructions
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page d'instructions
  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-indigo-100">
            {/* En-tête élégant */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
              </div>
              <div className="text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{examQuizConfig.title}</h1>
                <p className="text-xl text-indigo-100 mb-4">{examQuizConfig.description}</p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-lg font-semibold">
                    <span className="font-bold text-white">{studentFirstName} {studentName}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions modernisées */}
            <div className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📋 Consignes de l'examen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                      40
                    </div>
                    <h3 className="font-bold text-blue-900 text-lg">Questions</h3>
                  </div>
                  <p className="text-blue-800">Couvrant l'ensemble du programme de data marketing</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                      45
                    </div>
                    <h3 className="font-bold text-purple-900 text-lg">Minutes</h3>
                  </div>
                  <p className="text-purple-800">Durée conseillée (non limitée, gérez votre temps)</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center font-bold shadow-lg">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-green-900 text-lg">QCM</h3>
                  </div>
                  <p className="text-green-800">Une seule réponse correcte par question</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border-2 border-amber-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center font-bold shadow-lg">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-amber-900 text-lg">Auto-sauvegarde</h3>
                  </div>
                  <p className="text-amber-800">Résultats sauvegardés automatiquement en JSON</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-2xl mb-8 shadow-sm">
                <h3 className="font-bold text-orange-900 mb-4 flex items-center text-lg">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Points d'attention importants
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</div>
                    <p className="text-orange-800">Lisez attentivement chaque question et toutes les options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</div>
                    <p className="text-orange-800">Pas d'internet autorisé, utilisez papier et stylo pour les calculs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</div>
                    <p className="text-orange-800">Pas de retour en arrière, validez seulement quand vous êtes sûr(e)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">✓</div>
                    <p className="text-orange-800">Vos résultats seront sauvegardés automatiquement à la fin</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-indigo-200">
                <h3 className="font-bold text-indigo-900 mb-3 text-lg">🎯 Thématiques évaluées</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-indigo-800">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    Fondamentaux du Data Marketing (8Q)
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Calculs et KPIs (8Q)
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Google Analytics et Outils (8Q)
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Diagnostic et Optimisation (8Q)
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 sm:col-span-2 justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Stratégie et Automatisation (8Q)
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleStartExam}
                  className="px-12 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white text-xl font-bold rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  🚀 Commencer l'examen
                </button>
                <p className="mt-6 text-sm text-gray-600">
                  Bonne chance ! Prenez votre temps et faites de votre mieux. 💪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page de résultats
  if (isExamFinished) {
    const percentage = getScorePercentage();
    const bgColor = percentage >= 80 ? 'from-green-600 to-emerald-600' : 
                    percentage >= 70 ? 'from-blue-600 to-indigo-600' : 
                    percentage >= 60 ? 'from-indigo-600 to-purple-600' : 
                    'from-orange-600 to-amber-600';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-indigo-100">
            {/* En-tête résultats élégant */}
            <div className={`p-10 text-white bg-gradient-to-r ${bgColor} relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32"></div>
              </div>
              <div className="text-center relative z-10">
                <div className="text-7xl mb-6">
                  {percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '📚'}
                </div>
                <h2 className="text-4xl font-bold mb-3">
                  {resultInfo.title}
                </h2>
                <p className="text-xl mb-6 text-white/90">{resultInfo.message}</p>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="text-6xl font-bold mb-3">{score}/{questions.length}</div>
                  <div className="text-2xl font-semibold">Score : {getScorePercentage()}%</div>
                </div>
                <div className="mt-6 text-lg bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 inline-block">
                  {studentFirstName} {studentName} • {getTimeSpent()} minutes
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{getTimeSpent()}</div>
                  <div className="text-blue-800 font-medium">Minutes</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{score}</div>
                  <div className="text-green-800 font-medium">Réponses correctes</div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{questions.length - score}</div>
                  <div className="text-red-800 font-medium">Réponses incorrectes</div>
                </div>
              </div>

              {/* Analyse par thématique */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">📊 Analyse de vos résultats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-800">Fondamentaux (Q1-8)</span>
                    <span className="font-semibold text-indigo-900">
                      {userAnswers.slice(0, 8).filter((ans, idx) => ans === questions[idx].correctAnswer).length}/8
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-800">Calculs et KPIs (Q9-16)</span>
                    <span className="font-semibold text-indigo-900">
                      {userAnswers.slice(8, 16).filter((ans, idx) => ans === questions[idx + 8].correctAnswer).length}/8
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-800">GA4 et Outils (Q17-24)</span>
                    <span className="font-semibold text-indigo-900">
                      {userAnswers.slice(16, 24).filter((ans, idx) => ans === questions[idx + 16].correctAnswer).length}/8
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-800">Diagnostic et Optimisation (Q25-32)</span>
                    <span className="font-semibold text-indigo-900">
                      {userAnswers.slice(24, 32).filter((ans, idx) => ans === questions[idx + 24].correctAnswer).length}/8
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-800">Stratégie et Automatisation (Q33-40)</span>
                    <span className="font-semibold text-indigo-900">
                      {userAnswers.slice(32, 40).filter((ans, idx) => ans === questions[idx + 32].correctAnswer).length}/8
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommandations personnalisées */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-8 shadow-sm">
                <h3 className="font-bold text-amber-900 mb-4 text-lg flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.663 17H4.663M12 3V1M6.364 1.636L5.657.929M1.636 6.364L.929 5.657M4 12H3M12 21V19M18.364 18.364L19.071 19.071M21.364 12.364L22.071 13.071M19 12H21M9.663 17L11.293 15.37C11.923 14.74 12.077 13.777 11.66 12.997L10.34 10.657C9.923 9.877 10.077 8.914 10.707 8.284L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Recommandations pour progresser
                </h3>
                <ul className="space-y-2 text-amber-800">
                  {percentage >= 80 ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Excellent travail ! Continuez à approfondir vos connaissances avec des cas pratiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Explorez les modules avancés pour développer votre expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Partagez vos connaissances et aidez vos camarades</span>
                      </li>
                    </>
                  ) : percentage >= 60 ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Bon travail ! Identifiez les thématiques à renforcer ci-dessus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Revoyez les modules correspondant à vos points faibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Pratiquez avec les quiz thématiques pour consolider</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Prenez le temps de revoir les fondamentaux calmement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>Refaites les modules de formation à votre rythme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>N'hésitez pas à demander de l'aide à votre enseignant</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Message de sauvegarde */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
                <div className="flex items-center justify-center gap-2 text-green-800 mb-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-bold text-lg">Résultats sauvegardés</span>
                </div>
                <p className="text-green-700">
                  Votre fichier <span className="font-mono bg-white px-2 py-1 rounded">{studentName}-{studentFirstName}.json</span> a été téléchargé automatiquement
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/learn"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Retour aux formations
                </Link>
                <Link
                  to="/quizzes"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Autres quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Page de question
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div key={`exam-q-${currentQuestion}`} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* En-tête avec progression */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Question {currentQuestion + 1} sur {questions.length}</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                Examen Final
              </span>
            </div>
            <div className="flex justify-between items-center text-sm mb-3">
              <span>Progression : {Math.round(progress)}%</span>
              <span>Questions validées : {currentQuestion}</span>
            </div>
            <div className="w-full bg-indigo-300/50 rounded-full h-2.5">
              <div 
                className="bg-white h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed">
              {currentQuestionData.question}
            </h2>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentQuestionData.options.map((option, index) => (
                <div 
                  key={`exam-q${currentQuestion}-opt${index}`}
                  onClick={() => handleSelectAnswer(index)}
                  className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedAnswer === index 
                      ? isAnswerValidated
                        ? index === currentQuestionData.correctAnswer
                          ? 'bg-green-100 border-green-400 ring-2 ring-green-200'
                          : 'bg-red-100 border-red-400 ring-2 ring-red-200'
                        : 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-200'
                      : isAnswerValidated && index === currentQuestionData.correctAnswer
                        ? 'bg-green-100 border-green-400'
                        : 'hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-7 w-7 border-2 rounded-full flex items-center justify-center mr-4 mt-0.5 font-bold text-sm ${
                      selectedAnswer === index 
                        ? 'border-indigo-600 bg-indigo-600 text-white' 
                        : 'border-slate-400 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-base md:text-lg text-gray-900 leading-relaxed flex-1">{option}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Explication */}
            {isAnswerValidated && (
              <div className={`p-6 rounded-xl mb-6 border-2 ${
                selectedAnswer === currentQuestionData.correctAnswer
                  ? 'bg-green-50 border-green-200'
                  : 'bg-orange-50 border-orange-200'
              }`}>
                <h3 className={`text-xl font-bold mb-3 flex items-center ${
                  selectedAnswer === currentQuestionData.correctAnswer
                    ? 'text-green-800'
                    : 'text-orange-800'
                }`}>
                  {selectedAnswer === currentQuestionData.correctAnswer ? (
                    <>
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Correct !
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Incorrect
                    </>
                  )}
                </h3>
                <p className="text-gray-800 leading-relaxed">{currentQuestionData.explanation}</p>
              </div>
            )}

            {/* Boutons */}
            <div className="flex justify-between items-center">
              {!isAnswerValidated ? (
                <>
                  <div className="text-sm text-gray-500">
                    Sélectionnez une réponse puis validez
                  </div>
                  <button
                    onClick={handleValidateAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                      selectedAnswer === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Valider ma réponse
                  </button>
                </>
              ) : (
                <>
                  <div className="text-sm text-gray-600">
                    Score actuel : <span className="font-bold text-indigo-600">{score}/{currentQuestion + 1}</span>
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 flex items-center shadow-lg hover:shadow-xl transition-all"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir mes résultats'}
                    <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamQuiz;

