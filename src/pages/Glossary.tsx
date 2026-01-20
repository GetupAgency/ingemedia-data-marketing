import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Tag, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { glossaryTerms } from '../data/glossaryData';

const Glossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);

  const categories = ['all', ...Array.from(new Set(glossaryTerms.map(term => term.category)))];

  useEffect(() => {
    let results = glossaryTerms;

    if (selectedCategory !== 'all') {
      results = results.filter(term => term.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(term =>
        term.title.toLowerCase().includes(query) ||
        term.description.toLowerCase().includes(query)
      );
    }

    setFilteredTerms(results);
  }, [searchQuery, selectedCategory]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  const categoryColors: Record<string, string> = {
    'Métrique': 'text-cyber-400 bg-cyber-400/10 border-cyber-400/30',
    'Analyse': 'text-neon-green bg-neon-green/10 border-neon-green/30',
    'Stratégie': 'text-neon-pink bg-neon-pink/10 border-neon-pink/30',
    'Technique': 'text-neon-purple bg-neon-purple/10 border-neon-purple/30',
    'Attribution': 'text-neon-yellow bg-neon-yellow/10 border-neon-yellow/30',
    'Optimisation': 'text-neon-orange bg-neon-orange/10 border-neon-orange/30',
  };

  const getCategoryColor = (category: string) => {
    return categoryColors[category] || 'text-cyber-400 bg-cyber-400/10 border-cyber-400/30';
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-neon-purple" />
            <span className="text-xs font-mono text-dark-300">
              <span className="text-neon-purple">{glossaryTerms.length}</span> termes indexés
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-dark-100">Lexique </span>
            <span className="text-gradient-pink">Data Marketing</span>
          </h1>

          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Référence complète des termes, métriques et concepts du data marketing moderne.
            <span className="text-neon-purple font-mono"> grep -r "knowledge"</span>
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-mono text-dark-400 mb-2">
                <span className="text-cyber-400">$</span> search_term
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="w-full px-4 py-3 pl-12 bg-dark-900/50 border border-dark-600 rounded-xl text-dark-100 font-mono placeholder-dark-500 focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all"
                  placeholder="CPA, ROI, segmentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <label htmlFor="category" className="block text-sm font-mono text-dark-400 mb-2">
                <span className="text-neon-pink">$</span> filter_category
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-dark-100 font-mono focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Toutes</option>
                {categories.filter(cat => cat !== 'all').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="mt-4 pt-4 border-t border-dark-700/50">
              <p className="text-sm font-mono text-dark-400">
                <span className="text-neon-green">→</span> {filteredTerms.length} résultat(s) pour
                <span className="text-cyber-400"> "{searchQuery}"</span>
              </p>
            </div>
          )}
        </div>

        {/* Alphabet Navigation */}
        <div className="bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-4 mb-8 overflow-x-auto">
          <div className="flex justify-center flex-wrap gap-1 min-w-max">
            {alphabet.map(letter => {
              const isActive = sortedLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isActive && scrollToLetter(letter)}
                  disabled={!isActive}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg font-mono text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-br from-cyber-500 to-neon-purple text-dark-900 hover:shadow-neon hover:scale-110'
                      : 'bg-dark-800/50 text-dark-600 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-12">
          {filteredTerms.length > 0 ? (
            sortedLetters.map(letter => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-400 to-neon-purple flex items-center justify-center text-dark-900 text-xl font-bold font-mono shadow-neon">
                    {letter}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyber-400/30 to-transparent" />
                  <span className="text-xs font-mono text-dark-500">
                    {groupedTerms[letter].length} terme(s)
                  </span>
                </div>

                {/* Terms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {groupedTerms[letter].map((term, index) => (
                    <div
                      key={index}
                      className="group bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/5"
                    >
                      <div className="p-6">
                        {/* Term Header */}
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-dark-100 group-hover:text-gradient transition-all font-display">
                            {term.title}
                            {term.acronym && (
                              <span className="ml-2 text-dark-500 font-mono text-sm font-normal">
                                ({term.acronym})
                              </span>
                            )}
                          </h3>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border ${getCategoryColor(term.category)}`}>
                            <Tag className="w-3 h-3 mr-1" />
                            {term.category}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-dark-400 text-sm leading-relaxed mb-4">
                          {term.description}
                        </p>

                        {/* Example */}
                        {term.example && (
                          <div className="bg-dark-900/50 rounded-lg p-4 border border-dark-700/50">
                            <div className="flex items-center gap-2 mb-2">
                              <Terminal className="w-4 h-4 text-neon-green" />
                              <span className="text-xs font-mono text-neon-green">exemple:</span>
                            </div>
                            <p className="text-sm text-dark-300 font-mono">
                              {term.example}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Bottom accent line */}
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            /* Empty State */
            <div className="bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-dark-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-dark-500" />
              </div>
              <h3 className="text-lg font-bold text-dark-200 mb-2 font-display">
                Aucun résultat trouvé
              </h3>
              <p className="text-dark-500 font-mono text-sm">
                <span className="text-neon-pink">error:</span> no match for query "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-6 px-6 py-2 bg-dark-700 hover:bg-dark-600 text-dark-300 rounded-lg font-mono text-sm transition-all"
              >
                reset_filters()
              </button>
            </div>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-dark-800">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.filter(c => c !== 'all').map(category => {
              const count = glossaryTerms.filter(t => t.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                    selectedCategory === category
                      ? 'bg-cyber-400/20 text-cyber-400 border border-cyber-400/30'
                      : 'bg-dark-800/50 text-dark-400 hover:text-cyber-400 border border-dark-700/50 hover:border-cyber-400/30'
                  }`}
                >
                  {category} <span className="text-dark-500">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Glossary;
