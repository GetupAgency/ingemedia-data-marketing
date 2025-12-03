import React from 'react';

/**
 * Interface pour les outils data marketing
 */
interface Tool {
  name: string;
  category: 'analytics' | 'visualization' | 'automation' | 'research' | 'optimization' | 'attribution';
  description: string;
  pricing: 'Gratuit' | 'Freemium' | 'Payant' | 'Enterprise';
  strengths: string[];
  bestFor: string;
  url?: string;
}

/**
 * Page Outils - Présentation complète des outils data marketing
 */
const Tools: React.FC = () => {
  const tools: Tool[] = [
    // Analytics & Mesure
    {
      name: "Google Analytics 4",
      category: "analytics",
      description: "Plateforme d'analyse web de référence, modèle événementiel, insights IA et mesure cross-platform.",
      pricing: "Gratuit",
      strengths: ["Intégration native Google", "Analyses prédictives", "Rapports personnalisés"],
      bestFor: "Analyse comportementale complète et gratuite",
      url: "https://analytics.google.com"
    },
    {
      name: "Adobe Analytics",
      category: "analytics", 
      description: "Solution analytics enterprise avec segmentation avancée, attribution complexe et données temps réel.",
      pricing: "Enterprise",
      strengths: ["Segmentation puissante", "Attribution avancée", "APIs robustes"],
      bestFor: "Grandes entreprises avec besoins analytics complexes"
    },
    {
      name: "Mixpanel",
      category: "analytics",
      description: "Analytics orienté produit, tracking d'événements, analyses de cohortes et funnel avancés.",
      pricing: "Freemium",
      strengths: ["Event tracking", "Analyses cohortes", "Rétention utilisateur"],
      bestFor: "Apps mobiles et SaaS avec focus produit"
    },

    // Visualisation & Dashboards
    {
      name: "Tableau",
      category: "visualization",
      description: "Leader de la visualisation de données, dashboards interactifs, connexions multiples sources.",
      pricing: "Payant",
      strengths: ["Visualisations avancées", "Interactivité", "Connecteurs nombreux"],
      bestFor: "Dashboards exécutifs et analyses exploratoires",
      url: "https://www.tableau.com"
    },
    {
      name: "Power BI",
      category: "visualization",
      description: "Solution Microsoft de BI, intégration Office 365, modélisation de données et collaboration.",
      pricing: "Payant",
      strengths: ["Intégration Microsoft", "Coût attractif", "Collaboration native"],
      bestFor: "Environnements Microsoft et PME"
    },
    {
      name: "Looker Studio",
      category: "visualization",
      description: "Outil Google gratuit de création de rapports, connecteurs Google et visualisations simples.",
      pricing: "Gratuit",
      strengths: ["Intégration Google", "Gratuit", "Partage facile"],
      bestFor: "Rapports Google Ads/Analytics automatisés"
    },

    // Automation & CDP
    {
      name: "Segment",
      category: "automation",
      description: "Customer Data Platform collectant, unifiant et activant les données client cross-canaux.",
      pricing: "Freemium",
      strengths: ["Unification données", "340+ intégrations", "Temps réel"],
      bestFor: "Centralisation données multi-sources"
    },
    {
      name: "Zapier",
      category: "automation",
      description: "Automatisation no-code reliant 5000+ applications, workflows personnalisés, triggers intelligents.",
      pricing: "Freemium",
      strengths: ["5000+ apps", "No-code", "Automatisation simple"],
      bestFor: "Automatisation rapide sans développement"
    },
    {
      name: "HubSpot",
      category: "automation",
      description: "CRM tout-en-un avec marketing automation, lead scoring et workflows personnalisés.",
      pricing: "Freemium",
      strengths: ["All-in-one", "Lead scoring", "Workflows visuels"],
      bestFor: "PME recherchant solution complète CRM+Marketing"
    },

    // Research & Insights
    {
      name: "SEMrush",
      category: "research",
      description: "Suite complète SEO/SEA avec analyse concurrentielle, recherche mots-clés et audit technique.",
      pricing: "Payant",
      strengths: ["Analyse concurrentielle", "Mots-clés étendus", "Audit technique"],
      bestFor: "Stratégies SEO/SEA et veille concurrentielle"
    },
    {
      name: "Ahrefs",
      category: "research",
      description: "Référence en analyse de backlinks, recherche de mots-clés et monitoring de positions.",
      pricing: "Payant",
      strengths: ["Base backlinks énorme", "Keyword explorer", "Monitoring positions"],
      bestFor: "Stratégies de contenu et link building"
    },
    {
      name: "SimilarWeb",
      category: "research",
      description: "Intelligence concurrentielle digitale, analyse de trafic et benchmarking sectoriel.",
      pricing: "Freemium",
      strengths: ["Données concurrents", "Benchmarks secteur", "Sources trafic"],
      bestFor: "Veille concurrentielle et market intelligence"
    },

    // Optimisation & Testing
    {
      name: "Optimizely",
      category: "optimization",
      description: "Plateforme d'expérimentation A/B testing, personnalisation et feature flags.",
      pricing: "Payant",
      strengths: ["A/B testing avancé", "Personnalisation", "Statistiques robustes"],
      bestFor: "Tests A/B enterprise et personnalisation"
    },
    {
      name: "Hotjar",
      category: "optimization",
      description: "Analyse comportementale avec heatmaps, enregistrements de sessions et feedback utilisateur.",
      pricing: "Freemium",
      strengths: ["Heatmaps", "Session recordings", "Feedback widgets"],
      bestFor: "Optimisation UX et compréhension comportement"
    },
    {
      name: "Google Optimize",
      category: "optimization",
      description: "Outil Google d'A/B testing gratuit, intégration native Analytics, tests multivariés.",
      pricing: "Gratuit",
      strengths: ["Intégration GA", "Gratuit", "Tests multivariés"],
      bestFor: "A/B testing simple avec écosystème Google"
    },

    // Attribution & Advanced Analytics
    {
      name: "Attribution",
      category: "attribution",
      description: "Plateforme d'attribution marketing avancée, modélisation MMM et optimisation budgets.",
      pricing: "Enterprise",
      strengths: ["Attribution précise", "MMM", "Optimisation budget"],
      bestFor: "Grandes entreprises multi-canaux complexes"
    },
    {
      name: "Triple Whale",
      category: "attribution",
      description: "Attribution e-commerce, suivi post-iOS14, unified dashboard et prédictions de performance.",
      pricing: "Payant",
      strengths: ["Post-iOS14", "E-commerce focus", "Prédictions"],
      bestFor: "E-commerce avec enjeux attribution mobile"
    }
  ];

  const categories = [
    { id: 'analytics', name: 'Analytics & Mesure', color: 'bg-blue-50 border-blue-200 text-blue-800', icon: '📊' },
    { id: 'visualization', name: 'Visualisation', color: 'bg-green-50 border-green-200 text-green-800', icon: '📈' },
    { id: 'automation', name: 'Automation & CDP', color: 'bg-purple-50 border-purple-200 text-purple-800', icon: '⚙️' },
    { id: 'research', name: 'Research & Intelligence', color: 'bg-orange-50 border-orange-200 text-orange-800', icon: '🔍' },
    { id: 'optimization', name: 'Optimisation & Testing', color: 'bg-yellow-50 border-yellow-200 text-yellow-800', icon: '🧪' },
    { id: 'attribution', name: 'Attribution Marketing', color: 'bg-red-50 border-red-200 text-red-800', icon: '🎯' }
  ];

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Gratuit': return 'bg-green-100 text-green-800';
      case 'Freemium': return 'bg-blue-100 text-blue-800';
      case 'Payant': return 'bg-orange-100 text-orange-800';
      case 'Enterprise': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Écosystème des outils data marketing</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Panorama complet des outils professionnels utilisés par les data marketers modernes. 
            De l'analyse à l'attribution, découvrez les solutions qui transforment les données en résultats.
          </p>
        </div>

        {/* Navigation par catégories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <div key={category.id} className={`${category.color} border rounded-lg p-4 text-center`}>
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-semibold text-sm">{category.name}</div>
              <div className="text-xs mt-1">
                {tools.filter(tool => tool.category === category.id).length} outils
              </div>
            </div>
          ))}
        </div>

        {/* Grille des outils par catégorie */}
        {categories.map((category) => {
          const categoryTools = tools.filter(tool => tool.category === category.id);
          
          return (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold text-slate-900">{category.name}</h2>
                <span className="ml-3 text-sm text-slate-500">({categoryTools.length} outils)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPricingColor(tool.pricing)}`}>
                        {tool.pricing}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">{tool.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm mb-2">Points forts</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {tool.strengths.map((strength, i) => (
                            <li key={i} className="flex items-center">
                              <svg className="w-3 h-3 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <h4 className="font-medium text-slate-900 text-xs mb-1">Idéal pour</h4>
                        <p className="text-xs text-slate-700">{tool.bestFor}</p>
                      </div>
                      
                      {tool.url && (
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          Découvrir l'outil
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Section conseils de sélection */}
        <div className="bg-white border border-slate-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Comment choisir vos outils ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Définir vos besoins</h3>
              <p className="text-sm text-slate-600">Identifiez précisément quelles analyses vous devez faire et quelle fréquence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Évaluer le budget</h3>
              <p className="text-sm text-slate-600">Commencez par les solutions gratuites puis évoluez selon vos besoins et ROI.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Tester l'intégration</h3>
              <p className="text-sm text-slate-600">Vérifiez la compatibilité avec votre stack technique et vos sources de données.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">4. Mesurer l'adoption</h3>
              <p className="text-sm text-slate-600">Un outil n'est efficace que s'il est utilisé régulièrement par l'équipe.</p>
            </div>
          </div>
        </div>

        {/* Stack recommandée pour débuter */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Stack recommandée pour débuter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-indigo-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-bold text-indigo-900">Google Analytics 4</h3>
              <p className="text-xs text-indigo-700 mt-1">Analytics de base gratuit</p>
            </div>
            
            <div className="bg-white border border-indigo-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-bold text-indigo-900">Looker Studio</h3>
              <p className="text-xs text-indigo-700 mt-1">Dashboards automatisés</p>
            </div>
            
            <div className="bg-white border border-indigo-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🧪</div>
              <h3 className="font-bold text-indigo-900">Hotjar</h3>
              <p className="text-xs text-indigo-700 mt-1">Optimisation UX</p>
            </div>
            
            <div className="bg-white border border-indigo-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-indigo-900">SEMrush</h3>
              <p className="text-xs text-indigo-700 mt-1">Recherche & concurrence</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-indigo-800">
              <strong>Budget total :</strong> ~100€/mois • <strong>ROI attendu :</strong> 5x-10x • <strong>Temps setup :</strong> 1-2 semaines
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/learn" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              📚 Apprendre à les utiliser
            </a>
            <a href="/quizzes" className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              🧠 Tester mes connaissances
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;