import React from 'react';
import '../styles/halloween.css';

/**
 * Espace Étudiant - Guide des fichiers CSV disponibles
 */
const StudentSpace: React.FC = () => {
  // Données des fichiers CSV avec explications claires
  const csvFiles = [
    {
      name: "analytics-aquisition.csv",
      icon: "📊",
      category: "Google Analytics",
      description: "Données d'acquisition de trafic hebdomadaire",
      details: "Utilisateurs actifs par semaine sur 1 an - Idéal pour analyser la saisonnalité du business",
      size: "2,9k lignes",
      usage: "Analyser les tendances de trafic et identifier les pics/creux saisonniers"
    },
    {
      name: "deals-pipedrive.csv", 
      icon: "💼",
      category: "CRM Pipedrive",
      description: "Base complète des ventes et prospects",
      details: "7,479 deals sur 7+ ans avec cycle complet lead → vente - ROI mesurable",
      size: "7,5k lignes",
      usage: "Calculer les taux de conversion, analyser le cycle de vente, mesurer le ROI réel"
    },
    {
      name: "rank-tracker.csv",
      icon: "🔍", 
      category: "SEO RankTracker",
      description: "Positions Google de tous les mots-clés",
      details: "484 mots-clés suivis avec positions exactes et tendances d'évolution",
      size: "484 lignes",
      usage: "Optimiser le SEO, prioriser les mots-clés, analyser la concurrence"
    },
    {
      name: "meta-ads-2025.csv",
      icon: "📱",
      category: "Meta Ads (Facebook)",
      description: "Performance des campagnes Facebook/Instagram", 
      details: "Campagnes lead generation avec impressions, clics, coûts et conversions",
      size: "12 lignes",
      usage: "Analyser le ROI Meta Ads, optimiser les audiences et créatifs"
    },
    {
      name: "termes-recherche-gads.csv",
      icon: "🎯",
      category: "Google Ads",
      description: "Tous les termes de recherche Google Ads",
      details: "63k+ requêtes réelles des utilisateurs avec performances détaillées",
      size: "63k lignes", 
      usage: "Découvrir de nouveaux mots-clés, optimiser les campagnes, analyser l'intent"
    },
    {
      name: "Campagnes(...).csv",
      icon: "📈",
      category: "Google Ads",
      description: "Performance comparative des campagnes",
      details: "Comparaison 2024 vs 2025 par campagne avec évolutions",
      size: "Variable",
      usage: "Mesurer la progression année sur année, identifier les campagnes performantes"
    },
    {
      name: "Mots_clés_pour_le_Réseau_de_Recherche(...).csv",
      icon: "🔑",
      category: "Google Ads",
      description: "Performance des mots-clés Google Ads",
      details: "Analyse détaillée des mots-clés avec impressions, clics, CPC",
      size: "Variable",
      usage: "Optimiser les enchères, identifier les mots-clés rentables"
    },
    {
      name: "Pages.csv",
      icon: "📄",
      category: "Google Analytics", 
      description: "Performance des pages du site web",
      details: "Trafic et engagement par page - Identifier les contenus performants",
      size: "Variable",
      usage: "Optimiser le contenu, améliorer l'UX, identifier les pages à fort potentiel"
    },
    {
      name: "Requêtes.csv",
      icon: "🔍",
      category: "Search Console",
      description: "Requêtes de recherche organique Google",
      details: "Mots-clés tapés par les utilisateurs avec positions et CTR",
      size: "1k+ lignes",
      usage: "Optimiser le SEO naturel, créer du contenu ciblé"
    },
    {
      name: "Série_temporelle(...).csv",
      icon: "📅",
      category: "Analytics Temporel",
      description: "Évolution des métriques dans le temps",
      details: "Données chronologiques pour analyser les tendances et saisonnalité",
      size: "Variable", 
      usage: "Prévoir les tendances, planifier les budgets, analyser l'impact des actions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-purple-900 to-black pt-24 pb-12 relative overflow-hidden">
      {/* Éléments décoratifs Halloween avec effets avancés */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl halloween-float halloween-glow">🎃</div>
        <div className="absolute top-32 right-20 text-4xl halloween-flicker">👻</div>
        <div className="absolute top-60 left-1/4 text-5xl animate-spin halloween-glow" style={{animationDuration: '3s'}}>🕷️</div>
        <div className="absolute bottom-40 right-10 text-4xl halloween-float" style={{animationDelay: '1s'}}>🦇</div>
        <div className="absolute top-40 right-1/3 text-3xl halloween-shake" style={{animationDelay: '2s'}}>💀</div>
        <div className="absolute bottom-60 left-20 text-4xl halloween-float" style={{animationDelay: '0.5s'}}>🕸️</div>
        <div className="absolute top-80 left-1/2 text-3xl halloween-flicker" style={{animationDelay: '1.5s'}}>🔮</div>
        <div className="absolute bottom-80 right-1/4 text-4xl halloween-glow" style={{animationDelay: '2.5s'}}>⚡</div>
        
        {/* Particules flottantes */}
        <div className="particles">
          <div className="particle" style={{top: '10%'}}>✨</div>
          <div className="particle" style={{top: '20%'}}>🌟</div>
          <div className="particle" style={{top: '30%'}}>💫</div>
          <div className="particle" style={{top: '40%'}}>⭐</div>
          <div className="particle" style={{top: '50%'}}>🌠</div>
          <div className="particle" style={{top: '60%'}}>✨</div>
          <div className="particle" style={{top: '70%'}}>🌟</div>
          <div className="particle" style={{top: '80%'}}>💫</div>
          <div className="particle" style={{top: '90%'}}>⭐</div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête Halloween */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-6xl animate-pulse">🎃</span>
            <span className="text-4xl mx-2">👻</span>
            <span className="text-5xl animate-bounce">🕷️</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4 font-serif halloween-title halloween-glow">
            🎃 Espace Étudiant Halloween 🎃
          </h1>
          <h2 className="text-3xl font-bold text-orange-300 mb-4 font-serif">
            Analyse Data Marketing - Déco Charpente
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto font-medium">
            🕷️ Plongez dans les données marketing terrifiantes de Déco Charpente... 
            si vous l'osez ! 👻 Créez des tableaux de bord ensorcelés avec l'IA 🔮
          </p>
        </div>

        {/* Mission Halloween Simplifiée */}
        <div className="mystical-card fog-effect bg-gradient-to-r from-orange-900/80 to-red-900/80 border-2 border-orange-500 rounded-xl p-6 mb-8 shadow-2xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-orange-300 mb-3 font-serif">
            🎃 Votre Grimoire de Données Maudites 🎃
          </h2>
          <p className="text-orange-200 mb-4 leading-relaxed font-medium">
            🕷️ Découvrez les <strong className="text-orange-300">fichiers CSV ensorcelés</strong> de <strong className="text-red-400">Déco Charpente</strong> ! 
            👻 Chaque fichier contient des <strong className="text-purple-300">secrets marketing</strong> différents... 
            🔮 Apprenez à les comprendre avant de les analyser avec l'IA ! ⚡
          </p>
        </div>

        {/* Guide des Fichiers CSV */}
        <div className="mystical-card fog-effect bg-gradient-to-br from-purple-900/80 to-black/80 border-2 border-purple-400 rounded-xl p-6 mb-8 shadow-2xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-purple-300 mb-6 font-serif">📜 Guide des Fichiers CSV Ensorcelés 📜</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {csvFiles.map((file, index) => (
              <div key={index} className="mystical-card bg-gradient-to-br from-black/40 to-gray-900/40 border border-orange-400/50 rounded-lg p-5 hover:border-orange-400 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl halloween-glow">{file.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-orange-300 font-serif text-lg">{file.name}</h3>
                      <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full border border-purple-500/50">
                        {file.size}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-orange-900/50 text-orange-200 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/50">
                        {file.category}
                      </span>
                    </div>
                    
                    <p className="text-orange-200 font-medium mb-2 text-sm">
                      {file.description}
                    </p>
                    
                    <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                      {file.details}
                    </p>
                    
                    <div className="bg-black/50 border border-green-500/50 rounded p-3">
                      <p className="text-green-300 text-xs font-medium">
                        <span className="text-green-400">🔮 Usage magique :</span> {file.usage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratoire d'Analyse Maudit */}
        <div className="bg-gradient-to-br from-black/80 to-purple-900/80 border-2 border-dashed border-orange-400 rounded-xl p-8 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Effets visuels Halloween */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 text-2xl animate-pulse">🕸️</div>
            <div className="absolute top-4 right-4 text-2xl animate-bounce">🦇</div>
            <div className="absolute bottom-4 left-4 text-2xl animate-spin" style={{animationDuration: '4s'}}>🕷️</div>
            <div className="absolute bottom-4 right-4 text-2xl animate-pulse">💀</div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-orange-300 mb-4 font-serif">
              🧪 Laboratoire d'Analyse Ensorcelé 🧪
            </h2>
            <p className="text-orange-200 mb-6 leading-relaxed font-medium">
              🔮 Maintenant que vous connaissez les <strong className="text-red-400">fichiers CSV maudits</strong>, 
              👻 vous pouvez invoquer l'IA pour créer des <strong className="text-orange-300">analyses magiques</strong> ! 
              ⚡ Choisissez un fichier et posez vos questions <strong className="text-purple-300">mystiques</strong> !
            </p>
            
            <div className="bg-black/60 border-2 border-red-500 rounded-lg p-6 text-left mb-6 shadow-inner">
              <h3 className="font-bold text-red-400 mb-3 font-serif">🔮 Exemples d'Incantations par Fichier :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-200">
                <div>
                  <p className="font-bold mb-2 text-purple-400">📊 Analytics & SEO :</p>
                  <ul className="space-y-1 text-xs">
                    <li>• "🎃 Analyse le trafic dans analytics-acquisition.csv"</li>
                    <li>• "👻 Quels mots-clés SEO optimiser dans rank-tracker.csv ?"</li>
                    <li>• "🕷️ Montre les tendances saisonnières du trafic"</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2 text-green-400">💼 CRM & Publicité :</p>
                  <ul className="space-y-1 text-xs">
                    <li>• "🦇 Calcule le ROI dans deals-pipedrive.csv"</li>
                    <li>• "🕸️ Compare Google Ads vs Meta Ads"</li>
                    <li>• "⚡ Trouve les mots-clés les plus rentables"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/80 to-red-900/80 border-2 border-orange-400 rounded-lg p-4 mb-4">
              <p className="text-sm text-orange-200 font-medium">
                <strong className="text-orange-300">🔮 Comment invoquer l'IA :</strong> 
                <br />1. Choisissez un fichier CSV ci-dessus
                <br />2. Tapez votre question dans le chat Cursor
                <br />3. Mentionnez le nom du fichier dans votre question
                <br />4. L'IA analysera et créera des graphiques ! ⚡
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border-2 border-purple-400 rounded-lg p-3">
              <p className="text-xs text-purple-200 font-medium">
                <strong className="text-purple-300">📜 Localisation :</strong> Tous les fichiers sont dans le dossier 
                <code className="bg-black/50 px-1 rounded text-green-300">/data</code> 🕷️
              </p>
            </div>
            
            {/* Bouton d'action Halloween */}
            <div className="mt-6">
              <button className="halloween-button halloween-glow">
                🎃 Commencer l'Analyse ! 🎃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSpace;
