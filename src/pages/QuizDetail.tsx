import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { availableQuizzes } from '../data/quizData';
import { Quiz, QuizQuestion } from '../types/quiz';

/**
 * Page d'affichage et de réalisation d'un quiz spécifique
 * 
 * @component
 * @returns {JSX.Element} - La page de quiz
 */
const QuizDetail: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  // Trouver le quiz correspondant à l'ID
  const quizData = availableQuizzes.find(quiz => quiz.id === quizId);
  
  // États pour gérer le quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerValidated, setIsAnswerValidated] = useState(false);

  // Initialiser les réponses utilisateur
  useEffect(() => {
    if (quizData) {
      setUserAnswers(Array(quizData.questions.length).fill(-1));
    }
  }, [quizData]);

  // Rediriger si le quiz n'existe pas
  useEffect(() => {
    if (!quizData && quizId) {
      navigate('/quizzes');
    }
  }, [quizData, quizId, navigate]);

  if (!quizData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Quiz non trouvé</h2>
          <p className="text-gray-600 mb-4">Le quiz que vous recherchez n'existe pas.</p>
          <Link to="/quizzes" className="text-indigo-600 hover:text-indigo-800">
            Retour à la liste des quiz
          </Link>
        </div>
      </div>
    );
  }

  const questions = quizData.questions;

  // Fonction pour gérer la sélection d'une réponse
  const handleSelectAnswer = (index: number) => {
    if (!isAnswerValidated) {
      setSelectedAnswer(index);
    }
  };

  // Fonction pour valider la réponse
  const handleValidateAnswer = () => {
    if (selectedAnswer !== null) {
      // Mettre à jour les réponses de l'utilisateur
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(newUserAnswers);

      // Mettre à jour le score si la réponse est correcte
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      // Marquer la question comme validée
      setIsAnswerValidated(true);
    }
  };

  // Fonction pour passer à la question suivante
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerValidated(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Fonction pour recommencer le quiz
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setUserAnswers(Array(questions.length).fill(-1));
    setSelectedAnswer(null);
    setIsAnswerValidated(false);
  };

  // Calculer le niveau de difficulté actuel
  const getDifficultyLevel = () => {
    const progress = currentQuestion / questions.length;
    if (progress < 0.25) return "Débutant";
    if (progress < 0.5) return "Intermédiaire";
    if (progress < 0.75) return "Avancé";
    return "Expert";
  };

  const currentQuestionData: QuizQuestion = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la page */}
        <div className="mb-6">
          <Link to="/quizzes" className="text-indigo-600 hover:text-indigo-800 flex items-center mb-4">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retour aux quiz
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{quizData.title}</h1>
          <p className="text-gray-600">
            {quizData.description}
          </p>
        </div>

        {/* Contenu principal */}
        {!isQuizFinished ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* En-tête de la question */}
            <div className="bg-indigo-600 p-4">
              <div className="flex justify-between items-center text-white">
                <span className="font-medium">Question {currentQuestion + 1}/{questions.length}</span>
                <span className="px-2 py-1 bg-white text-indigo-600 rounded-full text-sm font-medium">
                  Niveau: {getDifficultyLevel()}
                </span>
              </div>
              <div className="mt-3">
                <div className="w-full bg-indigo-300 rounded-full h-2.5">
                  <div 
                    className="bg-white h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {currentQuestionData.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestionData.options.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAnswer === index 
                        ? isAnswerValidated
                          ? index === currentQuestionData.correctAnswer
                            ? 'bg-green-100 border-green-300'
                            : 'bg-red-100 border-red-300'
                          : 'bg-indigo-50 border-indigo-300'
                        : isAnswerValidated && index === currentQuestionData.correctAnswer
                          ? 'bg-green-100 border-green-300'
                          : 'hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 border rounded-full flex items-center justify-center mr-2 mt-0.5 ${
                        selectedAnswer === index ? 'border-indigo-600' : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="h-3 w-3 bg-indigo-600 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explication (visible seulement après validation) */}
              {isAnswerValidated && (
                <div className={`p-4 rounded-lg mb-6 ${
                  selectedAnswer === currentQuestionData.correctAnswer
                    ? 'bg-green-50 border border-green-100'
                    : 'bg-orange-50 border border-orange-100'
                }`}>
                  <h3 className={`text-lg font-medium mb-2 ${
                    selectedAnswer === currentQuestionData.correctAnswer
                      ? 'text-green-800'
                      : 'text-orange-800'
                  }`}>
                    {selectedAnswer === currentQuestionData.correctAnswer
                      ? 'Correct !'
                      : 'Incorrect'}
                  </h3>
                  <p className="text-gray-700">{currentQuestionData.explanation}</p>
                </div>
              )}

              {/* Boutons */}
              <div className="flex justify-between">
                {!isAnswerValidated ? (
                  <button
                    onClick={handleValidateAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      selectedAnswer === null
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    Valider ma réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Résultats du quiz */
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Quiz terminé !</h2>
              <p className="text-indigo-100">
                Vous avez obtenu un score de {score}/{questions.length}
              </p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                        Votre score
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        {Math.round((score / questions.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div 
                      style={{ width: `${(score / questions.length) * 100}%` }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600">
                    </div>
                  </div>
                </div>
              </div>

              {/* Interprétation du score */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Interprétation de votre score</h3>
                {score <= questions.length * 0.25 && (
                  <p className="text-gray-700">
                    Vous débutez dans ce domaine. Continuez à apprendre les bases et familiarisez-vous avec les termes fondamentaux.
                  </p>
                )}
                {score > questions.length * 0.25 && score <= questions.length * 0.5 && (
                  <p className="text-gray-700">
                    Vous avez des connaissances de base. Approfondissez vos connaissances sur les métriques et les techniques d'analyse.
                  </p>
                )}
                {score > questions.length * 0.5 && score <= questions.length * 0.75 && (
                  <p className="text-gray-700">
                    Bon travail ! Vous avez une bonne compréhension du sujet. Concentrez-vous maintenant sur les techniques avancées d'analyse et de prédiction.
                  </p>
                )}
                {score > questions.length * 0.75 && (
                  <p className="text-gray-700">
                    Excellent ! Vous avez une maîtrise avancée du sujet. Vous pouvez maintenant explorer des concepts plus complexes et des applications pratiques.
                  </p>
                )}
              </div>

              {/* Recommandations de ressources */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-4">Ressources recommandées pour approfondir</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="/learn" className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.332 18.477 18.747 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-medium text-indigo-900">Formation complète</span>
                    </div>
                    <p className="text-sm text-indigo-700">Revisitez les concepts dans notre formation intensive interactive</p>
                  </a>
                  <a href="/tutorials" className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="font-medium text-green-900">Tutoriels pratiques</span>
                    </div>
                    <p className="text-sm text-green-700">Appliquez vos connaissances avec nos guides step-by-step</p>
                  </a>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
                >
                  Recommencer ce quiz
                </button>
                <Link
                  to="/quizzes"
                  className="px-6 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-50"
                >
                  Voir tous les quiz
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetail; 