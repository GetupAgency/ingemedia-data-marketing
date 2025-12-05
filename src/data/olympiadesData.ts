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
  // Q1 - Réponse correcte en C (courte)
  {
    id: 'olymp-1',
    type: 'metric',
    question: "Quel est le CTR le plus élevé ?",
    visual: {
      type: 'metric-card',
      title: 'Performance des Annonces',
      data: {
        metrics: [
          { label: 'Annonce A', value: 'CTR: 2.5%' },
          { label: 'Annonce B', value: 'CTR: 3.8%' },
          { label: 'Annonce C', value: 'CTR: 4.2%' },
          { label: 'Annonce D', value: 'CTR: 1.9%' }
        ]
      }
    },
    options: [
      "Annonce A car elle a le meilleur équilibre coût-performance",
      "Annonce B avec un taux de clic solide et régulier",
      "Annonce C (4.2%)",
      "Annonce D qui performe bien sur mobile"
    ],
    correctAnswer: 2,
    explanation: "Annonce C a le CTR le plus élevé avec 4.2%. Plus de clics = plus d'opportunités de conversion !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q2 - Réponse correcte en A (longue)
  {
    id: 'olymp-2',
    type: 'scenario',
    question: "Le taux de rebond mobile explose ! Que faire ?",
    visual: {
      type: 'metric-card',
      title: 'Alertes Mobile',
      data: {
        metrics: [
          { label: 'Rebond Mobile', value: '75% (+30pts) 🔴' },
          { label: 'Rebond Desktop', value: '42% (Stable) 🟢' },
          { label: 'Trafic Mobile', value: '68% du total' }
        ]
      }
    },
    options: [
      "Auditer l'UX mobile (vitesse, affichage, navigation) - 68% du trafic impacté",
      "Augmenter le budget desktop",
      "Ignorer le problème",
      "Arrêter le mobile"
    ],
    correctAnswer: 0,
    explanation: "+30 points de rebond mobile avec 68% du trafic, c'est critique ! L'UX mobile doit être auditée en urgence.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },

  // Q3 - Réponse correcte en D (moyenne)
  {
    id: 'olymp-3',
    type: 'quick-calc',
    question: "CPC 1.50€, 6 000 clics, conversion 3%. Combien de ventes ?",
    visual: {
      type: 'metric-card',
      title: 'Données Campagne Search',
      data: {
        metrics: [
          { label: 'CPC', value: '1.50€' },
          { label: 'Clics obtenus', value: '6 000' },
          { label: 'Conversion', value: '3%' }
        ]
      }
    },
    options: [
      "200 ventes",
      "600 ventes",
      "90 ventes",
      "180 ventes"
    ],
    correctAnswer: 3,
    explanation: "6 000 clics × 3% = 180 ventes. Simple et efficace !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q4 - Réponse correcte en B (courte)
  {
    id: 'olymp-4',
    type: 'metric',
    question: "Quel jour de la semaine a le meilleur taux de conversion ?",
    visual: {
      type: 'metric-card',
      title: 'Performance par Jour',
      data: {
        metrics: [
          { label: 'Lundi', value: '2.1%' },
          { label: 'Mardi', value: '2.8%' },
          { label: 'Mercredi', value: '3.2%' },
          { label: 'Jeudi', value: '2.9%' },
          { label: 'Vendredi', value: '2.4%' },
          { label: 'Samedi', value: '1.8%' },
          { label: 'Dimanche', value: '1.5%' }
        ]
      }
    },
    options: [
      "Jeudi avec une performance constante tout au long de la journée",
      "Mercredi (3.2%)",
      "Lundi pour démarrer la semaine en force",
      "Samedi et dimanche combinés pour le weekend"
    ],
    correctAnswer: 1,
    explanation: "Mercredi affiche 3.2%, le meilleur taux de toute la semaine. Concentrez vos budgets ce jour-là !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q5 - Réponse correcte en C (longue)
  {
    id: 'olymp-5',
    type: 'scenario',
    question: "Votre CPA a doublé en une semaine. Première action ?",
    visual: {
      type: 'metric-card',
      title: 'Évolution CPA',
      data: {
        metrics: [
          { label: 'CPA Semaine dernière', value: '25€' },
          { label: 'CPA Aujourd\'hui', value: '50€' },
          { label: 'Variation', value: '+100% 🔴' }
        ]
      }
    },
    options: [
      "Paniquer et tout arrêter",
      "Augmenter le budget pour compenser",
      "Analyser si c'est le CPC qui a augmenté ou le taux de conversion qui a baissé",
      "Attendre"
    ],
    correctAnswer: 2,
    explanation: "CPA = CPC / Taux de conversion. Il faut identifier si c'est un problème de coût (CPC↑) ou d'efficacité (conversion↓).",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },

  // Q6 - Réponse correcte en A (courte)
  {
    id: 'olymp-6',
    type: 'quick-calc',
    question: "ROAS actuel 3:1, marge 50%. La campagne est-elle rentable ?",
    visual: {
      type: 'metric-card',
      title: 'Données Rentabilité',
      data: {
        metrics: [
          { label: 'ROAS', value: '3:1' },
          { label: 'Marge brute', value: '50%' },
          { label: 'Rentable ?', value: '?' }
        ]
      }
    },
    options: [
      "OUI",
      "NON",
      "Impossible à dire sans plus de données sur les coûts opérationnels",
      "Ça dépend uniquement du volume de ventes généré"
    ],
    correctAnswer: 0,
    explanation: "3:1 signifie 3€ de CA pour 1€ de pub. Marge = 1.5€ (50% de 3€) - 1€ pub = +0.5€ net. Rentable !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },

  // Q7 - Réponse correcte en D (moyenne)
  {
    id: 'olymp-7',
    type: 'metric',
    question: "Quel canal a le CPA le plus bas ?",
    visual: {
      type: 'metric-card',
      title: 'CPA par Canal',
      data: {
        metrics: [
          { label: 'Google Search', value: 'CPA: 35€' },
          { label: 'Facebook Ads', value: 'CPA: 28€' },
          { label: 'Display', value: 'CPA: 52€' },
          { label: 'Email', value: 'CPA: 12€' }
        ]
      }
    },
    options: [
      "Google Search avec une acquisition qualifiée et régulière",
      "Display grâce à sa large couverture d'audience",
      "Facebook Ads avec un ciblage précis et efficace",
      "Email (12€)"
    ],
    correctAnswer: 3,
    explanation: "Email a le CPA le plus bas à 12€. C'est normal, vous contactez des prospects déjà qualifiés !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q8 - Réponse correcte en B (moyenne)
  {
    id: 'olymp-8',
    type: 'quick-calc',
    question: "Panier moyen 80€, 2 500 ventes. Quel est le CA total ?",
    visual: {
      type: 'metric-card',
      title: 'Métriques E-commerce',
      data: {
        metrics: [
          { label: 'Panier moyen (AOV)', value: '80€' },
          { label: 'Nombre de ventes', value: '2 500' },
          { label: 'CA total', value: '?' }
        ]
      }
    },
    options: [
      "150 000€",
      "200 000€",
      "250 000€",
      "180 000€"
    ],
    correctAnswer: 1,
    explanation: "80€ × 2 500 ventes = 200 000€ de chiffre d'affaires. Calcul simple mais efficace !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q9 - Réponse correcte en C (courte)
  {
    id: 'olymp-9',
    type: 'scenario',
    question: "Quality Score à 3/10. Impact immédiat ?",
    visual: {
      type: 'metric-card',
      title: 'Alerte Google Ads',
      data: {
        metrics: [
          { label: 'Quality Score', value: '3/10 🔴' },
          { label: 'CPC moyen actuel', value: '3.50€' },
          { label: 'Budget journalier', value: '200€' }
        ]
      }
    },
    options: [
      "Aucun impact direct, c'est juste informatif",
      "Le budget sera automatiquement réduit par Google Ads",
      "CPC va exploser",
      "Vos annonces ne seront plus diffusées du tout"
    ],
    correctAnswer: 2,
    explanation: "QS de 3/10 = CPC peut doubler ou tripler ! Google pénalise lourdement les annonces peu pertinentes.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 30
  },

  // Q10 - Réponse correcte en A (moyenne)
  {
    id: 'olymp-10',
    type: 'metric',
    question: "Quelle source apporte le plus de conversions ?",
    visual: {
      type: 'metric-card',
      title: 'Conversions par Source',
      data: {
        metrics: [
          { label: 'SEO Organique', value: '450 conversions' },
          { label: 'Google Ads', value: '320 conversions' },
          { label: 'Réseaux Sociaux', value: '180 conversions' },
          { label: 'Email Marketing', value: '220 conversions' }
        ]
      }
    },
    options: [
      "SEO Organique (450)",
      "Google Ads (320)",
      "Email Marketing (220)",
      "Réseaux Sociaux (180)"
    ],
    correctAnswer: 0,
    explanation: "SEO Organique génère 450 conversions, bien devant les autres sources. Investissez dans votre contenu !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 30
  },

  // Q11 - Réponse correcte en D (longue)
  {
    id: 'olymp-11',
    type: 'scenario',
    question: "Pic de trafic détecté ! Que surveiller ?",
    visual: {
      type: 'metric-card',
      title: 'Trafic en Hausse',
      data: {
        metrics: [
          { label: 'Trafic', value: '+250% vs moyenne 📈' },
          { label: 'Taux de rebond', value: '85% 🔴' },
          { label: 'Durée session', value: '12 secondes ⏱️' }
        ]
      }
    },
    options: [
      "Juste le volume de trafic pour célébrer la hausse",
      "Uniquement le taux de rebond pour comprendre",
      "Le budget dépensé en priorité absolue",
      "La qualité du trafic (rebond 85%, durée 12s = trafic non qualifié ou bot)"
    ],
    correctAnswer: 3,
    explanation: "Pic de trafic + rebond 85% + durée 12s = trafic de mauvaise qualité ou attaque de bots. Analysez la source !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 30
  },

  // Q12 - Réponse correcte en B (courte)
  {
    id: 'olymp-12',
    type: 'quick-calc',
    question: "1 000 clics à 2€, 50 conversions. Quel est le CPA ?",
    visual: {
      type: 'metric-card',
      title: 'Calcul Express',
      data: {
        metrics: [
          { label: 'Nombre de clics', value: '1 000' },
          { label: 'CPC', value: '2€' },
          { label: 'Conversions', value: '50' }
        ]
      }
    },
    options: [
      "20€ car c'est le CPC multiplié par un facteur standard",
      "40€",
      "25€ en prenant en compte la marge de sécurité habituelle",
      "50€ puisque c'est le nombre de conversions exactement"
    ],
    correctAnswer: 1,
    explanation: "Coût total = 1 000 × 2€ = 2 000€. CPA = 2 000€ / 50 conversions = 40€ par acquisition.",
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

