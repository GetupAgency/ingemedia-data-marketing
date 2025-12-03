/**
 * Données fictives pour le dashboard marketing
 * 
 * Ces données servent d'exemple et pourront être remplacées par des données réelles
 * provenant de fichiers CSV importés par les étudiants.
 */

// Fonction pour générer des données de pages vues sur différentes périodes
export const pageViewsData = (timeRange: string) => {
  // Générer des données selon la période sélectionnée
  const getDates = () => {
    const today = new Date();
    const dates = [];
    const data = [];
    
    let days;
    switch (timeRange) {
      case '7d':
        days = 7;
        break;
      case '90d':
        days = 90;
        break;
      case '30d':
      default:
        days = 30;
    }
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }));
      
      // Générer une valeur aléatoire avec tendance croissante
      const baseValue = timeRange === '7d' ? 2000 : timeRange === '30d' ? 1500 : 1200;
      const trend = Math.floor(i * (baseValue / days)); // Tendance croissante
      const randomVariation = Math.floor(Math.random() * 500) - 250; // Variation aléatoire
      data.push(baseValue + trend + randomVariation);
    }
    
    return { dates, data };
  };
  
  const { dates, data } = getDates();
  
  // Données de pages vues pour le graphique d'évolution
  return {
    labels: dates,
    datasets: [
      {
        label: 'Pages vues',
        data: data,
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Visiteurs uniques',
        data: data.map(value => Math.floor(value * 0.6 + Math.random() * 100)),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3,
        fill: true,
      }
    ],
  };
};

// Données pour le graphique des mots-clés (Impressions vs Clics)
export const keywordsData = {
  labels: [
    'marketing digital', 
    'analyse données', 
    'dashboard', 
    'reporting', 
    'analytics', 
    'stratégie digitale', 
    'SEO'
  ],
  datasets: [
    {
      label: 'Impressions',
      data: [1250, 980, 1750, 1320, 2100, 1470, 2450],
      backgroundColor: 'rgba(79, 70, 229, 0.6)',
    },
    {
      label: 'Clics',
      data: [320, 145, 290, 185, 410, 205, 310],
      backgroundColor: 'rgba(16, 185, 129, 0.6)',
    }
  ],
};

// Données pour la performance par jour de la semaine
export const weekdayPerformanceData = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  datasets: [
    {
      label: 'Trafic',
      data: [1850, 2100, 1950, 2300, 2150, 1200, 980],
      backgroundColor: 'rgba(79, 70, 229, 0.6)',
    },
    {
      label: 'Conversions',
      data: [68, 75, 82, 95, 71, 32, 28],
      backgroundColor: 'rgba(245, 158, 11, 0.6)',
    }
  ],
};

// Données pour la performance des campagnes
export const campaignPerformanceData = {
  labels: [
    'Google Search', 
    'Facebook Ads', 
    'Instagram', 
    'Email Marketing', 
    'Remarketing', 
    'Campagne Saisonnière'
  ],
  datasets: [
    {
      label: 'Taux de conversion (%)',
      data: [3.8, 2.7, 1.9, 5.2, 4.1, 3.5],
      backgroundColor: [
        'rgba(79, 70, 229, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(217, 70, 239, 0.8)',
      ],
    }
  ],
};

// Données pour les sources de trafic
export const trafficSourcesData = {
  labels: ['Organique', 'Payant', 'Social', 'Email', 'Direct', 'Référent'],
  datasets: [
    {
      data: [35, 25, 15, 10, 10, 5],
      backgroundColor: [
        'rgba(79, 70, 229, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(217, 70, 239, 0.8)',
      ],
      borderColor: 'rgba(255, 255, 255, 0.6)',
      borderWidth: 2,
    }
  ],
};

// Données pour le top des pages les plus vues
export const topPagesData = [
  {
    url: '/produits/analyse-marketing',
    views: 12543,
    avgTime: '2m 47s',
    bounceRate: 32.5,
  },
  {
    url: '/blog/strategies-data-marketing-2023',
    views: 8721,
    avgTime: '4m 12s',
    bounceRate: 28.7,
  },
  {
    url: '/services/formation-analytics',
    views: 7654,
    avgTime: '3m 05s',
    bounceRate: 35.2,
  },
  {
    url: '/ressources/guides/google-analytics',
    views: 6543,
    avgTime: '5m 34s',
    bounceRate: 21.4,
  },
  {
    url: '/produits/dashboard-performance',
    views: 5987,
    avgTime: '2m 18s',
    bounceRate: 42.8,
  },
  {
    url: '/blog/cas-etude-roi-marketing',
    views: 4532,
    avgTime: '3m 45s',
    bounceRate: 31.6,
  },
  {
    url: '/contact',
    views: 3876,
    avgTime: '1m 56s',
    bounceRate: 45.9,
  },
  {
    url: '/services/analytique-predictive',
    views: 3654,
    avgTime: '3m 22s',
    bounceRate: 33.8,
  },
  {
    url: '/blog/techniques-visualisation-donnees',
    views: 3421,
    avgTime: '4m 35s',
    bounceRate: 27.1,
  },
  {
    url: '/ressources/webinaires/data-driven-marketing',
    views: 2987,
    avgTime: '6m 08s',
    bounceRate: 18.5,
  },
];

