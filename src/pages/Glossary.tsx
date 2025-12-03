import React, { useState, useEffect } from 'react';
import { glossaryTerms } from '../data/glossaryData';

/**
 * Lexique des termes de data marketing
 * 
 * Page présentant une liste complète des termes et concepts utilisés 
 * en data marketing, avec recherche et filtrage par catégorie.
 * 
 * @component
 */
const Glossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  
  // Récupérer toutes les catégories uniques des termes du glossaire
  const categories = ['all', ...Array.from(new Set(glossaryTerms.map(term => term.category)))];
  
  // Filtrer les termes en fonction de la recherche et de la catégorie sélectionnée
  useEffect(() => {
    let results = glossaryTerms;
    
    // Filtrer par catégorie si une catégorie spécifique est sélectionnée
    if (selectedCategory !== 'all') {
      results = results.filter(term => term.category === selectedCategory);
    }
    
    // Filtrer par recherche si une requête est entrée
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(term => 
        term.title.toLowerCase().includes(query) || 
        term.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredTerms(results);
  }, [searchQuery, selectedCategory]);

  // Fonction pour gérer la navigation par lettre
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Générer l'alphabet pour la navigation
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Grouper les termes filtrés par première lettre
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);
  
  // Trier les lettres pour l'affichage
  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Lexique du Data Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une référence complète des termes, métriques et concepts utilisés en data marketing.
          </p>
        </div>
        
        {/* Filtre et recherche */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Rechercher un terme
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ex: CPA, ROI, segmentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Filtrer par catégorie
              </label>
              <select
                id="category"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Toutes les catégories</option>
                {categories.filter(cat => cat !== 'all').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Résultats de recherche */}
          {searchQuery && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                {filteredTerms.length} résultat(s) pour "{searchQuery}"
              </p>
            </div>
          )}
        </div>
        
        {/* Navigation alphabétique */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8 overflow-x-auto">
          <div className="flex justify-center space-x-1">
            {alphabet.map(letter => {
              const isActive = sortedLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isActive && scrollToLetter(letter)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    isActive 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!isActive}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Liste des termes */}
        <div className="space-y-8">
          {filteredTerms.length > 0 ? (
            sortedLetters.map(letter => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                    {letter}
                  </div>
                  <div className="ml-4 flex-1 h-px bg-gray-200"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupedTerms[letter].map((term, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {term.title}
                            {term.acronym && <span className="ml-2 text-gray-500 font-normal text-sm">({term.acronym})</span>}
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {term.category}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{term.description}</p>
                        
                        {term.example && (
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-1">Exemple :</h4>
                            <p className="text-sm text-gray-700">{term.example}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun résultat trouvé</h3>
              <p className="mt-1 text-sm text-gray-500">
                Essayez d'ajuster votre recherche ou de sélectionner une autre catégorie.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary; 