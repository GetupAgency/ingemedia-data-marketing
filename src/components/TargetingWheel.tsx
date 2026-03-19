import React, { useState, useCallback } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

interface Criterion {
  name: string;
  detail: string;
  example: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
  platforms: string;
  criteria: Criterion[];
}

const categories: Category[] = [
  {
    id: 'demographic',
    name: 'Démographique',
    color: '#00e5ff',
    description: 'Les caractéristiques sociodémographiques de votre audience : qui sont-ils ?',
    platforms: 'Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads',
    criteria: [
      { name: 'Âge', detail: 'Tranches d\'âge (18-24, 25-34, 35-44, 45-54, 55-64, 65+)', example: 'Meta permet un ciblage à l\'année près' },
      { name: 'Sexe', detail: 'Homme, Femme, Tous', example: 'Indispensable pour les produits genrés (cosmétique, rasage...)' },
      { name: 'Revenus', detail: 'Niveau de revenus du foyer', example: 'Google Ads utilise les données fiscales aux US, estimations en France' },
      { name: 'CSP', detail: 'Catégorie socio-professionnelle', example: 'LinkedIn excelle sur ce critère grâce aux profils déclaratifs' },
      { name: 'Parent', detail: 'Parent ou non, âge des enfants', example: 'Meta détecte les parents via les interactions et contenus partagés' },
      { name: 'Éducation', detail: 'Niveau d\'études (lycée, licence, master, doctorat)', example: 'Utile pour les formations, écoles et universités' },
    ]
  },
  {
    id: 'geographic',
    name: 'Géographique',
    color: '#39ff14',
    description: 'La localisation physique et le contexte géographique de l\'utilisateur.',
    platforms: 'Toutes les plateformes (critère universel)',
    criteria: [
      { name: 'Pays', detail: 'Ciblage par pays ou groupe de pays', example: 'Campagnes internationales vs locales' },
      { name: 'Ville', detail: 'Ville, agglomération, département, région', example: 'Idéal pour les commerces et événements locaux' },
      { name: 'Code postal', detail: 'Zone de chalandise très précise', example: 'Google Ads accepte les listes de codes postaux' },
      { name: 'Rayon', detail: 'Périmètre autour d\'un point GPS', example: 'Meta permet un rayon de 1 à 80 km autour d\'une adresse' },
      { name: 'Langue', detail: 'Langue parlée par l\'utilisateur', example: 'Critère clé en Belgique, Suisse, Canada...' },
    ]
  },
  {
    id: 'psychographic',
    name: 'Psychographique',
    color: '#b026ff',
    description: 'Les motivations profondes, valeurs et centres d\'intérêt de votre audience.',
    platforms: 'Meta Ads, Pinterest Ads, TikTok Ads',
    criteria: [
      { name: 'Centres d\'intérêts', detail: 'Sport, mode, tech, cuisine, voyage, gaming...', example: 'Meta propose des milliers de catégories d\'intérêts' },
      { name: 'Valeurs', detail: 'Écologie, famille, carrière, bien-être...', example: 'Permet d\'aligner le message publicitaire aux convictions' },
      { name: 'Style de vie', detail: 'Urbain, sportif, connecté, bohème, luxe...', example: 'Segmentation lifestyle très utilisée en mode et beauté' },
      { name: 'Personnalité', detail: 'Extraverti, prudent, innovateur, suiveur...', example: 'Modèles psychométriques (Big Five) utilisés par certains DSP' },
      { name: 'Opinions', detail: 'Engagements, causes soutenues, affinités', example: 'Attention aux sensibilités RGPD sur ces données' },
    ]
  },
  {
    id: 'behavioral',
    name: 'Comportemental',
    color: '#ff2d95',
    description: 'Les actions et habitudes de consommation réellement observées.',
    platforms: 'Google Ads, Meta Ads, Amazon Ads, Criteo',
    criteria: [
      { name: 'Habitudes d\'achat', detail: 'Fréquence, montant, catégories achetées', example: 'Amazon Ads excelle grâce à ses données transactionnelles' },
      { name: 'Navigation web', detail: 'Sites visités, pages consultées, temps passé', example: 'Base du retargeting via cookies et pixels de suivi' },
      { name: 'Fidélité marque', detail: 'Client existant, prospect, inactif, churner', example: 'CRM + Custom Audiences pour le ciblage 1st party' },
      { name: 'Étudiant', detail: 'Statut étudiant vérifié ou déclaré', example: 'Spotify, Apple, offres étudiantes sur vérification' },
      { name: 'Panier moyen', detail: 'Valeur moyenne des transactions', example: 'Segmentation RFM (Récence, Fréquence, Montant)' },
    ]
  },
  {
    id: 'technographic',
    name: 'Technographique',
    color: '#ff6b35',
    description: 'L\'environnement technologique et les devices de l\'utilisateur.',
    platforms: 'Google Ads, Meta Ads, DSP programmatiques',
    criteria: [
      { name: 'Terminal', detail: 'Mobile, Desktop, Tablette, Smart TV, Console', example: 'Le mobile représente ~70% du trafic publicitaire' },
      { name: 'OS', detail: 'iOS, Android, Windows, macOS, Linux', example: 'Les utilisateurs iOS dépensent 2x plus en moyenne' },
      { name: 'Navigateur', detail: 'Chrome, Safari, Firefox, Edge', example: 'Safari = souvent Apple = indicateur de pouvoir d\'achat' },
      { name: 'Apps installées', detail: 'Applications présentes sur l\'appareil', example: 'Meta peut cibler selon les apps installées (Android)' },
      { name: 'Réseaux sociaux', detail: 'Plateformes utilisées activement', example: 'Cross-platform targeting entre Meta, TikTok, Snap...' },
    ]
  },
  {
    id: 'contextual',
    name: 'Contextuel',
    color: '#fff01f',
    description: 'Le moment, l\'environnement et le contexte de consultation.',
    platforms: 'Google Ads (Display), DSP, Waze Ads',
    criteria: [
      { name: 'Heure du jour', detail: 'Day-parting : matin, midi, soir, nuit', example: 'Restaurant = cibler à midi, e-commerce = 20h-22h' },
      { name: 'Météo', detail: 'Soleil, pluie, froid, canicule, vent', example: 'Waze & WeatherAds ajustent les créas selon la météo' },
      { name: 'Saison', detail: 'Printemps, été, rentrée, fêtes...', example: 'Saisonnalité naturelle des campagnes publicitaires' },
      { name: 'Événements', detail: 'Black Friday, Noël, soldes, rentrée, JO', example: 'Pics de performance prévisibles à exploiter' },
      { name: 'Contenu consulté', detail: 'Thématique de la page/vidéo en cours', example: 'Ciblage contextuel = l\'avenir post-cookies tiers' },
    ]
  },
];

