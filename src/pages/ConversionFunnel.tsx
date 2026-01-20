import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  ChevronRight,
  Lock,
  Unlock,
  Eye,
  TrendingUp,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Play,
  GraduationCap,
  Layers,
  Filter,
  PieChart,
  LineChart,
  ShoppingCart,
  Users,
  MousePointer,
  CreditCard,
  Mail,
  RefreshCw,
  Settings,
  Megaphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveFunnel from '../components/InteractiveFunnel';

const ConversionFunnel: React.FC = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [revealedSections, setRevealedSections] = useState<number[]>([0]);

  const TEACHER_PASSWORD = 'racaille2026';

  const handleTeacherLogin = () => {
    if (teacherPassword === TEACHER_PASSWORD) {
      setIsTeacherMode(true);
      setShowPasswordInput(false);
      setPasswordError('');
      setTeacherPassword('');
    } else {
      setPasswordError('Mot de passe incorrect');
    }
  };

  const revealNextSection = () => {
    if (revealedSections.length < sections.length) {
      setRevealedSections([...revealedSections, revealedSections.length]);
      setCurrentSection(revealedSections.length);
    }
  };

  const revealAllSections = () => {
    setRevealedSections(sections.map((_, i) => i));
  };

  const resetSections = () => {
    setRevealedSections([0]);
    setCurrentSection(0);
  };

  const sections = [
    {
      id: 'intro',
      title: "Qu'est-ce qu'un tunnel de conversion ?",
      icon: Filter,
      color: 'cyber-400'
    },
    {
      id: 'funnel-interactive',
      title: 'Le tunnel en action',
      icon: Layers,
      color: 'neon-green'
    },
    {
      id: 'metrics',
      title: 'Les métriques clés',
      icon: BarChart3,
      color: 'neon-purple'
    },
    {
      id: 'analysis',
      title: 'Analyser les fuites',
      icon: AlertTriangle,
      color: 'neon-pink'
    },
    {
      id: 'optimization',
      title: 'Stratégies d\'optimisation',
      icon: TrendingUp,
      color: 'neon-yellow'
    },
    {
      id: 'tools',
      title: 'Outils et tracking',
      icon: Settings,
      color: 'neon-orange'
    },
    {
      id: 'exercise',
      title: 'Cas pratique',
      icon: Target,
      color: 'cyber-400'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-12">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

      {/* Teacher Mode Toggle */}
      <div className="fixed top-24 right-4 z-40">
        {isTeacherMode ? (
          <button
            onClick={() => setIsTeacherMode(false)}
            className="flex items-center gap-2 bg-gradient-to-r from-neon-green to-cyber-400 text-dark-900 px-4 py-2 rounded-xl shadow-neon-green font-mono text-sm font-semibold hover:shadow-neon transition-all"
          >
            <Unlock className="w-4 h-4" />
            Mode Enseignant
          </button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowPasswordInput(!showPasswordInput)}
              className="flex items-center gap-2 bg-dark-800/80 backdrop-blur border border-dark-600 text-dark-300 px-4 py-2 rounded-xl shadow-lg hover:border-cyber-400/50 hover:text-cyber-400 transition-all font-mono text-sm"
            >
              <Lock className="w-4 h-4" />
              Mode Étudiant
            </button>

            {showPasswordInput && (
              <div className="absolute top-14 right-0 bg-dark-800/95 backdrop-blur border border-dark-600 rounded-xl shadow-2xl p-5 min-w-72">
                <label className="block text-sm font-mono text-dark-400 mb-2">
                  <span className="text-cyber-400">$</span> password --teacher
                </label>
                <input
                  type="password"
                  value={teacherPassword}
                  onChange={(e) => setTeacherPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTeacherLogin()}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-lg text-dark-100 font-mono placeholder-dark-500 focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all"
                  placeholder="••••••••"
                  autoFocus
                />
                {passwordError && (
                  <p className="text-neon-pink text-sm mt-2 font-mono">
                    error: {passwordError}
                  </p>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={handleTeacherLogin}
                    className="flex-1 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-neon transition-all"
                  >
                    Valider
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordInput(false);
                      setTeacherPassword('');
                      setPasswordError('');
                    }}
                    className="flex-1 bg-dark-700 text-dark-300 px-4 py-2 rounded-lg text-sm hover:bg-dark-600 transition-all"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/learn"
          className="inline-flex items-center text-dark-400 hover:text-cyber-400 mb-8 transition-colors font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          cd ../learn
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-6">
            <Filter className="w-4 h-4 text-neon-purple" />
            <span className="text-xs font-mono text-dark-300">
              Module interactif
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="text-dark-100">Comprendre le </span>
            <span className="text-gradient-pink">Tunnel de Conversion</span>
          </h1>

          <p className="text-lg text-dark-400 max-w-3xl mx-auto">
            De l'impression publicitaire à l'achat final : maîtrisez l'art d'analyser
            et d'optimiser chaque étape du parcours client.
          </p>

          {isTeacherMode && (
            <div className="mt-6 bg-neon-green/10 border border-neon-green/30 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-neon-green font-mono text-sm">
                🎓 Mode Enseignant - Contrôlez la progression du cours
              </p>
            </div>
          )}
        </div>

        {/* Teacher Controls */}
        {isTeacherMode && (
          <div className="mb-8 p-4 bg-dark-800/50 border border-neon-green/30 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-neon-green font-mono text-sm">
                <GraduationCap className="w-5 h-5" />
                <span>Contrôle du cours</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={revealNextSection}
                  disabled={revealedSections.length >= sections.length}
                  className="flex items-center gap-2 px-4 py-2 bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-lg font-mono text-sm hover:bg-neon-green/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                  Section suivante
                </button>
                <button
                  onClick={revealAllSections}
                  className="flex items-center gap-2 px-4 py-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-lg font-mono text-sm hover:bg-neon-purple/30 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Tout révéler
                </button>
                <button
                  onClick={resetSections}
                  className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-dark-300 border border-dark-600 rounded-lg font-mono text-sm hover:border-dark-500 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-dark-400 font-mono text-xs">Progression:</span>
                <span className="text-cyber-400 font-mono text-xs">
                  {revealedSections.length}/{sections.length} sections
                </span>
              </div>
              <div className="flex gap-1">
                {sections.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      revealedSections.includes(i)
                        ? 'bg-gradient-to-r from-cyber-400 to-neon-purple'
                        : 'bg-dark-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {sections.map((section, index) => {
              const isRevealed = revealedSections.includes(index);
              const SectionIcon = section.icon;

              return (
                <button
                  key={section.id}
                  onClick={() => isRevealed && setCurrentSection(index)}
                  disabled={!isRevealed}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                    currentSection === index
                      ? `bg-${section.color}/20 text-${section.color} border border-${section.color}/30`
                      : isRevealed
                        ? 'bg-dark-800/50 text-dark-300 border border-dark-700 hover:border-dark-500'
                        : 'bg-dark-800/30 text-dark-600 border border-dark-800 cursor-not-allowed'
                  }`}
                >
                  {isRevealed ? (
                    <SectionIcon className="w-4 h-4" />
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">{section.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 0: Introduction */}
          {revealedSections.includes(0) && currentSection === 0 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-xl flex items-center justify-center">
                    <Filter className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Qu'est-ce qu'un tunnel de conversion ?
                    </h2>
                    <p className="text-dark-400">Comprendre le parcours de l'utilisateur</p>
                  </div>
                </div>

                <div className="prose-cyber">
                  <p className="text-lg text-dark-300 mb-6">
                    Un <strong className="text-cyber-400">tunnel de conversion</strong> (ou funnel) représente
                    le parcours qu'un utilisateur effectue depuis sa première interaction avec votre marque
                    jusqu'à la réalisation d'une action souhaitée (achat, inscription, demande de devis...).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-5 bg-cyber-400/10 border border-cyber-400/30 rounded-xl">
                      <h3 className="text-lg font-bold text-cyber-400 mb-3 flex items-center gap-2">
                        <Megaphone className="w-5 h-5" />
                        Pourquoi "tunnel" ?
                      </h3>
                      <p className="text-dark-300 text-sm">
                        Comme un entonnoir, le nombre d'utilisateurs diminue à chaque étape.
                        Sur 100 000 impressions, seuls quelques-uns deviennent clients.
                        C'est <strong className="text-dark-100">normal et attendu</strong>.
                      </p>
                    </div>

                    <div className="p-5 bg-neon-purple/10 border border-neon-purple/30 rounded-xl">
                      <h3 className="text-lg font-bold text-neon-purple mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        L'objectif ?
                      </h3>
                      <p className="text-dark-300 text-sm">
                        Identifier où les utilisateurs "fuient" et <strong className="text-dark-100">optimiser
                        chaque étape</strong> pour augmenter le taux de passage.
                        Un gain de 1% peut représenter des milliers d'euros.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-yellow mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Les étapes classiques d'un tunnel e-commerce
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      {[
                        { label: 'Impression', icon: Eye },
                        { label: 'Clic', icon: MousePointer },
                        { label: 'Vue produit', icon: BookOpen },
                        { label: 'Panier', icon: ShoppingCart },
                        { label: 'Compte', icon: Users },
                        { label: 'Achat', icon: CreditCard },
                      ].map((step, i) => (
                        <React.Fragment key={step.label}>
                          <div className="flex items-center gap-2 px-3 py-2 bg-dark-800/50 rounded-lg">
                            <step.icon className="w-4 h-4 text-neon-yellow" />
                            <span className="text-dark-200">{step.label}</span>
                          </div>
                          {i < 5 && <ChevronRight className="w-4 h-4 text-dark-600" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {isTeacherMode && (
                  <div className="mt-6 p-4 bg-neon-green/10 border border-neon-green/30 rounded-xl">
                    <p className="text-neon-green text-sm font-mono">
                      💡 Note enseignant : Demandez aux étudiants de citer d'autres types de conversions
                      (lead gen, SaaS trial, inscription newsletter...)
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section 1: Interactive Funnel */}
          {revealedSections.includes(1) && currentSection === 1 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-cyber-400 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Le tunnel en action
                    </h2>
                    <p className="text-dark-400">Visualisation interactive du parcours client</p>
                  </div>
                </div>

                <InteractiveFunnel isTeacherMode={isTeacherMode} />
              </div>
            </section>
          )}

          {/* Section 2: Metrics */}
          {revealedSections.includes(2) && currentSection === 2 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Les métriques clés à suivre
                    </h2>
                    <p className="text-dark-400">KPIs essentiels pour chaque étape</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      metric: 'CPM',
                      name: 'Coût pour Mille',
                      formula: 'Coût / Impressions × 1000',
                      benchmark: '5-15€',
                      color: 'cyber-400',
                      description: 'Coût pour afficher 1000 fois votre pub'
                    },
                    {
                      metric: 'CTR',
                      name: 'Click-Through Rate',
                      formula: 'Clics / Impressions × 100',
                      benchmark: '1-3%',
                      color: 'neon-green',
                      description: 'Taux de clic sur vos publicités'
                    },
                    {
                      metric: 'CPC',
                      name: 'Coût Par Clic',
                      formula: 'Coût / Clics',
                      benchmark: '0.50-2€',
                      color: 'neon-purple',
                      description: 'Prix payé pour chaque visiteur'
                    },
                    {
                      metric: 'CVR',
                      name: 'Conversion Rate',
                      formula: 'Conversions / Visites × 100',
                      benchmark: '1-3%',
                      color: 'neon-pink',
                      description: 'Taux de transformation global'
                    },
                    {
                      metric: 'CPA',
                      name: 'Coût Par Acquisition',
                      formula: 'Coût total / Conversions',
                      benchmark: 'Variable',
                      color: 'neon-yellow',
                      description: 'Coût pour acquérir un client'
                    },
                    {
                      metric: 'ROAS',
                      name: 'Return On Ad Spend',
                      formula: 'CA généré / Coût pub',
                      benchmark: '> 3x',
                      color: 'neon-orange',
                      description: 'Retour sur investissement pub'
                    },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      className={`p-5 bg-${item.color}/10 border border-${item.color}/30 rounded-xl`}
                    >
                      <div className={`text-2xl font-bold text-${item.color} font-mono mb-1`}>
                        {item.metric}
                      </div>
                      <div className="text-dark-100 font-semibold mb-2">{item.name}</div>
                      <div className="text-dark-400 text-sm mb-3">{item.description}</div>
                      <div className="p-2 bg-dark-900/50 rounded-lg font-mono text-xs text-dark-300 mb-2">
                        {item.formula}
                      </div>
                      <div className="text-dark-500 text-xs">
                        Benchmark: <span className={`text-${item.color}`}>{item.benchmark}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                  <h3 className="text-lg font-bold text-dark-100 mb-4 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-cyber-400" />
                    Calcul du taux de conversion par étape
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-dark-700">
                          <th className="text-left py-3 px-4 text-cyber-400 font-mono">Transition</th>
                          <th className="text-left py-3 px-4 text-cyber-400 font-mono">Formule</th>
                          <th className="text-left py-3 px-4 text-cyber-400 font-mono">Exemple</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-300">
                        <tr className="border-b border-dark-800">
                          <td className="py-3 px-4">Impression → Clic</td>
                          <td className="py-3 px-4 font-mono text-neon-green">CTR = Clics / Impressions</td>
                          <td className="py-3 px-4">3 500 / 100 000 = 3,5%</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-3 px-4">Clic → Vue produit</td>
                          <td className="py-3 px-4 font-mono text-neon-green">Vues / Clics</td>
                          <td className="py-3 px-4">1 750 / 3 500 = 50%</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-3 px-4">Vue → Panier</td>
                          <td className="py-3 px-4 font-mono text-neon-green">Add-to-cart / Vues</td>
                          <td className="py-3 px-4">525 / 1 750 = 30%</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Panier → Achat</td>
                          <td className="py-3 px-4 font-mono text-neon-green">Achats / Paniers</td>
                          <td className="py-3 px-4">175 / 525 = 33%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 3: Analysis */}
          {revealedSections.includes(3) && currentSection === 3 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-purple rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Analyser les fuites du tunnel
                    </h2>
                    <p className="text-dark-400">Identifier et comprendre les abandons</p>
                  </div>
                </div>

                <div className="prose-cyber">
                  <div className="p-5 bg-neon-pink/10 border border-neon-pink/30 rounded-xl mb-6">
                    <h3 className="text-lg font-bold text-neon-pink mb-3">
                      🔍 Les questions à se poser
                    </h3>
                    <ul className="space-y-2 text-dark-300">
                      <li className="flex items-start gap-2">
                        <span className="text-neon-pink">→</span>
                        À quelle étape perdons-nous le plus d'utilisateurs ?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-pink">→</span>
                        Cette perte est-elle normale par rapport aux benchmarks ?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-pink">→</span>
                        Y a-t-il des segments (device, source, âge) plus impactés ?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-neon-pink">→</span>
                        L'évolution est-elle stable ou dégradée récemment ?
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-dark-100 mb-4">Méthodes d'analyse</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-5 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                      <h4 className="font-bold text-cyber-400 mb-3 flex items-center gap-2">
                        <LineChart className="w-5 h-5" />
                        Analyse quantitative
                      </h4>
                      <ul className="space-y-2 text-sm text-dark-300">
                        <li>• Taux de conversion par étape</li>
                        <li>• Segmentation par device (mobile vs desktop)</li>
                        <li>• Comparaison par source de trafic</li>
                        <li>• Évolution temporelle (trends)</li>
                        <li>• Cohortes utilisateurs</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                      <h4 className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        Analyse qualitative
                      </h4>
                      <ul className="space-y-2 text-sm text-dark-300">
                        <li>• Heatmaps et scrollmaps</li>
                        <li>• Session recordings (Hotjar, Clarity)</li>
                        <li>• Tests utilisateurs</li>
                        <li>• Enquêtes de sortie</li>
                        <li>• Analyse des avis clients</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-yellow mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Priorisation des optimisations
                    </h3>
                    <p className="text-dark-300 mb-4">
                      Utilisez la matrice <strong className="text-dark-100">Impact × Effort</strong> :
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                        <div className="font-bold text-neon-green mb-1">Quick Wins</div>
                        <div className="text-dark-400">Fort impact, faible effort</div>
                      </div>
                      <div className="p-3 bg-cyber-400/10 border border-cyber-400/30 rounded-lg">
                        <div className="font-bold text-cyber-400 mb-1">Projets majeurs</div>
                        <div className="text-dark-400">Fort impact, fort effort</div>
                      </div>
                      <div className="p-3 bg-dark-700/50 border border-dark-600 rounded-lg">
                        <div className="font-bold text-dark-300 mb-1">Fill-ins</div>
                        <div className="text-dark-400">Faible impact, faible effort</div>
                      </div>
                      <div className="p-3 bg-neon-pink/10 border border-neon-pink/30 rounded-lg">
                        <div className="font-bold text-neon-pink mb-1">À éviter</div>
                        <div className="text-dark-400">Faible impact, fort effort</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 4: Optimization */}
          {revealedSections.includes(4) && currentSection === 4 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-yellow to-neon-orange rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Stratégies d'optimisation
                    </h2>
                    <p className="text-dark-400">Leviers pour améliorer chaque étape</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Récupération des paniers abandonnés',
                      icon: ShoppingCart,
                      color: 'neon-yellow',
                      tactics: [
                        'Email de relance H+1 avec rappel produits',
                        'SMS de relance avec code promo',
                        'Retargeting dynamique sur les réseaux sociaux',
                        'Push notification (si app mobile)',
                        'Exit-intent popup avec offre'
                      ]
                    },
                    {
                      title: 'Réduction des frictions checkout',
                      icon: CreditCard,
                      color: 'neon-green',
                      tactics: [
                        'Guest checkout (pas d\'obligation de compte)',
                        'Auto-complétion des adresses',
                        'Paiement en 1 clic (express checkout)',
                        'Indicateur de progression clair',
                        'Résumé visible à chaque étape'
                      ]
                    },
                    {
                      title: 'Création de confiance',
                      icon: CheckCircle,
                      color: 'cyber-400',
                      tactics: [
                        'Avis clients vérifiés et notes',
                        'Badges de sécurité (3D Secure, SSL)',
                        'Garanties visibles (satisfait ou remboursé)',
                        'Chat support en temps réel',
                        'FAQ sur les questions fréquentes'
                      ]
                    },
                    {
                      title: 'Incitations à l\'achat',
                      icon: Zap,
                      color: 'neon-pink',
                      tactics: [
                        'Livraison gratuite à partir de X€',
                        'Paiement en 3x/4x sans frais',
                        'Urgence (stock limité, fin de promo)',
                        'Cross-sell / Upsell intelligent',
                        'Programme fidélité visible'
                      ]
                    },
                  ].map((strategy) => (
                    <div
                      key={strategy.title}
                      className={`p-5 bg-${strategy.color}/10 border border-${strategy.color}/30 rounded-xl`}
                    >
                      <h3 className={`text-lg font-bold text-${strategy.color} mb-4 flex items-center gap-2`}>
                        <strategy.icon className="w-5 h-5" />
                        {strategy.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {strategy.tactics.map((tactic, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-3 bg-dark-900/50 rounded-lg text-sm text-dark-300"
                          >
                            <CheckCircle className={`w-4 h-4 text-${strategy.color} mt-0.5 flex-shrink-0`} />
                            {tactic}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 5: Tools */}
          {revealedSections.includes(5) && currentSection === 5 && (
            <section className="animate-fadeIn">
              <div className="bg-dark-800/50 backdrop-blur border border-dark-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-orange to-neon-pink rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Outils et tracking
                    </h2>
                    <p className="text-dark-400">Implémenter le suivi du tunnel</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                    <h3 className="text-lg font-bold text-cyber-400 mb-4">Analytics & Tracking</h3>
                    <ul className="space-y-3">
                      {[
                        { name: 'Google Analytics 4', desc: 'Suivi comportemental complet' },
                        { name: 'Google Tag Manager', desc: 'Gestion centralisée des tags' },
                        { name: 'Meta Pixel', desc: 'Tracking Facebook/Instagram' },
                        { name: 'Google Ads Conversion', desc: 'Attribution des conversions' },
                      ].map((tool) => (
                        <li key={tool.name} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2" />
                          <div>
                            <div className="text-dark-100 font-semibold">{tool.name}</div>
                            <div className="text-dark-400 text-sm">{tool.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-4">UX & Heatmaps</h3>
                    <ul className="space-y-3">
                      {[
                        { name: 'Hotjar', desc: 'Heatmaps et recordings' },
                        { name: 'Microsoft Clarity', desc: 'Alternative gratuite à Hotjar' },
                        { name: 'FullStory', desc: 'Analytics d\'expérience digitale' },
                        { name: 'Contentsquare', desc: 'Analytics UX avancé' },
                      ].map((tool) => (
                        <li key={tool.name} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mt-2" />
                          <div>
                            <div className="text-dark-100 font-semibold">{tool.name}</div>
                            <div className="text-dark-400 text-sm">{tool.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-neon-green/10 border border-neon-green/30 rounded-xl">
                  <h3 className="text-lg font-bold text-neon-green mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Événements GA4 à configurer
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-neon-green/30">
                          <th className="text-left py-2 px-3 text-neon-green font-mono">Événement</th>
                          <th className="text-left py-2 px-3 text-neon-green font-mono">Déclencheur</th>
                          <th className="text-left py-2 px-3 text-neon-green font-mono">Paramètres</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-300 font-mono text-xs">
                        <tr className="border-b border-dark-700">
                          <td className="py-2 px-3">page_view</td>
                          <td className="py-2 px-3">Chaque page</td>
                          <td className="py-2 px-3">page_title, page_location</td>
                        </tr>
                        <tr className="border-b border-dark-700">
                          <td className="py-2 px-3">view_item</td>
                          <td className="py-2 px-3">Fiche produit</td>
                          <td className="py-2 px-3">item_id, item_name, price</td>
                        </tr>
                        <tr className="border-b border-dark-700">
                          <td className="py-2 px-3">add_to_cart</td>
                          <td className="py-2 px-3">Clic ajout panier</td>
                          <td className="py-2 px-3">items[], value, currency</td>
                        </tr>
                        <tr className="border-b border-dark-700">
                          <td className="py-2 px-3">begin_checkout</td>
                          <td className="py-2 px-3">Début checkout</td>
                          <td className="py-2 px-3">items[], value, coupon</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">purchase</td>
                          <td className="py-2 px-3">Confirmation</td>
                          <td className="py-2 px-3">transaction_id, value, items[]</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 6: Exercise */}
          {revealedSections.includes(6) && currentSection === 6 && (
            <section className="animate-fadeIn">
              <div className="bg-gradient-to-br from-neon-purple/10 to-cyber-400/10 border border-neon-purple/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-100 font-display">
                      Cas pratique
                    </h2>
                    <p className="text-dark-400">Analysez ce tunnel et proposez des optimisations</p>
                  </div>
                </div>

                <div className="bg-dark-900/50 rounded-xl p-6 mb-6 border border-dark-700/50">
                  <h3 className="text-lg font-bold text-neon-yellow mb-4">📊 Données du cas</h3>
                  <p className="text-dark-300 mb-4">
                    Une boutique e-commerce de mode féminine vous présente ses données du mois dernier :
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mb-4">
                      <thead>
                        <tr className="border-b border-dark-700">
                          <th className="text-left py-2 px-3 text-cyber-400 font-mono">Étape</th>
                          <th className="text-right py-2 px-3 text-cyber-400 font-mono">Utilisateurs</th>
                          <th className="text-right py-2 px-3 text-cyber-400 font-mono">Taux passage</th>
                          <th className="text-right py-2 px-3 text-cyber-400 font-mono">Benchmark</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark-300">
                        <tr className="border-b border-dark-800">
                          <td className="py-2 px-3">Impressions</td>
                          <td className="py-2 px-3 text-right font-mono">500 000</td>
                          <td className="py-2 px-3 text-right">-</td>
                          <td className="py-2 px-3 text-right">-</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-2 px-3">Clics</td>
                          <td className="py-2 px-3 text-right font-mono">7 500</td>
                          <td className="py-2 px-3 text-right text-neon-pink">1.5%</td>
                          <td className="py-2 px-3 text-right text-dark-500">2-3%</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-2 px-3">Vues produit</td>
                          <td className="py-2 px-3 text-right font-mono">4 500</td>
                          <td className="py-2 px-3 text-right text-neon-green">60%</td>
                          <td className="py-2 px-3 text-right text-dark-500">50%</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-2 px-3">Ajouts panier</td>
                          <td className="py-2 px-3 text-right font-mono">450</td>
                          <td className="py-2 px-3 text-right text-neon-pink">10%</td>
                          <td className="py-2 px-3 text-right text-dark-500">25-30%</td>
                        </tr>
                        <tr className="border-b border-dark-800">
                          <td className="py-2 px-3">Checkouts initiés</td>
                          <td className="py-2 px-3 text-right font-mono">180</td>
                          <td className="py-2 px-3 text-right text-neon-yellow">40%</td>
                          <td className="py-2 px-3 text-right text-dark-500">50%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Achats</td>
                          <td className="py-2 px-3 text-right font-mono">72</td>
                          <td className="py-2 px-3 text-right text-neon-yellow">40%</td>
                          <td className="py-2 px-3 text-right text-dark-500">50%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-dark-400 text-sm">
                    <strong className="text-dark-200">Infos complémentaires :</strong> Panier moyen 85€ |
                    Frais de livraison 4,90€ (gratuit à partir de 100€) |
                    70% du trafic mobile | Pas de paiement fractionné
                  </div>
                </div>

                <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50">
                  <h3 className="text-lg font-bold text-cyber-400 mb-4">🎯 Votre mission</h3>
                  <ol className="space-y-4 text-dark-300">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-cyber-400/20 text-cyber-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Identifiez les <strong className="text-dark-100">2 étapes les plus problématiques</strong> du tunnel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-cyber-400/20 text-cyber-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Proposez <strong className="text-dark-100">3 hypothèses</strong> pour expliquer chaque problème</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-cyber-400/20 text-cyber-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>Recommandez <strong className="text-dark-100">5 actions concrètes</strong> par ordre de priorité (quick wins d'abord)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-cyber-400/20 text-cyber-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>Estimez l'<strong className="text-dark-100">impact potentiel</strong> en CA si vous atteignez les benchmarks</span>
                    </li>
                  </ol>
                </div>

                {isTeacherMode && (
                  <div className="mt-6 p-5 bg-neon-green/10 border border-neon-green/30 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-green mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Correction enseignant
                    </h3>
                    <div className="space-y-4 text-dark-300 text-sm">
                      <div>
                        <h4 className="font-bold text-dark-100 mb-2">Étapes problématiques :</h4>
                        <ul className="space-y-1 ml-4">
                          <li>• <strong className="text-neon-pink">CTR (1.5% vs 2-3%)</strong> : Publicités peu performantes</li>
                          <li>• <strong className="text-neon-pink">Vue → Panier (10% vs 25-30%)</strong> : Problème majeur sur les fiches produits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-100 mb-2">Actions prioritaires :</h4>
                        <ol className="space-y-1 ml-4">
                          <li>1. Livraison gratuite dès 80€ (vs 100€) → hausse panier moyen</li>
                          <li>2. Photos produits améliorées + vidéos pour mobile</li>
                          <li>3. Ajouter paiement en 3x (Alma/Klarna)</li>
                          <li>4. A/B test nouveaux visuels publicitaires</li>
                          <li>5. Relance panier abandonné automatique</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-100 mb-2">Impact estimé :</h4>
                        <p>
                          Actuel : 72 achats × 85€ = <strong className="text-neon-pink">6 120€</strong><br />
                          Si benchmark atteint (CTR 2.5%, ATC 25%) : ~180 achats × 85€ = <strong className="text-neon-green">15 300€</strong><br />
                          Gain potentiel : <strong className="text-neon-green">+150%</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Locked section placeholder for students */}
          {!isTeacherMode && revealedSections.length < sections.length && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-dark-800/50 border border-dark-700/50 rounded-xl">
                <Lock className="w-6 h-6 text-dark-500" />
                <span className="text-dark-400 font-mono">
                  {sections.length - revealedSections.length} section(s) à débloquer par l'enseignant
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversionFunnel;
