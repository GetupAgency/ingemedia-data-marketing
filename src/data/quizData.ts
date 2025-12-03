import { Quiz, QuizQuestion } from '../types/quiz';

/**
 * Quiz 1: Fondements et Lexique du Data Marketing
 */
export const dataMarketingQuizQuestions: QuizQuestion[] = [
  {
    question: "Que signifie l'acronyme CTR en marketing digital ?",
    options: [
      "Cost To Reach",
      "Click-Through Rate",
      "Customer Total Revenue", 
      "Conversion Tracking Rate"
    ],
    correctAnswer: 1,
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
      "Le coût par acquisition d'un nouveau client",
      "Le chiffre d'affaires par action",
      "La croissance du panier moyen",
      "Le taux de conversion par audience"
    ],
    correctAnswer: 0,
    explanation: "CPA signifie Cost Per Acquisition. C'est le montant moyen dépensé pour acquérir un nouveau client ou obtenir une conversion spécifique."
  },
  {
    question: "Que représente la LTV (Lifetime Value) ?",
    options: [
      "La durée de vie d'une campagne marketing",
      "Le temps moyen passé sur le site",
      "La valeur totale qu'un client apportera durant sa relation avec l'entreprise",
      "Le nombre de transactions par client"
    ],
    correctAnswer: 2,
    explanation: "La LTV (Lifetime Value) est la valeur économique totale qu'un client devrait générer pendant toute la durée de sa relation avec l'entreprise."
  },
  {
    question: "Le taux de conversion se calcule comment ?",
    options: [
      "Visiteurs ÷ Conversions × 100",
      "Conversions ÷ Visiteurs × 100",
      "Conversions × Budget ÷ 100",
      "Visiteurs - Conversions"
    ],
    correctAnswer: 1,
    explanation: "Taux de conversion = (Conversions ÷ Visiteurs) × 100. Par exemple : 50 ventes pour 2000 visiteurs = 2,5% de taux de conversion."
  },
  {
    question: "Qu'est-ce que le CPM en publicité ?",
    options: [
      "Cost Per Month",
      "Customer Profile Management",
      "Cost Per Mille (coût pour 1000 impressions)",
      "Conversion Per Minute"
    ],
    correctAnswer: 2,
    explanation: "CPM signifie Cost Per Mille, soit le coût pour 1000 impressions. C'est un modèle de tarification publicitaire idéal pour les campagnes de notoriété."
  },
  {
    question: "Le taux de rebond indique :",
    options: [
      "Le pourcentage d'emails qui n'arrivent pas à destination",
      "Le pourcentage de visiteurs qui quittent le site après une seule page",
      "Le taux d'erreur des campagnes publicitaires",
      "La vitesse de chargement des pages"
    ],
    correctAnswer: 1,
    explanation: "Le taux de rebond mesure le pourcentage de sessions d'une seule page, c'est-à-dire les visiteurs qui partent sans interagir davantage avec le site."
  },
  {
    question: "Que mesure l'AOV (Average Order Value) ?",
    options: [
      "Le nombre moyen de commandes par client",
      "La valeur moyenne d'une commande",
      "Le temps moyen entre deux achats",
      "L'âge moyen des clients"
    ],
    correctAnswer: 1,
    explanation: "AOV (Average Order Value) ou panier moyen mesure la valeur moyenne dépensée par commande sur votre site e-commerce."
  },
  {
    question: "Quelle est la différence principale entre impressions et clics ?",
    options: [
      "Il n'y a pas de différence",
      "Les impressions sont payantes, les clics gratuits",
      "Les impressions mesurent l'affichage, les clics l'interaction",
      "Les clics sont moins importants que les impressions"
    ],
    correctAnswer: 2,
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
  {
    question: "Le taux d'engagement dans GA4 inclut les sessions :",
    options: [
      "De plus de 30 secondes uniquement",
      "Avec au moins 3 pages vues",
      "Avec durée > 10s, conversion, ou 2+ pages vues",
      "Qui se terminent par un achat"
    ],
    correctAnswer: 2,
    explanation: "GA4 considère une session comme engagée si elle dure plus de 10 secondes, OU génère une conversion, OU comporte au moins 2 pages vues."
  },
  {
    question: "Que signifie l'attribution 'dernier clic' ?",
    options: [
      "Seul le premier canal visité reçoit le crédit",
      "Le crédit est réparti équitablement entre tous les canaux",
      "Seul le dernier canal avant conversion reçoit 100% du crédit",
      "Seuls les clics payants sont comptabilisés"
    ],
    correctAnswer: 2,
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
      "Le pourcentage de clients perdus sur une période",
      "La satisfaction client moyenne",
      "Le temps moyen de fidélisation"
    ],
    correctAnswer: 1,
    explanation: "Le taux de churn (attrition) mesure le pourcentage de clients qui cessent d'utiliser un produit ou service sur une période donnée."
  },
  {
    question: "Quelle métrique indique la pertinence d'une publicité ?",
    options: [
      "Le budget dépensé",
      "Le nombre d'impressions",
      "Le CTR (taux de clic)",
      "La durée de la campagne"
    ],
    correctAnswer: 2,
    explanation: "Un CTR élevé indique que votre publicité est pertinente et intéresse votre audience cible. Un CTR faible suggère un problème de ciblage ou de créativité."
  },
  {
    question: "Comment s'appelle le processus d'optimisation du taux de conversion ?",
    options: [
      "CRO (Conversion Rate Optimization)",
      "SEO (Search Engine Optimization)", 
      "SEM (Search Engine Marketing)",
      "SMO (Social Media Optimization)"
    ],
    correctAnswer: 0,
    explanation: "CRO signifie Conversion Rate Optimization. C'est le processus d'amélioration d'un site web pour augmenter le pourcentage de visiteurs qui réalisent l'action souhaitée."
  },
  {
    question: "Qu'est-ce qu'un segment en marketing digital ?",
    options: [
      "Une partie d'une campagne publicitaire",
      "Un groupe de clients aux caractéristiques similaires",
      "Un type de graphique dans Analytics",
      "Une méthode de paiement"
    ],
    correctAnswer: 1,
    explanation: "Un segment est un groupe de clients ou d'utilisateurs qui partagent des caractéristiques communes (âge, comportement, géographie, etc.) permettant un marketing plus ciblé."
  },
  {
    question: "Le modèle d'attribution linéaire :",
    options: [
      "Donne tout le crédit au premier clic",
      "Donne tout le crédit au dernier clic",
      "Répartit équitablement le crédit entre tous les points de contact",
      "Ignore complètement l'attribution"
    ],
    correctAnswer: 2,
    explanation: "L'attribution linéaire distribue le crédit de conversion de manière égale entre tous les canaux marketing qui ont touché le client durant son parcours."
  },
  {
    question: "Un ROAS de 4:1 signifie :",
    options: [
      "4€ dépensés pour 1€ de chiffre d'affaires",
      "1€ dépensé pour 4€ de chiffre d'affaires", 
      "4% de taux de conversion",
      "1% de coût marketing"
    ],
    correctAnswer: 1,
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
      "La satisfaction et probabilité de recommandation client",
      "Le coût d'acquisition par canal",
      "La vitesse de navigation sur le site"
    ],
    correctAnswer: 1,
    explanation: "Le NPS mesure la satisfaction client et leur propension à recommander votre entreprise, basé sur une échelle de 0 à 10."
  },
  {
    question: "Un taux de conversion de 2,5% en e-commerce est généralement considéré comme :",
    options: [
      "Très faible",
      "Correct/dans la moyenne",
      "Excellent",
      "Impossible à évaluer"
    ],
    correctAnswer: 1,
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
      "CPL (Cost Per Lead)",
      "CPC (Cost Per Click)",
      "CPM (Cost Per Mille)"
    ],
    correctAnswer: 1,
    explanation: "CPL (Cost Per Lead) mesure spécifiquement le coût pour acquérir un prospect qualifié (contact, inscription, demande de devis), distinct du CPA qui mesure une vente."
  },
  {
    question: "Les données de première partie (First-Party Data) proviennent :",
    options: [
      "D'organismes externes payants",
      "Directement de vos propres interactions avec les clients",
      "De plateformes publicitaires uniquement",
      "D'études de marché sectorielles"
    ],
    correctAnswer: 1,
    explanation: "Les données de première partie sont collectées directement par votre entreprise via vos interactions avec les clients (site web, app, CRM, emails, etc.)."
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
      "Google Search Console",
      "Google My Business"
    ],
    correctAnswer: 2,
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
      "Une action spécifique que vous voulez suivre (conversion)",
      "La croissance mensuelle du trafic"
    ],
    correctAnswer: 2,
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
      "Le coût pour 1000 impressions",
      "Le coût par minute de vidéo",
      "Le coût par membre ajouté"
    ],
    correctAnswer: 1,
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
      "Budget total ÷ Nombre de clics",
      "Nombre de clics ÷ Budget total",
      "Budget × Nombre de clics"
    ],
    correctAnswer: 1,
    explanation: "CPC = Budget total dépensé ÷ Nombre total de clics. Par exemple : 1000€ pour 500 clics = 2€ de CPC."
  },
  {
    question: "Une cohort analysis permet d'analyser :",
    options: [
      "Les couleurs préférées des clients",
      "Le comportement d'un groupe d'utilisateurs dans le temps",
      "La concurrence directe",
      "Les tendances saisonnières uniquement"
    ],
    correctAnswer: 1,
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
      "La part des impressions obtenues vs impressions possibles",
      "Le ratio entre impressions et clics",
      "Le pourcentage d'impressions frauduleuses"
    ],
    correctAnswer: 1,
    explanation: "L'impression share indique le pourcentage d'impressions que vous avez obtenues par rapport au nombre total d'impressions que vous auriez pu obtenir."
  },
  {
    question: "Un heat map sur un site web permet de visualiser :",
    options: [
      "La température des serveurs",
      "Les zones les plus cliquées et consultées par les utilisateurs",
      "Les horaires de forte affluence",
      "Les erreurs de chargement"
    ],
    correctAnswer: 1,
    explanation: "Une heat map (carte de chaleur) visualise les zones d'un site web où les utilisateurs cliquent, scrollent et focalisent leur attention le plus."
  },
  {
    question: "Le DMP (Data Management Platform) sert à :",
    options: [
      "Gérer uniquement les campagnes Google Ads",
      "Centraliser et organiser les données clients provenant de différentes sources",
      "Créer des sites web",
      "Analyser uniquement les réseaux sociaux"
    ],
    correctAnswer: 1,
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
      "Le nombre moyen de fois qu'une personne voit votre pub",
      "Le rythme de mise à jour des campagnes",
      "La périodicité des rapports"
    ],
    correctAnswer: 1,
    explanation: "La fréquence indique combien de fois en moyenne une même personne a été exposée à votre publicité. Une fréquence trop élevée peut créer de la lassitude."
  },
  {
    question: "Le CPL (Cost Per Lead) est particulièrement important pour :",
    options: [
      "Les sites e-commerce uniquement",
      "Les entreprises B2B avec cycles de vente longs",
      "Les applications mobiles seulement",
      "Les campagnes de notoriété"
    ],
    correctAnswer: 1,
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
      "Augmenter immédiatement le budget Google Ads",
      "Vérifier Search Console pour des problèmes techniques ou pénalités",
      "Changer complètement de stratégie SEO",
      "Attendre que ça se règle automatiquement"
    ],
    correctAnswer: 1,
    explanation: "Première étape : diagnostiquer via Search Console (erreurs d'indexation, pénalités manuelles, problèmes de crawl) avant d'ajuster la stratégie."
  },
  {
    question: "Un tunnel de conversion révèle 70% d'abandon au panier. Quelle optimisation tenter en premier ?",
    options: [
      "Changer les produits proposés",
      "Réduire les frictions (frais de port, étapes, sécurité)",
      "Augmenter les prix pour filtrer",
      "Modifier le design du site"
    ],
    correctAnswer: 1,
    explanation: "70% d'abandon au panier indique des frictions : frais de port élevés, processus trop long, manque de confiance. Il faut simplifier et rassurer."
  },
  {
    question: "Quelle métrique surveiller pour mesurer la fidélisation client ?",
    options: [
      "Le taux d'acquisition",
      "Le taux de rétention",
      "Le coût par clic",
      "Le nombre d'impressions"
    ],
    correctAnswer: 1,
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
      "Se concentrer sur les KPIs actionnables",
      "Inclure toutes les données disponibles",
      "Être mis à jour une fois par an"
    ],
    correctAnswer: 1,
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
      "Améliorer la pertinence annonces/mots-clés/landing page",
      "Changer de plateforme publicitaire",
      "Réduire le budget"
    ],
    correctAnswer: 1,
    explanation: "Le Quality Score dépend de trois facteurs : pertinence des annonces, des mots-clés et qualité de la landing page. Il faut optimiser ces trois éléments."
  },
  {
    question: "Le cross-selling consiste à :",
    options: [
      "Vendre dans plusieurs pays",
      "Proposer des produits complémentaires",
      "Vendre à la concurrence",
      "Croiser les bases de données"
    ],
    correctAnswer: 1,
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
  }
];

/**
 * Définition des quiz disponibles - version finale
 */
export const availableQuizzes: Quiz[] = [
  {
    id: 'data-marketing-foundations',
    title: 'Fondements du Data Marketing',
    description: 'Testez votre maîtrise des concepts fondamentaux : KPIs, métriques, parcours client et sources de données. Questions progressives du débutant à l\'intermédiaire.',
    questions: dataMarketingQuizQuestions,
    difficulty: 'Progressif',
    duration: '12-15 minutes',
    category: 'Fondamentaux',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'analytics-tools',
    title: 'Outils d\'Analyse et Plateformes',
    description: 'Évaluez vos connaissances sur Google Analytics, Search Console, et les outils du data marketer. Focus sur l\'application pratique et l\'interprétation.',
    questions: analyticsToolsQuizQuestions,
    difficulty: 'Intermédiaire',
    duration: '15-20 minutes',
    category: 'Outils',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'practical-strategy',
    title: 'Application et Stratégie',
    description: 'Quiz pratique sur les calculs, l\'optimisation et la prise de décision en data marketing. Situations business réelles et résolution de problèmes.',
    questions: practicalQuizQuestions,
    difficulty: 'Débutant à Intermédiaire',
    duration: '10-12 minutes', 
    category: 'Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];