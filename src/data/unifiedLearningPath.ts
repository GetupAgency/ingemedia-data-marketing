export interface Exercise {
  id: string
  title: string
  description: string
  type: 'theory' | 'practice' | 'analysis' | 'calculation' | 'case-study'
  difficulty: 'débutant' | 'intermédiaire' | 'avancé'
  duration: string
  content: string
  practicalExercise?: {
    title: string
    description: string
    instructions: string
    expectedOutput: string
    hints?: string[]
    resources?: {
      title: string
      url?: string
      description: string
      type: 'tool' | 'data' | 'link' | 'calculator' | 'file'
    }[]
  }
  teacherCorrection?: string
  quiz?: {
    id: string
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export interface LearningModule {
  id: string
  title: string
  description: string
  level: 'débutant' | 'intermédiaire' | 'avancé'
  prerequisites?: string[]
  learningObjectives: string[]
  exercises: Exercise[]
  finalAssessment?: {
    title: string
    description: string
    questions: {
      id: string
      question: string
      options: string[]
      correctAnswer: number
      explanation: string
    }[]
  }
}

export const unifiedLearningPath: LearningModule[] = [
  {
    id: 'fondements-data-marketing',
    title: '1. Fondements du Data Marketing',
    description: 'Comprendre les bases du marketing basé sur les données et son importance stratégique',
    level: 'débutant',
    learningObjectives: [
      'Définir le data marketing et ses enjeux',
      'Identifier les 3 piliers fondamentaux',
      'Comprendre la chaîne de valeur des données',
      'Distinguer les différents types de données marketing'
    ],
    exercises: [
      {
        id: 'definition-data-marketing',
        title: 'Qu\'est-ce que le Data Marketing ?',
        description: 'Introduction aux concepts fondamentaux',
        type: 'theory',
        difficulty: 'débutant',
        duration: '20 min',
        content: `<div class="section-content">
  <h1 class="section-title">Le Data Marketing : Une révolution nécessaire</h1>

  <p class="section-text">Le data marketing représente l'évolution naturelle du marketing vers une approche scientifique et mesurable. Dans un monde où chaque interaction digitale génère des données, les entreprises qui ne les exploitent pas prennent un retard concurrentiel majeur.</p>

  <h2 class="section-subtitle">Définition simple</h2>
  
  <div class="value-type">
    <p class="section-text"><strong>Le data marketing est l'art de transformer des données brutes en décisions business actionnables pour optimiser les performances commerciales.</strong></p>
  </div>

  <h2 class="section-subtitle mt-8">Les 3 piliers fondamentaux</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Collecte intelligente des données</h3>
    <div class="project-detail">
      <strong>Principe :</strong> Capturer les bonnes données au bon moment
    </div>
    <div class="project-detail">
      <strong>Sources principales :</strong>
      <ul class="feature-list">
        <li><strong>Comportementales :</strong> Google Analytics, heatmaps, parcours utilisateur</li>
        <li><strong>Transactionnelles :</strong> CRM, e-commerce, facturation</li>
        <li><strong>Publicitaires :</strong> Google Ads, Meta Ads, LinkedIn Ads</li>
        <li><strong>Externes :</strong> Réseaux sociaux, avis clients, études de marché</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Analyse et interprétation</h3>
    <div class="project-detail">
      <strong>Principe :</strong> Transformer les chiffres en insights business
    </div>
    <div class="project-detail">
      <strong>Compétences clés :</strong>
      <ul class="feature-list">
        <li><strong>Calcul des KPIs :</strong> CTR, ROAS, LTV, CAC</li>
        <li><strong>Analyse comparative :</strong> Benchmarks, évolutions temporelles</li>
        <li><strong>Segmentation :</strong> Audiences, comportements, valeur</li>
        <li><strong>Corrélations :</strong> Identifier les leviers d'optimisation</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Optimisation et action</h3>
    <div class="project-detail">
      <strong>Principe :</strong> Maximiser le ROI grâce aux données
    </div>
    <div class="project-detail">
      <strong>Applications concrètes :</strong>
      <ul class="feature-list">
        <li><strong>Réallocation budgétaire :</strong> Investir sur les canaux performants</li>
        <li><strong>Personnalisation :</strong> Messages adaptés par segment</li>
        <li><strong>Optimisation UX :</strong> Réduire les frictions identifiées</li>
        <li><strong>Prédiction :</strong> Anticiper les comportements futurs</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Pourquoi c'est devenu incontournable ?</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Évolution du marché</h4>
      <ul class="deliverable-list">
        <li>Digitalisation accélérée</li>
        <li>Concurrence intensifiée</li>
        <li>Consommateurs exigeants</li>
        <li>Budgets marketing scrutés</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Avantages concurrentiels</h4>
      <ul class="deliverable-list">
        <li>Précision du ciblage</li>
        <li>Réduction du gaspillage</li>
        <li>Personnalisation à l'échelle</li>
        <li>Réactivité aux tendances</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Exigences business</h4>
      <ul class="deliverable-list">
        <li>ROI mesurable</li>
        <li>Justification des investissements</li>
        <li>Optimisation continue</li>
        <li>Prise de décision rapide</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Exemple concret :</strong> Amazon utilise 150+ points de données par client pour personnaliser l'expérience et générer 35% de son chiffre d'affaires via ses recommandations.
  </div>
</div>`,
        practicalExercise: {
          title: 'Battle des marques : qui maîtrise le mieux ses données ?',
          description: 'Comparez deux marques concurrentes et jugez leur maturité data marketing',
          instructions: `<div class="cas-pratique-content">
  <p><strong>Le principe :</strong> Vous allez jouer au <strong>juge du data marketing</strong>. Deux marques s'affrontent. Vous analysez leur stratégie data et vous désignez le gagnant.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Choisissez votre duel :</h4>
  <ul class="list-disc list-inside space-y-2 ml-4 text-gray-800">
    <li><strong>Duel 1 :</strong> Netflix vs Disney+ — Qui personnalise le mieux l'expérience ?</li>
    <li><strong>Duel 2 :</strong> Uber Eats vs Deliveroo — Qui exploite le mieux les données de commande ?</li>
    <li><strong>Duel 3 :</strong> Nike vs Adidas — Qui crée la meilleure relation client digitale ?</li>
    <li><strong>Duel 4 :</strong> Vinted vs Leboncoin — Qui domine le marketing basé sur la donnée ?</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission (en binôme si possible) :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Enquêtez</strong> (10 min) : Installez les deux apps / visitez les deux sites. Inscrivez-vous si vous n'avez pas de compte. Observez :
      <ul class="list-disc list-inside ml-6 mt-1 space-y-1 text-gray-600">
        <li>Quelles données vous demande-t-on à l'inscription ?</li>
        <li>Recevez-vous un email de bienvenue personnalisé ?</li>
        <li>Les recommandations sont-elles pertinentes ?</li>
        <li>Combien de notifications push en 24h ?</li>
      </ul>
    </li>
    <li><strong>Notez chaque marque</strong> sur les 3 piliers (collecte /10, analyse /10, optimisation /10). Justifiez chaque note avec un exemple concret observé.</li>
    <li><strong>Identifiez la faille</strong> : pour chaque marque, trouvez UNE chose qu'ils pourraient faire mieux avec leurs données.</li>
    <li><strong>Désignez le gagnant</strong> du duel et préparez un argument de 30 secondes pour convaincre la classe.</li>
  </ol>

  <div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <strong>Bonus :</strong> Allez dans les paramètres de confidentialité des deux apps. Comptez le nombre de trackers/permissions demandées. Qui collecte le plus ? Est-ce que plus de données = meilleure expérience ?
  </div>
</div>`,
          expectedOutput: 'Fiche comparative des 2 marques avec notes /10 sur les 3 piliers, exemples concrets, faille identifiée, et verdict argumenté',
          hints: [
            'Testez vraiment les apps/sites : inscrivez-vous, naviguez, ajoutez au panier, observez ce qui se passe ensuite',
            'Les emails et notifications que vous recevez APRÈS votre visite sont la preuve que vos données sont utilisées',
            'Regardez les paramètres de confidentialité : c\'est là que les marques révèlent leurs pratiques data'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Évaluation de la maturité data (sur 10)</h2>

  <div class="project-type">
    <h3 class="project-type-title">Pilier 1 : Collecte des données - Note : 2/10</h3>
    <div class="project-detail">
      <strong>Points positifs :</strong>
      <ul class="feature-list">
        <li>Google Analytics installé (base technique présente)</li>
        <li>CRM avec 2000 contacts (début de base client)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Points négatifs :</strong>
      <ul class="feature-list">
        <li>Aucun tracking des conversions (perte de données critiques)</li>
        <li>Pas de segmentation CRM (données non exploitables)</li>
        <li>Absence de mesure satisfaction (pas de feedback qualité)</li>
        <li>Données publicitaires non connectées</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Pilier 2 : Analyse et interprétation - Note : 1/10</h3>
    <div class="project-detail">
      <strong>Points positifs :</strong>
      <ul class="feature-list">
        <li>Conscience du problème (demande d'audit)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Points négatifs :</strong>
      <ul class="feature-list">
        <li>Google Analytics jamais consulté (données ignorées)</li>
        <li>Aucun KPI suivi (pas de mesure de performance)</li>
        <li>Pas d'analyse comparative (pas de benchmark)</li>
        <li>Décisions basées sur l'intuition uniquement</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Pilier 3 : Optimisation et action - Note : 1/10</h3>
    <div class="project-detail">
      <strong>Points positifs :</strong>
      <ul class="feature-list">
        <li>Budget publicitaire existant (5k€/mois)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Points négatifs :</strong>
      <ul class="feature-list">
        <li>Gestion "au feeling" (pas d'optimisation data-driven)</li>
        <li>Répartition budgétaire arbitraire (70/30 sans justification)</li>
        <li>Aucune personnalisation (approche one-size-fits-all)</li>
        <li>Pas d'optimisation basée sur les performances</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Score global : 4/30 (13%) - Niveau "Débutant critique"</strong>
    <br>
    L'entreprise dispose des outils de base mais ne les exploite pas. Énorme potentiel d'amélioration.
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Les 3 problèmes prioritaires</h2>

  <div class="value-type">
    <h3 class="value-title">Problème 1 : Cécité totale sur les performances (Impact : Critique)</h3>
    <ul class="correction-list">
      <li><strong>Symptôme :</strong> Impossible de mesurer le ROI des 5k€ investis mensuellement</li>
      <li><strong>Conséquence :</strong> Gaspillage budgétaire potentiel de 60k€/an</li>
      <li><strong>Urgence :</strong> Immédiate - Chaque jour sans tracking = perte de données</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Problème 2 : Absence de stratégie d'acquisition (Impact : Élevé)</h3>
    <ul class="correction-list">
      <li><strong>Symptôme :</strong> Répartition 70/30 sans justification analytique</li>
      <li><strong>Conséquence :</strong> Canaux performants sous-exploités, inefficaces sur-investis</li>
      <li><strong>Urgence :</strong> Élevée - Optimisation rapide possible</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Problème 3 : Données clients inexploitées (Impact : Moyen-terme)</h3>
    <ul class="correction-list">
      <li><strong>Symptôme :</strong> 2000 contacts non segmentés dans le CRM</li>
      <li><strong>Conséquence :</strong> Opportunités de rétention et upsell manquées</li>
      <li><strong>Urgence :</strong> Modérée - Base existante à valoriser</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Plan d'action 90 jours</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Mois 1 : Fondations (Jours 1-30)</h4>
      <ul class="deliverable-list">
        <li><strong>Semaine 1 :</strong> Configuration tracking conversions (GA4 + pixels)</li>
        <li><strong>Semaine 2 :</strong> Connexion GA4 ↔ Google Ads ↔ Facebook</li>
        <li><strong>Semaine 3 :</strong> Premiers dashboards et KPIs essentiels</li>
        <li><strong>Semaine 4 :</strong> Formation équipe + processus de suivi</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Mois 2 : Optimisation (Jours 31-60)</h4>
      <ul class="deliverable-list">
        <li><strong>Semaine 5-6 :</strong> Analyse des données collectées</li>
        <li><strong>Semaine 7 :</strong> Première réallocation budgétaire</li>
        <li><strong>Semaine 8 :</strong> Segmentation CRM et audiences remarketing</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Mois 3 : Scaling (Jours 61-90)</h4>
      <ul class="deliverable-list">
        <li><strong>Semaine 9-10 :</strong> Campagnes personnalisées par segment</li>
        <li><strong>Semaine 11 :</strong> Automatisation et alertes</li>
        <li><strong>Semaine 12 :</strong> Bilan et stratégie long terme</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Estimation des gains potentiels</h2>

  <div class="project-type">
    <h3 class="project-type-title">Gains financiers directs (6 mois)</h3>
    <div class="project-detail">
      <strong>Optimisation publicitaire :</strong>
      <ul class="feature-list">
        <li>ROAS actuel estimé : 2:1 (non optimisé)</li>
        <li>ROAS cible avec data : 4:1 (+100%)</li>
        <li>Gain mensuel : 5k€ budget → 10k€ CA supplémentaire</li>
        <li><strong>Impact annuel : +60k€ de CA</strong></li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Gains indirects</h3>
    <div class="project-detail">
      <strong>Rétention et upsell :</strong>
      <ul class="feature-list">
        <li>Segmentation CRM : +15% de taux d'ouverture email</li>
        <li>Remarketing : +25% de conversions sur trafic existant</li>
        <li>Personnalisation : +20% de panier moyen</li>
        <li><strong>Impact estimé : +30k€ CA/an</strong></li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>ROI du projet data :</strong>
    <br>
    • Investissement : 10k€ (consultant + outils + formation)
    <br>
    • Gains annuels : 90k€ CA supplémentaire
    <br>
    • ROI : 900% la première année
    <br>
    • Temps de retour : 1,3 mois
  </div>

  <div class="value-type">
    <h3 class="value-title">Bénéfices qualitatifs</h3>
    <ul class="correction-list">
      <li><strong>Prise de décision :</strong> Basée sur des faits, plus rapide</li>
      <li><strong>Compétitivité :</strong> Avantage face aux concurrents "au feeling"</li>
      <li><strong>Scalabilité :</strong> Croissance maîtrisée et optimisée</li>
      <li><strong>Équipe :</strong> Montée en compétences et motivation</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-fond-1',
            question: 'Quels sont les 3 piliers fondamentaux du data marketing ?',
            options: [
              'Collecte, Stockage, Archivage',
              'Collecte, Analyse, Optimisation',
              'Mesure, Reporting, Présentation',
              'Analytics, Publicité, CRM'
            ],
            correctAnswer: 1,
            explanation: 'Les 3 piliers sont : 1) Collecte intelligente des données, 2) Analyse et interprétation, 3) Optimisation et action. C\'est un cycle complet de la donnée à l\'action business.'
          },
          {
            id: 'q-fond-2',
            question: 'Pourquoi le data marketing est-il devenu incontournable ?',
            options: [
              'C\'est une mode passagère',
              'Les budgets marketing sont scrutés au ROI et la concurrence l\'utilise',
              'C\'est obligatoire légalement',
              'C\'est plus simple que le marketing traditionnel'
            ],
            correctAnswer: 1,
            explanation: 'Le data marketing est incontournable car les entreprises doivent justifier leurs investissements avec des ROI précis, et celles qui l\'utilisent obtiennent un avantage concurrentiel décisif.'
          }
        ]
      },
      {
        id: 'chaine-valeur-donnees',
        title: 'La chaîne de valeur des données',
        description: 'Comprendre comment les données créent de la valeur business',
        type: 'theory',
        difficulty: 'débutant',
        duration: '15 min',
        content: `<div class="section-content">
  <h1 class="section-title">De la donnée brute à la valeur business</h1>

  <p class="section-text">Toutes les données ne se valent pas. Comprendre la chaîne de transformation de la donnée brute en valeur business est essentiel pour prioriser ses efforts et maximiser le ROI de ses actions data marketing.</p>

  <h2 class="section-subtitle">Les 5 niveaux de valeur des données</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau 1 : Données brutes</h4>
      <ul class="deliverable-list">
        <li>Clics, impressions, sessions</li>
        <li>Valeur : Très faible</li>
        <li>Exemple : "1000 clics hier"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau 2 : Métriques calculées</h4>
      <ul class="deliverable-list">
        <li>CTR, CPC, taux de conversion</li>
        <li>Valeur : Faible</li>
        <li>Exemple : "CTR de 2%"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau 3 : Comparaisons</h4>
      <ul class="deliverable-list">
        <li>Évolutions, benchmarks</li>
        <li>Valeur : Moyenne</li>
        <li>Exemple : "CTR en baisse de 20%"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau 4 : Insights</h4>
      <ul class="deliverable-list">
        <li>Causes, corrélations</li>
        <li>Valeur : Élevée</li>
        <li>Exemple : "Baisse due au mobile"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau 5 : Actions</h4>
      <ul class="deliverable-list">
        <li>Recommandations chiffrées</li>
        <li>Valeur : Très élevée</li>
        <li>Exemple : "Optimiser mobile = +30% CTR"</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Règle d'or :</strong> Votre valeur en tant que data marketer augmente exponentiellement quand vous passez du niveau 3 (comparaisons) aux niveaux 4-5 (insights et actions).
  </div>
</div>`,
        practicalExercise: {
          title: 'Enquête data : du chiffre brut à la recommandation',
          description: 'Remontez les 5 niveaux de la chaîne de valeur à partir de données brutes',
          instructions: `<div class="cas-pratique-content">
  <p><strong>Le principe :</strong> Vous recevez un dump de données brutes. Votre mission : les transformer étape par étape en remontant les 5 niveaux, jusqu'à formuler UNE recommandation qui vaut de l'or.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Les données brutes (Niveau 1) :</h4>
  <p class="text-gray-700 mb-2">Voici les chiffres du mois dernier pour un site e-commerce de sneakers :</p>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Sessions totales : 45 000</li>
    <li>Sessions mobile : 31 500 | Sessions desktop : 13 500</li>
    <li>Commandes mobile : 189 | Commandes desktop : 270</li>
    <li>Panier moyen mobile : 85€ | Panier moyen desktop : 127€</li>
    <li>Budget Google Ads : 8 000€ | Clics Google Ads : 12 000</li>
    <li>Budget Instagram Ads : 4 000€ | Clics Instagram Ads : 9 500</li>
    <li>Trafic organique : 23 500 sessions | Commandes organique : 198</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission — gravissez les 5 niveaux :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Niveau 2 — Calculez</strong> : Taux de conversion mobile vs desktop, CPC Google vs Instagram, CA total par canal. Organisez dans un tableau.</li>
    <li><strong>Niveau 3 — Comparez</strong> : Quel canal convertit le mieux ? Le mobile fait quel % du trafic vs quel % des ventes ? Un canal est-il sur-représenté en trafic mais sous-représenté en ventes ?</li>
    <li><strong>Niveau 4 — Trouvez l'insight</strong> : Pourquoi le mobile a-t-il un taux de conversion si différent du desktop ? Quel canal a le meilleur ROI caché ? Qu'est-ce que les chiffres disent VRAIMENT ?</li>
    <li><strong>Niveau 5 — Recommandez</strong> : Formulez UNE recommandation chiffrée. "Si on fait [action], on peut gagner [montant]€ parce que [raison data]."</li>
  </ol>

  <div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <strong>Le piège :</strong> Le canal qui génère le plus de clics n'est pas forcément le plus rentable. Cherchez le ROI, pas le volume.
  </div>
</div>`,
          expectedOutput: 'Tableau de métriques calculées, analyse comparative des canaux, insight sur le gap mobile/desktop, et une recommandation chiffrée avec estimation de gain',
          hints: [
            'Taux de conversion = Commandes / Sessions × 100',
            'Le mobile fait 70% du trafic mais combien de % des ventes ? C\'est là que se cache l\'insight.',
            'Le trafic organique n\'a pas de coût pub : calculez son "CPA virtuel" pour comparer équitablement'
          ]
        },
        quiz: [
          {
            id: 'q-chaine-1',
            question: 'Quel niveau de la chaîne de valeur représente "Le CTR Facebook est 2x plus élevé que Google" ?',
            options: [
              'Niveau 2 : Métriques calculées',
              'Niveau 3 : Comparaisons',
              'Niveau 4 : Insights',
              'Niveau 5 : Actions'
            ],
            correctAnswer: 1,
            explanation: 'Cette affirmation compare deux métriques calculées (CTR Facebook vs Google), ce qui correspond au niveau 3 : Comparaisons.'
          }
        ]
      }
    ]
  },
  {
    id: 'kpis-essentiels',
    title: '2. KPIs et Métriques Essentielles',
    description: 'Maîtriser les indicateurs clés du marketing digital et savoir les calculer',
    level: 'débutant',
    prerequisites: ['fondements-data-marketing'],
    learningObjectives: [
      'Calculer les KPIs d\'acquisition (CTR, CPC, CPM)',
      'Interpréter les métriques de conversion (ROAS, CPA)',
      'Analyser les indicateurs d\'engagement',
      'Identifier les KPIs pertinents selon les objectifs'
    ],
    exercises: [
      {
        id: 'kpis-acquisition',
        title: 'Métriques d\'acquisition de trafic',
        description: 'Comprendre et calculer les KPIs d\'acquisition',
        type: 'calculation',
        difficulty: 'débutant',
        duration: '25 min',
        content: `<div class="section-content">
  <h1 class="section-title">Métriques d'acquisition : Attirer les bons visiteurs</h1>

  <p class="section-text">L'acquisition de trafic est la première étape du funnel marketing. Ces métriques mesurent votre capacité à attirer des visiteurs qualifiés vers votre site web de manière efficace et rentable.</p>

  <h2 class="section-subtitle mt-8">Les 4 métriques fondamentales</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. CTR (Click-Through Rate) - Taux de clic</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> <span class="highlight">(Nombre de clics / Nombre d'impressions) × 100</span>
    </div>

    <div class="project-detail">
      <strong>Ce que ça mesure :</strong> La pertinence de votre message publicitaire
    </div>

    <div class="project-detail">
      <strong>Benchmarks par canal :</strong>
      <ul class="feature-list">
        <li><strong>Google Ads Search :</strong> 3-5% (excellent), 2-3% (bon)</li>
        <li><strong>Google Ads Display :</strong> 0,5-1% (bon)</li>
        <li><strong>Facebook Ads :</strong> 1-2% (bon)</li>
        <li><strong>Email marketing :</strong> 15-25% (bon)</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Exemple de calcul :</strong><br>
      Campagne avec 10 000 impressions et 300 clics<br>
      CTR = (300 / 10 000) × 100 = 3%<br>
      → Excellent pour du Google Ads Search
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. CPC (Cost Per Click) - Coût par clic</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> <span class="highlight">Coût total de la campagne / Nombre de clics</span>
    </div>

    <div class="project-detail">
      <strong>Ce que ça mesure :</strong> Le prix que vous payez pour chaque visiteur
    </div>

    <div class="project-detail">
      <strong>Facteurs d'influence :</strong>
      <ul class="feature-list">
        <li><strong>Concurrence :</strong> Plus il y a de concurrents, plus le CPC augmente</li>
        <li><strong>Quality Score :</strong> Google récompense les annonces pertinentes</li>
        <li><strong>Ciblage :</strong> Audiences spécifiques = CPC plus élevé</li>
        <li><strong>Saisonnalité :</strong> Black Friday, Noël = CPC plus élevés</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Exemple de calcul :</strong><br>
      Budget de 1 000€ pour 500 clics<br>
      CPC = 1 000€ / 500 = 2€ par clic
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. CPM (Cost Per Mille) - Coût pour 1000 impressions</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> <span class="highlight">(Coût total / Impressions) × 1000</span>
    </div>

    <div class="project-detail">
      <strong>Ce que ça mesure :</strong> Le coût de la visibilité/notoriété
    </div>

    <div class="project-detail">
      <strong>Utilisation :</strong>
      <ul class="feature-list">
        <li>Campagnes de branding (notoriété)</li>
        <li>Comparaison de coûts entre plateformes</li>
        <li>Optimisation du reach</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Benchmarks :</strong>
      <ul class="feature-list">
        <li><strong>Facebook :</strong> 5-15€ CPM selon le ciblage</li>
        <li><strong>Google Display :</strong> 2-10€ CPM</li>
        <li><strong>LinkedIn :</strong> 15-30€ CPM (B2B premium)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Taux de rebond</h3>
    
    <div class="project-detail">
      <strong>Définition :</strong> Pourcentage de visiteurs qui quittent après une seule page
    </div>

    <div class="project-detail">
      <strong>Ce que ça mesure :</strong> La qualité et pertinence du trafic acquis
    </div>

    <div class="project-detail">
      <strong>Benchmarks :</strong>
      <ul class="feature-list">
        <li><strong>E-commerce :</strong> 20-45% (bon)</li>
        <li><strong>Blog/Contenu :</strong> 65-90% (normal)</li>
        <li><strong>Landing pages :</strong> 70-90% (acceptable)</li>
        <li><strong>Sites services :</strong> 10-30% (bon)</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Interprétation :</strong><br>
      Taux de rebond élevé = Problème de pertinence ou d'UX<br>
      Taux de rebond faible = Trafic qualifié et contenu engageant
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Comment optimiser ces métriques ?</h2>

  <div class="value-type">
    <h3 class="value-title">Améliorer le CTR</h3>
    <ul class="feature-list">
      <li><strong>Message :</strong> Plus spécifique et orienté bénéfice client</li>
      <li><strong>Ciblage :</strong> Audiences plus précises et pertinentes</li>
      <li><strong>Visuels :</strong> Images/vidéos accrocheuses et professionnelles</li>
      <li><strong>Call-to-action :</strong> Verbes d'action clairs ("Découvrez", "Obtenez")</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Réduire le CPC</h3>
    <ul class="feature-list">
      <li><strong>Quality Score :</strong> Améliorer la pertinence annonce-mot-clé-landing</li>
      <li><strong>Mots-clés négatifs :</strong> Exclure les termes non pertinents</li>
      <li><strong>Heures de diffusion :</strong> Cibler les créneaux moins concurrentiels</li>
      <li><strong>Géolocalisation :</strong> Exclure les zones non rentables</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Réduire le taux de rebond</h3>
    <ul class="feature-list">
      <li><strong>Cohérence :</strong> Message annonce = contenu landing page</li>
      <li><strong>Vitesse :</strong> Temps de chargement < 3 secondes</li>
      <li><strong>Mobile :</strong> Design responsive et UX mobile optimisée</li>
      <li><strong>Contenu :</strong> Répondre immédiatement à l'intention de recherche</li>
    </ul>
  </div>
</div>`,
        practicalExercise: {
          title: 'Votre boss vous donne 10 000€ : où investissez-vous ?',
          description: 'Analysez 4 campagnes, trouvez le piège, et défendez votre choix budgétaire',
          instructions: `<div class="cas-pratique-content">
  <p><strong>La situation :</strong> Vous êtes Traffic Manager junior chez "StreetWear Lab", une marque de streetwear en ligne. Votre boss arrive lundi matin :</p>
  <div class="p-3 bg-blue-50 border-l-4 border-blue-400 rounded mb-4 italic text-gray-700">
    "On a 10 000€ de budget pour le mois prochain. Le mois dernier on a testé 4 canaux. Dis-moi où on met l'argent et pourquoi. Je veux des chiffres, pas des opinions."
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données du mois dernier (test sur 4 canaux) :</h4>

  <div class="overflow-x-auto mb-4">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Canal</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Budget test</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Impressions</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Clics</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Sessions</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Rebonds</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Ventes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Google Ads Search</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">100 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3 200</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3 100</td>
          <td class="border border-gray-300 px-3 py-2 text-center">930</td>
          <td class="border border-gray-300 px-3 py-2 text-center">62</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">TikTok Ads</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1 200 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">18 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">5 400</td>
          <td class="border border-gray-300 px-3 py-2 text-center">4 590</td>
          <td class="border border-gray-300 px-3 py-2 text-center">11</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Instagram Ads</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">350 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">5 600</td>
          <td class="border border-gray-300 px-3 py-2 text-center">4 800</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 400</td>
          <td class="border border-gray-300 px-3 py-2 text-center">38</td>
        </tr>
        <tr class="bg-yellow-50">
          <td class="border border-gray-300 px-3 py-2">Google Display</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 000 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">14 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 800</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 520</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm text-gray-500 mb-4">Panier moyen : 89€</p>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission en 3 étapes :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Calculez tout</strong> : CTR, CPC, CPM, taux de rebond et <strong>ROAS</strong> (CA / Budget) pour chaque canal. Présentez dans un tableau propre.</li>
    <li><strong>Trouvez le piège</strong> : Un canal affiche des chiffres spectaculaires en apparence (beaucoup de clics, CPM ultra-bas) mais cache un problème grave. Lequel, et pourquoi ?</li>
    <li><strong>Répartissez les 10 000€</strong> : Proposez une répartition budgétaire entre les 4 canaux. Justifiez chaque montant. Combien de ventes estimez-vous avec votre répartition ?</li>
  </ol>

  <div class="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded">
    <strong>Attention :</strong> Votre boss déteste le gaspillage. Si vous mettez de l'argent sur un canal qui ne vend pas, il faudra expliquer pourquoi.
  </div>
</div>`,
          expectedOutput: 'Tableau complet des KPIs par canal, identification du piège (Display = trafic bot probable), répartition budgétaire argumentée avec estimation de ventes',
          hints: [
            'Un canal avec un énorme écart entre clics et sessions a un problème : où sont passés les visiteurs ?',
            'Le ROAS (CA / Budget) est le juge de paix final : peu importe le CTR si ça ne vend pas',
            'TikTok a un taux de rebond de 85% : les gens regardent la vidéo mais ne restent pas sur le site'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">1. Tableau complet des KPIs par canal</h2>

  <div class="overflow-x-auto mb-6">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Canal</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Budget</th>
          <th class="border border-gray-300 px-3 py-2 text-center">CTR</th>
          <th class="border border-gray-300 px-3 py-2 text-center">CPC</th>
          <th class="border border-gray-300 px-3 py-2 text-center">CPM</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Taux rebond</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Ventes</th>
          <th class="border border-gray-300 px-3 py-2 text-center">ROAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Google Search</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">3,1%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">0,81€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">25€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">35%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">62</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-green-600 font-bold">2,21:1</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">TikTok</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">1,8%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">0,14€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">2,5€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">85%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">11</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-orange-600 font-bold">0,39:1</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Instagram</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">1,2%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">0,42€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">5€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">50%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">38</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-green-600 font-bold">1,35:1</span></td>
        </tr>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">Google Display</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">0,7%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">0,18€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">1,25€</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">90%</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="highlight">3</span></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">0,11:1</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Détail des calculs par canal</h3>
    <div class="project-detail">
      <strong>Google Search :</strong>
      <ul class="feature-list">
        <li>CTR = (3 100 / 100 000) × 100 = 3,1%</li>
        <li>CPC = 2 500€ / 3 100 = 0,81€</li>
        <li>CPM = (2 500€ / 100 000) × 1000 = 25€</li>
        <li>Sessions = 3 100 (clics = sessions, pas d'anomalie)</li>
        <li>Taux conversion = 62 / 3 100 = <strong>2%</strong> (meilleur taux)</li>
        <li>ROAS = (62 × 89€) / 2 500€ = 5 518€ / 2 500€ = <strong>2,21:1</strong></li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>TikTok :</strong>
      <ul class="feature-list">
        <li>CTR = (18 000 / 1 000 000) × 100 = 1,8%</li>
        <li>CPC = 2 500€ / 18 000 = 0,14€ (CPC le plus bas)</li>
        <li>CPM = (2 500€ / 1 000 000) × 1000 = 2,5€</li>
        <li>Taux de rebond = 85% (les gens regardent la vidéo mais quittent le site)</li>
        <li>Taux conversion = 11 / 18 000 = 0,06%</li>
        <li>ROAS = (11 × 89€) / 2 500€ = 979€ / 2 500€ = <strong>0,39:1</strong></li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Instagram :</strong>
      <ul class="feature-list">
        <li>CTR = (6 000 / 500 000) × 100 = 1,2%</li>
        <li>CPC = 2 500€ / 6 000 = 0,42€</li>
        <li>CPM = (2 500€ / 500 000) × 1000 = 5€</li>
        <li>Taux de rebond = 50% (acceptable)</li>
        <li>Taux conversion = 38 / 6 000 = 0,63%</li>
        <li>ROAS = (38 × 89€) / 2 500€ = 3 382€ / 2 500€ = <strong>1,35:1</strong></li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Google Display :</strong>
      <ul class="feature-list">
        <li>CTR = (14 000 / 2 000 000) × 100 = 0,7%</li>
        <li>CPC = 2 500€ / 14 000 = 0,18€</li>
        <li>CPM = (2 500€ / 2 000 000) × 1000 = 1,25€</li>
        <li>Taux de rebond = 90%</li>
        <li>Taux conversion = 3 / 14 000 = 0,02%</li>
        <li>ROAS = (3 × 89€) / 2 500€ = 267€ / 2 500€ = <strong>0,11:1</strong></li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Le piège : Google Display et le trafic fantôme</h2>

  <div class="example-box">
    <strong>L'anomalie qui doit sauter aux yeux :</strong><br>
    Google Display affiche <strong>14 000 clics</strong> mais seulement <strong>2 800 sessions</strong> dans GA4.<br><br>
    <strong>Où sont passés les 11 200 clics restants ?</strong> (14 000 - 2 800 = 11 200 clics disparus = 80% du trafic)
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Diagnostic du trafic fantôme</h3>
    <div class="project-detail">
      <strong>Les indices :</strong>
      <ul class="feature-list">
        <li><strong>Écart clics/sessions :</strong> 14 000 clics mais 2 800 sessions = 73% de trafic fantôme</li>
        <li><strong>Taux de rebond 90% :</strong> Même les sessions "réelles" ne restent pas</li>
        <li><strong>ROAS 0,11:1 :</strong> Pour 2 500€ investis, seulement 267€ de CA généré</li>
        <li><strong>3 ventes seulement :</strong> Sur 14 000 clics "déclarés"</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Explication probable :</strong>
      <ul class="feature-list">
        <li><strong>Trafic de bots :</strong> Les clics sont générés par des robots/fermes à clics</li>
        <li><strong>Placements de mauvaise qualité :</strong> Annonces diffusées sur des sites douteux du réseau Display</li>
        <li><strong>Fraude au clic :</strong> Le CPC semble bas (0,18€) mais on paie pour du vent</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Coût réel :</strong> Si on ne compte que les vraies sessions : CPC réel = 2 500€ / 2 800 = <strong>0,89€</strong> (5x plus cher que le CPC affiché)
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Classement des canaux par performance</h2>

  <div class="project-type">
    <h3 class="project-type-title">1er - Google Search : Le champion du ROAS</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>ROAS 2,21:1 :</strong> Meilleur retour sur investissement</li>
        <li><strong>Taux conversion 2% :</strong> Le plus élevé de tous les canaux</li>
        <li><strong>Taux de rebond 35% :</strong> Trafic très qualifié (intention d'achat)</li>
        <li><strong>Verdict :</strong> <span class="text-green-600">Canal principal à scaler en priorité</span></li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2e - Instagram : Le bon compromis</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>ROAS 1,35:1 :</strong> Rentable mais perfectible</li>
        <li><strong>Taux de rebond 50% :</strong> Trafic moyennement qualifié</li>
        <li><strong>38 ventes :</strong> Volume décent pour un budget de 2 500€</li>
        <li><strong>Verdict :</strong> <span class="text-green-600">Bon canal secondaire, potentiel d'optimisation</span></li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3e - TikTok : Le miroir aux alouettes</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>CPC 0,14€ :</strong> Le plus bas, mais ne veut rien dire si personne n'achète</li>
        <li><strong>Taux de rebond 85% :</strong> Les gens regardent la vidéo mais quittent le site</li>
        <li><strong>ROAS 0,39:1 :</strong> On perd 61 centimes pour chaque euro investi</li>
        <li><strong>Verdict :</strong> <span class="text-orange-600">À tester avec de meilleures landing pages, pas à supprimer</span></li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4e - Google Display : À couper immédiatement</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>ROAS 0,11:1 :</strong> Catastrophique, on perd 89 centimes par euro</li>
        <li><strong>73% de trafic fantôme :</strong> Probable fraude au clic / trafic bot</li>
        <li><strong>3 ventes pour 2 500€ :</strong> CPA de 833€ par vente (panier moyen 89€)</li>
        <li><strong>Verdict :</strong> <span class="text-red-600">COUPER. Chaque jour = argent jeté</span></li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Recommandation de répartition des 10 000€</h2>

  <div class="overflow-x-auto mb-6">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Canal</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Ancien budget</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Nouveau budget</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Ventes estimées</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Justification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Google Search</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><strong>5 000€</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center">~124</td>
          <td class="border border-gray-300 px-3 py-2">Meilleur ROAS, on double le budget du canal le plus rentable</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Instagram</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><strong>3 500€</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center">~53</td>
          <td class="border border-gray-300 px-3 py-2">Bon compromis volume/rentabilité, on augmente modérément</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">TikTok</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><strong>1 500€</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center">~13</td>
          <td class="border border-gray-300 px-3 py-2">Budget test réduit + landing pages dédiées à tester</td>
        </tr>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">Google Display</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 500€</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><strong>0€</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center">0</td>
          <td class="border border-gray-300 px-3 py-2">COUPÉ : trafic fantôme, ROAS catastrophique</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <strong>Estimation du résultat avec la nouvelle répartition :</strong><br>
    <br>
    • <strong>Ventes estimées :</strong> ~124 + ~53 + ~13 = <strong>~190 ventes</strong> (vs 114 actuellement)<br>
    • <strong>CA estimé :</strong> 190 × 89€ = <strong>16 910€</strong> (vs 10 146€ actuellement)<br>
    • <strong>ROAS global estimé :</strong> 16 910€ / 10 000€ = <strong>1,69:1</strong> (vs 1,01:1 actuellement)<br>
    • <strong>Gain :</strong> +67% de ventes et +67% de CA pour le même budget
  </div>

  <div class="value-type">
    <h3 class="value-title">Actions complémentaires recommandées</h3>
    <ul class="correction-list">
      <li><strong>Google Display :</strong> Si on veut retester plus tard, exclure les placements douteux, utiliser uniquement du remarketing avec audiences first-party</li>
      <li><strong>TikTok :</strong> Créer des landing pages spécifiques (le trafic TikTok ne réagit pas aux pages classiques), tester des formats UGC</li>
      <li><strong>Google Search :</strong> Surveiller que le doublement du budget ne fasse pas exploser le CPC (rendements décroissants possibles)</li>
      <li><strong>Instagram :</strong> Tester des audiences lookalike basées sur les acheteurs Google Search</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-kpi-calc-1',
            question: 'Une campagne a 50 000 impressions et 1 500 clics. Quel est son CTR ?',
            options: [
              '1,5%',
              '3%',
              '30%',
              '0,3%'
            ],
            correctAnswer: 1,
            explanation: 'CTR = (1 500 clics / 50 000 impressions) × 100 = 3%'
          },
          {
            id: 'q-kpi-calc-2',
            question: 'Avec un budget de 2 000€ et 800 clics, quel est le CPC ?',
            options: [
              '0,40€',
              '2,50€',
              '4€',
              '25€'
            ],
            correctAnswer: 1,
            explanation: 'CPC = 2 000€ / 800 clics = 2,50€ par clic'
          },
          {
            id: 'q-kpi-interp-1',
            question: 'Un CTR de 0,5% sur Google Display est :',
            options: [
              'Excellent',
              'Dans la moyenne',
              'Faible',
              'Catastrophique'
            ],
            correctAnswer: 1,
            explanation: 'Pour Google Display, 0,5-1% est considéré comme bon. 0,5% est donc dans la fourchette basse mais acceptable.'
          }
        ]
      },
      {
        id: 'atelier-audit-google-ads',
        title: 'Atelier Pratique : Audit Google Ads sur données réelles',
        description: 'Analysez les vraies campagnes Google Ads de Déco Charpente (budget 40K€, 63 000 termes de recherche)',
        type: 'case-study',
        difficulty: 'intermédiaire',
        duration: '45 min',
        content: `<div class="section-content">
  <h1 class="section-title">Audit Google Ads — Cas réel Déco Charpente</h1>

  <p class="section-text">Déco Charpente est une entreprise spécialisée dans les structures bois extérieures (abris voiture, pergolas, pool houses) en région PACA et sud de la France. Elle investit environ <strong>40 000€/an</strong> en Google Ads répartis sur une trentaine de campagnes gérées par des concessionnaires locaux.</p>

  <h2 class="section-subtitle">Contexte business</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">L'entreprise</h4>
      <ul class="deliverable-list">
        <li>Produits : carports bois, pergolas, appentis, pool houses</li>
        <li>Panier moyen : 8 000 - 15 000€</li>
        <li>Zone : Sud de la France (réseau de concessionnaires)</li>
        <li>Saisonnalité forte : pics au printemps, creux en été</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">Les données à votre disposition</h4>
      <ul class="deliverable-list">
        <li><strong>63 719 termes de recherche</strong> avec coûts, clics, conversions</li>
        <li><strong>51 mots-clés stratégiques</strong> avec comparatifs N-1</li>
        <li><strong>34 campagnes</strong> par concessionnaire avec performance</li>
        <li>Séries temporelles hebdomadaires</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Ce que vous allez apprendre</h2>

  <div class="project-type">
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Lire et interpréter</strong> un export Google Ads réel (pas un cas fictif)</li>
        <li><strong>Identifier le gaspillage</strong> : termes de recherche chers sans conversion</li>
        <li><strong>Calculer le ROAS</strong> par campagne et par mot-clé</li>
        <li><strong>Proposer des mots-clés négatifs</strong> pour réduire le budget inutile</li>
      </ul>
    </div>
  </div>
</div>`,
        practicalExercise: {
          title: 'Audit des campagnes Google Ads Déco Charpente',
          description: 'Téléchargez les données réelles et analysez les performances dans Excel ou Google Sheets',
          instructions: `<div class="cas-pratique-content">
  <h4 class="font-semibold text-purple-900 mb-4">📥 Fichiers à télécharger</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
    <a href="/data/termes-recherche-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Termes de recherche (63K lignes)</a>
    <a href="/data/mots-cles-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Mots-clés stratégiques (51)</a>
    <a href="/data/campagnes-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Campagnes (34)</a>
    <a href="/data/serie-temporelle-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Série temporelle hebdo</a>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 1 — Top & Flop (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Ouvrez <strong>termes-recherche-gads.csv</strong> dans Excel/Sheets</li>
    <li>Triez par <strong>Coût décroissant</strong> : quels sont les 10 termes les plus chers ?</li>
    <li>Filtrez les termes avec <strong>Conversions = 0 ET Coût > 50€</strong> : c'est votre gaspillage</li>
    <li>Calculez le total gaspillé sur ces termes sans conversion</li>
    <li>Identifiez les <strong>10 termes les plus rentables</strong> (meilleur ratio Conversions / Coût)</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 2 — Performance par campagne (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Ouvrez <strong>campagnes-gads.csv</strong></li>
    <li>Pour chaque campagne, calculez : <strong>ROAS = Conversions × Panier moyen estimé (10 000€) / Coût</strong></li>
    <li>Classez les campagnes du meilleur au pire ROAS</li>
    <li>Les 3 campagnes qui consomment le plus de budget sont-elles les plus performantes ?</li>
    <li>Comparez les performances 2025 vs 2024 : quelles campagnes se dégradent ?</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 3 — Recommandations (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Listez <strong>10 termes de recherche à exclure</strong> (mots-clés négatifs) avec justification</li>
    <li>Proposez une <strong>réallocation budgétaire</strong> entre les campagnes (qui mérite + / - de budget ?)</li>
    <li>Identifiez les <strong>mots-clés sous-exploités</strong> dans mots-cles-gads.csv (bon CTR mais peu de budget)</li>
  </ol>
</div>`,
          expectedOutput: 'Un tableau Excel avec : Top 10 termes rentables, liste de mots-clés négatifs, ROAS par campagne, et 3 recommandations de réallocation budgétaire',
          hints: [
            'Utilisez les filtres et tableaux croisés dynamiques dans Excel/Sheets pour analyser les 63K lignes',
            'Un terme sans conversion n\'est pas forcément mauvais s\'il coûte peu — concentrez-vous sur le gaspillage à fort montant',
            'Le ROAS cible pour du B2B avec un panier à 10K€ devrait être au minimum de 5:1'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correction — Audit Google Ads Déco Charpente</h2>

  <div class="project-type">
    <h3 class="project-type-title">Étape 1 : Analyse du gaspillage</h3>
    <div class="project-detail">
      <strong>Termes les plus chers sans conversion (exemples attendus) :</strong>
      <ul class="feature-list">
        <li>Termes trop génériques : "pergola", "abri jardin", "terrasse bois" → intentionnalité faible</li>
        <li>Termes hors cible : termes liés au métal, PVC, ou DIY → pas le produit vendu</li>
        <li>Termes géographiquement hors zone : villes hors réseau concessionnaires</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Termes les plus rentables (critères) :</strong>
      <ul class="feature-list">
        <li><strong>"carport bois sur mesure"</strong> : intention d'achat forte, mot-clé longue traîne</li>
        <li><strong>"abri voiture bois prix"</strong> : recherche transactionnelle (incluant "prix")</li>
        <li><strong>"pergola bois [ville]"</strong> : requête locale avec intention forte</li>
        <li>Termes brandés "déco charpente" : CTR 40%+, coût quasi nul</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 2 : ROAS par campagne</h3>
    <div class="project-detail">
      <strong>Campagnes performantes :</strong>
      <ul class="feature-list">
        <li><strong>Globale-réseau</strong> : ~12K€ dépensés, ~90 conversions → ROAS estimé ~75:1 (excellent)</li>
        <li>Campagnes concessionnaires avec zones géographiques ciblées : meilleur ROAS que les campagnes nationales</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Campagnes à auditer :</strong>
      <ul class="feature-list">
        <li>Campagnes avec fort budget mais peu de conversions → investiguer les landing pages</li>
        <li>Campagnes dont le coût/conv. a augmenté vs N-1 → vérifier la qualité des mots-clés</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 3 : Recommandations type</h3>
    <div class="project-detail">
      <strong>Mots-clés négatifs à ajouter :</strong>
      <ul class="feature-list">
        <li>"gratuit", "pas cher", "occasion", "diy" → hors cible premium</li>
        <li>"métal", "aluminium", "pvc", "fer forgé" → hors matériau</li>
        <li>"plan", "tuto", "comment faire" → intention informationnelle, pas transactionnelle</li>
        <li>Noms de concurrents spécifiques si non pertinents</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réallocation budgétaire :</strong>
      <ul class="feature-list">
        <li>Augmenter le budget des campagnes concessionnaires avec le meilleur coût/conversion</li>
        <li>Réduire les campagnes génériques nationales au profit de campagnes locales géociblées</li>
        <li>Investir davantage sur les mots-clés longue traîne ("carport bois sur mesure [ville]")</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Grille de notation suggérée :</strong><br>
    • Identification correcte du gaspillage avec chiffres : /5<br>
    • ROAS calculé par campagne avec classement : /5<br>
    • Mots-clés négatifs pertinents (min. 10) : /5<br>
    • Recommandations de réallocation argumentées : /5
  </div>
</div>`,
        quiz: [
          {
            id: 'q-audit-gads-1',
            question: 'Dans un export Google Ads, un terme de recherche a coûté 200€ avec 0 conversion. Quelle est la première action à envisager ?',
            options: [
              'Augmenter l\'enchère pour obtenir plus de clics',
              'Vérifier si le terme est pertinent pour le business et l\'ajouter en mot-clé négatif si hors cible',
              'Supprimer la campagne entière',
              'Ignorer car 200€ est négligeable sur un budget de 40K€'
            ],
            correctAnswer: 1,
            explanation: 'Un terme coûteux sans conversion doit être analysé : s\'il est hors cible (ex: "pergola PVC" pour un vendeur de bois), il doit être ajouté en mot-clé négatif. S\'il est pertinent, il faut plutôt auditer la landing page.'
          },
          {
            id: 'q-audit-gads-2',
            question: 'Une campagne Google Ads dépense 3 000€ pour 5 conversions. Le panier moyen est de 10 000€. Quel est le ROAS et comment l\'évaluez-vous ?',
            options: [
              'ROAS de 1,7:1 — insuffisant, la campagne perd de l\'argent',
              'ROAS de 16,7:1 — excellent, augmenter le budget',
              'ROAS de 5:1 — correct mais à améliorer',
              'Impossible à calculer sans le taux de conversion'
            ],
            correctAnswer: 1,
            explanation: 'ROAS = (5 conversions × 10 000€) / 3 000€ = 50 000 / 3 000 = 16,7:1. C\'est excellent (au-dessus du seuil de 5:1 pour du B2B). Cette campagne mérite plus de budget.'
          }
        ]
      }
    ]
  },
  {
    id: 'google-analytics-mastery',
    title: '3. Maîtrise de Google Analytics 4',
    description: 'Devenir expert de l\'outil incontournable du data marketing',
    level: 'intermédiaire',
    prerequisites: ['kpis-essentiels'],
    learningObjectives: [
      'Configurer GA4 de A à Z',
      'Créer des rapports personnalisés',
      'Analyser les parcours utilisateurs',
      'Connecter GA4 aux plateformes publicitaires'
    ],
    exercises: [
      {
        id: 'ga4-configuration',
        title: 'Configuration complète de GA4',
        description: 'Mettre en place un tracking professionnel',
        type: 'practice',
        difficulty: 'intermédiaire',
        duration: '45 min',
        content: `<div class="section-content">
  <h1 class="section-title">Google Analytics 4 : Configuration Professionnelle</h1>

  <p class="section-text">GA4 est l'outil gratuit de référence pour analyser le comportement des utilisateurs. Une configuration correcte est cruciale pour obtenir des données fiables et exploitables.</p>

  <h2 class="section-subtitle">Architecture GA4 : Comprendre la logique</h2>

  <div class="project-type">
    <h3 class="project-type-title">Modèle basé sur les événements</h3>
    <div class="project-detail">
      <strong>Principe fondamental :</strong> Dans GA4, tout est un événement (page vue, clic, achat, etc.)
    </div>
    <div class="project-detail">
      <strong>Événements automatiques :</strong>
      <ul class="feature-list">
        <li><strong>page_view :</strong> Consultation d'une page</li>
        <li><strong>scroll :</strong> Défilement à 90% de la page</li>
        <li><strong>click :</strong> Clic sur un lien externe</li>
        <li><strong>file_download :</strong> Téléchargement de fichier</li>
        <li><strong>video_start/complete :</strong> Lecture vidéo</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Événements de conversion critiques</h3>
    <div class="project-detail">
      <strong>E-commerce :</strong>
      <ul class="feature-list">
        <li><strong>purchase :</strong> Achat finalisé</li>
        <li><strong>add_to_cart :</strong> Ajout au panier</li>
        <li><strong>begin_checkout :</strong> Début du processus d'achat</li>
        <li><strong>view_item :</strong> Consultation produit</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Lead generation :</strong>
      <ul class="feature-list">
        <li><strong>generate_lead :</strong> Formulaire de contact</li>
        <li><strong>sign_up :</strong> Inscription newsletter</li>
        <li><strong>contact :</strong> Demande de devis</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Configuration étape par étape</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Installation du code</h4>
      <ul class="deliverable-list">
        <li>Créer une propriété GA4</li>
        <li>Installer le Global Site Tag</li>
        <li>Vérifier avec GA4 DebugView</li>
        <li>Tester sur mobile et desktop</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Configuration e-commerce</h4>
      <ul class="deliverable-list">
        <li>Activer Enhanced Ecommerce</li>
        <li>Configurer les événements purchase</li>
        <li>Paramétrer les données produits</li>
        <li>Tester avec des achats fictifs</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Conversions personnalisées</h4>
      <ul class="deliverable-list">
        <li>Définir les objectifs business</li>
        <li>Créer les événements personnalisés</li>
        <li>Marquer comme conversions</li>
        <li>Attribuer des valeurs</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Audiences et segments</h4>
      <ul class="deliverable-list">
        <li>Créer des audiences remarketing</li>
        <li>Segmenter par comportement</li>
        <li>Exporter vers Google Ads</li>
        <li>Configurer les exclusions</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Connexions essentielles</h2>

  <div class="value-type">
    <h3 class="value-title">Google Ads</h3>
    <ul class="feature-list">
      <li><strong>Import des conversions :</strong> Données GA4 → Google Ads</li>
      <li><strong>Audiences partagées :</strong> Remarketing cross-platform</li>
      <li><strong>Attribution améliorée :</strong> Suivi cross-device</li>
      <li><strong>Smart Bidding :</strong> Optimisation automatique</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Search Console</h3>
    <ul class="feature-list">
      <li><strong>Données SEO :</strong> Requêtes et positions</li>
      <li><strong>Performance organique :</strong> Clics et impressions</li>
      <li><strong>Analyse complète :</strong> SEO + comportement utilisateur</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Conseil pro :</strong> Utilisez Google Tag Manager (GTM) pour centraliser tous vos tags. Cela facilite la maintenance et permet une gestion plus flexible des événements.
  </div>
</div>`,
        practicalExercise: {
          title: 'L\'audit qui fait mal : trouvez les 8 erreurs GA4',
          description: 'Un compte GA4 truffé d\'erreurs classiques. Saurez-vous toutes les trouver ?',
          instructions: `<div class="cas-pratique-content">
  <p><strong>La situation :</strong> L'agence précédente de "FoodBox" (box repas livrés à domicile, 800 commandes/mois, panier moyen 45€) vient d'être virée. On vous envoie les captures d'écran de leur configuration GA4. C'est un désastre. Votre mission : trouver toutes les erreurs.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Ce que vous découvrez dans le compte GA4 :</h4>

  <div class="space-y-4 mb-6">
    <div class="p-3 bg-gray-50 border border-gray-200 rounded">
      <strong class="text-gray-800">Conversions configurées :</strong>
      <ul class="list-disc list-inside mt-1 ml-4 text-gray-700 text-sm">
        <li>"page_view" marqué comme conversion</li>
        <li>"scroll" marqué comme conversion</li>
        <li>"purchase" est présent mais la valeur est toujours 0€</li>
        <li>"first_visit" marqué comme conversion</li>
        <li>Aucun événement "add_to_cart" configuré</li>
      </ul>
    </div>

    <div class="p-3 bg-gray-50 border border-gray-200 rounded">
      <strong class="text-gray-800">Audiences créées :</strong>
      <ul class="list-disc list-inside mt-1 ml-4 text-gray-700 text-sm">
        <li>"All Users" (durée : 540 jours)</li>
        <li>"Purchasers" (durée : 30 jours)</li>
        <li>Aucune autre audience</li>
      </ul>
    </div>

    <div class="p-3 bg-gray-50 border border-gray-200 rounded">
      <strong class="text-gray-800">Connexions :</strong>
      <ul class="list-disc list-inside mt-1 ml-4 text-gray-700 text-sm">
        <li>Google Ads : NON connecté</li>
        <li>Search Console : NON connecté</li>
        <li>BigQuery : connecté (coût estimé : 200€/mois)</li>
      </ul>
    </div>

    <div class="p-3 bg-gray-50 border border-gray-200 rounded">
      <strong class="text-gray-800">Paramètres :</strong>
      <ul class="list-disc list-inside mt-1 ml-4 text-gray-700 text-sm">
        <li>Conservation des données : 2 mois</li>
        <li>Filtres IP internes : aucun</li>
        <li>Cross-domain tracking : non configuré (le paiement se fait sur pay.foodbox.fr)</li>
        <li>Enhanced Measurement : désactivé</li>
      </ul>
    </div>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Trouvez les 8 erreurs</strong> (au minimum) dans cette configuration. Pour chaque erreur, expliquez : ce qui est mal, pourquoi c'est grave, et comment corriger.</li>
    <li><strong>Priorisez</strong> : classez vos corrections de "à faire aujourd'hui" à "peut attendre une semaine".</li>
    <li><strong>Proposez 5 audiences</strong> que FoodBox devrait créer pour son remarketing, en expliquant l'usage de chacune.</li>
    <li><strong>Estimez le coût de l'incompétence</strong> : combien d'argent l'ancienne agence a fait perdre à FoodBox avec cette configuration ? (Indice : sans import de conversions dans Google Ads, le Smart Bidding ne fonctionne pas.)</li>
  </ol>

  <div class="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded">
    <strong>Le vrai enjeu :</strong> FoodBox dépense 6 000€/mois en Google Ads sans que les conversions remontent. Leur Smart Bidding optimise donc... dans le vide. Calculez le gaspillage.
  </div>
</div>`,
          expectedOutput: 'Liste des 8+ erreurs avec gravité et correction, plan de priorité, 5 audiences remarketing, et estimation du coût du gaspillage',
          hints: [
            'Marquer "page_view" comme conversion fausse TOUS les rapports : chaque visite compte comme une conversion',
            'Sans cross-domain, le parcours est coupé en 2 : GA4 ne voit pas qui achète vraiment',
            'La conservation à 2 mois empêche toute analyse de saisonnalité ou de tendance long terme'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">1. Les 8+ erreurs GA4 de FoodBox avec gravité</h2>

  <div class="overflow-x-auto mb-6">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">#</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Erreur</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Gravité</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Pourquoi c'est un problème</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">1</td>
          <td class="border border-gray-300 px-3 py-2"><strong>page_view marqué comme conversion</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">CRITIQUE</span></td>
          <td class="border border-gray-300 px-3 py-2">Chaque visite = 1 conversion. Fausse TOUTES les données. Taux de conversion affiché = 100%.</td>
        </tr>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">2</td>
          <td class="border border-gray-300 px-3 py-2"><strong>purchase value toujours 0€</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">CRITIQUE</span></td>
          <td class="border border-gray-300 px-3 py-2">Impossible de calculer le ROAS, le CA, ou la valeur d'un client. Smart Bidding optimise dans le vide.</td>
        </tr>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">3</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Google Ads non connecté</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">CRITIQUE</span></td>
          <td class="border border-gray-300 px-3 py-2">Smart Bidding optimise dans le vide. 6 000€/mois de budget Google Ads gaspillés sans import de conversions.</td>
        </tr>
        <tr class="bg-red-50">
          <td class="border border-gray-300 px-3 py-2">4</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Cross-domain non configuré</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600 font-bold">CRITIQUE</span></td>
          <td class="border border-gray-300 px-3 py-2">Le parcours est coupé en 2 : GA4 ne voit pas que les visiteurs de foodbox.fr achètent sur pay.foodbox.fr. Les achats sont attribués à "direct".</td>
        </tr>
        <tr class="bg-orange-50">
          <td class="border border-gray-300 px-3 py-2">5</td>
          <td class="border border-gray-300 px-3 py-2"><strong>scroll marqué comme conversion</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-orange-600 font-bold">GRAVE</span></td>
          <td class="border border-gray-300 px-3 py-2">Même problème que page_view : gonfle artificiellement les conversions.</td>
        </tr>
        <tr class="bg-orange-50">
          <td class="border border-gray-300 px-3 py-2">6</td>
          <td class="border border-gray-300 px-3 py-2"><strong>first_visit marqué comme conversion</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-orange-600 font-bold">GRAVE</span></td>
          <td class="border border-gray-300 px-3 py-2">Chaque nouveau visiteur = 1 conversion. Inutile pour mesurer la performance réelle.</td>
        </tr>
        <tr class="bg-orange-50">
          <td class="border border-gray-300 px-3 py-2">7</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Pas de add_to_cart</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-orange-600 font-bold">ÉLEVÉ</span></td>
          <td class="border border-gray-300 px-3 py-2">Impossible de faire du remarketing abandon panier. Perte de revenus considérable.</td>
        </tr>
        <tr class="bg-orange-50">
          <td class="border border-gray-300 px-3 py-2">8</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Conservation des données à 2 mois</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-orange-600 font-bold">ÉLEVÉ</span></td>
          <td class="border border-gray-300 px-3 py-2">Impossible d'analyser la saisonnalité ou de comparer avec l'année précédente. Perte d'historique permanente.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">9</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Search Console non connecté</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-yellow-600 font-bold">MOYEN</span></td>
          <td class="border border-gray-300 px-3 py-2">Pas d'analyse SEO/SEA croisée. On ne sait pas quels mots-clés organiques convertissent.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">10</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Pas de filtre IP interne</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-yellow-600 font-bold">MOYEN</span></td>
          <td class="border border-gray-300 px-3 py-2">Les visites internes de l'équipe faussent les données (sessions, taux de rebond, pages/session).</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">11</td>
          <td class="border border-gray-300 px-3 py-2"><strong>Enhanced Measurement désactivé</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-yellow-600 font-bold">MOYEN</span></td>
          <td class="border border-gray-300 px-3 py-2">Perd les scrolls, outbound clicks, site search gratuitement. Fonctionnalité gratuite non activée.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">12</td>
          <td class="border border-gray-300 px-3 py-2"><strong>BigQuery connecté inutilement</strong></td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-blue-600 font-bold">FAIBLE</span></td>
          <td class="border border-gray-300 px-3 py-2">200€/mois pour rien. FoodBox n'a pas l'expertise data pour exploiter BigQuery.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Plan de correction prioritaire</h2>

  <div class="project-type">
    <h3 class="project-type-title">Ce soir (urgence absolue - 30 min)</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Décocher les fausses conversions :</strong> Retirer page_view, scroll et first_visit des conversions. Ne garder QUE purchase comme conversion.</li>
        <li><strong>Connecter Google Ads :</strong> Admin > Liens produits > Google Ads. Importer la conversion purchase.</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Impact immédiat :</strong> Les rapports de conversions deviennent fiables. Smart Bidding commence à recevoir les bons signaux.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Cette semaine (priorité haute - 2-3h)</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Cross-domain tracking :</strong> Configurer foodbox.fr + pay.foodbox.fr dans Admin > Data Streams > Configure tag settings > Configure your domains</li>
        <li><strong>Purchase value :</strong> Corriger le dataLayer pour envoyer la valeur réelle de chaque commande dans le paramètre "value"</li>
        <li><strong>add_to_cart :</strong> Implémenter l'événement avec currency, value, items[] sur le bouton d'ajout panier</li>
        <li><strong>Conservation :</strong> Passer de 2 mois à 14 mois (Admin > Data Settings > Data Retention)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Ce mois (optimisation - quelques heures)</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Créer les 5 audiences remarketing</strong> (voir section suivante)</li>
        <li><strong>Filtre IP interne :</strong> Créer un filtre dans Admin > Data Settings > Data Filters</li>
        <li><strong>Couper BigQuery :</strong> Économiser 200€/mois. Reconnecter quand l'équipe aura les compétences.</li>
        <li><strong>Connecter Search Console :</strong> Admin > Liens produits > Search Console</li>
        <li><strong>Activer Enhanced Measurement :</strong> Admin > Data Streams > Enhanced Measurement (tout cocher)</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Les 5 audiences remarketing à créer</h2>

  <div class="project-type">
    <h3 class="project-type-title">Audience 1 : Abandonneurs panier 7j (Priorité Max)</h3>
    <div class="project-detail">
      <strong>Critères :</strong> add_to_cart dans les 7 derniers jours ET PAS purchase
    </div>
    <div class="project-detail">
      <strong>Usage :</strong> Remarketing avec rappel panier + code promo -10%. ROI attendu très élevé.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Audience 2 : Visiteurs haute valeur 30j</h3>
    <div class="project-detail">
      <strong>Critères :</strong> >3 pages vues ET durée session >2 minutes dans les 30 derniers jours ET PAS purchase
    </div>
    <div class="project-detail">
      <strong>Usage :</strong> Remarketing avec témoignages clients et offre de bienvenue.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Audience 3 : Clients existants 90j</h3>
    <div class="project-detail">
      <strong>Critères :</strong> purchase dans les 90 derniers jours
    </div>
    <div class="project-detail">
      <strong>Usage :</strong> Upsell/cross-sell. Exclure des campagnes d'acquisition pour éviter la cannibalisation.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Audience 4 : Visiteurs fréquents sans achat 14j</h3>
    <div class="project-detail">
      <strong>Critères :</strong> >3 sessions dans les 14 derniers jours ET PAS purchase
    </div>
    <div class="project-detail">
      <strong>Usage :</strong> Ces visiteurs hésitent. Remarketing avec preuve sociale et urgence.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Audience 5 : Clients inactifs 60j</h3>
    <div class="project-detail">
      <strong>Critères :</strong> purchase il y a 60-180 jours ET PAS purchase dans les 60 derniers jours
    </div>
    <div class="project-detail">
      <strong>Usage :</strong> Réactivation avec offre spéciale "Vous nous manquez" + nouveautés.
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Le coût de l'incompétence : estimation du gaspillage</h2>

  <div class="example-box">
    <strong>Calcul du gaspillage Google Ads :</strong><br><br>
    • <strong>Budget Google Ads :</strong> 6 000€/mois<br>
    • <strong>Problème :</strong> Sans import de conversions GA4, Smart Bidding n'a aucune donnée fiable pour optimiser<br>
    • <strong>Conséquence :</strong> Le Smart Bidding optimise sur des fausses conversions (page_view) ou dans le vide<br>
    • <strong>Estimation :</strong> CPA réel probablement 2-3x plus élevé que nécessaire<br>
    • <strong>Sur 12 mois :</strong> 6 000€ × 12 = 72 000€ de budget. Estimation de 36 000€ à 72 000€ gaspillés (50-100% du budget perdu en optimisation aveugle)
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Détail de l'impact par erreur</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Fausses conversions :</strong> Smart Bidding sur-enchérit pour du trafic qui ne convertit pas réellement</li>
        <li><strong>Cross-domain cassé :</strong> Les vraies conversions sur pay.foodbox.fr sont invisibles, donc Smart Bidding ne les optimise pas</li>
        <li><strong>Pas de remarketing panier :</strong> Sans add_to_cart, aucune campagne de récupération d'abandon (taux de récupération moyen : 10-15%)</li>
        <li><strong>BigQuery inutile :</strong> 200€/mois × 12 = 2 400€/an pour zéro utilisation</li>
      </ul>
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Résumé : coût total estimé de la mauvaise configuration</h3>
    <ul class="correction-list">
      <li><strong>Gaspillage Google Ads :</strong> 36 000€ à 72 000€/an</li>
      <li><strong>Manque à gagner remarketing :</strong> 10-15% des paniers abandonnés non récupérés</li>
      <li><strong>Coût BigQuery inutile :</strong> 2 400€/an</li>
      <li><strong>Perte d'historique :</strong> Incalculable (impossible de revenir en arrière)</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-ga4-config-1',
            question: 'Quel est l\'événement GA4 le plus critique pour un e-commerce ?',
            options: [
              'page_view',
              'purchase',
              'scroll',
              'click'
            ],
            correctAnswer: 1,
            explanation: 'L\'événement "purchase" est critique car il mesure directement le ROI et permet d\'optimiser les campagnes publicitaires pour les ventes.'
          },
          {
            id: 'q-ga4-config-2',
            question: 'Pourquoi connecter GA4 à Google Ads ?',
            options: [
              'Pour avoir plus de données gratuites',
              'Pour importer les conversions et activer le Smart Bidding',
              'C\'est obligatoire pour utiliser GA4',
              'Pour changer l\'interface de Google Ads'
            ],
            correctAnswer: 1,
            explanation: 'La connexion permet d\'importer les conversions GA4 vers Google Ads, ce qui active les stratégies d\'enchères automatiques (Smart Bidding) et améliore les performances.'
          }
        ]
      },
      {
        id: 'atelier-seo-vs-sea',
        title: 'Atelier Pratique : SEO vs SEA — Où investir ?',
        description: 'Croisez les données Search Console et Google Ads de Déco Charpente pour identifier les doublons et opportunités',
        type: 'case-study',
        difficulty: 'intermédiaire',
        duration: '40 min',
        content: `<div class="section-content">
  <h1 class="section-title">SEO vs SEA — Optimiser l'investissement</h1>

  <p class="section-text">Une question fondamentale en data marketing : <strong>faut-il payer pour un clic quand on pourrait l'obtenir gratuitement en organique ?</strong> Inversement, quand un mot-clé est hors de portée en SEO, le SEA est-il rentable ?</p>

  <h2 class="section-subtitle">Le problème classique</h2>

  <div class="project-type">
    <h3 class="project-type-title">Cannibalisation SEO/SEA</h3>
    <div class="project-detail">
      <p>Beaucoup d'entreprises achètent des mots-clés Google Ads sur lesquels elles sont <strong>déjà en position 1 en organique</strong>. C'est potentiellement de l'argent gaspillé.</p>
      <ul class="feature-list">
        <li><strong>Cas 1 :</strong> Mot-clé brandé "déco charpente" — Position organique 1, CTR 45%. Faut-il aussi payer le clic ?</li>
        <li><strong>Cas 2 :</strong> "carport bois" — Position organique 20. Le SEA est indispensable tant que le SEO ne performe pas.</li>
        <li><strong>Cas 3 :</strong> "pergola bois sur mesure" — Position organique 7-8. Le SEA peut accélérer en attendant de monter.</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">La matrice de décision</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">✅ Couper le SEA</h4>
      <ul class="deliverable-list">
        <li>Position SEO 1-3</li>
        <li>CTR organique > 20%</li>
        <li>Mot-clé brandé</li>
        <li>Faible concurrence Ads</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">⚡ Maintenir SEA + pousser SEO</h4>
      <ul class="deliverable-list">
        <li>Position SEO 4-10</li>
        <li>Mot-clé à fort volume</li>
        <li>Concurrence moyenne</li>
        <li>Réduire le budget progressivement</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">💰 SEA indispensable</h4>
      <ul class="deliverable-list">
        <li>Position SEO > 10 (page 2+)</li>
        <li>Mot-clé transactionnel</li>
        <li>Forte concurrence</li>
        <li>ROI positif confirmé</li>
      </ul>
    </div>
  </div>
</div>`,
        practicalExercise: {
          title: 'Croisement SEO / Google Ads — Déco Charpente',
          description: 'Téléchargez les données Search Console et Google Ads, puis identifiez les économies possibles',
          instructions: `<div class="cas-pratique-content">
  <h4 class="font-semibold text-purple-900 mb-4">📥 Fichiers à télécharger</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
    <a href="/data/Requêtes.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #059669, #10b981); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Search Console — Requêtes (1 000 lignes)</a>
    <a href="/data/rank-tracker.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #059669, #10b981); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Rank Tracker SEO (484 mots-clés)</a>
    <a href="/data/mots-cles-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Mots-clés Google Ads (51)</a>
    <a href="/data/termes-recherche-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Termes de recherche Ads (63K)</a>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 1 — Identifier les doublons SEO/SEA (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Ouvrez <strong>Requêtes.csv</strong> (Search Console) et <strong>mots-cles-gads.csv</strong> côte à côte</li>
    <li>Trouvez les mots-clés présents dans <strong>les deux fichiers</strong> (achetés en Ads ET positionnés en organique)</li>
    <li>Pour chaque doublon, notez la <strong>position organique</strong> et le <strong>coût Google Ads</strong></li>
    <li>Classez-les en 3 catégories : "Couper le SEA", "Réduire le SEA", "Maintenir le SEA"</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 2 — Opportunités SEO (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Dans <strong>Requêtes.csv</strong>, filtrez les mots-clés en <strong>position 4 à 10</strong> (page 1 mais pas top 3)</li>
    <li>Ce sont vos <strong>"quick wins SEO"</strong> : un petit effort de contenu peut les faire monter</li>
    <li>Identifiez les <strong>5 mots-clés à plus fort potentiel</strong> (critère : impressions élevées + position améliorable)</li>
    <li>Cherchez ces mêmes mots-clés dans les <strong>termes de recherche Ads</strong> : combien coûtent-ils en payant ?</li>
    <li>Calculez l'<strong>économie annuelle</strong> si vous atteignez le top 3 en organique</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 3 — Plan d'action (10 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Rédigez un tableau avec 3 colonnes : <strong>Mot-clé | Action SEO | Impact budget Ads</strong></li>
    <li>Estimez l'<strong>économie totale sur 12 mois</strong> si vos recommandations sont appliquées</li>
    <li>Priorisez : quels mots-clés traiter en premier ?</li>
  </ol>
</div>`,
          expectedOutput: 'Un tableau croisant positions SEO et coûts SEA, une liste de 5 quick wins SEO, et une estimation de l\'économie Ads réalisable sur 12 mois',
          hints: [
            'Le mot-clé "déco charpente" est en position 1 en organique avec 45% de CTR — est-il vraiment utile de le payer en Ads ?',
            'Cherchez les mots-clés avec beaucoup d\'impressions mais un CTR faible (<2%) en organique : c\'est un signal de position insuffisante',
            'Un mot-clé en position 7 avec 10 000 impressions et 0.5% CTR qui coûte 2€/clic en Ads = 1 200€/an d\'économie potentielle si vous le montez en top 3'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correction — SEO vs SEA</h2>

  <div class="project-type">
    <h3 class="project-type-title">Doublons identifiables</h3>
    <div class="project-detail">
      <strong>À couper en SEA (position organique 1-3, CTR élevé) :</strong>
      <ul class="feature-list">
        <li><strong>"deco charpente" / "déco charpente"</strong> : Position 1, CTR 40-45% → mot-clé brandé, le SEA est inutile</li>
        <li><strong>"abri voitures"</strong> : Position 1 en organique → économie du CPC</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>À réduire en SEA (position organique 4-10) :</strong>
      <ul class="feature-list">
        <li><strong>"pergola bois sur mesure"</strong> : Position ~7, CTR 1.78% → Push SEO + réduire l'enchère Ads progressivement</li>
        <li><strong>"carport bois sur mesure"</strong> : Position ~12 → Maintenir le SEA mais investir en contenu SEO</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Maintenir le SEA (position organique > 10) :</strong>
      <ul class="feature-list">
        <li><strong>"abri voiture"</strong> : Position 20 avec 28 911 impressions → Le volume est énorme, le SEO est trop loin, le SEA est indispensable</li>
        <li>Mots-clés très concurrentiels avec intention transactionnelle</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Quick Wins SEO attendus</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>"auvent bois"</strong> : Position 9.3, 14 855 impressions → Gros potentiel si top 3</li>
        <li><strong>"pergola bois sur mesure"</strong> : Position 7.6, 5 497 impressions</li>
        <li><strong>"carport bois"</strong> : Position variable → Volume élevé, chaque position gagnée = gros trafic</li>
        <li>Mots-clés locaux type "[produit] + [ville PACA]" en position 5-10</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Estimation d'économie type :</strong><br>
    Si 5 mots-clés passent de position 8-10 au top 3 et qu'on peut couper le SEA dessus :<br>
    • Économie estimée : 200 à 500€/mois soit <strong>2 400 à 6 000€/an</strong><br>
    • C'est 6 à 15% du budget Ads total — significatif !
  </div>

  <div class="example-box">
    <strong>Grille de notation :</strong><br>
    • Doublons correctement identifiés et classés : /5<br>
    • Quick wins SEO pertinents avec justification : /5<br>
    • Calcul d'économie réaliste : /5<br>
    • Plan d'action priorisé et clair : /5
  </div>
</div>`,
        quiz: [
          {
            id: 'q-seo-sea-1',
            question: 'Un mot-clé est en position 1 en organique avec un CTR de 40%. L\'entreprise paie aussi ce mot-clé en Google Ads à 1,50€/clic. Que recommandez-vous ?',
            options: [
              'Maintenir les deux car ça double la visibilité',
              'Couper le SEA sur ce mot-clé : le trafic organique est déjà excellent, c\'est du gaspillage',
              'Augmenter l\'enchère Ads pour dominer encore plus',
              'C\'est impossible d\'être à la fois en organique et en Ads'
            ],
            correctAnswer: 1,
            explanation: 'Avec une position 1 et un CTR de 40% en organique, payer le clic en Ads est du gaspillage. L\'exception serait un mot-clé avec un concurrent très agressif qui pourrait capter des clics.'
          },
          {
            id: 'q-seo-sea-2',
            question: 'Un mot-clé a 15 000 impressions mensuelles en Search Console mais seulement 0,7% de CTR et une position moyenne de 9. Que cela signifie-t-il ?',
            options: [
              'Le mot-clé n\'intéresse personne',
              'Le site est pénalisé par Google',
              'C\'est un "quick win SEO" : fort volume mais position insuffisante, un effort de contenu peut fortement augmenter le trafic',
              'Il faut supprimer la page qui se positionne sur ce mot-clé'
            ],
            correctAnswer: 2,
            explanation: '15 000 impressions = forte demande. Position 9 = bas de page 1. Un CTR de 0,7% est typique de cette position. En montant en top 3 (CTR attendu 8-15%), le trafic passerait de ~100 à 1 500+ clics/mois.'
          }
        ]
      }
    ]
  },
  {
    id: 'analyse-performance-avancee',
    title: '4. Analyse de Performance Avancée',
    description: 'Diagnostiquer les performances et formuler des recommandations stratégiques',
    level: 'avancé',
    prerequisites: ['google-analytics-mastery'],
    learningObjectives: [
      'Maîtriser la méthodologie de diagnostic marketing',
      'Analyser les données multi-sources',
      'Identifier les leviers d\'optimisation',
      'Formuler des recommandations chiffrées'
    ],
    exercises: [
      {
        id: 'diagnostic-methodology',
        title: 'Méthodologie de diagnostic marketing',
        description: 'Approche structurée pour analyser les performances',
        type: 'analysis',
        difficulty: 'avancé',
        duration: '35 min',
        content: `<div class="section-content">
  <h1 class="section-title">Diagnostic Marketing : De l'analyse à l'action</h1>

  <p class="section-text">Le diagnostic marketing est l'art de transformer des données brutes en insights actionnables. C'est la compétence qui différencie un bon data marketer d'un excellent stratège.</p>

  <h2 class="section-subtitle">Méthodologie en 5 étapes</h2>

  <div class="project-type">
    <h3 class="project-type-title">Étape 1 : Collecte et validation des données</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> S'assurer de la fiabilité des données avant toute analyse
    </div>
    <div class="project-detail">
      <strong>Actions clés :</strong>
      <ul class="feature-list">
        <li><strong>Cohérence cross-platform :</strong> GA4 vs Google Ads vs CRM</li>
        <li><strong>Détection d'anomalies :</strong> Pics, creux, données manquantes</li>
        <li><strong>Validation du tracking :</strong> Événements et conversions</li>
        <li><strong>Filtres et segments :</strong> Vérifier les exclusions appliquées</li>
      </ul>
    </div>
    <div class="example-box">
      <strong>Exemple d'incohérence :</strong> GA4 affiche 1000 conversions mais Google Ads seulement 800 → Problème de tracking à résoudre avant analyse.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 2 : Analyse comparative (benchmarking)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Situer les performances par rapport aux références
    </div>
    <div class="project-detail">
      <strong>4 types de comparaisons :</strong>
      <ul class="feature-list">
        <li><strong>Temporelle :</strong> MoM, YoY, saisonnalité</li>
        <li><strong>Sectorielle :</strong> Benchmarks industrie</li>
        <li><strong>Concurrentielle :</strong> Parts de marché, visibilité</li>
        <li><strong>Interne :</strong> Canal vs canal, campagne vs campagne</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Benchmarks sectoriels moyens :</strong>
      <ul class="feature-list">
        <li><strong>E-commerce :</strong> CTR 2%, Conversion 2-3%, ROAS 4:1</li>
        <li><strong>B2B SaaS :</strong> CTR 3%, Conversion 5-10%, CAC/LTV 1:3</li>
        <li><strong>Lead gen :</strong> CTR 2,5%, Conversion 5-15%, CPA variable</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 3 : Identification des écarts critiques</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Repérer les signaux d'alerte prioritaires
    </div>
    <div class="project-detail">
      <strong>Seuils d'alerte :</strong>
      <ul class="feature-list">
        <li><strong>Baisse performance :</strong> >20% vs période précédente</li>
        <li><strong>Écart benchmark :</strong> >30% sous la moyenne sectorielle</li>
        <li><strong>Disparité interne :</strong> >50% d'écart entre canaux similaires</li>
        <li><strong>Tendance négative :</strong> 3 périodes consécutives en baisse</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 4 : Analyse des causes racines (5 Pourquoi)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Comprendre le "pourquoi" des écarts
    </div>
    <div class="project-detail">
      <strong>Exemple d'application :</strong>
      <ul class="feature-list">
        <li><strong>Problème :</strong> ROAS Google Ads chuté de 4:1 à 2:1</li>
        <li><strong>Pourquoi 1 :</strong> Le CPA a augmenté de 50%</li>
        <li><strong>Pourquoi 2 :</strong> Le taux de conversion a baissé de 3% à 2%</li>
        <li><strong>Pourquoi 3 :</strong> Le trafic mobile a augmenté de 40% à 70%</li>
        <li><strong>Pourquoi 4 :</strong> La landing page n'est pas optimisée mobile</li>
        <li><strong>Cause racine :</strong> UX mobile défaillante</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 5 : Priorisation et plan d'action</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Définir les actions à impact maximal
    </div>
    <div class="project-detail">
      <strong>Matrice Impact/Effort :</strong>
      <ul class="feature-list">
        <li><strong>Quick wins :</strong> Impact élevé, effort faible → Priorité 1</li>
        <li><strong>Projets majeurs :</strong> Impact élevé, effort élevé → Planifier</li>
        <li><strong>Optimisations mineures :</strong> Impact faible, effort faible → Si temps</li>
        <li><strong>À éviter :</strong> Impact faible, effort élevé → Abandonner</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Framework AIDA-M pour l'analyse</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Attention (Acquisition)</h4>
      <ul class="deliverable-list">
        <li>Impressions, Reach, Share of Voice</li>
        <li>CTR, CPM, Quality Score</li>
        <li>Sources de trafic, canaux</li>
        <li>Saisonnalité, tendances</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Intérêt (Engagement)</h4>
      <ul class="deliverable-list">
        <li>Taux de rebond, durée session</li>
        <li>Pages par session, scroll depth</li>
        <li>Événements d'engagement</li>
        <li>Heatmaps, parcours utilisateur</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Désir (Considération)</h4>
      <ul class="deliverable-list">
        <li>Ajouts au panier, wishlist</li>
        <li>Consultations produits détaillées</li>
        <li>Téléchargements, inscriptions</li>
        <li>Temps passé sur pages clés</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Action (Conversion)</h4>
      <ul class="deliverable-list">
        <li>Taux de conversion, CPA, ROAS</li>
        <li>Panier moyen, fréquence d'achat</li>
        <li>Funnel de conversion</li>
        <li>Attribution multi-touch</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Mémorisation (Rétention)</h4>
      <ul class="deliverable-list">
        <li>Taux de rétention, churn</li>
        <li>LTV, repeat purchase rate</li>
        <li>NPS, satisfaction client</li>
        <li>Advocacy, recommandations</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Conseil stratégique :</strong> Commencez toujours par l'étape où vous perdez le plus d'opportunités. Si votre taux de conversion est bon mais votre CTR faible, concentrez-vous sur l'Attention avant l'Action.
  </div>
</div>`,
        practicalExercise: {
          title: 'Alerte ROAS : le COMEX veut des réponses pour 14h',
          description: 'La directrice marketing panique. Vous avez 50 minutes pour comprendre la chute et sauver le mois.',
          instructions: `<div class="cas-pratique-content">
  <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mb-4">
    <strong>EMAIL REÇU — Lundi 9h02</strong><br>
    <span class="italic text-gray-700">De : Sophie Durand, Directrice Marketing</span><br>
    <span class="italic text-gray-700">Objet : URGENT — ROAS en chute libre</span><br><br>
    <span class="text-gray-800">"Le CA du mois est en chute de 40%. Le budget n'a pas bougé. Le CEO veut des explications au COMEX de 14h. J'ai besoin d'un diagnostic clair et d'un plan d'action. Ne me dites pas juste 'c'est le marché' — je veux savoir EXACTEMENT ce qui s'est passé et ce qu'on fait."</span>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données du mois (Novembre vs Octobre) :</h4>

  <div class="overflow-x-auto mb-4">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Métrique</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Octobre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Novembre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Variation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Budget total</td>
          <td class="border border-gray-300 px-3 py-2 text-center">15 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">15 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">=</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">CA publicitaire</td>
          <td class="border border-gray-300 px-3 py-2 text-center">75 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">45 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-red-600 font-bold">-40%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Sessions totales</td>
          <td class="border border-gray-300 px-3 py-2 text-center">30 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">28 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-7%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Conversions</td>
          <td class="border border-gray-300 px-3 py-2 text-center">750</td>
          <td class="border border-gray-300 px-3 py-2 text-center">450</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-red-600 font-bold">-40%</td>
        </tr>
        <tr class="bg-yellow-50">
          <td class="border border-gray-300 px-3 py-2">Part trafic mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">65%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">78%</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-green-600 font-bold">+13pts</td>
        </tr>
        <tr class="bg-yellow-50">
          <td class="border border-gray-300 px-3 py-2">Taux de rebond mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">45%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">68%</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-red-600 font-bold">+23pts</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Taux de rebond desktop</td>
          <td class="border border-gray-300 px-3 py-2 text-center">32%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">34%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+2pts</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Ajouts panier</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 100</td>
          <td class="border border-gray-300 px-3 py-2 text-center">980</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-red-600 font-bold">-53%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Temps chargement mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2,1s</td>
          <td class="border border-gray-300 px-3 py-2 text-center">5,8s</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-red-600 font-bold">+176%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Newsletter inscriptions</td>
          <td class="border border-gray-300 px-3 py-2 text-center">340</td>
          <td class="border border-gray-300 px-3 py-2 text-center">420</td>
          <td class="border border-gray-300 px-3 py-2 text-center text-green-600">+24%</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Ce que votre enquête interne révèle :</h4>
  <ul class="list-disc list-inside space-y-2 ml-4 text-gray-800">
    <li><strong>8 novembre :</strong> L'équipe dev a poussé une refonte mobile (nouveau checkout, nouvelles fiches produit)</li>
    <li><strong>12 novembre :</strong> Zara lance une campagne TikTok massive avec -40% sur les manteaux</li>
    <li><strong>Depuis le 8 nov :</strong> 3 avis 1 étoile sur Trustpilot mentionnent "impossible d'ajouter au panier sur mobile"</li>
    <li><strong>Les newsletters :</strong> Augmentation de +24% des inscriptions (campagne "Avant-première Black Friday")</li>
    <li><strong>L'équipe :</strong> Le Traffic Manager senior et le développeur front sont en congés depuis le 5 novembre</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission — préparez le COMEX :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Calculez les KPIs dérivés</strong> : ROAS, taux de conversion global, CPA, taux de conversion mobile vs desktop séparément. Le problème vient-il du trafic ou de la conversion ?</li>
    <li><strong>Résolvez les contradictions</strong> : Le trafic mobile augmente mais les ventes s'effondrent. Les newsletters explosent mais le CA chute. Pourquoi ?</li>
    <li><strong>5 Pourquoi</strong> : Remontez de "Le ROAS a chuté de 40%" jusqu'à la cause racine en 5 étapes.</li>
    <li><strong>Plan d'action pour Sophie</strong> : Classez vos recommandations en "ce soir" (quick win), "cette semaine" (priorité), "ce mois" (projet). Pour chaque action, estimez l'impact en € de CA récupéré.</li>
  </ol>

  <div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <strong>L'indice caché :</strong> Toutes les métriques desktop sont stables. Le problème est 100% mobile. Et il y a une date clé...
  </div>
</div>`,
          expectedOutput: 'Diagnostic structuré avec KPIs calculés, contradictions expliquées, 5 Pourquoi avec cause racine, plan d\'action chiffré en 3 horizons temporels',
          hints: [
            'Le temps de chargement mobile est passé de 2,1s à 5,8s — au-delà de 3s, 53% des visiteurs abandonnent',
            'Les ajouts panier ont chuté de 53% — c\'est pire que la chute des conversions. Le problème est en AMONT du checkout.',
            'Le desktop est stable → la cause est spécifique au mobile → corrèle avec la refonte du 8 novembre'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">1. Calcul des KPIs et identification des écarts critiques</h2>

  <div class="overflow-x-auto mb-6">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">KPI</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Octobre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Novembre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Évolution</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">ROAS</td>
          <td class="border border-gray-300 px-3 py-2 text-center">5:1</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3:1</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-40%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Taux de conversion</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2,5%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1,6%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-36%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Panier moyen</td>
          <td class="border border-gray-300 px-3 py-2 text-center">100€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">100€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">0%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-green-600">✅ Stable</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">CPA</td>
          <td class="border border-gray-300 px-3 py-2 text-center">20€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">33€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+65%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Ajouts panier</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2 100</td>
          <td class="border border-gray-300 px-3 py-2 text-center">980</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-53%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Taux ajout panier</td>
          <td class="border border-gray-300 px-3 py-2 text-center">7% (2100/30000)</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3,5% (980/28000)</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-50%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Temps chargement mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2,1s</td>
          <td class="border border-gray-300 px-3 py-2 text-center">5,8s</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+176%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Inscriptions newsletter</td>
          <td class="border border-gray-300 px-3 py-2 text-center">850</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1 054</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+24%</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-green-600">✅ Bon</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Taux rebond desktop</td>
          <td class="border border-gray-300 px-3 py-2 text-center">32%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">33%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+1pt</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-green-600">✅ Stable</span></td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Taux rebond mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">45%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">68%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+23pts</td>
          <td class="border border-gray-300 px-3 py-2 text-center"><span class="text-red-600">🔴 Critique</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Écarts critiques identifiés</h3>
    <div class="project-detail">
      <strong>1. Ajouts panier effondrés (-53%) :</strong>
      <ul class="feature-list">
        <li>Calcul : Taux ajout panier Oct = 2 100 / 30 000 = 7% → Nov = 980 / 28 000 = 3,5% (-50%)</li>
        <li><strong>Clé :</strong> La chute des ajouts panier (-53%) est PIRE que la chute des conversions (-36%). Le problème est en AMONT du checkout.</li>
        <li>Les visiteurs n'arrivent même plus à ajouter au panier → problème de navigation/chargement mobile</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>2. Temps de chargement mobile explosé (+176%) :</strong>
      <ul class="feature-list">
        <li>Évolution : 2,1s → 5,8s (+176%)</li>
        <li>Au-delà de 3 secondes, 53% des visiteurs mobiles abandonnent (Google)</li>
        <li>À 5,8s : taux d'abandon estimé à 70-80% avant même de voir la page</li>
        <li>Corrélation directe avec la refonte mobile du 8 novembre</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>3. Taux de rebond mobile critique :</strong>
      <ul class="feature-list">
        <li>Évolution : 45% → 68% (+23 points)</li>
        <li>Seuil d'alerte dépassé : >20% d'augmentation</li>
        <li>Signal UX : Problème d'expérience utilisateur majeur</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>4. Les contradictions révélatrices :</strong>
      <ul class="feature-list">
        <li><strong>Newsletter +24% :</strong> La campagne "Avant-première Black Friday" a bien fonctionné. L'acquisition attire du monde, c'est la CONVERSION qui est cassée.</li>
        <li><strong>Desktop stable :</strong> Taux de rebond desktop 32% → 33% (+1pt) = le problème est 100% mobile. Le site desktop fonctionne normalement.</li>
        <li><strong>Panier moyen stable (100€) :</strong> Ceux qui arrivent à acheter achètent normalement. Le problème n'est pas l'offre, c'est l'accès.</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Méthode des 5 Pourquoi - Analyse des causes racines</h2>

  <div class="project-type">
    <h3 class="project-type-title">Problème : ROAS chuté de 5:1 à 3:1 (-40%)</h3>
    <div class="project-detail">
      <strong>Pourquoi 1 :</strong> Le ROAS a chuté de 40% → les conversions ont chuté de 36% pour un budget stable
    </div>
    <div class="project-detail">
      <strong>Pourquoi 2 :</strong> Les conversions ont chuté → le taux de conversion est passé de 2,5% à 1,6%
    </div>
    <div class="project-detail">
      <strong>Pourquoi 3 :</strong> Les ajouts panier ont chuté de 53% (encore pire que les conversions) → les visiteurs n'arrivent même plus à naviguer jusqu'au bouton "ajouter au panier"
    </div>
    <div class="project-detail">
      <strong>Pourquoi 4 :</strong> Le temps de chargement mobile est passé de 2,1s à 5,8s (+176%) → les pages ne chargent plus, les visiteurs partent avant de voir les produits
    </div>
    <div class="project-detail">
      <strong>Pourquoi 5 (Cause racine) :</strong> La refonte mobile du 8 novembre n'a pas été testée correctement car l'équipe était réduite. Le déploiement a dégradé les performances de chargement.
    </div>
  </div>

  <div class="example-box">
    <strong>Cause racine identifiée :</strong> Déploiement de la refonte mobile du 8 novembre sans tests de performance (équipe réduite), causant un temps de chargement de 5,8s qui empêche les visiteurs d'atteindre les pages produits et le panier. L'acquisition fonctionne (newsletter +24%), c'est la conversion mobile qui est cassée.
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Diagnostic AIDA-M structuré</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Attention (Acquisition)</h4>
      <ul class="deliverable-list">
        <li>✅ <strong>Volume :</strong> -7% sessions (acceptable)</li>
        <li>✅ <strong>Budget :</strong> Stable à 15k€</li>
        <li>✅ <strong>Newsletter :</strong> +24% inscriptions (campagne "Avant-première BF" efficace)</li>
        <li>✅ <strong>Saisonnalité :</strong> Nouvelle collection lancée</li>
        <li>✅ <strong>Conclusion :</strong> L'acquisition FONCTIONNE. Le problème est en aval.</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Intérêt (Engagement)</h4>
      <ul class="deliverable-list">
        <li>🔴 <strong>Rebond mobile :</strong> +23pts (68%)</li>
        <li>🔴 <strong>Temps chargement :</strong> 2,1s → 5,8s (+176%)</li>
        <li>✅ <strong>Desktop stable :</strong> Rebond 32% → 33% = problème 100% mobile</li>
        <li>⚠️ <strong>Shift mobile :</strong> 65% → 78%</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Désir (Considération)</h4>
      <ul class="deliverable-list">
        <li>🔴 <strong>Ajouts panier :</strong> -53% (2 100 → 980)</li>
        <li>🔴 <strong>Taux ajout panier :</strong> 7% → 3,5% (-50%)</li>
        <li>✅ <strong>Panier moyen :</strong> Stable 100€ (l'offre est bonne)</li>
        <li>🔴 <strong>Le mur :</strong> Les visiteurs ne voient même pas les produits (chargement trop long)</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Action (Conversion)</h4>
      <ul class="deliverable-list">
        <li>🔴 <strong>Conversion :</strong> -36% global</li>
        <li>🔴 <strong>CPA :</strong> +65% (20€ → 33€)</li>
        <li>✅ <strong>Panier moyen :</strong> Stable 100€</li>
        <li>🔴 <strong>ROAS :</strong> -40% (critique)</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Mémorisation (Rétention)</h4>
      <ul class="deliverable-list">
        <li>⚠️ <strong>Expérience :</strong> Risque de perte clients (frustration mobile)</li>
        <li>⚠️ <strong>Réputation :</strong> Risque avis négatifs</li>
        <li>🔴 <strong>Fidélisation :</strong> Impact long terme</li>
      </ul>
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Diagnostic principal</h3>
    <p class="section-text">Le problème est concentré sur l'<strong>Engagement mobile</strong> (temps de chargement 5,8s) qui tue le <strong>Désir</strong> (ajouts panier -53%) puis l'<strong>Action</strong> (conversions -36%). L'<strong>Attention</strong> fonctionne (newsletter +24%, desktop stable). La cause est la refonte mobile du 8 novembre, et le problème est 100% mobile.</p>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Plan d'action priorisé - Matrice Impact/Effort</h2>

  <div class="project-type">
    <h3 class="project-type-title">🚀 QUICK WINS (Impact Élevé / Effort Faible) - À faire IMMÉDIATEMENT</h3>

    <div class="project-detail">
      <strong>Action 1 : Rollback version mobile (24h)</strong>
      <ul class="feature-list">
        <li><strong>Impact :</strong> Restauration immédiate du temps de chargement (5,8s → 2,1s)</li>
        <li><strong>Effort :</strong> 1 jour technique</li>
        <li><strong>Gain estimé :</strong> Retour au taux de conversion 2,2% et ajouts panier à 7%</li>
        <li><strong>Priorité :</strong> URGENCE ABSOLUE</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Action 2 : Audit UX mobile express (48h)</strong>
      <ul class="feature-list">
        <li><strong>Impact :</strong> Identifier les problèmes précis de la refonte (images non compressées ? JS non minifié ? API lente ?)</li>
        <li><strong>Effort :</strong> 2 jours d'analyse</li>
        <li><strong>Outils :</strong> Lighthouse, WebPageTest, Hotjar heatmaps</li>
        <li><strong>Livrable :</strong> Liste des causes techniques du ralentissement</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">📈 PROJETS MAJEURS (Impact Élevé / Effort Élevé) - À planifier</h3>

    <div class="project-detail">
      <strong>Projet 1 : Refonte mobile corrigée (3 semaines)</strong>
      <ul class="feature-list">
        <li><strong>Scope :</strong> Redéployer la refonte après correction des problèmes de performance</li>
        <li><strong>Objectif :</strong> Temps de chargement <2,5s, taux de rebond <50%</li>
        <li><strong>Tests :</strong> Déploiement progressif 10% → 50% → 100%</li>
        <li><strong>KPIs :</strong> Ajouts panier >7%, conversion >2,5%</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Projet 2 : Stratégie défensive concurrence (2 semaines)</strong>
      <ul class="feature-list">
        <li><strong>Remarketing agressif :</strong> Récupérer les visiteurs perdus pendant la période cassée</li>
        <li><strong>Offres spéciales :</strong> Contre-attaquer Zara</li>
        <li><strong>Budget :</strong> +20% temporaire sur remarketing</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">🔧 OPTIMISATIONS MINEURES (Impact Faible / Effort Faible) - Si temps</h3>

    <div class="project-detail">
      <strong>Optimisations continues :</strong>
      <ul class="feature-list">
        <li>A/B test des CTA sur mobile</li>
        <li>Optimisation des images produits (lazy loading, WebP)</li>
        <li>Amélioration du moteur de recherche interne</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">5. Impact financier estimé sur 3 mois</h2>

  <div class="project-type">
    <h3 class="project-type-title">Scénario 1 : Rollback immédiat (Semaine 1)</h3>
    <div class="project-detail">
      <strong>Hypothèse :</strong> Retour aux performances d'octobre (temps chargement 2,1s, ajouts panier 7%)
    </div>
    <div class="project-detail">
      <strong>Calculs :</strong>
      <ul class="feature-list">
        <li>Taux de conversion : 1,6% → 2,5% (+56%)</li>
        <li>Ajouts panier : 980 → 2 100 (+114%)</li>
        <li>Conversions mensuelles : 450 → 700 (+250)</li>
        <li>CA mensuel : 45k€ → 70k€ (+25k€)</li>
        <li>ROAS : 3:1 → 4,7:1</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Gain 3 mois :</strong> +75k€ de CA
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Scénario 2 : Refonte mobile optimisée (Mois 2-3)</h3>
    <div class="project-detail">
      <strong>Hypothèse :</strong> Amélioration vs performances octobre grâce à la refonte corrigée
    </div>
    <div class="project-detail">
      <strong>Calculs :</strong>
      <ul class="feature-list">
        <li>Temps de chargement : 2,1s → 1,8s (optimisé)</li>
        <li>Taux ajout panier : 7% → 8,5% (UX améliorée)</li>
        <li>Taux de conversion mobile : 2,2% → 3,0% (+36%)</li>
        <li>Impact sur 78% du trafic</li>
        <li>CA mensuel : 70k€ → 81k€ (+11k€)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Gain additionnel 2 mois :</strong> +22k€ de CA
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Scénario 3 : Stratégie défensive concurrence</h3>
    <div class="project-detail">
      <strong>Remarketing renforcé :</strong>
      <ul class="feature-list">
        <li>Budget additionnel : +3k€/mois (20% de 15k€)</li>
        <li>Récupération visiteurs perdus : +15%</li>
        <li>CA additionnel : +12k€/mois</li>
        <li>ROI remarketing : 4:1</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>BILAN FINANCIER 3 MOIS :</strong><br>
    • <strong>Investissement :</strong> 25k€ (refonte) + 9k€ (budget additionnel) = 34k€<br>
    • <strong>Gains :</strong> 75k€ (rollback) + 22k€ (refonte) + 36k€ (remarketing) = 133k€<br>
    • <strong>ROI :</strong> 291% sur 3 mois<br>
    • <strong>Temps de retour :</strong> 3 semaines<br>
    • <strong>Coût de l'inaction :</strong> Chaque semaine sans rollback = ~6k€ de CA perdu (25k€/mois ÷ 4)
  </div>

  <div class="value-type">
    <h3 class="value-title">Planning d'exécution recommandé</h3>
    <ul class="correction-list">
      <li><strong>Jour 1 :</strong> Rollback version mobile + communication équipe</li>
      <li><strong>Semaine 1 :</strong> Audit UX + lancement remarketing renforcé</li>
      <li><strong>Semaine 2-4 :</strong> Refonte mobile corrigée avec tests de performance (Lighthouse >90)</li>
      <li><strong>Mois 2-3 :</strong> Déploiement progressif + monitoring performances</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">KPIs de suivi hebdomadaire</h3>
    <ul class="correction-list">
      <li><strong>Immédiat :</strong> Temps de chargement mobile, taux de rebond mobile, ajouts panier</li>
      <li><strong>Business :</strong> ROAS, CPA, CA par device</li>
      <li><strong>UX :</strong> Durée session mobile, pages/session, taux ajout panier</li>
      <li><strong>Concurrence :</strong> Share of voice, positions SEO</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-diag-1',
            question: 'Quelle est la première étape d\'un diagnostic marketing ?',
            options: [
              'Analyser la concurrence',
              'Collecter et valider les données',
              'Proposer des solutions',
              'Calculer le ROI'
            ],
            correctAnswer: 1,
            explanation: 'Il faut d\'abord s\'assurer de la fiabilité des données avant toute analyse. Des données erronées mènent à de mauvaises décisions.'
          },
          {
            id: 'q-diag-2',
            question: 'Dans la matrice Impact/Effort, quelle est la priorité des "Quick Wins" ?',
            options: [
              'Impact faible, effort faible',
              'Impact élevé, effort élevé',
              'Impact élevé, effort faible',
              'Impact faible, effort élevé'
            ],
            correctAnswer: 2,
            explanation: 'Les Quick Wins (impact élevé, effort faible) sont prioritaires car ils apportent un maximum de résultats avec un minimum de ressources.'
          }
        ]
      },
      {
        id: 'atelier-pipeline-commercial',
        title: 'Atelier Pratique : Analyse du pipeline commercial',
        description: 'Analysez 7 500 deals CRM réels pour identifier les goulots d\'étranglement du tunnel de vente',
        type: 'case-study',
        difficulty: 'avancé',
        duration: '50 min',
        content: `<div class="section-content">
  <h1 class="section-title">Analyse du pipeline commercial — Du lead à la vente</h1>

  <p class="section-text">Le data marketing ne s'arrête pas au clic. L'objectif final, c'est le <strong>chiffre d'affaires</strong>. Pour ça, il faut comprendre ce qui se passe entre le lead et la signature : c'est l'analyse du pipeline commercial.</p>

  <h2 class="section-subtitle">Le pipeline Déco Charpente</h2>

  <div class="project-type">
    <h3 class="project-type-title">6 étapes du prospect au client</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>1. Prospect</strong> → Le lead arrive (formulaire web, téléphone, salon)</li>
        <li><strong>2. RDV</strong> → Premier rendez-vous commercial</li>
        <li><strong>3. Devis effectué</strong> → Le commercial envoie une proposition chiffrée</li>
        <li><strong>4. Commande signée</strong> → Le client accepte et signe</li>
        <li><strong>5. PC/DPT</strong> → Permis de construire ou déclaration préalable</li>
        <li><strong>6. Facturé</strong> → Le projet est livré et facturé</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Pourquoi analyser le pipeline ?</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Questions business</h4>
      <ul class="deliverable-list">
        <li>À quelle étape perd-on le plus de deals ?</li>
        <li>Quel commercial a le meilleur taux de conversion ?</li>
        <li>Combien de temps entre le 1er contact et la signature ?</li>
        <li>Pourquoi les clients abandonnent-ils ?</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">Impact data marketing</h4>
      <ul class="deliverable-list">
        <li>Le marketing génère-t-il des leads qualifiés ?</li>
        <li>Quel est le vrai coût d'acquisition client (CAC) ?</li>
        <li>Le ROI marketing est-il positif quand on inclut le cycle de vente ?</li>
        <li>Faut-il plus de leads ou de meilleurs leads ?</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Données disponibles :</strong> 7 478 deals sur 7 ans, avec statut (gagnée/perdue/en cours), valeur, propriétaire commercial, dates de création et de changement d'étape, et raison de perte.
  </div>
</div>`,
        practicalExercise: {
          title: 'Diagnostic du pipeline CRM Déco Charpente',
          description: 'Téléchargez l\'export Pipedrive et analysez les performances commerciales',
          instructions: `<div class="cas-pratique-content">
  <h4 class="font-semibold text-purple-900 mb-4">📥 Fichier à télécharger</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
    <a href="/data/deals-pipedrive.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #dc2626, #ef4444); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Export CRM Pipedrive (7 478 deals)</a>
  </div>

  <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">⚠️ Fichier volumineux — utilisez les filtres et tableaux croisés dynamiques dans Excel/Sheets</p>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 1 — Vue d'ensemble du pipeline (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Ouvrez le fichier et repérez les colonnes clés : <strong>Statut, Étape, Valeur, Propriétaire, Affaire créée</strong></li>
    <li>Comptez le nombre total de deals par statut : <strong>Gagnée / Perdue / En cours</strong></li>
    <li>Calculez le <strong>taux de conversion global</strong> : Deals gagnés / Total des deals</li>
    <li>Calculez le <strong>CA total</strong> des deals gagnés</li>
    <li>Calculez le <strong>panier moyen</strong> des deals gagnés</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 2 — Analyse des pertes (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Filtrez les deals avec le statut <strong>"Perdue"</strong></li>
    <li>Analysez la colonne <strong>"Raison perte"</strong> : quelles sont les 5 raisons les plus fréquentes ?</li>
    <li>Calculez le <strong>CA perdu</strong> par raison (somme des valeurs des deals perdus par motif)</li>
    <li>À quelle <strong>étape du pipeline</strong> perd-on le plus de deals ? (entre Prospect et Devis ? ou entre Devis et Signature ?)</li>
    <li>Y a-t-il des raisons de perte sur lesquelles le marketing peut agir ?</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 3 — Performance commerciale (10 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Faites un <strong>tableau croisé dynamique</strong> : Propriétaire × Statut (Gagnée/Perdue)</li>
    <li>Calculez le <strong>taux de conversion par commercial</strong></li>
    <li>Qui a le meilleur taux ? Le plus gros CA ? Le plus de deals traités ?</li>
    <li>Y a-t-il un commercial qui traite beaucoup de leads mais convertit peu ? Pourquoi selon vous ?</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 4 — Recommandations (10 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Proposez <strong>3 actions concrètes</strong> pour améliorer le taux de conversion du pipeline</li>
    <li>Estimez l'impact en CA si le taux de conversion augmente de 5 points</li>
    <li>Quels indicateurs le marketing devrait-il suivre pour améliorer la qualité des leads ?</li>
  </ol>
</div>`,
          expectedOutput: 'Un diagnostic complet : taux de conversion par étape, top 5 des raisons de perte avec CA associé, performance par commercial, et 3 recommandations chiffrées',
          hints: [
            'Utilisez un tableau croisé dynamique (TCD) pour croiser Étape × Statut — c\'est la façon la plus rapide d\'analyser 7 500 lignes',
            'La colonne "Raison perte" est souvent vide ou mal remplie : c\'est en soi un problème à signaler (qualité des données CRM)',
            'Un commercial avec un gros volume de deals mais un faible taux de conversion peut indiquer un problème de qualification des leads en amont'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correction — Pipeline commercial</h2>

  <div class="project-type">
    <h3 class="project-type-title">Métriques clés attendues</h3>
    <div class="project-detail">
      <strong>Vue d'ensemble :</strong>
      <ul class="feature-list">
        <li>Taux de conversion global : typiquement <strong>15-25%</strong> en B2B construction</li>
        <li>Panier moyen deals gagnés : <strong>8 000 - 12 000€</strong></li>
        <li>Cycle de vente moyen : <strong>2-4 mois</strong> (de Prospect à Commande signée)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Goulots d'étranglement typiques</h3>
    <div class="project-detail">
      <strong>Pertes par étape (ce que les étudiants devraient trouver) :</strong>
      <ul class="feature-list">
        <li><strong>Prospect → RDV</strong> : Forte déperdition si beaucoup de leads non qualifiés (problème marketing)</li>
        <li><strong>Devis → Commande</strong> : Déperdition "normale" mais coûteuse (temps commercial investi)</li>
        <li><strong>Commande → PC/DPT</strong> : Pertes administratives (refus permis de construire = facteur externe)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Raisons de perte fréquentes :</strong>
      <ul class="feature-list">
        <li>"Sans réponse" / "Ne répond plus" → Problème de relance commerciale ou lead pas assez chaud</li>
        <li>"Pas de projet cette année" → Lead trop tôt dans le parcours d'achat (nurturing à mettre en place)</li>
        <li>"A construit en dur/pierre" → Lead hors cible produit (ciblage marketing à affiner)</li>
        <li>"Pas sérieux" → Qualification en amont insuffisante</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Recommandations attendues</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Qualifier les leads en amont :</strong> Ajouter des questions au formulaire (budget, délai, type de projet) pour filtrer les leads froids</li>
        <li><strong>Automatiser le nurturing :</strong> Email séquence pour les leads "pas de projet cette année" → relance à 6 mois</li>
        <li><strong>Améliorer le suivi CRM :</strong> Rendre la "raison de perte" obligatoire pour mieux analyser à l'avenir</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Calcul d'impact :</strong><br>
    Si le pipeline a 1 000 deals/an et un taux de conversion de 20% → 200 ventes × 10 000€ = 2M€<br>
    +5 points de conversion (25%) → 250 ventes × 10 000€ = 2,5M€<br>
    <strong>Impact : +500 000€ de CA annuel</strong>
  </div>

  <div class="example-box">
    <strong>Grille de notation :</strong><br>
    • Métriques pipeline correctement calculées : /5<br>
    • Analyse des raisons de perte avec CA associé : /5<br>
    • Performance par commercial pertinente : /5<br>
    • Recommandations actionnables et chiffrées : /5
  </div>
</div>`,
        quiz: [
          {
            id: 'q-pipeline-1',
            question: 'Dans un CRM, 60% des deals sont perdus avec la raison "sans réponse". Quelle est la cause la plus probable côté marketing ?',
            options: [
              'Le site web est trop lent',
              'Les leads générés ne sont pas assez qualifiés ou arrivent trop tôt dans leur parcours d\'achat',
              'Le prix est trop élevé',
              'Le CRM est mal configuré'
            ],
            correctAnswer: 1,
            explanation: '"Sans réponse" signifie souvent que le prospect n\'était pas prêt à acheter. Le marketing génère du volume mais pas de la qualité. Solution : meilleure qualification en amont (formulaires plus détaillés, scoring des leads).'
          },
          {
            id: 'q-pipeline-2',
            question: 'Un pipeline montre 500 prospects, 200 RDV, 150 devis, 50 commandes. Où se situe le principal goulot d\'étranglement ?',
            options: [
              'Entre Prospect et RDV (60% de perte)',
              'Entre RDV et Devis (25% de perte)',
              'Entre Devis et Commande (67% de perte)',
              'Les taux sont tous normaux'
            ],
            correctAnswer: 2,
            explanation: 'Prospect→RDV : 60% de perte (normal, beaucoup de leads froids). RDV→Devis : 25% (acceptable). Devis→Commande : 67% de perte — c\'est le goulot ! Sur 150 devis envoyés, seuls 50 signent. Il faut investiguer : prix, concurrence, qualité des devis.'
          }
        ]
      }
    ]
  },
  {
    id: 'optimisation-automatisation',
    title: '5. Optimisation et Automatisation',
    description: 'Automatiser les processus et optimiser les performances en continu',
    level: 'avancé',
    prerequisites: ['analyse-performance-avancee'],
    learningObjectives: [
      'Mettre en place des alertes et monitoring automatique',
      'Créer des dashboards de pilotage efficaces',
      'Optimiser les campagnes avec l\'IA et le machine learning',
      'Développer une stratégie d\'optimisation continue'
    ],
    exercises: [
      {
        id: 'dashboards-pilotage',
        title: 'Création de dashboards de pilotage',
        description: 'Concevoir des tableaux de bord pour le pilotage quotidien',
        type: 'practice',
        difficulty: 'avancé',
        duration: '50 min',
        content: `<div class="section-content">
  <h1 class="section-title">Dashboards de Pilotage : Transformer les données en décisions</h1>

  <p class="section-text">Un bon dashboard ne montre pas toutes les données disponibles, mais uniquement celles nécessaires pour prendre des décisions rapides et éclairées. C'est l'art de la synthèse intelligente.</p>

  <h2 class="section-subtitle">Principes fondamentaux d'un dashboard efficace</h2>

  <div class="project-type">
    <h3 class="project-type-title">Règle des 5 secondes</h3>
    <div class="project-detail">
      <strong>Principe :</strong> L'information critique doit être comprise en moins de 5 secondes
    </div>
    <div class="project-detail">
      <strong>Techniques :</strong>
      <ul class="feature-list">
        <li><strong>Hiérarchie visuelle :</strong> Taille, couleur, position</li>
        <li><strong>Codes couleur :</strong> Rouge (alerte), Orange (attention), Vert (OK)</li>
        <li><strong>Indicateurs visuels :</strong> Flèches, jauges, graphiques sparkline</li>
        <li><strong>Seuils d'alerte :</strong> Automatisation des alertes visuelles</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Architecture en pyramide</h3>
    <div class="project-detail">
      <strong>Niveau 1 - Vue d'ensemble (5 KPIs max) :</strong>
      <ul class="feature-list">
        <li>CA du mois vs objectif</li>
        <li>ROAS global</li>
        <li>Nombre de conversions</li>
        <li>CPA moyen</li>
        <li>Trafic total</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Niveau 2 - Analyse par canal :</strong>
      <ul class="feature-list">
        <li>Performance par source de trafic</li>
        <li>Évolution temporelle (7j, 30j)</li>
        <li>Comparaison vs période précédente</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Niveau 3 - Détail opérationnel :</strong>
      <ul class="feature-list">
        <li>Performance par campagne</li>
        <li>Mots-clés top/flop</li>
        <li>Audiences les plus rentables</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Types de dashboards par rôle</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Dashboard Direction (C-Level)</h4>
      <ul class="deliverable-list">
        <li><strong>Fréquence :</strong> Hebdomadaire/Mensuelle</li>
        <li><strong>Focus :</strong> ROI, croissance, parts de marché</li>
        <li><strong>KPIs :</strong> CA, ROAS, CAC, LTV</li>
        <li><strong>Format :</strong> Synthèse 1 page, tendances</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Dashboard Marketing Manager</h4>
      <ul class="deliverable-list">
        <li><strong>Fréquence :</strong> Quotidienne</li>
        <li><strong>Focus :</strong> Performance canaux, optimisation</li>
        <li><strong>KPIs :</strong> CTR, CPC, conversions, audiences</li>
        <li><strong>Format :</strong> Interactif, drill-down possible</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Dashboard Opérationnel</h4>
      <ul class="deliverable-list">
        <li><strong>Fréquence :</strong> Temps réel</li>
        <li><strong>Focus :</strong> Alertes, anomalies, actions</li>
        <li><strong>KPIs :</strong> Détaillés par campagne/mot-clé</li>
        <li><strong>Format :</strong> Monitoring, notifications push</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Outils et technologies</h2>

  <div class="value-type">
    <h3 class="value-title">Google Data Studio / Looker Studio (Gratuit)</h3>
    <ul class="feature-list">
      <li><strong>Avantages :</strong> Gratuit, intégration native Google</li>
      <li><strong>Connecteurs :</strong> GA4, Google Ads, Search Console, Sheets</li>
      <li><strong>Limites :</strong> Personnalisation limitée, performance sur gros volumes</li>
      <li><strong>Idéal pour :</strong> PME, budgets serrés, écosystème Google</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Tableau / Power BI (Payant)</h3>
    <ul class="feature-list">
      <li><strong>Avantages :</strong> Puissance, flexibilité, visualisations avancées</li>
      <li><strong>Connecteurs :</strong> 500+ sources de données</li>
      <li><strong>Prix :</strong> 10-70€/utilisateur/mois</li>
      <li><strong>Idéal pour :</strong> Grandes entreprises, analyses complexes</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Solutions spécialisées marketing</h3>
    <ul class="feature-list">
      <li><strong>Supermetrics :</strong> Agrégation données marketing</li>
      <li><strong>Klipfolio :</strong> Dashboards temps réel</li>
      <li><strong>Whatagraph :</strong> Reporting automatisé clients</li>
      <li><strong>Custom :</strong> Développement sur mesure (API)</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Automatisation et alertes</h2>

  <div class="project-type">
    <h3 class="project-type-title">Système d'alertes intelligent</h3>
    <div class="project-detail">
      <strong>Alertes critiques (notification immédiate) :</strong>
      <ul class="feature-list">
        <li>ROAS < 2:1 pendant 2 jours consécutifs</li>
        <li>CPA > 150% de la moyenne sur 24h</li>
        <li>Chute de trafic > 30% vs jour précédent</li>
        <li>Budget campagne épuisé à plus de 80%</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Alertes d'optimisation (notification quotidienne) :</strong>
      <ul class="feature-list">
        <li>Mots-clés avec Quality Score < 5</li>
        <li>Campagnes avec CTR < benchmark -20%</li>
        <li>Audiences avec volume < 1000 utilisateurs</li>
        <li>Landing pages avec taux de rebond > 70%</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Conseil pro :</strong> Configurez des alertes par email ET Slack/Teams. L'email pour l'historique, Slack pour la réactivité. Évitez la sur-notification qui désensibilise l'équipe.
  </div>

  <h2 class="section-subtitle mt-8">Métriques de performance du dashboard</h2>

  <div class="project-type">
    <h3 class="project-type-title">KPIs d'usage du dashboard</h3>
    <div class="project-detail">
      <strong>Adoption :</strong>
      <ul class="feature-list">
        <li>Nombre d'utilisateurs actifs quotidiens</li>
        <li>Temps passé sur le dashboard</li>
        <li>Fréquence de consultation</li>
        <li>Taux de clic sur les drill-downs</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Efficacité :</strong>
      <ul class="feature-list">
        <li>Temps de prise de décision réduit</li>
        <li>Nombre d'optimisations déclenchées</li>
        <li>Amélioration des performances suite aux actions</li>
        <li>Réduction du temps de reporting manuel</li>
      </ul>
    </div>
  </div>
</div>`,
        practicalExercise: {
          title: 'Le bon, la brute et le truand : jugez 3 dashboards',
          description: 'Analysez 3 dashboards marketing, classez-les, et transformez le pire en chef-d\'oeuvre',
          instructions: `<div class="cas-pratique-content">
  <p><strong>Le principe :</strong> On vous montre 3 dashboards utilisés par de vraies équipes marketing. Un est excellent, un est moyen, un est catastrophique. À vous de jouer au critique.</p>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">DASHBOARD A — "Le Mur de Chiffres"</h4>
  <div class="p-3 bg-gray-50 border border-gray-200 rounded mb-4">
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700 text-sm">
      <li>47 KPIs affichés sur une seule page, police taille 8</li>
      <li>Pas de code couleur, pas d'alerte</li>
      <li>Données mises à jour manuellement chaque vendredi (copier-coller depuis Excel)</li>
      <li>Tout est au même niveau : le CA côtoie le taux de scroll et le nombre de pages vues 404</li>
      <li>Le manager passe 45 min chaque lundi à "décrypter" les chiffres en réunion</li>
    </ul>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-3">DASHBOARD B — "L'Essentiel"</h4>
  <div class="p-3 bg-gray-50 border border-gray-200 rounded mb-4">
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700 text-sm">
      <li>Page 1 : 5 KPIs avec jauges colorées (vert/orange/rouge) + tendance 7j</li>
      <li>Page 2 : Performance par canal avec comparaison mois précédent</li>
      <li>Page 3 : Détail opérationnel par campagne (drill-down cliquable)</li>
      <li>Données actualisées toutes les 4h via connecteurs automatiques</li>
      <li>Alertes Slack automatiques quand un KPI passe en rouge</li>
      <li>Le manager ouvre le dashboard 2 min le matin et sait immédiatement si tout va bien</li>
    </ul>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-3">DASHBOARD C — "Le Beau Gosse Inutile"</h4>
  <div class="p-3 bg-gray-50 border border-gray-200 rounded mb-4">
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-700 text-sm">
      <li>Design magnifique : animations, dégradés, graphiques 3D</li>
      <li>Temps de chargement : 12 secondes</li>
      <li>KPIs affichés : impressions totales, "engagement rate", nombre de likes Instagram</li>
      <li>Aucune donnée de conversion, de CA, ou de ROAS</li>
      <li>Pas de comparaison temporelle (juste le chiffre du jour)</li>
      <li>L'équipe l'a abandonné après 2 semaines car "ça ne sert à rien pour prendre des décisions"</li>
    </ul>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Classez les 3 dashboards</strong> du meilleur au pire. Justifiez chaque classement en 2-3 phrases.</li>
    <li><strong>Pour chacun, identifiez :</strong> les 2 plus gros problèmes ET les 2 choses qui marchent bien (même le pire a quelque chose de bon).</li>
    <li><strong>Redesignez le pire</strong> : Prenez le dashboard le plus mauvais et proposez une refonte. Quels KPIs garder/supprimer ? Quelle structure (combien de pages, quoi sur chaque page) ? Quelles alertes mettre en place ?</li>
    <li><strong>Le test des 5 secondes</strong> : Pour votre dashboard redesigné, décrivez ce qu'un manager doit comprendre en 5 secondes d'ouverture. Qu'est-ce qui doit sauter aux yeux IMMÉDIATEMENT ?</li>
  </ol>

  <div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <strong>Règle d'or :</strong> Un dashboard n'est pas un rapport. C'est un outil de décision. S'il faut plus de 5 secondes pour comprendre si "ça va ou pas", il a échoué.
  </div>
</div>`,
          expectedOutput: 'Classement argumenté des 3 dashboards, forces/faiblesses de chacun, refonte complète du pire avec structure, KPIs et alertes, description du test 5 secondes',
          hints: [
            'Le Dashboard A a un problème de hiérarchie : 47 KPIs = 0 KPI. L\'information noyée ne vaut rien.',
            'Le Dashboard C est le piège classique : il mesure la vanité (likes) au lieu de la valeur (CA, ROAS)',
            'Un bon dashboard répond à UNE question : est-ce que ça marche ou pas ? Tout le reste est du drill-down.'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">1. Classement des dashboards</h2>

  <div class="example-box">
    <strong>Classement final :</strong><br><br>
    🥇 <strong>Dashboard B (L'Essentiel)</strong> > 🥈 <strong>Dashboard A (Le Mur)</strong> > 🥉 <strong>Dashboard C (Le Beau Gosse)</strong><br><br>
    Le meilleur dashboard n'est pas le plus complet ni le plus beau : c'est celui qui permet de <strong>prendre une décision en 5 secondes</strong>.
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Analyse détaillée de chaque dashboard</h2>

  <div class="project-type">
    <h3 class="project-type-title">Dashboard A : "Le Mur" - 47 KPIs sur un seul écran</h3>
    <div class="project-detail">
      <strong>Forces :</strong>
      <ul class="feature-list">
        <li>Exhaustivité : toutes les données sont présentes</li>
        <li>Un analyste expérimenté peut tout trouver (s'il a le temps)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Faiblesses :</strong>
      <ul class="feature-list">
        <li><strong>47 KPIs = bruit :</strong> Aucune hiérarchie, impossible de savoir ce qui est important</li>
        <li><strong>Mise à jour manuelle (Excel) :</strong> Données périmées, erreurs de copier-coller</li>
        <li><strong>45 min de déchiffrage :</strong> Anti-pattern absolu. Un dashboard doit répondre en 5 secondes, pas 45 minutes.</li>
        <li><strong>Pas de code couleur :</strong> Impossible de repérer ce qui va mal en un coup d'oeil</li>
        <li><strong>Pas d'alertes :</strong> Les problèmes sont découverts trop tard</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Verdict :</strong> <span class="text-orange-600">Un tableau Excel déguisé en dashboard. L'information noyée ne vaut rien.</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Dashboard B : "L'Essentiel" - 3 niveaux, drill-down, alertes</h3>
    <div class="project-detail">
      <strong>Forces :</strong>
      <ul class="feature-list">
        <li><strong>3 niveaux de lecture :</strong> Vue d'ensemble → canal → détail (hiérarchie claire)</li>
        <li><strong>Drill-down :</strong> On voit le résumé d'abord, on creuse si besoin</li>
        <li><strong>Code couleur vert/orange/rouge :</strong> En 2 secondes on voit ce qui va et ce qui ne va pas</li>
        <li><strong>Alertes automatiques :</strong> Notification si ROAS<3 ou CPA>seuil</li>
        <li><strong>Temps réel :</strong> Données toujours à jour, pas de mise à jour manuelle</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Faiblesses :</strong>
      <ul class="feature-list">
        <li>Potentiellement trop simplifié pour l'analyste qui veut du granulaire (mais le drill-down compense)</li>
        <li>Dépendant des connecteurs (si l'API casse, plus de données)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Verdict :</strong> <span class="text-green-600">Le modèle à suivre. Répond à LA question : "est-ce que ça marche ?"</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Dashboard C : "Le Beau Gosse" - Design soigné, vanity metrics</h3>
    <div class="project-detail">
      <strong>Forces :</strong>
      <ul class="feature-list">
        <li><strong>Design soigné :</strong> Bonne première impression, agréable à regarder</li>
        <li><strong>Engagement rate :</strong> Pertinent pour évaluer la performance social media</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Faiblesses :</strong>
      <ul class="feature-list">
        <li><strong>Vanity metrics uniquement :</strong> Likes, followers, impressions... mais PAS de conversion, CA, ROAS</li>
        <li><strong>Pas de lien avec le business :</strong> 10 000 likes = combien d'euros ? Impossible à dire</li>
        <li><strong>Pas de comparaison temporelle :</strong> On ne sait pas si ça monte ou ça descend</li>
        <li><strong>12 secondes de chargement :</strong> Personne ne va attendre. Dashboard abandonné en pratique.</li>
        <li><strong>Pas d'alertes :</strong> Aucune notification si les performances chutent</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Verdict :</strong> <span class="text-red-600">Le piège classique : mesurer la vanité (likes) au lieu de la valeur (CA). Joli mais inutile.</span>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Refonte du Dashboard C</h2>

  <div class="project-type">
    <h3 class="project-type-title">Page 1 : Vue Business (ce que le manager voit en premier)</h3>
    <div class="project-detail">
      <strong>5 KPIs business avec code couleur vert/orange/rouge :</strong>
      <ul class="feature-list">
        <li><strong>CA mensuel</strong> avec tendance vs mois précédent et vs objectif</li>
        <li><strong>ROAS global</strong> avec seuil d'alerte (<3 = rouge)</li>
        <li><strong>Conversions totales</strong> avec répartition par canal</li>
        <li><strong>CPA moyen</strong> avec comparaison historique</li>
        <li><strong>Taux de conversion</strong> avec breakdown mobile/desktop</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Règle :</strong> Chaque KPI a un indicateur visuel (↑ vert, → orange, ↓ rouge) et une comparaison N-1.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Page 2 : Performance par canal</h3>
    <div class="project-detail">
      <strong>Tableau comparatif incluant TOUS les canaux :</strong>
      <ul class="feature-list">
        <li><strong>Social media :</strong> Engagement + conversions attribuées + ROAS</li>
        <li><strong>Paid Search :</strong> CTR, CPC, conversions, ROAS</li>
        <li><strong>Organic :</strong> Sessions, conversions, taux de conversion</li>
        <li><strong>Email :</strong> Taux ouverture, conversions, CA</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Clé :</strong> Comparer les canaux sur les mêmes métriques business (pas likes vs CTR vs taux ouverture).
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Page 3 : Détail Social Media</h3>
    <div class="project-detail">
      <strong>Engagement + conversions attribuées :</strong>
      <ul class="feature-list">
        <li>Engagement rate par plateforme (Instagram, TikTok, Facebook, LinkedIn)</li>
        <li>Conversions attribuées au social (last-click et assisted)</li>
        <li>Top posts par engagement ET par conversions générées</li>
        <li>ROI par plateforme sociale</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Alertes automatiques</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>ROAS < 3 :</strong> Notification immédiate (email + Slack)</li>
        <li><strong>CPA > seuil :</strong> Alerte orange si +20%, rouge si +50%</li>
        <li><strong>Budget > 80% consommé :</strong> Alerte de surconsommation</li>
        <li><strong>Conversion drop > 20% :</strong> Alerte anomalie</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Le test des 5 secondes</h2>

  <div class="example-box">
    <strong>En 5 secondes, le manager doit voir :</strong><br><br>
    1. <strong>UN chiffre de CA</strong> avec tendance (↑ ou ↓) et couleur (vert = on track, rouge = problème)<br><br>
    2. <strong>UN indicateur vert/rouge</strong> global : "ça va" ou "ça ne va pas"<br><br>
    3. <strong>Le canal qui pose problème</strong> s'il y en a un (highlight rouge sur le canal défaillant)<br><br>
    <strong>Si le manager doit réfléchir plus de 5 secondes pour savoir si les choses vont bien, le dashboard a échoué.</strong>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Application du test aux 3 dashboards</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Dashboard A :</strong> ❌ Échec. 45 minutes pour comprendre = anti-pattern</li>
        <li><strong>Dashboard B :</strong> ✅ Réussi. Code couleur + hiérarchie = réponse en 2-3 secondes</li>
        <li><strong>Dashboard C :</strong> ❌ Échec. 12s de chargement + vanity metrics = on ne sait même pas si le business va bien</li>
      </ul>
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Règles d'or du dashboard efficace</h3>
    <ul class="correction-list">
      <li><strong>Règle des 5 secondes :</strong> Si tu ne peux pas répondre "ça va / ça ne va pas" en 5 secondes, c'est raté</li>
      <li><strong>Hiérarchie :</strong> 5-7 KPIs max en vue principale, le reste en drill-down</li>
      <li><strong>Code couleur :</strong> Vert/orange/rouge sur CHAQUE KPI avec seuils prédéfinis</li>
      <li><strong>Temps réel :</strong> Un dashboard mis à jour manuellement est un rapport, pas un dashboard</li>
      <li><strong>Business d'abord :</strong> CA et ROAS en premier. Les likes et impressions sont secondaires.</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-dashboard-1',
            question: 'Quelle est la règle d\'or pour un dashboard efficace ?',
            options: [
              'Afficher toutes les données disponibles',
              'Information critique comprise en moins de 5 secondes',
              'Utiliser le maximum de couleurs',
              'Mettre à jour une fois par semaine'
            ],
            correctAnswer: 1,
            explanation: 'La règle des 5 secondes : l\'information critique doit être comprise immédiatement pour permettre une prise de décision rapide.'
          },
          {
            id: 'q-dashboard-2',
            question: 'Quel seuil d\'alerte critique pour le ROAS dans l\'exercice ?',
            options: [
              'ROAS < 5:1',
              'ROAS < 4:1',
              'ROAS < 3:1',
              'ROAS < 2:1'
            ],
            correctAnswer: 2,
            explanation: 'ROAS < 3:1 est défini comme seuil critique car il indique une rentabilité insuffisante nécessitant une action immédiate.'
          }
        ]
      },
      {
        id: 'automatisation-ia',
        title: 'Automatisation et Intelligence Artificielle',
        description: 'Exploiter l\'IA pour optimiser les campagnes automatiquement',
        type: 'practice',
        difficulty: 'avancé',
        duration: '40 min',
        content: `<div class="section-content">
  <h1 class="section-title">L'IA au Service du Marketing : Automatiser pour Performer</h1>

  <p class="section-text">L'intelligence artificielle transforme le marketing digital en permettant l'optimisation automatique à grande échelle. Les marketers qui maîtrisent ces outils obtiennent un avantage concurrentiel décisif.</p>

  <h2 class="section-subtitle">Les 4 niveaux d'automatisation marketing</h2>

  <div class="project-type">
    <h3 class="project-type-title">Niveau 1 : Automatisation des tâches répétitives</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Libérer du temps pour les tâches à valeur ajoutée
    </div>
    <div class="project-detail">
      <strong>Applications :</strong>
      <ul class="feature-list">
        <li><strong>Reporting automatique :</strong> Génération quotidienne des KPIs</li>
        <li><strong>Alertes intelligentes :</strong> Notifications sur seuils personnalisés</li>
        <li><strong>Import/Export données :</strong> Synchronisation cross-platform</li>
        <li><strong>Création de campagnes :</strong> Templates et duplication</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Outils :</strong> Zapier, Google Apps Script, API natives
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Niveau 2 : Optimisation basée sur des règles</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Appliquer des optimisations prédéfinies automatiquement
    </div>
    <div class="project-detail">
      <strong>Applications :</strong>
      <ul class="feature-list">
        <li><strong>Gestion des enchères :</strong> Augmentation/diminution selon performance</li>
        <li><strong>Pause automatique :</strong> Campagnes sous-performantes</li>
        <li><strong>Ajustement budgets :</strong> Réallocation vers les top performers</li>
        <li><strong>Mots-clés négatifs :</strong> Ajout automatique selon CTR</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Outils :</strong> Google Ads Scripts, Facebook Automated Rules
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Niveau 3 : Machine Learning et prédiction</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Anticiper les performances et optimiser en temps réel
    </div>
    <div class="project-detail">
      <strong>Applications :</strong>
      <ul class="feature-list">
        <li><strong>Smart Bidding :</strong> Enchères automatiques basées sur la probabilité de conversion</li>
        <li><strong>Audiences prédictives :</strong> Identification des prospects les plus qualifiés</li>
        <li><strong>Attribution modeling :</strong> Répartition intelligente de la valeur des touchpoints</li>
        <li><strong>Lifetime Value :</strong> Prédiction de la valeur client à long terme</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Outils :</strong> Google Smart Bidding, Facebook Advantage+, Amazon DSP
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Niveau 4 : IA générative et créativité</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Créer du contenu personnalisé à grande échelle
    </div>
    <div class="project-detail">
      <strong>Applications :</strong>
      <ul class="feature-list">
        <li><strong>Génération de créatifs :</strong> Visuels et textes personnalisés par audience</li>
        <li><strong>Optimisation dynamique :</strong> Test A/B automatique des variations</li>
        <li><strong>Personnalisation :</strong> Messages adaptés au profil utilisateur</li>
        <li><strong>Prédiction de tendances :</strong> Anticipation des sujets porteurs</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Outils :</strong> ChatGPT API, Midjourney, Jasper, Copy.ai
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Smart Bidding : Maîtriser les enchères automatiques</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Target CPA (Coût par acquisition cible)</h4>
      <ul class="deliverable-list">
        <li><strong>Principe :</strong> Maximiser les conversions pour un CPA donné</li>
        <li><strong>Prérequis :</strong> 30+ conversions/mois minimum</li>
        <li><strong>Idéal pour :</strong> Objectifs de volume avec contrainte budgétaire</li>
        <li><strong>Réglage :</strong> CPA = 80% du CPA historique pour commencer</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Target ROAS (Retour sur dépenses publicitaires)</h4>
      <ul class="deliverable-list">
        <li><strong>Principe :</strong> Maximiser la valeur des conversions</li>
        <li><strong>Prérequis :</strong> Tracking des valeurs de conversion</li>
        <li><strong>Idéal pour :</strong> E-commerce avec paniers variables</li>
        <li><strong>Réglage :</strong> ROAS = 80% du ROAS historique</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Maximize Conversions</h4>
      <ul class="deliverable-list">
        <li><strong>Principe :</strong> Obtenir le maximum de conversions</li>
        <li><strong>Prérequis :</strong> Budget flexible</li>
        <li><strong>Idéal pour :</strong> Lancement produit, acquisition rapide</li>
        <li><strong>Attention :</strong> Peut augmenter significativement le CPA</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Maximize Conversion Value</h4>
      <ul class="deliverable-list">
        <li><strong>Principe :</strong> Maximiser la valeur totale des conversions</li>
        <li><strong>Prérequis :</strong> Valeurs de conversion configurées</li>
        <li><strong>Idéal pour :</strong> Optimisation du chiffre d'affaires</li>
        <li><strong>Usage :</strong> Campagnes avec forte variance de valeur</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Audiences prédictives et lookalikes</h2>

  <div class="value-type">
    <h3 class="value-title">Création d'audiences similaires performantes</h3>
    <ul class="feature-list">
      <li><strong>Source de qualité :</strong> Clients avec LTV élevée (top 20%)</li>
      <li><strong>Taille optimale :</strong> 1000-10 000 utilisateurs source</li>
      <li><strong>Fraîcheur :</strong> Données des 180 derniers jours maximum</li>
      <li><strong>Segmentation :</strong> Par valeur client, catégorie produit, géographie</li>
      <li><strong>Test progressif :</strong> 1% → 5% → 10% de similarité</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Audiences prédictives avancées</h3>
    <ul class="feature-list">
      <li><strong>Propension à l'achat :</strong> Score de probabilité de conversion</li>
      <li><strong>Risque de churn :</strong> Identification des clients à risque</li>
      <li><strong>Upsell potential :</strong> Clients susceptibles d'acheter plus</li>
      <li><strong>Lifetime Value :</strong> Prédiction de la valeur à long terme</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Automatisation créative avec l'IA</h2>

  <div class="project-type">
    <h3 class="project-type-title">Génération de textes publicitaires</h3>
    <div class="project-detail">
      <strong>Prompts efficaces pour ChatGPT/Claude :</strong>
      <ul class="feature-list">
        <li>"Crée 10 headlines Google Ads pour [produit] ciblant [audience] avec [bénéfice principal]"</li>
        <li>"Génère 5 descriptions Facebook Ads pour [service] avec un ton [formel/décontracté]"</li>
        <li>"Écris 3 CTA différents pour une landing page [secteur] optimisés conversion"</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Optimisation itérative :</strong>
      <ul class="feature-list">
        <li>Test A/B des variations générées</li>
        <li>Analyse des performances par type de message</li>
        <li>Réentraînement avec les meilleures performances</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Génération de visuels avec l'IA</h3>
    <div class="project-detail">
      <strong>Outils recommandés :</strong>
      <ul class="feature-list">
        <li><strong>Midjourney :</strong> Créatifs artistiques et conceptuels</li>
        <li><strong>DALL-E 3 :</strong> Intégration avec ChatGPT, texte dans images</li>
        <li><strong>Stable Diffusion :</strong> Open source, contrôle total</li>
        <li><strong>Canva AI :</strong> Templates marketing prêts à l'emploi</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Prompts visuels efficaces :</strong>
      <ul class="feature-list">
        <li>"Product photography of [produit], clean white background, professional lighting, 4K"</li>
        <li>"Lifestyle photo showing [produit] being used by [cible], natural lighting, candid moment"</li>
        <li>"Minimalist graphic design for [service], modern typography, [couleurs brand]"</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Cas d'usage concret :</strong> Une marque de cosmétiques génère automatiquement 50 variations de visuels par produit (différents angles, éclairages, contextes) puis teste via Facebook Dynamic Ads pour identifier les plus performants.
  </div>

  <h2 class="section-subtitle mt-8">Mise en place d'une stratégie d'automatisation</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Phase 1 : Audit et priorisation</h4>
      <ul class="deliverable-list">
        <li>Identifier les tâches répétitives chronophages</li>
        <li>Évaluer la maturité des données disponibles</li>
        <li>Définir les quick wins vs projets long terme</li>
        <li>Calculer le ROI potentiel de chaque automatisation</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase 2 : Implémentation progressive</h4>
      <ul class="deliverable-list">
        <li>Commencer par les automatisations simples (niveau 1)</li>
        <li>Tester sur un échantillon limité</li>
        <li>Mesurer l'impact vs gestion manuelle</li>
        <li>Étendre progressivement le périmètre</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase 3 : Optimisation continue</h4>
      <ul class="deliverable-list">
        <li>Monitoring des performances automatisées</li>
        <li>Ajustement des seuils et règles</li>
        <li>Formation équipe aux nouveaux outils</li>
        <li>Évolution vers des niveaux plus avancés</li>
      </ul>
    </div>
  </div>
</div>`,
        practicalExercise: {
          title: 'Le backlog de l\'urgence : triez, automatisez, survivez',
          description: 'Votre Traffic Manager démissionne dans 2 semaines. Automatisez ce qui peut l\'être pour ne pas couler.',
          instructions: `<div class="cas-pratique-content">
  <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded mb-4">
    <strong>SLACK — #marketing-general — Lundi 9h15</strong><br>
    <span class="italic text-gray-700">@Thomas (Traffic Manager) : "Salut l'équipe. J'ai accepté une offre ailleurs, mon dernier jour est le 28. Désolé pour le timing."</span><br><br>
    <span class="italic text-gray-700">@Julie (Directrice Marketing) : "@vous Réunion d'urgence à 10h. Thomas gère 25k€/mois de budget Ads tout seul, entièrement en manuel. On a 2 semaines pour trouver comment ne pas perdre le contrôle."</span>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Ce que Thomas gère manuellement aujourd'hui :</h4>
  <div class="overflow-x-auto mb-4">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Tâche</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Temps/semaine</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Fréquence</th>
          <th class="border border-gray-300 px-3 py-2 text-left">Risque si non fait</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Ajustement enchères Google Ads</td>
          <td class="border border-gray-300 px-3 py-2 text-center">4h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2x/sem</td>
          <td class="border border-gray-300 px-3 py-2">CPA explose, budget gaspillé</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Reporting Excel pour Julie</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Hebdo</td>
          <td class="border border-gray-300 px-3 py-2">Pas de visibilité direction</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Ajout mots-clés négatifs</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Hebdo</td>
          <td class="border border-gray-300 px-3 py-2">Budget gaspillé sur requêtes inutiles</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Gestion budgets Facebook Ads</td>
          <td class="border border-gray-300 px-3 py-2 text-center">2h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Quotidien</td>
          <td class="border border-gray-300 px-3 py-2">Sur/sous-dépense</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Création audiences remarketing</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Mensuel</td>
          <td class="border border-gray-300 px-3 py-2">Perte de prospects chauds</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Pause/reprise campagnes saisonnières</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Mensuel</td>
          <td class="border border-gray-300 px-3 py-2">Diffusion hors saison</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">A/B test créas Facebook</td>
          <td class="border border-gray-300 px-3 py-2 text-center">3h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Hebdo</td>
          <td class="border border-gray-300 px-3 py-2">Fatigue créative, CTR baisse</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Sync CRM → Audiences Custom</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1h</td>
          <td class="border border-gray-300 px-3 py-2 text-center">Mensuel</td>
          <td class="border border-gray-300 px-3 py-2">Ciblage obsolète</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm text-gray-600 mb-4"><strong>Total :</strong> ~17h/semaine de travail manuel. Le stagiaire ne peut en absorber que 5h.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Ressources disponibles :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>GA4 avec événements e-commerce + CRM de 15 000 clients</li>
    <li>Historique de 2 ans de campagnes (500+ conversions/mois)</li>
    <li>Budget outils : 500€/mois max</li>
    <li>Le stagiaire peut exécuter mais pas concevoir</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-3 text-gray-800">
    <li><strong>Triez le backlog</strong> : Pour chaque tâche, décidez — Automatiser (outil/règle), Déléguer (stagiaire), Supprimer (pas critique), Garder manuel (trop risqué). Justifiez.</li>
    <li><strong>Plan d'urgence J-14</strong> : Qu'est-ce qui DOIT être automatisé avant le départ de Thomas ? Classez par priorité avec outil recommandé (Google Rules, Smart Bidding, Looker Studio, Zapier...).</li>
    <li><strong>Smart Bidding</strong> : Thomas gérait les enchères manuellement (4h/sem). Proposez une stratégie Smart Bidding pour prendre le relais. Quel type ? Quel CPA cible ? Quelle période d'apprentissage prévoir ?</li>
    <li><strong>Chiffrez le risque</strong> : Si rien n'est fait et que le stagiaire gère seul en manuel, estimez la perte en € sur le premier mois (indices : CPA actuel 22€, 500 conversions/mois, un débutant fait en moyenne +40% de CPA).</li>
  </ol>

  <div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
    <strong>Le vrai enseignement :</strong> L'automatisation n'est pas un luxe. C'est une assurance contre la dépendance à une seule personne. Chaque tâche manuelle est un risque.
  </div>
</div>`,
          expectedOutput: 'Backlog trié (automatiser/déléguer/supprimer/garder), plan J-14 avec outils, stratégie Smart Bidding détaillée, et estimation du risque financier',
          hints: [
            'Le Smart Bidding Target CPA est le remplacement naturel de l\'ajustement manuel des enchères : il faut 30+ conversions/mois (ici 500 = largement suffisant)',
            'Le reporting Excel → Looker Studio est le quick win le plus évident : 3h/semaine récupérées en 1 jour de setup',
            'Attention : passer en Smart Bidding pendant la période de transition est risqué. Prévoyez une phase de learning de 2-3 semaines avec budget conservateur.'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">1. Tri du backlog : Automatiser / Déléguer / Supprimer</h2>

  <div class="project-type">
    <h3 class="project-type-title">⚙️ AUTOMATISER (11h/semaine libérées)</h3>
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full bg-white border border-gray-300 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-3 py-2 text-left">Tâche manuelle</th>
            <th class="border border-gray-300 px-3 py-2 text-center">Temps actuel</th>
            <th class="border border-gray-300 px-3 py-2 text-left">Solution d'automatisation</th>
            <th class="border border-gray-300 px-3 py-2 text-center">Temps après</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Enchères Google Ads</td>
            <td class="border border-gray-300 px-3 py-2 text-center">4h/sem</td>
            <td class="border border-gray-300 px-3 py-2">Smart Bidding Target CPA</td>
            <td class="border border-gray-300 px-3 py-2 text-center">30min/sem (monitoring)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Reporting Excel</td>
            <td class="border border-gray-300 px-3 py-2 text-center">3h/sem</td>
            <td class="border border-gray-300 px-3 py-2">Looker Studio automatique (connecté GA4 + Ads + Facebook)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">0 (auto)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Mots-clés négatifs</td>
            <td class="border border-gray-300 px-3 py-2 text-center">2h/sem</td>
            <td class="border border-gray-300 px-3 py-2">Règles automatiques Google Ads (termes de recherche > coût, 0 conversion → exclu auto)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">15min/sem (vérif)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Budgets Facebook</td>
            <td class="border border-gray-300 px-3 py-2 text-center">2h/sem</td>
            <td class="border border-gray-300 px-3 py-2">Campaign Budget Optimization (CBO)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">15min/sem (monitoring)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Sync CRM</td>
            <td class="border border-gray-300 px-3 py-2 text-center">1h/mois</td>
            <td class="border border-gray-300 px-3 py-2">Zapier automation (CRM → Google Ads Customer Match)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">0 (auto)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">👤 DÉLÉGUER au stagiaire (avec process documenté par Thomas)</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>A/B test créas Facebook :</strong> Thomas documente le process (quels visuels tester, comment mesurer, quand arrêter). Le stagiaire exécute avec checklist.</li>
        <li><strong>Pause/reprise campagnes saisonnières :</strong> Checklist simple (quelles campagnes, quand, à quel budget). Aucune expertise nécessaire.</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">❌ SUPPRIMER</h3>
    <div class="project-detail">
      <strong>Rien à supprimer.</strong> Avec 25k€/mois de budget média en jeu, chaque tâche a un impact financier direct. La question n'est pas "faut-il le faire ?" mais "qui/quoi le fait à la place de Thomas ?".
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Plan J-14 : la transition avant le départ de Thomas</h2>

  <div class="project-type">
    <h3 class="project-type-title">J1-J3 : Documentation complète</h3>
    <div class="project-detail">
      <strong>Thomas documente TOUT :</strong>
      <ul class="feature-list">
        <li><strong>Accès :</strong> Tous les comptes (Google Ads, Facebook Business Manager, GA4, CRM) avec identifiants dans un gestionnaire de mots de passe</li>
        <li><strong>Process :</strong> Checklist pour chaque tâche récurrente (enchères, négatifs, reporting, A/B test)</li>
        <li><strong>Logique actuelle :</strong> Pourquoi les enchères sont à tel niveau, quelles campagnes sont prioritaires, quel CPA viser par campagne</li>
        <li><strong>Historique :</strong> Ce qui a marché/échoué les 6 derniers mois</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">J3-J5 : Smart Bidding Target CPA</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Action :</strong> Activer Smart Bidding Target CPA à 22€ (CPA actuel = base conservatrice) sur les campagnes Google Ads principales</li>
        <li><strong>Budget test :</strong> Les premiers jours, limiter à 80% du budget habituel pour absorber la volatilité</li>
        <li><strong>Monitoring :</strong> Vérifier quotidiennement que le CPA ne dépasse pas 30€</li>
        <li><strong>Thomas supervise :</strong> Il est encore là pour corriger si le Smart Bidding déraille</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">J5-J7 : Looker Studio</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Action :</strong> Créer un dashboard Looker Studio connecté à GA4 + Google Ads + Facebook Ads</li>
        <li><strong>Contenu :</strong> CA, ROAS, CPA, conversions par canal, tendances 7j/30j, alertes visuelles</li>
        <li><strong>Remplace :</strong> Le reporting Excel hebdomadaire (3h/sem économisées)</li>
        <li><strong>Partage :</strong> Lien automatique envoyé chaque lundi matin par email</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">J7-J10 : Règles automatiques</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Pause si CPA > 35€ :</strong> Règle Google Ads - pause automatique des groupes d'annonces déficitaires</li>
        <li><strong>Alerte si budget > 80% :</strong> Notification email/Slack si le budget journalier est presque épuisé</li>
        <li><strong>Mots-clés négatifs automatiques :</strong> Termes de recherche avec coût > 50€ et 0 conversion → ajout automatique en négatif</li>
        <li><strong>Thomas valide :</strong> Il vérifie que les règles sont bien paramétrées avant de partir</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">J10-J14 : Finalisation</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>CBO Facebook :</strong> Activer Campaign Budget Optimization sur les campagnes principales</li>
        <li><strong>Zapier CRM :</strong> Setup de la synchronisation automatique CRM → Google Ads Customer Match</li>
        <li><strong>Formation stagiaire :</strong> Thomas forme le stagiaire sur les tâches déléguées (A/B test créas, pause/reprise saisonnières)</li>
        <li><strong>Test de résilience :</strong> Thomas ne touche plus rien pendant 2 jours, on vérifie que tout tourne</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Stratégie Smart Bidding détaillée</h2>

  <div class="project-type">
    <h3 class="project-type-title">Pourquoi Target CPA (et pas Target ROAS ou Maximize Conversions) ?</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Target CPA à 22€ :</strong> CPA actuel de Thomas = base conservatrice. On dit à Google "fais au moins aussi bien que l'humain".</li>
        <li><strong>500 conversions/mois :</strong> Largement au-dessus du minimum de 30 conversions/mois requis par Google. L'algorithme a assez de données pour apprendre.</li>
        <li><strong>Pas Target ROAS :</strong> Plus complexe, nécessite des valeurs de conversion précises. Target CPA est plus simple à piloter pour un non-expert.</li>
        <li><strong>Pas Maximize Conversions :</strong> Risque de flambée du CPA sans plafond. Trop risqué sans expert pour surveiller.</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Période d'apprentissage</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Durée :</strong> 2-3 semaines de "learning period"</li>
        <li><strong>Comportement attendu :</strong> CPA peut monter de +20-30% pendant l'apprentissage</li>
        <li><strong>Budget de sécurité :</strong> Prévoir +15% de budget pour absorber la volatilité initiale</li>
        <li><strong>NE PAS toucher :</strong> Surtout ne pas changer le CPA cible pendant les 2 premières semaines (l'algorithme a besoin de stabilité)</li>
        <li><strong>Après stabilisation :</strong> Baisser progressivement le CPA cible de 1-2€ par semaine si les résultats sont bons</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Chiffrage du risque : que se passe-t-il si rien n'est fait ?</h2>

  <div class="example-box">
    <strong>Situation actuelle (Thomas) :</strong><br>
    • CPA actuel : 22€<br>
    • Budget mensuel : 25 000€<br>
    • Conversions estimées : ~500/mois (réparti 60/40 Google/Facebook)<br>
    • CA généré : performant et optimisé manuellement depuis 2 ans<br><br>

    <strong>Scénario sans automatisation (débutant ou personne) :</strong><br>
    • Un non-expert fait typiquement +40% de CPA → nouveau CPA : 30,8€<br>
    • Pour le même budget de 25k€ : seulement ~812 conversions au lieu de ~1 136<br>
    • Perte : environ 324 conversions perdues<br>
    • En CA : estimation de perte de 5 000€ à 8 000€ par mois<br>
    • <strong>Sur 3 mois sans remplaçant :</strong> 15 000€ à 24 000€ de CA perdu
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Comparaison des scénarios</h3>
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full bg-white border border-gray-300 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-3 py-2 text-left">Scénario</th>
            <th class="border border-gray-300 px-3 py-2 text-center">CPA</th>
            <th class="border border-gray-300 px-3 py-2 text-center">Conversions/mois</th>
            <th class="border border-gray-300 px-3 py-2 text-center">Risque</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Thomas (actuel)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">22€</td>
            <td class="border border-gray-300 px-3 py-2 text-center">~500</td>
            <td class="border border-gray-300 px-3 py-2 text-center">Aucun</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-3 py-2">Avec automatisation (plan J-14)</td>
            <td class="border border-gray-300 px-3 py-2 text-center">22-26€</td>
            <td class="border border-gray-300 px-3 py-2 text-center">~420-500</td>
            <td class="border border-gray-300 px-3 py-2 text-center">Faible (learning period)</td>
          </tr>
          <tr class="bg-red-50">
            <td class="border border-gray-300 px-3 py-2">Sans rien faire</td>
            <td class="border border-gray-300 px-3 py-2 text-center">30-35€</td>
            <td class="border border-gray-300 px-3 py-2 text-center">~350</td>
            <td class="border border-gray-300 px-3 py-2 text-center">Élevé (5-8k€ perte/mois)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Conclusion : le coût de l'inaction est bien supérieur au risque de l'automatisation</h3>
    <ul class="correction-list">
      <li><strong>Risque Smart Bidding :</strong> +20-30% CPA pendant 2-3 semaines = ~2 000-3 000€ de surcoût temporaire</li>
      <li><strong>Risque sans rien faire :</strong> +40% CPA permanent = 5 000-8 000€ de perte CHAQUE mois</li>
      <li><strong>Conclusion :</strong> Même dans le pire scénario, l'automatisation coûte 3x moins que l'inaction</li>
      <li><strong>Bonus :</strong> Après la période d'apprentissage, le Smart Bidding fait souvent MIEUX que l'humain (il enchérit 24/7, pas seulement aux heures de bureau)</li>
    </ul>
  </div>
</div>`,
        quiz: [
          {
            id: 'q-auto-1',
            question: 'Quel est le prérequis minimum pour activer le Smart Bidding Target CPA ?',
            options: [
              '10 conversions par mois',
              '30 conversions par mois',
              '100 conversions par mois',
              '500 conversions par mois'
            ],
            correctAnswer: 1,
            explanation: 'Google recommande au minimum 30 conversions par mois pour que l\'algorithme de Smart Bidding ait suffisamment de données pour apprendre efficacement.'
          },
          {
            id: 'q-auto-2',
            question: 'Quelle est la meilleure source pour créer une audience similaire performante ?',
            options: [
              'Tous les visiteurs du site',
              'Les clients avec la LTV la plus élevée (top 20%)',
              'Les abonnés newsletter',
              'Les visiteurs qui ont vu 3 pages'
            ],
            correctAnswer: 1,
            explanation: 'Les clients avec la LTV la plus élevée représentent la meilleure source car ils ont la plus forte valeur business, permettant à l\'algorithme de trouver des profils similaires rentables.'
          }
        ]
      },
      {
        id: 'atelier-budget-multicanal',
        title: 'Atelier Pratique : Optimisation budgétaire multi-canal',
        description: 'Analysez Google Ads, Meta Ads et Analytics pour proposer une réallocation budgétaire optimale',
        type: 'case-study',
        difficulty: 'avancé',
        duration: '45 min',
        content: `<div class="section-content">
  <h1 class="section-title">Optimisation budgétaire multi-canal</h1>

  <p class="section-text">Déco Charpente investit <strong>40 000€/an en Google Ads</strong> et seulement <strong>2 500€/an en Meta Ads</strong>. Le trafic organique varie énormément selon la saison. Comment optimiser la répartition budgétaire ?</p>

  <h2 class="section-subtitle">Les canaux en présence</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Google Ads (94% du budget)</h4>
      <ul class="deliverable-list">
        <li>Budget : ~40 000€/an</li>
        <li>30+ campagnes par concessionnaire</li>
        <li>Mots-clés : carport, pergola, abri</li>
        <li>Intention forte (recherche active)</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">Meta Ads (6% du budget)</h4>
      <ul class="deliverable-list">
        <li>Budget : ~2 500€/an</li>
        <li>12 campagnes (leads + trafic)</li>
        <li>CPL : 10,42€ | CPC : 0,10€</li>
        <li>Audience large, notoriété + leads</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">SEO / Organique (gratuit)</h4>
      <ul class="deliverable-list">
        <li>~8 000 clics/mois</li>
        <li>484 mots-clés suivis</li>
        <li>Forte saisonnalité</li>
        <li>Dominant sur le brandé</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">La saisonnalité — facteur clé</h2>

  <div class="project-type">
    <div class="project-detail">
      <p>Déco Charpente vend des structures bois extérieures. La demande est <strong>ultra-saisonnière</strong> :</p>
      <ul class="feature-list">
        <li><strong>Pic : Mars → Mai</strong> (printemps) : les gens préparent l'été, pics de trafic à 1 900 visiteurs/semaine</li>
        <li><strong>Creux : Juillet → Août</strong> : les gens sont en vacances, pas en phase de projet</li>
        <li><strong>Bas : Octobre → Décembre</strong> : hors saison, trafic à 340 visiteurs/semaine</li>
      </ul>
      <p class="mt-4"><strong>Question stratégique :</strong> Faut-il dépenser autant en Ads toute l'année ou concentrer le budget sur les périodes chaudes ?</p>
    </div>
  </div>
</div>`,
        practicalExercise: {
          title: 'Réallocation budgétaire — Google Ads + Meta Ads + Organique',
          description: 'Croisez les 3 sources de données pour proposer un plan budgétaire mensuel optimisé',
          instructions: `<div class="cas-pratique-content">
  <h4 class="font-semibold text-purple-900 mb-4">📥 Fichiers à télécharger</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
    <a href="/data/serie-temporelle-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Série temporelle Google Ads</a>
    <a href="/data/campagnes-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Campagnes Google Ads</a>
    <a href="/data/meta-ads-2025.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Meta Ads 2025 (12 campagnes)</a>
    <a href="/data/analytics-aquisition.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Analytics — Acquisition (53 semaines)</a>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 1 — Analyse de la saisonnalité (10 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Ouvrez <strong>analytics-aquisition.csv</strong> et tracez la courbe du trafic sur 53 semaines</li>
    <li>Identifiez les <strong>3 pics</strong> et les <strong>3 creux</strong> de l'année</li>
    <li>Ouvrez <strong>serie-temporelle-gads.csv</strong> : le budget Google Ads suit-il la même saisonnalité ?</li>
    <li>Le budget est-il réparti uniformément ou concentré sur les pics ?</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 2 — Comparaison des canaux (15 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Dans <strong>campagnes-gads.csv</strong>, calculez le <strong>coût moyen par conversion</strong> Google Ads</li>
    <li>Dans <strong>meta-ads-2025.csv</strong>, calculez le <strong>coût par lead</strong> Meta Ads</li>
    <li>Comparez : quel canal a le meilleur <strong>coût par lead</strong> ?</li>
    <li>Meta Ads ne représente que 6% du budget — est-ce justifié au vu des performances ?</li>
    <li>Si on transférait 5 000€ de Google Ads vers Meta Ads, combien de leads supplémentaires peut-on espérer ?</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Étape 3 — Plan budgétaire mensuel (20 min)</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Créez un <strong>tableau à 12 colonnes</strong> (Jan → Déc) avec les lignes : Budget Google Ads, Budget Meta Ads, Budget Total</li>
    <li>Répartissez un <strong>budget annuel total de 42 500€</strong> (identique à l'actuel) de manière optimisée</li>
    <li>Principes : <strong>+budget sur mars-mai</strong> (haute saison), <strong>-budget sur juil-août</strong> (creux), maintien minimal en hiver</li>
    <li>Proposez une <strong>part Meta Ads augmentée</strong> avec justification (ex: 15% au lieu de 6%)</li>
    <li>Estimez le <strong>gain en leads</strong> vs la répartition actuelle (uniforme)</li>
  </ol>
</div>`,
          expectedOutput: 'Un tableau budgétaire mensuel réparti sur 12 mois entre Google Ads et Meta Ads, avec justification de la saisonnalité et estimation du gain en leads',
          hints: [
            'La saisonnalité du trafic organique est un bon proxy pour la demande : quand le trafic organique explose, la demande est forte → c\'est le moment d\'investir plus en Ads',
            'Meta Ads à 10€/lead est très compétitif vs Google Ads. Si le CPL Google Ads est à 40-80€, il y a un déséquilibre à corriger',
            'En basse saison, privilégiez la notoriété (Meta Ads, display) plutôt que le search (Google Ads) car le volume de recherche est faible'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correction — Budget multi-canal</h2>

  <div class="project-type">
    <h3 class="project-type-title">Saisonnalité attendue</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Pic absolu :</strong> Semaines 12-20 (mars-mai) — jusqu'à 1 936 visiteurs/semaine</li>
        <li><strong>Creux estival :</strong> Semaines 26-35 (juil-août) — chute de 26%</li>
        <li><strong>Creux hivernal :</strong> Semaines 40-52 (oct-déc) — minimum à 341/semaine</li>
        <li><strong>Constat :</strong> La demande varie d'un facteur 5,7x entre le pic et le creux</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Comparaison des canaux</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Google Ads :</strong> ~90 conversions pour 40K€ → CPL ~444€ (mais conversion = vente potentielle à 10K€)</li>
        <li><strong>Meta Ads :</strong> 243 leads pour 2,5K€ → CPL ~10€ (mais lead = formulaire, pas vente)</li>
        <li><strong>Attention :</strong> Les "conversions" ne mesurent pas la même chose ! Google Ads suit des actions plus engageantes</li>
        <li><strong>Recommandation :</strong> Meta Ads est sous-exploité pour la génération de leads froids à nurturer</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Plan budgétaire type (42 500€/an)</h3>
    <div class="project-detail">
      <strong>Répartition mensuelle optimisée :</strong>
      <ul class="feature-list">
        <li><strong>Janv-Fév :</strong> 2 500€/mois (préparation, Meta Ads notoriété)</li>
        <li><strong>Mars-Mai :</strong> 5 500€/mois (HAUTE SAISON — concentration maximale)</li>
        <li><strong>Juin :</strong> 4 000€/mois (transition)</li>
        <li><strong>Juil-Août :</strong> 1 500€/mois (minimum — budgets réduits)</li>
        <li><strong>Sept :</strong> 3 000€/mois (reprise)</li>
        <li><strong>Oct-Déc :</strong> 2 000€/mois (basse saison, notoriété Meta)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Répartition Google Ads / Meta Ads :</strong>
      <ul class="feature-list">
        <li>Haute saison : 80% Google Ads (intention forte) / 20% Meta (retargeting)</li>
        <li>Basse saison : 50% Google Ads / 50% Meta Ads (notoriété, audiences)</li>
        <li>Part Meta annuelle cible : <strong>15-20%</strong> au lieu de 6% actuellement</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Grille de notation :</strong><br>
    • Saisonnalité correctement identifiée : /4<br>
    • Comparaison pertinente des canaux (pas de raccourci) : /4<br>
    • Tableau budgétaire mensuel cohérent et réaliste : /6<br>
    • Justification argumentée avec estimations de gains : /6
  </div>
</div>`,
        quiz: [
          {
            id: 'q-budget-1',
            question: 'Une entreprise saisonnière dépense le même budget Ads chaque mois. Quel est le problème principal ?',
            options: [
              'Aucun, la régularité est une bonne stratégie',
              'Elle gaspille du budget en basse saison (peu de demande) et sous-investit en haute saison (forte demande)',
              'Elle devrait couper tout le budget en basse saison',
              'La saisonnalité n\'affecte pas les campagnes digitales'
            ],
            correctAnswer: 1,
            explanation: 'Un budget uniforme ignore la demande réelle. En basse saison, le CPC augmente car le volume de recherche diminue. En haute saison, on manque de budget quand la demande explose. Il faut concentrer 50-60% du budget sur les 3-4 mois de pic.'
          },
          {
            id: 'q-budget-2',
            question: 'Meta Ads génère des leads à 10€ vs Google Ads à 50€. Faut-il transférer tout le budget vers Meta ?',
            options: [
              'Oui, Meta est 5x moins cher donc 5x meilleur',
              'Non : les leads Meta (formulaire) et Google (recherche active) n\'ont pas la même qualité ni la même intention d\'achat. Il faut comparer le coût par vente finale, pas le coût par lead',
              'Oui si le budget total est inférieur à 50 000€',
              'Non car Meta Ads ne fonctionne pas en B2B'
            ],
            correctAnswer: 1,
            explanation: 'Le CPL seul ne suffit pas. Un lead Meta à 10€ remplit un formulaire (intention tiède). Un lead Google Ads à 50€ recherche activement "carport bois prix" (intention chaude). Le taux de conversion en vente finale est très différent. Il faut calculer le coût par vente, pas le coût par lead.'
          }
        ]
      },
      {
        id: 'atelier-recommandation-strategique',
        title: 'Atelier de synthèse : Recommandation stratégique au dirigeant',
        description: 'Mobilisez toutes les données pour livrer un bilan et un plan d\'action à la direction de Déco Charpente',
        type: 'case-study',
        difficulty: 'avancé',
        duration: '60 min',
        content: `<div class="section-content">
  <h1 class="section-title">Mission finale : Conseil stratégique</h1>

  <p class="section-text">Le directeur de Déco Charpente vous reçoit pour un point annuel. Il veut comprendre en 15 minutes : <strong>est-ce que nos investissements marketing fonctionnent ? Que faut-il changer ?</strong></p>

  <h2 class="section-subtitle">Le brief du directeur</h2>

  <div class="project-type">
    <div class="project-detail">
      <p><em>"On dépense 42 000€ par an en publicité digitale. Mon commercial me dit que les leads du web sont de mauvaise qualité. Mon agence me dit que les campagnes sont performantes. Je ne sais plus qui croire. J'ai besoin de quelqu'un qui regarde les données et me dise la vérité."</em></p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Ce qui est attendu de vous</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Format livrable</h4>
      <ul class="deliverable-list">
        <li>5 slides maximum (ou 2 pages)</li>
        <li>Langage business (pas de jargon technique)</li>
        <li>Des chiffres, pas des opinions</li>
        <li>3 recommandations actionnables</li>
      </ul>
    </div>
    <div class="deliverable-phase">
      <h4 class="phase-title">Questions à couvrir</h4>
      <ul class="deliverable-list">
        <li>Le marketing digital est-il rentable ?</li>
        <li>Quels canaux fonctionnent vs gaspillent ?</li>
        <li>La qualité des leads est-elle un vrai problème ?</li>
        <li>Que feriez-vous avec le même budget ?</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Vous disposez de toutes les données des ateliers précédents.</strong> C'est un exercice de synthèse : vous devez sélectionner les insights les plus percutants et les présenter de manière convaincante à un non-expert.
  </div>
</div>`,
        practicalExercise: {
          title: 'Préparez votre recommandation stratégique',
          description: 'Utilisez toutes les données des ateliers précédents pour construire un mini-deck de 5 slides',
          instructions: `<div class="cas-pratique-content">
  <h4 class="font-semibold text-purple-900 mb-4">📥 Tous les fichiers à disposition</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
    <a href="/data/campagnes-gads.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Google Ads</a>
    <a href="/data/meta-ads-2025.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Meta Ads</a>
    <a href="/data/Requêtes.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #059669, #10b981); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 SEO</a>
    <a href="/data/analytics-aquisition.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Analytics</a>
    <a href="/data/deals-pipedrive.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #dc2626, #ef4444); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 CRM</a>
    <a href="/data/rank-tracker.csv" download style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: linear-gradient(135deg, #059669, #10b981); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">📄 Rank Tracker</a>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Structure suggérée (5 slides)</h4>

  <div style="background: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
    <p style="font-weight: 700; color: #1f2937; margin-bottom: 12px;">Slide 1 — Bilan chiffré</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Budget total investi (Google Ads + Meta Ads)</li>
      <li>Nombre de leads générés</li>
      <li>Nombre de ventes signées (CRM)</li>
      <li>CA généré / ROI global estimé</li>
    </ul>
  </div>

  <div style="background: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
    <p style="font-weight: 700; color: #1f2937; margin-bottom: 12px;">Slide 2 — Performance par canal</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Google Ads : budget, leads, coût/lead, tendance vs N-1</li>
      <li>Meta Ads : budget, leads, coût/lead</li>
      <li>SEO : trafic organique, évolution, mots-clés stratégiques</li>
      <li>Verdict : quel canal surperforme / sous-performe ?</li>
    </ul>
  </div>

  <div style="background: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
    <p style="font-weight: 700; color: #1f2937; margin-bottom: 12px;">Slide 3 — Le problème de qualité des leads</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Taux de conversion du pipeline (CRM) : Leads → RDV → Devis → Vente</li>
      <li>Raisons de perte les plus fréquentes</li>
      <li>Le commercial a-t-il raison ? (données à l'appui)</li>
    </ul>
  </div>

  <div style="background: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
    <p style="font-weight: 700; color: #1f2937; margin-bottom: 12px;">Slide 4 — 3 Recommandations</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Recommandation 1 (Quick Win) : action rapide, gain immédiat</li>
      <li>Recommandation 2 (Moyen terme) : optimisation structurelle</li>
      <li>Recommandation 3 (Long terme) : stratégie de fond</li>
      <li>Pour chaque : action, coût, gain estimé, délai</li>
    </ul>
  </div>

  <div style="background: #f3f4f6; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
    <p style="font-weight: 700; color: #1f2937; margin-bottom: 12px;">Slide 5 — KPIs de suivi</p>
    <ul class="list-disc list-inside space-y-1 text-gray-800">
      <li>Les 5 indicateurs que le directeur devrait suivre chaque mois</li>
      <li>Format simple : métrique, valeur actuelle, objectif à 6 mois</li>
    </ul>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Restitution orale (5 min par groupe)</h4>
  <p class="text-gray-800">Présentez votre recommandation comme si le directeur était devant vous. Il ne connaît pas le jargon marketing : soyez clairs, visuels, et allez droit au but. Il veut des réponses, pas des analyses.</p>
</div>`,
          expectedOutput: 'Un mini-deck de 5 slides avec bilan chiffré, analyse par canal, diagnostic qualité des leads, 3 recommandations et KPIs de suivi',
          hints: [
            'Le directeur veut savoir SI son argent est bien dépensé, pas COMMENT fonctionne Google Ads. Parlez en euros et en ventes, pas en CTR et CPC.',
            'Appuyez-vous sur les données CRM pour répondre à la question "les leads sont-ils de mauvaise qualité" — c\'est la preuve concrète',
            'Une bonne recommandation = Action + Coût + Gain estimé + Délai. Pas juste "il faut optimiser les campagnes"',
            'Préparez une réponse pour "pourquoi Meta Ads ne reçoit que 6% du budget alors que le CPL est 5x moins cher ?"'
          ]
        },
        teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correction — Recommandation stratégique</h2>

  <div class="project-type">
    <h3 class="project-type-title">Slide 1 — Bilan attendu</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li>Budget total : ~42 500€/an (40K Google + 2,5K Meta)</li>
        <li>Le ROI dépend du nombre de ventes attribuables au digital : à estimer via CRM</li>
        <li>Si 20% des deals CRM viennent du digital (~150 deals) × 10K€ panier moyen = <strong>1,5M€ de CA pour 42K€ investis</strong></li>
        <li>ROI théorique : 35:1 — <strong>le marketing digital est très rentable</strong></li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Slide 3 — Qualité des leads (réponse au directeur)</h3>
    <div class="project-detail">
      <strong>Le commercial a partiellement raison, MAIS :</strong>
      <ul class="feature-list">
        <li>Les leads "sans réponse" (pas joignables) sont un problème de <strong>suivi CRM</strong>, pas de qualité marketing</li>
        <li>Les leads "pas de projet cette année" arrivent trop tôt → il manque un <strong>système de nurturing</strong></li>
        <li>Les leads "a construit en dur" sont effectivement hors cible → <strong>améliorer le ciblage Ads</strong></li>
        <li>Conclusion : 50% des pertes sont un problème commercial/process, 30% un problème marketing, 20% incompressible</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3 Recommandations types</h3>
    <div class="project-detail">
      <strong>Quick Win :</strong> Ajouter des mots-clés négatifs dans Google Ads (éco : 3-5K€/an, 0€ de coût, 1 semaine)
    </div>
    <div class="project-detail">
      <strong>Moyen terme :</strong> Tripler le budget Meta Ads (de 2,5K à 7,5K) en transférant depuis les campagnes Google Ads sous-performantes. Gain estimé : +200 leads/an
    </div>
    <div class="project-detail">
      <strong>Long terme :</strong> Mettre en place un nurturing email (coût : 500€/an de plateforme). Objectif : convertir les 30% de leads "pas de projet maintenant" en clients à 6-12 mois
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5 KPIs de suivi</h3>
    <div class="project-detail">
      <ul class="feature-list">
        <li><strong>Coût par lead qualifié</strong> (pas juste le CPL brut) → Objectif : < 30€</li>
        <li><strong>Taux de conversion Pipeline</strong> (Prospect → Vente) → Objectif : > 20%</li>
        <li><strong>ROAS Google Ads</strong> → Objectif : > 10:1</li>
        <li><strong>Part du trafic organique</strong> vs payant → Objectif : 60% organique</li>
        <li><strong>CA attribué au digital</strong> / mois → Suivi tendance</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Grille de notation :</strong><br>
    • Bilan chiffré avec ROI estimé : /4<br>
    • Analyse par canal pertinente et honnête : /4<br>
    • Réponse argumentée sur la qualité des leads : /4<br>
    • Recommandations actionnables et chiffrées : /4<br>
    • Clarté de la présentation orale : /4
  </div>
</div>`,
        quiz: [
          {
            id: 'q-strat-1',
            question: 'Un directeur vous demande "est-ce que nos 42 000€ de pub sont rentables ?". Quelle est la meilleure façon de répondre ?',
            options: [
              '"Oui, votre CTR est de 3,5% ce qui est au-dessus du benchmark"',
              '"Il faudrait faire un audit complet de 3 mois avant de répondre"',
              '"Vos campagnes ont généré environ X leads qui ont donné Y ventes pour Z€ de CA, soit un retour de W€ pour chaque euro investi"',
              '"Non, le CPC a augmenté de 15% cette année"'
            ],
            correctAnswer: 2,
            explanation: 'Un dirigeant veut une réponse en euros et en résultats business, pas en métriques techniques. La chaîne complète euros investis → leads → ventes → CA est la seule réponse pertinente.'
          },
          {
            id: 'q-strat-2',
            question: 'Quelle recommandation est la mieux formulée pour un directeur non-expert ?',
            options: [
              '"Il faut optimiser le quality score de vos mots-clés et améliorer le CTR des annonces responsive"',
              '"Arrêtez tout Google Ads, c\'est trop cher"',
              '"En ajoutant 50 mots-clés négatifs dans Google Ads, vous économiserez environ 4 000€/an sans perdre de leads. C\'est faisable en 1 semaine, coût : 0€"',
              '"Le ROAS de vos campagnes search devrait être supérieur au benchmark B2B de votre secteur"'
            ],
            correctAnswer: 2,
            explanation: 'Une bonne recommandation pour un dirigeant contient 4 éléments : l\'action concrète, le gain chiffré, le coût, et le délai. Pas de jargon technique.'
          }
        ]
      }
    ]
  }
];

// Export principal
export const allLearningModules = unifiedLearningPath;

// Fonction utilitaire pour encoder le mot de passe enseignant
const teacherPassword = 'racaille2026';

export { teacherPassword };
