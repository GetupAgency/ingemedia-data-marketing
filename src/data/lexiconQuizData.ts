export interface LexiconTerm {
  id: string
  term: string
  definition: string
  category: 'seo' | 'analytics' | 'advertising' | 'conversion' | 'automation'
  difficulty: 'débutant' | 'intermédiaire' | 'avancé'
  examples: string[]
  relatedTerms: string[]
  businessContext: string
}

export interface LexiconQuizQuestion {
  id: string
  type: 'definition' | 'context' | 'calculation' | 'scenario' | 'comparison'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  termId: string
  difficulty: 'débutant' | 'intermédiaire' | 'avancé'
  discussionPoints: string[]
  realWorldExample: string
}

export const lexiconTerms: LexiconTerm[] = [
  {
    id: 'ctr-organique',
    term: 'CTR Organique',
    definition: 'Taux de clic sur les résultats naturels (non payants) dans les pages de résultats des moteurs de recherche',
    category: 'seo',
    difficulty: 'débutant',
    examples: [
      'Un CTR de 28% en position 1 sur Google',
      'CTR moyen de 2% en position 10',
      'Variation du CTR selon le type de requête (marque vs générique)'
    ],
    relatedTerms: ['SERP', 'Position organique', 'Impression Share'],
    businessContext: 'Indicateur clé pour mesurer l\'attractivité de vos titres et méta-descriptions dans les résultats de recherche'
  },
  {
    id: 'serp',
    term: 'SERP',
    definition: 'Search Engine Results Page - Page de résultats d\'un moteur de recherche affichant les résultats pour une requête donnée',
    category: 'seo',
    difficulty: 'débutant',
    examples: [
      'SERP avec 10 résultats organiques + annonces',
      'SERP enrichie avec featured snippets',
      'SERP locale avec Google My Business'
    ],
    relatedTerms: ['Featured Snippet', 'Rich Snippets', 'Knowledge Panel'],
    businessContext: 'Environnement concurrentiel où votre site doit se démarquer pour capter l\'attention des utilisateurs'
  },
  {
    id: 'attribution-modeling',
    term: 'Attribution Modeling',
    definition: 'Méthode d\'attribution de la valeur des conversions aux différents points de contact du parcours client',
    category: 'analytics',
    difficulty: 'avancé',
    examples: [
      'Attribution Last-Click : 100% du crédit au dernier clic',
      'Attribution First-Click : 100% du crédit au premier clic',
      'Attribution Data-Driven : répartition basée sur l\'IA'
    ],
    relatedTerms: ['Customer Journey', 'Touchpoint', 'Conversion Path'],
    businessContext: 'Essentiel pour comprendre la vraie contribution de chaque canal marketing et optimiser l\'allocation budgétaire'
  },
  {
    id: 'roas',
    term: 'ROAS',
    definition: 'Return On Advertising Spend - Retour sur investissement publicitaire, calculé comme (Chiffre d\'affaires / Coût publicitaire)',
    category: 'advertising',
    difficulty: 'intermédiaire',
    examples: [
      'ROAS de 4:1 = 4€ de CA pour 1€ dépensé',
      'ROAS de 200% = 2€ de CA pour 1€ dépensé',
      'ROAS négatif = Perte sur les campagnes'
    ],
    relatedTerms: ['ROI', 'CPA', 'LTV', 'CAC'],
    businessContext: 'Métrique fondamentale pour évaluer la rentabilité des campagnes publicitaires et justifier les budgets marketing'
  },
  {
    id: 'lookalike-audience',
    term: 'Lookalike Audience',
    definition: 'Audience créée par l\'IA des plateformes publicitaires en se basant sur les caractéristiques d\'une audience source de qualité',
    category: 'advertising',
    difficulty: 'intermédiaire',
    examples: [
      'Lookalike 1% basé sur les meilleurs clients',
      'Lookalike 5% pour élargir la portée',
      'Lookalike basé sur les visiteurs du site'
    ],
    relatedTerms: ['Custom Audience', 'Targeting', 'Segmentation'],
    businessContext: 'Outil puissant pour trouver de nouveaux prospects similaires à vos meilleurs clients existants'
  },
  {
    id: 'core-web-vitals',
    term: 'Core Web Vitals',
    definition: 'Ensemble de métriques Google mesurant l\'expérience utilisateur : LCP (vitesse de chargement), FID (interactivité), CLS (stabilité visuelle)',
    category: 'seo',
    difficulty: 'avancé',
    examples: [
      'LCP < 2.5s = Bon',
      'FID < 100ms = Bon', 
      'CLS < 0.1 = Bon'
    ],
    relatedTerms: ['Page Speed', 'UX', 'Mobile-First Indexing'],
    businessContext: 'Facteur de classement Google depuis 2021, impact direct sur SEO et taux de conversion'
  }
];

