/**
 * Interface pour définir la structure d'un terme du glossaire
 */
export interface GlossaryTerm {
  title: string;
  acronym?: string;
  description: string;
  example: string;
  category: string;
  difficulty?: 'débutant' | 'intermédiaire' | 'avancé';
}

/**
 * Lexique complet du data marketing - enrichi avec tous les termes de la formation
 */
export const glossaryTerms: GlossaryTerm[] = [
  // A
  {
    title: "A/B Testing",
    acronym: "Test A/B",
    description: "Méthode d'expérimentation comparant deux versions d'un élément marketing pour déterminer laquelle performe le mieux. Nécessite un échantillon suffisant et une significativité statistique de 95% minimum.",
    example: "Tester deux couleurs de bouton (bleu vs vert) sur 20 000 visiteurs pour mesurer l'impact sur le taux de conversion.",
    category: "Optimisation",
    difficulty: "intermédiaire"
  },
  {
    title: "AOV",
    acronym: "Average Order Value (Panier Moyen)",
    description: "Montant moyen dépensé par commande sur votre site e-commerce. KPI essentiel pour mesurer la valeur par transaction et l'efficacité des stratégies de cross-sell/up-sell.",
    example: "Si vous vendez pour 10 000€ avec 200 commandes, votre AOV est de 50€.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "Attribution Marketing",
    description: "Processus déterminant quels canaux marketing méritent le crédit d'une conversion. Différents modèles : dernier clic (simple mais biaisé), premier clic, linéaire, ou data-driven (IA).",
    example: "Un client voit votre pub Instagram, lit un article SEO, reçoit un email puis achète en direct. Quel canal a contribué le plus ?",
    category: "Analyse",
    difficulty: "avancé"
  },
  
  // B
  {
    title: "Business Intelligence",
    acronym: "BI",
    description: "Ensemble d'outils et méthodes permettant de collecter, analyser et présenter les données d'entreprise pour faciliter la prise de décision. Inclut les dashboards, reporting et analyses prédictives.",
    example: "Un dashboard Power BI consolidant ventes, marketing et finances pour la direction générale.",
    category: "Analyse",
    difficulty: "intermédiaire"
  },
  
  // C
  {
    title: "Churn Rate",
    acronym: "Taux de Désabonnement",
    description: "Pourcentage de clients qui cessent d'utiliser votre produit/service sur une période donnée. Métrique critique pour les business récurrents (SaaS, abonnements).",
    example: "Si 50 clients sur 1000 annulent leur abonnement en un mois, le churn rate mensuel est de 5%.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "CPA",
    acronym: "Cost Per Acquisition (Coût Par Acquisition)",
    description: "Coût moyen pour acquérir un nouveau client. Se calcule en divisant le coût total de la campagne par le nombre de conversions. Doit représenter 30-50% de votre marge pour être rentable.",
    example: "1000€ de pub pour 25 ventes = CPA de 40€. Si votre marge est de 100€, c'est rentable (40% de la marge).",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "CPC",
    acronym: "Cost Per Click (Coût Par Clic)",
    description: "Montant payé chaque fois qu'un utilisateur clique sur votre publicité. Varie selon la concurrence sur les mots-clés et la qualité de vos annonces (Quality Score).",
    example: "Google Ads avec CPC moyen de 1,20€ sur des mots-clés 'chaussures running'. LinkedIn souvent 3-5x plus cher.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "CPL",
    acronym: "Cost Per Lead (Coût Par Prospect)",
    description: "Coût pour obtenir un contact qualifié (email, téléphone, demande de devis). Crucial en B2B où la vente ne se fait pas directement online.",
    example: "Campagne LinkedIn générant 50 téléchargements de livre blanc pour 500€ = CPL de 10€.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "CPM",
    acronym: "Cost Per Mille (Coût Pour 1000 Impressions)",
    description: "Modèle de tarification où vous payez pour 1000 affichages de votre publicité, qu'il y ait clic ou non. Idéal pour les campagnes de notoriété et branding.",
    example: "Campagne display avec CPM de 5€ = 5€ pour 1000 personnes qui voient votre annonce.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "CRO",
    acronym: "Conversion Rate Optimization",
    description: "Processus d'amélioration systématique d'un site web pour augmenter le pourcentage de visiteurs qui réalisent l'action souhaitée (achat, inscription, contact).",
    example: "Tester différentes versions d'une page de checkout pour réduire l'abandon de panier de 70% à 50%.",
    category: "Optimisation",
    difficulty: "intermédiaire"
  },
  {
    title: "CTR",
    acronym: "Click-Through Rate (Taux de Clic)",
    description: "Pourcentage de personnes qui cliquent sur votre publicité/lien par rapport au nombre d'impressions. Mesure la pertinence de votre message pour votre audience.",
    example: "Annonce vue 1000 fois avec 25 clics = CTR de 2,5%. Un bon CTR Google Ads Search est de 2-5%.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "Customer Journey",
    acronym: "Parcours Client",
    description: "Ensemble des étapes par lesquelles passe un prospect avant de devenir client : Acquisition → Engagement → Conversion → Rétention. Chaque étape a ses KPIs spécifiques.",
    example: "De la découverte via Instagram à l'achat final en passant par newsletter et recherche Google.",
    category: "Marketing",
    difficulty: "débutant"
  },
  
  // D
  {
    title: "Dashboard",
    acronym: "Tableau de Bord",
    description: "Interface visuelle centralisant les KPIs et métriques essentiels de votre business. Doit se concentrer sur les données actionnables, pas sur l'exhaustivité.",
    example: "Dashboard quotidien avec ROAS, trafic, conversions et alertes sur les performances anormales.",
    category: "Analyse",
    difficulty: "débutant"
  },
  {
    title: "Data Storytelling",
    description: "Art de transformer des données brutes en histoire convaincante avec contexte, personnages (segments), intrigue (problème/opportunité) et résolution (recommandations).",
    example: "Présenter une baisse de trafic comme 'Notre audience premium se désintéresse du contenu actuel, voici comment la reconquérir'.",
    category: "Communication",
    difficulty: "intermédiaire"
  },
  {
    title: "DMP",
    acronym: "Data Management Platform",
    description: "Plateforme gérant principalement des données anonymes (cookies, ID) pour le ciblage publicitaire programmatique. Différent d'une CDP qui gère l'identité client.",
    example: "Adobe Audience Manager collectant des données comportementales pour créer des segments publicitaires.",
    category: "Plateforme",
    difficulty: "avancé"
  },
  
  // E
  {
    title: "Effet Domino",
    description: "Concept enseigné dans le cours : une dégradation en amont du funnel amplifie ses effets en aval. Une baisse de CTR réduit le trafic qualifié, impactant engagement puis conversions.",
    example: "CTR qui passe de 3% à 2% → -33% de trafic → Impact sur toutes les métriques suivantes (engagement, ventes, LTV).",
    category: "Concept",
    difficulty: "intermédiaire"
  },
  {
    title: "ETL",
    acronym: "Extract, Transform, Load",
    description: "Processus de collecte de données : extraction depuis les sources (APIs Google, Meta), transformation pour harmoniser les formats, et chargement dans un entrepôt de données.",
    example: "Extraire les données Google Ads et Facebook Ads, unifier les formats de date, puis charger dans un data warehouse.",
    category: "Technologie",
    difficulty: "avancé"
  },
  
  // F
  {
    title: "First-Party Data",
    acronym: "Données Propriétaires",
    description: "Données collectées directement par votre entreprise via vos interactions avec les clients. Les plus précieuses car exclusives, complètes et obtenues avec consentement.",
    example: "Données de navigation sur votre site, historique d'achats CRM, réponses à vos enquêtes satisfaction.",
    category: "Données",
    difficulty: "débutant"
  },
  {
    title: "Funnel",
    acronym: "Entonnoir de Conversion",
    description: "Visualisation du parcours client montrant les pertes à chaque étape. Permet d'identifier les points de friction prioritaires à optimiser.",
    example: "100 000 visiteurs → 45 000 vues produit → 12 000 ajouts panier → 8 500 checkouts → 2 800 achats.",
    category: "Analyse",
    difficulty: "débutant"
  },

  // G
  {
    title: "GA4",
    acronym: "Google Analytics 4",
    description: "Nouvelle version de Google Analytics basée sur les événements (chaque interaction = événement) au lieu des pages vues. Taux d'engagement remplace le taux de rebond.",
    example: "Tracking d'événements personnalisés : clic sur vidéo, téléchargement PDF, temps de lecture d'article.",
    category: "Outil",
    difficulty: "débutant"
  },

  // H
  {
    title: "Heat Map",
    acronym: "Carte de Chaleur",
    description: "Visualisation montrant où les utilisateurs cliquent, scrollent et focalisent leur attention sur une page web. Outil d'optimisation UX essentiel.",
    example: "Hotjar révélant que 80% des clics se concentrent sur une zone de 300px, permettant d'optimiser le placement des CTA.",
    category: "Analyse",
    difficulty: "débutant"
  },
  
  // I
  {
    title: "Impression Share",
    description: "Pourcentage d'impressions obtenues par rapport au nombre total d'impressions possibles pour vos mots-clés. Indique si vous perdez de la visibilité par manque de budget ou de qualité.",
    example: "Impression Share de 60% = vous ratez 40% des opportunités d'apparaître, souvent par budget insuffisant.",
    category: "Métrique",
    difficulty: "intermédiaire"
  },
  
  // K
  {
    title: "KPI",
    acronym: "Key Performance Indicator",
    description: "Indicateur clé de performance mesurant l'atteinte d'objectifs spécifiques. Doit être SMART : Spécifique, Mesurable, Atteignable, Réaliste, Temporel.",
    example: "Augmenter le taux de conversion de 2% à 3% en 3 mois = KPI SMART vs 'améliorer les ventes' (trop vague).",
    category: "Métrique",
    difficulty: "débutant"
  },

  // L
  {
    title: "Landing Page",
    acronym: "Page d'Atterrissage",
    description: "Page web spécialement conçue pour recevoir les visiteurs d'une campagne marketing spécifique. Optimisée pour un seul objectif : maximiser les conversions.",
    example: "Page dédiée pour une promo Black Friday avec message, offre et CTA uniques. Convertit 5x mieux qu'une homepage générale.",
    category: "Optimisation",
    difficulty: "débutant"
  },
  {
    title: "Lead Scoring",
    description: "Système de notation automatique des prospects selon leur probabilité de devenir clients, basé sur leur comportement et profil. Permet de prioriser les efforts commerciaux.",
    example: "Prospect qui télécharge 3 contenus + visite la page prix + entreprise 500+ employés = Score élevé → Contact commercial prioritaire.",
    category: "Marketing",
    difficulty: "intermédiaire"
  },
  {
    title: "Lookalike Audience",
    acronym: "Audience Similaire",
    description: "Audience créée par l'IA des plateformes publicitaires pour trouver de nouveaux prospects similaires à vos meilleurs clients existants.",
    example: "Facebook analyse vos 1000 meilleurs clients et trouve 100 000 personnes aux caractéristiques similaires pour vos campagnes.",
    category: "Marketing",
    difficulty: "intermédiaire"
  },
  {
    title: "LTV",
    acronym: "Lifetime Value (Valeur Vie Client)",
    description: "Estimation du chiffre d'affaires total qu'un client générera pendant toute sa relation avec votre entreprise. Détermine combien investir dans l'acquisition et la rétention.",
    example: "Client SaaS à 50€/mois qui reste 24 mois en moyenne = LTV de 1200€. CPA acceptable : 300-400€.",
    category: "Métrique",
    difficulty: "intermédiaire"
  },
  
  // M
  {
    title: "MMM",
    acronym: "Marketing Mix Modeling",
    description: "Analyse statistique avancée mesurant l'impact de différentes activités marketing sur les ventes pour optimiser l'allocation budgétaire entre canaux.",
    example: "Modèle révélant que +10% budget TV génère +5% ventes vs +15% budget digital génère +12% ventes.",
    category: "Analyse",
    difficulty: "avancé"
  },

  // N
  {
    title: "NPS",
    acronym: "Net Promoter Score",
    description: "Indicateur de satisfaction client basé sur une question : 'Recommanderiez-vous notre entreprise ?' (0-10). NPS = % Promoteurs (9-10) - % Détracteurs (0-6).",
    example: "65% promoteurs - 10% détracteurs = NPS de +55 (excellent). Prédit le bouche-à-oreille et la croissance organique.",
    category: "Métrique",
    difficulty: "débutant"
  },
  
  // O
  {
    title: "Onboarding",
    description: "Processus d'accueil et de formation des nouveaux utilisateurs pour les aider à adopter votre produit/service rapidement et efficacement.",
    example: "Séquence de 5 emails + tutoriels in-app pour les nouveaux utilisateurs d'une app, réduisant l'abandon de 70% à 30%.",
    category: "UX",
    difficulty: "débutant"
  },
  
  // P
  {
    title: "Plan de Tagging",
    description: "Document de référence définissant précisément quels événements tracker sur votre site/app et comment. Sans plan, les données sont inutilisables pour l'analyse.",
    example: "Plan spécifiant : 'Clic bouton achat' = événement 'purchase_intent' avec paramètres product_id, price, category.",
    category: "Concept",
    difficulty: "intermédiaire"
  },
  {
    title: "Pixel de Tracking",
    description: "Code invisible placé sur votre site pour collecter des données comportementales. Permet le retargeting et l'optimisation des campagnes publicitaires.",
    example: "Pixel Facebook sur page de confirmation d'achat pour créer une audience de 'buyers' pour le retargeting.",
    category: "Technologie",
    difficulty: "débutant"
  },
  
  // Q
  {
    title: "Quality Score",
    acronym: "Note de Qualité",
    description: "Note de 1 à 10 attribuée par Google Ads évaluant la pertinence de vos annonces, mots-clés et landing pages. Impact direct sur vos coûts et positions.",
    example: "Quality Score 8/10 = CPC réduit de 30% et meilleures positions vs Quality Score 4/10.",
    category: "Métrique",
    difficulty: "intermédiaire"
  },
  
  // R
  {
    title: "Retargeting",
    acronym: "Reciblage Publicitaire",
    description: "Technique publicitaire ciblant des personnes ayant déjà interagi avec votre marque (visite site, abandon panier). Taux de conversion généralement 3-10x supérieurs.",
    example: "Publicité Facebook pour les visiteurs ayant consulté un produit sans acheter : 'Votre produit vous attend' avec 10% de réduction.",
    category: "Marketing",
    difficulty: "débutant"
  },
  {
    title: "ROAS",
    acronym: "Return On Ad Spend",
    description: "Chiffre d'affaires généré pour chaque euro dépensé en publicité. ROAS minimum recommandé : 3:1 en e-commerce pour couvrir les coûts opérationnels.",
    example: "1000€ de pub Google Ads générant 4000€ de CA = ROAS de 4:1. Bon mais regarder aussi le volume et la profitabilité.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "ROI",
    acronym: "Return On Investment",
    description: "Rentabilité globale d'un investissement marketing. ROI = (Gain - Coût) ÷ Coût × 100. Différent du ROAS car inclut tous les coûts, pas seulement la publicité.",
    example: "Campagne coûtant 2000€ (pub + création + temps) générant 8000€ = ROI de 300%.",
    category: "Métrique",
    difficulty: "débutant"
  },
  
  // S
  {
    title: "SEA",
    acronym: "Search Engine Advertising",
    description: "Référencement payant sur les moteurs de recherche. Publicités apparaissant dans les résultats Google/Bing quand les utilisateurs tapent des mots-clés spécifiques.",
    example: "Annonces Google Ads en haut des résultats pour 'chaussures running' quand quelqu'un tape cette recherche.",
    category: "Marketing",
    difficulty: "débutant"
  },
  {
    title: "SEO",
    acronym: "Search Engine Optimization",
    description: "Optimisation pour moteurs de recherche. Techniques pour améliorer le classement naturel (gratuit) de votre site dans Google via contenu, technique et popularité.",
    example: "Optimiser un article de blog pour qu'il apparaisse en première page Google sur 'guide d'achat chaussures running'.",
    category: "Marketing",
    difficulty: "débutant"
  },
  {
    title: "SERP",
    acronym: "Search Engine Results Page",
    description: "Page de résultats affichée par Google après une recherche. Comprend résultats organiques, publicités, featured snippets, images, etc.",
    example: "Recherche 'restaurant paris' affiche une SERP avec pubs, Google Maps, avis, résultats organiques.",
    category: "SEO",
    difficulty: "débutant"
  },
  {
    title: "Striking Distance",
    description: "Expression SEO désignant les mots-clés positionnés entre la 11ème et 20ème position (page 2), donc 'à portée' de la page 1 avec un peu d'optimisation.",
    example: "Mot-clé en position 15 avec bon potentiel de trafic = Quick win possible en optimisant le contenu de la page.",
    category: "SEO",
    difficulty: "intermédiaire"
  },
  
  // T
  {
    title: "Taux d'Engagement",
    acronym: "Engagement Rate",
    description: "Dans GA4 : pourcentage de sessions avec durée >10s, OU conversion, OU 2+ pages vues. Remplace le taux de rebond et mesure la qualité des sessions.",
    example: "Site avec 60% de taux d'engagement = 60% des visiteurs interagissent vraiment vs 40% qui repartent immédiatement.",
    category: "Métrique",
    difficulty: "débutant"
  },
  {
    title: "Taux de Rétention",
    acronym: "Retention Rate",
    description: "Pourcentage de clients qui continuent d'utiliser votre produit/service après leur première période d'utilisation. Inverse du churn rate.",
    example: "App mobile avec 45% de rétention à 30 jours = 45% des utilisateurs utilisent encore l'app après un mois.",
    category: "Métrique",
    difficulty: "débutant"
  },
  
  // U
  {
    title: "Up-sell",
    description: "Technique commerciale consistant à proposer un produit/service de gamme supérieure ou des options premium au client existant pour augmenter la valeur de la transaction.",
    example: "Proposer la version Pro d'un logiciel SaaS à un utilisateur de la version Basic, ou des options premium sur une voiture.",
    category: "Marketing",
    difficulty: "débutant"
  },
  {
    title: "UTM",
    acronym: "Urchin Tracking Module",
    description: "Paramètres ajoutés aux URLs pour tracer l'origine du trafic dans Google Analytics. 5 paramètres : source, medium, campaign, term, content.",
    example: "www.site.com?utm_source=newsletter&utm_medium=email&utm_campaign=blackfriday pour tracker une campagne email.",
    category: "Analyse",
    difficulty: "intermédiaire"
  },
  
  // V
  {
    title: "Visiteur Unique",
    acronym: "Unique Visitor",
    description: "Nombre de personnes distinctes ayant visité votre site sur une période donnée, quel que soit le nombre de sessions. Métrique d'audience fondamentale.",
    example: "1 personne qui visite votre site 3 fois = 1 visiteur unique, 3 sessions, plusieurs pages vues.",
    category: "Métrique",
    difficulty: "débutant"
  }
];

