import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Eye, EyeOff, XCircle } from 'lucide-react';
import { DataMarketingModule, Section, QuizQuestion } from '../data/dataMarketingModules';

interface ModuleViewerProps {
  module: DataMarketingModule;
  onBack: () => void;
}

interface QuizWithCorrectionProps {
  questions: QuizQuestion[];
  sectionTitle: string;
  onComplete: () => void;
}

const QuizWithCorrection: React.FC<QuizWithCorrectionProps> = ({ questions, sectionTitle, onComplete }) => {
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [showCorrection, setShowCorrection] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (showCorrection) return;
    
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mini-quiz : {sectionTitle}</h2>
        <p className="text-gray-600">{questions.length} questions</p>
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
                {question.options.map((option, optionIndex) => {
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
                      disabled={showCorrection}
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
      </div>

      {showCorrection && (
        <div className="mt-6 text-center">
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors"
          >
            Continuer vers la section suivante
          </button>
        </div>
      )}

      {!showCorrection && !allAnswered && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Veuillez répondre à toutes les questions pour voir la correction
        </p>
      )}
    </div>
  );
};

const CasPratique: React.FC<{
  title: string;
  description: string;
  exercice: string;
  correction?: string;
}> = ({ title, description, exercice, correction }) => {
  const [showCorrection, setShowCorrection] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-900">{title}</h3>
          <p className="text-purple-700 mt-1">{description}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div dangerouslySetInnerHTML={{ __html: exercice }} />
      </div>

      {correction && (
        <>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowCorrection(!showCorrection)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showCorrection ? (
                <>
                  <EyeOff className="w-5 h-5" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5" />
                  Voir la correction
                </>
              )}
            </button>
          </div>

          {showCorrection && (
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <div dangerouslySetInnerHTML={{ __html: correction }} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const ModuleViewer: React.FC<ModuleViewerProps> = ({ module, onBack }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState<any>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dataMarketingProgress');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
      
      // Marquer comme "en cours"
      const newProgress = { ...progress };
      if (!newProgress[module.id]) {
        newProgress[module.id] = 'in-progress';
        localStorage.setItem('dataMarketingProgress', JSON.stringify(newProgress));
        setProgress(newProgress);
      }
    }
  }, [module.id]);

  const section = module.sections[currentSection];

  const handleNext = () => {
    if (showQuiz && section.quiz) {
      // Passer à la section suivante après le quiz
      if (currentSection < module.sections.length - 1) {
        setCurrentSection(currentSection + 1);
        setShowQuiz(false);
      } else {
        // Module terminé
        markModuleComplete();
      }
    } else if (section.quiz) {
      setShowQuiz(true);
    } else {
      if (currentSection < module.sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else {
        markModuleComplete();
      }
    }
  };

  const markModuleComplete = () => {
    const newProgress = { ...progress };
    newProgress[module.id] = 'completed';
    localStorage.setItem('dataMarketingProgress', JSON.stringify(newProgress));
    setProgress(newProgress);
    onBack();
  };

  const progressPercent = ((currentSection + 1) / module.sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
          <h1 className="text-3xl font-bold text-white mt-2">{module.title}</h1>
          <p className="text-indigo-200 mt-1">{module.description}</p>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-white mb-2">
              <span>Section {currentSection + 1} sur {module.sections.length}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500 bg-gradient-to-r from-indigo-200 to-white"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showQuiz ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>

            <div className="mb-8">
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>

            {section.casePratique && (
              <CasPratique
                title={section.casePratique.title}
                description={section.casePratique.description}
                exercice={section.casePratique.exercice}
                correction={section.casePratique.correction}
              />
            )}

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => currentSection > 0 && setCurrentSection(currentSection - 1)}
                disabled={currentSection === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Précédent
              </button>
              
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
              >
                {section.quiz ? 'Passer au quiz' : 
                 currentSection === module.sections.length - 1 ? 'Terminer le module' : 'Suivant'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <QuizWithCorrection
              questions={section.quiz || []}
              sectionTitle={section.title}
              onComplete={handleNext}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default ModuleViewer;