export const lexiconQuizQuestions: LexiconQuizQuestion[] = [
  {
    id: 'q-ctr-definition',
    type: 'definition',
    question: 'Qu\'est-ce que le CTR organique et pourquoi est-il crucial pour le SEO ?',
    options: [
      'Le coût par clic des annonces Google Ads',
      'Le taux de clic sur les résultats naturels dans les SERP',
      'Le taux de conversion des visiteurs organiques',
      'Le classement moyen des mots-clés'
    ],
    correctAnswer: 1,
    explanation: 'Le CTR organique mesure l\'attractivité de vos résultats dans les SERP. Un bon CTR indique que vos titres et descriptions incitent au clic, ce qui peut améliorer votre positionnement.',
    termId: 'ctr-organique',
    difficulty: 'débutant',
    discussionPoints: [
      'Comment optimiser les titres pour améliorer le CTR ?',
      'Quelle est la relation entre position et CTR ?',
      'Impact du CTR sur le classement Google'
    ],
    realWorldExample: 'Une page en position 5 avec un CTR de 8% (vs 5% moyen) peut progresser en position 3-4 grâce à ce signal positif envoyé à Google.'
  },
  {
    id: 'q-roas-calculation',
    type: 'calculation',
    question: 'Une campagne Google Ads génère 15 000€ de CA avec un budget de 3 000€. Quel est le ROAS et comment l\'interpréter ?',
    options: [
      'ROAS = 5:1 - Excellente performance',
      'ROAS = 0.2:1 - Performance catastrophique', 
      'ROAS = 20% - Performance faible',
      'ROAS = 500% - Performance correcte'
    ],
    correctAnswer: 0,
    explanation: 'ROAS = 15 000€ / 3 000€ = 5:1. Cela signifie 5€ de CA pour 1€ dépensé, soit une performance excellente (seuil de rentabilité généralement à 3:1-4:1).',
    termId: 'roas',
    difficulty: 'intermédiaire',
    discussionPoints: [
      'Quel ROAS minimum pour être rentable ?',
      'Différence entre ROAS et ROI ?',
      'Comment améliorer le ROAS d\'une campagne ?'
    ],
    realWorldExample: 'Un e-commerce avec 30% de marge brute a besoin d\'un ROAS minimum de 3.3:1 pour être rentable (1 / 0.30 = 3.33).'
  },
  {
    id: 'q-attribution-scenario',
    type: 'scenario',
    question: 'Un client découvre votre marque via Facebook (clic), recherche votre nom sur Google (clic), puis achète via un email promotionnel. Avec l\'attribution Last-Click, quel canal reçoit le crédit ?',
    options: [
      'Facebook (premier touchpoint)',
      'Google Search (recherche de marque)',
      'Email marketing (conversion finale)',
      'Répartition égale entre les 3 canaux'
    ],
    correctAnswer: 2,
    explanation: 'L\'attribution Last-Click donne 100% du crédit au dernier point de contact avant conversion, soit l\'email. C\'est pourquoi cette méthode sous-estime souvent les canaux d\'acquisition comme Facebook.',
    termId: 'attribution-modeling',
    difficulty: 'avancé',
    discussionPoints: [
      'Limites de l\'attribution Last-Click',
      'Avantages de l\'attribution Data-Driven',
      'Impact sur l\'allocation budgétaire'
    ],
    realWorldExample: 'Une marque a découvert que Facebook générait 40% des conversions en attribution Data-Driven vs 15% en Last-Click, justifiant une hausse de budget.'
  },
  {
    id: 'q-lookalike-context',
    type: 'context',
    question: 'Vous créez une Lookalike Audience 1% basée sur vos 1000 meilleurs clients. Que signifie ce pourcentage et quelle audience obtenez-vous ?',
    options: [
      '1% de vos clients existants, soit 10 personnes',
      '1% de la population du pays ciblé avec les caractéristiques les plus similaires',
      '1% de probabilité de conversion pour cette audience',
      '1% du budget alloué à cette audience'
    ],
    correctAnswer: 1,
    explanation: 'Une Lookalike 1% cible le 1% de la population du pays qui ressemble le plus à votre audience source. Plus le % est faible, plus l\'audience est similaire mais restreinte.',
    termId: 'lookalike-audience',
    difficulty: 'intermédiaire',
    discussionPoints: [
      'Quelle taille d\'audience source optimale ?',
      'Différence entre Lookalike 1% et 10% ?',
      'Comment mesurer la performance des Lookalikes ?'
    ],
    realWorldExample: 'Un SaaS B2B utilise une Lookalike 1% basée sur ses clients premium (LTV >10k€) pour acquérir des prospects de haute valeur avec un CPA 60% plus bas.'
  },
  {
    id: 'q-core-web-vitals-comparison',
    type: 'comparison',
    question: 'Votre site a un LCP de 4.2s, FID de 150ms et CLS de 0.05. Quelle est la priorité d\'optimisation selon les Core Web Vitals ?',
    options: [
      'Optimiser en priorité le CLS (stabilité visuelle)',
      'Optimiser en priorité le FID (interactivité)',
      'Optimiser en priorité le LCP (vitesse de chargement)',
      'Toutes les métriques sont dans les seuils acceptables'
    ],
    correctAnswer: 2,
    explanation: 'LCP 4.2s est "Mauvais" (seuil: <2.5s bon, 2.5-4s à améliorer, >4s mauvais). FID 150ms est "À améliorer" (<100ms bon). CLS 0.05 est "Bon" (<0.1). Priorité au LCP.',
    termId: 'core-web-vitals',
    difficulty: 'avancé',
    discussionPoints: [
      'Impact des Core Web Vitals sur le SEO',
      'Techniques d\'optimisation du LCP',
      'Outils de mesure et monitoring'
    ],
    realWorldExample: 'Un e-commerce a gagné 15% de trafic organique en 6 mois après avoir optimisé son LCP de 4.8s à 2.1s, passant de "Mauvais" à "Bon".'
  },
  {
    id: 'q-serp-features',
    type: 'context',
    question: 'Votre concurrent apparaît en Featured Snippet pour "meilleur CRM 2024" alors que vous êtes en position 1 classique. Quel est l\'impact probable sur votre CTR ?',
    options: [
      'Aucun impact, la position 1 reste dominante',
      'Baisse significative du CTR car le Featured Snippet capte l\'attention',
      'Amélioration du CTR par effet de halo',
      'Impact négligeable car les utilisateurs préfèrent les résultats classiques'
    ],
    correctAnswer: 1,
    explanation: 'Le Featured Snippet (position 0) capte souvent 35-60% des clics, réduisant drastiquement le CTR de la position 1 classique. Il faut optimiser pour conquérir ce snippet.',
    termId: 'serp',
    difficulty: 'intermédiaire',
    discussionPoints: [
      'Stratégies pour conquérir les Featured Snippets',
      'Impact des SERP features sur le trafic organique',
      'Évolution des comportements utilisateurs'
    ],
    realWorldExample: 'Un site B2B a perdu 40% de son trafic sur une requête clé quand un concurrent a conquis le Featured Snippet, malgré le maintien de la position 1.'
  }
];

export const createContextualQuiz = (terms: string[], difficulty: 'débutant' | 'intermédiaire' | 'avancé') => {
  return lexiconQuizQuestions
    .filter(q => terms.includes(q.termId) && q.difficulty === difficulty)
    .sort(() => Math.random() - 0.5) // Mélange aléatoire
    .slice(0, 5); // Limite à 5 questions
};

