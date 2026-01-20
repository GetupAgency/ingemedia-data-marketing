import { Quiz, QuizQuestion } from '../types/quiz';
import { unifiedLearningPath } from './unifiedLearningPath';

/**
 * Extraction de toutes les questions des modules d'apprentissage
 */
const extractQuestionsFromModules = (): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];

  unifiedLearningPath.forEach(module => {
    module.exercises.forEach(exercise => {
      if (exercise.quiz) {
        exercise.quiz.forEach(q => {
          questions.push({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation
          });
        });
      }
    });
  });

  return questions;
};

/**
 * Fonction pour sélectionner des questions aléatoires sans doublons
 * @param allQuestions - Toutes les questions disponibles
 * @param count - Nombre de questions à sélectionner
 * @returns Array de questions sélectionnées aléatoirement
 */
export const selectRandomQuestions = (allQuestions: QuizQuestion[], count: number): QuizQuestion[] => {
  // Créer une copie pour ne pas modifier l'original
  const shuffled = [...allQuestions];

  // Algorithme de Fisher-Yates pour mélanger
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Retourner le nombre demandé de questions
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

/**
 * Quiz 1: Fondements et Lexique du Data Marketing
 * Réponses correctes distribuées uniformément (0, 1, 2, 3)
 */
export const dataMarketingQuizQuestions: QuizQuestion[] = [
  // === SECTION KPIs ET MÉTRIQUES ===
  {
    question: "Que signifie l'acronyme CTR en marketing digital ?",
    options: [
      "Click-Through Rate",
      "Cost To Reach",
      "Customer Total Revenue",
      "Conversion Tracking Rate"
    ],
    correctAnswer: 0,
    explanation: "CTR signifie Click-Through Rate (Taux de clic). Il mesure le pourcentage de personnes qui cliquent sur une publicité par rapport au nombre total d'impressions."
  },
  {
    question: "Qu'est-ce que le ROAS ?",
    options: [
      "Rate Of Active Sessions",
      "Return On Ad Spend",
      "Reach Of Advertising Strategy",
      "Revenue On All Sales"
    ],
    correctAnswer: 1,
    explanation: "ROAS signifie Return On Ad Spend (Retour sur investissement publicitaire). Il indique combien d'euros de chiffre d'affaires sont générés pour chaque euro dépensé en publicité."
  },
  {
    question: "Le CPA mesure :",
    options: [
      "Le chiffre d'affaires par action",
      "La croissance du panier moyen",
      "Le coût par acquisition d'un nouveau client",
      "Le taux de conversion par audience"
    ],
    correctAnswer: 2,
    explanation: "CPA signifie Cost Per Acquisition. C'est le montant moyen dépensé pour acquérir un nouveau client ou obtenir une conversion spécifique."
  },
  {
    question: "Que représente la LTV (Lifetime Value) ?",
    options: [
      "La durée de vie d'une campagne marketing",
      "Le temps moyen passé sur le site",
      "Le nombre de transactions par client",
      "La valeur totale qu'un client apportera durant sa relation avec l'entreprise"
    ],
    correctAnswer: 3,
    explanation: "La LTV (Lifetime Value) est la valeur économique totale qu'un client devrait générer pendant toute la durée de sa relation avec l'entreprise."
  },
  {
    question: "Le taux de conversion se calcule comment ?",
    options: [
      "Conversions ÷ Visiteurs × 100",
      "Visiteurs ÷ Conversions × 100",
      "Conversions × Budget ÷ 100",
      "Visiteurs - Conversions"
    ],
    correctAnswer: 0,
    explanation: "Taux de conversion = (Conversions ÷ Visiteurs) × 100. Par exemple : 50 ventes pour 2000 visiteurs = 2,5% de taux de conversion."
  },
  {
    question: "Qu'est-ce que le CPM en publicité ?",
    options: [
      "Cost Per Month",
      "Cost Per Mille (coût pour 1000 impressions)",
      "Customer Profile Management",
      "Conversion Per Minute"
    ],
    correctAnswer: 1,
    explanation: "CPM signifie Cost Per Mille, soit le coût pour 1000 impressions. C'est un modèle de tarification publicitaire idéal pour les campagnes de notoriété."
  },
  {
    question: "Le taux de rebond indique :",
    options: [
      "Le pourcentage d'emails qui n'arrivent pas à destination",
      "La vitesse de chargement des pages",
      "Le pourcentage de visiteurs qui quittent le site après une seule page",
      "Le taux d'erreur des campagnes publicitaires"
    ],
    correctAnswer: 2,
    explanation: "Le taux de rebond mesure le pourcentage de sessions d'une seule page, c'est-à-dire les visiteurs qui partent sans interagir davantage avec le site."
  },
  {
    question: "Que mesure l'AOV (Average Order Value) ?",
    options: [
      "Le nombre moyen de commandes par client",
      "Le temps moyen entre deux achats",
      "L'âge moyen des clients",
      "La valeur moyenne d'une commande"
    ],
    correctAnswer: 3,
    explanation: "AOV (Average Order Value) ou panier moyen mesure la valeur moyenne dépensée par commande sur votre site e-commerce."
  },
  {
    question: "Quelle est la différence principale entre impressions et clics ?",
    options: [
      "Les impressions mesurent l'affichage, les clics l'interaction",
      "Il n'y a pas de différence",
      "Les impressions sont payantes, les clics gratuits",
      "Les clics sont moins importants que les impressions"
    ],
    correctAnswer: 0,
    explanation: "Les impressions comptent le nombre de fois où votre annonce est affichée, tandis que les clics mesurent combien de personnes ont effectivement cliqué dessus."
  },
  {
    question: "Un Quality Score élevé dans Google Ads permet :",
    options: [
      "D'augmenter automatiquement le budget",
      "De réduire les coûts par clic et améliorer les positions",
      "D'avoir plus d'impressions sans limite",
      "De cibler plus d'audiences"
    ],
    correctAnswer: 1,
    explanation: "Un bon Quality Score récompense la pertinence de vos annonces en réduisant vos coûts par clic et en améliorant vos positions dans les enchères."
  },

  // === SECTION TUNNEL DE CONVERSION ===
  {
    question: "Dans un tunnel de conversion e-commerce, quelle étape vient généralement APRÈS la vue produit ?",
    options: [
      "L'impression publicitaire",
      "Le clic sur la publicité",
      "L'ajout au panier",
      "Le paiement final"
    ],
    correctAnswer: 2,
    explanation: "Le parcours classique est : Impression → Clic → Vue produit → Ajout panier → Création compte → Paiement. L'ajout au panier suit naturellement la consultation du produit."
  },
  {
    question: "Pourquoi les utilisateurs abandonnent-ils le plus souvent leur panier ?",
    options: [
      "Le produit ne leur plaît plus",
      "Les frais de livraison révélés trop tard",
      "Ils préfèrent acheter en magasin",
      "Le site est trop moderne"
    ],
    correctAnswer: 1,
    explanation: "La révélation tardive des frais de livraison est la cause n°1 d'abandon de panier. Les clients se sentent trompés quand ils découvrent des coûts cachés à la fin du processus."
  },
  {
    question: "Quel est le taux de conversion moyen en e-commerce ?",
    options: [
      "15-20%",
      "8-12%",
      "2-3%",
      "0,5-1%"
    ],
    correctAnswer: 2,
    explanation: "Le taux de conversion moyen en e-commerce est de 2-3%. Cela signifie que sur 100 visiteurs, seulement 2 à 3 achètent généralement. Les bons sites atteignent 4-5%."
  },
  {
    question: "Le 'checkout friction' désigne :",
    options: [
      "Les problèmes de paiement par carte",
      "Les obstacles qui compliquent le processus d'achat",
      "Le délai de livraison",
      "Le service après-vente"
    ],
    correctAnswer: 1,
    explanation: "Le checkout friction regroupe tous les obstacles qui compliquent l'achat : formulaires trop longs, création de compte obligatoire, options de paiement limitées, etc."
  },

  // === SECTION ATTRIBUTION ET PARCOURS CLIENT ===
  {
    question: "Le taux d'engagement dans GA4 inclut les sessions :",
    options: [
      "De plus de 30 secondes uniquement",
      "Avec au moins 3 pages vues",
      "Qui se terminent par un achat",
      "Avec durée > 10s, conversion, ou 2+ pages vues"
    ],
    correctAnswer: 3,
    explanation: "GA4 considère une session comme engagée si elle dure plus de 10 secondes, OU génère une conversion, OU comporte au moins 2 pages vues."
  },
  {
    question: "Que signifie l'attribution 'dernier clic' ?",
    options: [
      "Seul le dernier canal avant conversion reçoit 100% du crédit",
      "Seul le premier canal visité reçoit le crédit",
      "Le crédit est réparti équitablement entre tous les canaux",
      "Seuls les clics payants sont comptabilisés"
    ],
    correctAnswer: 0,
    explanation: "L'attribution 'dernier clic' attribue 100% du mérite de la conversion au dernier canal marketing touché avant l'achat."
  },
  {
    question: "Un CPC de 2€ avec 500 clics coûte au total :",
    options: [
      "250€",
      "1000€",
      "2000€",
      "500€"
    ],
    correctAnswer: 1,
    explanation: "Coût total = CPC × Nombre de clics = 2€ × 500 = 1000€"
  },
  {
    question: "Le taux de churn mesure :",
    options: [
      "La croissance du nombre de clients",
      "La satisfaction client moyenne",
      "Le temps moyen de fidélisation",
      "Le pourcentage de clients perdus sur une période"
    ],
    correctAnswer: 3,
    explanation: "Le taux de churn (attrition) mesure le pourcentage de clients qui cessent d'utiliser un produit ou service sur une période donnée."
  },
  {
    question: "Quelle métrique indique la pertinence d'une publicité ?",
    options: [
      "Le CTR (taux de clic)",
      "Le budget dépensé",
      "Le nombre d'impressions",
      "La durée de la campagne"
    ],
    correctAnswer: 0,
    explanation: "Un CTR élevé indique que votre publicité est pertinente et intéresse votre audience cible. Un CTR faible suggère un problème de ciblage ou de créativité."
  },
  {
    question: "Comment s'appelle le processus d'optimisation du taux de conversion ?",
    options: [
      "SEO (Search Engine Optimization)",
      "CRO (Conversion Rate Optimization)",
      "SEM (Search Engine Marketing)",
      "SMO (Social Media Optimization)"
    ],
    correctAnswer: 1,
    explanation: "CRO signifie Conversion Rate Optimization. C'est le processus d'amélioration d'un site web pour augmenter le pourcentage de visiteurs qui réalisent l'action souhaitée."
  },

  // === SECTION SEGMENTATION ET CIBLAGE ===
  {
    question: "Qu'est-ce qu'un segment en marketing digital ?",
    options: [
      "Une partie d'une campagne publicitaire",
      "Un type de graphique dans Analytics",
      "Un groupe de clients aux caractéristiques similaires",
      "Une méthode de paiement"
    ],
    correctAnswer: 2,
    explanation: "Un segment est un groupe de clients ou d'utilisateurs qui partagent des caractéristiques communes (âge, comportement, géographie, etc.) permettant un marketing plus ciblé."
  },
  {
    question: "Le modèle d'attribution linéaire :",
    options: [
      "Donne tout le crédit au premier clic",
      "Donne tout le crédit au dernier clic",
      "Ignore complètement l'attribution",
      "Répartit équitablement le crédit entre tous les points de contact"
    ],
    correctAnswer: 3,
    explanation: "L'attribution linéaire distribue le crédit de conversion de manière égale entre tous les canaux marketing qui ont touché le client durant son parcours."
  },
  {
    question: "Un ROAS de 4:1 signifie :",
    options: [
      "1€ dépensé pour 4€ de chiffre d'affaires",
      "4€ dépensés pour 1€ de chiffre d'affaires",
      "4% de taux de conversion",
      "1% de coût marketing"
    ],
    correctAnswer: 0,
    explanation: "Un ROAS de 4:1 signifie que pour chaque euro dépensé en publicité, l'entreprise génère 4€ de chiffre d'affaires."
  },
  {
    question: "La principale différence entre données 'On-Site' et 'Off-Site' :",
    options: [
      "On-Site = gratuit, Off-Site = payant",
      "On-Site = comportement sur le site, Off-Site = acquisition et réputation",
      "On-Site = desktop, Off-Site = mobile",
      "Il n'y a pas de différence"
    ],
    correctAnswer: 1,
    explanation: "Les données On-Site concernent le comportement des utilisateurs sur votre site (GA4), tandis que les données Off-Site concernent l'acquisition (Google Ads) et la réputation (avis clients)."
  },
  {
    question: "Que mesure le NPS (Net Promoter Score) ?",
    options: [
      "Le nombre de nouveaux prospects",
      "Le coût d'acquisition par canal",
      "La vitesse de navigation sur le site",
      "La satisfaction et probabilité de recommandation client"
    ],
    correctAnswer: 3,
    explanation: "Le NPS mesure la satisfaction client et leur propension à recommander votre entreprise, basé sur une échelle de 0 à 10."
  },
  {
    question: "Un taux de conversion de 2,5% en e-commerce est généralement considéré comme :",
    options: [
      "Correct/dans la moyenne",
      "Très faible",
      "Excellent",
      "Impossible à évaluer"
    ],
    correctAnswer: 0,
    explanation: "Un taux de conversion de 2,5% est dans la moyenne du e-commerce (généralement entre 1% et 3%). C'est un bon point de départ pour l'optimisation."
  },
  {
    question: "Le retargeting consiste à :",
    options: [
      "Cibler de nouveaux prospects",
      "Recibler des personnes qui ont déjà interagi avec votre marque",
      "Changer complètement de cible marketing",
      "Arrêter une campagne publicitaire"
    ],
    correctAnswer: 1,
    explanation: "Le retargeting permet de diffuser des publicités ciblées aux personnes qui ont déjà visité votre site ou interagi avec votre marque, avec des taux de conversion généralement plus élevés."
  },
  {
    question: "Quelle métrique indique le coût d'acquisition d'un prospect qualifié ?",
    options: [
      "CPA (Cost Per Acquisition)",
      "CPC (Cost Per Click)",
      "CPL (Cost Per Lead)",
      "CPM (Cost Per Mille)"
    ],
    correctAnswer: 2,
    explanation: "CPL (Cost Per Lead) mesure spécifiquement le coût pour acquérir un prospect qualifié (contact, inscription, demande de devis), distinct du CPA qui mesure une vente."
  },
  {
    question: "Les données de première partie (First-Party Data) proviennent :",
    options: [
      "Directement de vos propres interactions avec les clients",
      "D'organismes externes payants",
      "De plateformes publicitaires uniquement",
      "D'études de marché sectorielles"
    ],
    correctAnswer: 0,
    explanation: "Les données de première partie sont collectées directement par votre entreprise via vos interactions avec les clients (site web, app, CRM, emails, etc.)."
  },

  // === NOUVELLES QUESTIONS TUNNEL DE CONVERSION ===
  {
    question: "Qu'est-ce que le 'social proof' en e-commerce ?",
    options: [
      "La preuve que les réseaux sociaux fonctionnent",
      "Les avis clients et témoignages qui rassurent les acheteurs",
      "Le nombre d'abonnés sur Instagram",
      "La certification des comptes sociaux"
    ],
    correctAnswer: 1,
    explanation: "Le social proof (preuve sociale) désigne les éléments qui montrent que d'autres clients font confiance à votre marque : avis, témoignages, nombre de ventes, logos de partenaires."
  },
  {
    question: "Le CVR (Conversion Rate) au niveau du panier mesure :",
    options: [
      "Le ratio entre clics et impressions",
      "Le pourcentage de paniers abandonnés",
      "Le pourcentage de visiteurs qui ajoutent au panier parmi ceux ayant vu un produit",
      "Le temps passé sur la page panier"
    ],
    correctAnswer: 2,
    explanation: "Le CVR panier mesure combien de visiteurs ayant consulté un produit décident de l'ajouter au panier. Un faible taux indique un problème de fiche produit ou de prix."
  },
  {
    question: "Pourquoi proposer le 'Guest Checkout' (achat sans compte) ?",
    options: [
      "Pour collecter moins de données",
      "Pour réduire la friction et les abandons",
      "Pour économiser de l'espace serveur",
      "Pour augmenter le temps passé sur le site"
    ],
    correctAnswer: 1,
    explanation: "Le guest checkout permet d'acheter sans créer de compte, réduisant significativement les abandons. 35% des abandons sont liés à l'obligation de créer un compte."
  },
  {
    question: "Un email de relance panier abandonné devrait être envoyé :",
    options: [
      "Immédiatement après l'abandon",
      "Dans les 1-3 heures suivant l'abandon",
      "Une semaine après",
      "Uniquement si le client revient sur le site"
    ],
    correctAnswer: 1,
    explanation: "L'idéal est d'envoyer le premier email dans les 1-3 heures, quand le client a encore le produit en tête. Des séquences de 3 emails sur 3 jours sont souvent utilisées."
  },
  {
    question: "Le 'trust badge' sur un site e-commerce sert à :",
    options: [
      "Décorer le site",
      "Rassurer les clients sur la sécurité et la fiabilité",
      "Améliorer le SEO",
      "Accélérer le chargement des pages"
    ],
    correctAnswer: 1,
    explanation: "Les badges de confiance (SSL, paiement sécurisé, labels, avis vérifiés) rassurent les acheteurs sur la sécurité de leurs données et la fiabilité du vendeur."
  },

  // === MÉTRIQUES AVANCÉES ===
  {
    question: "Le CAC (Customer Acquisition Cost) se calcule :",
    options: [
      "Revenus totaux ÷ Nombre de clients",
      "Dépenses marketing ÷ Nombre de nouveaux clients acquis",
      "Nombre de clics ÷ Budget publicitaire",
      "Marge brute × Taux de conversion"
    ],
    correctAnswer: 1,
    explanation: "CAC = Dépenses marketing totales ÷ Nombre de nouveaux clients acquis. C'est le coût réel pour acquérir un client, incluant tous les canaux marketing."
  },
  {
    question: "Un ratio LTV/CAC de 3:1 signifie :",
    options: [
      "Le client rapporte 3 fois plus qu'il n'a coûté à acquérir",
      "L'acquisition coûte 3 fois plus que la valeur client",
      "Le client fait 3 achats",
      "La marge est de 3%"
    ],
    correctAnswer: 0,
    explanation: "Un ratio LTV/CAC de 3:1 est considéré comme sain : le client rapporte 3€ pour chaque 1€ investi dans son acquisition. En dessous de 3:1, la rentabilité est fragile."
  },
  {
    question: "L'upselling consiste à :",
    options: [
      "Proposer une version supérieure/premium du produit",
      "Proposer des produits complémentaires",
      "Baisser les prix",
      "Augmenter les stocks"
    ],
    correctAnswer: 0,
    explanation: "L'upselling pousse le client vers une version plus chère/premium du produit qu'il envisage (ex: iPhone 128Go → 256Go). Le cross-selling propose des produits complémentaires."
  },
  {
    question: "La récence dans RFM (Récence, Fréquence, Montant) mesure :",
    options: [
      "Le montant du dernier achat",
      "Le nombre total d'achats",
      "Le temps écoulé depuis le dernier achat",
      "La fréquence des visites sur le site"
    ],
    correctAnswer: 2,
    explanation: "La récence mesure quand le client a effectué son dernier achat. Un client récent a plus de chances d'acheter à nouveau qu'un client inactif depuis longtemps."
  },
  {
    question: "Qu'est-ce que l'attribution 'premier clic' ?",
    options: [
      "Le premier canal touché reçoit 100% du crédit de conversion",
      "Le dernier canal touché reçoit tout le crédit",
      "Seuls les clics organiques comptent",
      "Les clics sur mobile uniquement"
    ],
    correctAnswer: 0,
    explanation: "L'attribution 'premier clic' donne tout le mérite au canal qui a initié le parcours client, utile pour évaluer l'efficacité des canaux de découverte."
  }
];

/**
 * Quiz 2: Outils et Métriques d'Analyse
 */
export const analyticsToolsQuizQuestions: QuizQuestion[] = [
  {
    question: "Google Analytics 4 utilise principalement un modèle basé sur :",
    options: [
      "Les pages vues",
      "Les sessions",
      "Les événements",
      "Les conversions"
    ],
    correctAnswer: 2,
    explanation: "GA4 révolutionne l'analyse avec un modèle centré sur les événements, où chaque interaction (clic, scroll, téléchargement) est enregistrée comme un événement."
  },
  {
    question: "Dans Google Search Console, les 'impressions' représentent :",
    options: [
      "Le nombre de clics sur votre site",
      "Le nombre de fois où votre site apparaît dans les résultats Google",
      "Le nombre de pages indexées",
      "La vitesse de chargement"
    ],
    correctAnswer: 1,
    explanation: "Les impressions dans Search Console comptent chaque fois que votre site apparaît dans les résultats de recherche Google, que l'utilisateur clique ou non."
  },
  {
    question: "Quel outil Google permet de soumettre un sitemap ?",
    options: [
      "Google Analytics",
      "Google Ads",
      "Google My Business",
      "Google Search Console"
    ],
    correctAnswer: 3,
    explanation: "Google Search Console est l'outil qui permet de soumettre et gérer les sitemaps, d'analyser l'indexation et de monitorer la performance SEO."
  },
  {
    question: "La position moyenne dans Search Console indique :",
    options: [
      "Le classement moyen de votre site dans les résultats de recherche",
      "Le temps moyen de chargement",
      "Le nombre moyen de visiteurs",
      "La note moyenne de qualité"
    ],
    correctAnswer: 0,
    explanation: "La position moyenne indique le classement moyen de votre site dans les résultats Google pour toutes les requêtes où il apparaît."
  },
  {
    question: "Un 'objectif' dans Google Analytics mesure :",
    options: [
      "Le budget marketing à atteindre",
      "Le nombre de visiteurs souhaité",
      "La croissance mensuelle du trafic",
      "Une action spécifique que vous voulez suivre (conversion)"
    ],
    correctAnswer: 3,
    explanation: "Un objectif GA mesure une action spécifique définie comme conversion : achat, inscription, téléchargement, temps passé sur le site, etc."
  },
  {
    question: "Le pixel de tracking sert principalement à :",
    options: [
      "Améliorer la vitesse du site",
      "Collecter des données comportementales pour le retargeting",
      "Optimiser le référencement naturel",
      "Gérer les cookies de préférence"
    ],
    correctAnswer: 1,
    explanation: "Le pixel de tracking collecte des données sur le comportement des visiteurs pour permettre le retargeting publicitaire et l'optimisation des campagnes."
  },
  {
    question: "Dans Facebook Ads Manager, le CPM représente :",
    options: [
      "Le coût par message privé",
      "Le coût par minute de vidéo",
      "Le coût par membre ajouté",
      "Le coût pour 1000 impressions"
    ],
    correctAnswer: 3,
    explanation: "CPM (Cost Per Mille) dans Facebook Ads Manager est le coût payé pour 1000 impressions de votre publicité dans le feed des utilisateurs."
  },
  {
    question: "L'A/B testing consiste à :",
    options: [
      "Tester deux versions différentes pour déterminer la plus performante",
      "Analyser les audiences selon l'âge et le sexe",
      "Comparer les performances de deux sites concurrents",
      "Alterner entre deux budgets publicitaires"
    ],
    correctAnswer: 0,
    explanation: "L'A/B testing compare deux versions d'un élément (page, email, pub) en les montrant à des groupes différents pour identifier la plus performante statistiquement."
  },
  {
    question: "Le CPC (Cost Per Click) se calcule :",
    options: [
      "Budget total ÷ Nombre de conversions",
      "Nombre de clics ÷ Budget total",
      "Budget × Nombre de clics",
      "Budget total ÷ Nombre de clics"
    ],
    correctAnswer: 3,
    explanation: "CPC = Budget total dépensé ÷ Nombre total de clics. Par exemple : 1000€ pour 500 clics = 2€ de CPC."
  },
  {
    question: "Une cohort analysis permet d'analyser :",
    options: [
      "Le comportement d'un groupe d'utilisateurs dans le temps",
      "Les couleurs préférées des clients",
      "La concurrence directe",
      "Les tendances saisonnières uniquement"
    ],
    correctAnswer: 0,
    explanation: "L'analyse de cohorte suit le comportement d'un groupe d'utilisateurs (acquis le même mois par exemple) pour mesurer leur rétention et valeur dans le temps."
  },
  {
    question: "Le lookalike audience consiste à :",
    options: [
      "Cibler exactement les mêmes personnes qu'avant",
      "Trouver de nouveaux prospects similaires à vos meilleurs clients",
      "Copier les campagnes de la concurrence",
      "Utiliser les mêmes créatifs publicitaires"
    ],
    correctAnswer: 1,
    explanation: "Une lookalike audience utilise l'IA des plateformes publicitaires pour trouver de nouveaux prospects ayant des caractéristiques similaires à vos meilleurs clients existants."
  },
  {
    question: "Le terme 'impression share' désigne :",
    options: [
      "Le pourcentage de partages sur les réseaux sociaux",
      "Le ratio entre impressions et clics",
      "La part des impressions obtenues vs impressions possibles",
      "Le pourcentage d'impressions frauduleuses"
    ],
    correctAnswer: 2,
    explanation: "L'impression share indique le pourcentage d'impressions que vous avez obtenues par rapport au nombre total d'impressions que vous auriez pu obtenir."
  },
  {
    question: "Un heat map sur un site web permet de visualiser :",
    options: [
      "La température des serveurs",
      "Les horaires de forte affluence",
      "Les erreurs de chargement",
      "Les zones les plus cliquées et consultées par les utilisateurs"
    ],
    correctAnswer: 3,
    explanation: "Une heat map (carte de chaleur) visualise les zones d'un site web où les utilisateurs cliquent, scrollent et focalisent leur attention le plus."
  },
  {
    question: "Le DMP (Data Management Platform) sert à :",
    options: [
      "Centraliser et organiser les données clients provenant de différentes sources",
      "Gérer uniquement les campagnes Google Ads",
      "Créer des sites web",
      "Analyser uniquement les réseaux sociaux"
    ],
    correctAnswer: 0,
    explanation: "Une DMP centralise, organise et active les données clients provenant de multiples sources (CRM, site web, apps, etc.) pour améliorer le ciblage publicitaire."
  },
  {
    question: "Le taux d'ouverture en email marketing se calcule :",
    options: [
      "Emails envoyés ÷ Emails ouverts",
      "Emails ouverts ÷ Emails délivrés × 100",
      "Emails cliqués ÷ Emails envoyés",
      "Emails délivrés - Emails en erreur"
    ],
    correctAnswer: 1,
    explanation: "Taux d'ouverture = (Emails ouverts ÷ Emails délivrés) × 100. On exclut les emails non délivrés (bounces) du calcul."
  },
  {
    question: "La fréquence d'affichage (Frequency) en publicité digitale mesure :",
    options: [
      "La vitesse de diffusion des annonces",
      "Le rythme de mise à jour des campagnes",
      "La périodicité des rapports",
      "Le nombre moyen de fois qu'une personne voit votre pub"
    ],
    correctAnswer: 3,
    explanation: "La fréquence indique combien de fois en moyenne une même personne a été exposée à votre publicité. Une fréquence trop élevée peut créer de la lassitude."
  },
  {
    question: "Le CPL (Cost Per Lead) est particulièrement important pour :",
    options: [
      "Les sites e-commerce uniquement",
      "Les applications mobiles seulement",
      "Les campagnes de notoriété",
      "Les entreprises B2B avec cycles de vente longs"
    ],
    correctAnswer: 3,
    explanation: "Le CPL est crucial en B2B où la vente ne se fait pas immédiatement online. On mesure d'abord le coût pour obtenir un prospect qualifié (lead)."
  },
  {
    question: "Que signifie SERP en référencement ?",
    options: [
      "Search Engine Results Page (page de résultats de recherche)",
      "Search Engine Ranking Position",
      "Social Engagement Rate Performance",
      "Semantic Entity Recognition Protocol"
    ],
    correctAnswer: 0,
    explanation: "SERP signifie Search Engine Results Page, soit la page de résultats que Google affiche après une recherche. C'est là que votre site doit apparaître pour générer du trafic organique."
  },

  // === NOUVELLES QUESTIONS GA4 ET TRACKING ===
  {
    question: "Dans GA4, quel événement est automatiquement tracké sans configuration ?",
    options: [
      "Les achats (purchase)",
      "Les ajouts au panier (add_to_cart)",
      "Les pages vues (page_view)",
      "Les inscriptions newsletter"
    ],
    correctAnswer: 2,
    explanation: "GA4 tracke automatiquement certains événements comme page_view, first_visit, session_start, scroll, et user_engagement. Les événements e-commerce nécessitent une configuration."
  },
  {
    question: "L'événement 'view_item' dans GA4 e-commerce se déclenche quand :",
    options: [
      "L'utilisateur voit une page de catégorie",
      "L'utilisateur consulte une fiche produit individuelle",
      "L'utilisateur effectue un achat",
      "L'utilisateur se connecte à son compte"
    ],
    correctAnswer: 1,
    explanation: "view_item se déclenche lorsqu'un utilisateur consulte les détails d'un produit spécifique. C'est une étape clé du funnel e-commerce dans GA4."
  },
  {
    question: "Qu'est-ce que le 'Debug View' dans GA4 ?",
    options: [
      "Un outil pour supprimer les bugs du site",
      "Une vue pour tester le tracking en temps réel avant déploiement",
      "Un rapport sur les erreurs JavaScript",
      "Un mode de navigation privée"
    ],
    correctAnswer: 1,
    explanation: "Debug View permet de voir les événements GA4 en temps réel pendant les tests, essentiel pour vérifier que le tracking fonctionne correctement avant la mise en production."
  },
  {
    question: "Le paramètre UTM 'utm_medium' sert à identifier :",
    options: [
      "Le nom de la campagne",
      "Le type de canal marketing (email, cpc, social...)",
      "Le contenu spécifique de l'annonce",
      "Le terme de recherche utilisé"
    ],
    correctAnswer: 1,
    explanation: "utm_medium identifie le type de canal : email, cpc (paid search), organic, social, referral, etc. C'est essentiel pour analyser les performances par canal."
  },
  {
    question: "Qu'est-ce que le 'data layer' dans le tracking web ?",
    options: [
      "La couche visuelle du site",
      "Un objet JavaScript contenant les données à envoyer aux outils analytics",
      "La base de données du serveur",
      "Le CDN du site"
    ],
    correctAnswer: 1,
    explanation: "Le data layer est un objet JavaScript standardisé qui centralise les données du site (infos produit, utilisateur, événements) pour les transmettre aux outils comme GA4 ou GTM."
  },
  {
    question: "Google Tag Manager (GTM) permet principalement de :",
    options: [
      "Gérer les balises de tracking sans modifier le code source du site",
      "Créer des publicités Google Ads",
      "Analyser les données de Search Console",
      "Optimiser le référencement naturel"
    ],
    correctAnswer: 0,
    explanation: "GTM est un gestionnaire de balises qui permet d'ajouter et modifier les scripts de tracking (GA4, pixels Facebook, etc.) sans intervention sur le code du site."
  },
  {
    question: "Un 'trigger' dans Google Tag Manager est :",
    options: [
      "Une balise de suivi",
      "Une condition qui déclenche l'envoi d'une balise",
      "Une variable de données",
      "Un rapport personnalisé"
    ],
    correctAnswer: 1,
    explanation: "Un trigger définit QUAND une balise doit se déclencher : au chargement de page, au clic sur un bouton, à l'envoi d'un formulaire, etc."
  },
  {
    question: "Le 'bounce rate' a été remplacé dans GA4 par :",
    options: [
      "L'exit rate",
      "Le taux d'engagement",
      "Le taux de conversion",
      "Le scroll depth"
    ],
    correctAnswer: 1,
    explanation: "GA4 utilise le taux d'engagement (sessions engagées / total sessions) au lieu du bounce rate. Une session engagée dure >10s, a une conversion, ou >1 page vue."
  },
  {
    question: "L'événement 'begin_checkout' dans GA4 indique :",
    options: [
      "L'utilisateur a ajouté un produit au panier",
      "L'utilisateur a commencé le processus de paiement",
      "L'utilisateur a terminé son achat",
      "L'utilisateur a créé son compte"
    ],
    correctAnswer: 1,
    explanation: "begin_checkout marque le début du processus de paiement, après l'ajout au panier. C'est une étape critique du funnel pour identifier les abandons checkout."
  },
  {
    question: "Quel outil permet de tester les balises Open Graph d'une page ?",
    options: [
      "Google Analytics",
      "Facebook Sharing Debugger",
      "Google Search Console",
      "Hotjar"
    ],
    correctAnswer: 1,
    explanation: "Le Facebook Sharing Debugger permet de prévisualiser et débugger l'affichage de vos liens partagés sur Facebook, LinkedIn et autres réseaux sociaux."
  }
];

/**
 * Quiz 3: Application Pratique et Stratégie
 */
export const practicalQuizQuestions: QuizQuestion[] = [
  {
    question: "Si votre CPA est de 30€ et votre marge unitaire de 80€, quelle est votre rentabilité ?",
    options: [
      "37,5% (bon)",
      "62,5% (excellent)",
      "267% (irréaliste)",
      "Non rentable"
    ],
    correctAnswer: 0,
    explanation: "CPA/Marge = 30€/80€ = 37,5%. C'est un bon ratio car inférieur à 50%. Il reste 50€ de marge nette après acquisition."
  },
  {
    question: "Comment interpréter un CTR de 0,5% sur une campagne display ?",
    options: [
      "Excellent, bien au-dessus de la moyenne",
      "Correct pour du display (moyenne 0,35%)",
      "Faible, nécessite optimisation",
      "Catastrophique, arrêter la campagne"
    ],
    correctAnswer: 1,
    explanation: "0,5% est un CTR correct pour le display où la moyenne secteur est autour de 0,35%. Le display vise la notoriété plus que le clic immédiat."
  },
  {
    question: "Quel canal devriez-vous prioriser avec ces performances : Google Ads (ROAS 3:1, Volume 1000€), Facebook (ROAS 5:1, Volume 200€) ?",
    options: [
      "Facebook uniquement (meilleur ROAS)",
      "Google Ads uniquement (plus de volume)",
      "Optimiser Facebook pour scaler, maintenir Google Ads",
      "Arrêter Facebook (volume trop faible)"
    ],
    correctAnswer: 2,
    explanation: "Facebook a un excellent ROAS mais un faible volume. L'idéal est d'optimiser Facebook pour augmenter son volume tout en maintenant Google Ads qui apporte une base solide."
  },
  {
    question: "Votre taux de rebond est de 80%. Quelle action prioriser ?",
    options: [
      "Augmenter le budget publicitaire",
      "Améliorer la pertinence de la page d'atterrissage",
      "Changer les mots-clés ciblés",
      "Modifier les horaires de diffusion"
    ],
    correctAnswer: 1,
    explanation: "Un taux de rebond de 80% indique que la page d'atterrissage ne correspond pas aux attentes des visiteurs. Il faut améliorer la pertinence du contenu et l'UX."
  },
  {
    question: "Pour une boutique e-commerce, quel KPI surveiller en priorité ?",
    options: [
      "Le nombre total de visiteurs uniquement",
      "Le taux de conversion ET le panier moyen",
      "Seulement le chiffre d'affaires",
      "Uniquement le nombre de nouveaux clients"
    ],
    correctAnswer: 1,
    explanation: "Il faut une vision globale : taux de conversion (efficacité du site) ET panier moyen (valeur par transaction). Ces deux KPIs se multiplient pour donner la performance réelle."
  },
  {
    question: "Comment réagir à une baisse soudaine du trafic organique ?",
    options: [
      "Vérifier Search Console pour des problèmes techniques ou pénalités",
      "Augmenter immédiatement le budget Google Ads",
      "Changer complètement de stratégie SEO",
      "Attendre que ça se règle automatiquement"
    ],
    correctAnswer: 0,
    explanation: "Première étape : diagnostiquer via Search Console (erreurs d'indexation, pénalités manuelles, problèmes de crawl) avant d'ajuster la stratégie."
  },
  {
    question: "Un tunnel de conversion révèle 70% d'abandon au panier. Quelle optimisation tenter en premier ?",
    options: [
      "Changer les produits proposés",
      "Augmenter les prix pour filtrer",
      "Modifier le design du site",
      "Réduire les frictions (frais de port, étapes, sécurité)"
    ],
    correctAnswer: 3,
    explanation: "70% d'abandon au panier indique des frictions : frais de port élevés, processus trop long, manque de confiance. Il faut simplifier et rassurer."
  },
  {
    question: "Quelle métrique surveiller pour mesurer la fidélisation client ?",
    options: [
      "Le taux de rétention",
      "Le taux d'acquisition",
      "Le coût par clic",
      "Le nombre d'impressions"
    ],
    correctAnswer: 0,
    explanation: "Le taux de rétention mesure le pourcentage de clients qui reviennent sur une période donnée. C'est l'indicateur clé de fidélisation."
  },
  {
    question: "Comment interpréter un ROAS de 2:1 ?",
    options: [
      "Excellent, très rentable",
      "Correct mais peut être amélioré",
      "Limite, proche du seuil de rentabilité",
      "Catastrophique, arrêter immédiatement"
    ],
    correctAnswer: 2,
    explanation: "ROAS 2:1 = 2€ de CA pour 1€ de pub. C'est limite car il faut couvrir les coûts opérationnels. Minimum 3:1 recommandé en e-commerce."
  },
  {
    question: "Le cost per acquisition (CPA) idéal devrait représenter quel pourcentage de votre marge ?",
    options: [
      "10-20%",
      "30-50%",
      "70-80%",
      "90-100%"
    ],
    correctAnswer: 1,
    explanation: "Un CPA représentant 30-50% de la marge unitaire est généralement acceptable, laissant suffisamment pour couvrir les autres coûts et dégager du profit."
  },
  {
    question: "Pourquoi segmenter ses audiences publicitaires ?",
    options: [
      "Pour compliquer les campagnes",
      "Pour personnaliser le message et améliorer les performances",
      "Pour dépenser plus de budget",
      "Pour impressionner les clients"
    ],
    correctAnswer: 1,
    explanation: "La segmentation permet d'adapter le message publicitaire aux spécificités de chaque groupe, améliorant pertinence, CTR et taux de conversion."
  },
  {
    question: "Quel indicateur révèle un problème de ciblage publicitaire ?",
    options: [
      "CTR élevé avec taux de conversion faible",
      "CTR faible avec taux de conversion élevé",
      "CPC élevé avec ROAS élevé",
      "Impressions élevées avec budget faible"
    ],
    correctAnswer: 0,
    explanation: "CTR élevé + conversion faible = mauvais ciblage. Les gens cliquent (annonce attractive) mais n'achètent pas (audience non qualifiée)."
  },
  {
    question: "L'entonnoir de conversion (funnel) permet de :",
    options: [
      "Créer des publicités en forme d'entonnoir",
      "Identifier les étapes où les prospects abandonnent",
      "Organiser l'équipe marketing",
      "Planifier les budgets annuels"
    ],
    correctAnswer: 1,
    explanation: "Le funnel visualise le parcours client étape par étape, révélant où se situent les principales pertes de prospects pour optimiser en priorité."
  },
  {
    question: "Un dashboard marketing efficace doit :",
    options: [
      "Contenir un maximum de graphiques",
      "Inclure toutes les données disponibles",
      "Être mis à jour une fois par an",
      "Se concentrer sur les KPIs actionnables"
    ],
    correctAnswer: 3,
    explanation: "Un bon dashboard se concentre sur les KPIs qui permettent de prendre des décisions. Trop d'informations noient l'essentiel et paralysent l'action."
  },
  {
    question: "Comment optimiser un faible taux d'ouverture d'emails ?",
    options: [
      "Envoyer plus d'emails",
      "Tester différents objets et horaires d'envoi",
      "Augmenter la fréquence d'envoi",
      "Utiliser uniquement des images"
    ],
    correctAnswer: 1,
    explanation: "Le taux d'ouverture dépend principalement de l'objet de l'email et du timing d'envoi. L'A/B testing sur ces éléments est la méthode la plus efficace."
  },
  {
    question: "La Customer Acquisition Cost (CAC) payback period représente :",
    options: [
      "Le temps pour que les revenus d'un client couvrent son coût d'acquisition",
      "La durée d'une campagne publicitaire",
      "Le délai de paiement des fournisseurs",
      "La période de remboursement client"
    ],
    correctAnswer: 0,
    explanation: "La CAC payback period est le temps nécessaire pour que les revenus générés par un nouveau client couvrent le coût investi pour l'acquérir."
  },
  {
    question: "En cas de baisse du Quality Score Google Ads, quelle action prioriser ?",
    options: [
      "Augmenter les enchères",
      "Changer de plateforme publicitaire",
      "Réduire le budget",
      "Améliorer la pertinence annonces/mots-clés/landing page"
    ],
    correctAnswer: 3,
    explanation: "Le Quality Score dépend de trois facteurs : pertinence des annonces, des mots-clés et qualité de la landing page. Il faut optimiser ces trois éléments."
  },
  {
    question: "Le cross-selling consiste à :",
    options: [
      "Proposer des produits complémentaires",
      "Vendre dans plusieurs pays",
      "Vendre à la concurrence",
      "Croiser les bases de données"
    ],
    correctAnswer: 0,
    explanation: "Le cross-selling propose des produits complémentaires à l'achat principal (ex: accessoires avec un smartphone) pour augmenter le panier moyen."
  },
  {
    question: "Pour mesurer l'efficacité du SEO, quel ratio observer ?",
    options: [
      "Trafic organique / Trafic total",
      "Positions moyennes / Nombre de mots-clés",
      "Trafic organique / Trafic payant",
      "Pages indexées / Pages totales"
    ],
    correctAnswer: 0,
    explanation: "Le ratio trafic organique/trafic total indique votre indépendance vis-à-vis de la publicité payante. Plus il est élevé, plus votre SEO est efficace."
  },
  {
    question: "Un bon taux de clic (CTR) pour une campagne Google Ads Search est généralement :",
    options: [
      "0,5-1%",
      "2-5%",
      "10-15%",
      "20-30%"
    ],
    correctAnswer: 1,
    explanation: "Pour Google Ads Search, un CTR de 2-5% est considéré comme bon. En dessous de 2%, il faut optimiser les annonces et le ciblage."
  },

  // === NOUVELLES QUESTIONS STRATÉGIQUES ===
  {
    question: "Vous avez 1000€ de budget pub et devez choisir entre Search (CTR 3%, CVR 5%) et Display (CTR 0.5%, CVR 1%). Quel canal est plus efficace pour les conversions ?",
    options: [
      "Display car moins cher en CPC",
      "Search car meilleur combo CTR × CVR",
      "Impossible à déterminer sans le CPM",
      "Les deux sont équivalents"
    ],
    correctAnswer: 1,
    explanation: "Search a un bien meilleur funnel global (3% × 5% = 0.15% de conversion finale) vs Display (0.5% × 1% = 0.005%). Même si le CPC Search est plus cher, l'efficacité est bien supérieure."
  },
  {
    question: "Votre site a 10 000 visiteurs/mois et un taux de conversion de 2%. Pour atteindre 300 ventes/mois, quelle stratégie prioriser ?",
    options: [
      "Augmenter le trafic à 15 000 visiteurs",
      "Améliorer le taux de conversion à 3%",
      "Les deux stratégies donnent le même résultat",
      "Baisser les prix pour vendre plus"
    ],
    correctAnswer: 2,
    explanation: "10 000 × 2% = 200 ventes actuelles. Pour 300 ventes : 15 000 × 2% = 300 OU 10 000 × 3% = 300. Les deux marchent ! En pratique, améliorer le CVR est souvent moins coûteux."
  },
  {
    question: "Un client hésite entre 2 produits. Que recommander pour maximiser le CA ?",
    options: [
      "Le produit le moins cher pour faciliter la décision",
      "Le produit le plus populaire",
      "Le bundle des deux produits avec une réduction",
      "Laisser le client décider seul"
    ],
    correctAnswer: 2,
    explanation: "Proposer un bundle avec réduction légère augmente le panier moyen tout en donnant au client l'impression de faire une bonne affaire. C'est du cross-selling intelligent."
  },
  {
    question: "Votre campagne Facebook a un CPM de 10€ et un CTR de 1%. Quel est votre CPC approximatif ?",
    options: [
      "0,10€",
      "1€",
      "10€",
      "100€"
    ],
    correctAnswer: 1,
    explanation: "CPM 10€ = 10€ pour 1000 impressions. CTR 1% = 10 clics. CPC = 10€ / 10 clics = 1€ par clic."
  },
  {
    question: "Votre email de relance panier a un taux d'ouverture de 40% et un CTR de 15%. Quel est le taux de clic global ?",
    options: [
      "55%",
      "25%",
      "6%",
      "2,67%"
    ],
    correctAnswer: 2,
    explanation: "Le CTR est calculé sur les ouverts. Taux de clic global = 40% × 15% = 6% des destinataires ont cliqué."
  },
  {
    question: "Une landing page avec formulaire a 1000 visiteurs et 50 conversions. Après simplification du formulaire (moins de champs), elle a 1000 visiteurs et 80 conversions. Quelle amélioration ?",
    options: [
      "+30% de taux de conversion",
      "+60% de taux de conversion",
      "+3% de taux de conversion",
      "+50% de taux de conversion"
    ],
    correctAnswer: 1,
    explanation: "Avant : 50/1000 = 5%. Après : 80/1000 = 8%. Amélioration : (8-5)/5 × 100 = +60% de taux de conversion."
  },
  {
    question: "Vous gérez une campagne avec 100€/jour de budget. Elle performe bien le mardi mais mal le dimanche. Que faire ?",
    options: [
      "Arrêter complètement le dimanche",
      "Mettre le même budget tous les jours pour être juste",
      "Ajuster le budget : plus le mardi, moins le dimanche",
      "Changer de plateforme publicitaire"
    ],
    correctAnswer: 2,
    explanation: "Le dayparting (ajustement par jour/heure) optimise le budget. Investir plus quand ça performe et réduire les jours faibles maximise le ROAS global."
  },
  {
    question: "Votre newsletter a 10 000 abonnés. 500 se désabonnent après un envoi. Quel est le taux de désabonnement ?",
    options: [
      "5%",
      "0,5%",
      "50%",
      "0,05%"
    ],
    correctAnswer: 0,
    explanation: "Taux de désabonnement = 500 / 10 000 × 100 = 5%. C'est élevé (la moyenne acceptable est < 0,5%), il faut revoir le contenu ou la fréquence."
  },
  {
    question: "Un produit à 100€ avec 30% de marge et un CPA de 25€ est-il rentable ?",
    options: [
      "Oui, on gagne 5€ par vente",
      "Non, on perd de l'argent",
      "Oui, on gagne 30€ par vente",
      "Impossible à calculer"
    ],
    correctAnswer: 0,
    explanation: "Marge = 100€ × 30% = 30€. Après CPA de 25€, il reste 30€ - 25€ = 5€ de profit. Rentable mais avec une marge fine."
  },
  {
    question: "Pour une startup en phase de croissance, quel ratio LTV/CAC est acceptable ?",
    options: [
      "1:1 (équilibre)",
      "2:1 minimum",
      "3:1 ou plus",
      "10:1 minimum"
    ],
    correctAnswer: 2,
    explanation: "Un ratio LTV/CAC de 3:1 est le minimum sain pour une croissance durable. En dessous, l'entreprise dépense trop pour acquérir des clients par rapport à leur valeur."
  }
];

// Extraire les questions des modules
const moduleQuestions = extractQuestionsFromModules();

// Créer une banque de questions complète pour chaque catégorie
const allFoundationsQuestions = [...dataMarketingQuizQuestions, ...moduleQuestions.filter((_, index) => index % 3 === 0)];
const allAnalyticsQuestions = [...analyticsToolsQuizQuestions, ...moduleQuestions.filter((_, index) => index % 3 === 1)];
const allPracticalQuestions = [...practicalQuizQuestions, ...moduleQuestions.filter((_, index) => index % 3 === 2)];

/**
 * Définition des quiz disponibles - version finale avec sélection aléatoire
 */
export const availableQuizzes: Quiz[] = [
  {
    id: 'data-marketing-foundations',
    title: 'Fondements du Data Marketing',
    description: 'Testez votre maîtrise des concepts fondamentaux : KPIs, métriques, parcours client et sources de données. Questions aléatoires pour chaque session !',
    questions: allFoundationsQuestions, // Banque complète
    difficulty: 'Progressif',
    duration: '12-15 minutes',
    category: 'Fondamentaux',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'analytics-tools',
    title: 'Outils d\'Analyse et Plateformes',
    description: 'Évaluez vos connaissances sur Google Analytics, Search Console, et les outils du data marketer. Nouvelles questions à chaque fois !',
    questions: allAnalyticsQuestions, // Banque complète
    difficulty: 'Intermédiaire',
    duration: '15-20 minutes',
    category: 'Outils',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'practical-strategy',
    title: 'Application et Stratégie',
    description: 'Quiz pratique sur les calculs, l\'optimisation et la prise de décision en data marketing. Questions variées à chaque passage !',
    questions: allPracticalQuestions, // Banque complète
    difficulty: 'Débutant à Intermédiaire',
    duration: '10-12 minutes',
    category: 'Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'random-mix',
    title: 'Quiz Surprise - Mix Complet',
    description: 'Un mélange aléatoire de toutes les questions de la plateforme ! Parfait pour réviser l\'ensemble du programme.',
    questions: [...allFoundationsQuestions, ...allAnalyticsQuestions, ...allPracticalQuestions], // Toutes les questions
    difficulty: 'Tous niveaux',
    duration: '20-25 minutes',
    category: 'Révision',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

/**
 * Fonction pour obtenir un quiz avec questions aléatoires
 * @param quizId - ID du quiz
 * @param questionCount - Nombre de questions à sélectionner (par défaut 20)
 * @returns Quiz avec questions aléatoires
 */
export const getRandomizedQuiz = (quizId: string, questionCount: number = 20): Quiz | null => {
  const quiz = availableQuizzes.find(q => q.id === quizId);
  if (!quiz) return null;

  return {
    ...quiz,
    questions: selectRandomQuestions(quiz.questions, questionCount)
  };
};
