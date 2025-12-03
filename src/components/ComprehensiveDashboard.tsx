import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ComprehensiveDashboard: React.FC = () => {
  const chartRefs = useRef<(HTMLCanvasElement | null)[]>(Array(16).fill(null));
  const chartInstances = useRef<Chart[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCardExpansion = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  useEffect(() => {
    // Nettoyer les graphiques existants
    chartInstances.current.forEach(chart => {
      try {
        chart.destroy();
      } catch (e) {
        console.warn('Erreur lors de la destruction du graphique:', e);
      }
    });
    chartInstances.current = [];

    // Délai pour s'assurer que les canvas sont montés
    const timer = setTimeout(() => {
      // Configuration globale
      Chart.defaults.font.family = 'system-ui, -apple-system, sans-serif';
      Chart.defaults.color = '#64748b';

      const createChart = (index: number, config: any) => {
        if (chartRefs.current[index]) {
          try {
            const chart = new Chart(chartRefs.current[index]!, config);
            chartInstances.current.push(chart);
          } catch (e) {
            console.warn(`Erreur création graphique ${index}:`, e);
          }
        }
      };

    // 1. ROAS Multi-canaux
    createChart(0, {
      type: 'bar',
      data: {
        labels: ['Google Ads', 'Meta Ads', 'LinkedIn', 'TikTok', 'Affiliation'],
        datasets: [{
          label: 'ROAS',
          data: [4.2, 2.8, 6.1, 1.9, 3.4],
          backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#000000', '#f59e0b'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'ROAS' } }
        }
      }
    });

    // 2. Évolution du trafic mensuel
    createChart(1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        datasets: [{
          label: 'Sessions',
          data: [45000, 52000, 48000, 55000, 58000, 62000, 59000, 61000, 67000, 72000, 69000, 75000],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'Sessions' } }
        }
      }
    });

    // 3. Répartition du trafic par source
    createChart(2, {
      type: 'doughnut',
      data: {
        labels: ['Organique', 'Payant', 'Direct', 'Social', 'Email'],
        datasets: [{
          data: [42, 28, 15, 10, 5],
          backgroundColor: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // 4. Tunnel de conversion
    createChart(3, {
      type: 'bar',
      data: {
        labels: ['Visiteurs', 'Vues Produit', 'Ajouts Panier', 'Checkouts', 'Achats'],
        datasets: [{
          label: 'Utilisateurs',
          data: [100000, 45000, 12000, 8500, 2800],
          backgroundColor: ['#64748b', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'Utilisateurs' } }
        }
      }
    });

    // 5. Performance par appareil
    createChart(4, {
      type: 'radar',
      data: {
        labels: ['Trafic', 'Conversion', 'Panier Moyen', 'Temps Session', 'Pages/Session'],
        datasets: [
          {
            label: 'Desktop',
            data: [60, 85, 90, 95, 80],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)'
          },
          {
            label: 'Mobile',
            data: [85, 60, 70, 65, 55],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.2)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: { beginAtZero: true, max: 100 }
        }
      }
    });

    // 6. ROI par segment client
    createChart(5, {
      type: 'bar',
      data: {
        labels: ['Premium', 'Familles', 'Jeunes Pro', 'Seniors', 'Étudiants'],
        datasets: [{
          label: 'ROI (%)',
          data: [340, 180, 220, 160, 95],
          backgroundColor: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'ROI (%)' } }
        }
      }
    });

    // 7. CPC par jour de la semaine
    createChart(6, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'CPC (€)',
          data: [0.85, 0.92, 0.78, 0.88, 0.95, 1.24, 1.18],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'CPC (€)' } }
        }
      }
    });

    // 8. Satisfaction client (NPS)
    createChart(7, {
      type: 'doughnut',
      data: {
        labels: ['Promoteurs', 'Passifs', 'Détracteurs'],
        datasets: [{
          data: [65, 25, 10],
          backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // 9. LTV par cohorte
    createChart(8, {
      type: 'line',
      data: {
        labels: ['Mois 1', 'Mois 3', 'Mois 6', 'Mois 12', 'Mois 18', 'Mois 24'],
        datasets: [
          {
            label: 'Cohorte Q1 2023',
            data: [45, 120, 180, 280, 320, 365],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)'
          },
          {
            label: 'Cohorte Q1 2024',
            data: [52, 135, 195, 310, 340, 380],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { title: { display: true, text: 'LTV (€)' } }
        }
      }
    });

    // 10. Performance email marketing
    createChart(9, {
      type: 'bar',
      data: {
        labels: ['Newsletter', 'Promotions', 'Abandon Panier', 'Onboarding', 'Réactivation'],
        datasets: [
          {
            label: 'Taux Ouverture (%)',
            data: [24, 32, 45, 38, 18],
            backgroundColor: '#3b82f6'
          },
          {
            label: 'Taux Clic (%)',
            data: [3.2, 5.8, 12.5, 8.2, 2.1],
            backgroundColor: '#10b981'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { title: { display: true, text: 'Taux (%)' } }
        }
      }
    });

    // 11. Coût d'acquisition par canal
    createChart(10, {
      type: 'polarArea',
      data: {
        labels: ['SEO', 'Google Ads', 'Facebook', 'LinkedIn', 'Affiliation'],
        datasets: [{
          data: [12, 45, 38, 85, 22],
          backgroundColor: [
            'rgba(16, 185, 129, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(6, 182, 212, 0.8)',
            'rgba(245, 158, 11, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // 12. Évolution du panier moyen
    createChart(11, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Panier Moyen (€)',
          data: [68, 72, 65, 78, 82, 76],
          backgroundColor: '#8b5cf6',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'Panier Moyen (€)' } }
        }
      }
    });

    // 13. Taux de conversion par page de destination
    createChart(12, {
      type: 'bar',
      data: {
        labels: ['Homepage', 'Landing Page A', 'Landing Page B', 'Page Produit', 'Page Promo'],
        datasets: [{
          label: 'Taux Conversion (%)',
          data: [1.2, 4.5, 6.8, 2.3, 8.1],
          backgroundColor: ['#64748b', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Taux (%)' } }
        }
      }
    });

    // 14. Analyse géographique des ventes
    createChart(13, {
      type: 'doughnut',
      data: {
        labels: ['Île-de-France', 'Auvergne-Rhône-Alpes', 'PACA', 'Nouvelle-Aquitaine', 'Autres'],
        datasets: [{
          data: [35, 18, 15, 12, 20],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#64748b']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // 15. Analyse de sentiment client
    createChart(14, {
      type: 'bar',
      data: {
        labels: ['Très Positif', 'Positif', 'Neutre', 'Négatif', 'Très Négatif'],
        datasets: [{
          label: 'Nombre d\'avis',
          data: [285, 420, 180, 85, 30],
          backgroundColor: ['#10b981', '#22c55e', '#f59e0b', '#f97316', '#ef4444'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'Nombre d\'avis' } }
        }
      }
    });

    // 16. Performance temps réel (dernières 24h)
    createChart(15, {
      type: 'line',
      data: {
        labels: Array.from({length: 24}, (_, i) => `${i}h`),
        datasets: [{
          label: 'Visiteurs actifs',
          data: [120, 95, 78, 65, 52, 48, 55, 85, 140, 180, 220, 280, 320, 350, 380, 420, 450, 485, 520, 480, 420, 350, 280, 180],
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { title: { display: true, text: 'Visiteurs' } },
          x: { title: { display: true, text: 'Heure de la journée' } }
        }
        }
      });
    }, 100); // Délai de 100ms pour le montage des canvas

    return () => {
      clearTimeout(timer);
      chartInstances.current.forEach(chart => {
        try {
          chart.destroy();
        } catch (e) {
          console.warn('Erreur lors du cleanup:', e);
        }
      });
    };
  }, []);

  const dashboardData = [
    {
      title: "ROAS par canal marketing",
      chartType: "Histogramme",
      description: "Compare la rentabilité de chaque canal publicitaire. LinkedIn performe excellemment grâce à l'audience B2B premium.",
      useCase: "Optimisation de l'allocation budgétaire entre canaux",
      insight: "LinkedIn a le meilleur ROAS (6:1) mais nécessite un budget plus important",
      category: "Performance"
    },
    {
      title: "Évolution du trafic mensuel",
      chartType: "Graphique linéaire",
      description: "Suivi de la croissance organique du site. Tendance positive avec accélération en fin d'année.",
      useCase: "Mesure de la croissance et détection de saisonnalité",
      insight: "Croissance de +67% sur l'année avec pic en décembre",
      category: "Audience"
    },
    {
      title: "Mix des sources de trafic",
      chartType: "Graphique en secteurs",
      description: "Répartition équilibrée entre organique (42%) et payant (28%). Indépendance publicitaire correcte.",
      useCase: "Équilibrage du mix marketing et réduction des risques",
      insight: "42% de trafic organique = bonne santé SEO et résilience",
      category: "Acquisition"
    },
    {
      title: "Entonnoir de conversion e-commerce",
      chartType: "Histogramme",
      description: "Visualise les pertes à chaque étape. Point de friction majeur entre ajout panier et checkout.",
      useCase: "Identification des étapes à optimiser en priorité",
      insight: "29% d'abandon entre panier et checkout = frictions à réduire",
      category: "Conversion"
    },
    {
      title: "Analyse comparative par appareil",
      chartType: "Graphique radar",
      description: "Desktop surperforme en conversion mais mobile domine en volume. Nécessite optimisation mobile.",
      useCase: "Stratégie responsive et priorisation des développements",
      insight: "Mobile = 85% trafic mais 60% conversion vs desktop",
      category: "UX"
    },
    {
      title: "ROI par segment clientèle",
      chartType: "Barres horizontales",
      description: "Segment Premium généré 340% de ROI vs 95% pour les Étudiants. Stratification claire de la valeur.",
      useCase: "Personnalisation des stratégies par segment",
      insight: "Segment Premium = 3,5x plus rentable que segment Étudiants",
      category: "Segmentation"
    },
    {
      title: "Évolution des coûts par clic",
      chartType: "Graphique linéaire",
      description: "CPC augmente en fin de semaine (+30%) due à la concurrence accrue sur les créneaux loisirs.",
      useCase: "Optimisation temporelle des budgets publicitaires",
      insight: "Weekend = +30% de CPC, ajuster la stratégie d'enchères",
      category: "Coûts"
    },
    {
      title: "Baromètre de satisfaction (NPS)",
      chartType: "Graphique en secteurs",
      description: "Net Promoter Score de +55 points (65% promoteurs - 10% détracteurs). Excellente satisfaction.",
      useCase: "Mesure de la satisfaction et prédiction du bouche-à-oreille",
      insight: "NPS de +55 = excellent, levier croissance organique fort",
      category: "Satisfaction"
    },
    {
      title: "Valeur vie client par cohorte",
      chartType: "Graphiques linéaires multiples",
      description: "LTV croissante entre cohortes (+4% Q1 2024 vs Q1 2023). Amélioration continue de la rétention.",
      useCase: "Prédiction de revenus et optimisation de la rétention",
      insight: "LTV cohorte 2024 = +4% vs 2023, amélioration continue",
      category: "Rétention"
    },
    {
      title: "Performance email marketing",
      chartType: "Histogramme groupé",
      description: "Emails abandon panier performent 2x mieux (45% ouverture) que newsletter standard (24%).",
      useCase: "Optimisation des campagnes email et segmentation",
      insight: "Emails comportementaux = 2x plus performants que broadcast",
      category: "Email"
    },
    {
      title: "Coût d'acquisition par canal",
      chartType: "Graphique polaire",
      description: "SEO = meilleur CPA (12€) mais volume limité. LinkedIn = CPA élevé (85€) mais LTV justifiée.",
      useCase: "Arbitrage entre volume et qualité d'acquisition",
      insight: "SEO = CPA optimal mais LinkedIn rentable sur LTV long terme",
      category: "Acquisition"
    },
    {
      title: "Évolution panier moyen",
      chartType: "Histogramme",
      description: "Progression constante du panier moyen (+21% en 6 mois) grâce aux actions de cross-selling.",
      useCase: "Mesure de l'efficacité des stratégies d'up-sell/cross-sell",
      insight: "Cross-selling = +21% panier moyen, impact direct sur rentabilité",
      category: "Revenus"
    },
    {
      title: "Conversion par type de landing page",
      chartType: "Barres horizontales",
      description: "Landing pages dédiées convertissent 5x mieux (6,8%) que homepage générique (1,2%).",
      useCase: "Optimisation UX et création de pages ciblées",
      insight: "Pages dédiées = 5x meilleure conversion, ROI évident",
      category: "UX"
    },
    {
      title: "Répartition géographique des ventes",
      chartType: "Graphique en secteurs",
      description: "Concentration urbaine : 70% des ventes sur 5 métropoles. Potentiel développement régional.",
      useCase: "Stratégie d'expansion géographique et ciblage local",
      insight: "70% CA sur 5 métropoles = opportunité expansion régionale",
      category: "Géographie"
    },
    {
      title: "Analyse de sentiment client",
      chartType: "Histogramme",
      description: "70% d'avis positifs (285+420) vs 11,5% négatifs (85+30). Majorité satisfaite mais vigilance sur détracteurs.",
      useCase: "Monitoring réputation et identification des axes d'amélioration",
      insight: "70% satisfaction mais surveiller les 11,5% détracteurs actifs",
      category: "Réputation"
    },
    {
      title: "Trafic en temps réel (24h)",
      chartType: "Graphique linéaire",
      description: "Pic d'activité 17h-20h (520 visiteurs simultanés). Optimiser les campagnes sur ces créneaux.",
      useCase: "Programmation temporelle des campagnes et optimisation serveur",
      insight: "Pic 17h-20h = moment optimal pour pushs et promotions",
      category: "Temps réel"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Dashboard data marketing complet</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Exemple de tableau de bord professionnel intégrant les principales métriques et analyses 
          du data marketing moderne. Chaque graphique illustre un cas d'usage spécifique.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {dashboardData.map((item: any, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Performance' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Acquisition' ? 'bg-green-100 text-green-800' :
                    item.category === 'Conversion' ? 'bg-orange-100 text-orange-800' :
                    item.category === 'Rétention' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  📊 {item.chartType}
                </div>
              </div>
              <div className="h-64 mb-4">
                <canvas 
                  ref={(el) => {
                    chartRefs.current[index] = el;
                  }}
                  key={`chart-${index}`}
                ></canvas>
              </div>
            </div>
            
            {/* Bouton pour afficher/masquer les détails */}
            <div className="flex justify-center mb-3">
              <button
                onClick={() => toggleCardExpansion(index)}
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <svg 
                  className={`w-3 h-3 mr-1.5 transition-transform ${expandedCards.has(index) ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {expandedCards.has(index) ? 'Masquer les détails' : 'Voir les détails'}
              </button>
            </div>
            
            {/* Explications masquées par défaut */}
            {expandedCards.has(index) && (
              <div className="space-y-3 text-xs border-t border-slate-100 pt-3">
                <p className="text-slate-700 leading-relaxed">{item.description}</p>
                
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium text-slate-800 mb-1">Cas d'usage principal</p>
                  <p className="text-slate-600">{item.useCase}</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <p className="font-medium text-blue-900 mb-1">Insight clé</p>
                  <p className="text-blue-800">{item.insight}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">Utilisez ce dashboard comme inspiration</h3>
        <p className="text-indigo-800 max-w-2xl mx-auto mb-6">
          Ce dashboard illustre la diversité des analyses possibles en data marketing. 
          Chaque graphique répond à une question business spécifique et guide des actions concrètes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <div className="font-semibold text-indigo-900">16 types d'analyses</div>
            <div className="text-indigo-700">Performance, Acquisition, Conversion, UX...</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <div className="font-semibold text-indigo-900">Données réalistes</div>
            <div className="text-indigo-700">Basées sur des benchmarks sectoriels</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <div className="font-semibold text-indigo-900">Insights actionnables</div>
            <div className="text-indigo-700">Chaque graphique = décision possible</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveDashboard;