// ─── SVG Math Helpers ────────────────────────────────────────────────────────

const CX = 400;
const CY = 400;
const R_ARC = 95;
const R_CATEGORY_LABEL = 155;
const R_CRITERIA_NODE = 265;
const R_CRITERIA_LABEL = 300;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const polar = (angleDeg: number, radius: number) => ({
  x: CX + radius * Math.cos(toRad(angleDeg)),
  y: CY + radius * Math.sin(toRad(angleDeg)),
});

const categoryStartAngle = (i: number) => -90 + i * 60;
const categoryCenterAngle = (i: number) => -90 + i * 60 + 30;

const criterionAngle = (catIndex: number, critIndex: number, total: number) => {
  const start = categoryStartAngle(catIndex) + 5;
  const span = 50;
  if (total <= 1) return start + span / 2;
  return start + critIndex * (span / (total - 1));
};

const describeArc = (startAngle: number, endAngle: number, r: number) => {
  const s = polar(startAngle, r);
  const e = polar(endAngle, r);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
};

const getTextAnchor = (angleDeg: number): string => {
  const n = ((angleDeg % 360) + 360) % 360;
  if (n > 80 && n < 100) return 'middle';
  if (n > 260 && n < 280) return 'middle';
  if (n > 90 && n < 270) return 'end';
  return 'start';
};

const getTextOffset = (angleDeg: number) => {
  const n = ((angleDeg % 360) + 360) % 360;
  if (n > 80 && n < 100) return { dx: 0, dy: 16 };
  if (n > 260 && n < 280) return { dx: 0, dy: -10 };
  if (n > 90 && n < 270) return { dx: -14, dy: 5 };
  return { dx: 14, dy: 5 };
};

// ─── Component ───────────────────────────────────────────────────────────────

