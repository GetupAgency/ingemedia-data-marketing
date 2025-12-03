import React, { useState, useEffect } from 'react';
import InteractiveCharts from './InteractiveCharts';
import InteractiveQuiz from './InteractiveQuiz';
import BusinessScenarios from './BusinessScenarios';

/**
 * Interface pour les ressources d'un exercice
 */
interface Resource {
  title: string;
  url?: string;
  description: string;
  type: 'tool' | 'data' | 'link' | 'calculator' | 'file';
}

/**
 * Interface pour les données d'exercice
 */
interface Exercise {
  id: string;
  title: string;
  context: string;
  objective: string;
  resources?: Resource[];
  tasks: string[];
  expectedOutput: string;
  tips?: string[];
  type: 'analysis' | 'calculation' | 'research' | 'interpretation';
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
  duration: string;
}

/**
 * Interface pour les modules du cours
 */
interface CourseModule {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  type: 'introduction' | 'theory' | 'workshop' | 'synthesis';
  learningObjectives?: string[];
}

/**
 * Composant pour afficher les ressources
 */
const ResourcesSection: React.FC<{ resources: Resource[] }> = ({ resources }) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'tool': return '🔧';
      case 'data': return '📊';
      case 'link': return '🔗';
      case 'calculator': return '🧮';
      case 'file': return '📄';
      default: return '📋';
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
      <h5 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wide">
        Ressources nécessaires
      </h5>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white border border-slate-100 rounded-md p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{getResourceIcon(resource.type)}</span>
                  <h6 className="font-medium text-slate-900 text-sm">{resource.title}</h6>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{resource.description}</p>
              </div>
              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-700 transition-colors shrink-0"
                >
                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Accéder
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Composant pour afficher les exercices pratiques
 */
