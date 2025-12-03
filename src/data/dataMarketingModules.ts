export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface CasPratique {
  title: string
  description: string
  exercice: string
  correction?: string
}

export interface Section {
  id: string
  title: string
  content: string
  casePratique?: CasPratique
  quiz?: QuizQuestion[]
}

export interface DataMarketingModule {
  id: string
  title: string
  description: string
  sections: Section[]
}

export const dataMarketingModules: DataMarketingModule[] = [
  {
    id: 'fondements',
    title: 'Fondements du data marketing',
    description: 'Comprendre les bases et la philosophie du marketing basé sur les données',
    sections: [
      {
        id: 'definition-data-marketing',
        title: 'Qu\'est-ce que le data marketing ?',
        content: `<div class="section-content">
  <h1 class="section-title">Le Data Marketing : Une révolution stratégique</h1>

  <h2 class="section-subtitle">Définition</h2>

  <p class="section-text">Le data marketing est l'art de transformer des données brutes en décisions business actionnables. Il s'agit d'une approche scientifique du marketing qui s'appuie sur la collecte, l'analyse et l'interprétation de données pour optimiser les performances commerciales.</p>

  <h2 class="section-subtitle mt-8">Les 3 piliers du data marketing</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Collecte de données</h3>
    
    <div class="project-detail">
      <strong>Sources principales :</strong>
      <ul class="feature-list">
        <li>Google Analytics (comportement site web)</li>
        <li>Plateformes publicitaires (Google Ads, Meta Ads)</li>
        <li>CRM (données clients)</li>
        <li>Réseaux sociaux (engagement, portée)</li>
        <li>Email marketing (ouvertures, clics)</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Objectif :</strong> Avoir une vision 360° du parcours client
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Analyse et interprétation</h3>
    
    <div class="project-detail">
      <strong>Compétences clés :</strong>
      <ul class="feature-list">
        <li>Calcul et interprétation des KPIs</li>
        <li>Identification des corrélations</li>
        <li>Segmentation des audiences</li>
        <li>Analyse des tendances</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Objectif :</strong> Transformer les chiffres en insights business
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Optimisation et action</h3>
    
    <div class="project-detail">
      <strong>Applications concrètes :</strong>
      <ul class="feature-list">
        <li>Réallocation des budgets publicitaires</li>
        <li>Personnalisation des messages</li>
        <li>Amélioration de l'expérience utilisateur</li>
        <li>Prédiction des comportements</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Objectif :</strong> Maximiser le ROI marketing
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Pourquoi le data marketing est-il incontournable ?</h2>

  <div class="value-type">
    <h3 class="value-title">1. Fin du marketing "à l'intuition"</h3>
    <ul class="feature-list">
      <li>Les consommateurs laissent des traces numériques</li>
      <li>Chaque action est mesurable</li>
      <li>La concurrence utilise déjà les données</li>
      <li>Les budgets marketing sont scrutés au ROI</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">2. Avantages compétitifs</h3>
    <ul class="feature-list">
      <li><strong>Précision :</strong> Cibler les bonnes personnes au bon moment</li>
      <li><strong>Efficacité :</strong> Réduire le gaspillage publicitaire</li>
      <li><strong>Personnalisation :</strong> Messages adaptés à chaque segment</li>
      <li><strong>Prédictibilité :</strong> Anticiper les tendances et comportements</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Exemple concret :</strong> Netflix utilise les données de visionnage pour recommander des contenus personnalisés, générant 80% de l'engagement sur la plateforme.
  </div>

  <h2 class="section-subtitle mt-8">Le profil du data marketer moderne</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Compétences techniques</h4>
      <ul class="deliverable-list">
        <li>Google Analytics & Search Console</li>
        <li>Plateformes publicitaires</li>
        <li>Outils de visualisation (Tableau, Power BI)</li>
        <li>Bases de données (SQL)</li>
        <li>Excel/Google Sheets avancé</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Compétences business</h4>
      <ul class="deliverable-list">
        <li>Compréhension des enjeux commerciaux</li>
        <li>Capacité de synthèse</li>
        <li>Communication des insights</li>
        <li>Recommandations stratégiques</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Soft skills</h4>
      <ul class="deliverable-list">
        <li>Curiosité et esprit critique</li>
        <li>Rigueur méthodologique</li>
        <li>Capacité d'adaptation</li>
        <li>Pédagogie (expliquer simplement)</li>
      </ul>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Diagnostic data marketing d\'une entreprise',
          description: 'Évaluer la maturité data d\'une startup e-commerce',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous rejoignez une startup e-commerce de mode (2 ans d'existence, 50k€ de CA mensuel) en tant que data marketer. Voici ce que vous découvrez :</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Situation actuelle :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Google Analytics installé mais jamais consulté</li>
    <li>Campagnes Facebook Ads gérées "au feeling"</li>
    <li>Aucun suivi des conversions configuré</li>
    <li>Budget pub : 8k€/mois répartis 70% Facebook, 30% Google</li>
    <li>Taux de conversion site : inconnu</li>
    <li>Panier moyen : 45€</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Identifiez les <strong>3 problèmes majeurs</strong> de cette situation</li>
    <li>Proposez un <strong>plan d'action en 30 jours</strong> pour poser les bases du data marketing</li>
    <li>Définissez les <strong>5 KPIs prioritaires</strong> à suivre dès le premier mois</li>
    <li>Estimez le <strong>gain potentiel</strong> d'une approche data-driven sur 6 mois</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">1. Les 3 problèmes majeurs identifiés</h2>

  <div class="project-type">
    <h3 class="project-type-title">Problème 1 : Cécité totale sur les performances</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Impossible d'optimiser sans mesurer
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Gaspillage budgétaire (campagnes non rentables maintenues)</li>
        <li>Opportunités manquées (canaux performants sous-exploités)</li>
        <li>Décisions basées sur des impressions, pas des faits</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 2 : Absence de tracking des conversions</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Impossible de calculer le ROI réel
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Répartition budgétaire arbitraire (70/30 sans justification)</li>
        <li>Pas d'attribution des ventes aux canaux</li>
        <li>Optimisation des plateformes impossible</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 3 : Méconnaissance du comportement client</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Stratégie marketing générique
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Messages non personnalisés</li>
        <li>Ciblage approximatif</li>
        <li>Taux de conversion sous-optimal</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Plan d'action 30 jours - Fondations data</h2>

  <div class="value-type">
    <h3 class="value-title">Semaine 1 : Audit et configuration tracking</h3>
    <ul class="correction-list">
      <li><strong>Jour 1-2 :</strong> Audit complet GA4, vérification du code de suivi</li>
      <li><strong>Jour 3-4 :</strong> Configuration des conversions (achat, ajout panier, inscription newsletter)</li>
      <li><strong>Jour 5-7 :</strong> Installation pixels Facebook et Google Ads avec suivi conversions</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Semaine 2 : Connexions et intégrations</h3>
    <ul class="correction-list">
      <li><strong>Jour 8-10 :</strong> Connexion GA4 ↔ Google Ads pour import des conversions</li>
      <li><strong>Jour 11-12 :</strong> Configuration Facebook Conversions API</li>
      <li><strong>Jour 13-14 :</strong> Mise en place Google Tag Manager pour centraliser le tracking</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Semaine 3 : Premiers rapports et analyse</h3>
    <ul class="correction-list">
      <li><strong>Jour 15-17 :</strong> Création des premiers dashboards (GA4 + Google Data Studio)</li>
      <li><strong>Jour 18-19 :</strong> Analyse des données historiques disponibles</li>
      <li><strong>Jour 20-21 :</strong> Identification des segments d'audience performants</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Semaine 4 : Optimisations rapides</h3>
    <ul class="correction-list">
      <li><strong>Jour 22-24 :</strong> Première réallocation budgétaire basée sur les données</li>
      <li><strong>Jour 25-26 :</strong> Optimisation des campagnes les moins performantes</li>
      <li><strong>Jour 27-30 :</strong> Mise en place d'alertes automatiques et reporting hebdomadaire</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Les 5 KPIs prioritaires à suivre</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. ROAS (Return On Ad Spend) par canal</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> Chiffre d'affaires généré / Coût publicitaire
    </div>
    <div class="project-detail">
      <strong>Objectif :</strong> ROAS > 3:1 (3€ de CA pour 1€ investi)
    </div>
    <div class="project-detail">
      <strong>Pourquoi prioritaire :</strong> Mesure directe de la rentabilité publicitaire
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Taux de conversion global du site</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> (Nombre de commandes / Nombre de visiteurs) × 100
    </div>
    <div class="project-detail">
      <strong>Objectif :</strong> 2-3% pour un e-commerce mode
    </div>
    <div class="project-detail">
      <strong>Pourquoi prioritaire :</strong> Indicateur clé de l'efficacité du site
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. CPA (Coût Par Acquisition) par canal</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> Coût publicitaire / Nombre de conversions
    </div>
    <div class="project-detail">
      <strong>Objectif :</strong> CPA < 30% du panier moyen (13,5€ max avec PM à 45€)
    </div>
    <div class="project-detail">
      <strong>Pourquoi prioritaire :</strong> Contrôle des coûts d'acquisition
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Panier moyen par source de trafic</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> Chiffre d'affaires / Nombre de commandes
    </div>
    <div class="project-detail">
      <strong>Objectif :</strong> Identifier les canaux qui amènent les meilleurs clients
    </div>
    <div class="project-detail">
      <strong>Pourquoi prioritaire :</strong> Optimiser la valeur, pas seulement le volume
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5. Taux d'abandon panier</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> (Paniers créés - Commandes finalisées) / Paniers créés × 100
    </div>
    <div class="project-detail">
      <strong>Objectif :</strong> < 70% (moyenne e-commerce)
    </div>
    <div class="project-detail">
      <strong>Pourquoi prioritaire :</strong> Potentiel d'amélioration immédiat du CA
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Gain potentiel estimé sur 6 mois</h2>

  <div class="value-type">
    <h3 class="value-title">Hypothèses de départ</h3>
    <ul class="correction-list">
      <li>CA actuel : 50k€/mois</li>
      <li>Budget pub : 8k€/mois</li>
      <li>ROAS actuel estimé : 2:1 (non optimisé)</li>
      <li>Taux de conversion estimé : 1,5%</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Gains attendus avec approche data-driven</h3>
    <ul class="correction-list">
      <li><strong>Optimisation ROAS :</strong> Passage de 2:1 à 3,5:1 (+75%)</li>
      <li><strong>Amélioration conversion :</strong> 1,5% → 2,2% (+47%)</li>
      <li><strong>Réallocation budgétaire :</strong> +20% d'efficacité</li>
      <li><strong>Réduction gaspillage :</strong> -15% de coûts inutiles</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Impact financier estimé :</strong>
    <br>
    • CA mensuel : 50k€ → 73k€ (+46%)
    <br>
    • ROAS global : 2:1 → 3,5:1 (+75%)
    <br>
    • Gain sur 6 mois : +138k€ de CA supplémentaire
    <br>
    • ROI de l'investissement data : 1500%+ (coût data marketer vs gains)
  </div>

  <div class="value-type">
    <h3 class="value-title">Conditions de réussite</h3>
    <ul class="correction-list">
      <li>Engagement de la direction sur les recommandations data</li>
      <li>Budget test pour les optimisations (10% du budget pub)</li>
      <li>Accès à tous les outils et données</li>
      <li>Collaboration étroite avec l'équipe technique</li>
    </ul>
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-fond-1',
            question: 'Quel est le principal objectif du data marketing ?',
            options: [
              'Collecter le maximum de données possibles',
              'Transformer les données en décisions business actionnables',
              'Remplacer complètement l\'intuition marketing',
              'Automatiser toutes les campagnes publicitaires'
            ],
            correctAnswer: 1,
            explanation: 'Le data marketing vise à transformer les données brutes en insights exploitables pour prendre de meilleures décisions business et optimiser les performances.'
          },
          {
            id: 'q-fond-2',
            question: 'Quels sont les 3 piliers fondamentaux du data marketing ?',
            options: [
              'Collecte, Stockage, Archivage',
              'Analytics, Publicité, Social Media',
              'Collecte, Analyse, Optimisation',
              'Mesure, Reporting, Présentation'
            ],
            correctAnswer: 2,
            explanation: 'Les 3 piliers sont : 1) Collecte de données, 2) Analyse et interprétation, 3) Optimisation et action. C\'est un cycle complet de la donnée à l\'action.'
          },
          {
            id: 'q-fond-3',
            question: 'Pourquoi le data marketing est-il devenu incontournable ?',
            options: [
              'C\'est une mode passagère du digital',
              'Les budgets marketing sont scrutés au ROI et la concurrence l\'utilise',
              'C\'est obligatoire légalement',
              'C\'est plus facile que le marketing traditionnel'
            ],
            correctAnswer: 1,
            explanation: 'Le data marketing est incontournable car les entreprises doivent justifier leurs investissements marketing avec des ROI précis, et la concurrence qui l\'utilise obtient un avantage compétitif.'
          },
          {
            id: 'q-fond-4',
            question: 'Quelle compétence N\'EST PAS essentielle pour un data marketer ?',
            options: [
              'Maîtrise de Google Analytics',
              'Capacité de synthèse et communication',
              'Programmation en C++',
              'Compréhension des enjeux business'
            ],
            correctAnswer: 2,
            explanation: 'La programmation en C++ n\'est pas nécessaire pour un data marketer. Les compétences clés sont les outils marketing (GA, plateformes pub), la communication des insights et la compréhension business.'
          },
          {
            id: 'q-fond-5',
            question: 'Quel est l\'avantage principal de Netflix grâce au data marketing ?',
            options: [
              'Réduire les coûts de production',
              'Générer 80% de l\'engagement via des recommandations personnalisées',
              'Augmenter le prix des abonnements',
              'Réduire le nombre de contenus'
            ],
            correctAnswer: 1,
            explanation: 'Netflix utilise les données de visionnage pour créer des recommandations personnalisées qui génèrent 80% de l\'engagement sur la plateforme, maximisant la rétention des utilisateurs.'
          }
        ]
      }
    ]
  },
  {
    id: 'kpis-metriques',
    title: 'KPIs et métriques essentielles',
    description: 'Maîtriser les indicateurs clés du marketing digital et leur interprétation',
    sections: [
      {
        id: 'kpis-acquisition',
        title: 'Métriques d\'acquisition de trafic',
        content: `<div class="section-content">
  <h1 class="section-title">Métriques d'acquisition : Attirer les bons visiteurs</h1>

  <p class="section-text">L'acquisition de trafic est la première étape du funnel marketing. Ces métriques mesurent votre capacité à attirer des visiteurs qualifiés vers votre site web.</p>

  <h2 class="section-subtitle mt-8">Les métriques fondamentales</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Impressions</h3>
    
    <div class="project-detail">
      <strong>Définition :</strong> Nombre de fois où votre publicité ou contenu a été affiché
    </div>

    <div class="project-detail">
      <strong>Utilité :</strong>
      <ul class="feature-list">
        <li>Mesurer la portée de vos campagnes</li>
        <li>Évaluer la visibilité de votre marque</li>
        <li>Base de calcul pour d'autres métriques (CTR, CPM)</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Bonnes pratiques :</strong>
      <ul class="feature-list">
        <li>Viser la qualité plutôt que la quantité</li>
        <li>Analyser par segment d'audience</li>
        <li>Corréler avec les conversions</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. CTR (Click-Through Rate)</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> (Nombre de clics / Nombre d'impressions) × 100
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

    <div class="project-detail">
      <strong>Facteurs d'amélioration :</strong>
      <ul class="feature-list">
        <li>Pertinence du message vs audience</li>
        <li>Qualité du visuel/titre</li>
        <li>Call-to-action clair</li>
        <li>Ciblage précis</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Exemple :</strong> Une campagne Google Ads avec 10 000 impressions et 300 clics a un CTR de 3% (300/10 000 × 100), ce qui est excellent pour du Search.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. CPC (Cost Per Click)</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> Coût total de la campagne / Nombre de clics
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

    <div class="project-detail">
      <strong>Stratégies d'optimisation :</strong>
      <ul class="feature-list">
        <li>Améliorer le Quality Score (pertinence annonce-mot-clé-landing page)</li>
        <li>Tester différents ciblages</li>
        <li>Utiliser les mots-clés négatifs</li>
        <li>Optimiser les heures de diffusion</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. CPM (Cost Per Mille)</h3>
    
    <div class="project-detail">
      <strong>Formule :</strong> (Coût total / Impressions) × 1000
    </div>

    <div class="project-detail">
      <strong>Utilisation :</strong>
      <ul class="feature-list">
        <li>Campagnes de notoriété (branding)</li>
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

  <h2 class="section-subtitle mt-8">Métriques de qualité du trafic</h2>

  <div class="value-type">
    <h3 class="value-title">Taux de rebond</h3>
    <ul class="feature-list">
      <li><strong>Définition :</strong> % de visiteurs qui quittent après une seule page</li>
      <li><strong>Benchmark :</strong> 40-60% selon le secteur</li>
      <li><strong>Interprétation :</strong> Élevé = problème de pertinence ou UX</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Durée de session</h3>
    <ul class="feature-list">
      <li><strong>Définition :</strong> Temps moyen passé sur le site</li>
      <li><strong>Benchmark :</strong> 2-3 minutes pour un e-commerce</li>
      <li><strong>Interprétation :</strong> Plus long = engagement plus fort</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Pages par session</h3>
    <ul class="feature-list">
      <li><strong>Définition :</strong> Nombre moyen de pages vues par visite</li>
      <li><strong>Benchmark :</strong> 2-4 pages selon le type de site</li>
      <li><strong>Interprétation :</strong> Indique la profondeur de navigation</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Dashboard d'acquisition recommandé</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Vue d'ensemble</h4>
      <ul class="deliverable-list">
        <li>Trafic total (sessions)</li>
        <li>Répartition par canal</li>
        <li>Évolution sur 30 jours</li>
        <li>Coût total d'acquisition</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Performance par canal</h4>
      <ul class="deliverable-list">
        <li>CTR par plateforme</li>
        <li>CPC moyen</li>
        <li>Qualité du trafic (rebond, durée)</li>
        <li>Évolution des coûts</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Analyses avancées</h4>
      <ul class="deliverable-list">
        <li>Segmentation par appareil</li>
        <li>Performance par tranche horaire</li>
        <li>Analyse géographique</li>
        <li>Corrélation trafic/météo/événements</li>
      </ul>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Optimisation d\'une campagne Google Ads sous-performante',
          description: 'Analyser et améliorer les métriques d\'acquisition d\'une campagne réelle',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous gérez une campagne Google Ads pour un site e-commerce de matériel de sport. Voici les performances des 30 derniers jours :</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données de la campagne :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li><strong>Budget :</strong> 3 000€</li>
    <li><strong>Impressions :</strong> 450 000</li>
    <li><strong>Clics :</strong> 4 500</li>
    <li><strong>Conversions :</strong> 45 ventes</li>
    <li><strong>Chiffre d'affaires :</strong> 2 700€</li>
    <li><strong>Panier moyen :</strong> 60€</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Benchmark secteur sport :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li><strong>CTR moyen :</strong> 2,5%</li>
    <li><strong>Taux de conversion :</strong> 2%</li>
    <li><strong>CPC moyen :</strong> 0,80€</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Calculez les <strong>KPIs manquants</strong> : CTR, CPC, taux de conversion, CPA, ROAS</li>
    <li>Identifiez les <strong>2 problèmes principaux</strong> par rapport aux benchmarks</li>
    <li>Proposez <strong>3 actions concrètes</strong> pour améliorer les performances</li>
    <li>Estimez l'<strong>impact financier</strong> de vos optimisations sur 3 mois</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">1. Calcul des KPIs manquants</h2>

  <div class="project-type">
    <h3 class="project-type-title">CTR (Click-Through Rate)</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> (4 500 clics / 450 000 impressions) × 100 = <span class="highlight">1%</span>
    </div>
    <div class="project-detail">
      <strong>Vs Benchmark :</strong> 1% vs 2,5% attendu = <span class="text-red-600">-60% sous la norme</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">CPC (Cost Per Click)</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> 3 000€ / 4 500 clics = <span class="highlight">0,67€</span>
    </div>
    <div class="project-detail">
      <strong>Vs Benchmark :</strong> 0,67€ vs 0,80€ attendu = <span class="text-green-600">16% moins cher (bon point)</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Taux de conversion</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> (45 conversions / 4 500 clics) × 100 = <span class="highlight">1%</span>
    </div>
    <div class="project-detail">
      <strong>Vs Benchmark :</strong> 1% vs 2% attendu = <span class="text-red-600">-50% sous la norme</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">CPA (Cost Per Acquisition)</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> 3 000€ / 45 conversions = <span class="highlight">66,67€</span>
    </div>
    <div class="project-detail">
      <strong>Analyse :</strong> CPA > Panier moyen (60€) = <span class="text-red-600">Campagne non rentable</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">ROAS (Return On Ad Spend)</h3>
    <div class="project-detail">
      <strong>Calcul :</strong> 2 700€ CA / 3 000€ coût = <span class="highlight">0,9:1</span>
    </div>
    <div class="project-detail">
      <strong>Analyse :</strong> Pour 1€ investi, on récupère 0,90€ = <span class="text-red-600">Perte de 10%</span>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Les 2 problèmes principaux identifiés</h2>

  <div class="project-type">
    <h3 class="project-type-title">Problème 1 : CTR catastrophique (1% vs 2,5%)</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Perte de 67% du trafic potentiel
    </div>
    <div class="project-detail">
      <strong>Causes probables :</strong>
      <ul class="feature-list">
        <li>Annonces peu attractives ou génériques</li>
        <li>Ciblage trop large (mots-clés non pertinents)</li>
        <li>Manque de différenciation vs concurrence</li>
        <li>Call-to-action faible</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Conséquence :</strong> Avec un CTR normal (2,5%), on aurait eu 11 250 clics au lieu de 4 500
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 2 : Taux de conversion faible (1% vs 2%)</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Perte de 50% des ventes potentielles
    </div>
    <div class="project-detail">
      <strong>Causes probables :</strong>
      <ul class="feature-list">
        <li>Landing page non optimisée</li>
        <li>Décalage entre promesse annonce et réalité site</li>
        <li>Processus d'achat complexe</li>
        <li>Prix non compétitifs</li>
        <li>Manque de réassurance (avis, garanties)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Conséquence :</strong> Avec un taux normal (2%), on aurait eu 90 ventes au lieu de 45
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Plan d'action : 3 optimisations prioritaires</h2>

  <div class="value-type">
    <h3 class="value-title">Action 1 : Refonte des annonces (Objectif : CTR 1% → 2%)</h3>
    <ul class="correction-list">
      <li><strong>Audit des mots-clés :</strong> Supprimer les termes génériques, se concentrer sur l'intention d'achat</li>
      <li><strong>Nouvelles annonces :</strong> Inclure prix, promotions, USP ("Livraison 24h", "Retour gratuit")</li>
      <li><strong>Extensions d'annonces :</strong> Ajouter liens annexes, accroches, prix</li>
      <li><strong>A/B test :</strong> Tester 3 versions d'annonces différentes</li>
    </ul>
    <div class="example-box">
      <strong>Exemple d'amélioration :</strong><br>
      Avant : "Matériel de sport - Large choix"<br>
      Après : "Matériel Sport -20% | Livraison 24h | Retour Gratuit 30j"
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Action 2 : Optimisation landing pages (Objectif : Conversion 1% → 1,7%)</h3>
    <ul class="correction-list">
      <li><strong>Cohérence annonce-page :</strong> Reprendre les mêmes mots-clés et promesses</li>
      <li><strong>Simplification tunnel :</strong> Réduire le nombre d'étapes d'achat</li>
      <li><strong>Réassurance :</strong> Ajouter avis clients, garanties, labels sécurité</li>
      <li><strong>Mobile-first :</strong> Optimiser l'expérience mobile (70% du trafic sport)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Action 3 : Stratégie de ciblage affinée (Objectif : Réduire CPA)</h3>
    <ul class="correction-list">
      <li><strong>Audiences personnalisées :</strong> Cibler les visiteurs ayant consulté >3 pages</li>
      <li><strong>Remarketing :</strong> Campagne spécifique pour les abandons panier</li>
      <li><strong>Exclusions :</strong> Exclure les clients récents, zones non livrées</li>
      <li><strong>Horaires :</strong> Concentrer le budget sur les créneaux performants</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Impact financier estimé sur 3 mois</h2>

  <div class="value-type">
    <h3 class="value-title">Scénario optimisé (avec même budget 3k€/mois)</h3>
    <ul class="correction-list">
      <li><strong>CTR amélioré :</strong> 1% → 2% = 9 000 clics/mois (au lieu de 4 500)</li>
      <li><strong>Conversion améliorée :</strong> 1% → 1,7% = 153 ventes/mois (au lieu de 45)</li>
      <li><strong>CA mensuel :</strong> 153 × 60€ = 9 180€ (au lieu de 2 700€)</li>
      <li><strong>ROAS :</strong> 9 180€ / 3 000€ = 3,06:1 (au lieu de 0,9:1)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Résultats sur 3 mois :</strong>
    <br>
    • CA : 8 100€ → 27 540€ (+240%)
    <br>
    • Bénéfice : -900€ → +18 540€ (passage de perte à profit)
    <br>
    • ROI des optimisations : +19 440€ de gain net
    <br>
    • Temps de retour sur investissement : Immédiat (dès le 1er mois)
  </div>

  <div class="value-type">
    <h3 class="value-title">Planning de mise en œuvre</h3>
    <ul class="correction-list">
      <li><strong>Semaine 1 :</strong> Audit mots-clés et refonte annonces</li>
      <li><strong>Semaine 2 :</strong> Optimisation landing pages principales</li>
      <li><strong>Semaine 3 :</strong> Mise en place remarketing et audiences</li>
      <li><strong>Semaine 4+ :</strong> Monitoring et ajustements continus</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">KPIs de suivi hebdomadaire</h3>
    <ul class="correction-list">
      <li>CTR par groupe d'annonces</li>
      <li>Taux de conversion par landing page</li>
      <li>CPA par segment d'audience</li>
      <li>ROAS global et par campagne</li>
    </ul>
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-kpi-1',
            question: 'Quelle est la formule du CTR (Click-Through Rate) ?',
            options: [
              '(Conversions / Clics) × 100',
              '(Clics / Impressions) × 100',
              '(Impressions / Budget) × 100',
              '(Coût / Clics) × 100'
            ],
            correctAnswer: 1,
            explanation: 'Le CTR se calcule en divisant le nombre de clics par le nombre d\'impressions, puis en multipliant par 100 pour obtenir un pourcentage.'
          },
          {
            id: 'q-kpi-2',
            question: 'Quel est un bon CTR pour une campagne Google Ads Search ?',
            options: [
              '0,5-1%',
              '3-5%',
              '10-15%',
              '20-25%'
            ],
            correctAnswer: 1,
            explanation: 'Pour Google Ads Search, un CTR de 3-5% est considéré comme excellent, 2-3% comme bon. C\'est plus élevé que le Display car l\'intention de recherche est plus forte.'
          },
          {
            id: 'q-kpi-3',
            question: 'Que mesure le taux de rebond ?',
            options: [
              'Le pourcentage de visiteurs qui achètent',
              'Le pourcentage de visiteurs qui quittent après une seule page',
              'Le nombre de pages vues par session',
              'Le temps passé sur le site'
            ],
            correctAnswer: 1,
            explanation: 'Le taux de rebond mesure le pourcentage de sessions d\'une seule page, c\'est-à-dire les visiteurs qui quittent le site sans interagir avec d\'autres pages.'
          },
          {
            id: 'q-kpi-4',
            question: 'Quels facteurs influencent principalement le CPC (Cost Per Click) ?',
            options: [
              'Uniquement le budget de la campagne',
              'La concurrence, le Quality Score, le ciblage et la saisonnalité',
              'Seulement la qualité des visuels',
              'Le nombre d\'impressions'
            ],
            correctAnswer: 1,
            explanation: 'Le CPC dépend de plusieurs facteurs : la concurrence sur les mots-clés, le Quality Score de Google, la précision du ciblage et les variations saisonnières de la demande.'
          },
          {
            id: 'q-kpi-5',
            question: 'Quelle métrique indique la qualité du trafic acquis ?',
            options: [
              'Le nombre total d\'impressions',
              'Le CPC moyen',
              'Le taux de rebond et la durée de session',
              'Le CPM'
            ],
            correctAnswer: 2,
            explanation: 'La qualité du trafic se mesure par l\'engagement : un faible taux de rebond et une durée de session élevée indiquent que les visiteurs trouvent le contenu pertinent.'
          }
        ]
      }
    ]
  },
  {
    id: 'sources-donnees',
    title: 'Sources de données et écosystème',
    description: 'Maîtriser les différentes sources de données marketing et leur intégration',
    sections: [
      {
        id: 'google-analytics',
        title: 'Google Analytics 4 : La base incontournable',
        content: `<div class="section-content">
  <h1 class="section-title">Google Analytics 4 : Votre tableau de bord central</h1>

  <p class="section-text">Google Analytics 4 (GA4) est l'outil gratuit de référence pour analyser le comportement des utilisateurs sur votre site web. Il remplace Universal Analytics depuis juillet 2023 et offre une approche centrée sur les événements.</p>

  <h2 class="section-subtitle mt-8">Pourquoi GA4 est incontournable ?</h2>

  <div class="value-type">
    <h3 class="value-title">Avantages clés</h3>
    <ul class="feature-list">
      <li><strong>Gratuit :</strong> Jusqu'à 10 millions d'événements par mois</li>
      <li><strong>Cross-platform :</strong> Web + App dans une seule propriété</li>
      <li><strong>Intelligence artificielle :</strong> Insights automatiques et prédictions</li>
      <li><strong>Respect de la vie privée :</strong> Compatible RGPD, cookieless tracking</li>
      <li><strong>Intégration Google :</strong> Connexion native avec Ads, Search Console, BigQuery</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Architecture GA4 : Comprendre la logique</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Modèle basé sur les événements</h3>
    
    <div class="project-detail">
      <strong>Principe :</strong> Tout est un événement (page vue, clic, achat, etc.)
    </div>

    <div class="project-detail">
      <strong>Événements automatiques :</strong>
      <ul class="feature-list">
        <li><strong>page_view :</strong> Consultation d'une page</li>
        <li><strong>scroll :</strong> Défilement à 90% de la page</li>
        <li><strong>click :</strong> Clic sur un lien externe</li>
        <li><strong>file_download :</strong> Téléchargement de fichier</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Événements de conversion :</strong>
      <ul class="feature-list">
        <li><strong>purchase :</strong> Achat e-commerce</li>
        <li><strong>generate_lead :</strong> Formulaire de contact</li>
        <li><strong>sign_up :</strong> Inscription newsletter</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Dimensions et métriques essentielles</h3>
    
    <div class="project-detail">
      <strong>Dimensions (le "quoi") :</strong>
      <ul class="feature-list">
        <li><strong>Source/Medium :</strong> D'où viennent les utilisateurs</li>
        <li><strong>Page :</strong> Quelle page ils consultent</li>
        <li><strong>Appareil :</strong> Desktop, mobile, tablette</li>
        <li><strong>Pays/Ville :</strong> Localisation géographique</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Métriques (le "combien") :</strong>
      <ul class="feature-list">
        <li><strong>Utilisateurs :</strong> Nombre de personnes uniques</li>
        <li><strong>Sessions :</strong> Nombre de visites</li>
        <li><strong>Événements :</strong> Actions réalisées</li>
        <li><strong>Conversions :</strong> Objectifs atteints</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Rapports GA4 indispensables</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Rapport Acquisition</h4>
      <ul class="deliverable-list">
        <li>Vue d'ensemble du trafic</li>
        <li>Performance par canal</li>
        <li>Campagnes Google Ads</li>
        <li>Analyse des sources</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Rapport Engagement</h4>
      <ul class="deliverable-list">
        <li>Pages et écrans</li>
        <li>Événements</li>
        <li>Conversions</li>
        <li>Audience en temps réel</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Rapport E-commerce</h4>
      <ul class="deliverable-list">
        <li>Performances des achats</li>
        <li>Performance des produits</li>
        <li>Performance des promotions</li>
        <li>Analyse du funnel</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Configuration recommandée</h2>

  <div class="value-type">
    <h3 class="value-title">Étapes de configuration prioritaires</h3>
    <ul class="feature-list">
      <li><strong>1. Enhanced Ecommerce :</strong> Tracking des achats complet</li>
      <li><strong>2. Conversions personnalisées :</strong> Définir vos objectifs business</li>
      <li><strong>3. Audiences :</strong> Segmenter pour le remarketing</li>
      <li><strong>4. Attribution :</strong> Configurer le modèle d'attribution</li>
      <li><strong>5. Connexions :</strong> Lier Google Ads et Search Console</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Conseil pro :</strong> Configurez GA4 avec Google Tag Manager (GTM) pour une gestion centralisée et flexible de tous vos tags marketing.
  </div>
</div>`,
        casePratique: {
          title: 'Audit et optimisation d\'une configuration GA4',
          description: 'Analyser une configuration GA4 existante et proposer des améliorations',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous auditez le GA4 d'un site e-commerce de décoration (500k sessions/mois). Voici ce que vous constatez :</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Configuration actuelle :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>GA4 installé depuis 6 mois</li>
    <li>Seuls les événements automatiques sont trackés</li>
    <li>Aucune conversion configurée</li>
    <li>E-commerce non configuré (alors que c'est un site marchand)</li>
    <li>Google Ads non connecté</li>
    <li>Aucune audience créée</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données business :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Taux de conversion : 2,5%</li>
    <li>Panier moyen : 85€</li>
    <li>Budget Google Ads : 15k€/mois</li>
    <li>Objectifs : Newsletter (lead), Achat, Demande de devis</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Identifiez les <strong>5 problèmes majeurs</strong> de cette configuration</li>
    <li>Proposez un <strong>plan de configuration</strong> en 4 étapes prioritaires</li>
    <li>Définissez les <strong>conversions à créer</strong> et leur valeur</li>
    <li>Estimez l'<strong>impact business</strong> d'une configuration optimisée</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">1. Les 5 problèmes majeurs identifiés</h2>

  <div class="project-type">
    <h3 class="project-type-title">Problème 1 : Absence de tracking e-commerce</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Impossible de mesurer le ROI des campagnes
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Pas de données sur le chiffre d'affaires par canal</li>
        <li>Impossible de calculer le ROAS</li>
        <li>Optimisation Google Ads impossible (pas de données de valeur)</li>
        <li>Perte de 6 mois d'historique de données e-commerce</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 2 : Aucune conversion configurée</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Pas de mesure des objectifs business
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Impossible de suivre les leads (newsletter, devis)</li>
        <li>Pas d'optimisation des campagnes pour les conversions</li>
        <li>Aucune donnée pour le Smart Bidding Google Ads</li>
        <li>Reporting incomplet pour la direction</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 3 : Google Ads non connecté</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Perte d'efficacité publicitaire majeure
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Pas d'import des conversions dans Google Ads</li>
        <li>Stratégies d'enchères automatiques impossibles</li>
        <li>Pas de données d'attribution cross-device</li>
        <li>Gaspillage budgétaire (15k€/mois mal optimisés)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 4 : Absence d'audiences pour le remarketing</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Opportunités de conversion manquées
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Pas de remarketing des abandons de panier</li>
        <li>Impossible de cibler les visiteurs qualifiés</li>
        <li>Perte de clients potentiels (97,5% qui ne convertissent pas)</li>
        <li>CPA plus élevé (pas de segmentation fine)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Problème 5 : Tracking incomplet des micro-conversions</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Vision partielle du funnel de conversion
    </div>
    <div class="project-detail">
      <strong>Conséquences :</strong>
      <ul class="feature-list">
        <li>Pas de suivi des étapes intermédiaires (ajout panier, début checkout)</li>
        <li>Impossible d'identifier les points de friction</li>
        <li>Optimisation UX limitée</li>
        <li>Perte d'insights sur le comportement d'achat</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Plan de configuration en 4 étapes</h2>

  <div class="value-type">
    <h3 class="value-title">Étape 1 : Configuration e-commerce (Priorité 1)</h3>
    <ul class="correction-list">
      <li><strong>Enhanced Ecommerce :</strong> Activer le suivi des achats complet</li>
      <li><strong>Événements requis :</strong> purchase, add_to_cart, begin_checkout, view_item</li>
      <li><strong>Paramètres :</strong> transaction_id, value, currency, items (avec item_id, item_name, category)</li>
      <li><strong>Test :</strong> Vérifier avec GA4 DebugView et Google Tag Assistant</li>
      <li><strong>Délai :</strong> 1 semaine</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 2 : Configuration des conversions (Priorité 1)</h3>
    <ul class="correction-list">
      <li><strong>Conversion 1 :</strong> purchase (achat) - Valeur dynamique</li>
      <li><strong>Conversion 2 :</strong> generate_lead (newsletter) - Valeur fixe 5€</li>
      <li><strong>Conversion 3 :</strong> contact (demande devis) - Valeur fixe 25€</li>
      <li><strong>Configuration :</strong> Marquer comme conversions dans GA4 + Google Ads</li>
      <li><strong>Délai :</strong> 3 jours</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 3 : Connexion Google Ads (Priorité 2)</h3>
    <ul class="correction-list">
      <li><strong>Liaison :</strong> Connecter GA4 à Google Ads</li>
      <li><strong>Import conversions :</strong> Importer les 3 conversions configurées</li>
      <li><strong>Attribution :</strong> Configurer le modèle d'attribution data-driven</li>
      <li><strong>Audiences :</strong> Exporter les audiences vers Google Ads</li>
      <li><strong>Délai :</strong> 2 jours</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 4 : Création d'audiences remarketing (Priorité 3)</h3>
    <ul class="correction-list">
      <li><strong>Audience 1 :</strong> Visiteurs ayant ajouté au panier (7 derniers jours)</li>
      <li><strong>Audience 2 :</strong> Visiteurs de catégories spécifiques (30 derniers jours)</li>
      <li><strong>Audience 3 :</strong> Clients existants (365 derniers jours)</li>
      <li><strong>Audience 4 :</strong> Visiteurs haute valeur (>3 pages vues)</li>
      <li><strong>Délai :</strong> 1 semaine</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Conversions à créer et leur valeur</h2>

  <div class="project-type">
    <h3 class="project-type-title">Conversion 1 : Purchase (Achat)</h3>
    <div class="project-detail">
      <strong>Événement :</strong> purchase
    </div>
    <div class="project-detail">
      <strong>Valeur :</strong> Dynamique (montant réel de la commande)
    </div>
    <div class="project-detail">
      <strong>Justification :</strong> Conversion principale, ROI direct mesurable
    </div>
    <div class="project-detail">
      <strong>Volume estimé :</strong> 12 500 conversions/mois (500k sessions × 2,5%)
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Conversion 2 : Generate Lead (Newsletter)</h3>
    <div class="project-detail">
      <strong>Événement :</strong> generate_lead
    </div>
    <div class="project-detail">
      <strong>Valeur fixe :</strong> 5€
    </div>
    <div class="project-detail">
      <strong>Calcul :</strong> 
      <ul class="feature-list">
        <li>Taux de conversion newsletter → achat : 8%</li>
        <li>Panier moyen : 85€</li>
        <li>Valeur lead = 85€ × 8% × 0,75 (marge) = 5,10€</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Volume estimé :</strong> 15 000 conversions/mois (3% du trafic)
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Conversion 3 : Contact (Demande devis)</h3>
    <div class="project-detail">
      <strong>Événement :</strong> contact
    </div>
    <div class="project-detail">
      <strong>Valeur fixe :</strong> 25€
    </div>
    <div class="project-detail">
      <strong>Calcul :</strong>
      <ul class="feature-list">
        <li>Taux de conversion devis → achat : 35%</li>
        <li>Panier moyen devis : 120€ (projets plus importants)</li>
        <li>Valeur lead = 120€ × 35% × 0,6 (marge) = 25,20€</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Volume estimé :</strong> 2 500 conversions/mois (0,5% du trafic)</div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Impact business d'une configuration optimisée</h2>

  <div class="value-type">
    <h3 class="value-title">Gains immédiats (1-3 mois)</h3>
    <ul class="correction-list">
      <li><strong>Optimisation Google Ads :</strong> +25% de ROAS grâce aux données de conversion</li>
      <li><strong>Smart Bidding :</strong> -15% de CPA avec les stratégies automatiques</li>
      <li><strong>Remarketing :</strong> +30% de conversions avec les audiences qualifiées</li>
      <li><strong>Attribution :</strong> Réallocation budgétaire optimisée (+10% d'efficacité)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Gains à moyen terme (3-6 mois)</h3>
    <ul class="correction-list">
      <li><strong>Machine Learning :</strong> Google Ads optimise avec plus de données</li>
      <li><strong>Audiences similaires :</strong> Expansion du ciblage qualifié</li>
      <li><strong>Optimisation UX :</strong> Identification des points de friction</li>
      <li><strong>Personnalisation :</strong> Messages adaptés par segment</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Impact financier estimé :</strong>
    <br>
    • Budget Google Ads : 15k€/mois
    <br>
    • ROAS actuel estimé : 3:1 (45k€ CA/mois)
    <br>
    • ROAS optimisé : 4:1 (60k€ CA/mois)
    <br>
    • Gain mensuel : +15k€ de CA (+180k€/an)
    <br>
    • ROI de la configuration : 5000%+ (coût config vs gains)
  </div>

  <div class="value-type">
    <h3 class="value-title">Bénéfices qualitatifs</h3>
    <ul class="correction-list">
      <li><strong>Visibilité :</strong> Reporting complet pour la direction</li>
      <li><strong>Réactivité :</strong> Détection rapide des problèmes de performance</li>
      <li><strong>Stratégie :</strong> Décisions basées sur des données fiables</li>
      <li><strong>Compétitivité :</strong> Avantage face aux concurrents moins data-driven</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Planning de déploiement recommandé</h3>
    <ul class="correction-list">
      <li><strong>Semaine 1 :</strong> Configuration e-commerce + conversions</li>
      <li><strong>Semaine 2 :</strong> Connexion Google Ads + import conversions</li>
      <li><strong>Semaine 3 :</strong> Création audiences + tests remarketing</li>
      <li><strong>Semaine 4+ :</strong> Monitoring et optimisations continues</li>
    </ul>
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-ga4-1',
            question: 'Quelle est la principale différence entre GA4 et Universal Analytics ?',
            options: [
              'GA4 est payant, Universal Analytics était gratuit',
              'GA4 est basé sur les événements, Universal Analytics sur les pages vues',
              'GA4 ne fonctionne que sur mobile',
              'Il n\'y a pas de différence majeure'
            ],
            correctAnswer: 1,
            explanation: 'GA4 utilise un modèle basé sur les événements où toutes les interactions (pages vues, clics, achats) sont des événements, contrairement à Universal Analytics qui était centré sur les pages vues.'
          },
          {
            id: 'q-ga4-2',
            question: 'Quels sont les événements automatiques de GA4 ?',
            options: [
              'Seulement page_view',
              'page_view, scroll, click, file_download',
              'Tous les événements doivent être configurés manuellement',
              'purchase, generate_lead, sign_up'
            ],
            correctAnswer: 1,
            explanation: 'GA4 track automatiquement plusieurs événements : page_view (pages vues), scroll (défilement 90%), click (liens externes), file_download (téléchargements), etc.'
          },
          {
            id: 'q-ga4-3',
            question: 'Pourquoi connecter GA4 à Google Ads ?',
            options: [
              'C\'est obligatoire pour utiliser GA4',
              'Pour importer les conversions et optimiser les campagnes',
              'Pour avoir plus de données gratuites',
              'Pour changer l\'interface de Google Ads'
            ],
            correctAnswer: 1,
            explanation: 'La connexion GA4-Google Ads permet d\'importer les conversions trackées dans GA4 vers Google Ads, ce qui active les stratégies d\'enchères automatiques et améliore l\'optimisation des campagnes.'
          },
          {
            id: 'q-ga4-4',
            question: 'Qu\'est-ce qu\'une audience dans GA4 ?',
            options: [
              'Le nombre total de visiteurs',
              'Un segment d\'utilisateurs défini par des critères spécifiques',
              'Une liste d\'emails',
              'Un rapport automatique'
            ],
            correctAnswer: 1,
            explanation: 'Une audience GA4 est un segment d\'utilisateurs défini par des critères (comportement, démographie, technologie) qui peut être utilisé pour l\'analyse et exporté vers les plateformes publicitaires pour le remarketing.'
          },
          {
            id: 'q-ga4-5',
            question: 'Quelle est la limite gratuite de GA4 ?',
            options: [
              '1 million d\'événements par mois',
              '10 millions d\'événements par mois',
              '100 000 événements par mois',
              'Illimité'
            ],
            correctAnswer: 1,
            explanation: 'GA4 est gratuit jusqu\'à 10 millions d\'événements par mois, ce qui couvre largement les besoins de la plupart des sites web. Au-delà, il faut passer à GA4 360 (version payante).'
          }
        ]
      }
    ]
  },
  {
    id: 'analyse-performance',
    title: 'Analyse de performance et optimisation',
    description: 'Diagnostiquer les performances marketing et formuler des recommandations',
    sections: [
      {
        id: 'diagnostic-performance',
        title: 'Méthodologie de diagnostic marketing',
        content: `<div class="section-content">
  <h1 class="section-title">Diagnostic Marketing : De l'analyse à l'action</h1>

  <p class="section-text">Le diagnostic marketing est l'art de transformer des données brutes en insights actionnables. C'est une compétence clé du data marketer qui permet d'identifier les leviers d'optimisation et de formuler des recommandations stratégiques.</p>

  <h2 class="section-subtitle mt-8">Méthodologie en 5 étapes</h2>

  <div class="project-type">
    <h3 class="project-type-title">Étape 1 : Collecte et validation des données</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> S'assurer de la fiabilité des données
    </div>

    <div class="project-detail">
      <strong>Actions clés :</strong>
      <ul class="feature-list">
        <li>Vérifier la cohérence entre les sources (GA4, Google Ads, CRM)</li>
        <li>Identifier les périodes avec des données manquantes ou aberrantes</li>
        <li>Valider le tracking des conversions</li>
        <li>Contrôler les filtres et segments appliqués</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Exemple :</strong> Si GA4 affiche 1000 conversions mais Google Ads seulement 800, il y a un problème de tracking à résoudre avant l'analyse.
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 2 : Analyse comparative (benchmarking)</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Situer les performances par rapport aux références
    </div>

    <div class="project-detail">
      <strong>Types de comparaisons :</strong>
      <ul class="feature-list">
        <li><strong>Temporelle :</strong> Mois vs mois précédent, année vs année précédente</li>
        <li><strong>Sectorielle :</strong> Vs benchmarks du secteur d'activité</li>
        <li><strong>Concurrentielle :</strong> Vs concurrents directs (si données disponibles)</li>
        <li><strong>Interne :</strong> Canal vs canal, campagne vs campagne</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Benchmarks sectoriels moyens :</strong>
      <ul class="feature-list">
        <li><strong>E-commerce :</strong> CTR 2%, Conversion 2-3%, ROAS 4:1</li>
        <li><strong>B2B :</strong> CTR 3%, Conversion 3-5%, CPA 50-200€</li>
        <li><strong>Lead gen :</strong> CTR 2,5%, Conversion 5-10%, CPA 20-100€</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 3 : Identification des écarts et anomalies</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Repérer les points d'attention prioritaires
    </div>

    <div class="project-detail">
      <strong>Signaux d'alerte :</strong>
      <ul class="feature-list">
        <li><strong>Baisse de performance :</strong> >20% vs période précédente</li>
        <li><strong>Écart vs benchmark :</strong> >30% sous la moyenne sectorielle</li>
        <li><strong>Disparités internes :</strong> Écart >50% entre canaux similaires</li>
        <li><strong>Tendances négatives :</strong> Dégradation sur 3 périodes consécutives</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 4 : Analyse des causes racines</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Comprendre le "pourquoi" des écarts
    </div>

    <div class="project-detail">
      <strong>Méthode des 5 pourquoi :</strong>
      <ul class="feature-list">
        <li><strong>Problème :</strong> Le ROAS Google Ads a chuté de 4:1 à 2:1</li>
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
        <li><strong>Quick wins :</strong> Impact élevé, effort faible (à faire en premier)</li>
        <li><strong>Projets majeurs :</strong> Impact élevé, effort élevé (planifier)</li>
        <li><strong>Optimisations mineures :</strong> Impact faible, effort faible (si temps)</li>
        <li><strong>À éviter :</strong> Impact faible, effort élevé</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Framework d'analyse AIDA-M</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Attention (Acquisition)</h4>
      <ul class="deliverable-list">
        <li>Impressions, Reach</li>
        <li>CTR, CPM</li>
        <li>Qualité du trafic</li>
        <li>Sources de trafic</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Intérêt (Engagement)</h4>
      <ul class="deliverable-list">
        <li>Taux de rebond</li>
        <li>Durée de session</li>
        <li>Pages par session</li>
        <li>Événements d'engagement</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Désir (Considération)</h4>
      <ul class="deliverable-list">
        <li>Ajouts au panier</li>
        <li>Consultations produits</li>
        <li>Téléchargements</li>
        <li>Inscriptions newsletter</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Action (Conversion)</h4>
      <ul class="deliverable-list">
        <li>Taux de conversion</li>
        <li>CPA, ROAS</li>
        <li>Panier moyen</li>
        <li>Valeur vie client</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Mémorisation (Rétention)</h4>
      <ul class="deliverable-list">
        <li>Taux de rétention</li>
        <li>Fréquence d'achat</li>
        <li>NPS, satisfaction</li>
        <li>Recommandations</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Outils de diagnostic recommandés</h2>

  <div class="value-type">
    <h3 class="value-title">Analyse quantitative</h3>
    <ul class="feature-list">
      <li><strong>Google Analytics 4 :</strong> Comportement et conversions</li>
      <li><strong>Google Data Studio :</strong> Dashboards et visualisations</li>
      <li><strong>Google Ads :</strong> Performance publicitaire</li>
      <li><strong>Search Console :</strong> Performance SEO</li>
      <li><strong>Hotjar/Clarity :</strong> Heatmaps et enregistrements</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Analyse qualitative</h3>
    <ul class="feature-list">
      <li><strong>Enquêtes utilisateurs :</strong> Feedback direct</li>
      <li><strong>Tests utilisateurs :</strong> Observation comportementale</li>
      <li><strong>Avis clients :</strong> Sentiment et satisfaction</li>
      <li><strong>Support client :</strong> Points de friction récurrents</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Diagnostic complet d\'une baisse de performance',
          description: 'Analyser une chute de ROAS et proposer un plan d\'action structuré',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous êtes data marketer pour une boutique en ligne de produits tech. Le directeur marketing vous alerte : "Le ROAS a chuté de 40% ce mois-ci, il faut agir vite !"</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données disponibles (Octobre vs Septembre) :</h4>
  
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-3 py-2 text-left">Métrique</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Septembre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Octobre</th>
          <th class="border border-gray-300 px-3 py-2 text-center">Évolution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Budget total</td>
          <td class="border border-gray-300 px-3 py-2 text-center">20 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">20 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">0%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Chiffre d'affaires</td>
          <td class="border border-gray-300 px-3 py-2 text-center">100 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">60 000€</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-40%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Sessions</td>
          <td class="border border-gray-300 px-3 py-2 text-center">50 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">45 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-10%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Conversions</td>
          <td class="border border-gray-300 px-3 py-2 text-center">1 000</td>
          <td class="border border-gray-300 px-3 py-2 text-center">600</td>
          <td class="border border-gray-300 px-3 py-2 text-center">-40%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-3 py-2">Trafic mobile</td>
          <td class="border border-gray-300 px-3 py-2 text-center">60%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">75%</td>
          <td class="border border-gray-300 px-3 py-2 text-center">+15pts</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Informations contextuelles :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Nouveau produit phare lancé début octobre (iPhone 15)</li>
    <li>Concurrent principal a lancé une promo -30% mi-octobre</li>
    <li>Mise à jour du site web le 5 octobre (nouveau design mobile)</li>
    <li>Équipe marketing en congés la 2ème semaine d'octobre</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Calculez les <strong>KPIs manquants</strong> et identifiez les écarts significatifs</li>
    <li>Appliquez la <strong>méthode des 5 pourquoi</strong> pour identifier la cause racine</li>
    <li>Utilisez le <strong>framework AIDA-M</strong> pour structurer votre diagnostic</li>
    <li>Proposez un <strong>plan d'action priorisé</strong> avec la matrice Impact/Effort</li>
    <li>Estimez l'<strong>impact financier</strong> de vos recommandations</li>
  </ol>
</div>`
        }
      }
    ]
  }
];
