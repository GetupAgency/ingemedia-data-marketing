import { QuizQuestion } from '../types/quiz';

/**
 * Quiz d'examen final - 40 questions
 * Questions professionnelles couvrant l'ensemble du programme
 * Distracteurs crédibles, positions variées, longueurs variées
 */
export const examQuestions: QuizQuestion[] = [
  // SECTION 1 : Fondamentaux du Data Marketing (Questions 1-8)
  {
    question: "Une entreprise e-commerce enregistre 50 000 visiteurs mensuels et réalise 1 000 ventes. Son panier moyen est de 100€. Quel est son chiffre d'affaires mensuel et son taux de conversion ?",
    options: [
      "100 000€ de CA avec un taux de conversion de 2%",
      "100 000€ de CA avec un taux de conversion de 5%",
      "50 000€ de CA avec un taux de conversion de 2%",
      "200 000€ de CA avec un taux de conversion de 1%"
    ],
    correctAnswer: 0,
    explanation: "CA = 1 000 ventes × 100€ = 100 000€. Taux de conversion = (1 000 / 50 000) × 100 = 2%"
  },
  {
    question: "Quelle affirmation décrit le mieux la différence entre données first-party et third-party dans le contexte post-RGPD ?",
    options: [
      "Les données first-party sont plus fiables mais limitées en volume, tandis que les third-party offrent plus de portée",
      "Les données third-party sont collectées directement par l'entreprise via son site web et ses applications",
      "Les données first-party sont collectées directement auprès des utilisateurs avec leur consentement explicite, offrant conformité RGPD et meilleure qualité",
      "Les deux types de données ont la même valeur légale et marketing"
    ],
    correctAnswer: 2,
    explanation: "Les données first-party sont collectées directement par l'entreprise avec consentement, garantissant conformité RGPD et qualité supérieure."
  },
  {
    question: "Un data marketer observe que le taux de rebond mobile est de 68% contre 42% sur desktop. Quelle devrait être sa première hypothèse d'analyse ?",
    options: [
      "Le trafic mobile est de moins bonne qualité et il faut réduire les investissements publicitaires mobiles",
      "L'expérience utilisateur mobile présente probablement des frictions (vitesse, UX, compatibilité) à investiguer en priorité",
      "C'est normal, le taux de rebond mobile est toujours plus élevé, il n'y a pas d'action nécessaire",
      "Il faut augmenter le budget Google Ads pour compenser"
    ],
    correctAnswer: 1,
    explanation: "Un écart de 26 points entre mobile et desktop indique clairement un problème d'expérience utilisateur mobile à résoudre en priorité."
  },
  {
    question: "Dans la chaîne de valeur des données, quel niveau représente 'Notre ROAS Facebook de 4:1 est inférieur à l'objectif de 5:1, nous devrions tester des audiences lookalike basées sur nos meilleurs clients' ?",
    options: [
      "Niveau 2 : Métriques calculées",
      "Niveau 3 : Comparaisons et contexte",
      "Niveau 5 : Recommandations actionnables",
      "Niveau 4 : Insights business"
    ],
    correctAnswer: 2,
    explanation: "C'est une recommandation actionnable concrète basée sur un insight, représentant le niveau le plus élevé de la chaîne de valeur."
  },
  {
    question: "Pourquoi l'attribution 'dernier clic' peut-elle sous-estimer significativement la contribution des campagnes display et vidéo ?",
    options: [
      "Parce que les campagnes display ne génèrent jamais de conversions directes",
      "Le display et la vidéo jouent souvent un rôle d'awareness en début de parcours, mais ne reçoivent aucun crédit dans un modèle dernier clic",
      "Les clics display coûtent moins cher donc sont moins valorisés",
      "L'attribution dernier clic ne fonctionne que pour le search"
    ],
    correctAnswer: 1,
    explanation: "Le display/vidéo initie souvent le parcours client mais le search finalise la conversion, recevant tout le crédit en dernier clic."
  },
  {
    question: "Une entreprise SaaS B2B a un CPA de 180€, une LTV de 2 400€ sur 24 mois, et un taux de churn mensuel de 3%. Comment évaluer la santé de ce modèle ?",
    options: [
      "Ratio LTV/CAC de 13,3 excellent, mais churn de 3%/mois critique (36% annuel) nécessitant action urgente sur rétention",
      "Le CPA est trop élevé pour du B2B, il faut le réduire avant tout",
      "La LTV est suffisante, le churn de 3% est acceptable pour du SaaS",
      "Il faut augmenter les prix pour améliorer la LTV"
    ],
    correctAnswer: 0,
    explanation: "LTV/CAC = 2400/180 = 13,3 (excellent >3), mais 3% churn mensuel = 31% annuel (critique >20%), priorité à la rétention."
  },
  {
    question: "Quelle métrique est la plus pertinente pour évaluer la performance d'une campagne de notoriété brand sur YouTube ?",
    options: [
      "Le taux de conversion direct",
      "Le coût par clic (CPC)",
      "Le CPM (coût pour 1000 impressions) et le taux de complétion vidéo à 75%",
      "Le ROAS immédiat"
    ],
    correctAnswer: 2,
    explanation: "Pour la notoriété, le CPM mesure l'efficacité de la couverture et le taux de complétion élevé indique l'engagement qualité."
  },
  {
    question: "Qu'est-ce qui différencie fondamentalement une approche data-driven d'une approche traditionnelle en marketing ?",
    options: [
      "L'utilisation d'outils digitaux",
      "La prise de décision basée sur des preuves mesurables plutôt que sur l'intuition, avec une optimisation continue guidée par les données",
      "Le fait de dépenser plus en publicité digitale",
      "L'utilisation de Google Analytics"
    ],
    correctAnswer: 1,
    explanation: "Le data-driven se caractérise par des décisions objectives basées sur des données probantes et une optimisation itérative."
  },

  // SECTION 2 : Calculs et KPIs (Questions 9-16)
  {
    question: "Une campagne Google Ads génère 10 000€ de CA avec un budget de 2 000€. Le taux de marge est de 40%. Quelle est la rentabilité nette après coûts d'acquisition ?",
    options: [
      "Marge brute 4 000€ - Coût pub 2 000€ = 2 000€ de profit net, campagne rentable",
      "10 000€ - 2 000€ = 8 000€ de profit",
      "ROAS de 5:1 donc très rentable automatiquement",
      "Pas assez d'informations pour calculer"
    ],
    correctAnswer: 0,
    explanation: "Marge brute = 10 000€ × 40% = 4 000€. Profit net = 4 000€ - 2 000€ (pub) = 2 000€. Rentabilité confirmée."
  },
  {
    question: "Sur 100 000 impressions, une annonce génère 3 000 clics dont 90 conversions. Le budget est de 6 000€. Calculez le CTR, CPC et taux de conversion.",
    options: [
      "CTR 3%, CPC 2€, Conversion 3%",
      "CTR 30%, CPC 0,20€, Conversion 3%",
      "CTR 3%, CPC 2€, Conversion 30%",
      "CTR 3%, CPC 20€, Conversion 0,3%"
    ],
    correctAnswer: 0,
    explanation: "CTR = 3 000/100 000 = 3%. CPC = 6 000€/3 000 = 2€. Conversion = 90/3 000 = 3%."
  },
  {
    question: "Un site e-commerce veut atteindre 100 000€ de CA mensuel. Son taux de conversion actuel est de 2% et son panier moyen de 100€. Combien de visiteurs mensuels doit-il générer ?",
    options: [
      "50 000 visiteurs mensuels (100 000€ / 100€ = 1 000 ventes ÷ 2% = 50 000)",
      "100 000 visiteurs mensuels",
      "20 000 visiteurs mensuels",
      "10 000 visiteurs mensuels suffisent"
    ],
    correctAnswer: 0,
    explanation: "Ventes nécessaires = 100 000€ / 100€ = 1 000. Visiteurs = 1 000 / 0,02 = 50 000."
  },
  {
    question: "Une campagne email a un taux d'ouverture de 25%, un taux de clic (sur ouverts) de 10%, et un taux de conversion (sur clics) de 20%. Sur 40 000 emails envoyés, combien de conversions ?",
    options: [
      "200 conversions (40 000 × 25% = 10 000 ouverts × 10% = 1 000 clics × 20% = 200)",
      "1 000 conversions",
      "10 000 conversions",
      "400 conversions"
    ],
    correctAnswer: 0,
    explanation: "Ouverts = 40 000 × 0,25 = 10 000. Clics = 10 000 × 0,10 = 1 000. Conversions = 1 000 × 0,20 = 200."
  },
  {
    question: "Deux canaux : SEO (0€ de coût direct, 18 000€ de CA) vs Google Ads (4 500€ de coût, 22 000€ de CA). Comment prioriser les investissements supplémentaires ?",
    options: [
      "Investir uniquement dans le SEO car il est gratuit",
      "Google Ads génère plus de CA donc prioritaire",
      "Analyser la marge par canal, le potentiel de scaling et les coûts d'opportunité avant de décider. SEO n'est pas gratuit (temps, contenu) et peut être saturé",
      "Réduire Google Ads car son ROAS est inférieur"
    ],
    correctAnswer: 2,
    explanation: "Le SEO a des coûts cachés (temps, contenu) et peut être saturé. L'analyse doit inclure marge, scalabilité et coûts réels."
  },
  {
    question: "Le Quality Score Google Ads d'une campagne baisse de 7/10 à 4/10. Quel impact immédiat sur les performances ?",
    options: [
      "Aucun impact direct sur les performances",
      "Augmentation du CPC d'environ 40-60% et baisse des positions d'affichage, nécessitant optimisation urgente des landing pages et annonces",
      "Juste une baisse de 30% des impressions",
      "Le budget est automatiquement réduit par Google"
    ],
    correctAnswer: 1,
    explanation: "Un QS de 4/10 vs 7/10 augmente significativement le CPC (+40-60%) et dégrade les positions, impactant lourdement les performances."
  },
  {
    question: "Dans un tunnel de conversion e-commerce : 10 000 visiteurs → 2 500 pages produit → 875 ajouts panier → 392 tunnels commencés → 280 achats. Où est le principal point de friction ?",
    options: [
      "Entre ajout panier et tunnel commencé (65% d'abandon), indiquant problème de frais de port/surprise ou complexité du checkout",
      "Au niveau des pages produit (75% de perte)",
      "Le taux de conversion final de 2,8% est normal",
      "L'ensemble du tunnel est optimal"
    ],
    correctAnswer: 0,
    explanation: "875 paniers → 392 tunnels = 55% seulement passent au checkout. C'est le point de friction majeur à optimiser."
  },
  {
    question: "Un client a une LTV de 600€ sur 18 mois, un CPA actuel de 100€, et un taux de rétention à 12 mois de 65%. Quelle stratégie d'optimisation prioriser ?",
    options: [
      "Augmenter le CPA jusqu'à 200€ pour acquérir plus de clients car le ratio LTV/CAC est excellent (6:1)",
      "Réduire le CPA à tout prix",
      "Se concentrer uniquement sur le taux de rétention",
      "Maintenir le statu quo"
    ],
    correctAnswer: 0,
    explanation: "LTV/CAC = 600/100 = 6:1 (excellent). On peut augmenter le CPA jusqu'à ~200€ (LTV/CAC = 3) pour scaler l'acquisition."
  },

  // SECTION 3 : Google Analytics et Outils (Questions 17-24)
  {
    question: "GA4 utilise un modèle basé sur les événements plutôt que sur les sessions. Quelle est la principale implication pour l'analyse du comportement utilisateur ?",
    options: [
      "Il faut désormais tracker chaque interaction significative comme un événement distinct et construire ses propres métriques d'engagement pertinentes",
      "Les sessions ne sont plus du tout trackées dans GA4",
      "C'est juste un changement de terminologie sans impact réel",
      "Les conversions ne sont plus mesurables"
    ],
    correctAnswer: 0,
    explanation: "GA4 nécessite une approche événementielle explicite, obligeant à définir et tracker chaque interaction importante pour l'analyse."
  },
  {
    question: "Dans Google Search Console, votre site apparaît en position moyenne 3,2 pour un mot-clé avec 45 000 impressions mensuelles mais seulement 1 800 clics. Que conclure ?",
    options: [
      "CTR de 4% inférieur à l'attendu en position 3 (~12-15%). Problème de title/description ou featured snippets qui captent les clics",
      "C'est un excellent CTR pour cette position",
      "Il faut augmenter le budget Google Ads",
      "La position moyenne est trop basse"
    ],
    correctAnswer: 0,
    explanation: "Position 3 devrait générer 12-15% de CTR. 4% indique un problème d'attractivité du snippet ou concurrence des features."
  },
  {
    question: "Quelle configuration GA4 est absolument critique pour un site e-commerce avant de lancer toute campagne payante ?",
    options: [
      "Activer le tracking des scroll",
      "Configurer correctement les événements e-commerce (view_item, add_to_cart, purchase) avec valeurs de conversion pour alimenter le Smart Bidding",
      "Connecter Google Search Console",
      "Créer 50 audiences personnalisées"
    ],
    correctAnswer: 1,
    explanation: "Les événements e-commerce avec valeurs sont essentiels pour mesurer le ROI et permettre au Smart Bidding d'optimiser efficacement."
  },
  {
    question: "Un pixel de tracking Facebook enregistre 150 achats alors que GA4 n'en compte que 132 pour la même période. Comment interpréter cet écart ?",
    options: [
      "Erreur de configuration à corriger immédiatement",
      "Normal : méthodologies d'attribution différentes (1 jour vs 7 jours), bloqueurs de pubs, fenêtres de conversion variables. L'important est la cohérence dans le temps",
      "GA4 est moins fiable que Facebook",
      "Il faut désactiver GA4"
    ],
    correctAnswer: 1,
    explanation: "Les écarts entre plateformes sont normaux (attribution, bloqueurs). L'essentiel est la cohérence des tendances, pas la valeur absolue."
  },
  {
    question: "Dans une analyse de cohorte, vous observez que la rétention à 6 mois de la cohorte d'octobre est de 42% vs 28% pour septembre. Quelle action analytique prioriser ?",
    options: [
      "Identifier les différences entre ces cohortes : canal d'acquisition, profil, première expérience, offre promotionnelle pour reproduire le succès",
      "Continuer à observer sans action",
      "Augmenter le budget du mois le plus performant",
      "C'est juste de la variance aléatoire"
    ],
    correctAnswer: 0,
    explanation: "Un écart de 14 points de rétention est significatif. Il faut analyser les différences pour reproduire ce qui a fonctionné en octobre."
  },
  {
    question: "Comment utiliser efficacement la fonction 'Exploration' de GA4 pour identifier les segments d'utilisateurs à fort potentiel ?",
    options: [
      "Créer une exploration par segment analysant l'engagement, la valeur moyenne des commandes, et le taux de conversion par source/support pour identifier les combinaisons les plus performantes",
      "Regarder uniquement le trafic global",
      "Se concentrer sur les données démographiques basiques",
      "Exporter toutes les données vers Excel"
    ],
    correctAnswer: 0,
    explanation: "Les explorations par segment permettent d'identifier précisément les combinaisons source/comportement/valeur les plus rentables."
  },
  {
    question: "Votre taux d'engagement GA4 est de 48%. Est-ce bon ou mauvais, et que révèle cette métrique ?",
    options: [
      "48% est moyen. Cela signifie que près de la moitié des sessions durent >10s, ont 2+ pages vues, ou génèrent une conversion. Analyser les 52% restants pour comprendre pourquoi ils rebondent",
      "C'est excellent, rien à optimiser",
      "C'est catastrophique, il faut tout refaire",
      "Cette métrique ne sert à rien"
    ],
    correctAnswer: 0,
    explanation: "48% d'engagement signifie que 52% des sessions sont très courtes ou sans interaction. Il faut analyser ces sessions non-engagées."
  },
  {
    question: "Pour un blog B2B visant la génération de leads, quels événements GA4 personnalisés sont les plus stratégiques à tracker ?",
    options: [
      "Uniquement les pages vues",
      "Téléchargement de ressources, lecture >60% des articles, clics sur CTA 'Demander une démo', temps passé >3min, pour scorer les leads qualifiés",
      "Tous les clics sans distinction",
      "Scroll à 25%, 50%, 75%"
    ],
    correctAnswer: 1,
    explanation: "Ces événements permettent de scorer l'intention et qualifier les leads selon leur engagement avec le contenu de valeur."
  },

  // SECTION 4 : Diagnostic et Optimisation (Questions 25-32)
  {
    question: "Le ROAS d'une campagne Facebook passe de 5,2 à 2,8 en 3 semaines sans changement de budget. Quelle méthode diagnostique appliquer en priorité ?",
    options: [
      "Augmenter immédiatement le budget",
      "Méthode des 5 Pourquoi : analyser étape par étape les variations de CTR, CPC, taux de conversion, panier moyen pour identifier la cause racine avant toute action",
      "Changer complètement la créative",
      "Arrêter la campagne"
    ],
    correctAnswer: 1,
    explanation: "La méthode des 5 Pourquoi permet de remonter à la cause racine en décomposant le ROAS en ses composantes (CTR, CPC, conversion, AOV)."
  },
  {
    question: "Dans un contexte de diagnostic marketing, qu'est-ce qu'un 'insight actionnable' par opposition à une simple observation ?",
    options: [
      "Une statistique présentée dans un graphique coloré",
      "Une interprétation des données qui révèle un problème ou opportunité ET propose une solution concrète testable avec un impact business mesurable",
      "N'importe quelle donnée extraite de GA4",
      "Un KPI qui baisse"
    ],
    correctAnswer: 1,
    explanation: "Un insight actionnable lie observation, explication causale, recommandation concrète et impact business prévisible."
  },
  {
    question: "Vous observez que le taux de conversion desktop est stable à 3,2% mais le mobile baisse de 2,8% à 1,9% en un mois. Quelle analyse mener ?",
    options: [
      "Vérifier les changements techniques mobiles récents (MAJ site, vitesse, CSS), analyser les heatmaps mobiles, tester le parcours sur différents devices et navigateurs",
      "C'est une tendance normale du marché",
      "Augmenter le budget pub mobile pour compenser",
      "Ignorer le mobile et se concentrer sur desktop"
    ],
    correctAnswer: 0,
    explanation: "Une baisse de 32% du taux de conversion mobile en un mois indique un problème technique ou UX à investiguer en priorité."
  },
  {
    question: "Comment interpréter un CPC qui augmente de 35% sur Google Ads alors que le Quality Score reste stable à 7/10 ?",
    options: [
      "C'est forcément une erreur de Google Ads",
      "Intensification de la concurrence sur les mots-clés ciblés (plus d'annonceurs ou enchères plus agressives). Analyser l'Auction Insights et envisager des mots-clés alternatifs",
      "Le Quality Score est mal calculé",
      "Il faut augmenter le budget pour compenser"
    ],
    correctAnswer: 1,
    explanation: "QS stable + CPC en hausse = concurrence accrue. L'Auction Insights révélera les nouveaux concurrents et leur agressivité."
  },
  {
    question: "Dans une matrice Impact/Effort, comment prioriser : A) Refonte complète site (Impact très élevé, Effort très élevé) vs B) Optimisation formulaire contact (Impact élevé, Effort faible) ?",
    options: [
      "Toujours commencer par A car impact plus élevé",
      "Commencer par B (Quick Win) pour des résultats rapides et financer/justifier A ensuite. Approche pragmatique et moins risquée",
      "Faire les deux en même temps",
      "Ne rien faire et attendre"
    ],
    correctAnswer: 1,
    explanation: "Les Quick Wins (B) génèrent des résultats rapides qui justifient et financent les projets majeurs (A). Approche itérative moins risquée."
  },
  {
    question: "Un e-commerce a 70% d'abandon de panier. Quelle séquence d'analyse adopter pour diagnostiquer et prioriser les corrections ?",
    options: [
      "Analyser le tunnel par étape (frais de port affichage, options de paiement, champs formulaire), identifier le taux d'abandon par étape, créer des tests A/B sur les points de friction majeurs",
      "Envoyer plus d'emails de relance de panier",
      "Baisser les prix généralement",
      "C'est un taux normal, ne rien faire"
    ],
    correctAnswer: 0,
    explanation: "70% d'abandon nécessite une analyse granulaire par étape pour identifier les frictions spécifiques et les tester méthodiquement."
  },
  {
    question: "Le taux de rebond sur vos landing pages Google Ads est de 78%. Quelle hypothèse tester en premier selon les principes UX ?",
    options: [
      "Augmenter le budget publicitaire",
      "Vérifier l'adéquation Message Ad / Message Landing Page et la vitesse de chargement (<3s). 78% suggère une promesse non tenue ou friction technique",
      "Changer complètement la landing page sans test",
      "Arrêter Google Ads"
    ],
    correctAnswer: 1,
    explanation: "78% de rebond indique soit une inadéquation message ad/page, soit un problème technique. Ce sont les deux premières hypothèses à tester."
  },
  {
    question: "Comment interpréter cette donnée : 'Le panier moyen des clients acquis via Instagram est de 142€ vs 89€ pour Facebook, mais le CPA Instagram est 2,8x plus élevé' ?",
    options: [
      "Instagram n'est pas rentable, arrêter",
      "Calculer le ROAS et la marge nette par canal. Instagram peut être plus rentable malgré un CPA élevé si la LTV et la qualité client compensent",
      "Se concentrer uniquement sur Facebook",
      "Les deux canaux sont équivalents"
    ],
    correctAnswer: 1,
    explanation: "Un panier moyen 60% supérieur peut compenser un CPA 2,8x plus élevé. Il faut calculer la rentabilité nette réelle par canal."
  },

  // SECTION 5 : Stratégie et Automatisation (Questions 33-40)
  {
    question: "Quels sont les prérequis techniques et data minimum pour déployer efficacement le Smart Bidding Target CPA sur Google Ads ?",
    options: [
      "5 conversions minimum",
      "Au moins 30 conversions mensuelles dans la campagne, tracking des conversions fiable, historique de 2-3 semaines minimum, objectifs CPA réalistes basés sur l'historique",
      "Aucun prérequis, l'IA fonctionne toujours",
      "100 000€ de budget minimum"
    ],
    correctAnswer: 1,
    explanation: "Le Smart Bidding nécessite un volume minimum de conversions (30/mois) et un historique pour apprendre efficacement."
  },
  {
    question: "Une stratégie d'automatisation marketing efficace doit équilibrer quatre aspects. Lesquels ?",
    options: [
      "Budget, temps, équipe, outils",
      "Règles automatiques pour la réactivité, machine learning pour la prédiction, contrôle humain pour la stratégie, et monitoring continu pour la validation",
      "Facebook, Google, LinkedIn, Twitter",
      "SEO, SEA, Display, Email"
    ],
    correctAnswer: 1,
    explanation: "L'automatisation efficace combine règles simples, ML avancé, supervision stratégique humaine et validation continue des performances."
  },
  {
    question: "Comment créer une audience lookalike performante sur Facebook pour un e-commerce avec 50 000 clients ?",
    options: [
      "Utiliser tous les 50 000 clients comme source",
      "Sélectionner le top 5-10% des clients par LTV (2 500-5 000 profils) et tester des lookalikes 1%, 2%, 3% pour trouver le sweet spot volume/qualité",
      "Utiliser les visiteurs du site web",
      "Créer une audience de 10% d'emblée"
    ],
    correctAnswer: 1,
    explanation: "Une audience source de haute qualité (top LTV) permet aux algorithmes de trouver des profils similaires vraiment rentables."
  },
  {
    question: "Dans une stratégie d'attribution data-driven, pourquoi le modèle 'dernier clic' est-il particulièrement problématique pour les parcours B2B complexes ?",
    options: [
      "Parce qu'il est ancien",
      "Il ignore complètement les 8-12 touchpoints moyens du parcours B2B (content, webinar, comparateurs, démo) en attribuant 100% au dernier, sous-investissant dans l'awareness et la considération",
      "Il ne fonctionne que pour le B2C",
      "Il coûte trop cher à implémenter"
    ],
    correctAnswer: 1,
    explanation: "Le B2B a des parcours longs (8-12 points de contact sur plusieurs semaines). Le dernier clic ignore tout ce qui a construit la décision."
  },
  {
    question: "Quelle approche permet de mesurer l'impact incrémental réel d'une campagne publicitaire ?",
    options: [
      "Regarder uniquement le ROAS",
      "Mettre en place un test A/B géolocalisé ou une analyse de séries temporelles avant/après avec groupe de contrôle, pour isoler l'effet réel de la campagne vs la demande organique",
      "Comparer au mois précédent",
      "Demander aux clients comment ils nous ont connus"
    ],
    correctAnswer: 1,
    explanation: "Seul un test contrôlé (géo, temporel) permet d'isoler l'effet incrémental réel de la pub vs la demande naturelle du marché."
  },
  {
    question: "Un site SaaS B2B observe que les leads générés via son contenu éducatif (blog, guides) ont un taux de conversion 3x supérieur aux leads cold ads, mais un cycle de vente 40% plus long. Quelle stratégie budgétaire adopter ?",
    options: [
      "Investir massivement dans les cold ads car ils convertissent plus vite",
      "Maintenir un mix équilibré : 60-70% sur contenu éducatif (meilleure qualité/LTV malgré cycle plus long) et 30-40% sur cold ads (volume et vitesse) pour optimiser CAC et LTV globaux",
      "Se concentrer uniquement sur le contenu éducatif",
      "Arrêter le contenu éducatif qui est trop lent"
    ],
    correctAnswer: 1,
    explanation: "Une stratégie équilibrée capture la haute qualité du contenu éducatif tout en maintenant un flux de leads plus rapides via cold ads."
  },
  {
    question: "Comment structurer un dashboard marketing pour une PME e-commerce afin qu'il soit réellement actionnable au quotidien ?",
    options: [
      "Inclure toutes les métriques disponibles dans GA4",
      "Organiser en 3 niveaux : KPIs business critiques (ROAS, CA, marge) en haut, métriques d'efficacité par canal au milieu, alertes automatiques sur écarts >15% en bas",
      "Créer 50 graphiques différents",
      "Se concentrer uniquement sur le nombre de visiteurs"
    ],
    correctAnswer: 1,
    explanation: "Un dashboard efficace priorise les KPIs business critiques, permet de diagnostiquer rapidement, et alerte automatiquement sur les anomalies."
  },
  {
    question: "Dans un contexte de prédiction du churn client, quels signaux comportementaux sont les plus prédictifs à tracker pour un SaaS ?",
    options: [
      "L'âge du compte uniquement",
      "Fréquence de connexion en baisse >50%, diminution des features utilisées, non-utilisation de la nouvelle fonctionnalité clé, absence de réponse aux emails d'onboarding",
      "Le chiffre d'affaires généré",
      "Le nombre d'emails envoyés"
    ],
    correctAnswer: 1,
    explanation: "Les signaux comportementaux de désengagement (connexions↓, features↓, non-adoption) prédisent le churn avant qu'il ne se produise."
  }
];

/**
 * Configuration du quiz d'examen
 */
export const examQuizConfig = {
  id: 'exam-final-marketing-2025',
  title: 'Examen Final - Data Marketing 2025',
  description: 'Évaluation finale de vos compétences en data marketing. 40 questions couvrant l\'ensemble du programme.',
  totalQuestions: 40,
  duration: '45 minutes',
  passingScore: 28, // 70% (pour information uniquement)
  category: 'Examen',
  difficulty: 'Tous niveaux',
  secretUrl: '/exam-2025-ingemedia'
};

