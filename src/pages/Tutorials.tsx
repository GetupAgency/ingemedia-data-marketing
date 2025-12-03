import React from 'react';
import { Link } from 'react-router-dom';
import { tutorials } from '../data/tutorialData';

/**
 * Page de liste des tutoriels
 * 
 * Affiche tous les tutoriels disponibles dans l'application
 * avec des filtres par catégorie et niveau de difficulté.
 */
const Tutorials: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tutoriels Data Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apprenez à maîtriser les outils et techniques du data marketing à travers des tutoriels détaillés et pratiques.
          </p>
        </div>
        
        {/* Grille de tutoriels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map(tutorial => (
            <div 
              key={tutorial.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
            >
              {tutorial.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full mr-2">
                    {tutorial.category}
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {tutorial.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                  
                  <Link 
                    to={`/tutorial/${tutorial.id}`} 
                    className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Commencer
                    <svg className="ml-1.5 -mr-0.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carte pour le tutoriel CSV (maintenu pour la compatibilité) */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
            <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-16 h-16 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full mr-2">
                  CSV
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  Débutant
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Analyse des données CSV
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                Apprenez à importer, nettoyer et analyser des fichiers CSV pour extraire des informations marketing utiles.
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30 minutes
                </span>
                
                <Link 
                  to="/tutorial/csv-analysis"
                  className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Commencer
                  <svg className="ml-1.5 -mr-0.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 