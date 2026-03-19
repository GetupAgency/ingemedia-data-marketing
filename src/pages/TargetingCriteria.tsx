import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  Users,
  Crosshair,
  Layers,
  Lightbulb,
  Lock,
  Unlock,
  GraduationCap,
  Zap,
  ShoppingCart,
  Smartphone,
  MapPin,
  Brain,
} from 'lucide-react';
import TargetingWheel from '../components/TargetingWheel';

const targetingScenarios = [
  {
    title: 'E-commerce Mode Femme',
    color: '#ff2d95',
    target: 'Femme • 25-35 ans • Paris & IDF • Intérêts : mode, shopping en ligne • iPhone • Instagram & Pinterest',
    criteria: ['Sexe', 'Âge', 'Ville', 'Centres d\'intérêts', 'Terminal', 'Réseaux sociaux'],
    categories: ['Démographique', 'Géographique', 'Psychographique', 'Technographique'],
    result: 'CPM ~8€ • CTR 2.1% • ROAS 4.2x',
    platform: 'Meta Ads',
  },
  {
    title: 'Restaurant Local',
    color: '#39ff14',
    target: 'Tous • 18-55 ans • Rayon 5km du restaurant • Heures repas (11h-14h, 18h-21h) • Mobile',
    criteria: ['Âge', 'Rayon', 'Heure du jour', 'Terminal'],
    categories: ['Démographique', 'Géographique', 'Contextuel', 'Technographique'],
    result: 'CPC ~0.35€ • Taux conversion 6.8%',
    platform: 'Google Ads + Waze',
  },
  {
    title: 'SaaS B2B',
    color: '#b026ff',
    target: 'CDO, CMO, Data Analyst • 28-50 ans • Entreprises 50+ employés • Intérêts : MarTech, analytics',
    criteria: ['CSP', 'Âge', 'Centres d\'intérêts', 'Navigation web'],
    categories: ['Démographique', 'Psychographique', 'Comportemental'],
    result: 'CPL ~45€ • Taux conversion 3.2% • LTV/CAC 8x',
    platform: 'LinkedIn Ads',
  },
  {
    title: 'App Étudiante',
    color: '#fff01f',
    target: 'Étudiant • 18-25 ans • Grandes villes universitaires • TikTok & Instagram • Android dominant',
    criteria: ['Étudiant', 'Âge', 'Ville', 'Réseaux sociaux', 'OS'],
    categories: ['Comportemental', 'Démographique', 'Géographique', 'Technographique'],
    result: 'CPI ~1.20€ • Rétention J7 : 38%',
    platform: 'TikTok Ads + Meta',
  },
];

