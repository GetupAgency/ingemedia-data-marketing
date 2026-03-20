/**
 * Données pour le mode Olympiades
 * Questions fun et décalées sur le data marketing
 * Mode quiz rapide par équipes avec timer
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
  timeLimit: number;
}

/**
 * Fisher-Yates shuffle
 */
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Pool complet de questions fun pour les Olympiades
 * Mélange de culture data marketing, scénarios absurdes, calculs rapides et pièges
 */
const allOlympiadQuestions: OlympiadQuestion[] = [

  // ═══════════════════════════════════════════════
  // 🎯 CULTURE DATA MARKETING — Le savais-tu ?
  // ═══════════════════════════════════════════════

  {
    id: 'fun-1',
    type: 'scenario',
    question: "Jeff Bezos disait : 'Votre marque, c'est ce que les gens disent de vous quand...'",
    options: [
      "...vous êtes en réunion marketing",
      "...vous regardez vos KPIs",
      "...vous n'êtes pas dans la pièce",
      "...vous lancez une campagne Meta"
    ],
    correctAnswer: 2,
    explanation: "Citation culte de Bezos. La marque se construit par la perception client, pas par vos dashboards !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 20
  },
  {
    id: 'fun-2',
    type: 'scenario',
    question: "En moyenne, combien de publicités un humain voit-il par jour en 2026 ?",
    options: [
      "Entre 200 et 500",
      "Entre 1 000 et 2 000",
      "Entre 4 000 et 10 000",
      "Plus de 15 000"
    ],
    correctAnswer: 2,
    explanation: "On estime entre 4 000 et 10 000 expositions pub/jour. D'où l'importance du ciblage pour ne pas être du bruit !",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 20
  },
  {
    id: 'fun-3',
    type: 'scenario',
    question: "Quel géant du web tire +80% de ses revenus de la publicité ciblée ?",
    options: [
      "Amazon",
      "Google (Alphabet)",
      "Apple",
      "Microsoft"
    ],
    correctAnswer: 1,
    explanation: "Google/Alphabet tire ~80% de ses revenus de la pub (Search Ads, YouTube Ads, Display). Le data marketing, c'est leur business.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 20
  },
  {
    id: 'fun-4',
    type: 'scenario',
    question: "Le terme 'cookie' en tracking web vient de...",
    options: [
      "Cookie Monster dans Sesame Street",
      "Le biscuit chinois fortune cookie (message caché)",
      "Le terme informatique 'magic cookie' (jeton de données)",
      "Un ingénieur chez Netscape qui aimait les gâteaux"
    ],
    correctAnswer: 2,
    explanation: "Le 'magic cookie' est un terme Unix des années 70 pour un petit paquet de données. Lou Montulli l'a adapté pour le web en 1994.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 25
  },
  {
    id: 'fun-5',
    type: 'scenario',
    question: "Quelle plateforme a inventé le concept de 'fil d'actualité' algorithmique basé sur vos données ?",
    options: [
      "Twitter en 2010",
      "Facebook en 2006",
      "Instagram en 2016",
      "TikTok en 2018"
    ],
    correctAnswer: 1,
    explanation: "Facebook a lancé le News Feed en septembre 2006. Les utilisateurs ont détesté au début... puis sont devenus accros.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 20
  },

  // ═══════════════════════════════════════════════
  // 🧮 CALCULS EXPRESS — Speed round
  // ═══════════════════════════════════════════════

  {
    id: 'calc-1',
    type: 'quick-calc',
    question: "Budget Meta Ads : 3 000€. ROAS : 5:1. Combien de CA généré ?",
    visual: {
      type: 'metric-card',
      title: '⚡ Speed Calc',
      data: {
        metrics: [
          { label: 'Budget', value: '3 000€' },
          { label: 'ROAS', value: '5:1' },
          { label: 'CA généré', value: '?' }
        ]
      }
    },
    options: [
      "8 000€",
      "12 000€",
      "15 000€",
      "20 000€"
    ],
    correctAnswer: 2,
    explanation: "ROAS 5:1 = 5€ de CA pour 1€ investi. 3 000€ × 5 = 15 000€ de CA. Easy money !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'calc-2',
    type: 'quick-calc',
    question: "50 000 visiteurs, conversion 2%, panier moyen 75€. CA mensuel ?",
    visual: {
      type: 'metric-card',
      title: '⚡ Speed Calc',
      data: {
        metrics: [
          { label: 'Visiteurs', value: '50 000' },
          { label: 'Conversion', value: '2%' },
          { label: 'Panier', value: '75€' }
        ]
      }
    },
    options: [
      "50 000€",
      "75 000€",
      "100 000€",
      "25 000€"
    ],
    correctAnswer: 1,
    explanation: "50 000 × 2% = 1 000 ventes × 75€ = 75 000€. Votre patron est content.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'calc-3',
    type: 'quick-calc',
    question: "CPC 1.50€, 6 000 clics, conversion 3%. Combien de ventes ?",
    visual: {
      type: 'metric-card',
      title: '⚡ Speed Calc',
      data: {
        metrics: [
          { label: 'CPC', value: '1.50€' },
          { label: 'Clics', value: '6 000' },
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
    explanation: "6 000 clics × 3% = 180 ventes. Le CPC est un piège, il ne sert pas au calcul !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'calc-4',
    type: 'quick-calc',
    question: "1 000 clics à 2€, 50 conversions. CPA ?",
    visual: {
      type: 'metric-card',
      title: '⚡ Speed Calc',
      data: {
        metrics: [
          { label: 'Clics', value: '1 000' },
          { label: 'CPC', value: '2€' },
          { label: 'Conversions', value: '50' }
        ]
      }
    },
    options: [
      "20€",
      "40€",
      "25€",
      "50€"
    ],
    correctAnswer: 1,
    explanation: "Budget = 1 000 × 2€ = 2 000€. CPA = 2 000€ / 50 = 40€. Pas si cher pour un client !",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 15
  },
  {
    id: 'calc-5',
    type: 'quick-calc',
    question: "NPS : 45% promoteurs, 30% passifs, 25% détracteurs. Score NPS ?",
    visual: {
      type: 'metric-card',
      title: '⚡ Speed Calc',
      data: {
        metrics: [
          { label: 'Promoteurs', value: '45%' },
          { label: 'Passifs', value: '30%' },
          { label: 'Détracteurs', value: '25%' }
        ]
      }
    },
    options: [
      "+45",
      "+20",
      "+15",
      "+70"
    ],
    correctAnswer: 1,
    explanation: "NPS = Promoteurs - Détracteurs = 45% - 25% = +20. Les passifs ne comptent pas ! Score correct mais améliorable.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 15
  },

  // ═══════════════════════════════════════════════
  // 🔥 SCÉNARIOS DÉCALÉS — C'est du vécu (ou presque)
  // ═══════════════════════════════════════════════

  {
    id: 'scenario-1',
    type: 'scenario',
    question: "Votre stagiaire a mis le budget Google Ads annuel... en budget JOURNALIER. Que vérifier en premier ?",
    visual: {
      type: 'metric-card',
      title: '🚨 ALERTE BUDGET',
      data: {
        metrics: [
          { label: 'Budget prévu/an', value: '36 000€' },
          { label: 'Budget mis/jour', value: '36 000€' },
          { label: 'Dépensé en 3h', value: '8 400€ 💸' }
        ]
      }
    },
    options: [
      "Le CV du stagiaire pour le remplacer",
      "Mettre la campagne en pause immédiatement et vérifier les conversions générées",
      "Appeler Google pour un remboursement",
      "Augmenter le budget pour ne pas perdre la face"
    ],
    correctAnswer: 1,
    explanation: "PAUSE d'abord ! Puis on analyse : si le ROAS est bon sur ces 8 400€, c'est pas perdu. Sinon... on en reparle au stagiaire.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 25
  },
  {
    id: 'scenario-2',
    type: 'scenario',
    question: "Un client vous dit : 'Je veux être premier sur Google pour TOUS les mots-clés.' Votre réponse ?",
    options: [
      "Pas de problème, on va tout optimiser en même temps",
      "C'est impossible et inutile : on priorise les mots-clés à fort ROI et on construit progressivement",
      "On va acheter tous les mots-clés en Google Ads",
      "Il suffit de publier 500 articles de blog par mois"
    ],
    correctAnswer: 1,
    explanation: "Même Google n'est pas premier sur tout ! On priorise les mots-clés stratégiques par volume + intention + faisabilité.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 25
  },
  {
    id: 'scenario-3',
    type: 'scenario',
    question: "Votre boss veut mesurer le ROI d'un post LinkedIn qui a eu 50 000 impressions. Que répondre ?",
    options: [
      "ROI = 50 000 × CPC moyen LinkedIn",
      "50 000 impressions = 50 000€ de valeur média",
      "On ne peut pas calculer de ROI direct sans conversion trackée, mais on peut estimer la valeur d'awareness",
      "LinkedIn ne sert à rien pour le ROI"
    ],
    correctAnswer: 2,
    explanation: "Les impressions organiques n'ont pas de ROI direct mesurable. On peut estimer l'équivalent media value, mais honnêteté > bullshit.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 25
  },
  {
    id: 'scenario-4',
    type: 'scenario',
    question: "Le trafic de votre site explose un dimanche à 3h du matin. +500% de visiteurs. Réaction ?",
    visual: {
      type: 'metric-card',
      title: '🌙 TRAFIC NOCTURNE',
      data: {
        metrics: [
          { label: 'Trafic habituel 3h', value: '12 visiteurs' },
          { label: 'Trafic ce soir', value: '72 visiteurs' },
          { label: 'Taux de rebond', value: '97% 🔴' },
          { label: 'Durée moyenne', value: '2 secondes' }
        ]
      }
    },
    options: [
      "On est viraux ! Champagne !",
      "C'est du trafic bot ou spam — vérifier les sources et bloquer si nécessaire",
      "Augmenter le budget pub pour capitaliser",
      "Le site est probablement down et ça rafraîchit en boucle"
    ],
    correctAnswer: 1,
    explanation: "+500% la nuit + rebond 97% + durée 2s = clairement du bot. Vérifiez dans GA4 la source/pays et bloquez dans le .htaccess.",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 25
  },
  {
    id: 'scenario-5',
    type: 'scenario',
    question: "Un influenceur à 500K followers vous propose un partenariat. Quel KPI vérifier en PREMIER ?",
    options: [
      "Son nombre de followers évidemment",
      "Son taux d'engagement réel (likes + commentaires / followers)",
      "Le nombre de stories qu'il poste par jour",
      "S'il a un compte TikTok aussi"
    ],
    correctAnswer: 1,
    explanation: "500K followers avec 0.2% d'engagement = des followers fantômes. Mieux vaut 50K avec 5% d'engagement réel !",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 20
  },

  // ═══════════════════════════════════════════════
  // 📊 LECTURE DE DONNÉES — Qui lit le plus vite ?
  // ═══════════════════════════════════════════════

  {
    id: 'data-1',
    type: 'metric',
    question: "Quel canal a le meilleur ROAS ?",
    visual: {
      type: 'metric-card',
      title: '📊 Battle des Canaux',
      data: {
        metrics: [
          { label: 'Google Ads', value: 'ROAS: 4.2' },
          { label: 'Meta Ads', value: 'ROAS: 3.1' },
          { label: 'TikTok Ads', value: 'ROAS: 5.8' },
          { label: 'LinkedIn Ads', value: 'ROAS: 1.9' }
        ]
      }
    },
    options: [
      "Google Ads, c'est toujours le meilleur",
      "Meta Ads avec son ciblage précis",
      "TikTok Ads (5.8)",
      "LinkedIn Ads pour la qualité B2B"
    ],
    correctAnswer: 2,
    explanation: "TikTok à 5.8 de ROAS écrase la concurrence ici. Mais attention, le ROAS seul ne dit pas tout (volume, LTV...) !",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'data-2',
    type: 'metric',
    question: "Quel device a le pire taux de conversion ? (indice : c'est toujours lui...)",
    visual: {
      type: 'metric-card',
      title: '📱 Conversion par Device',
      data: {
        metrics: [
          { label: 'Desktop', value: '3.8%' },
          { label: 'Mobile', value: '1.4%' },
          { label: 'Tablette', value: '4.1%' }
        ]
      }
    },
    options: [
      "Desktop",
      "Mobile (1.4%)",
      "Tablette",
      "Ils sont tous pareils"
    ],
    correctAnswer: 1,
    explanation: "Mobile à 1.4% vs Tablette 4.1%... presque 3× moins ! Votre checkout mobile a besoin d'amour.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'data-3',
    type: 'metric',
    question: "Quel jour est le PIRE pour envoyer des emails marketing ?",
    visual: {
      type: 'metric-card',
      title: '📧 Taux d\'ouverture Emails',
      data: {
        metrics: [
          { label: 'Lundi', value: '22%' },
          { label: 'Mardi', value: '28%' },
          { label: 'Mercredi', value: '26%' },
          { label: 'Vendredi', value: '18%' },
          { label: 'Samedi', value: '12%' }
        ]
      }
    },
    options: [
      "Lundi, personne ne lit ses mails",
      "Vendredi, tout le monde pense au weekend",
      "Samedi (12%)",
      "Mardi, trop de concurrence"
    ],
    correctAnswer: 2,
    explanation: "Samedi à 12% d'ouverture. Les gens ont mieux à faire ! Le mardi reste le champion historique de l'emailing.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },

  // ═══════════════════════════════════════════════
  // 🧠 VRAI OU FAUX PIÈGE
  // ═══════════════════════════════════════════════

  {
    id: 'piege-1',
    type: 'scenario',
    question: "Un taux de rebond de 85% est TOUJOURS mauvais. Vrai ou faux ?",
    options: [
      "Vrai, c'est catastrophique dans tous les cas",
      "Faux : un blog ou une page de contact peut avoir 85% de rebond et c'est normal",
      "Vrai, il faut être en dessous de 30% obligatoirement",
      "Ça dépend uniquement du budget pub"
    ],
    correctAnswer: 1,
    explanation: "Un article de blog lu en entier → l'utilisateur repart satisfait = rebond, mais mission accomplie ! Le contexte est roi.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 20
  },
  {
    id: 'piege-2',
    type: 'scenario',
    question: "Plus on dépense en pub, plus on gagne d'argent. Vrai ou faux ?",
    options: [
      "Vrai, c'est mathématique et proportionnel",
      "Faux : il y a un point de saturation où le CPA explose et le ROAS s'effondre",
      "Vrai, à condition d'avoir un bon ROAS",
      "Faux : la pub ne sert à rien"
    ],
    correctAnswer: 1,
    explanation: "Les rendements sont décroissants ! Après le sweet spot, chaque euro supplémentaire coûte plus cher pour moins de résultats.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 20
  },
  {
    id: 'piege-3',
    type: 'scenario',
    question: "Le SEO est 'gratuit'. Vrai ou faux ?",
    options: [
      "Vrai, Google ne facture pas les clics organiques",
      "Vrai, il suffit d'écrire des articles",
      "Faux, ça coûte du temps, du contenu, des outils et de l'expertise",
      "Faux, Google facture secrètement les positions organiques"
    ],
    correctAnswer: 2,
    explanation: "Le clic est gratuit mais le positionnement coûte cher : rédaction, technique, outils (~500-5000€/mois). 'Gratuit' est un mythe !",
    difficulty: 'moyen',
    points: 150,
    timeLimit: 20
  },
  {
    id: 'piege-4',
    type: 'scenario',
    question: "Un CPC de 0.05€ sur TikTok est meilleur qu'un CPC de 3€ sur LinkedIn. Vrai ou faux ?",
    options: [
      "Vrai, moins c'est cher mieux c'est, toujours",
      "Vrai, TikTok est la plateforme du futur",
      "Faux : si le lead LinkedIn à 3€ vaut 50 000€ en contrat B2B, c'est le meilleur deal",
      "Faux : le CPC ne compte jamais en marketing"
    ],
    correctAnswer: 2,
    explanation: "Un clic LinkedIn B2B peut générer un contrat à 50K€. Un clic TikTok à 0.05€ peut valoir... 0€ de conversion. LTV > CPC !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 20
  },

  // ═══════════════════════════════════════════════
  // 🎲 DEVINETTES DATA
  // ═══════════════════════════════════════════════

  {
    id: 'devine-1',
    type: 'scenario',
    question: "Je suis un nombre entre -100 et +100, je mesure si vos clients vous recommandent. Qui suis-je ?",
    options: [
      "Le ROAS",
      "Le taux de conversion",
      "Le NPS (Net Promoter Score)",
      "Le Quality Score"
    ],
    correctAnswer: 2,
    explanation: "Le NPS va de -100 (tous détracteurs) à +100 (tous promoteurs). Apple est à ~70, les banques à ~10...",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'devine-2',
    type: 'scenario',
    question: "Je suis invisible, je vous suis partout sur le web, et le RGPD veut ma peau. Qui suis-je ?",
    options: [
      "Le pixel de tracking",
      "Le cookie tiers",
      "Google Analytics",
      "Votre ex sur Instagram"
    ],
    correctAnswer: 1,
    explanation: "Le cookie tiers ! Chrome les bloque enfin après des années de promesses. Le tracking first-party prend le relais.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'devine-3',
    type: 'scenario',
    question: "Je coûte 0€ en clic, mais des milliers en contenu. Je prends 6 mois à décoller mais je dure des années. Qui suis-je ?",
    options: [
      "Google Ads",
      "Le SEO naturel",
      "L'email marketing",
      "Le marketing d'influence"
    ],
    correctAnswer: 1,
    explanation: "Le SEO ! Investissement long terme par excellence. Un article bien positionné peut générer du trafic pendant 3-5 ans.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },
  {
    id: 'devine-4',
    type: 'scenario',
    question: "Je suis une carte colorée qui montre où les gens cliquent sur votre site. Qui suis-je ?",
    options: [
      "Google Maps",
      "Un organigramme",
      "La heatmap",
      "Le sitemap XML"
    ],
    correctAnswer: 2,
    explanation: "La heatmap ! Rouge = clics chauds, bleu = zones froides. Indispensable pour optimiser vos pages.",
    difficulty: 'facile',
    points: 100,
    timeLimit: 15
  },

  // ═══════════════════════════════════════════════
  // 💀 QUESTIONS BOSS — Pour départager les équipes
  // ═══════════════════════════════════════════════

  {
    id: 'boss-1',
    type: 'scenario',
    question: "Votre campagne Meta Ads a un CTR de 5% mais 0 conversion. Diagnostic le plus probable ?",
    visual: {
      type: 'metric-card',
      title: '💀 BOSS LEVEL',
      data: {
        metrics: [
          { label: 'CTR', value: '5% ✅' },
          { label: 'Conversions', value: '0 ❌' },
          { label: 'Budget dépensé', value: '2 000€' }
        ]
      }
    },
    options: [
      "Le produit est trop cher",
      "La landing page ne convertit pas (UX, vitesse, message décalé vs l'annonce)",
      "Meta Ads ne fonctionne pas pour ce produit",
      "Le CTR est un faux positif dû à des clics accidentels"
    ],
    correctAnswer: 1,
    explanation: "CTR top + 0 conversion = le problème est APRÈS le clic. La landing page est le suspect n°1 : message, UX, vitesse.",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 25
  },
  {
    id: 'boss-2',
    type: 'quick-calc',
    question: "LTV client : 900€. CAC actuel : 150€. Vous pouvez monter le CAC jusqu'à combien en restant sain (ratio ≥ 3:1) ?",
    visual: {
      type: 'metric-card',
      title: '💀 BOSS LEVEL',
      data: {
        metrics: [
          { label: 'LTV', value: '900€' },
          { label: 'CAC actuel', value: '150€' },
          { label: 'CAC max ?', value: '???' }
        ]
      }
    },
    options: [
      "200€",
      "250€",
      "300€",
      "450€"
    ],
    correctAnswer: 2,
    explanation: "LTV / CAC ≥ 3:1 → CAC max = 900€ / 3 = 300€. Vous avez de la marge pour scaler l'acquisition !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 20
  },
  {
    id: 'boss-3',
    type: 'scenario',
    question: "Google annonce la fin des cookies tiers (pour de vrai cette fois). Impact n°1 pour les marketeurs ?",
    options: [
      "Google Analytics arrête de fonctionner",
      "Le retargeting cross-site devient impossible sans solutions alternatives (first-party, cohortes)",
      "Les sites web ne peuvent plus fonctionner du tout",
      "Seul Google Ads est impacté, pas les autres plateformes"
    ],
    correctAnswer: 1,
    explanation: "Sans cookies tiers, le retargeting classique meurt. Place aux données first-party, Privacy Sandbox et server-side tracking !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 25
  },
  {
    id: 'boss-4',
    type: 'scenario',
    question: "Votre client veut 'devenir viral sur TikTok'. Quelle est la réponse la plus data-driven ?",
    options: [
      "On va copier les trends du moment et croiser les doigts",
      "La viralité ne se commande pas mais on peut maximiser les chances : tester 20 formats, analyser les hooks et itérer",
      "TikTok c'est que pour les ados, pas pour les marques",
      "Il suffit de payer un influenceur à 1M de followers"
    ],
    correctAnswer: 1,
    explanation: "L'approche data : tester en volume, analyser les 3 premières secondes (hook), itérer sur ce qui performe. Pas de magie, du test !",
    difficulty: 'difficile',
    points: 200,
    timeLimit: 25
  }
];

/**
 * Génère un set de questions mélangées pour les Olympiades
 */
export const generateOlympiadQuestions = (count: number = 16): OlympiadQuestion[] => {
  return shuffleArray(allOlympiadQuestions).slice(0, count);
};

/**
 * Alias pour compatibilité
 */
export const generateMixedOlympiadQuestions = (visualCount: number = 4, poolCount: number = 12): OlympiadQuestion[] => {
  return generateOlympiadQuestions(visualCount + poolCount);
};

/**
 * Export legacy — questions aléatoires à chaque import
 */
export const olympiadQuestions = generateOlympiadQuestions(16);
export const visualOlympiadQuestions = allOlympiadQuestions;

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
  }
];
