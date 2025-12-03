import React, { useState } from 'react';

interface Scenario {
  id: string;
  title: string;
  company: string;
  context: string;
  challenge: string;
  budget: string;
  objective: string;
  data: string[];
  constraints: string[];
  expectedDeliverables: string[];
  suggestedSolution?: {
    diagnosis: string;
    actions: Array<{
      action: string;
      budget: string;
      expectedImpact: string;
      kpis: string[];
    }>;
    risks: string[];
    timeline: string;
  };
}

const BusinessScenarios: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [teamPresentations, setTeamPresentations] = useState<Array<{teamName: string; score: number}>>([]);

  const scenarios: Scenario[] = [
    {
      id: 'fitness-app',
      title: 'App Mobile Fitness en Crise',
      company: 'FitTracker Pro',
      context: 'Application de suivi sportif avec 50k utilisateurs actifs mensuels, lancée il y a 18 mois.',
      challenge: 'Churn rate de 30% mensuel - trop élevé pour la rentabilité',
      budget: '10 000€',
      objective: 'Réduire le churn à 15% en 3 mois',
      data: [
        '70% des utilisateurs abandonnent dans les 7 premiers jours',
        'Pic d\'abandon majeur après la 1ère séance d\'entraînement',
        'Utilisateurs qui complètent l\'onboarding : churn de 12% seulement',
        'Taux d\'ouverture des notifications push : 8%',
        'Sessions moyennes par utilisateur actif : 2.3/semaine',
        'Note App Store : 3.8/5 (principales critiques : "trop complexe au début")'
      ],
      constraints: [
        'Équipe de développement limitée (2 devs)',
        'Pas de budget marketing additionnel',
        'Concurrence féroce (Nike Training, Adidas, etc.)',
        'Saisonnalité : pic en janvier, creux en été'
      ],
      expectedDeliverables: [
        'Diagnostic racine du problème de churn',
        '3 actions prioritaires avec budget alloué',
        'KPIs de suivi et calendrier de mise en œuvre',
        'Estimation ROI : économies de churn vs investissement'
      ],
      suggestedSolution: {
        diagnosis: 'Problème principal = Onboarding défaillant. 70% d\'abandon en 7 jours indique une friction majeure dans l\'adoption initiale.',
        actions: [
          {
            action: 'Refonte UX de l\'onboarding avec parcours guidé progressif',
            budget: '5 000€',
            expectedImpact: 'Réduction abandon J7 de 70% à 45%',
            kpis: ['Taux de complétion onboarding', 'Retention J7', 'Temps jusqu\'à 1ère séance']
          },
          {
            action: 'Système de coaching IA personnalisé (1er mois gratuit)',
            budget: '3 000€',
            expectedImpact: 'Engagement +40%, sessions/utilisateur +25%',
            kpis: ['Sessions moyennes/utilisateur', 'Durée moyenne session', 'Retour J30']
          },
          {
            action: 'Optimisation notifications push avec segmentation comportementale',
            budget: '2 000€',
            expectedImpact: 'Taux ouverture de 8% à 15%',
            kpis: ['Taux ouverture push', 'Taux de clic', 'Sessions générées par push']
          }
        ],
        risks: [
          'Adoption lente des nouvelles fonctionnalités par utilisateurs existants',
          'Complexité technique du coaching IA',
          'Concurrence qui copie rapidement les améliorations'
        ],
        timeline: '3 mois avec quick-wins en semaine 2'
      }
    },
    {
      id: 'ecommerce-fashion',
      title: 'E-commerce Mode : Panier Trop Faible',
      company: 'StyleCo Fashion',
      context: 'Boutique en ligne de vêtements féminins, 25k visiteurs/mois, positionnée milieu de gamme.',
      challenge: 'Panier moyen de 45€ vs 65€ chez la concurrence',
      budget: '15 000€',
      objective: 'Augmenter le panier moyen de 30% en 4 mois',
      data: [
        'Taux de conversion global : 1.2%',
        '80% des commandes = 1 seul article',
        'Taux d\'abandon panier : 85%',
        'Temps moyen sur page produit : 45 secondes',
        'Taux de retour produits : 25% (vs 15% secteur)',
        'Prix moyen article : 42€',
        'Marge brute moyenne : 55%'
      ],
      constraints: [
        'Stock limité sur certaines références',
        'Pas de programme de fidélité existant',
        'Site mobile non optimisé pour cross-sell',
        'Délai de livraison : 3-5 jours'
      ],
      expectedDeliverables: [
        'Analyse du tunnel de conversion et points de friction',
        'Stratégie cross-sell/up-sell avec A/B tests prévus',
        'Plan de réduction des retours',
        'Projection d\'impact sur CA et marge'
      ],
      suggestedSolution: {
        diagnosis: 'Double problème : faible incitation au multi-achat + forte friction checkout + retours élevés qui cassent la confiance.',
        actions: [
          {
            action: 'Engine de recommandations IA + "Complétez votre look"',
            budget: '8 000€',
            expectedImpact: 'Panier moyen +25%, articles/commande +40%',
            kpis: ['Panier moyen', 'Articles/commande', 'Taux de clic recommandations']
          },
          {
            action: 'Frais de port gratuits dès 60€ + barre de progression',
            budget: '4 000€',
            expectedImpact: 'Abandon panier -15%, commandes 60€+ +50%',
            kpis: ['Taux abandon panier', '% commandes >60€', 'Coût logistique/commande']
          },
          {
            action: 'Guide des tailles interactif + photos 360° top produits',
            budget: '3 000€',
            expectedImpact: 'Retours -8 points, confiance +20%',
            kpis: ['Taux de retour', 'Temps page produit', 'Taux conversion mobile']
          }
        ],
        risks: [
          'Impact négatif sur marge avec livraison gratuite',
          'Cannibalisation des ventes par les recommandations',
          'Complexité technique du guide des tailles'
        ],
        timeline: '4 mois avec tests progressifs'
      }
    },
    {
      id: 'real-estate',
      title: 'Agence Immobilière : Digitalisation Forcée',
      company: 'ImmoPlus Local',
      context: 'Agence traditionnelle (15 ans) dans métropole de 200k habitants, digitalisation urgente post-COVID.',
      challenge: 'Génération de leads digitaux quasi-nulle',
      budget: '8 000€',
      objective: 'Générer 50 leads qualifiés/mois',
      data: [
        'Site web actuel : 500 visiteurs/mois',
        'Taux de conversion contact : 2%',
        '60% du trafic = recherche "immobilier [ville]"',
        'Présence Google Maps : 3.2/5 avec 12 avis',
        '5 concurrents directs dont 3 très digitalisés',
        'Base de données clients : 2000 contacts',
        'Transactions moyennes : 8/mois'
      ],
      constraints: [
        'Équipe peu familière du digital (âge moyen 45 ans)',
        'Marché local très concurrentiel',
        'Réglementation stricte sur la publicité immobilière',
        'Saisonnalité marquée (creux juillet-août)'
      ],
      expectedDeliverables: [
        'Audit concurrentiel et positionnement digital',
        'Stratégie SEO local + Google My Business',
        'Plan de contenus et campagnes payantes',
        'Formation équipe et planning de déploiement'
      ],
      suggestedSolution: {
        diagnosis: 'Retard digital majeur dans un secteur hyperlocal. Opportunité : dominer les recherches locales avec une stratégie ciblée.',
        actions: [
          {
            action: 'Optimisation SEO local + refonte Google My Business',
            budget: '3 000€',
            expectedImpact: 'Trafic +200%, visibilité locale top 3',
            kpis: ['Position Google "immobilier [ville]"', 'Trafic organique', 'Appels via GMB']
          },
          {
            action: 'Campagnes Facebook/Instagram géociblées + retargeting',
            budget: '4 000€',
            expectedImpact: '30 leads/mois, CPA 100€',
            kpis: ['Leads générés', 'CPA', 'Taux conversion landing pages']
          },
          {
            action: 'Contenu hyperlocal : guide quartiers + actualités marché',
            budget: '1 000€',
            expectedImpact: 'Autorité locale +50%, temps sur site +100%',
            kpis: ['Partages sociaux', 'Temps sur site', 'Pages vues/session']
          }
        ],
        risks: [
          'Concurrence qui intensifie ses efforts',
          'Changements algorithmes Google Local',
          'Résistance équipe aux nouveaux outils'
        ],
        timeline: '6 mois avec résultats visibles M2'
      }
    },
    {
      id: 'saas-b2b',
      title: 'SaaS B2B : Conversion Freemium Bloquée',
      company: 'DataSync Pro',
      context: 'Logiciel de synchronisation de données B2B, modèle freemium, 2 ans d\'existence.',
      challenge: 'Conversion freemium → premium de 3% seulement',
      budget: '20 000€',
      objective: 'Doubler le taux de conversion (6%) en 6 mois',
      data: [
        '2000 utilisateurs gratuits actifs',
        'Conversion actuelle : 3% vers premium (50€/mois)',
        '70% utilisent <20% des fonctionnalités',
        'Support client : 40% des questions = "Comment faire X ?"',
        'Utilisateurs premium utilisent 80% des fonctionnalités',
        'Churn premium : 5%/mois (acceptable)',
        'NPS utilisateurs premium : 45 (bon)'
      ],
      constraints: [
        'Ressources dev limitées (3 personnes)',
        'Marché très concurrentiel (Microsoft, Google)',
        'Cycle de vente B2B long (3-6 mois)',
        'Utilisateurs freemium coûtent 8€/mois en infrastructure'
      ],
      expectedDeliverables: [
        'Analyse du parcours freemium → premium',
        'Stratégie d\'activation et de nurturing',
        'Plan de fonctionnalités premium attractives',
        'ROI prévisionnel et métriques de succès'
      ],
      suggestedSolution: {
        diagnosis: 'Problème d\'adoption produit : les users freemium n\'explorent pas assez pour voir la valeur premium. Education et onboarding défaillants.',
        actions: [
          {
            action: 'Onboarding guidé + cas d\'usage personnalisés',
            budget: '10 000€',
            expectedImpact: 'Adoption fonctionnalités +60%, trial premium +80%',
            kpis: ['% users utilisant >50% fonctions', 'Temps jusqu\'à 1ère valeur', 'Taux trial premium']
          },
          {
            action: 'Webinaires démonstration + certification utilisateurs',
            budget: '5 000€',
            expectedImpact: 'Engagement +40%, conversion educative +100%',
            kpis: ['Participation webinaires', 'Taux complétion formation', 'Conversion post-formation']
          },
          {
            action: 'Notifications in-app usage + limites intelligentes',
            budget: '5 000€',
            expectedImpact: 'Awareness valeur premium +50%',
            kpis: ['Clics upgrade', 'Sessions avec notifications', 'Conversion limites atteintes']
          }
        ],
        risks: [
          'Frustration users avec limitations plus visibles',
          'Complexité technique onboarding personnalisé',
          'Concurrents qui améliorent leur freemium'
        ],
        timeline: '6 mois avec monitoring hebdomadaire'
      }
    },
    {
      id: 'restaurant-delivery',
      title: 'Restaurant : Boom de Livraison Post-COVID',
      company: 'PizzaRapido',
      context: 'Pizzeria familiale, 10 ans d\'existence, zone de livraison 10km, digitalisation accélérée.',
      challenge: 'Stagnation à 150 commandes/semaine malgré la demande',
      budget: '5 000€',
      objective: '+50% de commandes (225/semaine) en 2 mois',
      data: [
        'Commandes actuelles : 150/semaine',
        'Panier moyen : 18€',
        '90% des commandes = clients récurrents',
        'Pic de commandes : vendredi-samedi 19h-21h',
        'Temps de livraison moyen : 35 minutes',
        '2 concurrents avec app mobile développée',
        'Zone géographique : 15k foyers'
      ],
      constraints: [
        'Équipe réduite (patron + 3 employés)',
        'Capacité cuisine limitée aux heures de pointe',
        'Pas de compétences tech en interne',
        'Budget marketing très limité'
      ],
      expectedDeliverables: [
        'Stratégie d\'acquisition clients locaux',
        'Plan d\'optimisation capacité/demande',
        'Mise en place outils digitaux prioritaires',
        'Calcul ROI et plan de financement'
      ],
      suggestedSolution: {
        diagnosis: 'Problème de visibilité et d\'acquisition. Base clients fidèles mais pas d\'expansion. Capacité opérationnelle à optimiser.',
        actions: [
          {
            action: 'App mobile simple + programme parrainage (1 pizza offerte)',
            budget: '3 000€',
            expectedImpact: 'Nouveaux clients +100, rétention +25%',
            kpis: ['Téléchargements app', 'Parrainages réussis', 'Clients récurrents']
          },
          {
            action: 'Partenariats influenceurs locaux + livraisons événements',
            budget: '1 000€',
            expectedImpact: 'Visibilité locale +200%, commandes événements',
            kpis: ['Mentions réseaux sociaux', 'Trafic site', 'Commandes événements']
          },
          {
            action: 'Optimisation créneaux + menu spécial heures creuses',
            budget: '1 000€',
            expectedImpact: 'Utilisation capacité +30%, CA heures creuses +50%',
            kpis: ['Commandes hors-pointe', 'Temps moyen livraison', 'Satisfaction client']
          }
        ],
        risks: [
          'Débordement si succès trop rapide',
          'Qualité service qui baisse avec volume',
          'Concurrence qui réagit agressivement'
        ],
        timeline: '2 mois avec monitoring quotidien'
      }
    },
    {
      id: 'online-learning',
      title: 'Formation en Ligne : Complétion Catastrophique',
      company: 'LearnFast Academy',
      context: 'Plateforme de cours en ligne, 500 cours disponibles, 2 ans d\'existence.',
      challenge: 'Taux de complétion de 25% seulement - très faible',
      budget: '12 000€',
      objective: 'Tripler le taux de complétion (75%) en 4 mois',
      data: [
        'Cours disponibles : 500+ (prix moyen 80€)',
        'Taux de complétion actuel : 25%',
        '60% des étudiants abandonnent avant le module 3',
        'Cours avec quiz interactifs : 45% de complétion',
        'Utilisateurs qui complètent = 90% de satisfaction',
        'Certificats perçus comme 40% plus valuable',
        'Temps moyen par session : 12 minutes'
      ],
      constraints: [
        'Contenus déjà créés (difficile à modifier)',
        'Concurrence massive (Udemy, Coursera)',
        'Pas de système de mentoring',
        'Reviews moyennes 3.7/5'
      ],
      expectedDeliverables: [
        'Audit UX parcours apprenant',
        'Stratégie d\'engagement et de motivation',
        'Plan de gamification et suivi progrès',
        'Métriques de succès et ROI formation'
      ],
      suggestedSolution: {
        diagnosis: 'Manque d\'engagement et de motivation. Contenu probablement trop théorique, pas assez interactif. Aucun suivi personnalisé.',
        actions: [
          {
            action: 'Système de gamification : points, badges, classements',
            budget: '6 000€',
            expectedImpact: 'Engagement +70%, sessions/utilisateur +50%',
            kpis: ['Sessions moyennes/user', 'Temps moyen session', 'Retour après pause >7j']
          },
          {
            action: 'Communauté étudiants + forums par cours',
            budget: '3 000€',
            expectedImpact: 'Support peer-to-peer, motivation +40%',
            kpis: ['Messages forum', 'Taux participation communauté', 'NPS communauté']
          },
          {
            action: 'Micro-learning adaptatif : modules 5-10min max',
            budget: '3 000€',
            expectedImpact: 'Complétion modules +60%, habitude apprentissage',
            kpis: ['Modules complétés/semaine', 'Streak d\'apprentissage', 'Feedback taille modules']
          }
        ],
        risks: [
          'Résistance utilisateurs aux changements',
          'Complexité technique gamification',
          'Modération communauté chronophage'
        ],
        timeline: '4 mois avec pilotes sur cours populaires'
      }
    }
  ];

  const evaluationCriteria = [
    { name: 'Pertinence business', description: 'La solution répond-elle vraiment au problème ?' },
    { name: 'Faisabilité', description: 'Est-ce réalisable avec le budget et délais ?' },
    { name: 'Créativité', description: 'Y a-t-il des idées originales et innovantes ?' },
    { name: 'Méthodologie', description: 'Les KPIs de mesure sont-ils bien définis ?' },
    { name: 'ROI prévisible', description: 'Le retour sur investissement est-il crédible ?' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">🎭 Atelier Scénarios Business</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Chaque équipe tire au sort un scénario d'entreprise réelle. 
          15 minutes d'analyse, 3 minutes de pitch, vote collectif pour la meilleure solution.
        </p>
      </div>

      {selectedScenario === null ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} 
                   className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                   onClick={() => setSelectedScenario(index)}>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{scenario.company}</p>
                <p className="text-sm text-slate-700 mb-4">{scenario.context}</p>
                <div className="space-y-2">
                  <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    <strong>Défi :</strong> {scenario.challenge}
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    <strong>Budget :</strong> {scenario.budget}
                  </div>
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    <strong>Objectif :</strong> {scenario.objective}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-900 mb-4">📋 Grille d'évaluation (5 points chacun)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {evaluationCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900">{criteria.name}</h4>
                    <p className="text-sm text-indigo-700">{criteria.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {setSelectedScenario(null); setShowSolution(false);}}
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
            >
              ← Retour aux scénarios
            </button>
            <div className="text-sm text-slate-500">
              Scénario {selectedScenario + 1} / {scenarios.length}
            </div>
          </div>

          {scenarios[selectedScenario] && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {scenarios[selectedScenario].title}
                </h2>
                <p className="text-lg text-slate-600 mb-4">{scenarios[selectedScenario].company}</p>
                <p className="text-slate-700">{scenarios[selectedScenario].context}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-3">🚨 Défi à relever</h3>
                  <p className="text-red-800 mb-4">{scenarios[selectedScenario].challenge}</p>
                  <div className="space-y-2 text-sm">
                    <div><strong>Budget disponible :</strong> {scenarios[selectedScenario].budget}</div>
                    <div><strong>Objectif :</strong> {scenarios[selectedScenario].objective}</div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">📊 Données clés</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    {scenarios[selectedScenario].data.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">⚠️ Contraintes</h3>
                  <ul className="space-y-1 text-sm text-amber-800">
                    {scenarios[selectedScenario].constraints.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">🎯 Livrables attendus</h3>
                  <ul className="space-y-1 text-sm text-green-800">
                    {scenarios[selectedScenario].expectedDeliverables.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center space-x-4">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                >
                  {showSolution ? 'Masquer' : 'Voir'} la solution suggérée
                </button>
              </div>

              {showSolution && scenarios[selectedScenario].suggestedSolution && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 mb-4">💡 Solution suggérée (guide formateur)</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-purple-900 mb-2">Diagnostic :</h4>
                    <p className="text-purple-800 text-sm">{scenarios[selectedScenario].suggestedSolution!.diagnosis}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-purple-900 mb-3">Actions recommandées :</h4>
                    <div className="space-y-4">
                      {scenarios[selectedScenario].suggestedSolution!.actions.map((action, index) => (
                        <div key={index} className="bg-white border border-purple-200 rounded p-4">
                          <h5 className="font-medium text-purple-900 mb-2">{action.action}</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                            <div><strong>Budget :</strong> {action.budget}</div>
                            <div><strong>Impact :</strong> {action.expectedImpact}</div>
                            <div><strong>KPIs :</strong> {action.kpis.join(', ')}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-900 mb-2">Risques identifiés :</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        {scenarios[selectedScenario].suggestedSolution!.risks.map((risk, index) => (
                          <li key={index}>• {risk}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900 mb-2">Timeline :</h4>
                      <p className="text-sm text-purple-800">{scenarios[selectedScenario].suggestedSolution!.timeline}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessScenarios;