const TargetingCriteria: React.FC = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-16">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />

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
                <form onSubmit={(e) => { e.preventDefault(); handleTeacherLogin(); }}>
                  <label className="block text-sm font-mono text-dark-400 mb-2">
                    <span className="text-cyber-400">$</span> password --teacher
                  </label>
                  <input
                    type="password"
                    value={teacherPassword}
                    onChange={(e) => setTeacherPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-lg text-dark-100 font-mono placeholder-dark-500 focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20 transition-all"
                    placeholder="••••••••"
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-neon-pink text-sm mt-2 font-mono">
                      <span className="text-neon-pink">error:</span> {passwordError}
                    </p>
                  )}
                  <div className="flex gap-2 mt-4">
                    <button type="submit"
                      className="flex-1 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-neon transition-all">
                      Valider
                    </button>
                    <button type="button"
                      onClick={() => { setShowPasswordInput(false); setTeacherPassword(''); setPasswordError(''); }}
                      className="flex-1 bg-dark-700 text-dark-300 px-4 py-2 rounded-lg text-sm hover:bg-dark-600 transition-all">
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Header */}
      <header className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <Link
          to="/learn"
          className="inline-flex items-center text-dark-400 hover:text-cyber-400 mb-6 transition-colors font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          cd ../modules
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-xl flex items-center justify-center shadow-neon">
            <Crosshair className="w-7 h-7 text-dark-900" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 bg-neon-yellow/20 text-neon-yellow text-xs font-mono rounded-full border border-neon-yellow/30">
                Interactif
              </span>
              <span className="px-3 py-1 bg-cyber-400/20 text-cyber-400 text-xs font-mono rounded-full border border-cyber-400/30">
                Visuel
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-100 font-display">
              Critères de Ciblage Marketing
            </h1>
          </div>
        </div>

        <p className="text-dark-400 max-w-2xl mt-4 leading-relaxed">
          Explorez les <span className="text-cyber-400 font-semibold">6 dimensions du ciblage publicitaire</span>.
          Chaque annonceur combine ces critères pour atteindre précisément son audience idéale.
          Cliquez sur une catégorie pour découvrir ses critères en détail.
        </p>

        {isTeacherMode && (
          <div className="mt-4 bg-neon-green/10 border border-neon-green/30 rounded-xl p-4 max-w-md">
            <p className="text-neon-green font-mono text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Mode Enseignant — Notes pédagogiques visibles
            </p>
          </div>
        )}
      </header>

      {/* Main Visualization */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark-800/30 backdrop-blur border border-dark-700/50 rounded-2xl p-4 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-dark-100 font-display flex items-center justify-center gap-2">
              <Target className="w-5 h-5 text-cyber-400" />
              La Roue du Ciblage
            </h2>
            <p className="text-dark-500 text-sm font-mono mt-1">targeting_wheel.render()</p>
          </div>

          <TargetingWheel />
        </div>
      </section>

      {/* Key Concept: Combined Targeting */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-dark-100 font-display flex items-center gap-3">
            <Layers className="w-6 h-6 text-neon-pink" />
            La puissance du ciblage combiné
          </h2>
          <p className="text-dark-400 mt-2 max-w-2xl">
            Un annonceur ne cible jamais sur un seul critère. C'est la <span className="text-neon-pink font-semibold">combinaison</span> de
            plusieurs dimensions qui crée un ciblage précis et performant. Voici des exemples concrets :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetingScenarios.map((scenario, idx) => (
            <div
              key={idx}
              className="bg-dark-800/40 backdrop-blur border border-dark-700/50 rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300"
              style={{ borderColor: `${scenario.color}25` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: scenario.color, boxShadow: `0 0 10px ${scenario.color}50` }}
                />
                <div>
                  <h3 className="font-bold text-dark-100 font-display" style={{ color: scenario.color }}>
                    {scenario.title}
                  </h3>
                  <span className="text-xs font-mono text-dark-500">{scenario.platform}</span>
                </div>
              </div>

              <div className="bg-dark-900/50 rounded-xl p-4 mb-4 border border-dark-700/30">
                <p className="text-dark-300 text-sm leading-relaxed">
                  <span className="text-dark-500 font-mono text-xs">target:</span><br />
                  {scenario.target}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {scenario.categories.map((cat) => (
                  <span key={cat}
                    className="px-2 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      backgroundColor: `${scenario.color}15`,
                      color: scenario.color,
                      border: `1px solid ${scenario.color}30`,
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {isTeacherMode && (
                <div
                  className="rounded-lg p-3 text-xs font-mono"
                  style={{
                    backgroundColor: `${scenario.color}10`,
                    borderLeft: `3px solid ${scenario.color}60`,
                  }}
                >
                  <span style={{ color: scenario.color }}>KPIs attendus :</span>
                  <span className="text-dark-300 ml-2">{scenario.result}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Educational Section: Key Takeaways */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-cyber-400/10 to-neon-purple/10 border border-cyber-400/20 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-dark-100 font-display flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-neon-yellow" />
            Points clés à retenir
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">Plus de critères ≠ meilleur ciblage</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    Trop de critères réduisent la taille d'audience et augmentent les CPM.
                    Trouver le bon équilibre est un art.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-neon-pink mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">Les données 1st party sont l'or du marketing</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    Avec la disparition des cookies tiers, les données CRM et first-party
                    deviennent le levier de ciblage le plus précieux.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-neon-purple mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">L'IA transforme le ciblage</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    Meta Advantage+, Google Performance Max : les algorithmes optimisent
                    automatiquement le ciblage en temps réel.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">Le contextuel fait son grand retour</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    Post-cookies, le ciblage contextuel (thème de la page, moment)
                    redevient un pilier majeur de la stratégie media.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShoppingCart className="w-5 h-5 text-neon-orange mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">Le comportemental surpasse le déclaratif</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    Ce que les gens font (achats, navigation) est plus prédictif
                    que ce qu'ils déclarent (intérêts cochés).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-neon-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-100 text-sm">Le device n'est pas neutre</h4>
                  <p className="text-dark-400 text-xs mt-1">
                    iOS vs Android, mobile vs desktop : le terminal est un proxy
                    socio-économique puissant utilisé par tous les annonceurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher-only: Pedagogical Notes */}
      {isTeacherMode && (
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-neon-green/5 border border-neon-green/30 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-neon-green font-display flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6" />
              Notes pédagogiques
            </h2>
            <div className="space-y-4 text-sm text-dark-300">
              <div>
                <h4 className="font-semibold text-neon-green/80 mb-1">Exercice suggéré (20 min)</h4>
                <p>
                  Demander aux étudiants de construire un persona cible pour un produit/service de leur choix,
                  en sélectionnant au moins un critère dans chaque catégorie. Leur faire calculer
                  la taille d'audience estimée sur Meta Ads Manager.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neon-green/80 mb-1">Discussion en classe</h4>
                <p>
                  Comparer les approches de ciblage entre les plateformes : pourquoi LinkedIn est meilleur
                  pour le B2B (données déclaratives professionnelles) vs Meta pour le B2C (données comportementales
                  et d'intérêt massives) vs Google pour l'intention (données de recherche).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neon-green/80 mb-1">Point RGPD à aborder</h4>
                <p>
                  Le ciblage psychographique et comportemental soulève des questions éthiques et légales.
                  Aborder le consentement, la transparence, et le droit à la vie privée (RGPD Art. 22 sur
                  le profilage automatisé).
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 rounded-xl font-semibold hover:shadow-neon transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux modules
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TargetingCriteria;