const PracticalExercise: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'analysis': return { label: 'Analyse', color: 'bg-blue-50 border-blue-200 text-blue-800' };
      case 'calculation': return { label: 'Calcul', color: 'bg-green-50 border-green-200 text-green-800' };
      case 'research': return { label: 'Recherche', color: 'bg-purple-50 border-purple-200 text-purple-800' };
      case 'interpretation': return { label: 'Interprétation', color: 'bg-orange-50 border-orange-200 text-orange-800' };
      default: return { label: 'Exercice', color: 'bg-gray-50 border-gray-200 text-gray-800' };
    }
  };

  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'débutant': return { color: 'bg-green-100 text-green-800' };
      case 'intermédiaire': return { color: 'bg-yellow-100 text-yellow-800' };
      case 'avancé': return { color: 'bg-red-100 text-red-800' };
      default: return { color: 'bg-gray-100 text-gray-800' };
    }
  };

  const typeInfo = getTypeInfo(exercise.type);
  const difficultyInfo = getDifficultyInfo(exercise.difficulty);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 mb-8">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeInfo.color}`}>
                {typeInfo.label}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyInfo.color}`}>
                {exercise.difficulty}
              </span>
              <span className="text-xs text-slate-500">
                {exercise.duration}
              </span>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">{exercise.title}</h4>
            <p className="text-sm text-slate-600">Travail en équipe • Format workshop</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <svg 
              className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="font-medium text-slate-900 mb-2 text-sm">Contexte</h5>
            <p className="text-slate-700 leading-relaxed text-sm">{exercise.context}</p>
          </div>

          <div>
            <h5 className="font-medium text-slate-900 mb-2 text-sm">Objectif</h5>
            <p className="text-slate-700 leading-relaxed text-sm">{exercise.objective}</p>
          </div>
        </div>

        {exercise.resources && <ResourcesSection resources={exercise.resources} />}

        {isExpanded && (
          <div className="space-y-6 mt-8 pt-6 border-t border-slate-100">
            <div>
              <h5 className="font-medium text-slate-900 mb-4 text-sm">Mission détaillée</h5>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                {exercise.tasks.map((task, index) => (
                  <li key={index} className="text-slate-700 text-sm leading-relaxed">{task}</li>
                ))}
              </ol>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <h5 className="font-medium text-indigo-900 mb-2 text-sm">Livrable attendu</h5>
              <p className="text-indigo-800 text-sm leading-relaxed">{exercise.expectedOutput}</p>
            </div>

            {exercise.tips && (
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <h5 className="font-medium text-amber-900 mb-3 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Conseils méthodologiques
                </h5>
                <ul className="list-disc list-inside space-y-1">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="text-amber-800 text-xs leading-relaxed">{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Composant pour les sections théoriques avec design épuré
 */
const TheoryCard: React.FC<{ 
  title: string; 
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}> = ({ title, children, variant = 'default' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-indigo-50 border-indigo-200';
      case 'secondary':
        return 'bg-slate-50 border-slate-200';
      default:
        return 'bg-white border-slate-200';
    }
  };

  return (
    <div className={`${getVariantClasses()} border rounded-lg p-5`}>
      <h4 className="font-semibold text-slate-900 mb-3 text-sm">{title}</h4>
      <div className="space-y-3 text-sm text-slate-700">
        {children}
      </div>
    </div>
  );
};

/**
 * Composant principal du cours de Data Marketing
 */
const DataMarketingCourse: React.FC = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<{question: string; answer: string} | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentModule]);

  const handleQuestionClick = (question: string, answer: string) => {
    setSelectedAnswer({ question, answer });
  };

  // Définition des exercices pratiques
  const exercises: Exercise[] = [
    {
      id: 'dashboard-analysis',
      title: 'Analyse d\'un tableau de bord commercial',
      type: 'analysis',
      difficulty: 'intermédiaire',
      duration: '90 min',
      context: 'Vous êtes une équipe de Data Analysts pour "Superstore", une grande entreprise de distribution de mobilier et de fournitures de bureau. Votre direction générale souhaite avoir votre analyse sur les performances commerciales de l\'entreprise à partir du tableau de bord officiel.',
      objective: 'Analyser un tableau de bord Tableau interactif pour extraire des insights actionnables et identifier les lacunes d\'information.',
      resources: [
        {
          title: 'Tableau de bord Superstore',
          url: 'https://public.tableau.com/views/SuperstoreDashboard_15922674056120/Overview',
          description: 'Dashboard interactif créé avec Tableau Public. Explorez les différents graphiques et utilisez les filtres par région et catégorie.',
          type: 'tool'
        }
      ],
      tasks: [
        'Identifiez l\'objectif principal de ce tableau de bord et la grande question business à laquelle il répond',
        'Relevez 3 KPIs clés présentés et expliquez ce que chacun mesure en une phrase',
        'Trouvez un insight actionnable : une information qui pourrait mener à une décision commerciale concrète',
        'Identifiez une information cruciale manquante pour un e-commerçant et justifiez pourquoi elle est importante'
      ],
      expectedOutput: 'Synthèse de 2 slides maximum avec les 4 points d\'analyse demandés, prête à présenter à la direction.',
      tips: [
        'Prenez le temps d\'explorer tous les filtres et graphiques interactifs',
        'Concentrez-vous sur les écarts significatifs entre catégories ou régions',
        'Pensez au parcours client complet, pas seulement aux ventes finales'
      ]
    },
    {
      id: 'csv-performance-analysis',
      title: 'Diagnostic de performance marketing multi-canaux',
      type: 'analysis',
      difficulty: 'avancé',
      duration: '120 min',
      context: 'Vous êtes Data Analyst pour une boutique e-commerce qui investit massivement en publicité digitale. Le CMO constate que les performances globales stagnent malgré l\'augmentation des budgets. Il vous demande d\'analyser les données de performance des 7 derniers jours pour identifier les leviers d\'optimisation.',
      objective: 'Analyser des données marketing réelles pour identifier un canal sous-performant et proposer des recommandations d\'amélioration chiffrées.',
      resources: [
        {
          title: 'Données de performance marketing',
          url: '/data/marketing_performance_data.csv',
          description: 'Fichier CSV contenant 7 jours de données de performance pour Google Ads et Meta Ads avec métriques détaillées (impressions, clics, coûts, conversions, CA).',
          type: 'file'
        },
        {
          title: 'Google Sheets / Excel',
          description: 'Utilisez votre tableur préféré pour analyser les données. Créez des tableaux croisés dynamiques et des graphiques.',
          type: 'tool'
        }
      ],
      tasks: [
        'Importez le fichier CSV et calculez les KPIs manquants : CTR, CPC, taux de conversion, CPA, ROAS pour chaque canal',
        'Créez un tableau de synthèse comparant Google Ads vs Meta Ads sur tous les KPIs',
        'Identifiez le canal le moins performant et analysez pourquoi (regardez par type de campagne, appareil, cible)',
        'Proposez 3 recommandations concrètes et chiffrées pour améliorer le canal sous-performant',
        'Estimez l\'impact financier de vos recommandations (gain de CA potentiel)'
      ],
      expectedOutput: 'Présentation de 3-4 slides avec tableau de synthèse, diagnostic du problème, et plan d\'action chiffré.',
      tips: [
        'Utilisez des tableaux croisés dynamiques pour segmenter les données rapidement',
        'Calculez d\'abord les KPIs globaux, puis détaillez par sous-segments',
        'Un ROAS inférieur à 3:1 est généralement considéré comme problématique en e-commerce',
        'Regardez les différences de performance par appareil et par cible démographique'
      ]
    },
    {
      id: 'visual-analysis',
      title: 'Défi d\'analyse visuelle rapide',
      type: 'analysis',
      difficulty: 'débutant',
      duration: '45 min',
      context: 'Vous êtes en réunion avec la direction marketing. Quatre graphiques sont projetés à l\'écran avec des données de performance. Vous devez rapidement identifier les insights clés pour guider les décisions stratégiques.',
      objective: 'Analyser rapidement des graphiques de performance marketing et identifier les points d\'attention prioritaires.',
      resources: [
        {
          title: 'Graphiques de performance',
          url: '/data/visual_analysis_charts.html',
          description: 'Dashboard avec 4 graphiques représentant différents aspects de la performance marketing (ROAS, CPC, trafic, conversion).',
          type: 'tool'
        }
      ],
      tasks: [
        'Observez les 4 graphiques pendant 5 minutes maximum',
        'Identifiez le jour le moins rentable et expliquez pourquoi',
        'Trouvez le canal avec le CPC le plus élevé et proposez une hypothèse',
        'Repérez la période de baisse de trafic et ses implications',
        'Déterminez quel appareil convertit le mieux',
        'Formulez 2 recommandations prioritaires basées sur ces données'
      ],
      expectedOutput: 'Synthèse rapide de 1 slide avec les insights clés et 2 recommandations actionnables.',
      tips: [
        'En analyse rapide, concentrez-vous sur les écarts les plus significatifs',
        'Cherchez des patterns temporels (weekend vs semaine)',
        'Reliez toujours vos observations à des actions business concrètes'
      ]
    },
    {
      id: 'interactive-quiz',
      title: 'Quiz interactif : Battle des métriques',
      type: 'interpretation',
      difficulty: 'débutant',
      duration: '30 min',
      context: 'Format dynamique de questions-réponses où les équipes s\'affrontent sur leur connaissance des KPIs marketing. Levez la main pour répondre !',
      objective: 'Tester et consolider vos connaissances sur les métriques marketing de façon ludique et interactive.',
      resources: [
        {
          title: 'Questions préparées',
          description: 'Le formateur pose les questions oralement. Première équipe à lever la main répond.',
          type: 'data'
        }
      ],
      tasks: [
        'Formation de 3-4 équipes de 4-5 personnes',
        'Questions en 3 rounds : Définitions, Calculs rapides, Cas pratiques',
        'Système de points : 1 pt (définition), 2 pts (calcul), 3 pts (cas pratique)',
        'Bonus "justification" : +1 pt si l\'équipe explique le "pourquoi"',
        'Round final : questions à choix multiples projetées'
      ],
      expectedOutput: 'Équipe gagnante et révision collective des points clés mal maîtrisés.',
      tips: [
        'Exemples de questions : "CTR de 2% sur 100k impressions = combien de clics ?"',
        '"Pourquoi le ROAS peut-il être trompeur si regardé seul ?"',
        '"Un CPA de 25€ est-il bon pour un produit à 50€ de marge ?"'
      ]
    },
    {
      id: 'scenario-workshop',
      title: 'Atelier scénarios : Que feriez-vous ?',
      type: 'interpretation',
      difficulty: 'intermédiaire',
      duration: '60 min',
      context: 'Jeu de rôle basé sur des situations réelles d\'entreprise. Chaque équipe reçoit un scénario différent et doit proposer une stratégie en 15 minutes.',
      objective: 'Appliquer les concepts théoriques à des situations business concrètes et développer le reflexe d\'analyse.',
      resources: [
        {
          title: 'Scénarios d\'entreprise',
          description: '6 scénarios réels : startup SaaS, e-commerce mode, app mobile, restaurant, agence immobilière, formation en ligne.',
          type: 'data'
        }
      ],
      tasks: [
        'Chaque équipe tire au sort un scénario d\'entreprise',
        'Analyse du problème : identifier les KPIs concernés',
        'Proposition d\'actions : au moins 3 recommandations chiffrées',
        'Présentation en 3 minutes par équipe',
        'Vote du public pour la solution la plus réaliste'
      ],
      expectedOutput: 'Pitch de 3 minutes avec diagnostic + plan d\'action chiffré.',
      tips: [
        'Exemple scénario : "Votre app mobile a 30% de churn mensuel. Budget : 10k€. Que faites-vous ?"',
        'Pensez ROI : quelle action aura le plus grand impact avec le budget disponible ?',
        'Définissez toujours comment mesurer le succès de vos actions'
      ]
    },
    {
      id: 'customer-voice',
      title: 'Analyse qualitative de la satisfaction client',
      type: 'research',
      difficulty: 'débutant',
      duration: '90 min',
      context: 'Vous êtes Data Analyst pour la marque Osprey, référence mondiale dans les sacs à dos de randonnée. Pour préparer le lancement du prochain modèle, l\'équipe Produit veut une synthèse des retours clients sur l\'un de vos best-sellers : le sac "Talon 22".',
      objective: 'Transformer des commentaires qualitatifs en analyse quantitative exploitable pour l\'équipe produit.',
      resources: [
        {
          title: 'Avis clients Osprey Talon 22',
          url: 'https://www.i-run.fr/p/osprey-talon-22-m103307',
          description: 'Page produit avec avis clients réels en français. Consultez la section "Avis des clients" en bas de page.',
          type: 'link'
        }
      ],
      tasks: [
        'Analysez 15 à 20 avis récents avec des notes variées (5, 3, et 1 étoiles)',
        'Créez une liste de "tags" thématiques au fur et à mesure (ex: Confort, Légèreté, Durabilité, Prix...)',
        'Comptabilisez chaque mention positive et négative par tag',
        'Synthétisez vos findings en un mémo d\'une page pour l\'équipe Produit'
      ],
      expectedOutput: 'Mémo structuré avec : 3 points forts incontestés, 2 axes d\'amélioration prioritaires, et 1 verbatim client marquant.',
      tips: [
        'Variez les types d\'avis pour avoir une vision équilibrée',
        'Soyez précis dans vos catégories pour éviter les doublons',
        'Un bon verbatim résume l\'expérience globale du produit'
      ]
    },
    {
      id: 'attribution-challenge',
      title: 'Modélisation de l\'attribution marketing',
      type: 'interpretation',
      difficulty: 'avancé',
      duration: '60 min',
      context: 'Un client a réalisé un achat de 200€ sur votre site. Votre mission est de comprendre comment les différents modèles d\'attribution répartissent le mérite de cette vente entre les canaux marketing qui sont intervenus dans son parcours.',
      objective: 'Maîtriser les modèles d\'attribution marketing et comprendre leur impact sur les décisions budgétaires.',
      resources: [
        {
          title: 'Parcours client détaillé',
          description: 'Jour 1: Pub Instagram (1,50€) → Jour 4: Article blog SEO → Jour 6: Newsletter email → Jour 6 soir: Accès direct + Achat 200€',
          type: 'data'
        }
      ],
      tasks: [
        'Répartissez les 200€ de CA selon le modèle "Dernier Clic" (déjà fait: 200€ pour l\'Accès Direct)',
        'Calculez la répartition selon le modèle "Premier Clic"',
        'Appliquez le modèle "Linéaire" (répartition équitable)',
        'Répondez à la question stratégique sur les risques du modèle "Dernier Clic"'
      ],
      expectedOutput: 'Tableau complété avec les 3 modèles d\'attribution et analyse critique des biais du modèle "Dernier Clic".',
      tips: [
        'Premier Clic = 100% au premier point de contact',
        'Linéaire = division équitable entre tous les points de contact',
        'Réfléchissez aux conséquences budgétaires de chaque modèle'
      ]
    }
  ];

  // Données des modules du cours
  const modules: CourseModule[] = [
    {
      id: 'introduction',
      title: 'Fondements du data marketing',
      type: 'introduction',
      learningObjectives: [
        'Définir le rôle stratégique du data marketer',
        'Identifier les 3 niveaux de maturité analytique',
        'Distinguer données, métriques et indicateurs'
      ],
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Vision stratégique du data marketing</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Le data marketing représente l'évolution du marketing vers une approche scientifique et mesurable. 
              En tant que data marketer, vous n'êtes pas un technicien mais un <strong>stratège-traducteur</strong> : 
              vous transformez des données complexes en recommandations business actionnables.
            </p>
            <div className="bg-white border border-indigo-200 rounded-lg p-4">
              <p className="font-medium text-indigo-900 text-center">
                "L'intuition reste importante, mais elle doit maintenant être validée par la donnée"
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TheoryCard title="Niveau 1 : Descriptif" variant="primary">
              <div className="space-y-3">
                <p className="font-medium text-indigo-800">Que s'est-il passé ?</p>
                <p className="text-xs text-slate-600">
                  Mesure et reporting des performances passées. Base de toute analyse.
                </p>
                <div className="bg-indigo-50 p-3 rounded text-xs">
                  <strong>Exemple :</strong> "10 000 visiteurs le mois dernier"
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Niveau 2 : Diagnostique" variant="secondary">
              <div className="space-y-3">
                <p className="font-medium text-slate-800">Pourquoi cela s'est-il passé ?</p>
                <p className="text-xs text-slate-600">
                  Analyse des causes et corrélations. Compréhension des leviers.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs">
                  <strong>Exemple :</strong> "40% du trafic vient de la campagne X"
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Niveau 3 : Prédictif">
              <div className="space-y-3">
                <p className="font-medium text-slate-800">Que va-t-il se passer ?</p>
                <p className="text-xs text-slate-600">
                  Anticipation et recommandations. L'objectif ultime du data marketing.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs">
                  <strong>Exemple :</strong> "Baisse prévue de 10%, lancer une promotion"
                </div>
              </div>
            </TheoryCard>
          </div>
        </div>
      )
    },
    {
      id: 'customer-journey-kpis',
      title: 'Métriques du parcours client',
      type: 'theory',
      learningObjectives: [
        'Structurer les KPIs selon le parcours client',
        'Identifier les métriques critiques de chaque étape',
        'Comprendre les interdépendances entre indicateurs'
      ],
      content: (
        <div className="space-y-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              Les métriques marketing s'organisent naturellement selon le parcours client. 
              Chaque étape possède ses indicateurs spécifiques, mais l'efficacité réside dans leur analyse globale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TheoryCard title="Acquisition" variant="primary">
              <div className="space-y-3">
                <p className="font-medium text-indigo-800 text-xs mb-3">Comment les prospects nous découvrent-ils ?</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Impressions</span>
                    <span className="text-slate-600">Visibilité</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">CPM</span>
                    <span className="text-slate-600">Coût notoriété</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">CTR</span>
                    <span className="text-slate-600">Pertinence message</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">CPC</span>
                    <span className="text-slate-600">Coût du clic</span>
                  </div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Engagement">
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-xs mb-3">L'expérience initiale est-elle satisfaisante ?</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Taux d'engagement</span>
                    <span className="text-slate-600">Sessions qualitatives</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Pages/session</span>
                    <span className="text-slate-600">Profondeur navigation</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Durée session</span>
                    <span className="text-slate-600">Temps d'attention</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Taux de rebond</span>
                    <span className="text-slate-600">Pertinence contenu</span>
                  </div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Conversion" variant="secondary">
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-xs mb-3">Les visiteurs réalisent-ils l'action souhaitée ?</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Taux de conversion</span>
                    <span className="text-slate-600">Efficacité site</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">CPA</span>
                    <span className="text-slate-600">Coût acquisition</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">AOV</span>
                    <span className="text-slate-600">Valeur panier</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">ROAS</span>
                    <span className="text-slate-600">Rentabilité pub</span>
                  </div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Rétention">
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-xs mb-3">Les clients reviennent-ils ?</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Taux de rétention</span>
                    <span className="text-slate-600">Fidélisation</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">LTV</span>
                    <span className="text-slate-600">Valeur vie client</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">Churn rate</span>
                    <span className="text-slate-600">Perte clients</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">NPS</span>
                    <span className="text-slate-600">Satisfaction</span>
                  </div>
                </div>
              </div>
            </TheoryCard>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold text-amber-900 mb-3 text-sm">Principe fondamental : L'effet cascade</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              Une dégradation en amont du funnel amplifie ses effets en aval. Une baisse de CTR réduit le trafic qualifié, 
              ce qui impacte l'engagement, puis les conversions et finalement la LTV. D'où l'importance d'une vision systémique.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-sources',
      title: 'Écosystème et sources de données',
      type: 'theory',
      learningObjectives: [
        'Classifier les différents types de sources de données',
        'Comprendre l\'importance du plan de tagging',
        'Savoir croiser les sources pour générer des insights'
      ],
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TheoryCard title="Sources comportementales" variant="primary">
              <div className="space-y-3">
                <p className="font-medium text-indigo-800 text-xs">Données "On-Site"</p>
                <div className="space-y-2 text-xs">
                  <div><strong>Outils :</strong> GA4, Matomo, Adobe Analytics</div>
                  <div><strong>Répondent à :</strong> Comment les utilisateurs naviguent-ils ? Où abandonnent-ils ?</div>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-medium text-indigo-900 text-xs">Plan de tagging</p>
                  <p className="text-xs text-indigo-700 mt-1">
                    Document de référence définissant tous les événements à tracker
                  </p>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Sources d'acquisition">
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-xs">Données "Off-Site"</p>
                <div className="space-y-2 text-xs">
                  <div><strong>Outils :</strong> Search Console, Google Ads, Meta Ads</div>
                  <div><strong>Répondent à :</strong> D'où vient le trafic ? Quelle est la performance des campagnes ?</div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Sources business">
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-xs">Données "Backend"</p>
                <div className="space-y-2 text-xs">
                  <div><strong>Outils :</strong> CRM, ERP, bases internes</div>
                  <div><strong>Répondent à :</strong> Qui sont nos meilleurs clients ? Quelle rentabilité par segment ?</div>
                </div>
              </div>
            </TheoryCard>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Cas pratique : Diagnostic croisé</h4>
            <p className="text-sm text-slate-700 mb-4">
              Un hôtel constate une baisse des réservations. En croisant trois sources de données, 
              identifiez le problème principal :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded p-3 text-xs">
                <div className="font-medium text-slate-900 mb-1">GA4</div>
                <div>Taux d'abandon page réservation : 85%</div>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3 text-xs">
                <div className="font-medium text-slate-900 mb-1">Avis clients</div>
                <div>"Superbe vue, mais très bruyant le soir"</div>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3 text-xs">
                <div className="font-medium text-slate-900 mb-1">Search Console</div>
                <div>Requête "hôtel calme" : position 4, CTR 1,5%</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-4 italic">
              Réflexion : Comment ces informations se connectent-elles pour révéler un problème de positionnement ?
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'workshops',
      title: 'Ateliers pratiques',
      type: 'workshop',
      learningObjectives: [
        'Analyser rapidement des graphiques de performance marketing',
        'Diagnostiquer les performances multi-canaux via données CSV',
        'Appliquer les KPIs dans des quiz interactifs compétitifs',
        'Résoudre des scénarios business réels en équipe',
        'Transformer du feedback qualitatif en insights quantitatifs',
        'Maîtriser les modèles d\'attribution marketing'
      ],
      content: (
        <div className="space-y-12">
          <div className="text-center bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Mise en pratique professionnelle</h3>
            <p className="text-slate-700 max-w-2xl mx-auto mb-6">
              Ces ateliers utilisent de vraies données et des outils professionnels. 
              Chaque exercice développe une compétence spécifique directement applicable en entreprise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <div className="font-semibold text-indigo-900">📊 Analyse visuelle</div>
                <div className="text-indigo-700">Graphiques intégrés</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <div className="font-semibold text-indigo-900">🏆 Quiz interactif</div>
                <div className="text-indigo-700">Compétition en direct</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <div className="font-semibold text-indigo-900">🎭 Scénarios business</div>
                <div className="text-indigo-700">Cas d'entreprise réels</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <div className="font-semibold text-indigo-900">📈 Données CSV</div>
                <div className="text-indigo-700">Analyse multi-canaux</div>
              </div>
            </div>
          </div>

          {/* Exercice 1: Analyse visuelle avec graphiques intégrés */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">📊 Défi d'analyse visuelle rapide</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Analyse</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Débutant</span>
                <span className="text-slate-600 text-sm">45 minutes</span>
              </div>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Vous êtes en réunion avec la direction marketing. Quatre graphiques sont projetés. 
                Analysez rapidement les données pour identifier les insights clés et guider les décisions stratégiques.
              </p>
            </div>
            
            <InteractiveCharts onQuestionClick={handleQuestionClick} />
            
            {selectedAnswer && (
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-semibold text-emerald-900 mb-2">✅ {selectedAnswer.question}</h4>
                <p className="text-emerald-800">{selectedAnswer.answer}</p>
                <button
                  onClick={() => setSelectedAnswer(null)}
                  className="mt-3 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                >
                  Fermer la réponse
                </button>
              </div>
            )}

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🎯 Livrable attendu</h4>
              <p className="text-blue-800 text-sm mb-3">
                Synthèse rapide de 1 slide avec les insights clés et 2 recommandations actionnables.
              </p>
              <div className="text-xs text-blue-700">
                <strong>Conseils :</strong> Concentrez-vous sur les écarts significatifs, 
                cherchez des patterns temporels (weekend vs semaine), reliez vos observations à des actions business.
              </div>
            </div>
          </div>

          {/* Exercice 2: Quiz interactif complet */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">🏆 Quiz interactif : Battle des métriques</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Interprétation</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Débutant</span>
                <span className="text-slate-600 text-sm">30 minutes</span>
              </div>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Format dynamique de questions-réponses où les équipes s'affrontent sur leur connaissance des KPIs marketing. 
                Formation de 3-4 équipes, première main levée répond !
              </p>
            </div>
            
            <InteractiveQuiz />
          </div>

          {/* Exercice 3: Scénarios business complets */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">🎭 Atelier scénarios : Que feriez-vous ?</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Interprétation</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Intermédiaire</span>
                <span className="text-slate-600 text-sm">60 minutes</span>
              </div>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Jeu de rôle basé sur 6 situations réelles d'entreprise. Chaque équipe tire au sort un scénario 
                et propose une stratégie en 15 minutes, puis présente en 3 minutes.
              </p>
            </div>
            
            <BusinessScenarios />
          </div>

          {/* Exercices supplémentaires */}
          {exercises.slice(1).map((exercise, index) => (
            <PracticalExercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )
    },
    {
      id: 'english-importance',
      title: 'L\'anglais dans le data marketing',
      type: 'theory',
      learningObjectives: [
        'Comprendre pourquoi l\'anglais est incontournable',
        'Maîtriser le vocabulaire technique essentiel',
        'Identifier les contextes d\'usage professionnel'
      ],
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Pourquoi l'anglais est-il incontournable ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Raisons techniques</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• <strong>Tous les outils</strong> sont en anglais (Google Analytics, Meta Ads, Tableau)</li>
                  <li>• <strong>Interfaces non traduites</strong> : KPIs affichés en anglais</li>
                  <li>• <strong>Documentation officielle</strong> uniquement en anglais</li>
                  <li>• <strong>APIs et données</strong> : noms de champs en anglais</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Raisons professionnelles</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• <strong>Équipes internationales</strong> : langue de travail commune</li>
                  <li>• <strong>Conférences et formations</strong> : 90% en anglais</li>
                  <li>• <strong>Certifications officielles</strong> : Google, Meta, Adobe en anglais</li>
                  <li>• <strong>Mobilité professionnelle</strong> : startups et multinationales</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TheoryCard title="Vocabulaire essentiel à maîtriser" variant="primary">
              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-indigo-900">Click-Through Rate (CTR)</div>
                  <div className="text-indigo-700">Jamais traduit dans les outils. Interface Google/Meta affiche "CTR", pas "Taux de clic"</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-indigo-900">Return On Ad Spend (ROAS)</div>
                  <div className="text-indigo-700">KPI e-commerce standard mondial. Shopify, Amazon, tous en ROAS</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-indigo-900">Customer Lifetime Value (LTV)</div>
                  <div className="text-indigo-700">Concept business model. Investisseurs et équipes internationales parlent de LTV</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-indigo-900">Data-driven</div>
                  <div className="text-indigo-700">Philosophie business moderne. Aucune traduction acceptée en entreprise</div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Conseils pour progresser">
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <h5 className="font-semibold text-green-900 mb-1">Immersion quotidienne</h5>
                  <p className="text-green-800 text-xs">Configurez Google Analytics en anglais. Forcez-vous à lire les rapports dans la langue originale.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-1">Veille anglophone</h5>
                  <p className="text-blue-800 text-xs">Suivez Marketing Land, Search Engine Land, Google Analytics Blog en version anglaise.</p>
                </div>
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <h5 className="font-semibold text-purple-900 mb-1">Certifications</h5>
                  <p className="text-purple-800 text-xs">Google Analytics Academy, Facebook Blueprint : forcez-vous à les passer en anglais.</p>
                </div>
                <div className="p-3 bg-orange-50 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-900 mb-1">Communauté</h5>
                  <p className="text-orange-800 text-xs">Rejoignez des groupes LinkedIn/Reddit data marketing anglophones. Posez vos questions en anglais.</p>
                </div>
              </div>
            </TheoryCard>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold text-yellow-900 mb-3">💡 Message pour vos futures carrières</h4>
            <p className="text-yellow-800 text-sm leading-relaxed mb-4">
              En data marketing, vous travaillerez avec des outils conçus par Google, Meta, Adobe... 
              Ces entreprises américaines ne traduisent pas leurs interfaces techniques. 
              Un data marketer qui ne maîtrise pas l'anglais technique sera limité dans son évolution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded border border-yellow-300">
                <strong className="text-yellow-900">Stage/Premier emploi :</strong>
                <div className="text-yellow-800 mt-1">Interfaces outils, rapports clients, équipes internationales</div>
              </div>
              <div className="bg-white p-3 rounded border border-yellow-300">
                <strong className="text-yellow-900">Évolution career :</strong>
                <div className="text-yellow-800 mt-1">Conférences, formations avancées, certifications</div>
              </div>
              <div className="bg-white p-3 rounded border border-yellow-300">
                <strong className="text-yellow-900">Expert/Manager :</strong>
                <div className="text-yellow-800 mt-1">Documentation technique, APIs, équipes globales</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'advanced-concepts',
      title: 'Stratégie et communication data',
      type: 'synthesis',
      learningObjectives: [
        'Structurer une présentation data-driven',
        'Maîtriser les enjeux de l\'attribution marketing',
        'Transformer des insights en recommandations business'
      ],
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TheoryCard title="Data storytelling" variant="primary">
              <div className="space-y-3">
                <p className="text-xs text-slate-700">
                  Votre objectif n'est pas de présenter des données, mais de raconter une histoire convaincante basée sur des preuves.
                </p>
                <div className="space-y-2">
                  <div className="text-xs"><strong>1. Contexte :</strong> Situation et enjeux business</div>
                  <div className="text-xs"><strong>2. Données :</strong> Sources et méthodologie</div>
                  <div className="text-xs"><strong>3. Insights :</strong> Découvertes marquantes</div>
                  <div className="text-xs"><strong>4. Recommandations :</strong> Actions concrètes</div>
                  <div className="text-xs"><strong>5. Suivi :</strong> Métriques de contrôle</div>
                </div>
              </div>
            </TheoryCard>

            <TheoryCard title="Attribution marketing">
              <div className="space-y-3">
                <p className="text-xs text-slate-700 mb-3">
                  Question cruciale : quel canal mérite le crédit d'une conversion ? 
                  La réponse influence directement l'allocation des budgets.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span><strong>Dernier clic</strong></span>
                    <span className="text-slate-600">Simple mais biaité</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Premier clic</strong></span>
                    <span className="text-slate-600">Valorise la découverte</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Linéaire</strong></span>
                    <span className="text-slate-600">Répartition équitable</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Data-driven</strong></span>
                    <span className="text-slate-600">IA (Google, Meta)</span>
                  </div>
                </div>
              </div>
            </TheoryCard>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Recommandations pour la suite</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium text-slate-800 mb-2">Approfondissement technique</h5>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>• Maîtrisez Google Analytics 4 et ses rapports personnalisés</li>
                  <li>• Apprenez les bases de SQL pour interroger les bases de données</li>
                  <li>• Explorez les outils de Business Intelligence (Tableau, Power BI)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 mb-2">Développement business</h5>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>• Participez aux réunions stratégiques pour comprendre les enjeux</li>
                  <li>• Développez votre capacité de synthèse et de présentation</li>
                  <li>• Restez en veille sur les évolutions du digital marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentModuleData = modules[currentModule];
  const totalModules = modules.length;

  const navigateModule = (direction: number) => {
    const newModule = currentModule + direction;
    if (newModule >= 0 && newModule < totalModules) {
      setCurrentModule(newModule);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* En-tête épuré */}
      <header className="text-center bg-white border border-slate-200 rounded-xl shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Formation data marketing</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Maîtriser la chaîne de la donnée, du tracking à la recommandation stratégique
        </p>
      </header>

      {/* Barre de progression */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{currentModuleData.title}</h2>
            {currentModuleData.subtitle && (
              <p className="text-sm text-slate-600 mt-1">{currentModuleData.subtitle}</p>
            )}
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-500 mb-2">Progression</div>
            <div className="text-lg font-semibold text-slate-900">
              {currentModule + 1} / {totalModules}
            </div>
          </div>
        </div>
        
        {/* Barre de progression visuelle */}
        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentModule + 1) / totalModules) * 100}%` }}
          ></div>
        </div>
        
        {currentModuleData.learningObjectives && (
          <div>
            <h3 className="font-medium text-slate-900 mb-2 text-sm">Objectifs du module :</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-slate-700">
              {currentModuleData.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contenu du module */}
      <main className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 mb-8">
        {currentModuleData.content}
      </main>

      {/* Navigation épurée */}
      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-6">
        <button
          onClick={() => navigateModule(-1)}
          disabled={currentModule === 0}
          className="flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Précédent</span>
        </button>
        
        <div className="flex items-center space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentModule(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentModule 
                  ? 'bg-indigo-600' 
                  : index < currentModule 
                    ? 'bg-indigo-300' 
                    : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => navigateModule(1)}
          disabled={currentModule === totalModules - 1}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
        >
          <span className="text-sm font-medium">
            {currentModule === totalModules - 1 ? 'Terminer' : 'Suivant'}
          </span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DataMarketingCourse;