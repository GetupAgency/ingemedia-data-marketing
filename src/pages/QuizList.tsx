import React from 'react';
import { Link } from 'react-router-dom';
import { availableQuizzes } from '../data/quizData';

/**
 * Page affichant la liste des quiz disponibles
 * 
 * @component
 * @returns {JSX.Element} - La page de liste des quiz
 */
const QuizList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la page */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Data Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testez vos connaissances en data marketing avec nos quiz interactifs, 
            conçus pour tous les niveaux, du débutant à l'expert.
          </p>
        </div>

        {/* Liste des quiz */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 duration-300">
              {/* Image du quiz */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={quiz.image} 
                  alt={quiz.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-indigo-600 mb-2">
                      {quiz.difficulty}
                    </span>
                    <h3 className="text-xl font-bold">
                      {quiz.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Contenu du quiz */}
              <div className="p-5">
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                
                {/* Métadonnées du quiz */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {quiz.duration}
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {quiz.questions.length} questions
                  </div>
                </div>
                
                {/* Bouton pour démarrer le quiz */}
                <Link 
                  to={`/quiz/${quiz.id}`} 
                  className="block w-full text-center py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Démarrer le quiz
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'aide et support */}
        <div className="mt-16 space-y-6">
          {/* Nouvelle section : Questions aléatoires */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-orange-900 mb-2">
                  🎲 Questions Aléatoires !
                </h2>
                <p className="text-orange-800 text-lg">
                  Chaque quiz sélectionne <strong>20 questions aléatoires</strong> parmi une large banque enrichie avec les contenus des modules. 
                  <strong className="block mt-2">✨ Aucun étudiant n'aura les mêmes questions au même moment !</strong>
                </p>
                <div className="mt-4 bg-white/70 rounded-lg p-4">
                  <p className="text-orange-900 font-medium mb-2">💡 Avantages :</p>
                  <ul className="list-disc list-inside space-y-1 text-orange-800">
                    <li>Révisions variées à chaque passage</li>
                    <li>Évaluation équitable pour tous</li>
                    <li>Plus de 100 questions disponibles au total</li>
                    <li>Parfait pour tester vos connaissances régulièrement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section existante */}
          <div className="bg-indigo-50 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                  Comment utiliser nos quiz ?
                </h2>
                <p className="text-indigo-600 mb-6 md:mb-0">
                  Nos quiz sont conçus pour vous aider à tester et à améliorer vos connaissances en data marketing. 
                  Chaque quiz commence par des questions de base et progresse vers des concepts plus avancés. 
                  À la fin du quiz, vous recevrez un score et des recommandations personnalisées.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <svg className="w-24 h-24 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizList; 