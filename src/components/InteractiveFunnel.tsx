import React, { useState, useEffect } from 'react';
import {
  Eye,
  MousePointer,
  Package,
  ShoppingCart,
  UserPlus,
  CreditCard,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Lock,
  Unlock,
  Target,
  Megaphone,
  Users,
  Globe,
  Search,
  Share2,
  Mail,
  ArrowDown,
  Zap,
  BarChart3
} from 'lucide-react';

interface FunnelStage {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  visitors: number;
  percentage: number;
  metric: string;
  metricValue: string;
  description: string;
  leakReasons?: string[];
  optimizations?: string[];
}

interface InteractiveFunnelProps {
  isTeacherMode: boolean;
  currentStep?: number;
  onStepChange?: (step: number) => void;
}

const InteractiveFunnel: React.FC<InteractiveFunnelProps> = ({
  isTeacherMode,
  currentStep = 0,
  onStepChange
}) => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showLeaks, setShowLeaks] = useState(false);
  const [revealedStages, setRevealedStages] = useState<number[]>([0]);

  const funnelStages: FunnelStage[] = [
    {
      id: 'impressions',
      name: 'Impressions',
      icon: Eye,
      color: 'text-cyber-400',
      bgColor: 'bg-cyber-400/20',
      borderColor: 'border-cyber-400',
      visitors: 100000,
      percentage: 100,
      metric: 'CPM',
      metricValue: '8,50 €',
      description: 'Nombre de fois où votre publicité/contenu est affiché à un utilisateur',
      leakReasons: [
        'Ciblage trop large ou mal défini',
        'Créatif publicitaire peu attractif',
        'Mauvais placement (réseau display vs search)',
        'Fatigue publicitaire (même audience surexposée)'
      ],
      optimizations: [
        'Affiner le ciblage démographique et comportemental',
        'A/B tester les visuels et accroches',
        'Optimiser les enchères par placement',
        'Rotation des créatifs publicitaires'
      ]
    },
    {
      id: 'clicks',
      name: 'Clics / Visites',
      icon: MousePointer,
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/20',
      borderColor: 'border-neon-green',
      visitors: 3500,
      percentage: 3.5,
      metric: 'CPC',
      metricValue: '0,85 €',
      description: 'Utilisateurs qui cliquent sur votre pub et arrivent sur votre site',
      leakReasons: [
        'Call-to-action peu visible ou confus',
        'Promesse pub vs réalité du site incohérente',
        'Page de destination lente à charger',
        'Message publicitaire pas assez incitatif'
      ],
      optimizations: [
        'Améliorer le Quality Score (Google Ads)',
        'Créer des landing pages dédiées par campagne',
        'Tester différents CTA (texte, couleur, position)',
        'Optimiser la vitesse de chargement < 3s'
      ]
    },
    {
      id: 'product-view',
      name: 'Vue Produit',
      icon: Package,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/20',
      borderColor: 'border-neon-purple',
      visitors: 1750,
      percentage: 50,
      metric: 'Taux navigation',
      metricValue: '50%',
      description: 'Visiteurs qui consultent au moins une fiche produit',
      leakReasons: [
        'Homepage confuse ou surchargée',
        'Navigation complexe ou catégories mal organisées',
        'Recherche interne défaillante',
        'Pas de mise en avant des best-sellers'
      ],
      optimizations: [
        'Simplifier le parcours vers les produits',
        'Ajouter une recherche intelligente avec suggestions',
        'Personnaliser la homepage selon la source de trafic',
        'Mettre en avant les promotions et nouveautés'
      ]
    },
    {
      id: 'add-to-cart',
      name: 'Ajout Panier',
      icon: ShoppingCart,
      color: 'text-neon-yellow',
      bgColor: 'bg-neon-yellow/20',
      borderColor: 'border-neon-yellow',
      visitors: 525,
      percentage: 30,
      metric: 'Taux ATC',
      metricValue: '30%',
      description: 'Visiteurs qui ajoutent au moins un produit à leur panier',
      leakReasons: [
        'Prix trop élevé vs concurrence',
        'Manque d\'informations produit (photos, description)',
        'Frais de livraison cachés ou élevés',
        'Stock insuffisant ou délais trop longs',
        'Pas de preuve sociale (avis, notes)'
      ],
      optimizations: [
        'Afficher les avis clients et notes',
        'Proposer la livraison gratuite dès X€',
        'Ajouter des photos 360° et vidéos',
        'Afficher clairement les délais de livraison',
        'Créer l\'urgence (stock limité, promo temporaire)'
      ]
    },
    {
      id: 'account',
      name: 'Création Compte',
      icon: UserPlus,
      color: 'text-neon-orange',
      bgColor: 'bg-neon-orange/20',
      borderColor: 'border-neon-orange',
      visitors: 315,
      percentage: 60,
      metric: 'Taux inscription',
      metricValue: '60%',
      description: 'Utilisateurs qui créent un compte ou se connectent',
      leakReasons: [
        'Formulaire d\'inscription trop long',
        'Obligation de créer un compte (pas de guest checkout)',
        'Demande d\'informations sensibles trop tôt',
        'Processus de validation email complexe'
      ],
      optimizations: [
        'Proposer le guest checkout',
        'Connexion sociale (Google, Facebook, Apple)',
        'Formulaire progressif (infos minimales puis compléter)',
        'Auto-complétion des adresses'
      ]
    },
    {
      id: 'purchase',
      name: 'Achat / Paiement',
      icon: CreditCard,
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/20',
      borderColor: 'border-neon-pink',
      visitors: 175,
      percentage: 55.5,
      metric: 'Taux conversion',
      metricValue: '0,175%',
      description: 'Clients qui finalisent leur commande avec paiement',
      leakReasons: [
        'Options de paiement limitées',
        'Tunnel de paiement trop complexe',
        'Frais surprise à la dernière étape',
        'Manque de confiance (sécurité, garanties)',
        'Pas de facilités de paiement'
      ],
      optimizations: [
        'Paiement en 3x/4x sans frais (Alma, Klarna)',
        'Multiple moyens de paiement (CB, PayPal, Apple Pay)',
        'Afficher les badges de sécurité',
        'Résumé clair avant validation',
        'Relance panier abandonné (email, SMS, retargeting)'
      ]
    }
  ];

  // Animation du flux de visiteurs
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % (funnelStages.length + 1));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isAnimating, funnelStages.length]);

  const handleRevealNext = () => {
    if (revealedStages.length < funnelStages.length) {
      setRevealedStages([...revealedStages, revealedStages.length]);
      if (onStepChange) {
        onStepChange(revealedStages.length);
      }
    }
  };

  const handleRevealAll = () => {
    setRevealedStages(funnelStages.map((_, i) => i));
  };

  const handleReset = () => {
    setRevealedStages([0]);
    setActiveStage(null);
    setShowLeaks(false);
    setIsAnimating(false);
    setAnimationStep(0);
  };

  const calculateLoss = (index: number): number => {
    if (index === 0) return 0;
    return funnelStages[index - 1].visitors - funnelStages[index].visitors;
  };

  const calculateLossPercentage = (index: number): number => {
    if (index === 0) return 0;
    return ((funnelStages[index - 1].visitors - funnelStages[index].visitors) / funnelStages[index - 1].visitors) * 100;
  };

  return (
    <div className="funnel-container">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              isAnimating
                ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                : 'bg-cyber-400/20 text-cyber-400 border border-cyber-400/30 hover:bg-cyber-400/30'
            }`}
          >
            {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAnimating ? 'Pause' : 'Animer le flux'}
          </button>

          <button
            onClick={() => setShowLeaks(!showLeaks)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              showLeaks
                ? 'bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30'
                : 'bg-dark-700 text-dark-300 border border-dark-600 hover:border-dark-500'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            {showLeaks ? 'Masquer fuites' : 'Afficher fuites'}
          </button>
        </div>

        {isTeacherMode && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleRevealNext}
              disabled={revealedStages.length >= funnelStages.length}
              className="flex items-center gap-2 px-4 py-2 bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-lg font-mono text-sm hover:bg-neon-green/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Unlock className="w-4 h-4" />
              Révéler suivant
            </button>
            <button
              onClick={handleRevealAll}
              className="flex items-center gap-2 px-4 py-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-lg font-mono text-sm hover:bg-neon-purple/30 transition-all"
            >
              <Eye className="w-4 h-4" />
              Tout révéler
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-dark-300 border border-dark-600 rounded-lg font-mono text-sm hover:border-dark-500 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Source de trafic - En haut du tunnel */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <span className="text-dark-400 font-mono text-sm">Sources d'acquisition</span>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { icon: Search, label: 'SEA', color: 'text-cyber-400' },
            { icon: Share2, label: 'Social Ads', color: 'text-neon-pink' },
            { icon: Globe, label: 'SEO', color: 'text-neon-green' },
            { icon: Mail, label: 'Emailing', color: 'text-neon-yellow' },
            { icon: Megaphone, label: 'Display', color: 'text-neon-purple' },
          ].map((source, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg ${source.color}`}
            >
              <source.icon className="w-4 h-4" />
              <span className="font-mono text-sm">{source.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <ArrowDown className="w-6 h-6 text-dark-500 animate-bounce" />
        </div>
      </div>

      {/* Funnel Visual */}
      <div className="relative max-w-4xl mx-auto">
        {funnelStages.map((stage, index) => {
          const isRevealed = revealedStages.includes(index);
          const isActive = activeStage === index;
          const isAnimated = isAnimating && animationStep >= index;
          const loss = calculateLoss(index);
          const lossPercentage = calculateLossPercentage(index);
          const StageIcon = stage.icon;

          // Calcul de la largeur du tunnel (effet entonnoir)
          const widthPercentage = 100 - (index * 12);

          if (!isRevealed && !isTeacherMode) {
            return (
              <div
                key={stage.id}
                className="funnel-stage-locked relative mx-auto mb-4"
                style={{ width: `${widthPercentage}%` }}
              >
                <div className="flex items-center justify-center gap-3 p-6 bg-dark-800/30 border-2 border-dashed border-dark-600 rounded-xl">
                  <Lock className="w-6 h-6 text-dark-500" />
                  <span className="text-dark-500 font-mono">Étape verrouillée</span>
                </div>
              </div>
            );
          }

          return (
            <div key={stage.id} className="relative">
              {/* Indicateur de perte (entre les étapes) */}
              {index > 0 && showLeaks && isRevealed && (
                <div className="absolute -top-2 right-0 transform translate-x-full ml-4 z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neon-pink/10 border border-neon-pink/30 rounded-lg">
                    <TrendingDown className="w-4 h-4 text-neon-pink" />
                    <span className="text-neon-pink font-mono text-sm">
                      -{loss.toLocaleString()} ({lossPercentage.toFixed(1)}%)
                    </span>
                  </div>
                </div>
              )}

              {/* Stage Block */}
              <div
                className={`funnel-stage relative mx-auto mb-4 cursor-pointer transition-all duration-500 ${
                  isActive ? 'scale-105' : ''
                } ${isAnimated ? 'funnel-stage-animated' : ''}`}
                style={{ width: `${widthPercentage}%` }}
                onClick={() => setActiveStage(isActive ? null : index)}
              >
                <div
                  className={`relative overflow-hidden p-5 rounded-xl border-2 transition-all duration-300 ${
                    isActive
                      ? `${stage.bgColor} ${stage.borderColor}`
                      : 'bg-dark-800/50 border-dark-700/50 hover:border-dark-600'
                  }`}
                >
                  {/* Animated flow indicator */}
                  {isAnimated && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 w-full ${stage.bgColor} opacity-30 animate-flow`}
                      />
                    </div>
                  )}

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${stage.bgColor}`}>
                        <StageIcon className={`w-6 h-6 ${stage.color}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${stage.color} font-display`}>
                          {stage.name}
                        </h3>
                        <p className="text-dark-400 text-sm">{stage.description}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-2xl font-bold ${stage.color} font-mono`}>
                        {stage.visitors.toLocaleString()}
                      </div>
                      <div className="text-dark-500 text-sm font-mono">
                        {stage.metric}: {stage.metricValue}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${stage.bgColor.replace('/20', '')}`}
                      style={{
                        width: `${(stage.visitors / funnelStages[0].visitors) * 100}%`,
                        opacity: isAnimated ? 1 : 0.5
                      }}
                    />
                  </div>

                  {/* Expand indicator */}
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${isActive ? 'rotate-90' : ''}`}>
                    <ChevronRight className="w-5 h-5 text-dark-500" />
                  </div>
                </div>

                {/* Expanded Details */}
                {isActive && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                    {/* Reasons for leaks */}
                    <div className="p-4 bg-neon-pink/5 border border-neon-pink/20 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-neon-pink" />
                        <h4 className="font-bold text-neon-pink font-display">Pourquoi les fuites ?</h4>
                      </div>
                      <ul className="space-y-2">
                        {stage.leakReasons?.map((reason, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                            <span className="text-neon-pink mt-1">•</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optimizations */}
                    <div className="p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-neon-green" />
                        <h4 className="font-bold text-neon-green font-display">Optimisations</h4>
                      </div>
                      <ul className="space-y-2">
                        {stage.optimizations?.map((opt, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                            <span className="text-neon-green mt-1">✓</span>
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Connector arrow */}
              {index < funnelStages.length - 1 && isRevealed && (
                <div className="flex justify-center my-2">
                  <ArrowDown className={`w-5 h-5 ${isAnimated ? stage.color : 'text-dark-600'} transition-colors`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      {revealedStages.length === funnelStages.length && (
        <div className="mt-12 p-6 bg-dark-800/30 border border-dark-700/50 rounded-2xl animate-fadeIn">
          <h3 className="text-xl font-bold text-dark-100 mb-6 font-display flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-cyber-400" />
            Résumé du tunnel
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-cyber-400/10 border border-cyber-400/30 rounded-xl text-center">
              <div className="text-3xl font-bold text-cyber-400 font-mono">
                {funnelStages[0].visitors.toLocaleString()}
              </div>
              <div className="text-dark-400 text-sm mt-1">Impressions</div>
            </div>

            <div className="p-4 bg-neon-pink/10 border border-neon-pink/30 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-pink font-mono">
                {funnelStages[funnelStages.length - 1].visitors.toLocaleString()}
              </div>
              <div className="text-dark-400 text-sm mt-1">Conversions</div>
            </div>

            <div className="p-4 bg-neon-green/10 border border-neon-green/30 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-green font-mono">
                {((funnelStages[funnelStages.length - 1].visitors / funnelStages[0].visitors) * 100).toFixed(2)}%
              </div>
              <div className="text-dark-400 text-sm mt-1">Taux global</div>
            </div>

            <div className="p-4 bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl text-center">
              <div className="text-3xl font-bold text-neon-yellow font-mono">
                {(funnelStages[0].visitors - funnelStages[funnelStages.length - 1].visitors).toLocaleString()}
              </div>
              <div className="text-dark-400 text-sm mt-1">Perdus en route</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-neon-purple/10 border border-neon-purple/30 rounded-xl">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-neon-purple mt-1" />
              <div>
                <h4 className="font-bold text-neon-purple mb-2">Objectif pédagogique</h4>
                <p className="text-dark-300 text-sm leading-relaxed">
                  Chaque étape du tunnel représente une opportunité d'optimisation. En analysant les taux de conversion
                  entre chaque étape et en comprenant les raisons des abandons, vous pouvez identifier les "fuites"
                  prioritaires à colmater pour maximiser votre ROI. Un gain de 1% sur une étape haute du tunnel
                  peut avoir un impact exponentiel sur le chiffre d'affaires final.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveFunnel;