// Données pour le graphique ROI par canal
export const channelROIData = {
  labels: ['Organique', 'Payant', 'Social', 'Email', 'Remarketing'],
  datasets: [
    {
      type: 'bar' as const,
      label: 'Coût (€)',
      data: [3200, 8500, 4300, 2100, 5600],
      backgroundColor: 'rgba(239, 68, 68, 0.7)',
      order: 2,
      yAxisID: 'y',
    },
    {
      type: 'bar' as const,
      label: 'Revenu (€)',
      data: [12800, 25500, 8600, 12600, 19600],
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
      order: 2,
      yAxisID: 'y',
    },
    {
      type: 'line' as const,
      label: 'ROI (%)',
      data: [300, 200, 100, 500, 250],
      borderColor: 'rgb(79, 70, 229)',
      backgroundColor: 'rgba(79, 70, 229, 0.5)',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: 'rgb(79, 70, 229)',
      order: 1,
      yAxisID: 'y1',
    }
  ],
};

// Données pour l'analyse comparative ROAS par campagne et période
export const campaignROASData = {
  labels: ['Google Search', 'Facebook Ads', 'Instagram', 'Email Marketing', 'Remarketing'],
  datasets: [
    {
      label: 'Mois précédent',
      data: [3.2, 2.8, 1.5, 6.2, 4.8],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1,
    },
    {
      label: 'Mois en cours',
      data: [4.1, 2.5, 2.2, 5.9, 5.7],
      backgroundColor: 'rgba(79, 70, 229, 0.6)',
      borderColor: 'rgb(79, 70, 229)',
      borderWidth: 1,
    },
  ],
};

// Données pour l'évolution des métriques de conversion
export const conversionMetricsData = (timeRange: string) => {
  // Générer dates pour l'axe X
  const getDates = () => {
    const today = new Date();
    const dates = [];
    
    let days;
    switch (timeRange) {
      case '7d':
        days = 7;
        break;
      case '90d':
        days = 12; // Pour 90 jours, on utilise des données mensuelles
        break;
      case '30d':
      default:
        days = 30;
    }
    
    // Pour 90 jours, afficher par mois
    if (timeRange === '90d') {
      for (let i = 11; i >= 0; i--) {
        const date = new Date();
        date.setMonth(today.getMonth() - i);
        dates.push(date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }));
      }
    } else {
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        dates.push(date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }));
      }
    }
    
    return dates;
  };

  const dates = getDates();
  
  // Générer des données de séries temporelles avec saisonnalité et tendance
  const generateSeries = (baseValue: number, trend: number, amplitude: number, noiseLevel: number, length: number) => {
    return Array.from({ length }, (_, i) => {
      // Tendance globale
      const trendComponent = trend * i / length;
      
      // Saisonnalité (pattern cyclique)
      const seasonalComponent = amplitude * Math.sin(i * Math.PI / 6);
      
      // Bruit aléatoire
      const noise = (Math.random() - 0.5) * 2 * noiseLevel;
      
      // Combiner les composants
      return Math.max(0, baseValue + trendComponent + seasonalComponent + noise);
    });
  };

  // Générer données pour chaque série avec des caractéristiques différentes
  const seriesLength = dates.length;
  const ctrData = generateSeries(2.5, 0.5, 0.3, 0.2, seriesLength).map(val => val.toFixed(2));
  const convRateData = generateSeries(3.0, 1.0, 0.4, 0.3, seriesLength).map(val => val.toFixed(2));
  const cpaData = generateSeries(25, -3, 2, 3, seriesLength).map(val => val.toFixed(2));
  
  return {
    labels: dates,
    datasets: [
      {
        label: 'CTR (%)',
        data: ctrData,
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        yAxisID: 'y',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Taux de conversion (%)',
        data: convRateData,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        yAxisID: 'y',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'CPA (€)',
        data: cpaData,
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        yAxisID: 'y1',
        tension: 0.4,
        fill: false,
      }
    ],
  };
};

// Données pour la matrice coût-efficacité
export const efficacyMatrixData = {
  datasets: [
    {
      label: 'Campagnes',
      data: [
        { x: 2.1, y: 4.2, r: 15, campaign: 'SEA - Marque' },
        { x: 5.8, y: 2.7, r: 22, campaign: 'SEA - Générique' },
        { x: 4.3, y: 3.5, r: 18, campaign: 'Facebook Ads' },
        { x: 7.2, y: 1.8, r: 12, campaign: 'Instagram' },
        { x: 1.5, y: 6.1, r: 17, campaign: 'Email Marketing' },
        { x: 3.9, y: 5.2, r: 20, campaign: 'Remarketing Display' },
        { x: 6.5, y: 3.2, r: 14, campaign: 'YouTube Ads' },
        { x: 3.1, y: 6.8, r: 10, campaign: 'Affiliation' },
      ],
      backgroundColor: [
        'rgba(79, 70, 229, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(239, 68, 68, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(217, 70, 239, 0.7)',
        'rgba(124, 58, 237, 0.7)',
        'rgba(251, 113, 133, 0.7)',
      ],
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 2
    }
  ]
}; 