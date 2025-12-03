import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tutorials } from '../data/tutorialData';
import { StepItem } from '../data/tutorialData';

/**
 * Page de détail d'un tutoriel
 * 
 * Affiche le contenu détaillé d'un tutoriel spécifique en utilisant l'ID fourni dans l'URL.
 * Gère différents types de contenu : paragraphes, listes, étapes, conseils, etc.
 */
const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tutorial = tutorials.find(t => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutoriel introuvable</h1>
            <p className="text-gray-600 mb-6">
              Nous n'avons pas pu trouver le tutoriel que vous recherchez.
            </p>
            <Link 
              to="/tutorials" 
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Retour aux tutoriels
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Fonction pour rendre les différents types de contenu
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case 'heading':
        const level = item.level || 2;
        const className = `font-bold text-gray-900 mb-4 ${
          level === 1 ? 'text-3xl mt-8' : 
          level === 2 ? 'text-2xl mt-6' : 
          'text-xl mt-4'
        }`;
        
        if (level === 1) {
          return <h1 key={index} className={className}>{item.content}</h1>;
        } else if (level === 2) {
          return <h2 key={index} className={className}>{item.content}</h2>;
        } else if (level === 3) {
          return <h3 key={index} className={className}>{item.content}</h3>;
        } else {
          return <h4 key={index} className={className}>{item.content}</h4>;
        }
      
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {item.content}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            {(item.content as string[]).map((point, i) => (
              <li key={i} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        );
      
      case 'steps':
        return (
          <div key={index} className="mb-8">
            <ol className="space-y-6">
              {(item.content as StepItem[]).map((step, i) => (
                <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-semibold mr-4 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                      {step.image && (
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="mt-3 rounded-md max-w-full h-auto" 
                        />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        );
      
      case 'tip':
        return (
          <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700 font-medium mb-1">Conseil</p>
                <p className="text-sm text-green-600">{item.content}</p>
              </div>
            </div>
          </div>
        );
      
      case 'note':
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700 font-medium mb-1">Note</p>
                <p className="text-sm text-blue-600">{item.content}</p>
              </div>
            </div>
          </div>
        );
      
      case 'warning':
        return (
          <div key={index} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 font-medium mb-1">Attention</p>
                <p className="text-sm text-yellow-600">{item.content}</p>
              </div>
            </div>
          </div>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-indigo-300 pl-4 py-2 italic text-gray-700 mb-6">
            {item.content}
          </blockquote>
        );
      
      case 'image':
        return (
          <figure key={index} className="mb-6">
            <img 
              src={item.content as string} 
              alt={item.caption || 'Image du tutoriel'} 
              className="rounded-lg w-full h-auto" 
            />
            {item.caption && (
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'code':
        return (
          <pre key={index} className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto mb-6">
            <code>{item.content}</code>
          </pre>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du tutoriel */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center mb-4">
            <Link 
              to="/tutorials" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mr-2"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </Link>
            <span className="text-gray-400 mx-2">|</span>
            <span className="text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded">
              {tutorial.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {tutorial.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tutorial.duration}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Difficulté: {tutorial.difficulty}</span>
            </div>
          </div>
          
          <p className="text-gray-700">
            {tutorial.description}
          </p>
        </div>
        
        {/* Contenu du tutoriel */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md prose prose-indigo max-w-none">
          {tutorial.content.map((item, index) => renderContent(item, index))}
        </div>
        
        {/* Pied de page avec actions */}
        <div className="mt-8 flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <button 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center transition-colors mr-2"
              title="Marquer comme favori"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>Sauvegarder</span>
            </button>
            <button 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center transition-colors"
              title="Partager le tutoriel"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Partager</span>
            </button>
          </div>
          <Link 
            to="/quizzes" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md flex items-center transition-colors"
          >
            <span>Tester vos connaissances</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail; 