import { QuizQuestion } from '../types/quiz';

/**
 * Quiz d'examen final - 40 questions
 * Distribution équilibrée : 10 A, 10 B, 10 C, 10 D
 * Longueurs des options équilibrées pour éviter les biais détectables
 * Thématiques : Fondamentaux, Calculs/KPIs/LTV, GA4/Graphiques, Diagnostic, Stratégie/Ciblage
 */
export const examQuestions: QuizQuestion[] = [
  // ═══════════════════════════════════════════════════════════════
  // SECTION 1 : Fondamentaux du Data Marketing (Questions 1-8)
  // Répartition : A=Q2,Q5 | B=Q4,Q8 | C=Q1,Q7 | D=Q3,Q6
  // ═══════════════════════════════════════════════════════════════

  // Q1 — correctAnswer: C
  {
    question: "Une entreprise e-commerce enregistre 50 000 visiteurs mensuels et réalise 1 000 ventes. Son panier moyen est de 100€. Quel est son chiffre d'affaires mensuel et son taux de conversion ?",
    options: [
      "50 000€ de CA avec un taux de conversion de 2%",
      "100 000€ de CA avec un taux de conversion de 5%",
      "100 000€ de CA avec un taux de conversion de 2%",
      "200 000€ de CA avec un taux de conversion de 1%"
    ],
    correctAnswer: 2,
    explanation: "CA = 1 000 ventes × 100€ = 100 000€. Taux de conversion = (1 000 / 50 000) × 100 = 2%."
  },

  // Q2 — correctAnswer: A
  {
    question: "Quelle affirmation décrit le mieux les données first-party dans le contexte post-RGPD ?",
    options: [
      "Collectées avec consentement explicite, elles offrent conformité RGPD et qualité supérieure",
      "Collectées par les régies publicitaires via des cookies tiers inter-sites",
      "Elles ont la même valeur marketing que les données third-party achetées",
      "Elles sont uniquement disponibles via les outils CRM internes de l'entreprise"
    ],
    correctAnswer: 0,
    explanation: "Les données first-party sont collectées directement par l'entreprise avec consentement, garantissant conformité et qualité."
  },

  // Q3 — correctAnswer: D
  {
    question: "Le taux de rebond mobile est de 68% contre 42% sur desktop. Quelle est la première hypothèse à formuler ?",
    options: [
      "Le trafic mobile est de moins bonne qualité, il faut réduire les budgets sur ce device",
      "C'est une tendance normale du marché, le mobile rebondit toujours davantage",
      "Il faut augmenter les enchères Google Ads pour compenser cette différence sur mobile",
      "L'expérience mobile présente des frictions (vitesse, ergonomie) à investiguer"
    ],
    correctAnswer: 3,
    explanation: "Un écart de 26 points entre mobile et desktop indique un problème d'expérience utilisateur mobile à résoudre en priorité."
  },

  // Q4 — correctAnswer: B
  {
    question: "'Notre ROAS Facebook est inférieur à l'objectif, testons des audiences lookalike sur nos meilleurs clients.' À quel niveau de la chaîne de valeur des données correspond cette phrase ?",
    options: [
      "Niveau 2 : Métriques calculées à partir de données brutes",
      "Niveau 5 : Recommandations actionnables",
      "Niveau 3 : Comparaisons et mise en contexte",
      "Niveau 4 : Insights business identifiés"
    ],
    correctAnswer: 1,
    explanation: "C'est une recommandation actionnable concrète basée sur un insight, le plus haut niveau de la chaîne de valeur."
  },

  // Q5 — correctAnswer: A
  {
    question: "Qu'est-ce que la LTV (Lifetime Value) d'un client et pourquoi est-elle centrale en data marketing ?",
    options: [
      "Le revenu total généré sur toute la durée de la relation, pour calibrer le coût d'acquisition",
      "Le montant du premier achat effectué par un client, servant à estimer le budget",
      "Le nombre total de visites d'un client sur le site web de la marque",
      "Le coût total pour acquérir et fidéliser un client sur une année civile"
    ],
    correctAnswer: 0,
    explanation: "La LTV mesure la valeur totale d'un client dans le temps. Elle permet de fixer le budget d'acquisition maximum (CAC < LTV)."
  },

  // Q6 — correctAnswer: D
  {
    question: "Pourquoi l'attribution 'dernier clic' sous-estime-t-elle la contribution du display et de la vidéo ?",
    options: [
      "Parce que le display ne génère jamais aucun clic mesurable par les outils analytics",
      "Les clics display sont moins chers et donc automatiquement sous-valorisés par le modèle",
      "L'attribution dernier clic ne fonctionne techniquement qu'avec les campagnes search",
      "Ces canaux jouent un rôle d'awareness en amont sans recevoir de crédit au final"
    ],
    correctAnswer: 3,
    explanation: "Le display/vidéo initie souvent le parcours client mais le search finalise la conversion, récupérant tout le crédit."
  },

  // Q7 — correctAnswer: C
  {
    question: "Qu'est-ce qui différencie fondamentalement une approche data-driven du marketing traditionnel ?",
    options: [
      "L'utilisation exclusive d'outils Google pour piloter les campagnes marketing",
      "Un investissement publicitaire digital supérieur au budget offline classique",
      "Des décisions basées sur des preuves mesurables et une optimisation continue",
      "L'automatisation intégrale de l'ensemble des actions marketing sans humain"
    ],
    correctAnswer: 2,
    explanation: "Le data-driven se caractérise par des décisions objectives basées sur les données et une optimisation itérative."
  },

  // Q8 — correctAnswer: B
  {
    question: "Quels sont les principaux critères de ciblage publicitaire utilisés par les marques pour segmenter leurs audiences ?",
    options: [
      "Uniquement l'âge et le sexe des utilisateurs ciblés par la campagne",
      "Géolocalisation, données démographiques, centres d'intérêt et habitudes d'achat",
      "Exclusivement les cookies tiers collectés lors de la navigation sur internet",
      "Le type d'appareil utilisé et la vitesse de connexion internet du prospect"
    ],
    correctAnswer: 1,
    explanation: "Les plateformes combinent critères géographiques, démographiques, comportementaux et d'intérêts pour un ciblage précis et performant."
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 2 : Calculs, KPIs et LTV (Questions 9-16)
  // Répartition : A=Q10,Q13 | B=Q11,Q15 | C=Q12,Q16 | D=Q9,Q14
  // ═══════════════════════════════════════════════════════════════

  // Q9 — correctAnswer: D
  {
    question: "Une campagne Google Ads génère 10 000€ de CA avec un budget de 2 000€. Le taux de marge est de 40%. Quelle est la rentabilité nette après coûts pub ?",
    options: [
      "10 000€ - 2 000€ = 8 000€ de profit net, la campagne est excellente",
      "ROAS de 5:1 donc la campagne est automatiquement très rentable",
      "On ne peut pas calculer sans connaître le nombre exact de conversions",
      "Marge brute 4 000€ - Coût pub 2 000€ = 2 000€ de profit net"
    ],
    correctAnswer: 3,
    explanation: "Marge brute = 10 000€ × 40% = 4 000€. Profit net = 4 000€ - 2 000€ (pub) = 2 000€."
  },

  // Q10 — correctAnswer: A
  {
    question: "100 000 impressions, 3 000 clics, 90 conversions, budget de 6 000€. Quels sont le CTR, le CPC et le taux de conversion ?",
    options: [
      "CTR 3%, CPC 2€, taux de conversion 3%",
      "CTR 30%, CPC 0,20€, taux de conversion 3%",
      "CTR 3%, CPC 2€, taux de conversion 30%",
      "CTR 0,3%, CPC 20€, taux de conversion 3%"
    ],
    correctAnswer: 0,
    explanation: "CTR = 3 000/100 000 = 3%. CPC = 6 000€/3 000 = 2€. Conversion = 90/3 000 = 3%."
  },

  // Q11 — correctAnswer: B
  {
    question: "Objectif : 100 000€ de CA mensuel. Taux de conversion : 2%, panier moyen : 100€. Combien de visiteurs mensuels faut-il générer ?",
    options: [
      "100 000 visiteurs, soit un visiteur par euro de CA visé",
      "50 000 visiteurs (1 000 ventes nécessaires ÷ 2% de conversion)",
      "20 000 visiteurs avec un taux de conversion de 2% et panier de 100€",
      "10 000 visiteurs suffisent avec ce niveau de panier moyen"
    ],
    correctAnswer: 1,
    explanation: "Ventes nécessaires = 100 000€ / 100€ = 1 000. Visiteurs = 1 000 / 0,02 = 50 000."
  },

  // Q12 — correctAnswer: C
  {
    question: "Campagne email : taux d'ouverture 25%, taux de clic (sur ouverts) 10%, taux de conversion (sur clics) 20%. Sur 40 000 emails envoyés, combien de conversions ?",
    options: [
      "1 000 conversions car 40 000 × 25% × 10% = 1 000 acheteurs",
      "400 conversions car 40 000 × 1% de taux de conversion global",
      "200 conversions : 10 000 ouverts → 1 000 clics → 200 achats",
      "2 000 conversions car 40 000 × 5% de taux de réponse"
    ],
    correctAnswer: 2,
    explanation: "Ouverts = 40 000 × 25% = 10 000. Clics = 10 000 × 10% = 1 000. Conversions = 1 000 × 20% = 200."
  },

  // Q13 — correctAnswer: A
  {
    question: "Un SaaS B2B facture 80€/mois, rétention moyenne de 18 mois, taux d'expansion (upsell) de 15%. Quelle est la LTV estimée ?",
    options: [
      "80€ × 18 mois × 1,15 = 1 656€",
      "80€ × 18 mois = 1 440€ sans compter l'expansion",
      "80€ × 12 mois = 960€ car on ne retient qu'un an",
      "80€ × 18 mois ÷ 1,15 = 1 252€ après déduction"
    ],
    correctAnswer: 0,
    explanation: "LTV = ARPU × Durée moyenne × (1 + taux d'expansion) = 80€ × 18 × 1,15 = 1 656€."
  },

  // Q14 — correctAnswer: D
  {
    question: "Le Quality Score Google Ads passe de 7/10 à 4/10 sur vos mots-clés principaux. Quel est l'impact concret ?",
    options: [
      "Aucun impact direct, le Quality Score est un indicateur purement cosmétique",
      "Juste une baisse de 30% du nombre d'impressions affichées",
      "Le budget de la campagne est réduit automatiquement par la plateforme Google",
      "Hausse du CPC de 40 à 60% et dégradation des positions d'affichage"
    ],
    correctAnswer: 3,
    explanation: "Un QS de 4 vs 7 augmente significativement le CPC (+40-60%) et dégrade les positions publicitaires."
  },

  // Q15 — correctAnswer: B
  {
    question: "Tunnel e-commerce : 10 000 visiteurs → 2 500 fiches produit → 875 paniers → 392 checkouts → 280 achats. Où est le point de friction principal ?",
    options: [
      "Entre l'accueil et les fiches produit avec 75% de visiteurs perdus",
      "Entre le panier et le checkout : 55% seulement poursuivent le paiement",
      "Le taux final de 2,8% est dans les normes, pas de friction majeure",
      "Entre le checkout et l'achat car 71% finalisent, ce qui est acceptable"
    ],
    correctAnswer: 1,
    explanation: "875 paniers → 392 checkouts = 45% d'abandon à cette étape. C'est le point de friction majeur (frais cachés, complexité)."
  },

  // Q16 — correctAnswer: C
  {
    question: "Un client a une LTV de 600€ et un CPA actuel de 100€. Le ratio LTV/CAC est de 6:1. Quelle stratégie d'acquisition adopter ?",
    options: [
      "Réduire le CPA coûte que coûte car l'acquisition est trop chère actuellement",
      "Maintenir le statu quo, les indicateurs sont dans la norme du marché",
      "Scaler en acceptant un CPA jusqu'à ~200€, le ratio resterait sain à 3:1",
      "Stopper l'acquisition et se concentrer exclusivement sur la fidélisation"
    ],
    correctAnswer: 2,
    explanation: "LTV/CAC = 600/100 = 6:1 (excellent). On peut augmenter le CPA à ~200€ (ratio 3:1) pour scaler l'acquisition."
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 3 : GA4, Outils et Lecture de Graphiques (Questions 17-24)
  // Répartition : A=Q20,Q22 | B=Q18,Q24 | C=Q19,Q21 | D=Q17,Q23
  // ═══════════════════════════════════════════════════════════════

  // Q17 — correctAnswer: D
  {
    question: "GA4 utilise un modèle basé sur les événements plutôt que sur les sessions. Quelle est l'implication principale pour l'analyste ?",
    options: [
      "Les sessions ne sont plus du tout mesurées ni disponibles dans GA4",
      "C'est juste un changement de terminologie sans impact réel sur l'analyse",
      "Les conversions ne sont plus mesurables avec ce nouveau modèle événementiel",
      "Chaque interaction est un événement distinct, offrant une analyse granulaire"
    ],
    correctAnswer: 3,
    explanation: "GA4 nécessite de tracker chaque interaction comme un événement, offrant une flexibilité d'analyse supérieure."
  },

  // Q18 — correctAnswer: B
  {
    question: "Search Console : position moyenne 3,2 pour un mot-clé avec 45 000 impressions mais seulement 1 800 clics. Que conclure ?",
    options: [
      "C'est un excellent CTR pour cette position, rien à optimiser",
      "CTR de 4% au lieu de 12-15% attendus : title/meta description à revoir",
      "Il faut investir en Google Ads pour compléter le SEO sur ce mot-clé",
      "La position 3,2 est insuffisante pour générer du trafic significatif"
    ],
    correctAnswer: 1,
    explanation: "Position 3 devrait générer 12-15% de CTR. À 4%, le snippet (title/description) manque d'attractivité ou des featured snippets captent les clics."
  },

  // Q19 — correctAnswer: C  [Graphique ROAS par jour — page d'accueil]
  {
    question: "Sur le graphique 'ROAS par jour' vu en cours (Lun: 4.2, Mar: 4.8, Mer: 5.1, Jeu: 4.9, Ven: 4.6, Sam: 2.8, Dim: 2.3), quelle analyse est la plus juste ?",
    options: [
      "Le ROAS moyen dépasse 4, toutes les journées sont rentables sans exception",
      "Le mardi est le jour optimal car il suit le début de semaine avec élan",
      "Le weekend chute de 45-55% vs la semaine : comportement loisir, pas achat",
      "Le dimanche est faible uniquement à cause d'un volume d'impressions réduit"
    ],
    correctAnswer: 2,
    explanation: "Le ROAS dimanche (2.3) vs mercredi (5.1) = chute de 55%. Le comportement weekend (loisir > achat) explique cette baisse systématique."
  },

  // Q20 — correctAnswer: A  [Graphique CPC par canal — page d'accueil]
  {
    question: "D'après le graphique 'CPC par canal' vu en cours (Google: 0.85€, Meta: 1.24€, LinkedIn: 3.45€, TikTok: 0.62€, Twitter: 2.18€), quelle conclusion stratégique est la plus pertinente ?",
    options: [
      "LinkedIn coûte 5,6× plus que TikTok : justifiable uniquement si la LTV B2B compense",
      "TikTok est automatiquement le meilleur canal car son CPC est le plus bas",
      "Google Ads est le plus rentable grâce à son CPC intermédiaire de 0.85€",
      "Les écarts de CPC entre canaux sont négligeables pour la stratégie globale"
    ],
    correctAnswer: 0,
    explanation: "LinkedIn à 3.45€ vs TikTok à 0.62€ = facteur 5,6. Ce surcoût n'est rentable que si la valeur client B2B justifie ce CPC élevé."
  },

  // Q21 — correctAnswer: C  [Graphique trafic 30 jours — page d'accueil]
  {
    question: "Le graphique 'Évolution du trafic sur 30 jours' montre une chute de ~5 100 à ~3 100 visiteurs entre J15 et J21. Quelle interprétation est la plus rigoureuse ?",
    options: [
      "C'est un problème SEO, le site a perdu des positions organiques sur Google",
      "Fluctuation normale, le trafic varie toujours dans cette amplitude",
      "Chute de ~40% en 6 jours : hypothèse d'arrêt de campagnes ou incident technique",
      "Le trafic est resté globalement stable, c'est juste la saisonnalité"
    ],
    correctAnswer: 2,
    explanation: "Une chute de 40% en 6 jours est anormale. Première hypothèse : pause de campagnes payantes ou problème technique à investiguer."
  },

  // Q22 — correctAnswer: A  [Graphique conversion par device — page d'accueil]
  {
    question: "Le graphique 'Conversion par appareil' montre Desktop 3.8%, Mobile 2.1%, Tablette 4.2%. Pourquoi la tablette convertit-elle le mieux ?",
    options: [
      "Elle combine le confort d'écran du desktop et la mobilité, favorisant l'achat",
      "C'est une anomalie statistique due au faible volume de trafic tablette",
      "La tablette est le device le plus utilisé par les acheteurs en ligne",
      "Les utilisateurs tablette sont exclusivement des professionnels à fort pouvoir d'achat"
    ],
    correctAnswer: 0,
    explanation: "La tablette combine le confort de navigation desktop et la praticité mobile, créant une expérience d'achat optimale."
  },

  // Q23 — correctAnswer: D
  {
    question: "Le pixel Facebook enregistre 150 achats contre 132 dans GA4 sur la même période. Comment interpréter cet écart ?",
    options: [
      "Erreur de configuration critique nécessitant un audit technique immédiat",
      "GA4 est structurellement moins fiable que le pixel Facebook pour le tracking",
      "Il faut désactiver l'un des deux outils pour éviter toute contradiction",
      "Normal : fenêtres d'attribution et bloqueurs diffèrent, la tendance prime"
    ],
    correctAnswer: 3,
    explanation: "Les écarts entre plateformes sont normaux (attribution, bloqueurs). L'essentiel est la cohérence dans le temps, pas la valeur absolue."
  },

  // Q24 — correctAnswer: B
  {
    question: "Pour un blog B2B visant la génération de leads, quels événements GA4 personnalisés sont les plus stratégiques à tracker ?",
    options: [
      "Uniquement le nombre total de pages vues par session utilisateur",
      "Téléchargements, lecture >60%, clics CTA démo et temps >3min",
      "Tous les clics sans aucune distinction ni pondération relative",
      "Scroll à 25%, 50%, 75% et 100% de la page pour chaque article"
    ],
    correctAnswer: 1,
    explanation: "Ces événements qualifient l'intention et permettent de scorer les leads selon leur engagement avec le contenu à forte valeur."
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 4 : Diagnostic et Optimisation (Questions 25-32)
  // Répartition : A=Q26,Q29 | B=Q27,Q31 | C=Q25,Q30 | D=Q28,Q32
  // ═══════════════════════════════════════════════════════════════

  // Q25 — correctAnswer: C
  {
    question: "Le ROAS Facebook passe de 5,2 à 2,8 en 3 semaines sans changement de budget. Quelle méthode diagnostique appliquer en priorité ?",
    options: [
      "Augmenter immédiatement le budget pour compenser la baisse de rentabilité",
      "Changer complètement les visuels publicitaires de toutes les campagnes",
      "Méthode des 5 Pourquoi : décomposer CTR, CPC, conversion et panier",
      "Arrêter Facebook et basculer l'intégralité du budget sur Google Ads"
    ],
    correctAnswer: 2,
    explanation: "La méthode des 5 Pourquoi permet de remonter à la cause racine en décomposant le ROAS en ses composantes (CTR, CPC, conversion, AOV)."
  },

  // Q26 — correctAnswer: A
  {
    question: "Qu'est-ce qui distingue un 'insight actionnable' d'une simple observation de données ?",
    options: [
      "Il combine interprétation, cause identifiée, solution concrète et impact mesurable",
      "C'est une statistique mise en forme dans un graphique coloré et bien présenté",
      "C'est n'importe quelle métrique extraite d'un outil d'analytics comme GA4",
      "C'est un indicateur de performance qui montre une tendance à la baisse"
    ],
    correctAnswer: 0,
    explanation: "Un insight actionnable lie observation, explication causale, recommandation concrète et impact business prévisible."
  },

  // Q27 — correctAnswer: B
  {
    question: "Conversion desktop stable à 3,2% mais mobile en chute de 2,8% à 1,9% en un mois. Quelle analyse mener ?",
    options: [
      "C'est une tendance normale, le mobile convertit structurellement moins bien",
      "Vérifier les changements techniques récents, heatmaps et parcours multi-devices",
      "Augmenter les budgets pub mobile pour compenser par le volume de trafic",
      "Ignorer le mobile et se concentrer sur le desktop qui reste performant"
    ],
    correctAnswer: 1,
    explanation: "Baisse de 32% en un mois sur mobile seul indique un problème technique ou UX spécifique à investiguer."
  },

  // Q28 — correctAnswer: D
  {
    question: "Le CPC Google Ads augmente de 35% alors que le Quality Score reste stable à 7/10. Quelle est l'explication la plus probable ?",
    options: [
      "C'est forcément une erreur de facturation dans l'interface Google Ads",
      "Le Quality Score affiché est probablement mal calculé par le système",
      "Il faut simplement augmenter le budget total pour absorber la hausse",
      "Concurrence accrue sur les mots-clés : analyser Auction Insights et diversifier"
    ],
    correctAnswer: 3,
    explanation: "QS stable + CPC en hausse = concurrence accrue. L'Auction Insights révélera les nouveaux concurrents et leur agressivité."
  },

  // Q29 — correctAnswer: A
  {
    question: "Matrice Impact/Effort — A) Refonte du site (impact très élevé, effort très élevé) vs B) Optimisation du formulaire (impact élevé, effort faible). Comment prioriser ?",
    options: [
      "B d'abord (Quick Win), puis les résultats rapides justifient et financent A",
      "Toujours A car son impact maximum potentiel est supérieur à celui de B",
      "Faire A et B simultanément avec deux équipes pour gagner du temps",
      "Attendre davantage de données avant de se décider entre les deux options"
    ],
    correctAnswer: 0,
    explanation: "Les Quick Wins (B) génèrent des résultats rapides qui justifient et financent les projets majeurs (A). Approche itérative et moins risquée."
  },

  // Q30 — correctAnswer: C
  {
    question: "Un e-commerce a 70% d'abandon de panier. Quelle approche diagnostique adopter en priorité ?",
    options: [
      "Envoyer massivement des emails de relance de panier automatisés",
      "Baisser les prix de l'ensemble du catalogue pour réduire les hésitations",
      "Analyser le tunnel étape par étape, identifier les abandons et tester en A/B",
      "C'est un taux d'abandon normal en e-commerce, aucune action requise"
    ],
    correctAnswer: 2,
    explanation: "70% d'abandon nécessite une analyse granulaire par étape pour identifier les frictions spécifiques et les tester méthodiquement."
  },

  // Q31 — correctAnswer: B
  {
    question: "Le taux de rebond de vos landing pages Google Ads est de 78%. Quelle hypothèse tester en premier ?",
    options: [
      "Augmenter les enchères pour obtenir de meilleures positions publicitaires",
      "Vérifier l'adéquation message annonce / landing page et le temps de chargement",
      "Changer complètement la landing page sans passer par une phase de test",
      "Arrêter Google Ads et basculer l'intégralité du budget vers le SEO naturel"
    ],
    correctAnswer: 1,
    explanation: "78% de rebond indique soit une inadéquation message ad/page, soit un problème de vitesse. Ce sont les hypothèses prioritaires."
  },

  // Q32 — correctAnswer: D
  {
    question: "Panier moyen Instagram 142€ vs Facebook 89€, mais le CPA Instagram est 2,8× plus élevé. Quelle décision prendre ?",
    options: [
      "Instagram n'est pas rentable à ce CPA, couper le budget immédiatement",
      "Se concentrer exclusivement sur Facebook qui a le meilleur CPA du mix",
      "Les deux canaux ont au final la même rentabilité globale nette",
      "Calculer le ROAS net par canal car le panier élevé peut compenser le CPA"
    ],
    correctAnswer: 3,
    explanation: "Un panier 60% supérieur peut compenser un CPA 2,8× plus élevé. Seule l'analyse du ROAS net par canal permet de trancher."
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION 5 : Stratégie, Ciblage et Automatisation (Questions 33-40)
  // Répartition : A=Q34,Q37 | B=Q36,Q40 | C=Q33,Q38 | D=Q35,Q39
  // ═══════════════════════════════════════════════════════════════

  // Q33 — correctAnswer: C
  {
    question: "Quels prérequis techniques sont nécessaires pour déployer le Smart Bidding Target CPA sur Google Ads ?",
    options: [
      "5 conversions par mois suffisent pour activer l'algorithme de machine learning",
      "Aucun prérequis spécifique, l'IA Google fonctionne dès l'activation de la campagne",
      "Minimum 30 conversions/mois, tracking fiable et historique de 2-3 semaines",
      "Un budget minimum de 100 000€ est exigé par Google pour cette stratégie"
    ],
    correctAnswer: 2,
    explanation: "Le Smart Bidding nécessite un volume minimum (30 conv/mois) et un historique fiable pour apprendre efficacement."
  },

  // Q34 — correctAnswer: A
  {
    question: "Une marque de mobilier haut de gamme veut cibler sur Meta Ads. Quelle combinaison de critères est la plus efficace ?",
    options: [
      "Géo-ciblage zones urbaines CSP+, âge 30-55 ans, intérêts déco et immobilier récent",
      "Ciblage large France entière sans restriction d'âge ni de centres d'intérêt",
      "Uniquement retargeting des visiteurs du site web des 30 derniers jours",
      "Ciblage par type d'appareil : seulement les utilisateurs d'iPhone récents"
    ],
    correctAnswer: 0,
    explanation: "Combiner géo (zones CSP+), démographie (30-55, pouvoir d'achat), et intérêts (déco, immo) maximise la pertinence du ciblage."
  },

  // Q35 — correctAnswer: D
  {
    question: "Comment créer une audience lookalike performante sur Meta pour un e-commerce avec 50 000 clients ?",
    options: [
      "Utiliser l'intégralité des 50 000 clients comme audience source sans tri",
      "Utiliser les visiteurs du site web des 7 derniers jours uniquement",
      "Créer directement une audience lookalike à 10% pour maximiser le volume",
      "Sélectionner le top 5-10% par LTV et tester des lookalikes 1%, 2%, 3%"
    ],
    correctAnswer: 3,
    explanation: "Une audience source de haute qualité (top LTV) permet de trouver des profils similaires réellement rentables. Tester 1-3% optimise volume/qualité."
  },

  // Q36 — correctAnswer: B
  {
    question: "Pourquoi le modèle 'dernier clic' est-il particulièrement inadapté aux parcours d'achat B2B ?",
    options: [
      "Parce que c'est un modèle d'attribution trop ancien et considéré obsolète",
      "Il ignore les 8-12 touchpoints du parcours B2B en attribuant tout au dernier",
      "Il ne fonctionne techniquement que pour les sites e-commerce B2C classiques",
      "Il coûte trop cher à implémenter dans les outils d'analytics B2B"
    ],
    correctAnswer: 1,
    explanation: "Le B2B a des parcours longs (8-12 touchpoints). Le dernier clic ignore le travail d'awareness et de considération en amont."
  },

  // Q37 — correctAnswer: A
  {
    question: "Une enseigne de restauration rapide lance une campagne locale sur Meta Ads. Quels critères de ciblage comportemental exploiter ?",
    options: [
      "Habitudes alimentaires, géo-ciblage 5km, tranches horaires repas, connexion locale",
      "Ciblage national avec un large budget pour maximiser la couverture de marque",
      "Uniquement les personnes ayant déjà visité un concurrent identifié récemment",
      "Ciblage par revenus déclarés et niveau d'éducation supérieure uniquement"
    ],
    correctAnswer: 0,
    explanation: "Le local combine proximité (5km), comportements alimentaires et moments de consommation (tranches horaires) pour un ciblage pertinent."
  },

  // Q38 — correctAnswer: C
  {
    question: "Comment mesurer l'impact incrémental réel d'une campagne publicitaire au-delà du ROAS reporté ?",
    options: [
      "Se fier uniquement au ROAS affiché par la plateforme publicitaire utilisée",
      "Comparer les ventes au mois précédent sans mettre en place de groupe de contrôle",
      "Test géolocalisé ou série temporelle avec groupe de contrôle pour isoler l'effet",
      "Demander aux clients via un sondage comment ils ont découvert la marque"
    ],
    correctAnswer: 2,
    explanation: "Seul un test contrôlé (géo ou temporel) permet d'isoler l'effet incrémental réel de la pub vs la demande organique."
  },

  // Q39 — correctAnswer: D
  {
    question: "Quels signaux comportementaux prédisent le mieux le churn client pour un produit SaaS ?",
    options: [
      "L'ancienneté du compte client est le seul facteur déterminant du churn",
      "Le chiffre d'affaires total généré par le client depuis son inscription",
      "Le nombre d'emails marketing envoyés au client chaque mois par l'équipe",
      "Baisse de connexions, features inutilisées et non-adoption des nouveautés"
    ],
    correctAnswer: 3,
    explanation: "Les signaux de désengagement (connexions↓, features↓, non-adoption) prédisent le churn avant qu'il ne se produise."
  },

  // Q40 — correctAnswer: B
  {
    question: "Comment structurer un dashboard marketing actionnable au quotidien pour une PME e-commerce ?",
    options: [
      "Afficher toutes les métriques GA4 disponibles sur un seul et même écran",
      "3 niveaux : KPIs business en haut, efficacité par canal au milieu, alertes >15% en bas",
      "Créer 50 graphiques couvrant chaque micro-métrique existante dans les outils",
      "Se concentrer exclusivement sur le nombre de visiteurs quotidiens du site"
    ],
    correctAnswer: 1,
    explanation: "Un dashboard efficace priorise les KPIs critiques, permet le diagnostic par canal, et alerte automatiquement sur les anomalies."
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
