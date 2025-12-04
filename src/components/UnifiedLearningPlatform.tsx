import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Eye, EyeOff, XCircle, Lock, Unlock, GraduationCap, Target, Clock, Award } from 'lucide-react';
import { unifiedLearningPath, LearningModule, Exercise, teacherPassword } from '../data/unifiedLearningPath';

// Fonction utilitaire pour scroll vers le haut
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

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

interface QuizComponentProps {
  questions: any[];
  sectionTitle: string;
  onComplete: () => void;
  isTeacherMode: boolean;
}

  const QuizComponent: React.FC<QuizComponentProps> = ({ questions, sectionTitle, onComplete, isTeacherMode }) => {
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [showCorrection, setShowCorrection] = useState(isTeacherMode);

  // Scroll vers le haut quand le composant se monte
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (showCorrection && !isTeacherMode) return;
    
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const allAnswered = questions.every((_, index) => answers[index] !== undefined && answers[index] !== null);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz : {sectionTitle}</h2>
        <p className="text-gray-600">{questions.length} questions</p>
        {isTeacherMode && (
          <div className="mt-2 bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm font-medium">
              🎓 Mode enseignant : Les corrections sont visibles par défaut
            </p>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {questions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const isCorrect = selectedAnswer === question.correctAnswer;
          
          return (
            <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Question {questionIndex + 1} : {question.question}
              </h3>

              <div className="space-y-4">
                {question.options.map((option: string, optionIndex: number) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrectOption = optionIndex === question.correctAnswer;
                  
                  let className = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
                  
                  if (isSelected && !showCorrection) {
                    className += 'border-indigo-500 bg-indigo-50';
                  } else if (showCorrection) {
                    if (isCorrectOption) {
                      className += 'border-green-500 bg-green-50';
                    } else if (isSelected && !isCorrect) {
                      className += 'border-red-500 bg-red-50';
                    } else {
                      className += 'border-gray-200 bg-gray-50';
                    }
                  } else {
                    className += 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(questionIndex, optionIndex)}
                      className={className}
                      disabled={showCorrection && !isTeacherMode}
                    >
                      <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-sm">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="text-left flex-1">{option}</span>
                        </div>
                        {showCorrection && (
                          <>
                            {isCorrectOption && (
                              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            )}
                            {isSelected && !isCorrect && (
                              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                            )}
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showCorrection && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-900">
                    <strong className="font-semibold">Explication :</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          {showCorrection && (
            <div className="text-lg">
              <span className="font-semibold text-gray-900">Score : </span>
              <span className={`font-bold text-xl ${
                calculateScore() / questions.length >= 0.8 ? 'text-green-600' :
                calculateScore() / questions.length >= 0.6 ? 'text-orange-600' :
                'text-red-600'
              }`}>
                {calculateScore()}/{questions.length}
              </span>
              <span className="text-gray-600 ml-2">
                ({Math.round((calculateScore() / questions.length) * 100)}%)
              </span>
            </div>
          )}
        </div>

        {!isTeacherMode && (
          <button
            onClick={() => {
              if (showCorrection) {
                setAnswers({});
                setShowCorrection(false);
              } else {
                setShowCorrection(true);
              }
            }}
            disabled={!showCorrection && !allAnswered}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {showCorrection ? (
              <>
                <EyeOff className="w-5 h-5" />
                Recommencer le quiz
              </>
            ) : (
              <>
                <Eye className="w-5 h-5" />
                Voir la correction
              </>
            )}
          </button>
        )}
      </div>

      {showCorrection && (
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              scrollToTop();
              onComplete();
            }}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors"
          >
            Continuer vers l'exercice suivant
          </button>
        </div>
      )}

      {!isTeacherMode && !showCorrection && !allAnswered && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Veuillez répondre à toutes les questions pour voir la correction
        </p>
      )}
    </div>
  );
};

interface ExerciseViewerProps {
  exercise: Exercise;
  moduleId: string;
  exerciseIndex: number;
  totalExercises: number;
  onNext: () => void;
  onPrevious: () => void;
  onBack: () => void;
  isTeacherMode: boolean;
}

const ExerciseViewer: React.FC<ExerciseViewerProps> = ({
  exercise,
  moduleId,
  exerciseIndex,
  totalExercises,
  onNext,
  onPrevious,
  onBack,
  isTeacherMode
}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCorrection, setShowCorrection] = useState(isTeacherMode);

  // Scroll vers le haut quand on change d'exercice
  useEffect(() => {
    scrollToTop();
  }, [exerciseIndex]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'débutant': return 'bg-green-100 text-green-800';
      case 'intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'theory': return BookOpen;
      case 'practice': return Target;
      case 'analysis': return Eye;
      case 'calculation': return GraduationCap;
      case 'case-study': return Award;
      default: return BookOpen;
    }
  };

  const TypeIcon = getTypeIcon(exercise.type);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-white hover:text-indigo-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux modules
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <TypeIcon className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-3xl font-bold text-white">{exercise.title}</h1>
              <p className="text-indigo-200">{exercise.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-indigo-200">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {exercise.duration}
            </span>
            <span>
              Exercice {exerciseIndex + 1} sur {totalExercises}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500 bg-gradient-to-r from-indigo-200 to-white"
                style={{ width: `${((exerciseIndex + 1) / totalExercises) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showQuiz ? (
          <div className="space-y-8">
            {/* Theory Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div dangerouslySetInnerHTML={{ __html: exercise.content }} />
            </div>

            {/* Practical Exercise */}
            {exercise.practicalExercise && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">{exercise.practicalExercise.title}</h3>
                    <p className="text-purple-700 mt-1">{exercise.practicalExercise.description}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <div dangerouslySetInnerHTML={{ __html: exercise.practicalExercise.instructions }} />
                </div>

                {exercise.practicalExercise.hints && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-amber-900 mb-3 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Conseils méthodologiques
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {exercise.practicalExercise.hints.map((hint, index) => (
                        <li key={index} className="text-amber-800 text-xs leading-relaxed">{hint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-indigo-900 mb-2 text-sm">Livrable attendu</h4>
                  <p className="text-indigo-800 text-sm leading-relaxed">{exercise.practicalExercise.expectedOutput}</p>
                </div>

                {/* Teacher Correction */}
                {exercise.teacherCorrection && isTeacherMode && (
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <button
                        onClick={() => setShowCorrection(!showCorrection)}
                        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {showCorrection ? (
                          <>
                            <EyeOff className="w-5 h-5" />
                            Masquer la correction
                          </>
                        ) : (
                          <>
                            <Eye className="w-5 h-5" />
                            Correction (Mode Enseignant)
                          </>
                        )}
                      </button>
                    </div>

                    {showCorrection && (
                      <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-green-800 text-sm font-medium">
                            🎓 Correction enseignant - Visible car vous êtes en mode enseignant
                          </p>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: exercise.teacherCorrection }} />
                      </div>
                    )}
                  </div>
                )}
                
                {/* Message pour les étudiants */}
                {exercise.teacherCorrection && !isTeacherMode && (
                  <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-blue-800 text-sm">
                      🔒 La correction de cet exercice est disponible uniquement pour les enseignants
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={onPrevious}
                disabled={exerciseIndex === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Précédent
              </button>
              
              <button
                onClick={() => {
                  if (exercise.quiz) {
                    scrollToTop();
                    setShowQuiz(true);
                  } else {
                    scrollToTop();
                    onNext();
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {exercise.quiz ? 'Passer au quiz' : 
                 exerciseIndex === totalExercises - 1 ? 'Terminer le module' : 'Suivant'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <QuizComponent
              questions={exercise.quiz || []}
              sectionTitle={exercise.title}
              onComplete={() => {
                setShowQuiz(false);
                scrollToTop();
                onNext();
              }}
              isTeacherMode={isTeacherMode}
            />
          </div>
        )}
      </main>
    </div>
  );
};

const UnifiedLearningPlatform: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [progress, setProgress] = useState<{[key: string]: any}>({});
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('unifiedLearningProgress');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    }
  }, []);

  const handleToggleTeacherMode = (password?: string) => {
    if (password === teacherPassword) {
      setIsTeacherMode(true);
    } else {
      setIsTeacherMode(false);
    }
  };

  const calculateModuleProgress = (moduleId: string) => {
    const moduleProgress = progress[moduleId];
    if (!moduleProgress) return 0;
    
    const module = unifiedLearningPath.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completedExercises = moduleProgress.completedExercises || [];
    return Math.round((completedExercises.length / module.exercises.length) * 100);
  };

  const calculateOverallProgress = () => {
    const totalModules = unifiedLearningPath.length;
    const completedModules = Object.values(progress).filter((p: any) => p.status === 'completed').length;
    return Math.round((completedModules / totalModules) * 100);
  };

  const handleExerciseComplete = () => {
    if (!selectedModule) return;
    
    const newProgress = { ...progress };
    if (!newProgress[selectedModule.id]) {
      newProgress[selectedModule.id] = { status: 'in-progress', completedExercises: [] };
    }
    
    const exerciseId = selectedModule.exercises[currentExercise].id;
    if (!newProgress[selectedModule.id].completedExercises.includes(exerciseId)) {
      newProgress[selectedModule.id].completedExercises.push(exerciseId);
    }
    
    if (currentExercise < selectedModule.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      newProgress[selectedModule.id].status = 'completed';
      setSelectedModule(null);
      setCurrentExercise(0);
    }
    
    localStorage.setItem('unifiedLearningProgress', JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'débutant': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermédiaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'avancé': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (selectedModule) {
    return (
      <>
        <TeacherModeToggle 
          isTeacherMode={isTeacherMode} 
          onToggleTeacherMode={handleToggleTeacherMode} 
        />
        <ExerciseViewer
          exercise={selectedModule.exercises[currentExercise]}
          moduleId={selectedModule.id}
          exerciseIndex={currentExercise}
          totalExercises={selectedModule.exercises.length}
          onNext={handleExerciseComplete}
          onPrevious={() => {
            if (currentExercise > 0) {
              scrollToTop();
              setCurrentExercise(currentExercise - 1);
            }
          }}
          onBack={() => {
            scrollToTop();
            setSelectedModule(null);
            setCurrentExercise(0);
          }}
          isTeacherMode={isTeacherMode}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <TeacherModeToggle 
        isTeacherMode={isTeacherMode} 
        onToggleTeacherMode={handleToggleTeacherMode} 
      />
      
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Formation Data Marketing Complète
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Parcours d'apprentissage progressif et structuré pour maîtriser le marketing basé sur les données
            </p>
            {isTeacherMode && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-green-800 font-medium">
                  🎓 Mode Enseignant Activé - Toutes les corrections sont visibles
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Progression globale</h2>
            <span className="text-2xl font-bold text-indigo-600">{calculateOverallProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${calculateOverallProgress()}%` }}
            />
          </div>
          <div className="text-sm text-gray-600">
            {Object.values(progress).filter((p: any) => p.status === 'completed').length} sur {unifiedLearningPath.length} modules terminés
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Parcours d'apprentissage</h2>
        
        <div className="space-y-6">
          {unifiedLearningPath.map((module, index) => {
            const moduleProgress = progress[module.id];
            const progressPercent = calculateModuleProgress(module.id);
            const isCompleted = moduleProgress?.status === 'completed';
            const isInProgress = moduleProgress?.status === 'in-progress';
            const isLocked = module.prerequisites && 
              !module.prerequisites.every(prereq => progress[prereq]?.status === 'completed');
            
            return (
              <div
                key={module.id}
                className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-200 ${
                  isCompleted 
                    ? 'border-green-500 bg-green-50' 
                    : isInProgress 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : isLocked
                        ? 'border-gray-300 bg-gray-50 opacity-60'
                        : 'border-gray-200 hover:border-indigo-300 hover:shadow-xl'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-100' 
                            : isInProgress 
                              ? 'bg-indigo-100' 
                              : 'bg-gray-100'
                        }`}>
                          <BookOpen className={`w-6 h-6 ${
                            isCompleted 
                              ? 'text-green-600' 
                              : isInProgress 
                                ? 'text-indigo-600' 
                                : 'text-gray-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                          <p className="text-gray-600 mt-1">{module.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(module.level)}`}>
                          {module.level}
                        </span>
                        <span className="text-sm text-gray-600">
                          {module.exercises.length} exercices
                        </span>
                        {module.prerequisites && (
                          <span className="text-sm text-gray-500">
                            Prérequis : {module.prerequisites.length} module(s)
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Objectifs d'apprentissage :</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-700">
                          {module.learningObjectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {progressPercent > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progression du module</span>
                            <span>{progressPercent}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                isCompleted ? 'bg-green-500' : 'bg-indigo-500'
                              }`}
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-6">
                      {isCompleted && (
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      )}
                      {isLocked && (
                        <Lock className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {isLocked 
                        ? 'Terminez les modules précédents pour débloquer'
                        : isCompleted
                          ? 'Module terminé avec succès'
                          : isInProgress
                            ? 'Module en cours'
                            : 'Prêt à commencer'
                      }
                    </div>
                    
                    <button
                      onClick={() => {
                        if (!isLocked) {
                          scrollToTop();
                          setSelectedModule(module);
                          setCurrentExercise(0);
                        }
                      }}
                      disabled={isLocked}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                        isLocked
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : isCompleted
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {isLocked 
                        ? 'Verrouillé'
                        : isCompleted
                          ? 'Réviser'
                          : isInProgress
                            ? 'Continuer'
                            : 'Commencer'
                      }
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UnifiedLearningPlatform;

