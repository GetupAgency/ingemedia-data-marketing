import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getRandomizedQuiz } from '../data/quizData';
import { Quiz, QuizQuestion } from '../types/quiz';
import { Zap, ChevronLeft, Trophy, Target, Flame, Star, Clock, CheckCircle2, XCircle, ArrowRight, RotateCcw, Download, History, Sparkles } from 'lucide-react';
import winGif from '../assets/win.gif';
import looseGif from '../assets/loose.gif';

// Types pour l'historique des résultats
interface QuizResult {
  id: string;
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  duration: number; // en secondes
  answers: {
    questionIndex: number;
    question: string;
    selectedAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
  }[];
}

// Service de stockage des résultats
const QuizResultService = {
  STORAGE_KEY: 'cmd_quiz_results',

  saveResult(result: QuizResult): void {
    const results = this.getAllResults();
    results.unshift(result); // Ajouter au début
    // Garder les 50 derniers résultats
    if (results.length > 50) results.pop();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(results));
  },

  getAllResults(): QuizResult[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  downloadResult(result: QuizResult): void {
    const data = {
      ...result,
      exportedAt: new Date().toISOString(),
      platform: 'CMD Ingemedia - Data Marketing Quiz'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz_result_${result.date.split('T')[0]}_${result.score}-${result.totalQuestions}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

// Messages fun selon le score
const getScoreMessage = (percentage: number): { title: string; subtitle: string; emoji: string } => {
  if (percentage === 100) return { title: "PERFECTION ABSOLUE !", subtitle: "Tu es un.e Data Marketing GOD !", emoji: "👑" };
  if (percentage >= 90) return { title: "INCROYABLE !", subtitle: "Tu maîtrises le game !", emoji: "🔥" };
  if (percentage >= 80) return { title: "EXCELLENT !", subtitle: "Très solide, continue comme ça !", emoji: "⚡" };
  if (percentage >= 70) return { title: "BIEN JOUÉ !", subtitle: "Tu progresses vraiment bien !", emoji: "💪" };
  if (percentage >= 60) return { title: "PAS MAL !", subtitle: "Tu es sur la bonne voie !", emoji: "👍" };
  if (percentage >= 50) return { title: "PEUT MIEUX FAIRE", subtitle: "Révise encore un peu !", emoji: "📚" };
  if (percentage >= 30) return { title: "OUPS...", subtitle: "Il y a du travail à faire !", emoji: "😅" };
  return { title: "GAME OVER", subtitle: "Mais ce n'est que le début !", emoji: "💀" };
};

// Composant principal
const QuizDetail: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  // Obtenir un quiz avec questions aléatoires (20 questions par défaut)
  const [quizData, setQuizData] = useState<Quiz | null>(() => getRandomizedQuiz(quizId || '', 20));
  const [startTime] = useState<number>(Date.now());

  // États pour gérer le quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerValidated, setIsAnswerValidated] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [answersRecord, setAnswersRecord] = useState<QuizResult['answers']>([]);

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

  // Sauvegarder le résultat quand le quiz est terminé
  useEffect(() => {
    if (isQuizFinished && quizData) {
      const duration = Math.round((Date.now() - startTime) / 1000);
      const result: QuizResult = {
        id: `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        quizId: quizId || '',
        quizTitle: quizData.title,
        score,
        totalQuestions: quizData.questions.length,
        percentage: Math.round((score / quizData.questions.length) * 100),
        date: new Date().toISOString(),
        duration,
        answers: answersRecord
      };
      QuizResultService.saveResult(result);
    }
  }, [isQuizFinished, quizData, score, startTime, quizId, answersRecord]);

  const handleSelectAnswer = useCallback((index: number) => {
    if (!isAnswerValidated) {
      setSelectedAnswer(index);
    }
  }, [isAnswerValidated]);

  const handleValidateAnswer = useCallback(() => {
    if (selectedAnswer !== null && quizData) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(newUserAnswers);

      const isCorrect = selectedAnswer === quizData.questions[currentQuestion].correctAnswer;

      // Enregistrer la réponse
      setAnswersRecord(prev => [...prev, {
        questionIndex: currentQuestion,
        question: quizData.questions[currentQuestion].question,
        selectedAnswer,
        correctAnswer: quizData.questions[currentQuestion].correctAnswer,
        isCorrect
      }]);

      if (isCorrect) {
        setScore(score + 1);
        setStreak(streak + 1);
        if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      } else {
        setStreak(0);
      }

      setIsAnswerValidated(true);
    }
  }, [selectedAnswer, quizData, userAnswers, currentQuestion, score, streak, maxStreak]);

  const handleNextQuestion = useCallback(() => {
    setTimeout(() => {
      if (quizData && currentQuestion < quizData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerValidated(false);
      } else {
        setIsQuizFinished(true);
      }
    }, 0);
  }, [quizData, currentQuestion]);

  const handleRestartQuiz = useCallback(() => {
    setTimeout(() => {
      // Recharger un nouveau quiz avec questions aléatoires
      const newQuiz = getRandomizedQuiz(quizId || '', 20);
      setQuizData(newQuiz);
      setCurrentQuestion(0);
      setScore(0);
      setIsQuizFinished(false);
      setUserAnswers(newQuiz ? Array(newQuiz.questions.length).fill(-1) : []);
      setSelectedAnswer(null);
      setIsAnswerValidated(false);
      setStreak(0);
      setMaxStreak(0);
      setAnswersRecord([]);
    }, 0);
  }, [quizId]);

  if (!quizData) {
    return (
      <div className="min-h-screen bg-dark-900 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
            <XCircle className="w-8 h-8 text-neon-pink" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Quiz non trouvé</h2>
          <p className="text-dark-300 mb-6">Le quiz que tu recherches n'existe pas.</p>
          <Link
            to="/quizzes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-lg font-medium hover:shadow-neon transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour aux quiz
          </Link>
        </div>
      </div>
    );
  }

  const questions = quizData.questions;
  const currentQuestionData: QuizQuestion = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isCorrectAnswer = selectedAnswer === currentQuestionData.correctAnswer;

  // Historique des résultats
  if (showHistory) {
    const results = QuizResultService.getAllResults();
    return (
      <div className="min-h-screen bg-dark-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowHistory(false)}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour au quiz
          </button>

          <div className="bg-dark-800/50 border border-dark-700 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                <History className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Historique des résultats</h2>
                <p className="text-dark-400">{results.length} quiz complétés</p>
              </div>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 mx-auto text-dark-600 mb-4" />
                <p className="text-dark-400">Aucun résultat pour le moment.</p>
                <p className="text-dark-500 text-sm">Complète un quiz pour voir ton historique !</p>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={result.id}
                    className="bg-dark-700/50 rounded-xl p-4 border border-dark-600 hover:border-neon-purple/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold ${
                          result.percentage >= 80 ? 'bg-green-500/20 text-green-400' :
                            result.percentage >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                        }`}>
                          {result.percentage}%
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{result.quizTitle}</h3>
                          <p className="text-sm text-dark-400">
                            {result.score}/{result.totalQuestions} bonnes réponses •{' '}
                            {Math.floor(result.duration / 60)}m {result.duration % 60}s
                          </p>
                          <p className="text-xs text-dark-500">
                            {new Date(result.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => QuizResultService.downloadResult(result)}
                        className="p-2 text-dark-400 hover:text-neon-cyan transition-colors"
                        title="Télécharger le résultat"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Détail des réponses (collapsible) */}
                    <details className="mt-4">
                      <summary className="text-sm text-neon-cyan cursor-pointer hover:text-neon-purple">
                        Voir le détail des réponses
                      </summary>
                      <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
                        {result.answers.map((answer, idx) => (
                          <div
                            key={idx}
                            className={`p-3 rounded-lg text-sm ${
                              answer.isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              {answer.isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              )}
                              <span className="text-dark-200">{answer.question}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/quizzes"
              className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour aux quiz
            </Link>
            <button
              onClick={() => setShowHistory(true)}
              className="flex items-center gap-2 text-dark-400 hover:text-neon-cyan transition-colors"
            >
              <History className="w-5 h-5" />
              Historique
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
              {quizData.title}
            </span>
          </h1>
          <p className="text-dark-300">{quizData.description}</p>
        </div>

        {/* Quiz content */}
        {!isQuizFinished ? (
          <div className="bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Progress header */}
            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 p-4 border-b border-dark-700">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <Target className="w-5 h-5 text-neon-cyan" />
                    Question {currentQuestion + 1}/{questions.length}
                  </span>
                  {streak >= 3 && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium animate-pulse">
                      <Flame className="w-4 h-4" />
                      {streak} en série !
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-dark-300">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-mono">{score} pts</span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
                {currentQuestionData.question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {currentQuestionData.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestionData.correctAnswer;
                  const showCorrect = isAnswerValidated && isCorrect;
                  const showWrong = isAnswerValidated && isSelected && !isCorrect;

                  return (
                    <button
                      key={`q${currentQuestion}-opt${index}`}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={isAnswerValidated}
                      className={`w-full p-5 rounded-xl text-left transition-all duration-300 border-2 ${
                        showCorrect
                          ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/20'
                          : showWrong
                            ? 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/20 animate-shake'
                            : isSelected
                              ? 'bg-neon-purple/20 border-neon-purple shadow-lg shadow-neon-purple/20'
                              : 'bg-dark-700/50 border-dark-600 hover:border-neon-purple/50 hover:bg-dark-700'
                      } ${isAnswerValidated ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          showCorrect
                            ? 'bg-green-500 text-white'
                            : showWrong
                              ? 'bg-red-500 text-white'
                              : isSelected
                                ? 'bg-neon-purple text-white'
                                : 'bg-dark-600 text-dark-300'
                        }`}>
                          {showCorrect ? <CheckCircle2 className="w-5 h-5" /> :
                            showWrong ? <XCircle className="w-5 h-5" /> :
                              String.fromCharCode(65 + index)}
                        </div>
                        <span className={`text-base md:text-lg leading-relaxed ${
                          showCorrect ? 'text-green-300' :
                            showWrong ? 'text-red-300' :
                              'text-dark-100'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation after validation */}
              {isAnswerValidated && (
                <div className={`rounded-xl p-5 mb-6 border ${
                  isCorrectAnswer
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {isCorrectAnswer ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <span className="text-lg font-bold text-green-400">
                          {streak >= 3 ? `CORRECT ! ${streak} en série !` : 'CORRECT !'}
                        </span>
                        {streak >= 5 && <Flame className="w-6 h-6 text-orange-400 animate-bounce" />}
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-400" />
                        <span className="text-lg font-bold text-red-400">Raté !</span>
                      </>
                    )}
                  </div>
                  <p className="text-dark-200 leading-relaxed">{currentQuestionData.explanation}</p>

                  {/* GIF de réaction */}
                  <div className="mt-4 flex justify-center">
                    <img
                      src={isCorrectAnswer ? winGif : looseGif}
                      alt={isCorrectAnswer ? "Victoire !" : "Dommage !"}
                      className="w-48 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex justify-end">
                {!isAnswerValidated ? (
                  <button
                    onClick={handleValidateAnswer}
                    disabled={selectedAnswer === null}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-dark-700 text-dark-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-neon hover:scale-105'
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    Valider ma réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-xl font-semibold text-lg hover:shadow-neon-cyan hover:scale-105 transition-all duration-300"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Results screen */
          <div className="bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Results header */}
            <div className="bg-gradient-to-r from-neon-purple/30 via-neon-pink/30 to-neon-cyan/30 p-8 text-center border-b border-dark-700 relative overflow-hidden">
              {/* Animated sparkles for good scores */}
              {(score / questions.length) * 100 >= 70 && (
                <div className="absolute inset-0 pointer-events-none">
                  <Sparkles className="absolute top-4 left-1/4 w-6 h-6 text-yellow-400 animate-bounce" />
                  <Sparkles className="absolute top-8 right-1/4 w-4 h-4 text-neon-cyan animate-bounce delay-100" />
                  <Sparkles className="absolute bottom-4 left-1/3 w-5 h-5 text-neon-pink animate-bounce delay-200" />
                </div>
              )}

              <div className="text-6xl mb-4">{getScoreMessage(Math.round((score / questions.length) * 100)).emoji}</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                {getScoreMessage(Math.round((score / questions.length) * 100)).title}
              </h2>
              <p className="text-xl text-dark-200">
                {getScoreMessage(Math.round((score / questions.length) * 100)).subtitle}
              </p>
            </div>

            <div className="p-8">
              {/* Score display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                  <div className="text-5xl font-black bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
                    {score}/{questions.length}
                  </div>
                  <p className="text-dark-400">Bonnes réponses</p>
                </div>
                <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                  <div className="text-5xl font-black text-neon-cyan mb-2">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <p className="text-dark-400">Score final</p>
                </div>
                <div className="bg-dark-700/50 rounded-xl p-6 text-center border border-dark-600">
                  <div className="flex items-center justify-center gap-2 text-5xl font-black text-orange-400 mb-2">
                    {maxStreak}
                    <Flame className="w-10 h-10" />
                  </div>
                  <p className="text-dark-400">Meilleure série</p>
                </div>
              </div>

              {/* Score bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-dark-400 mb-2">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out relative ${
                      (score / questions.length) * 100 >= 70
                        ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                        : (score / questions.length) * 100 >= 50
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-400'
                          : 'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}
                    style={{ width: `${(score / questions.length) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Interpretation */}
              <div className="bg-dark-700/30 rounded-xl p-6 mb-8 border border-dark-600">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-neon-cyan" />
                  Analyse de ton résultat
                </h3>
                {score <= questions.length * 0.25 && (
                  <p className="text-dark-200">
                    Tu débutes dans le Data Marketing. Pas de panique ! Retourne sur les cours et les tutoriels pour renforcer tes bases. Chaque expert a commencé quelque part !
                  </p>
                )}
                {score > questions.length * 0.25 && score <= questions.length * 0.5 && (
                  <p className="text-dark-200">
                    Tu as des bases mais il y a encore du chemin. Concentre-toi sur les métriques clés (CTR, CPA, ROAS) et les outils d'analyse. Tu y es presque !
                  </p>
                )}
                {score > questions.length * 0.5 && score <= questions.length * 0.75 && (
                  <p className="text-dark-200">
                    Bon travail ! Tu maîtrises les fondamentaux du Data Marketing. Pour passer au niveau supérieur, travaille sur les cas pratiques et les stratégies d'optimisation.
                  </p>
                )}
                {score > questions.length * 0.75 && (
                  <p className="text-dark-200">
                    Excellent ! Tu as une solide compréhension du Data Marketing. Tu es prêt.e pour des challenges plus avancés comme l'optimisation de tunnels de conversion et l'analyse prédictive.
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-xl font-semibold hover:shadow-neon hover:scale-105 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  Recommencer
                </button>
                <button
                  onClick={() => {
                    const results = QuizResultService.getAllResults();
                    if (results.length > 0) {
                      QuizResultService.downloadResult(results[0]);
                    }
                  }}
                  className="flex items-center gap-2 px-8 py-3 bg-dark-700 text-white rounded-xl font-semibold border border-dark-600 hover:border-neon-cyan hover:text-neon-cyan transition-all"
                >
                  <Download className="w-5 h-5" />
                  Télécharger résultat
                </button>
                <Link
                  to="/quizzes"
                  className="flex items-center gap-2 px-8 py-3 bg-dark-700 text-white rounded-xl font-semibold border border-dark-600 hover:border-neon-purple hover:text-neon-purple transition-all"
                >
                  <Trophy className="w-5 h-5" />
                  Autres quiz
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shake animation for wrong answers */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default QuizDetail;
