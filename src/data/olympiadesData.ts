/**
 * Données pour le mode Olympiades
 * Quiz rapide par équipes avec timer et graphiques
 */

export interface OlympiadQuestion {
  id: string;
  type: 'graph' | 'metric' | 'scenario' | 'quick-calc';
  question: string;
  visual?: {
    type: 'bar' | 'line' | 'pie' | 'metric-card' | 'table';
    data: any;
    title: string;
  };
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  points: number;
  timeLimit: number; // en secondes
}

export const olympiadQuestions: OlympiadQuestion[] = [
  {
    id: 'olymp-1',
    type: 'metric',
    question: "Quel canal a le meilleur ROAS ?",
    visual: {
      type: 'metric-card',
      title: 'Performance par Canal',
      data: {
        channels: [
          { name: 'Google Ads', spent: '5 000€', revenue: '22 500€', roas: '4.5:1' },
          { name: 'Facebook', spent: '3 000€', revenue: '18 000€', roas: '6:1' },
          { name: 'Instagram', spent: '2 000€', revenue: '7 000€', roas: '3.5:1' },
          { name: 'LinkedIn', spent: '1 500€', revenue: '9 000€', roas: '6:1' }
        ]
      }
    },
    options: [
      "Google Ads",
      "Facebook et LinkedIn (ex-aequo à 6:1)",
      "Instagram",
      "LinkedIn uniquement"
    ],
    correctAnswer: 1,
    explanation: "Facebook et LinkedIn ont tous deux un ROAS de 6:1, le meilleur parmi les 4 canaux.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },
  {
    id: 'olymp-2',
    type: 'graph',
    question: "Quel mois a connu la plus forte baisse de taux de conversion ?",
    visual: {
      type: 'line',
      title: 'Évolution du Taux de Conversion',
      data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
        values: [3.2, 3.5, 3.4, 2.8, 2.6, 2.7]
      }
    },
    options: [
      "Février → Mars (-0.1%)",
      "Mars → Avril (-0.6%)",
      "Avril → Mai (-0.2%)",
      "Mai → Juin (+0.1%)"
    ],
    correctAnswer: 1,
    explanation: "Mars → Avril montre la plus forte baisse : 3.4% → 2.8% = -0.6 points.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },
  {
    id: 'olymp-3',
    type: 'quick-calc',
    question: "Budget 8 000€, CPC 2€, taux de conversion 4%. Combien de ventes ?",
    visual: {
      type: 'metric-card',
      title: 'Données de Campagne',
      data: {
        metrics: [
          { label: 'Budget total', value: '8 000€' },
          { label: 'CPC moyen', value: '2€' },
          { label: 'Taux de conversion', value: '4%' }
        ]
      }
    },
    options: [
      "320 ventes",
      "160 ventes",
      "400 ventes",
      "200 ventes"
    ],
    correctAnswer: 1,
    explanation: "8 000€ / 2€ = 4 000 clics. 4 000 × 4% = 160 ventes.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },
  {
    id: 'olymp-4',
    type: 'scenario',
    question: "Quelle action prioriser immédiatement ?",
    visual: {
      type: 'table',
      title: 'Alertes Performance',
      data: {
        alerts: [
          { metric: 'ROAS', current: '2.1:1', target: '4:1', status: '🔴 Critique' },
          { metric: 'CTR', current: '2.8%', target: '3%', status: '🟡 Moyen' },
          { metric: 'Quality Score', current: '7/10', target: '8/10', status: '🟢 Bon' },
          { metric: 'Conversion', current: '1.2%', target: '2.5%', status: '🔴 Critique' }
        ]
      }
    },
    options: [
      "Optimiser le CTR (proche de l'objectif)",
      "Analyser la chute du taux de conversion (impact direct sur ROAS)",
      "Améliorer le Quality Score (déjà bon)",
      "Augmenter le budget"
    ],
    correctAnswer: 1,
    explanation: "La conversion à 1.2% vs objectif 2.5% (-52%) est critique et explique le ROAS faible. C'est la priorité absolue.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },
  {
    id: 'olymp-5',
    type: 'graph',
    question: "Quel device génère le plus de revenus ?",
    visual: {
      type: 'bar',
      title: 'CA par Device',
      data: {
        labels: ['Mobile', 'Desktop', 'Tablette'],
        values: [45000, 32000, 8000]
      }
    },
    options: [
      "Desktop",
      "Mobile",
      "Tablette",
      "Tous égaux"
    ],
    correctAnswer: 1,
    explanation: "Mobile génère 45 000€, soit plus que Desktop (32 000€) et Tablette (8 000€).",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },
  {
    id: 'olymp-6',
    type: 'metric',
    question: "Quelle campagne est la plus rentable (meilleur profit net) ?",
    visual: {
      type: 'table',
      title: 'Performance des Campagnes',
      data: {
        campaigns: [
          { name: 'Campagne A', revenue: '20 000€', cost: '5 000€', margin: '40%' },
          { name: 'Campagne B', revenue: '15 000€', cost: '2 000€', margin: '40%' },
          { name: 'Campagne C', revenue: '25 000€', cost: '8 000€', margin: '40%' }
        ]
      }
    },
    options: [
      "Campagne A (20k CA)",
      "Campagne B (marge brute 6k - coût 2k = 4k net)",
      "Campagne C (25k CA)",
      "Toutes égales"
    ],
    correctAnswer: 1,
    explanation: "Campagne B : 15 000€ × 40% = 6 000€ marge - 2 000€ coût = 4 000€ net. A = 3 000€, C = 2 000€.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },
  {
    id: 'olymp-7',
    type: 'quick-calc',
    question: "Combien faut-il de visiteurs pour atteindre 500 ventes ?",
    visual: {
      type: 'metric-card',
      title: 'Objectif du Mois',
      data: {
        metrics: [
          { label: 'Objectif ventes', value: '500' },
          { label: 'Taux de conversion actuel', value: '2.5%' },
          { label: 'Visiteurs nécessaires', value: '?' }
        ]
      }
    },
    options: [
      "12 500 visiteurs",
      "20 000 visiteurs",
      "25 000 visiteurs",
      "10 000 visiteurs"
    ],
    correctAnswer: 1,
    explanation: "500 ventes ÷ 2.5% (0.025) = 20 000 visiteurs nécessaires.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },
  {
    id: 'olymp-8',
    type: 'scenario',
    question: "Quelle décision prendre MAINTENANT ?",
    visual: {
      type: 'metric-card',
      title: 'Dashboard Temps Réel',
      data: {
        alerts: [
          { label: 'Budget journalier', value: '500€/500€', status: '⏰ Épuisé à 14h' },
          { label: 'CPA actuel', value: '45€', status: '🎯 Objectif 40€' },
          { label: 'ROAS', value: '5.2:1', status: '✅ Excellent' },
          { label: 'Heures restantes', value: '10h', status: '⏳ Jusqu\'à minuit' }
        ]
      }
    },
    options: [
      "Ne rien faire, le ROAS est bon",
      "Augmenter le budget de 200€ pour capitaliser sur la performance (5.2 ROAS excellent, CPA acceptable)",
      "Réduire le budget car CPA trop élevé",
      "Arrêter les campagnes"
    ],
    correctAnswer: 1,
    explanation: "Budget épuisé à 14h avec un excellent ROAS 5.2:1. Opportunité de capter plus de conversions rentables en augmentant le budget.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },
  {
    id: 'olymp-9',
    type: 'graph',
    question: "À quelle heure faut-il concentrer le budget publicitaire ?",
    visual: {
      type: 'bar',
      title: 'Taux de Conversion par Heure',
      data: {
        labels: ['8h', '10h', '12h', '14h', '16h', '18h', '20h'],
        values: [1.2, 1.8, 3.5, 3.2, 2.8, 4.1, 2.1]
      }
    },
    options: [
      "8h (début de journée)",
      "12h (heure du déjeuner)",
      "18h (meilleur taux à 4.1%)",
      "Répartir uniformément"
    ],
    correctAnswer: 2,
    explanation: "18h affiche le meilleur taux de conversion (4.1%), c'est le moment optimal pour concentrer le budget.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },
  {
    id: 'olymp-10',
    type: 'metric',
    question: "Quel segment client a la meilleure LTV ?",
    visual: {
      type: 'table',
      title: 'Analyse des Segments',
      data: {
        segments: [
          { name: '18-25 ans', customers: '2 500', avgOrder: '45€', frequency: '2x/an' },
          { name: '26-35 ans', customers: '1 800', avgOrder: '85€', frequency: '4x/an' },
          { name: '36-50 ans', customers: '1 200', avgOrder: '120€', frequency: '3x/an' },
          { name: '50+ ans', customers: '800', avgOrder: '95€', frequency: '2x/an' }
        ]
      }
    },
    options: [
      "18-25 ans (plus de clients)",
      "26-35 ans (LTV = 85€ × 4 = 340€/an)",
      "36-50 ans (panier le plus élevé)",
      "50+ ans"
    ],
    correctAnswer: 1,
    explanation: "26-35 ans : 85€ × 4 achats = 340€/an. 36-50 : 120€ × 3 = 360€/an. CORRECTION : 36-50 a la meilleure LTV mais 26-35 le meilleur volume × valeur.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },
  {
    id: 'olymp-11',
    type: 'scenario',
    question: "URGENT : Le site est lent ! Quelle métrique checker en priorité ?",
    visual: {
      type: 'metric-card',
      title: 'Alertes Système',
      data: {
        alerts: [
          { label: 'Taux de rebond', value: '78%', change: '+45% vs hier', status: '🔴' },
          { label: 'Temps de chargement', value: '8.2s', change: '+320% vs hier', status: '🔴' },
          { label: 'Budget dépensé', value: '95%', change: 'Normal', status: '🟢' }
        ]
      }
    },
    options: [
      "Le budget dépensé (95%)",
      "Le temps de chargement (8.2s, +320%) - cause probable du rebond élevé",
      "Le taux de rebond uniquement",
      "Tout vérifier en même temps"
    ],
    correctAnswer: 1,
    explanation: "Le temps de chargement a explosé (+320% à 8.2s), c'est la cause racine du rebond élevé. Priorité technique !",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },
  {
    id: 'olymp-12',
    type: 'quick-calc',
    question: "Avec ces données, combien de budget pour 100 conversions ?",
    visual: {
      type: 'metric-card',
      title: 'Métriques Actuelles',
      data: {
        metrics: [
          { label: 'CPC actuel', value: '2€' },
          { label: 'Taux de conversion', value: '5%' },
          { label: 'Conversions souhaitées', value: '100' }
        ]
      }
    },
    options: [
      "1 000€",
      "2 000€",
      "4 000€",
      "5 000€"
    ],
    correctAnswer: 2,
    explanation: "100 conversions ÷ 5% = 2 000 clics. 2 000 clics × 2€ = 4 000€ de budget nécessaire.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  }
];

export const teams = [
  {
    id: 1,
    name: 'Team 🔥 Fire',
    color: 'bg-red-500',
    lightColor: 'bg-red-100',
    textColor: 'text-red-600',
    borderColor: 'border-red-500'
  },
  {
    id: 2,
    name: 'Team 💎 Diamond',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-500'
  },
  {
    id: 3,
    name: 'Team ⚡ Thunder',
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-500'
  },
  {
    id: 4,
    name: 'Team 🌟 Star',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-500'
  }
];

