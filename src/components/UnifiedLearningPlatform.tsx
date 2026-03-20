import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Eye, EyeOff, XCircle, Lock, Unlock, GraduationCap, Target, Clock, Award, Terminal, Zap, Sparkles, Filter, Play, Layers, FlaskConical, Download, HelpCircle, ExternalLink } from 'lucide-react';
import { unifiedLearningPath, LearningModule, Exercise, teacherPassword } from '../data/unifiedLearningPath';
import { practicalExercises, type PracticalExercise } from '../data/practicalExercises';

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
    <div className="fixed top-24 right-4 z-40">
      {isTeacherMode ? (
        <button
          onClick={() => onToggleTeacherMode()}
          className="flex items-center gap-2 bg-gradient-to-r from-neon-green to-cyber-400 text-dark-900 px-4 py-2 rounded-xl shadow-neon-green font-mono text-sm font-semibold hover:shadow-neon transition-all"
        >
          <Unlock className="w-4 h-4" />
          Mode Enseignant
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowPasswordInput(!showPasswordInput)}
            className="flex items-center gap-2 bg-dark-800/80 backdrop-blur border border-dark-600 text-dark-300 px-4 py-2 rounded-xl shadow-lg hover:border-cyber-400/50 hover:text-cyber-400 transition-all font-mono text-sm"
          >
            <Lock className="w-4 h-4" />
            Mode Étudiant
          </button>

          {showPasswordInput && (
            <div className="absolute top-14 right-0 bg-dark-800/95 backdrop-blur border border-dark-600 rounded-xl shadow-2xl p-5 min-w-72">
              <form onSubmit={handlePasswordSubmit}>
                <label className="block text-sm font-mono text-dark-400 mb-2">
                  <span className="text-cyber-400">$</span> password --teacher
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-lg text-dark-100 font-mono placeholder-dark-500 focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all"
                  placeholder="••••••••"
                  autoFocus
                />
                {error && (
                  <p className="text-neon-pink text-sm mt-2 font-mono">
                    <span className="text-neon-pink">error:</span> {error}
                  </p>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-neon transition-all"
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
                    className="flex-1 bg-dark-700 text-dark-300 px-4 py-2 rounded-lg text-sm hover:bg-dark-600 transition-all"
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
    <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center">
            <Terminal className="w-5 h-5 text-dark-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-dark-100 font-display">Quiz : {sectionTitle}</h2>
            <p className="text-dark-400 font-mono text-sm">{questions.length} questions</p>
          </div>
        </div>
        {isTeacherMode && (
          <div className="mt-4 bg-neon-green/10 border border-neon-green/30 rounded-xl p-4">
            <p className="text-neon-green text-sm font-mono">
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
            <div key={question.id} className="border-b border-dark-700/50 pb-8 last:border-b-0">
              <h3 className="text-xl font-semibold text-dark-100 mb-6 leading-relaxed">
                <span className="text-cyber-400 font-mono">Q{questionIndex + 1}.</span> {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option: string, optionIndex: number) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrectOption = optionIndex === question.correctAnswer;

                  let className = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ';

                  if (isSelected && !showCorrection) {
                    className += 'border-cyber-400 bg-cyber-400/10';
                  } else if (showCorrection) {
                    if (isCorrectOption) {
                      className += 'border-neon-green bg-neon-green/10';
                    } else if (isSelected && !isCorrect) {
                      className += 'border-neon-pink bg-neon-pink/10';
                    } else {
                      className += 'border-dark-700 bg-dark-800/30';
                    }
                  } else {
                    className += 'border-dark-700 bg-dark-800/30 hover:border-dark-500 hover:bg-dark-800/50';
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(questionIndex, optionIndex)}
                      className={className}
                      disabled={showCorrection && !isTeacherMode}
                    >
                      <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono text-sm ${
                            isSelected && !showCorrection
                              ? 'bg-cyber-400 text-dark-900'
                              : showCorrection && isCorrectOption
                                ? 'bg-neon-green text-dark-900'
                                : showCorrection && isSelected && !isCorrect
                                  ? 'bg-neon-pink text-dark-900'
                                  : 'bg-dark-700 text-dark-300'
                          }`}>
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="text-left flex-1 text-dark-200 leading-relaxed">{option}</span>
                        </div>
                        <div className="w-6 h-6 flex-shrink-0">
                          {showCorrection && isCorrectOption && (
                            <CheckCircle className="w-6 h-6 text-neon-green" />
                          )}
                          {showCorrection && isSelected && !isCorrect && (
                            <XCircle className="w-6 h-6 text-neon-pink" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showCorrection && (
                <div className="mt-4 p-4 bg-cyber-400/10 rounded-xl border-l-4 border-cyber-400">
                  <p className="text-dark-200">
                    <strong className="font-semibold text-cyber-400">Explication :</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          {showCorrection && (
            <div className="text-lg font-mono">
              <span className="text-dark-400">Score : </span>
              <span className={`font-bold text-xl ${
                calculateScore() / questions.length >= 0.8 ? 'text-neon-green' :
                calculateScore() / questions.length >= 0.6 ? 'text-neon-yellow' :
                'text-neon-pink'
              }`}>
                {calculateScore()}/{questions.length}
              </span>
              <span className="text-dark-500 ml-2">
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 rounded-xl font-semibold hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
            className="px-8 py-3 bg-gradient-to-r from-neon-green to-cyber-400 text-dark-900 rounded-xl font-semibold hover:shadow-neon-green transition-all"
          >
            Continuer vers l'exercice suivant
          </button>
        </div>
      )}

      {!isTeacherMode && !showCorrection && !allAnswered && (
        <p className="mt-4 text-sm text-dark-500 text-center font-mono">
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
      case 'débutant': return 'text-neon-green bg-neon-green/10 border-neon-green/30';
      case 'intermédiaire': return 'text-neon-yellow bg-neon-yellow/10 border-neon-yellow/30';
      case 'avancé': return 'text-neon-pink bg-neon-pink/10 border-neon-pink/30';
      default: return 'text-dark-400 bg-dark-700/50 border-dark-600';
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
    <div className="min-h-screen bg-dark-950 pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <header className="relative bg-dark-800/50 backdrop-blur border-b border-dark-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="inline-flex items-center text-dark-400 hover:text-cyber-400 mb-4 transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            cd ../modules
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-xl flex items-center justify-center shadow-neon">
              <TypeIcon className="w-6 h-6 text-dark-900" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-dark-100 font-display">{exercise.title}</h1>
              <p className="text-dark-400">{exercise.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getDifficultyColor(exercise.difficulty)}`}>
              <Zap className="w-3 h-3 inline mr-1" />
              {exercise.difficulty}
            </span>
            <span className="flex items-center gap-1 text-dark-400 font-mono">
              <Clock className="w-4 h-4 text-cyber-400" />
              {exercise.duration}
            </span>
            <span className="text-dark-500 font-mono">
              [{exerciseIndex + 1}/{totalExercises}]
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-dark-700 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full transition-all duration-500 bg-gradient-to-r from-cyber-400 to-neon-purple shadow-neon"
                style={{ width: `${((exerciseIndex + 1) / totalExercises) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showQuiz ? (
          <div className="space-y-8">
            {/* Theory Content */}
            <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8 prose-cyber">
              <div dangerouslySetInnerHTML={{ __html: exercise.content }} />
            </div>

            {/* Practical Exercise */}
            {exercise.practicalExercise && (
              <div className="bg-gradient-to-br from-neon-purple/10 to-cyber-400/10 border border-neon-purple/30 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center mr-4 shadow-neon-pink">
                    <Target className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-100 font-display">{exercise.practicalExercise.title}</h3>
                    <p className="text-dark-400 mt-1">{exercise.practicalExercise.description}</p>
                  </div>
                </div>

                <div className="bg-dark-900/50 rounded-xl p-6 mb-6 border border-dark-700/50 prose-cyber">
                  <div dangerouslySetInnerHTML={{ __html: exercise.practicalExercise.instructions }} />
                </div>

                {exercise.practicalExercise.hints && (
                  <div className="bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-neon-yellow mb-3 text-sm flex items-center font-mono">
                      <Sparkles className="w-4 h-4 mr-2" />
                      hints.show()
                    </h4>
                    <ul className="space-y-2">
                      {exercise.practicalExercise.hints.map((hint, index) => (
                        <li key={index} className="text-dark-300 text-sm leading-relaxed flex items-start">
                          <ChevronRight className="w-4 h-4 text-neon-yellow mr-2 mt-0.5 flex-shrink-0" />
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-cyber-400/10 border border-cyber-400/30 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-cyber-400 mb-2 text-sm font-mono">expected_output:</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">{exercise.practicalExercise.expectedOutput}</p>
                </div>

                {/* Teacher Correction */}
                {exercise.teacherCorrection && isTeacherMode && (
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <button
                        onClick={() => setShowCorrection(!showCorrection)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-cyber-400 text-dark-900 rounded-xl font-semibold hover:shadow-neon-green transition-all"
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
                      <div className="bg-dark-900/50 rounded-xl p-6 border-l-4 border-neon-green prose-cyber">
                        <div className="mb-4 bg-neon-green/10 border border-neon-green/30 rounded-lg p-3">
                          <p className="text-neon-green text-sm font-mono">
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
                  <div className="mb-6 bg-dark-800/50 border border-dark-700/50 rounded-xl p-4 text-center">
                    <p className="text-dark-400 text-sm font-mono">
                      <Lock className="w-4 h-4 inline mr-2" />
                      La correction de cet exercice est disponible uniquement pour les enseignants
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-6">
              <button
                onClick={onPrevious}
                disabled={exerciseIndex === 0}
                className="flex items-center gap-2 px-6 py-3 bg-dark-700 text-dark-300 rounded-xl hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono"
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
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 rounded-xl font-semibold hover:shadow-neon transition-all"
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
      case 'débutant': return 'text-neon-green bg-neon-green/10 border-neon-green/30';
      case 'intermédiaire': return 'text-neon-yellow bg-neon-yellow/10 border-neon-yellow/30';
      case 'avancé': return 'text-neon-pink bg-neon-pink/10 border-neon-pink/30';
      default: return 'text-dark-400 bg-dark-700/50 border-dark-600';
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
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />

      <TeacherModeToggle
        isTeacherMode={isTeacherMode}
        onToggleTeacherMode={handleToggleTeacherMode}
      />

      {/* Header */}
      <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-cyber-400" />
            <span className="text-xs font-mono text-dark-300">
              <span className="text-cyber-400">{unifiedLearningPath.length}</span> modules disponibles
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-dark-100">Formation </span>
            <span className="text-gradient">Data Marketing</span>
          </h1>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Parcours d'apprentissage progressif et structuré pour maîtriser le marketing basé sur les données.
            <span className="text-cyber-400 font-mono"> ./start --learning-path</span>
          </p>
          {isTeacherMode && (
            <div className="mt-6 bg-neon-green/10 border border-neon-green/30 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-neon-green font-mono text-sm">
                🎓 Mode Enseignant Activé - Toutes les corrections sont visibles
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Progress Overview */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-dark-100 font-display flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-400" />
              Progression globale
            </h2>
            <span className="text-2xl font-bold text-gradient font-mono">{calculateOverallProgress()}%</span>
          </div>
          <div className="w-full bg-dark-700 rounded-full h-2 mb-3">
            <div
              className="bg-gradient-to-r from-cyber-400 to-neon-purple h-2 rounded-full transition-all duration-500 shadow-neon"
              style={{ width: `${calculateOverallProgress()}%` }}
            />
          </div>
          <div className="text-sm text-dark-400 font-mono">
            <span className="text-neon-green">{Object.values(progress).filter((p: any) => p.status === 'completed').length}</span>
            /{unifiedLearningPath.length} modules terminés
          </div>
        </div>
      </div>

      {/* Interactive Modules Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-dark-100 mb-6 font-display flex items-center gap-3">
          <Layers className="w-6 h-6 text-neon-pink" />
          Modules interactifs
          <span className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs font-mono rounded-full">NEW</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tunnel de Conversion */}
          <Link
            to="/learn/conversion-funnel"
            className="group relative bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 border border-neon-purple/30 rounded-2xl p-6 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center shadow-neon-pink">
                  <Filter className="w-7 h-7 text-dark-900" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neon-yellow/20 text-neon-yellow text-xs font-mono rounded-full border border-neon-yellow/30">
                    Interactif
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark-100 mb-2 font-display group-hover:text-gradient-pink transition-all">
                Tunnel de Conversion
              </h3>

              <p className="text-dark-400 text-sm mb-4">
                De l'impression publicitaire à l'achat final : visualisez et analysez chaque étape du parcours client avec des animations interactives.
              </p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-dark-500 font-mono">
                  <Clock className="w-4 h-4 text-neon-purple" />
                  <span>45 min</span>
                </div>
                <div className="flex items-center gap-1.5 text-dark-500 font-mono">
                  <Target className="w-4 h-4 text-neon-pink" />
                  <span>7 sections</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-neon-purple font-mono text-sm group-hover:gap-3 transition-all">
                <Play className="w-4 h-4" />
                <span>Démarrer le module</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Critères de Ciblage */}
          <Link
            to="/learn/targeting-criteria"
            className="group relative bg-gradient-to-br from-cyber-400/10 to-neon-green/10 border border-cyber-400/30 rounded-2xl p-6 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/20"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-400/5 to-neon-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyber-400 to-neon-green rounded-xl flex items-center justify-center shadow-neon">
                  <Target className="w-7 h-7 text-dark-900" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neon-yellow/20 text-neon-yellow text-xs font-mono rounded-full border border-neon-yellow/30">
                    Interactif
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark-100 mb-2 font-display group-hover:text-gradient transition-all">
                Critères de Ciblage
              </h3>

              <p className="text-dark-400 text-sm mb-4">
                Explorez les 6 dimensions du ciblage publicitaire : démographique, géographique, psychographique, comportemental, technographique et contextuel.
              </p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-dark-500 font-mono">
                  <Clock className="w-4 h-4 text-cyber-400" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-1.5 text-dark-500 font-mono">
                  <Target className="w-4 h-4 text-neon-green" />
                  <span>6 catégories • 31 critères</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-cyber-400 font-mono text-sm group-hover:gap-3 transition-all">
                <Play className="w-4 h-4" />
                <span>Explorer la roue du ciblage</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Practical Exercises Section */}
      <PracticalExercisesSection isTeacherMode={isTeacherMode} />

      {/* Learning Path */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dark-100 mb-8 font-display flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-neon-purple" />
          Parcours d'apprentissage
        </h2>

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
                className={`group bg-dark-800/30 backdrop-blur border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                  isCompleted
                    ? 'border-neon-green/50 bg-neon-green/5'
                    : isInProgress
                      ? 'border-cyber-400/50 bg-cyber-400/5'
                      : isLocked
                        ? 'border-dark-700/50 opacity-60'
                        : 'border-dark-700/50 hover:border-cyber-400/30 hover:shadow-lg hover:shadow-cyber-400/10'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isCompleted
                            ? 'bg-gradient-to-br from-neon-green to-cyber-400 shadow-neon-green'
                            : isInProgress
                              ? 'bg-gradient-to-br from-cyber-400 to-neon-purple shadow-neon'
                              : 'bg-dark-700'
                        }`}>
                          <BookOpen className={`w-7 h-7 ${
                            isCompleted || isInProgress ? 'text-dark-900' : 'text-dark-400'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-dark-500 font-mono text-xs">module_{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-dark-100 font-display group-hover:text-gradient transition-all">{module.title}</h3>
                          <p className="text-dark-400 mt-1">{module.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getLevelColor(module.level)}`}>
                          <Zap className="w-3 h-3 inline mr-1" />
                          {module.level}
                        </span>
                        <span className="text-sm text-dark-500 font-mono">
                          {module.exercises.length} exercices
                        </span>
                        {module.prerequisites && (
                          <span className="text-sm text-dark-500 font-mono">
                            <Lock className="w-3 h-3 inline mr-1" />
                            Prérequis : {module.prerequisites.length} module(s)
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <h4 className="font-mono text-dark-500 mb-3 text-xs">
                          <span className="text-cyber-400">$</span> objectives.list()
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-dark-300">
                          {module.learningObjectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className={`w-4 h-4 mt-0.5 mr-2 shrink-0 ${
                                isCompleted ? 'text-neon-green' : 'text-cyber-400'
                              }`} />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {progressPercent > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm font-mono mb-2">
                            <span className="text-dark-500">progress</span>
                            <span className={isCompleted ? 'text-neon-green' : 'text-cyber-400'}>{progressPercent}%</span>
                          </div>
                          <div className="w-full bg-dark-700 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full transition-all duration-500 ${
                                isCompleted ? 'bg-neon-green shadow-neon-green' : 'bg-cyber-400 shadow-neon'
                              }`}
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-6">
                      {isCompleted && (
                        <div className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-neon-green" />
                        </div>
                      )}
                      {isLocked && (
                        <div className="w-10 h-10 bg-dark-700/50 rounded-full flex items-center justify-center">
                          <Lock className="w-5 h-5 text-dark-500" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-dark-700/50">
                    <div className="text-sm text-dark-500 font-mono">
                      {isLocked
                        ? '// Terminez les modules précédents pour débloquer'
                        : isCompleted
                          ? '// Module terminé avec succès ✓'
                          : isInProgress
                            ? '// Module en cours...'
                            : '// Prêt à commencer'
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
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        isLocked
                          ? 'bg-dark-700 text-dark-500 cursor-not-allowed'
                          : isCompleted
                            ? 'bg-gradient-to-r from-neon-green to-cyber-400 text-dark-900 hover:shadow-neon-green'
                            : 'bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 hover:shadow-neon'
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

// ==========================================
// Practical Exercises Section
// ==========================================
// NOTE: dangerouslySetInnerHTML below renders STATIC content from practicalExercises.ts
// (developer-authored HTML strings), not user input. Same pattern as the rest of this file.

const levelColors = {
  debutant: { badge: 'bg-neon-green/20 text-neon-green border-neon-green/30', accent: 'text-neon-green' },
  intermediaire: { badge: 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30', accent: 'text-neon-yellow' },
  avance: { badge: 'bg-neon-pink/20 text-neon-pink border-neon-pink/30', accent: 'text-neon-pink' },
};

const PracticalExercisesSection: React.FC<{ isTeacherMode: boolean }> = ({ isTeacherMode }) => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [showCorrections, setShowCorrections] = useState<Record<string, boolean>>({});

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <h2 className="text-2xl font-bold text-dark-100 mb-2 font-display flex items-center gap-3">
        <FlaskConical className="w-6 h-6 text-neon-orange" />
        Exercices pratiques
        <span className="px-2 py-1 bg-neon-orange/20 text-neon-orange text-xs font-mono rounded-full">
          {practicalExercises.length} exercices
        </span>
      </h2>
      <p className="text-dark-500 text-sm mb-6">
        Datasets reels ou simules. Telechargez les donnees, analysez-les avec l'IA, proposez des recommandations business.
      </p>

      <div className="space-y-3">
        {practicalExercises.map(ex => {
          const isExpanded = expandedExercise === ex.id;
          const colors = levelColors[ex.level];

          return (
            <div
              key={ex.id}
              className={`bg-dark-800/50 border rounded-xl transition-all duration-200 ${
                isExpanded ? 'border-neon-orange/30' : 'border-dark-700/50 hover:border-dark-600'
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedExercise(isExpanded ? null : ex.id)}
                className="w-full flex items-start gap-4 px-5 py-4 text-left"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-sm bg-neon-orange/10 text-neon-orange border border-neon-orange/20">
                  {ex.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-dark-100 font-semibold font-display">{ex.title}</span>
                    <span className={`px-2 py-0.5 text-xs font-mono rounded-full border ${colors.badge}`}>
                      {ex.level}
                    </span>
                    <span className="text-dark-600 text-xs font-mono">{ex.duration}</span>
                  </div>
                  <p className="text-dark-500 text-xs">{ex.concept}</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-dark-500 flex-shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>

              {/* Expanded */}
              {isExpanded && (
                <div className="px-5 pb-5 space-y-4">
                  {/* Scenario */}
                  <div className="bg-dark-900/50 border border-dark-700/30 rounded-xl p-4">
                    <p className="text-dark-400 text-sm leading-relaxed italic">"{ex.scenario}"</p>
                    <p className="text-dark-600 text-xs font-mono mt-2">Source : {ex.source}</p>
                  </div>

                  {/* Dataset */}
                  <div className="bg-neon-orange/5 border border-neon-orange/20 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-dark-200 text-sm font-semibold">{ex.dataset.name}</p>
                        <p className="text-dark-500 text-xs">{ex.dataset.description}</p>
                      </div>
                      {ex.dataset.url ? (
                        <a
                          href={ex.dataset.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-dark-700/50 border border-dark-600/50 rounded-lg text-dark-300 text-xs font-mono hover:border-neon-orange/30 hover:text-neon-orange transition-all flex-shrink-0"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Kaggle
                        </a>
                      ) : ex.dataset.file ? (
                        <a
                          href={`/data/${ex.dataset.file}`}
                          download
                          className="flex items-center gap-1 px-3 py-1.5 bg-dark-700/50 border border-dark-600/50 rounded-lg text-dark-300 text-xs font-mono hover:border-neon-orange/30 hover:text-neon-orange transition-all flex-shrink-0"
                        >
                          <Download className="w-3 h-3" />
                          CSV
                        </a>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-4 text-dark-600 text-xs font-mono">
                      <span>{ex.dataset.rows}</span>
                      <span className="truncate">{ex.dataset.columns}</span>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div>
                    <p className="text-dark-400 text-xs font-mono mb-2">Etapes a suivre</p>
                    <ol className="space-y-2">
                      {ex.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-dark-300 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-md bg-dark-700/50 flex items-center justify-center text-dark-500 text-xs font-mono">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Teacher correction */}
                  {isTeacherMode && ex.teacherCorrection && (
                    <div>
                      <button
                        onClick={() => setShowCorrections(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                        className="flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-lg text-neon-green text-sm font-mono hover:bg-neon-green/20 transition-all"
                      >
                        {showCorrections[ex.id] ? (
                          <><EyeOff className="w-4 h-4" /> Masquer correction</>
                        ) : (
                          <><Eye className="w-4 h-4" /> Correction enseignant</>
                        )}
                      </button>

                      {showCorrections[ex.id] && (
                        <div className="mt-3 bg-dark-900/60 border-l-4 border-neon-green rounded-xl p-5 prose-cyber">
                          <div className="mb-3 flex items-center gap-2 text-neon-green text-xs font-mono">
                            <Layers className="w-3.5 h-3.5" />
                            Correction enseignant
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: ex.teacherCorrection }} />
                        </div>
                      )}
                    </div>
                  )}

                  {!isTeacherMode && (
                    <span className="flex items-center gap-1.5 text-dark-600 text-xs font-mono">
                      <Lock className="w-3 h-3" />
                      Correction reservee a l'enseignant
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnifiedLearningPlatform;
