import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Lock,
  Unlock,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  AlertTriangle,
  Sparkles,
  PieChart,
  ShoppingCart,
  Mail,
  DollarSign,
  Eye,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { teacherPassword } from '../data/unifiedLearningPath';

const RFMCorrection: React.FC = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const handleTeacherLogin = () => {
    if (passwordInput === teacherPassword) {
      setIsTeacherMode(true);
      setShowPasswordInput(false);
      setPasswordError('');
      setPasswordInput('');
    } else {
      setPasswordError('Mot de passe incorrect');
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isTeacherMode) {
    return (
      <div className="min-h-screen bg-dark-950 pt-20 pb-16 flex items-center justify-center">
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-dark-800 border border-dark-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-dark-500" />
          </div>
          <h1 className="text-2xl font-bold text-dark-100 font-display mb-2">Correction enseignant</h1>
          <p className="text-dark-500 text-sm mb-8">
            Cette page contient la correction detaillee de l'exercice RFM.
            Entrez le mot de passe enseignant pour y acceder.
          </p>
          <div className="flex items-center gap-2 justify-center">
            <input
              type="password"
              value={passwordInput}
              onChange={e => { setPasswordInput(e.target.value); setPasswordError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleTeacherLogin()}
              placeholder="Mot de passe"
              className="bg-dark-900 border border-dark-700 rounded-xl px-4 py-3 text-sm text-dark-200 w-48 font-mono focus:border-cyber-400 focus:outline-none"
              autoFocus
            />
            <button
              onClick={handleTeacherLogin}
              className="px-5 py-3 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 rounded-xl font-semibold hover:shadow-neon transition-all"
            >
              Acceder
            </button>
          </div>
          {passwordError && <p className="text-neon-pink text-sm mt-3 font-mono">{passwordError}</p>}
          <Link to="/learn" className="inline-flex items-center text-dark-500 hover:text-cyber-400 mt-8 transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-20 pb-16">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-cyber-400/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link to="/learn" className="inline-flex items-center text-dark-400 hover:text-cyber-400 mb-6 transition-colors font-mono text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> cd ../learn
        </Link>

        <div className="flex items-start gap-5 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-neon-orange to-neon-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-neon-orange/30 flex-shrink-0">
            <Users className="w-7 h-7 text-dark-900" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-dark-100 font-display">
              Correction : Le Sherlock des Clients
            </h1>
            <p className="text-dark-400 mt-1">
              Segmentation RFM sur le dataset Marketing Campaign (2 240 clients) -- Donnees reelles analysees
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-8 px-4 py-3 bg-neon-green/10 border border-neon-green/30 rounded-xl">
          <Unlock className="w-4 h-4 text-neon-green" />
          <span className="text-neon-green text-sm font-mono">Mode enseignant actif</span>
          <button onClick={() => setIsTeacherMode(false)} className="ml-auto text-dark-500 text-xs hover:text-dark-300">Verrouiller</button>
        </div>

        {/* Sections */}
        <div className="space-y-4">

          {/* ===== SECTION 1: EXPLORATION ===== */}
          <CorrectionSection
            id="exploration"
            title="Etape 1 : Exploration du dataset"
            subtitle="Ce que les etudiants doivent decouvrir en ouvrant le fichier"
            icon={Eye}
            color="cyber-400"
            isOpen={openSections['exploration'] ?? true}
            onToggle={() => toggleSection('exploration')}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <KPICard label="Clients" value="2 240" detail="29 colonnes" />
              <KPICard label="Valeurs manquantes" value="24" detail="Uniquement sur Income (1%)" />
              <KPICard label="Age moyen" value="55 ans" detail="3 outliers aberrants (>120 ans)" />
            </div>

            <h4 className="text-dark-200 font-semibold mb-3">Profil demographique</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Variable</th>
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Distribution</th>
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Observation</th>
                  </tr>
                </thead>
                <tbody className="text-dark-300">
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">Education</td>
                    <td className="py-2 px-3">Graduation 50% | PhD 22% | Master 17% | 2n Cycle 9% | Basic 2%</td>
                    <td className="py-2 px-3 text-dark-500">Base tres diplome -- clientele CSP+</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">Marital Status</td>
                    <td className="py-2 px-3">Married 39% | Together 26% | Single 21% | Divorced 10%</td>
                    <td className="py-2 px-3 text-dark-500">65% en couple. Anomalies : "Absurd", "YOLO" (7 lignes)</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">Income</td>
                    <td className="py-2 px-3">Mediane 51 382 | Q1: 35 303 | Q3: 68 522</td>
                    <td className="py-2 px-3 text-dark-500">1 outlier extreme a 666 666 (erreur de saisie probable)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-dark-200">Enfants</td>
                    <td className="py-2 px-3">0 enfant : 49% | 1 enfant : 37% | 2+ : 14%</td>
                    <td className="py-2 px-3 text-dark-500">Impact majeur sur les depenses (voir section 6)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-cyber-400/10 border border-cyber-400/20 rounded-xl p-4">
              <p className="text-dark-300 text-sm">
                <strong className="text-cyber-400">Erreurs frequentes a surveiller :</strong> Les etudiants oublient souvent de verifier les valeurs aberrantes. Le client a 666 666 de revenu et les 3 clients nes avant 1900 doivent etre traites (suppression ou imputation mediane). C'est un reflexe essentiel en data analysis.
              </p>
            </div>
          </CorrectionSection>

          {/* ===== SECTION 2: CALCUL RFM ===== */}
          <CorrectionSection
            id="rfm-calc"
            title="Etape 2 : Calcul des scores RFM"
            subtitle="Les formules exactes et les seuils a utiliser"
            icon={BarChart3}
            color="neon-purple"
            isOpen={openSections['rfm-calc'] ?? false}
            onToggle={() => toggleSection('rfm-calc')}
          >
            <h4 className="text-dark-200 font-semibold mb-3">Formules</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-dark-900/50 border border-dark-700/30 rounded-xl p-4">
                <p className="text-neon-purple font-mono text-xs mb-1">R -- Recence</p>
                <p className="text-dark-200 text-sm font-semibold mb-2">Colonne <code className="text-cyber-400">Recency</code></p>
                <p className="text-dark-500 text-xs">Deja calculee dans le dataset. Jours depuis le dernier achat. Plus c'est BAS, mieux c'est (inverse de F et M).</p>
              </div>
              <div className="bg-dark-900/50 border border-dark-700/30 rounded-xl p-4">
                <p className="text-neon-purple font-mono text-xs mb-1">F -- Frequence</p>
                <p className="text-dark-200 text-sm font-semibold mb-2"><code className="text-cyber-400">NumWeb + NumCatalog + NumStore + NumDeals</code></p>
                <p className="text-dark-500 text-xs">Somme des 4 canaux d'achat. Plage : 0 a 44 achats.</p>
              </div>
              <div className="bg-dark-900/50 border border-dark-700/30 rounded-xl p-4">
                <p className="text-neon-purple font-mono text-xs mb-1">M -- Montant</p>
                <p className="text-dark-200 text-sm font-semibold mb-2"><code className="text-cyber-400">MntWines + Fruits + Meat + Fish + Sweet + Gold</code></p>
                <p className="text-dark-500 text-xs">Somme des 6 categories de depenses. Plage : 5 a 2 525 EUR.</p>
              </div>
            </div>

            <h4 className="text-dark-200 font-semibold mb-3">Distribution et quartiles (donnees reelles)</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Metrique</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Moyenne</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Mediane</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Q1 (25%)</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Q3 (75%)</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Min-Max</th>
                  </tr>
                </thead>
                <tbody className="text-dark-300">
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">R (Recency)</td>
                    <td className="py-2 px-3 text-center">49.1 jours</td>
                    <td className="py-2 px-3 text-center">49</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">24</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">74</td>
                    <td className="py-2 px-3 text-center">0 -- 99</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">F (Frequence)</td>
                    <td className="py-2 px-3 text-center">14.9 achats</td>
                    <td className="py-2 px-3 text-center">15</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">8</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">21</td>
                    <td className="py-2 px-3 text-center">0 -- 44</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-dark-200">M (Montant)</td>
                    <td className="py-2 px-3 text-center">606 EUR</td>
                    <td className="py-2 px-3 text-center">396</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">69</td>
                    <td className="py-2 px-3 text-center font-mono text-cyber-400">1 046</td>
                    <td className="py-2 px-3 text-center">5 -- 2 525</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-neon-purple/10 border border-neon-purple/20 rounded-xl p-4">
              <p className="text-dark-300 text-sm">
                <strong className="text-neon-purple">Observation cle :</strong> Le Montant est tres asymetrique (moyenne 606, bien superieure a la mediane 396). Une minorite de gros depenseurs tire la moyenne vers le haut. C'est exactement pour ca qu'on segmente : traiter les VIP comme les Perdus serait une erreur majeure.
              </p>
            </div>

            <h4 className="text-dark-200 font-semibold mt-6 mb-3">Grille de scoring par quartiles</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Score</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">R (jours)</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">F (achats)</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">M (EUR)</th>
                  </tr>
                </thead>
                <tbody className="text-dark-300">
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3"><span className="px-2 py-0.5 bg-neon-green/20 text-neon-green rounded text-xs font-mono">4 = Top</span></td>
                    <td className="py-2 px-3 text-center">0 -- 24 jours</td>
                    <td className="py-2 px-3 text-center">21+ achats</td>
                    <td className="py-2 px-3 text-center">1 046+ EUR</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3"><span className="px-2 py-0.5 bg-cyber-400/20 text-cyber-400 rounded text-xs font-mono">3 = Bon</span></td>
                    <td className="py-2 px-3 text-center">25 -- 49 jours</td>
                    <td className="py-2 px-3 text-center">15 -- 20 achats</td>
                    <td className="py-2 px-3 text-center">396 -- 1 045 EUR</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3"><span className="px-2 py-0.5 bg-neon-yellow/20 text-neon-yellow rounded text-xs font-mono">2 = Moyen</span></td>
                    <td className="py-2 px-3 text-center">50 -- 74 jours</td>
                    <td className="py-2 px-3 text-center">8 -- 14 achats</td>
                    <td className="py-2 px-3 text-center">69 -- 395 EUR</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3"><span className="px-2 py-0.5 bg-neon-pink/20 text-neon-pink rounded text-xs font-mono">1 = Faible</span></td>
                    <td className="py-2 px-3 text-center">75 -- 99 jours</td>
                    <td className="py-2 px-3 text-center">0 -- 7 achats</td>
                    <td className="py-2 px-3 text-center">5 -- 68 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CorrectionSection>

          {/* ===== SECTION 3: SEGMENTS ===== */}
          <CorrectionSection
            id="segments"
            title="Etape 3 : Les 5 segments (donnees reelles)"
            subtitle="Resultats de la segmentation sur les 2 240 clients"
            icon={PieChart}
            color="neon-orange"
            isOpen={openSections['segments'] ?? false}
            onToggle={() => toggleSection('segments')}
          >
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Segment</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Clients</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">%</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Revenu moy.</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Depense moy.</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Frequence moy.</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Recence moy.</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">Taux acceptation campagnes</th>
                  </tr>
                </thead>
                <tbody className="text-dark-300">
                  <tr className="border-b border-dark-800/50 bg-neon-yellow/5">
                    <td className="py-3 px-3"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neon-yellow"></span><strong className="text-dark-100">VIP</strong></span></td>
                    <td className="py-3 px-3 text-center font-mono">253</td>
                    <td className="py-3 px-3 text-center font-mono">11.3%</td>
                    <td className="py-3 px-3 text-center">75 160 EUR</td>
                    <td className="py-3 px-3 text-center font-semibold text-neon-green">1 487 EUR</td>
                    <td className="py-3 px-3 text-center">22.4</td>
                    <td className="py-3 px-3 text-center text-neon-green">24 jours</td>
                    <td className="py-3 px-3 text-center font-semibold text-neon-green">15.5%</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-3 px-3"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyber-400"></span><strong className="text-dark-100">Fideles</strong></span></td>
                    <td className="py-3 px-3 text-center font-mono">775</td>
                    <td className="py-3 px-3 text-center font-mono">34.6%</td>
                    <td className="py-3 px-3 text-center">65 355 EUR</td>
                    <td className="py-3 px-3 text-center font-semibold">982 EUR</td>
                    <td className="py-3 px-3 text-center">21.8</td>
                    <td className="py-3 px-3 text-center">57 jours</td>
                    <td className="py-3 px-3 text-center">8.3%</td>
                  </tr>
                  <tr className="border-b border-dark-800/50 bg-neon-orange/5">
                    <td className="py-3 px-3"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neon-orange"></span><strong className="text-dark-100">A risque</strong></span></td>
                    <td className="py-3 px-3 text-center font-mono">86</td>
                    <td className="py-3 px-3 text-center font-mono">3.8%</td>
                    <td className="py-3 px-3 text-center">58 461 EUR</td>
                    <td className="py-3 px-3 text-center font-semibold">724 EUR</td>
                    <td className="py-3 px-3 text-center">14.9</td>
                    <td className="py-3 px-3 text-center text-neon-orange">73 jours</td>
                    <td className="py-3 px-3 text-center">8.1%</td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-3 px-3"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neon-green"></span><strong className="text-dark-100">Nouveaux</strong></span></td>
                    <td className="py-3 px-3 text-center font-mono">581</td>
                    <td className="py-3 px-3 text-center font-mono">25.9%</td>
                    <td className="py-3 px-3 text-center">38 588 EUR</td>
                    <td className="py-3 px-3 text-center font-semibold">165 EUR</td>
                    <td className="py-3 px-3 text-center">8.2</td>
                    <td className="py-3 px-3 text-center">25 jours</td>
                    <td className="py-3 px-3 text-center text-dark-500">2.6%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-dark-600"></span><strong className="text-dark-100">Perdus</strong></span></td>
                    <td className="py-3 px-3 text-center font-mono">545</td>
                    <td className="py-3 px-3 text-center font-mono">24.3%</td>
                    <td className="py-3 px-3 text-center">36 425 EUR</td>
                    <td className="py-3 px-3 text-center font-semibold text-dark-500">114 EUR</td>
                    <td className="py-3 px-3 text-center">8.5</td>
                    <td className="py-3 px-3 text-center text-neon-pink">72 jours</td>
                    <td className="py-3 px-3 text-center text-dark-600">1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-neon-orange/10 border border-neon-orange/20 rounded-xl p-4">
              <p className="text-dark-300 text-sm">
                <strong className="text-neon-orange">Chiffre choc :</strong> Les VIP gagnent 2x plus que les Perdus, depensent 13x plus, ont la recence la plus faible (les plus recents), le taux d'acceptation de campagnes le plus eleve (15.5% vs 1.5%), et le taux de plainte le plus bas. Tout est correle.
              </p>
            </div>
          </CorrectionSection>

          {/* ===== SECTION 4: REVENUS ===== */}
          <CorrectionSection
            id="revenue"
            title="Repartition du chiffre d'affaires"
            subtitle="Qui genere l'argent ? La reponse va surprendre les etudiants"
            icon={DollarSign}
            color="neon-green"
            isOpen={openSections['revenue'] ?? false}
            onToggle={() => toggleSection('revenue')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <KPICard label="CA total (2 ans)" value="1 356 988 EUR" detail="Somme des depenses de 2 240 clients" />
              <KPICard label="VIP + Fideles" value="83.8% du CA" detail="45.9% des clients = 83.8% du CA" />
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Segment</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">CA total</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">% du CA</th>
                    <th className="text-center py-2 px-3 text-dark-500 font-mono text-xs">CA / client</th>
                    <th className="text-left py-2 px-3 text-dark-500 font-mono text-xs">Barre visuelle</th>
                  </tr>
                </thead>
                <tbody className="text-dark-300">
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">Fideles</td>
                    <td className="py-2 px-3 text-center font-mono">760 723 EUR</td>
                    <td className="py-2 px-3 text-center font-mono font-bold text-cyber-400">56.1%</td>
                    <td className="py-2 px-3 text-center">982 EUR</td>
                    <td className="py-2 px-3"><div className="bg-dark-700 rounded-full h-3 w-full"><div className="bg-cyber-400 rounded-full h-3" style={{width: '56%'}}></div></div></td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">VIP</td>
                    <td className="py-2 px-3 text-center font-mono">376 194 EUR</td>
                    <td className="py-2 px-3 text-center font-mono font-bold text-neon-yellow">27.7%</td>
                    <td className="py-2 px-3 text-center">1 487 EUR</td>
                    <td className="py-2 px-3"><div className="bg-dark-700 rounded-full h-3 w-full"><div className="bg-neon-yellow rounded-full h-3" style={{width: '28%'}}></div></div></td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">Nouveaux</td>
                    <td className="py-2 px-3 text-center font-mono">95 761 EUR</td>
                    <td className="py-2 px-3 text-center font-mono">7.1%</td>
                    <td className="py-2 px-3 text-center">165 EUR</td>
                    <td className="py-2 px-3"><div className="bg-dark-700 rounded-full h-3 w-full"><div className="bg-neon-green rounded-full h-3" style={{width: '7%'}}></div></div></td>
                  </tr>
                  <tr className="border-b border-dark-800/50">
                    <td className="py-2 px-3 font-semibold text-dark-200">A risque</td>
                    <td className="py-2 px-3 text-center font-mono">62 289 EUR</td>
                    <td className="py-2 px-3 text-center font-mono">4.6%</td>
                    <td className="py-2 px-3 text-center">724 EUR</td>
                    <td className="py-2 px-3"><div className="bg-dark-700 rounded-full h-3 w-full"><div className="bg-neon-orange rounded-full h-3" style={{width: '5%'}}></div></div></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-dark-200">Perdus</td>
                    <td className="py-2 px-3 text-center font-mono">62 021 EUR</td>
                    <td className="py-2 px-3 text-center font-mono text-dark-500">4.6%</td>
                    <td className="py-2 px-3 text-center text-dark-500">114 EUR</td>
                    <td className="py-2 px-3"><div className="bg-dark-700 rounded-full h-3 w-full"><div className="bg-dark-600 rounded-full h-3" style={{width: '5%'}}></div></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-neon-green/10 border border-neon-green/20 rounded-xl p-4">
              <p className="text-dark-300 text-sm">
                <strong className="text-neon-green">Surprise :</strong> Ce ne sont PAS les VIP qui generent le plus de CA en absolu -- ce sont les Fideles (56%). Les VIP depensent plus par tete (1 487 vs 982 EUR) mais sont 3x moins nombreux. Le segment Fideles est le moteur du business. C'est la qu'il faut concentrer le cross-sell.
              </p>
            </div>
          </CorrectionSection>

          {/* ===== SECTION 5: ACTIONS ===== */}
          <CorrectionSection
            id="actions"
            title="Etape 5 : Actions marketing par segment"
            subtitle="Ce que le caviste devrait faire concretement"
            icon={Mail}
            color="neon-pink"
            isOpen={openSections['actions'] ?? false}
            onToggle={() => toggleSection('actions')}
          >
            {[
              {
                name: 'VIP', color: 'neon-yellow', clients: '253', pctCA: '27.7%',
                action: 'Programme VIP exclusif : avant-premieres, degustations privees, livraison offerte, conseiller dedie',
                canal: 'Email personnalise + catalogue papier (ils achetent beaucoup par catalogue : moy. 5.5 achats catalogue)',
                message: '"En tant que membre VIP, decouvrez notre selection privee avant tout le monde"',
                kpi: 'Panier moyen, taux de retention a 6 mois',
                why: 'Ils ont le taux d\'acceptation de campagne le plus eleve (15.5%). Ils VEULENT qu\'on leur parle.'
              },
              {
                name: 'Fideles', color: 'cyber-400', clients: '775', pctCA: '56.1%',
                action: 'Cross-sell massif : vin vers viande, vin vers fromage. Programme fidelite a points. Upsell gamme superieure.',
                canal: 'Email + push web (multi-canal, ils achetent partout)',
                message: '"Vous aimez nos Bordeaux ? Decouvrez les fromages qui les accompagnent"',
                kpi: 'Nombre de categories achetees, evolution du panier moyen',
                why: '56% du CA. Un gain de 15% sur ce segment = +114 000 EUR. C\'est le plus gros levier.'
              },
              {
                name: 'A risque', color: 'neon-orange', clients: '86', pctCA: '4.6%',
                action: 'Campagne de reactivation urgente : offre limitee dans le temps, rappel de leurs achats passes',
                canal: 'Email + SMS (urgence)',
                message: '"Ca fait 73 jours qu\'on ne vous a pas vu. -15% sur votre prochain panier, valable 48h"',
                kpi: 'Taux de reactivation (achat dans les 15 jours)',
                why: 'Petit segment (86 clients) mais depense moyenne de 724 EUR. Chaque client recupere vaut cher.'
              },
              {
                name: 'Nouveaux', color: 'neon-green', clients: '581', pctCA: '7.1%',
                action: 'Sequence de bienvenue en 4 emails, decouverte des categories, offre premier achat significatif',
                canal: 'Email automatise (nurturing)',
                message: '"Bienvenue ! 3 vins a decouvrir selon vos gouts + 10% sur votre premiere commande de plus de 50 EUR"',
                kpi: 'Taux de conversion 1er vers 2e achat, passage de Nouveau a Fidele',
                why: 'Revenus faibles (38 588 EUR moy.) mais recents (25j). Potentiel de montee en gamme si bien accompagnes.'
              },
              {
                name: 'Perdus', color: 'dark-500', clients: '545', pctCA: '4.6%',
                action: 'Derniere tentative : grosse promo (-25%). Si pas de reaction, nettoyer la base.',
                canal: 'Un seul email (pas de harcelement)',
                message: '"Derniere chance : -25% sur tout le site, valable 72h. Apres ca, on ne vous embete plus."',
                kpi: 'Taux de reactivation. Si < 5%, supprimer du mailing pour ameliorer la delivrabilite.',
                why: 'Taux d\'acceptation campagnes a 1.5%. Ils ne reviendront probablement pas. Mieux vaut nettoyer.'
              },
            ].map(seg => (
              <div key={seg.name} className={`border border-${seg.color}/20 rounded-xl p-5 mb-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-lg font-bold text-${seg.color} font-display`}>{seg.name}</h4>
                  <div className="flex items-center gap-3 text-dark-500 text-xs font-mono">
                    <span>{seg.clients} clients</span>
                    <span>{seg.pctCA} du CA</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-dark-300"><strong className="text-dark-200">Action :</strong> {seg.action}</p>
                  <p className="text-dark-300"><strong className="text-dark-200">Canal :</strong> {seg.canal}</p>
                  <p className="text-dark-400 italic">"{seg.message}"</p>
                  <p className="text-dark-300"><strong className="text-dark-200">KPI :</strong> {seg.kpi}</p>
                  <p className={`text-dark-500 text-xs mt-2`}>Pourquoi : {seg.why}</p>
                </div>
              </div>
            ))}
          </CorrectionSection>

          {/* ===== SECTION 6: INSIGHTS CACHEES ===== */}
          <CorrectionSection
            id="hidden"
            title="Donnees cachees dans le dataset"
            subtitle="Ce que les meilleurs etudiants trouveront en creusant"
            icon={Sparkles}
            color="neon-yellow"
            isOpen={openSections['hidden'] ?? false}
            onToggle={() => toggleSection('hidden')}
          >
            {[
              {
                title: 'Les enfants tuent le panier vin',
                detail: '0 enfant = 1 106 EUR de depenses moyennes. 1 enfant = 395 EUR. 3 enfants = 275 EUR. L\'impact de Kidhome est plus fort que Teenhome. Le caviste pourrait creer un segment "Famille" avec des offres alimentaires (viande, fruits) plutot que vin.',
              },
              {
                title: 'Plus on visite le site, moins on achete',
                detail: 'Correlation NumWebVisitsMonth vs Montant = -0.50 (negative !). Les gros visiteurs du site sont des comparateurs de prix, pas des acheteurs. Les VIP visitent peu le site mais achetent beaucoup -- ils savent ce qu\'ils veulent et achetent en magasin ou par catalogue.',
              },
              {
                title: 'Le revenu plafonne a 80K',
                detail: 'Correlation Income vs M = 0.67 (forte). MAIS au-dessus de 80K EUR de revenu, les depenses plafonnent (~1 550 EUR). Un client a 50K et un client a 100K depensent presque autant. Le revenu est un bon predicteur en-dessous de 80K, mais mauvais au-dessus.',
              },
              {
                title: 'Les VIP repondent 7x plus aux campagnes',
                detail: 'Taux d\'acceptation moyen : VIP 15.5% vs Perdus 1.5%. La campagne 5 est la meilleure chez les VIP (26.1% d\'acceptation). La campagne 3 est la plus "democratique" (5-10% sur tous les segments). Le Response (derniere campagne) atteint 37.9% chez les VIP.',
              },
              {
                title: 'Le vin domine tout, partout',
                detail: 'Le vin represente 45-52% des depenses dans CHAQUE segment. Les VIP depensent en moyenne 635 EUR en vin seul. Seule exception relative : les Perdus et Nouveaux ont une part de Gold plus elevee (12-15%) -- probablement des achats cadeaux/impulse.',
              },
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 mb-4 p-4 bg-dark-900/30 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-yellow/10 flex items-center justify-center text-neon-yellow font-mono text-sm font-bold">{i + 1}</span>
                <div>
                  <h4 className="text-dark-200 font-semibold mb-1">{insight.title}</h4>
                  <p className="text-dark-400 text-sm leading-relaxed">{insight.detail}</p>
                </div>
              </div>
            ))}
          </CorrectionSection>

          {/* ===== SECTION 7: IMPACT FINANCIER ===== */}
          <CorrectionSection
            id="financial"
            title="Chiffrage financier"
            subtitle="L'impact business de la segmentation"
            icon={TrendingUp}
            color="neon-green"
            isOpen={openSections['financial'] ?? false}
            onToggle={() => toggleSection('financial')}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <KPICard label="CA total actuel" value="1 356 988 EUR" detail="Sur 2 ans, 2 240 clients" />
              <KPICard label="Gain estime" value="+132 216 EUR" detail="+9.7% de CA" />
              <KPICard label="CA projete" value="1 489 204 EUR" detail="Avec reactivation + cross-sell" />
            </div>

            <h4 className="text-dark-200 font-semibold mb-3">Detail des leviers</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-dark-900/30 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 rounded bg-neon-orange/20 flex items-center justify-center text-neon-orange text-xs font-mono">1</span>
                <div>
                  <p className="text-dark-200 text-sm font-semibold">Reactivation de 30% des "A risque"</p>
                  <p className="text-dark-400 text-sm">86 clients x 30% = 26 clients recuperes x 724 EUR = <strong className="text-neon-green">+18 107 EUR</strong></p>
                  <p className="text-dark-600 text-xs mt-1">Impact modeste car le segment est petit (3.8%). Mais le cout est quasi nul (1 email + 1 SMS).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-dark-900/30 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 rounded bg-cyber-400/20 flex items-center justify-center text-cyber-400 text-xs font-mono">2</span>
                <div>
                  <p className="text-dark-200 text-sm font-semibold">Cross-sell +15% sur les Fideles</p>
                  <p className="text-dark-400 text-sm">760 723 EUR x 15% = <strong className="text-neon-green">+114 108 EUR</strong></p>
                  <p className="text-dark-600 text-xs mt-1">C'est LE gros levier. Les Fideles sont 775 clients, ils achetent deja beaucoup, et le cross-sell vin vers viande/fromage est naturel.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-dark-900/30 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 rounded bg-dark-600/40 flex items-center justify-center text-dark-400 text-xs font-mono">3</span>
                <div>
                  <p className="text-dark-200 text-sm font-semibold">Nettoyage des Perdus non reactifs</p>
                  <p className="text-dark-400 text-sm">Suppression de ~400-500 emails inactifs de la base</p>
                  <p className="text-dark-600 text-xs mt-1">Pas de gain direct en CA, mais amelioration de la delivrabilite email : le taux d'ouverture passe de ~18% a ~25-28%. Les emails des VIP et Fideles arrivent mieux en inbox.</p>
                </div>
              </div>
            </div>

            <div className="bg-neon-green/10 border border-neon-green/20 rounded-xl p-4">
              <p className="text-dark-300 text-sm">
                <strong className="text-neon-green">Resume pour le directeur :</strong> "En segmentant votre base et en adaptant vos messages, vous pouvez generer +132 000 EUR de CA supplementaire (+9.7%) sans augmenter votre budget marketing. La priorite n1 est le cross-sell sur vos 775 Fideles. La priorite n2 est de nettoyer les 545 Perdus de votre base email."
              </p>
            </div>
          </CorrectionSection>

          {/* ===== SECTION 8: GRILLE EVALUATION ===== */}
          <CorrectionSection
            id="grading"
            title="Grille d'evaluation"
            subtitle="Criteres de notation pour l'enseignant"
            icon={Target}
            color="dark-400"
            isOpen={openSections['grading'] ?? false}
            onToggle={() => toggleSection('grading')}
          >
            <div className="space-y-3">
              {[
                { criteria: 'Le RFM est correctement calcule', points: '/4', detail: 'R = Recency (direct), F = somme des 4 canaux, M = somme des 6 categories. Erreur frequente : oublier NumDealsPurchases ou MntGoldProds.' },
                { criteria: 'Les segments sont fondes sur les donnees', points: '/3', detail: 'L\'etudiant utilise des seuils quantitatifs (quartiles, mediane) et pas des chiffres arbitraires.' },
                { criteria: 'Le scatter plot est lisible et correct', points: '/3', detail: 'Axes F et M, couleurs par segment, legende, les clusters sont visuellement identifiables.' },
                { criteria: 'Les actions sont differenciees par segment', points: '/4', detail: 'Si l\'etudiant propose la meme action partout, il n\'a pas compris le RFM. Chaque segment = message + canal + offre differents.' },
                { criteria: 'Le chiffrage financier est present', points: '/3', detail: 'L\'etudiant a calcule le CA par segment et estime l\'impact d\'au moins une action (reactivation OU cross-sell).' },
                { criteria: 'Bonus : exploration des colonnes cachees', points: '/3', detail: 'AcceptedCmp, Complain, Kidhome, NumWebVisitsMonth, Income. Chaque colonne exploitee = +1 point bonus.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-3 bg-dark-900/30 rounded-xl">
                  <span className="flex-shrink-0 px-2 py-1 bg-dark-700 rounded text-dark-300 text-xs font-mono font-bold">{item.points}</span>
                  <div>
                    <p className="text-dark-200 text-sm font-semibold">{item.criteria}</p>
                    <p className="text-dark-500 text-xs mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-dark-800/50 border border-dark-700/50 rounded-xl text-center">
              <p className="text-dark-400 text-sm font-mono">Total : <strong className="text-dark-200">/17 points</strong> + 3 points bonus</p>
            </div>
          </CorrectionSection>
        </div>
      </div>
    </div>
  );
};

// ===== Reusable Components =====

const KPICard: React.FC<{ label: string; value: string; detail: string }> = ({ label, value, detail }) => (
  <div className="bg-dark-900/50 border border-dark-700/30 rounded-xl p-4 text-center">
    <p className="text-dark-500 text-xs font-mono mb-1">{label}</p>
    <p className="text-dark-100 text-2xl font-bold font-display">{value}</p>
    <p className="text-dark-600 text-xs mt-1">{detail}</p>
  </div>
);

interface CorrectionSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const CorrectionSection: React.FC<CorrectionSectionProps> = ({
  title, subtitle, icon: Icon, color, isOpen, onToggle, children,
}) => (
  <div className={`border rounded-2xl transition-all ${isOpen ? `border-${color}/30 bg-dark-800/30` : 'border-dark-700/50 bg-dark-800/20'}`}>
    <button onClick={onToggle} className="w-full flex items-center gap-4 px-6 py-5 text-left">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${color}/10`}>
        <Icon className={`w-5 h-5 text-${color}`} />
      </div>
      <div className="flex-1">
        <h3 className="text-dark-100 font-semibold font-display">{title}</h3>
        <p className="text-dark-500 text-sm">{subtitle}</p>
      </div>
      {isOpen ? <ChevronDown className="w-5 h-5 text-dark-500" /> : <ChevronRight className="w-5 h-5 text-dark-500" />}
    </button>
    {isOpen && <div className="px-6 pb-6">{children}</div>}
  </div>
);

export default RFMCorrection;
