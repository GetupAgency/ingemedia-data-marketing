import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  LineChart,
  Settings,
  Search,
  Zap,
  Target,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Filter,
  ChevronRight
} from 'lucide-react';

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
 * Thème Cyber/Neon
 */
const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
    { id: 'analytics', name: 'Analytics', icon: BarChart3, color: 'from-neon-cyan to-cyber-400' },
    { id: 'visualization', name: 'Visualisation', icon: LineChart, color: 'from-neon-green to-emerald-400' },
    { id: 'automation', name: 'Automation', icon: Settings, color: 'from-neon-purple to-violet-400' },
    { id: 'research', name: 'Research', icon: Search, color: 'from-neon-orange to-amber-400' },
    { id: 'optimization', name: 'Optimisation', icon: Zap, color: 'from-neon-yellow to-yellow-400' },
    { id: 'attribution', name: 'Attribution', icon: Target, color: 'from-neon-pink to-rose-400' }
  ];

  const getPricingStyle = (pricing: string) => {
    switch (pricing) {
      case 'Gratuit': return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'Freemium': return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30';
      case 'Payant': return 'bg-neon-orange/20 text-neon-orange border-neon-orange/30';
      case 'Enterprise': return 'bg-neon-pink/20 text-neon-pink border-neon-pink/30';
      default: return 'bg-dark-700 text-dark-300 border-dark-600';
    }
  };

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.color || 'from-neon-purple to-neon-pink';
  };

  const filteredTools = activeCategory
    ? tools.filter(t => t.category === activeCategory)
    : tools;

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-dark-300 font-mono">18 outils professionnels</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Écosystème Data Marketing
            </span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Panorama complet des outils professionnels utilisés par les data marketers.
            De l'analyse à l'attribution, découvre les solutions qui transforment les données en résultats.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
              activeCategory === null
                ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-neon'
                : 'bg-dark-800 text-dark-300 border border-dark-700 hover:border-neon-purple/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            Tous
          </button>
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-dark-800 text-dark-300 border border-dark-700 hover:border-neon-purple/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grille des outils */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="group bg-dark-800/50 border border-dark-700 rounded-2xl p-6 backdrop-blur-sm hover:border-neon-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getCategoryColor(tool.category)} flex items-center justify-center`}>
                    {categories.find(c => c.id === tool.category)?.icon &&
                      React.createElement(categories.find(c => c.id === tool.category)!.icon, { className: 'w-5 h-5 text-white' })
                    }
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {tool.name}
                  </h3>
                </div>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getPricingStyle(tool.pricing)}`}>
                  {tool.pricing}
                </span>
              </div>

              {/* Description */}
              <p className="text-dark-300 text-sm leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* Points forts */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Points forts</h4>
                <ul className="space-y-1">
                  {tool.strengths.map((strength, i) => (
                    <li key={i} className="flex items-center text-sm text-dark-200">
                      <CheckCircle className="w-3 h-3 text-neon-green mr-2 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Idéal pour */}
              <div className="bg-dark-700/50 rounded-xl p-3 mb-4">
                <span className="text-xs text-dark-400">Idéal pour</span>
                <p className="text-sm text-dark-200">{tool.bestFor}</p>
              </div>

              {/* Lien */}
              {tool.url && (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-neon-cyan hover:text-neon-purple transition-colors"
                >
                  Découvrir l'outil
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Section conseils */}
        <div className="bg-dark-800/50 border border-dark-700 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Comment choisir tes outils ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Définir tes besoins', desc: 'Identifie précisément quelles analyses tu dois faire et leur fréquence.', color: 'neon-cyan' },
              { step: '02', title: 'Évaluer le budget', desc: 'Commence par les solutions gratuites puis évolue selon tes besoins et ROI.', color: 'neon-green' },
              { step: '03', title: 'Tester l\'intégration', desc: 'Vérifie la compatibilité avec ton stack technique et tes sources de données.', color: 'neon-purple' },
              { step: '04', title: 'Mesurer l\'adoption', desc: 'Un outil n\'est efficace que s\'il est utilisé régulièrement par l\'équipe.', color: 'neon-pink' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${item.color}/20 border border-${item.color}/30 flex items-center justify-center`}>
                  <span className={`font-mono font-bold text-${item.color}`}>{item.step}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-dark-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack recommandée */}
        <div className="bg-gradient-to-r from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10 border border-neon-purple/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Stack recommandée pour débuter
          </h2>
          <p className="text-dark-400 text-center mb-8">
            Budget total : ~100€/mois • ROI attendu : 5x-10x • Setup : 1-2 semaines
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Google Analytics 4', use: 'Analytics de base', icon: BarChart3, color: 'neon-cyan' },
              { name: 'Looker Studio', use: 'Dashboards', icon: LineChart, color: 'neon-green' },
              { name: 'Hotjar', use: 'Optimisation UX', icon: Zap, color: 'neon-yellow' },
              { name: 'SEMrush', use: 'Research & SEO', icon: Search, color: 'neon-pink' }
            ].map((tool, i) => (
              <div key={i} className="bg-dark-800/50 border border-dark-700 rounded-xl p-4 text-center hover:border-neon-purple/30 transition-all">
                <tool.icon className={`w-8 h-8 mx-auto mb-2 text-${tool.color}`} />
                <h3 className="font-bold text-white text-sm">{tool.name}</h3>
                <p className="text-xs text-dark-400">{tool.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-xl font-semibold hover:shadow-neon transition-all"
            >
              Apprendre à les utiliser
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 px-8 py-3 bg-dark-800 border border-dark-700 text-white rounded-xl font-semibold hover:border-neon-cyan transition-all"
            >
              Tester mes connaissances
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