const TargetingWheel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [hoveredCriterion, setHoveredCriterion] = useState<{ cat: number; crit: number } | null>(null);

  const handleCategoryClick = useCallback((index: number) => {
    setActiveCategory(prev => (prev === index ? null : index));
    setHoveredCriterion(null);
  }, []);

  const activeCat = activeCategory !== null ? categories[activeCategory] : null;
  const hoveredCrit = hoveredCriterion
    ? categories[hoveredCriterion.cat].criteria[hoveredCriterion.crit]
    : null;
  const hoveredCritColor = hoveredCriterion ? categories[hoveredCriterion.cat].color : null;

  return (
    <div className="w-full">
      {/* SVG Visualization */}
      <div className="relative w-full max-w-3xl mx-auto">
        <svg
          viewBox="0 0 800 800"
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 0 40px rgba(0, 229, 255, 0.08))' }}
        >
          <defs>
            <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-center" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="bgGlow">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="1" />
              <stop offset="70%" stopColor="#020617" stopOpacity="1" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </radialGradient>

            {categories.map((cat) => (
              <linearGradient key={cat.id} id={`grad-${cat.id}`}
                x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={cat.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={cat.color} stopOpacity="0.5" />
              </linearGradient>
            ))}
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="800" height="800" fill="url(#bgGlow)" rx="24" />

          {/* Subtle grid */}
          {Array.from({ length: 27 }, (_, i) => (
            <React.Fragment key={`grid-${i}`}>
              <line x1={i * 30} y1="0" x2={i * 30} y2="800"
                stroke="#00e5ff" strokeOpacity="0.03" strokeWidth="0.5" />
              <line x1="0" y1={i * 30} x2="800" y2={i * 30}
                stroke="#00e5ff" strokeOpacity="0.03" strokeWidth="0.5" />
            </React.Fragment>
          ))}

          {/* Guide rings */}
          <circle cx={CX} cy={CY} r={R_CRITERIA_NODE}
            fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
          <circle cx={CX} cy={CY} r={R_ARC}
            fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />

          {/* Center glow */}
          <circle cx={CX} cy={CY} r="80" fill="url(#centerGlow)">
            <animate attributeName="r" values="75;85;75" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Connection Lines */}
          {categories.map((cat, catIdx) => (
            <g key={`lines-${cat.id}`}>
              {cat.criteria.map((_, critIdx) => {
                const angle = criterionAngle(catIdx, critIdx, cat.criteria.length);
                const outer = polar(angle, R_CRITERIA_NODE);
                const inner = polar(angle, 55);
                const isActive = activeCategory === null || activeCategory === catIdx;
                const isHovered = hoveredCriterion?.cat === catIdx && hoveredCriterion?.crit === critIdx;

                return (
                  <line key={`line-${catIdx}-${critIdx}`}
                    x1={inner.x} y1={inner.y}
                    x2={outer.x} y2={outer.y}
                    stroke={cat.color}
                    strokeWidth={isHovered ? 1.5 : 0.8}
                    strokeOpacity={isActive ? (isHovered ? 0.5 : 0.15) : 0.04}
                    strokeDasharray={isHovered ? 'none' : '3 6'}
                    style={{ transition: 'all 0.4s ease' }}
                  />
                );
              })}
            </g>
          ))}

          {/* Category Arcs */}
          {categories.map((cat, i) => {
            const start = categoryStartAngle(i) + 2;
            const end = categoryStartAngle(i) + 58;
            const isActive = activeCategory === i;
            const isDimmed = activeCategory !== null && activeCategory !== i;

            return (
              <g key={`arc-${cat.id}`}
                onClick={() => handleCategoryClick(i)}
                style={{ cursor: 'pointer' }}
              >
                {isActive && (
                  <path
                    d={describeArc(start, end, R_ARC)}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth="18"
                    strokeLinecap="round"
                    opacity="0.25"
                    filter="url(#glow-strong)"
                  />
                )}
                <path
                  d={describeArc(start, end, R_ARC)}
                  fill="none"
                  stroke={`url(#grad-${cat.id})`}
                  strokeWidth={isActive ? 14 : 10}
                  strokeLinecap="round"
                  opacity={isDimmed ? 0.2 : isActive ? 1 : 0.7}
                  filter={isActive ? 'url(#glow-soft)' : undefined}
                  style={{ transition: 'all 0.4s ease' }}
                />
              </g>
            );
          })}

          {/* Category Labels */}
          {categories.map((cat, i) => {
            const center = categoryCenterAngle(i);
            const pos = polar(center, R_CATEGORY_LABEL);
            const isDimmed = activeCategory !== null && activeCategory !== i;
            const isActive = activeCategory === i;

            return (
              <g key={`catlabel-${cat.id}`}
                onClick={() => handleCategoryClick(i)}
                style={{ cursor: 'pointer' }}
              >
                {/* Colored indicator dot */}
                <circle
                  cx={pos.x}
                  cy={pos.y - 10}
                  r={isActive ? 5 : 4}
                  fill={cat.color}
                  opacity={isDimmed ? 0.2 : isActive ? 1 : 0.7}
                  filter={isActive ? 'url(#glow-soft)' : undefined}
                  style={{ transition: 'all 0.4s ease' }}
                />
                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  fontSize={isActive ? 12 : 10.5}
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight={isActive ? 700 : 600}
                  fill={isDimmed ? '#475569' : cat.color}
                  opacity={isDimmed ? 0.4 : 1}
                  filter={isActive ? 'url(#glow-soft)' : undefined}
                  style={{ transition: 'all 0.4s ease' }}
                >
                  {cat.name}
                </text>
              </g>
            );
          })}

          {/* Criteria Nodes + Labels */}
          {categories.map((cat, catIdx) => (
            <g key={`criteria-${cat.id}`}>
              {cat.criteria.map((criterion, critIdx) => {
                const angle = criterionAngle(catIdx, critIdx, cat.criteria.length);
                const nodePos = polar(angle, R_CRITERIA_NODE);
                const labelPos = polar(angle, R_CRITERIA_LABEL);
                const anchor = getTextAnchor(angle);
                const offset = getTextOffset(angle);

                const isActive = activeCategory === null || activeCategory === catIdx;
                const isHovered = hoveredCriterion?.cat === catIdx && hoveredCriterion?.crit === critIdx;
                const isCatActive = activeCategory === catIdx;

                return (
                  <g key={`crit-${catIdx}-${critIdx}`}
                    onMouseEnter={() => setHoveredCriterion({ cat: catIdx, crit: critIdx })}
                    onMouseLeave={() => setHoveredCriterion(null)}
                    onClick={() => handleCategoryClick(catIdx)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Node glow on hover */}
                    {isHovered && (
                      <circle
                        cx={nodePos.x} cy={nodePos.y} r="14"
                        fill={cat.color} opacity="0.2"
                        filter="url(#glow-strong)"
                      />
                    )}

                    {/* Criterion node */}
                    <circle
                      cx={nodePos.x}
                      cy={nodePos.y}
                      r={isHovered ? 7 : isCatActive ? 5.5 : 4}
                      fill={cat.color}
                      opacity={isActive ? (isHovered ? 1 : isCatActive ? 0.9 : 0.55) : 0.12}
                      filter={isHovered || isCatActive ? 'url(#glow-soft)' : undefined}
                      style={{ transition: 'all 0.3s ease' }}
                    />

                    {/* Criterion label */}
                    <text
                      x={labelPos.x + offset.dx}
                      y={labelPos.y + offset.dy}
                      textAnchor={anchor}
                      fontSize={isHovered ? 12 : isCatActive ? 11 : 10}
                      fontFamily="'Inter', sans-serif"
                      fontWeight={isHovered ? 700 : isCatActive ? 600 : 400}
                      fill={isHovered ? cat.color : isCatActive ? cat.color : '#94a3b8'}
                      opacity={isActive ? (isHovered ? 1 : isCatActive ? 0.9 : 0.6) : 0.1}
                      filter={isHovered ? 'url(#glow-soft)' : undefined}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      {criterion.name}
                    </text>
                  </g>
                );
              })}
            </g>
          ))}

          {/* Center: Person Icon */}
          <g filter="url(#glow-center)">
            <circle cx={CX} cy={CY} r="42" fill="#0f172a" stroke="#00e5ff" strokeWidth="2" strokeOpacity="0.5">
              <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          <circle cx={CX} cy={CY} r="40" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

          {/* Person silhouette */}
          <circle cx={CX} cy={CY - 8} r="11" fill="#00e5ff" opacity="0.85" />
          <ellipse cx={CX} cy={CY + 16} rx="18" ry="12" fill="#00e5ff" opacity="0.85" />
          <circle cx={CX} cy={CY} r="39" fill="none" stroke="#0f172a" strokeWidth="1" />

          {/* Center label */}
          <text
            x={CX} y={CY + 55}
            textAnchor="middle"
            fontSize="11"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="700"
            fill="#00e5ff"
            opacity="0.8"
          >
            AUDIENCE
          </text>

          {/* Instruction text */}
          {activeCategory === null && !hoveredCriterion && (
            <text
              x={CX} y={770}
              textAnchor="middle"
              fontSize="11"
              fontFamily="'JetBrains Mono', monospace"
              fill="#64748b"
              opacity="0.7"
            >
              Cliquez sur une catégorie pour explorer les critères
            </text>
          )}
        </svg>

        {/* HTML Tooltip overlaying the SVG */}
        {hoveredCriterion && hoveredCrit && hoveredCritColor && (() => {
          const angle = criterionAngle(
            hoveredCriterion.cat,
            hoveredCriterion.crit,
            categories[hoveredCriterion.cat].criteria.length
          );
          const nodePos = polar(angle, R_CRITERIA_NODE);
          const pctX = (nodePos.x / 800) * 100;
          const pctY = (nodePos.y / 800) * 100;

          // Position tooltip: above or below based on vertical position
          const isTopHalf = pctY < 50;
          // Horizontal alignment
          const isLeftSide = pctX < 35;
          const isRightSide = pctX > 65;

          return (
            <div
              className="absolute pointer-events-none z-10"
              style={{
                left: `${pctX}%`,
                top: `${pctY}%`,
                transform: `translate(${isLeftSide ? '-10%' : isRightSide ? '-90%' : '-50%'}, ${isTopHalf ? '16px' : 'calc(-100% - 16px)'})`,
              }}
            >
              <div
                className="rounded-lg border px-4 py-3 backdrop-blur-sm min-w-[220px] max-w-[280px]"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  borderColor: `${hoveredCritColor}40`,
                  boxShadow: `0 4px 24px rgba(0,0,0,0.5), 0 0 12px ${hoveredCritColor}15`,
                }}
              >
                <p className="font-semibold text-xs mb-1.5" style={{ color: hoveredCritColor }}>
                  {hoveredCrit.name}
                </p>
                <p className="text-dark-300 text-[11px] leading-relaxed mb-1.5">
                  {hoveredCrit.detail}
                </p>
                <p className="text-[10px] font-mono leading-relaxed" style={{ color: `${hoveredCritColor}90` }}>
                  {hoveredCrit.example}
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Detail Panel */}
      {activeCat && (
        <div
          className="max-w-3xl mx-auto mt-4 animate-slide-up"
          style={{ animationDuration: '0.4s' }}
        >
          <div
            className="rounded-2xl border p-6 md:p-8 backdrop-blur"
            style={{
              backgroundColor: `${activeCat.color}08`,
              borderColor: `${activeCat.color}30`,
            }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${activeCat.color}30, ${activeCat.color}10)`,
                  boxShadow: `0 0 20px ${activeCat.color}20`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: activeCat.color, boxShadow: `0 0 12px ${activeCat.color}80` }}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display" style={{ color: activeCat.color }}>
                  {activeCat.name}
                </h3>
                <p className="text-dark-400 text-sm mt-1">{activeCat.description}</p>
              </div>
            </div>

            {/* Platforms */}
            <div className="mb-6 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-dark-500">Disponible sur :</span>
              {activeCat.platforms.split(', ').map((platform) => (
                <span
                  key={platform}
                  className="px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{
                    backgroundColor: `${activeCat.color}15`,
                    color: activeCat.color,
                    border: `1px solid ${activeCat.color}30`,
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Criteria Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCat.criteria.map((criterion, idx) => (
                <div
                  key={idx}
                  className="bg-dark-900/60 rounded-xl p-4 border border-dark-700/50 hover:border-opacity-100 transition-all duration-300"
                  style={{
                    borderColor: hoveredCriterion?.cat === activeCategory && hoveredCriterion?.crit === idx
                      ? `${activeCat.color}60` : undefined,
                  }}
                  onMouseEnter={() => activeCategory !== null && setHoveredCriterion({ cat: activeCategory, crit: idx })}
                  onMouseLeave={() => setHoveredCriterion(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: activeCat.color, boxShadow: `0 0 8px ${activeCat.color}60` }}
                    />
                    <div>
                      <h4 className="font-semibold text-dark-100 text-sm">{criterion.name}</h4>
                      <p className="text-dark-400 text-xs mt-1 leading-relaxed">{criterion.detail}</p>
                      <p className="text-xs mt-2 font-mono leading-relaxed" style={{ color: `${activeCat.color}99` }}>
                        {criterion.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TargetingWheel;
