import React, { useState } from 'react';
import RankTrackerChart from '../components/RankTrackerChart';

/**
 * Page d'analyse détaillée des données de rank-tracker.csv
 * Exercice pédagogique pour apprendre l'analyse de données SEO
 */
const RankTrackerAnalysis: React.FC = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const exerciseQuestions = [
    {
      id: 1,
      question: "Identifiez les 3 mots-clés les mieux positionnés et expliquez pourquoi ils performent bien.",
      answer: "Les 3 mots-clés les mieux positionnés sont : 'abri voitures' (position 1), 'abri voiture bois fermé' (position 4), et 'carport en bois' (position 4). Ils performent bien car ils correspondent exactement au cœur de métier de Déco Charpente et bénéficient probablement d'une optimisation SEO ciblée avec un contenu de qualité et des backlinks pertinents."
    },
    {
      id: 2,
      question: "Analysez la corrélation entre position et visibilité. Que remarquez-vous ?",
      answer: "La corrélation n'est pas parfaite : 'abri voiture bois fermé' en position 4 a une visibilité de 0.77, très élevée, tandis que 'carport en bois' en position 4 n'a qu'une visibilité de 0.1. Cela s'explique par le volume de recherche différent de ces mots-clés et leur niveau de concurrence."
    },
    {
      id: 3,
      question: "Quelles sont vos recommandations pour améliorer les positions des mots-clés sous-performants ?",
      answer: "Pour 'pool house bois' (pos. 14) et 'abri voiture en bois' (pos. 16) : 1) Optimiser le contenu des pages avec ces mots-clés, 2) Créer du contenu de qualité autour de ces thématiques, 3) Améliorer le maillage interne, 4) Obtenir des backlinks de qualité, 5) Optimiser les balises title et meta descriptions."
    },
    {
      id: 4,
      question: "Comment expliquez-vous qu'un mot-clé générique comme 'abri voiture' soit moins bien positionné qu'un terme plus spécifique ?",
      answer: "Les mots-clés génériques comme 'abri voiture' (position 6) sont plus concurrentiels. Les termes spécifiques comme 'abri voiture bois fermé' (position 4) ont moins de concurrence et correspondent mieux à l'offre spécialisée de Déco Charpente, permettant un meilleur positionnement avec moins d'effort SEO."
    }
  ];

  const keyInsights = [
    {
      title: "🎯 Stratégie de niche efficace",
      description: "Déco Charpente performe mieux sur les mots-clés spécialisés (bois, sur mesure) que sur les termes génériques.",
      implication: "Concentrer les efforts SEO sur la spécialisation plutôt que sur la généralisation."
    },
    {
      title: "📊 Écart de performance important",
      description: "40% des mots-clés sont au-delà de la position 10, créant un écart significatif avec les leaders.",
      implication: "Nécessité d'une stratégie SEO plus agressive pour les mots-clés sous-performants."
    },
    {
      title: "🔍 Visibilité vs Position",
      description: "La visibilité ne dépend pas uniquement de la position mais aussi du volume de recherche.",
      implication: "Prioriser les mots-clés selon leur potentiel de trafic, pas seulement leur facilité de classement."
    },
    {
      title: "🏗️ Cohérence thématique",
      description: "Les meilleurs classements concernent tous les abris et structures en bois, cœur de métier de l'entreprise.",
      implication: "Renforcer l'autorité thématique en créant plus de contenu autour de cette expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Exercice d'analyse : Données SEO Déco Charpente
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analysez les performances SEO de l'entreprise Déco Charpente à travers ses positions sur Google. 
            Cet exercice vous apprendra à interpréter des données de rank tracking et à formuler des recommandations.
          </p>
        </div>

        {/* Graphique principal */}
        <div className="mb-12">
          <RankTrackerChart showAnalysisKeys={showAnswers} />
        </div>

        {/* Section d'exercice */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">📝 Exercice d'analyse</h2>
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                showAnswers 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {showAnswers ? '🙈 Masquer les réponses' : '👁️ Afficher les réponses'}
            </button>
          </div>

          <div className="space-y-6">
            {exerciseQuestions.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Question {item.id} : {item.question}
                </h3>
                {showAnswers && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Réponse :</strong> {item.answer}
                    </p>
                  </div>
                )}
                {!showAnswers && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
                    <p className="text-gray-500 text-sm italic">
                      Réfléchissez à votre réponse avant de consulter la correction...
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Insights clés */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🔑 Insights clés de l'analyse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                <div className="bg-indigo-50 border border-indigo-200 rounded p-3">
                  <p className="text-indigo-700 text-xs font-medium">
                    💡 Implication : {insight.implication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Méthodologie */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Méthodologie d'analyse</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-xl">1️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Collecte des données</h3>
              <p className="text-sm text-gray-600">
                Extraction des positions, visibilité et mots-clés depuis le fichier CSV
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-xl">2️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visualisation</h3>
              <p className="text-sm text-gray-600">
                Création de graphiques pour identifier les patterns et tendances
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-xl">3️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Recommandations</h3>
              <p className="text-sm text-gray-600">
                Formulation d'actions concrètes basées sur l'analyse des données
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankTrackerAnalysis;