/**
 * Catégories du glossaire pour la navigation
 */
export const glossaryCategories = [
  { id: 'all', name: 'Tous les termes', count: glossaryTerms.length },
  { id: 'Métrique', name: 'Métriques & KPIs', count: glossaryTerms.filter(term => term.category === 'Métrique').length },
  { id: 'Marketing', name: 'Marketing Digital', count: glossaryTerms.filter(term => term.category === 'Marketing').length },
  { id: 'Analyse', name: 'Analyse & BI', count: glossaryTerms.filter(term => term.category === 'Analyse').length },
  { id: 'Outil', name: 'Outils & Plateformes', count: glossaryTerms.filter(term => term.category === 'Outil').length },
  { id: 'Données', name: 'Gestion des Données', count: glossaryTerms.filter(term => term.category === 'Données').length },
  { id: 'Optimisation', name: 'Optimisation', count: glossaryTerms.filter(term => term.category === 'Optimisation').length }
];

/**
 * Termes anglais essentiels à maîtriser dans le data marketing
 */
export const englishTerms = [
  {
    english: "Click-Through Rate",
    french: "Taux de clic",
    why: "Terme universel dans tous les outils (Google Ads, Facebook, Analytics). Jamais traduit en interface."
  },
  {
    english: "Cost Per Acquisition",
    french: "Coût par acquisition", 
    why: "Métrique standard mondiale. Rapports internationaux utilisent toujours CPA, pas la traduction."
  },
  {
    english: "Return On Ad Spend",
    french: "Retour sur investissement publicitaire",
    why: "KPI principal e-commerce. Tous les outils (Shopify, Google, Meta) affichent ROAS, jamais en français."
  },
  {
    english: "Customer Lifetime Value", 
    french: "Valeur vie client",
    why: "Concept clé business model. Équipes internationales, investisseurs, outils parlent de LTV/CLV uniquement."
  },
  {
    english: "Bounce Rate",
    french: "Taux de rebond",
    why: "Remplacé par Engagement Rate en GA4, mais encore présent dans de nombreux outils analytics."
  },
  {
    english: "Data-driven",
    french: "Guidé par les données",
    why: "Philosophy business moderne. Aucune traduction acceptée en environnement professionnel international."
  },
  {
    english: "Lead Generation",
    french: "Génération de prospects",
    why: "Process marketing B2B standard. Outils spécialisés (HubSpot, Salesforce) utilisent exclusivement l'anglais."
  },
  {
    english: "Conversion Funnel",
    french: "Entonnoir de conversion",
    why: "Concept analytics universel. Dashboards, présentations et analyses utilisent 'funnel' internationalement."
  }
]; 