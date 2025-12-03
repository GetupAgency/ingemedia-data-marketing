export interface SimpleAdvancedModule {
  id: string
  title: string
  description: string
  level: 'intermédiaire' | 'avancé' | 'expert'
  prerequisites: string[]
  learningObjectives: string[]
  content: string
  csvData?: string
  aiPrompt?: string
  lexiconTerms: string[]
}

export const simpleAdvancedModules: SimpleAdvancedModule[] = [
  {
    id: 'seo-performance-investigation',
    title: '6. Enquête SEO : Analyse de Performance Rank Tracker',
    description: 'Investigation complète des données SEO avec analyse de positionnement et recommandations stratégiques',
    level: 'avancé',
    prerequisites: ['analyse-performance-avancee'],
    learningObjectives: [
      'Analyser des données de positionnement SEO réelles',
      'Identifier les opportunités d\'optimisation',
      'Formuler des recommandations stratégiques chiffrées',
      'Maîtriser le lexique SEO professionnel'
    ],
    content: 'Module d\'enquête SEO avancé avec analyse de données réelles de rank tracking.',
    csvData: 'rank-tracker.csv',
    aiPrompt: 'Analysez ces données SEO et proposez des recommandations d\'optimisation.',
    lexiconTerms: ['SERP', 'CTR organique', 'Long tail', 'Featured snippet', 'Authority', 'Core Web Vitals']
  },
  {
    id: 'meta-ads-analysis',
    title: '7. Analyse Avancée Meta Ads',
    description: 'Optimisation des campagnes Facebook et Instagram avec analyse de données réelles',
    level: 'avancé',
    prerequisites: ['kpis-essentiels'],
    learningObjectives: [
      'Analyser les performances des campagnes Meta',
      'Optimiser les audiences et créatifs',
      'Calculer le ROAS et l\'attribution',
      'Maîtriser les outils d\'automatisation'
    ],
    content: 'Module d\'analyse des campagnes Meta Ads avec données réelles et optimisations IA.',
    csvData: 'meta-ads-2025.csv',
    aiPrompt: 'Analysez ces performances Meta Ads et proposez des optimisations pour améliorer le ROAS.',
    lexiconTerms: ['ROAS', 'Lookalike Audience', 'Attribution Modeling', 'Custom Audience', 'Pixel Facebook']
  }
];

export { simpleAdvancedModules as advancedModules };
