import React, { useState, useEffect } from 'react';
import { BookOpen, Target, CheckCircle, BarChart3, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { dataMarketingModules, DataMarketingModule } from '../data/dataMarketingModules';
import ModuleViewer from './ModuleViewer';

const DataMarketingHomepage: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<DataMarketingModule | null>(null);
  const [progress, setProgress] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dataMarketingProgress');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    }
  }, []);

  const getModuleIcon = (id: string) => {
    const icons: { [key: string]: any } = {
      'fondements': BookOpen,
      'kpis-metriques': BarChart3,
      'sources-donnees': Target,
      'analyse-performance': TrendingUp,
      'optimisation': Lightbulb,
      'attribution': Users
    };
    return icons[id] || BookOpen;
  };

  const calculateOverallProgress = () => {
    const totalModules = dataMarketingModules.length;
    const completedModules = Object.values(progress).filter(p => p === 'completed').length;
    return Math.round((completedModules / totalModules) * 100);
  };

  if (selectedModule) {
    return (
      <ModuleViewer
        module={selectedModule}
        onBack={() => setSelectedModule(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Formation Data Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez la chaîne complète du data marketing : de la collecte des données aux recommandations stratégiques
            </p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-900">Votre progression</h2>
            <span className="text-2xl font-bold text-indigo-600">{calculateOverallProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${calculateOverallProgress()}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {Object.values(progress).filter(p => p === 'completed').length} sur {dataMarketingModules.length} modules terminés
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{dataMarketingModules.length}</div>
            <div className="text-sm text-gray-600">Modules de formation</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {dataMarketingModules.reduce((total, module) => total + module.sections.length, 0)}
            </div>
            <div className="text-sm text-gray-600">Sections détaillées</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {dataMarketingModules.reduce((total, module) => 
                total + module.sections.reduce((sectionTotal, section) => 
                  sectionTotal + (section.casePratique ? 1 : 0), 0), 0)}
            </div>
            <div className="text-sm text-gray-600">Cas pratiques</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {dataMarketingModules.reduce((total, module) => 
                total + module.sections.reduce((sectionTotal, section) => 
                  sectionTotal + (section.quiz ? section.quiz.length : 0), 0), 0)}
            </div>
            <div className="text-sm text-gray-600">Questions de quiz</div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Objectifs de la formation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Compétences techniques</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Maîtriser Google Analytics et les outils de tracking</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Calculer et interpréter les KPIs marketing essentiels</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Analyser les performances multi-canaux</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Créer des dashboards et rapports performants</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">Compétences business</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Diagnostiquer les performances marketing</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Formuler des recommandations stratégiques</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Optimiser l'allocation des budgets publicitaires</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Communiquer efficacement avec les équipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Modules de formation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataMarketingModules.map((module, index) => {
            const Icon = getModuleIcon(module.id);
            const moduleProgress = progress[module.id] || 'not-started';
            
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className="text-left"
              >
                <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border-2 ${
                  moduleProgress === 'completed' 
                    ? 'border-green-500 bg-green-50' 
                    : moduleProgress === 'in-progress' 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 hover:border-indigo-300'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      moduleProgress === 'completed' 
                        ? 'bg-green-100' 
                        : moduleProgress === 'in-progress' 
                          ? 'bg-indigo-100' 
                          : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        moduleProgress === 'completed' 
                          ? 'text-green-600' 
                          : moduleProgress === 'in-progress' 
                            ? 'text-indigo-600' 
                            : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500">
                        Module {index + 1}
                      </span>
                      {moduleProgress === 'completed' && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {module.sections.length} sections
                    </span>
                    <div className="flex items-center gap-2">
                      {module.sections.some(s => s.casePratique) && (
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          Cas pratique
                        </span>
                      )}
                      {module.sections.some(s => s.quiz) && (
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          Quiz
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Progress bar for individual module */}
                  {moduleProgress === 'in-progress' && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '30%' }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">En cours...</div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Prêt à devenir un expert en data marketing ?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Cette formation vous donnera toutes les clés pour transformer les données en décisions business actionnables 
            et optimiser vos performances marketing.
          </p>
          <button
            onClick={() => {
              const firstIncompleteModule = dataMarketingModules.find(module => 
                !progress[module.id] || progress[module.id] !== 'completed'
              );
              if (firstIncompleteModule) {
                setSelectedModule(firstIncompleteModule);
              }
            }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {calculateOverallProgress() === 0 ? 'Commencer la formation' : 'Continuer la formation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataMarketingHomepage;
