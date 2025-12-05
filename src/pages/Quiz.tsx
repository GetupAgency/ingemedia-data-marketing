import React, { useState } from 'react';

/**
 * Page de quiz sur le data marketing
 * 
 * Ce quiz contient 20 questions qui augmentent progressivement en complexité
 * pour aider les étudiants à évaluer leurs connaissances en data marketing.
 * 
 * @component
 * @returns {JSX.Element} - Le composant Quiz
 */
const Quiz: React.FC = () => {
  // État pour suivre la question actuelle
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  // État pour suivre le score
  const [score, setScore] = useState(0);
  
  // État pour suivre si le quiz est terminé
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  
  // État pour suivre les réponses de l'utilisateur
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(20).fill(-1));
  
  // État pour suivre si une réponse a été sélectionnée
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // État pour suivre si la question a été validée
  const [isAnswerValidated, setIsAnswerValidated] = useState(false);

  // Questions du quiz
  const questions = [
    // Niveau débutant
    {
      question: "Qu'est-ce que le data marketing ?",
      options: [
        "L'utilisation des données pour orienter les stratégies marketing",
        "La création de publicités en ligne",
        "L'envoi d'emails promotionnels",
        "La gestion de la présence sur les réseaux sociaux"
      ],
      correctAnswer: 0,
      explanation: "Le data marketing est l'utilisation des données et de l'analyse pour guider les décisions et stratégies marketing, optimiser les campagnes et personnaliser l'expérience client."
    },
    {
      question: "Quelle est la principale source de données utilisée en marketing digital ?",
      options: [
        "Les sondages téléphoniques",
        "Les focus groups",
        "Le comportement des utilisateurs en ligne",
        "Les études de marché traditionnelles"
      ],
      correctAnswer: 2,
      explanation: "Le comportement des utilisateurs en ligne (clics, visites, conversions, etc.) constitue la principale source de données en marketing digital, car elle fournit des informations en temps réel sur les actions et préférences des utilisateurs."
    },
    {
      question: "Quel format de fichier est couramment utilisé pour l'échange de données marketing ?",
      options: [
        "PDF",
        "CSV",
        "JPG",
        "MP4"
      ],
      correctAnswer: 1,
      explanation: "Le format CSV (Comma-Separated Values) est très utilisé pour l'échange de données marketing car il est simple, léger et compatible avec la plupart des outils d'analyse."
    },
    {
      question: "Qu'est-ce qu'un KPI en marketing ?",
      options: [
        "Knowledge Performance Index",
        "Key Product Innovation",
        "Key Performance Indicator",
        "Keyword Placement Initiative"
      ],
      correctAnswer: 2,
      explanation: "KPI signifie Key Performance Indicator (Indicateur Clé de Performance). Il s'agit de métriques mesurables utilisées pour évaluer l'efficacité d'une stratégie marketing."
    },
    {
      question: "Quelle métrique mesure le pourcentage de visiteurs qui quittent un site après avoir vu une seule page ?",
      options: [
        "Taux de conversion",
        "Taux de rebond",
        "Taux d'engagement",
        "Taux de rétention"
      ],
      correctAnswer: 1,
      explanation: "Le taux de rebond mesure le pourcentage de visiteurs qui quittent un site après avoir consulté une seule page, sans interagir davantage avec le site."
    },
    
    // Niveau intermédiaire
    {
      question: "Qu'est-ce que la segmentation client en data marketing ?",
      options: [
        "Diviser les campagnes marketing en plusieurs phases",
        "Diviser les clients en groupes homogènes selon des critères spécifiques",
        "Séparer les produits par catégorie",
        "Diviser le budget marketing par canal"
      ],
      correctAnswer: 1,
      explanation: "La segmentation client consiste à diviser une base de clients en groupes ayant des caractéristiques communes (comportement, démographie, préférences, etc.) pour personnaliser les stratégies marketing."
    },
    {
      question: "Quelle méthode d'analyse permet de déterminer la corrélation entre différentes variables marketing ?",
      options: [
        "Analyse SWOT",
        "Analyse de régression",
        "Analyse PESTEL",
        "Analyse des 5 forces de Porter"
      ],
      correctAnswer: 1,
      explanation: "L'analyse de régression est une méthode statistique qui permet d'étudier la relation entre une variable dépendante et une ou plusieurs variables indépendantes, aidant à identifier les corrélations dans les données marketing."
    },
    {
      question: "Qu'est-ce que le ROI en marketing ?",
      options: [
        "Rate Of Interaction",
        "Return On Investment",
        "Range Of Impressions",
        "Review Of Income"
      ],
      correctAnswer: 1,
      explanation: "ROI signifie Return On Investment (Retour sur Investissement). Il mesure le rapport entre les bénéfices générés par une campagne marketing et son coût, exprimé en pourcentage."
    },
    {
      question: "Dans le contexte du data marketing, que signifie CPA ?",
      options: [
        "Cost Per Action",
        "Customer Profile Analysis",
        "Channel Performance Assessment",
        "Customer Path Analysis"
      ],
      correctAnswer: 0,
      explanation: "CPA signifie Cost Per Action (Coût Par Action). C'est une métrique qui mesure le coût d'acquisition d'une action spécifique, comme un achat ou une inscription."
    },
    {
      question: "Quelle technique permet de prédire le comportement futur des clients en fonction de leurs comportements passés ?",
      options: [
        "Apprentissage supervisé",
        "Marketing sensoriel",
        "A/B testing",
        "Analyse de sentiments"
      ],
      correctAnswer: 0,
      explanation: "L'apprentissage supervisé est une technique d'intelligence artificielle qui utilise des modèles formés sur des données historiques pour prédire les comportements futurs des clients."
    },
    
    // Niveau avancé
    {
      question: "Quelle méthode d'analyse permet d'identifier les facteurs qui influencent le plus une variable cible comme le taux de conversion ?",
      options: [
        "Analyse de cohorte",
        "Analyse de sentiment",
        "Analyse factorielle",
        "Analyse de sensibilité"
      ],
      correctAnswer: 3,
      explanation: "L'analyse de sensibilité permet d'évaluer comment la variation de différentes variables d'entrée (comme le prix ou la segmentation) affecte une variable de sortie (comme le taux de conversion), aidant à identifier les facteurs les plus influents."
    },
    {
      question: "Dans le cadre du machine learning appliqué au marketing, qu'est-ce que le 'feature engineering' ?",
      options: [
        "La création de nouvelles fonctionnalités pour les plateformes marketing",
        "La transformation des données brutes en variables pertinentes pour les modèles",
        "L'optimisation des designs publicitaires",
        "La sélection des canaux marketing les plus performants"
      ],
      correctAnswer: 1,
      explanation: "Le feature engineering est le processus de transformation des données brutes en variables (features) plus pertinentes et exploitables pour les modèles de machine learning, améliorant ainsi leur performance."
    },
    {
      question: "Quelle technique est utilisée pour identifier les segments de clients similaires sans définition préalable des catégories ?",
      options: [
        "Analyse discriminante",
        "Segmentation supervisée",
        "Clustering",
        "Analyse conjointe"
      ],
      correctAnswer: 2,
      explanation: "Le clustering (ou segmentation non supervisée) est une technique qui permet de regrouper automatiquement des clients ayant des comportements ou caractéristiques similaires, sans définir au préalable les catégories."
    },
    {
      question: "Qu'est-ce que l'attribution marketing multi-touch ?",
      options: [
        "L'assignation de plusieurs responsables à une campagne marketing",
        "La distribution du crédit d'une conversion entre différents points de contact marketing",
        "L'utilisation de plusieurs canaux pour une même campagne",
        "L'adaptation d'une campagne à différents segments de clients"
      ],
      correctAnswer: 1,
      explanation: "L'attribution marketing multi-touch est un modèle qui distribue le crédit d'une conversion entre les différents points de contact (publicités, emails, etc.) qui ont contribué à influencer le parcours d'achat du client."
    },
    {
      question: "Dans le contexte de l'analyse prédictive, qu'est-ce que le 'Customer Lifetime Value' (CLV) ?",
      options: [
        "La durée totale pendant laquelle un client reste fidèle à une marque",
        "La valeur totale des achats qu'un client a déjà effectués",
        "La valeur économique totale qu'un client devrait apporter à l'entreprise sur toute la durée de leur relation",
        "Le coût d'acquisition d'un nouveau client"
      ],
      correctAnswer: 2,
      explanation: "Le Customer Lifetime Value (CLV) est une prédiction de la valeur économique totale qu'un client devrait apporter à une entreprise pendant toute la durée de leur relation, tenant compte des revenus futurs estimés."
    },
    
    // Niveau expert
    {
      question: "Comment la technique de 'uplift modeling' diffère-t-elle des techniques traditionnelles de prédiction en marketing ?",
      options: [
        "Elle se concentre sur les ventes à forte valeur ajoutée",
        "Elle prédit l'impact incrémental d'une action marketing sur le comportement du client",
        "Elle utilise uniquement des données en temps réel",
        "Elle ne nécessite pas de modélisation statistique"
      ],
      correctAnswer: 1,
      explanation: "L'uplift modeling prédit la différence de comportement causée spécifiquement par une action marketing, en distinguant les clients qui réagiraient positivement uniquement grâce à cette action, contrairement aux modèles traditionnels qui prédisent simplement le comportement global."
    },
    {
      question: "Quelle technique d'analyse permet d'optimiser l'allocation du budget marketing entre différents canaux pour maximiser le ROI global ?",
      options: [
        "Marketing mix modeling",
        "Optimisation de portefeuille de Markowitz",
        "Analyse de sensibilité multivariée",
        "Toutes les réponses précédentes"
      ],
      correctAnswer: 3,
      explanation: "Toutes ces techniques peuvent être utilisées pour optimiser l'allocation du budget marketing. Le marketing mix modeling mesure l'impact de différentes activités marketing, l'optimisation de portefeuille de Markowitz permet d'équilibrer risque et rendement, et l'analyse de sensibilité multivariée évalue les effets des changements simultanés de plusieurs variables."
    },
    {
      question: "Dans le contexte des tests A/B, qu'est-ce que le 'Multi-Armed Bandit' (MAB) ?",
      options: [
        "Un test qui compare simultanément plusieurs versions",
        "Un algorithme qui équilibre l'exploration de nouvelles variantes et l'exploitation des variantes performantes",
        "Une technique pour tester uniquement les utilisateurs les plus actifs",
        "Un modèle d'attribution avancé pour les campagnes display"
      ],
      correctAnswer: 1,
      explanation: "Le Multi-Armed Bandit est une approche algorithmique qui équilibre l'exploration (tester de nouvelles variantes) et l'exploitation (utiliser les variantes qui performent bien), optimisant ainsi les résultats en temps réel, contrairement aux tests A/B traditionnels qui ont une répartition fixe du trafic."
    },
    {
      question: "Quelle méthode est utilisée pour éviter le surajustement (overfitting) dans les modèles prédictifs de marketing ?",
      options: [
        "Augmenter le nombre de variables dans le modèle",
        "Utiliser uniquement des données récentes",
        "La validation croisée et la régularisation",
        "Simplifier les segments de clients"
      ],
      correctAnswer: 2,
      explanation: "La validation croisée et la régularisation sont des techniques utilisées pour éviter le surajustement dans les modèles prédictifs. La validation croisée teste le modèle sur des données non utilisées pour l'entraînement, tandis que la régularisation ajoute une pénalité pour la complexité du modèle."
    },
    {
      question: "Comment les modèles de 'Marketing Attribution Bayésien' se distinguent-ils des modèles d'attribution classiques ?",
      options: [
        "Ils prennent en compte l'incertitude et intègrent des connaissances préalables",
        "Ils fonctionnent exclusivement sur les données hors ligne",
        "Ils n'utilisent que les données de la première et dernière interaction",
        "Ils requièrent moins de données pour être efficaces"
      ],
      correctAnswer: 0,
      explanation: "Les modèles d'attribution bayésiens se distinguent par leur capacité à intégrer l'incertitude et des connaissances préalables (prior) dans l'analyse, permettant une modélisation plus nuancée et robuste de l'impact des différents points de contact marketing."
    }
  ];

  // Fonction pour gérer la sélection d'une réponse
  const handleSelectAnswer = (index: number) => {
    if (!isAnswerValidated) {
      setSelectedAnswer(index);
    }
  };

  // Fonction pour valider la réponse
  const handleValidateAnswer = () => {
    if (selectedAnswer !== null) {
      // Mettre à jour les réponses de l'utilisateur
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(newUserAnswers);

      // Mettre à jour le score si la réponse est correcte
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      // Marquer la question comme validée
      setIsAnswerValidated(true);
    }
  };

  // Fonction pour passer à la question suivante
  const handleNextQuestion = () => {
    // Utiliser setTimeout pour éviter les conflits de manipulation du DOM par React
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerValidated(false);
      } else {
        setIsQuizFinished(true);
      }
    }, 0);
  };

  // Fonction pour recommencer le quiz
  const handleRestartQuiz = () => {
    // Utiliser setTimeout pour éviter les conflits de manipulation du DOM
    setTimeout(() => {
      setCurrentQuestion(0);
      setScore(0);
      setIsQuizFinished(false);
      setUserAnswers(Array(20).fill(-1));
      setSelectedAnswer(null);
      setIsAnswerValidated(false);
    }, 0);
  };

  // Calculer le niveau de difficulté actuel
  const getDifficultyLevel = () => {
    if (currentQuestion < 5) return "Débutant";
    if (currentQuestion < 10) return "Intermédiaire";
    if (currentQuestion < 15) return "Avancé";
    return "Expert";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la page */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Data Marketing</h1>
          <p className="text-xl text-gray-600">
            Testez vos connaissances en data marketing à travers 20 questions de difficulté progressive
          </p>
        </div>

        {/* Contenu principal */}
        {!isQuizFinished ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* En-tête de la question */}
            <div className="bg-indigo-600 p-4">
              <div className="flex justify-between items-center text-white">
                <span className="font-medium">Question {currentQuestion + 1}/20</span>
                <span className="px-2 py-1 bg-white text-indigo-600 rounded-full text-sm font-medium">
                  Niveau: {getDifficultyLevel()}
                </span>
              </div>
              <div className="mt-3">
                <div className="w-full bg-indigo-300 rounded-full h-2.5">
                  <div 
                    className="bg-white h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    className={`p-5 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedAnswer === index 
                        ? isAnswerValidated
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-green-100 border-green-300'
                            : 'bg-red-100 border-red-300'
                          : 'bg-indigo-50 border-indigo-300'
                        : isAnswerValidated && index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-300'
                          : 'hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-6 w-6 border-2 rounded-full flex items-center justify-center mr-4 mt-1 ${
                        selectedAnswer === index ? 'border-indigo-600' : 'border-gray-400'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="h-4 w-4 bg-indigo-600 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-base md:text-lg text-gray-900 leading-relaxed">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explication (visible seulement après validation) */}
              {isAnswerValidated && (
                <div className={`p-4 rounded-lg mb-6 ${
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'bg-green-50 border border-green-100'
                    : 'bg-orange-50 border border-orange-100'
                }`}>
                  <h3 className={`text-lg font-medium mb-2 ${
                    selectedAnswer === questions[currentQuestion].correctAnswer
                      ? 'text-green-800'
                      : 'text-orange-800'
                  }`}>
                    {selectedAnswer === questions[currentQuestion].correctAnswer
                      ? 'Correct !'
                      : 'Incorrect'}
                  </h3>
                  <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
                </div>
              )}

              {/* Boutons */}
              <div className="flex justify-between">
                {!isAnswerValidated ? (
                  <button
                    onClick={handleValidateAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      selectedAnswer === null
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    Valider ma réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Résultats du quiz */
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-600 p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Quiz terminé !</h2>
              <p className="text-indigo-100">
                Vous avez obtenu un score de {score}/20
              </p>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                        Votre score
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        {Math.round((score / questions.length) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div 
                      style={{ width: `${(score / questions.length) * 100}%` }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600">
                    </div>
                  </div>
                </div>
              </div>

              {/* Interprétation du score */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Interprétation de votre score</h3>
                {score <= 5 && (
                  <p className="text-gray-700">
                    Vous débutez dans le domaine du data marketing. Continuez à apprendre les bases et familiarisez-vous avec les termes fondamentaux.
                  </p>
                )}
                {score > 5 && score <= 10 && (
                  <p className="text-gray-700">
                    Vous avez des connaissances de base en data marketing. Approfondissez vos connaissances sur les métriques et les techniques d'analyse.
                  </p>
                )}
                {score > 10 && score <= 15 && (
                  <p className="text-gray-700">
                    Bon travail ! Vous avez une bonne compréhension du data marketing. Concentrez-vous maintenant sur les techniques avancées d'analyse et de prédiction.
                  </p>
                )}
                {score > 15 && (
                  <p className="text-gray-700">
                    Excellent ! Vous avez une maîtrise avancée du data marketing. Vous pouvez maintenant explorer des concepts plus complexes comme l'attribution marketing avancée et les modèles prédictifs.
                  </p>
                )}
              </div>

              {/* Recommandations de ressources */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-2">Ressources recommandées</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Consultez nos tutoriels guidés sur l'analyse des données marketing</li>
                  <li>Pratiquez avec nos outils d'analyse CSV pour maîtriser la manipulation de données</li>
                  <li>Explorez les tutoriels sur Google Analytics pour approfondir vos connaissances</li>
                </ul>
              </div>

              {/* Bouton pour recommencer */}
              <div className="flex justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
                >
                  Recommencer le quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 