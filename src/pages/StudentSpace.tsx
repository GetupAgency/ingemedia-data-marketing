import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSpreadsheet,
  Database,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  LineChart,
  PieChart,
  Download,
  ExternalLink,
  Sparkles,
  Terminal,
  FolderOpen,
  Code,
  Zap,
  Cpu,
  HardDrive
} from 'lucide-react';

const StudentSpace: React.FC = () => {
  const csvFiles = [
    {
      name: "analytics-acquisition.csv",
      icon: LineChart,
      category: "Google Analytics",
      color: "cyber",
      description: "Données d'acquisition de trafic hebdomadaire",
      details: "Utilisateurs actifs par semaine sur 1 an - Idéal pour analyser la saisonnalité du business",
      size: "2,9k lignes",
      usage: "Analyser les tendances de trafic et identifier les pics/creux saisonniers"
    },
    {
      name: "deals-pipedrive.csv",
      icon: Database,
      category: "CRM Pipedrive",
      color: "green",
      description: "Base complète des ventes et prospects",
      details: "7,479 deals sur 7+ ans avec cycle complet lead → vente - ROI mesurable",
      size: "7,5k lignes",
      usage: "Calculer les taux de conversion, analyser le cycle de vente, mesurer le ROI réel"
    },
    {
      name: "rank-tracker.csv",
      icon: Search,
      category: "SEO RankTracker",
      color: "purple",
      description: "Positions Google de tous les mots-clés",
      details: "484 mots-clés suivis avec positions exactes et tendances d'évolution",
      size: "484 lignes",
      usage: "Optimiser le SEO, prioriser les mots-clés, analyser la concurrence"
    },
    {
      name: "meta-ads-2025.csv",
      icon: Target,
      category: "Meta Ads",
      color: "pink",
      description: "Performance des campagnes Facebook/Instagram",
      details: "Campagnes lead generation avec impressions, clics, coûts et conversions",
      size: "12 lignes",
      usage: "Analyser le ROI Meta Ads, optimiser les audiences et créatifs"
    },
    {
      name: "termes-recherche-gads.csv",
      icon: BarChart3,
      category: "Google Ads",
      color: "yellow",
      description: "Tous les termes de recherche Google Ads",
      details: "63k+ requêtes réelles des utilisateurs avec performances détaillées",
      size: "63k lignes",
      usage: "Découvrir de nouveaux mots-clés, optimiser les campagnes, analyser l'intent"
    },
    {
      name: "Campagnes(...).csv",
      icon: TrendingUp,
      category: "Google Ads",
      color: "orange",
      description: "Performance comparative des campagnes",
      details: "Comparaison 2024 vs 2025 par campagne avec évolutions",
      size: "Variable",
      usage: "Mesurer la progression année sur année, identifier les campagnes performantes"
    },
    {
      name: "Mots_clés_Réseau_Recherche.csv",
      icon: Code,
      category: "Google Ads",
      color: "cyber",
      description: "Performance des mots-clés Google Ads",
      details: "Analyse détaillée des mots-clés avec impressions, clics, CPC",
      size: "Variable",
      usage: "Optimiser les enchères, identifier les mots-clés rentables"
    },
    {
      name: "Pages.csv",
      icon: FileSpreadsheet,
      category: "Google Analytics",
      color: "green",
      description: "Performance des pages du site web",
      details: "Trafic et engagement par page - Identifier les contenus performants",
      size: "Variable",
      usage: "Optimiser le contenu, améliorer l'UX, identifier les pages à fort potentiel"
    },
    {
      name: "Requêtes.csv",
      icon: Search,
      category: "Search Console",
      color: "purple",
      description: "Requêtes de recherche organique Google",
      details: "Mots-clés tapés par les utilisateurs avec positions et CTR",
      size: "1k+ lignes",
      usage: "Optimiser le SEO naturel, créer du contenu ciblé"
    },
    {
      name: "Série_temporelle(...).csv",
      icon: PieChart,
      category: "Analytics Temporel",
      color: "pink",
      description: "Évolution des métriques dans le temps",
      details: "Données chronologiques pour analyser les tendances et saisonnalité",
      size: "Variable",
      usage: "Prévoir les tendances, planifier les budgets, analyser l'impact des actions"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
      cyber: { bg: 'bg-cyber-400/10', text: 'text-cyber-400', border: 'border-cyber-400/30', glow: 'shadow-neon' },
      green: { bg: 'bg-neon-green/10', text: 'text-neon-green', border: 'border-neon-green/30', glow: 'shadow-neon-green' },
      purple: { bg: 'bg-neon-purple/10', text: 'text-neon-purple', border: 'border-neon-purple/30', glow: 'shadow-neon-purple' },
      pink: { bg: 'bg-neon-pink/10', text: 'text-neon-pink', border: 'border-neon-pink/30', glow: 'shadow-neon-pink' },
      yellow: { bg: 'bg-neon-yellow/10', text: 'text-neon-yellow', border: 'border-neon-yellow/30', glow: '' },
      orange: { bg: 'bg-neon-orange/10', text: 'text-neon-orange', border: 'border-neon-orange/30', glow: '' },
    };
    return colors[color] || colors.cyber;
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-circuit opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <HardDrive className="w-4 h-4 text-cyber-400 animate-pulse" />
            <span className="text-xs font-mono text-dark-300">
              <span className="text-cyber-400">{csvFiles.length}</span> datasets disponibles
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-dark-100">Espace </span>
            <span className="text-gradient">Étudiant</span>
          </h1>

          <p className="text-lg text-dark-400 max-w-2xl mx-auto mb-2">
            Analyse Data Marketing — <span className="text-cyber-400">Déco Charpente</span>
          </p>
          <p className="text-sm text-dark-500 font-mono">
            <span className="text-neon-green">$</span> ls /data/*.csv | wc -l → <span className="text-cyber-400">{csvFiles.length}</span>
          </p>
        </div>

        {/* Mission Card */}
        <div className="relative overflow-hidden bg-dark-800/30 backdrop-blur border border-cyber-400/20 rounded-2xl p-6 mb-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-400/5 rounded-full blur-3xl" />

          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-xl flex items-center justify-center shadow-neon">
              <Cpu className="w-6 h-6 text-dark-900" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark-100 mb-2 font-display">
                Votre Mission
              </h2>
              <p className="text-dark-400 leading-relaxed">
                Explorez les <span className="text-cyber-400 font-semibold">fichiers CSV</span> de Déco Charpente.
                Chaque dataset contient des données marketing différentes.
                Apprenez à les comprendre avant de les analyser avec l'IA.
              </p>
            </div>
          </div>
        </div>

        {/* Files Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-neon-green" />
              <h2 className="text-xl font-bold text-dark-100 font-display">
                Fichiers <span className="text-gradient-green">CSV</span> disponibles
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-dark-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {csvFiles.map((file, index) => {
              const Icon = file.icon;
              const colors = getColorClasses(file.color);

              return (
                <div
                  key={index}
                  className="group bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-xl p-5 hover:border-cyber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/5"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center border ${colors.border}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-dark-100 font-mono text-sm truncate group-hover:text-gradient transition-all">
                          {file.name}
                        </h3>
                        <span className="flex-shrink-0 px-2 py-0.5 bg-dark-700/50 text-dark-400 text-xs font-mono rounded border border-dark-600">
                          {file.size}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono ${colors.bg} ${colors.text} border ${colors.border}`}>
                          {file.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-dark-300 text-sm mb-2">
                        {file.description}
                      </p>

                      <p className="text-dark-500 text-xs mb-3">
                        {file.details}
                      </p>

                      {/* Usage */}
                      <div className="bg-dark-900/50 rounded-lg p-3 border border-dark-700/50">
                        <p className="text-xs">
                          <span className="text-neon-green font-mono">// usage:</span>
                          <span className="text-dark-400 ml-2">{file.usage}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analysis Lab */}
        <div className="relative overflow-hidden bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-circuit opacity-5" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-400/5 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-2xl mb-6 shadow-neon">
              <Terminal className="w-8 h-8 text-dark-900" />
            </div>

            <h2 className="text-2xl font-bold text-dark-100 mb-4 font-display">
              Laboratoire d'<span className="text-gradient">Analyse</span>
            </h2>

            <p className="text-dark-400 mb-6 leading-relaxed">
              Maintenant que vous connaissez les fichiers CSV, invoquez l'IA pour créer des analyses.
              Choisissez un fichier et posez vos questions.
            </p>

            {/* Example queries */}
            <div className="bg-dark-900/70 rounded-xl p-6 border border-dark-700 text-left mb-6">
              <p className="text-sm font-mono text-dark-400 mb-4">
                <span className="text-neon-green">$</span> query.examples()
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-mono text-cyber-400 mb-2">// Analytics & SEO</p>
                  <ul className="space-y-1.5 text-xs text-dark-400">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">→</span>
                      "Analyse le trafic dans analytics-acquisition.csv"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">→</span>
                      "Quels mots-clés SEO optimiser ?"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-green">→</span>
                      "Montre les tendances saisonnières"
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-neon-pink mb-2">// CRM & Publicité</p>
                  <ul className="space-y-1.5 text-xs text-dark-400">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">→</span>
                      "Calcule le ROI dans deals-pipedrive.csv"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">→</span>
                      "Compare Google Ads vs Meta Ads"
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">→</span>
                      "Trouve les mots-clés les plus rentables"
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50 mb-6">
              <p className="text-sm text-dark-400">
                <span className="text-cyber-400 font-mono font-semibold">Instructions:</span>
                <span className="block mt-2">1. Choisissez un fichier CSV ci-dessus</span>
                <span className="block">2. Tapez votre question dans le chat</span>
                <span className="block">3. Mentionnez le nom du fichier</span>
                <span className="block">4. L'IA analysera et créera des graphiques</span>
              </p>
            </div>

            {/* Path info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
              <FolderOpen className="w-4 h-4 text-neon-green" />
              <span className="text-xs font-mono text-dark-400">
                Localisation: <code className="text-neon-green">/data/*.csv</code>
              </span>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/learn"
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl font-semibold transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-neon-purple" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="relative flex items-center gap-3 text-dark-900">
                  <Zap className="w-5 h-5" />
                  <span className="font-mono">Commencer l'analyse</span>
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentSpace;
