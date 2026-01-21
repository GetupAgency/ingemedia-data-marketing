import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { ChevronDown, ChevronUp, Lightbulb, Target, TrendingUp, AlertTriangle, Brain, Sparkles, Lock } from 'lucide-react';

interface ComprehensiveDashboardProps {
  isTeacherMode?: boolean;
}

const ComprehensiveDashboard: React.FC<ComprehensiveDashboardProps> = ({ isTeacherMode = false }) => {
  const chartRefs = useRef<(HTMLCanvasElement | null)[]>(Array(20).fill(null));
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
    chartInstances.current.forEach(chart => {
      try {
        chart.destroy();
      } catch (e) {
        console.warn('Erreur lors de la destruction du graphique:', e);
      }
    });
    chartInstances.current = [];

    const timer = setTimeout(() => {
      Chart.defaults.font.family = 'ui-monospace, SFMono-Regular, monospace';
      Chart.defaults.color = '#94a3b8';

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

      // Couleurs néon
      const neonColors = {
        cyan: '#00f0ff',
        purple: '#b026ff',
        pink: '#ff2d95',
        green: '#39ff14',
        yellow: '#fff01f',
        orange: '#ff6b35'
      };

      // 1. ROAS Multi-canaux - Le classique
      createChart(0, {
        type: 'bar',
        data: {
          labels: ['Google Ads', 'Meta Ads', 'LinkedIn', 'TikTok', 'Affiliation', 'SEO'],
          datasets: [{
            label: 'ROAS',
            data: [4.2, 2.8, 6.1, 1.9, 3.4, 8.5],
            backgroundColor: [neonColors.cyan, neonColors.purple, neonColors.green, neonColors.pink, neonColors.orange, neonColors.yellow],
            borderRadius: 6,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 2. Tunnel de conversion e-commerce complet
      createChart(1, {
        type: 'bar',
        data: {
          labels: ['Impressions', 'Clics', 'Visites', 'Vue Produit', 'Ajout Panier', 'Checkout', 'Achat'],
          datasets: [{
            label: 'Utilisateurs',
            data: [1000000, 35000, 28000, 14000, 4200, 2940, 1029],
            backgroundColor: [
              'rgba(0, 240, 255, 0.8)',
              'rgba(0, 240, 255, 0.7)',
              'rgba(176, 38, 255, 0.7)',
              'rgba(176, 38, 255, 0.6)',
              'rgba(255, 45, 149, 0.6)',
              'rgba(255, 45, 149, 0.5)',
              'rgba(57, 255, 20, 0.8)'
            ],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { type: 'logarithmic', grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b', maxRotation: 45 } }
          }
        }
      });

      // 3. Performance Desktop vs Mobile vs Tablette
      createChart(2, {
        type: 'radar',
        data: {
          labels: ['Trafic', 'Taux Conversion', 'Panier Moyen', 'Temps Session', 'Pages/Session', 'Taux Rebond'],
          datasets: [
            {
              label: 'Desktop',
              data: [35, 95, 100, 100, 90, 25],
              borderColor: neonColors.cyan,
              backgroundColor: 'rgba(0, 240, 255, 0.1)',
              borderWidth: 2
            },
            {
              label: 'Mobile',
              data: [55, 55, 70, 50, 45, 65],
              borderColor: neonColors.pink,
              backgroundColor: 'rgba(255, 45, 149, 0.1)',
              borderWidth: 2
            },
            {
              label: 'Tablette',
              data: [10, 75, 85, 70, 65, 40],
              borderColor: neonColors.purple,
              backgroundColor: 'rgba(176, 38, 255, 0.1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              grid: { color: 'rgba(255,255,255,0.1)' },
              ticks: { color: '#64748b', backdropColor: 'transparent' },
              pointLabels: { color: '#94a3b8' }
            }
          }
        }
      });

      // 4. LTV par cohorte - Analyse de rétention
      createChart(3, {
        type: 'line',
        data: {
          labels: ['M0', 'M3', 'M6', 'M9', 'M12', 'M18', 'M24'],
          datasets: [
            {
              label: 'Cohorte Q1 2024',
              data: [0, 45, 95, 140, 185, 245, 290],
              borderColor: neonColors.green,
              backgroundColor: 'rgba(57, 255, 20, 0.1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Cohorte Q1 2023',
              data: [0, 38, 78, 115, 150, 195, 230],
              borderColor: neonColors.cyan,
              backgroundColor: 'rgba(0, 240, 255, 0.05)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Cohorte Q1 2022',
              data: [0, 32, 65, 95, 125, 160, 190],
              borderColor: neonColors.purple,
              backgroundColor: 'rgba(176, 38, 255, 0.05)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { title: { display: true, text: 'LTV (€)', color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 5. Attribution multi-touch - Complexe
      createChart(4, {
        type: 'bar',
        data: {
          labels: ['Premier Clic', 'Dernier Clic', 'Linéaire', 'Time Decay', 'Data-Driven'],
          datasets: [
            {
              label: 'SEO',
              data: [42, 18, 28, 24, 31],
              backgroundColor: neonColors.green
            },
            {
              label: 'Google Ads',
              data: [25, 38, 32, 35, 29],
              backgroundColor: neonColors.cyan
            },
            {
              label: 'Meta Ads',
              data: [18, 28, 22, 24, 23],
              backgroundColor: neonColors.purple
            },
            {
              label: 'Email',
              data: [8, 12, 11, 13, 11],
              backgroundColor: neonColors.pink
            },
            {
              label: 'Direct',
              data: [7, 4, 7, 4, 6],
              backgroundColor: neonColors.orange
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { stacked: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' }, title: { display: true, text: '% Attribution', color: '#64748b' } },
            x: { stacked: true, grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 6. Matrice BCG des produits
      createChart(5, {
        type: 'bubble',
        data: {
          datasets: [
            {
              label: 'Produit A (Star)',
              data: [{ x: 25, y: 35, r: 25 }],
              backgroundColor: 'rgba(57, 255, 20, 0.6)',
              borderColor: neonColors.green
            },
            {
              label: 'Produit B (Vache à lait)',
              data: [{ x: 8, y: 45, r: 30 }],
              backgroundColor: 'rgba(0, 240, 255, 0.6)',
              borderColor: neonColors.cyan
            },
            {
              label: 'Produit C (Dilemme)',
              data: [{ x: 30, y: 12, r: 15 }],
              backgroundColor: 'rgba(255, 240, 31, 0.6)',
              borderColor: neonColors.yellow
            },
            {
              label: 'Produit D (Poids mort)',
              data: [{ x: 5, y: 8, r: 12 }],
              backgroundColor: 'rgba(255, 45, 149, 0.6)',
              borderColor: neonColors.pink
            },
            {
              label: 'Produit E (Star émergent)',
              data: [{ x: 22, y: 28, r: 18 }],
              backgroundColor: 'rgba(176, 38, 255, 0.6)',
              borderColor: neonColors.purple
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { title: { display: true, text: 'Part de marché relative (%)', color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { title: { display: true, text: 'Croissance du marché (%)', color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 7. CAC vs LTV par canal
      createChart(6, {
        type: 'bar',
        data: {
          labels: ['SEO', 'Google Ads', 'Meta Ads', 'LinkedIn', 'TikTok', 'Affiliation'],
          datasets: [
            {
              label: 'CAC (€)',
              data: [15, 48, 42, 95, 28, 35],
              backgroundColor: neonColors.pink,
              borderRadius: 4
            },
            {
              label: 'LTV 12 mois (€)',
              data: [180, 165, 145, 320, 95, 155],
              backgroundColor: neonColors.green,
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 8. Analyse RFM - Segmentation client
      createChart(7, {
        type: 'doughnut',
        data: {
          labels: ['Champions (111)', 'Loyaux (112-211)', 'Potentiels (121-221)', 'Nouveaux (311-321)', 'À risque (133-233)', 'Perdus (333)'],
          datasets: [{
            data: [15, 22, 18, 12, 20, 13],
            backgroundColor: [
              neonColors.green,
              neonColors.cyan,
              neonColors.purple,
              neonColors.yellow,
              neonColors.orange,
              neonColors.pink
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'right', labels: { color: '#94a3b8', padding: 10, font: { size: 10 } } }
          }
        }
      });

      // 9. Performance email par type
      createChart(8, {
        type: 'bar',
        data: {
          labels: ['Welcome', 'Abandon Panier', 'Post-Achat', 'Newsletter', 'Réactivation', 'Promo Flash'],
          datasets: [
            {
              label: 'Taux Ouverture (%)',
              data: [58, 45, 42, 22, 28, 35],
              backgroundColor: neonColors.cyan
            },
            {
              label: 'Taux Clic (%)',
              data: [18, 12, 8, 3, 4, 8],
              backgroundColor: neonColors.purple
            },
            {
              label: 'Taux Conversion (%)',
              data: [5.2, 8.5, 2.1, 0.4, 1.2, 3.8],
              backgroundColor: neonColors.green
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b', maxRotation: 45 } }
          }
        }
      });

      // 10. Évolution trafic avec événements
      createChart(9, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
          datasets: [
            {
              label: 'Trafic Organique',
              data: [42000, 45000, 48000, 52000, 58000, 55000, 48000, 45000, 62000, 68000, 95000, 125000],
              borderColor: neonColors.green,
              backgroundColor: 'rgba(57, 255, 20, 0.1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Trafic Payant',
              data: [28000, 32000, 35000, 38000, 42000, 45000, 35000, 38000, 48000, 52000, 78000, 95000],
              borderColor: neonColors.cyan,
              backgroundColor: 'rgba(0, 240, 255, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#94a3b8' } },
            annotation: {
              annotations: {
                blackFriday: {
                  type: 'line',
                  xMin: 10,
                  xMax: 10,
                  borderColor: neonColors.pink,
                  borderWidth: 2,
                  label: { content: 'Black Friday', enabled: true }
                }
              }
            }
          },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 11. Score de santé e-commerce
      createChart(10, {
        type: 'polarArea',
        data: {
          labels: ['Acquisition', 'Activation', 'Rétention', 'Revenus', 'Recommandation'],
          datasets: [{
            data: [78, 65, 82, 71, 58],
            backgroundColor: [
              'rgba(0, 240, 255, 0.7)',
              'rgba(176, 38, 255, 0.7)',
              'rgba(57, 255, 20, 0.7)',
              'rgba(255, 240, 31, 0.7)',
              'rgba(255, 45, 149, 0.7)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } },
          scales: {
            r: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { display: false } }
          }
        }
      });

      // 12. Analyse A/B Test Landing Pages
      createChart(11, {
        type: 'bar',
        data: {
          labels: ['Contrôle', 'Variante A', 'Variante B', 'Variante C'],
          datasets: [
            {
              label: 'Taux Conversion (%)',
              data: [2.1, 2.8, 3.5, 2.4],
              backgroundColor: [
                'rgba(148, 163, 184, 0.7)',
                'rgba(0, 240, 255, 0.7)',
                'rgba(57, 255, 20, 0.9)',
                'rgba(176, 38, 255, 0.7)'
              ],
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' }, title: { display: true, text: 'Taux Conversion (%)', color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 13. Heure de la journée - Performance
      createChart(12, {
        type: 'line',
        data: {
          labels: ['00h', '02h', '04h', '06h', '08h', '10h', '12h', '14h', '16h', '18h', '20h', '22h'],
          datasets: [
            {
              label: 'Visiteurs',
              data: [450, 280, 180, 220, 680, 1200, 1450, 1380, 1520, 1680, 1420, 890],
              borderColor: neonColors.cyan,
              backgroundColor: 'rgba(0, 240, 255, 0.1)',
              fill: true,
              tension: 0.4,
              yAxisID: 'y'
            },
            {
              label: 'Taux Conversion (%)',
              data: [1.2, 0.8, 0.5, 0.9, 2.1, 2.8, 2.2, 2.5, 3.1, 3.4, 2.9, 2.1],
              borderColor: neonColors.green,
              borderDash: [5, 5],
              tension: 0.4,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { type: 'linear', display: true, position: 'left', grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 14. Mix Marketing Budget vs Performance
      createChart(13, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Google Ads',
              data: [{ x: 35000, y: 147000 }],
              backgroundColor: neonColors.cyan,
              pointRadius: 15
            },
            {
              label: 'Meta Ads',
              data: [{ x: 28000, y: 78400 }],
              backgroundColor: neonColors.purple,
              pointRadius: 12
            },
            {
              label: 'LinkedIn',
              data: [{ x: 15000, y: 91500 }],
              backgroundColor: neonColors.green,
              pointRadius: 10
            },
            {
              label: 'TikTok',
              data: [{ x: 12000, y: 22800 }],
              backgroundColor: neonColors.pink,
              pointRadius: 8
            },
            {
              label: 'SEO',
              data: [{ x: 8000, y: 68000 }],
              backgroundColor: neonColors.yellow,
              pointRadius: 14
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { title: { display: true, text: 'CA généré (€)', color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { title: { display: true, text: 'Budget investi (€)', color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 15. Prédiction vs Réalité (ML)
      createChart(14, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
          datasets: [
            {
              label: 'CA Réel',
              data: [125000, 138000, 145000, 162000, 178000, 195000],
              borderColor: neonColors.green,
              backgroundColor: 'rgba(57, 255, 20, 0.1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'CA Prédit (ML)',
              data: [122000, 135000, 148000, 158000, 175000, 192000],
              borderColor: neonColors.cyan,
              borderDash: [8, 4],
              tension: 0.3
            },
            {
              label: 'Prévision S2',
              data: [null, null, null, null, null, 195000, 215000, 235000, 258000, 285000, 320000, 365000],
              borderColor: neonColors.purple,
              borderDash: [4, 4],
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

      // 16. Churn Analysis
      createChart(15, {
        type: 'line',
        data: {
          labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
          datasets: [
            {
              label: 'Clients restants (%)',
              data: [100, 82, 71, 65, 60, 56, 53, 50, 48, 46, 45, 44],
              borderColor: neonColors.pink,
              backgroundColor: 'rgba(255, 45, 149, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 0, max: 100, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' }, title: { display: true, text: 'Rétention (%)', color: '#64748b' } },
            x: { grid: { display: false }, ticks: { color: '#64748b' } }
          }
        }
      });

    }, 100);

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
      question: "Quel canal devrait recevoir plus de budget ? Pourquoi le SEO n'est-il pas un 'canal payant' mais a quand même un ROAS ?",
      category: "Performance",
      difficulty: "Débutant",
      insight: "Le SEO a le meilleur ROAS (8.5:1) car le coût est indirect (temps, contenu). LinkedIn performe bien (6.1:1) grâce à l'audience B2B qualifiée. TikTok (1.9:1) nécessite une stratégie différente.",
      takeaway: "Ne pas confondre ROAS et ROI. Le ROAS ignore certains coûts cachés. Un ROAS de 4:1 minimum est généralement nécessaire pour être rentable après marge."
    },
    {
      title: "Tunnel de conversion e-commerce",
      question: "Calculez le taux de conversion global. Où se situe la plus grosse fuite ? Quelle action prioritaire recommanderiez-vous ?",
      category: "Conversion",
      difficulty: "Intermédiaire",
      insight: "CVR global = 1029/35000 = 2.94%. La plus grosse fuite est Visites → Vue Produit (50% de perte). Les visiteurs ne trouvent pas ce qu'ils cherchent.",
      takeaway: "Optimisez d'abord l'étape avec le plus gros volume de perte en valeur absolue, pas en pourcentage. Ici : améliorer la navigation et le merchandising."
    },
    {
      title: "Performance par appareil",
      question: "Pourquoi le mobile a-t-il plus de trafic mais moins de conversions ? Quelle métrique vous alerte le plus ?",
      category: "UX",
      difficulty: "Intermédiaire",
      insight: "Le mobile représente 55% du trafic mais seulement 55% de l'efficacité de conversion du desktop. Le taux de rebond mobile (65%) est alarmant.",
      takeaway: "L'écart desktop/mobile sur la conversion révèle des frictions UX. Priorité : optimisation mobile-first du checkout et réduction du temps de chargement."
    },
    {
      title: "LTV par cohorte d'acquisition",
      question: "Que nous apprend l'évolution entre cohortes ? Comment calculer le payback period du CAC ?",
      category: "Rétention",
      difficulty: "Avancé",
      insight: "La cohorte 2024 atteint 290€ de LTV à 24 mois vs 190€ en 2022 (+52%). L'amélioration de la rétention augmente significativement la valeur client.",
      takeaway: "Si votre CAC est de 50€ et la LTV mensuelle de 25€, le payback est de 2 mois. Investir dans la rétention a un effet multiplicateur sur la LTV."
    },
    {
      title: "Attribution multi-touch",
      question: "Pourquoi le SEO passe de 42% (premier clic) à 18% (dernier clic) ? Quel modèle choisiriez-vous et pourquoi ?",
      category: "Attribution",
      difficulty: "Avancé",
      insight: "Le SEO initie les parcours (découverte) mais Google Ads conclut (intention d'achat). Le modèle Data-Driven est le plus équilibré mais nécessite du volume.",
      takeaway: "Le modèle d'attribution impacte directement vos décisions budgétaires. 'Dernier clic' sur-valorise les canaux de conversion, 'premier clic' les canaux de découverte."
    },
    {
      title: "Matrice BCG des produits",
      question: "Identifiez chaque quadrant. Quelle stratégie pour le produit 'Dilemme' (C) ?",
      category: "Stratégie",
      difficulty: "Avancé",
      insight: "Stars (A,E) : forte croissance + forte part. Vache à lait (B) : faible croissance + forte part. Dilemme (C) : forte croissance + faible part. Poids mort (D) : tout faible.",
      takeaway: "Pour un Dilemme : investir massivement pour devenir Star, ou abandonner. La pire stratégie est l'entre-deux qui gaspille des ressources."
    },
    {
      title: "CAC vs LTV par canal",
      question: "Calculez le ratio LTV/CAC pour chaque canal. Lequel est le plus rentable à long terme ?",
      category: "Acquisition",
      difficulty: "Intermédiaire",
      insight: "SEO : 180/15 = 12:1 (excellent). LinkedIn : 320/95 = 3.4:1 (correct). TikTok : 95/28 = 3.4:1 (limite). Un ratio > 3:1 est sain.",
      takeaway: "Ne regardez jamais le CAC seul. Un CAC élevé peut être justifié par une LTV supérieure. LinkedIn coûte cher mais génère des clients premium."
    },
    {
      title: "Segmentation RFM",
      question: "Que signifie le score 111 vs 333 ? Quelle action pour le segment 'À risque' (133-233) ?",
      category: "Segmentation",
      difficulty: "Avancé",
      insight: "RFM = Récence-Fréquence-Montant (1=meilleur, 3=pire). Champions (111) = achat récent, fréquent, montant élevé. À risque = bon historique mais inactifs récemment.",
      takeaway: "Les clients 'À risque' (20%) sont une priorité : campagnes de réactivation personnalisées. Coût de rétention < coût d'acquisition."
    },
    {
      title: "Performance email marketing",
      question: "Pourquoi l'email 'Abandon Panier' a-t-il le meilleur taux de conversion malgré un taux d'ouverture moyen ?",
      category: "Email",
      difficulty: "Intermédiaire",
      insight: "L'abandon panier cible une intention d'achat forte. Le taux de conversion (8.5%) est 20x supérieur à la newsletter (0.4%) car l'audience est ultra-qualifiée.",
      takeaway: "Les emails comportementaux (triggered) performent toujours mieux que les emails broadcast. Automatisez en priorité : welcome, abandon, post-achat."
    },
    {
      title: "Saisonnalité et événements",
      question: "Identifiez les pics de trafic. Quelle corrélation entre trafic organique et payant observez-vous ?",
      category: "Audience",
      difficulty: "Débutant",
      insight: "Pic majeur en Nov-Déc (Black Friday, Noël). Le trafic payant amplifie les tendances organiques (+82% vs +60% en Q4). Creux estival en Jul-Aoû.",
      takeaway: "Planifiez vos budgets selon la saisonnalité. Augmentez le paid pendant les pics de demande pour maximiser le ROI (l'intention est déjà là)."
    },
    {
      title: "Score AARRR (Pirate Metrics)",
      question: "Quel pilier est le plus faible ? Comment l'améliorer concrètement ?",
      category: "Growth",
      difficulty: "Intermédiaire",
      insight: "Recommandation (58%) est le point faible. Malgré une bonne rétention (82%), les clients ne recommandent pas assez (NPS probablement moyen).",
      takeaway: "Un programme de parrainage ou des incitations post-achat peuvent booster la recommandation. C'est le levier de croissance le moins coûteux."
    },
    {
      title: "A/B Test Landing Pages",
      question: "La Variante B (+67% vs Contrôle) est-elle statistiquement significative ? Comment le vérifier ?",
      category: "Testing",
      difficulty: "Avancé",
      insight: "Passage de 2.1% à 3.5% = +67% relatif. Pour la significativité, il faut calculer la p-value (< 0.05) selon le volume de trafic par variante.",
      takeaway: "Ne jamais déclarer un gagnant sans significativité statistique. Utilisez un calculateur A/B. Minimum ~1000 conversions par variante pour des résultats fiables."
    },
    {
      title: "Performance par heure",
      question: "À quelle heure le taux de conversion est-il optimal ? Pourquoi ce décalage avec le pic de trafic ?",
      category: "Temps réel",
      difficulty: "Intermédiaire",
      insight: "Pic de conversion à 18h (3.4%) mais pic de trafic à 20h. L'audience du soir browse plus mais convertit moins (mode 'détente' vs 'achat').",
      takeaway: "Programmez vos emails et push notifications autour de 18h. Ajustez les enchères paid pour maximiser sur les créneaux à fort CVR, pas forcément fort trafic."
    },
    {
      title: "Budget vs Performance",
      question: "Quel canal a le meilleur ratio CA/Budget ? Faut-il réallouer le budget TikTok ?",
      category: "Budget",
      difficulty: "Intermédiaire",
      insight: "SEO : 68k/8k = 8.5x. Google Ads : 147k/35k = 4.2x. LinkedIn : 91.5k/15k = 6.1x. TikTok : 22.8k/12k = 1.9x (sous-performant).",
      takeaway: "TikTok nécessite soit une stratégie créative différente, soit une réallocation vers LinkedIn/SEO. Attention : le SEO a une capacité de scaling limitée."
    },
    {
      title: "Prévision ML vs Réalité",
      question: "Quelle est la précision du modèle prédictif ? Comment l'améliorer ?",
      category: "Analytics",
      difficulty: "Avancé",
      insight: "Erreur moyenne de ~3% (MAPE). Le modèle sous-estime légèrement les pics. Intégrer plus de variables externes (météo, événements) améliorerait la précision.",
      takeaway: "Un modèle prédictif à 97% de précision est excellent. Utilisez-le pour la planification des stocks, du staffing et des budgets marketing."
    },
    {
      title: "Analyse de Churn",
      question: "Calculez le taux de churn mensuel moyen. À quel moment le churn ralentit-il ? Pourquoi ?",
      category: "Rétention",
      difficulty: "Avancé",
      insight: "Churn le plus fort M1-M3 (29% perdus). Stabilisation après M6 (~2-3%/mois). Les clients qui passent le cap des 6 mois sont fidélisés.",
      takeaway: "Concentrez les efforts de rétention sur les 3 premiers mois : onboarding, first value, support proactif. Le client 'survivant' à 6 mois a 10x plus de LTV."
    }
  ];

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, string> = {
      'Performance': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
      'Conversion': 'bg-neon-pink/20 text-neon-pink border-neon-pink/30',
      'UX': 'bg-neon-purple/20 text-neon-purple border-neon-purple/30',
      'Rétention': 'bg-neon-green/20 text-neon-green border-neon-green/30',
      'Attribution': 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
      'Stratégie': 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30',
      'Acquisition': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
      'Segmentation': 'bg-neon-purple/20 text-neon-purple border-neon-purple/30',
      'Email': 'bg-neon-pink/20 text-neon-pink border-neon-pink/30',
      'Audience': 'bg-neon-green/20 text-neon-green border-neon-green/30',
      'Growth': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
      'Testing': 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30',
      'Temps réel': 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
      'Budget': 'bg-neon-green/20 text-neon-green border-neon-green/30',
      'Analytics': 'bg-neon-purple/20 text-neon-purple border-neon-purple/30'
    };
    return styles[category] || 'bg-dark-700 text-dark-300 border-dark-600';
  };

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'text-neon-green';
      case 'Intermédiaire': return 'text-neon-yellow';
      case 'Avancé': return 'text-neon-pink';
      default: return 'text-dark-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm text-dark-300 font-mono">16 analyses interactives</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Dashboard Analytics <span className="text-gradient">Professionnel</span>
        </h2>
        <p className="text-dark-400 max-w-2xl mx-auto">
          Analysez ces graphiques comme un vrai data marketer. Chaque visualisation cache des insights
          et des décisions business à prendre.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dashboardData.map((item, index) => (
          <div
            key={index}
            className="bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-neon-purple/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="p-4 border-b border-dark-700/50">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className={`font-mono ${getDifficultyStyle(item.difficulty)}`}>
                  {item.difficulty}
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="p-4">
              <div className="h-56 mb-4">
                <canvas
                  ref={(el) => { chartRefs.current[index] = el; }}
                  key={`chart-${index}`}
                />
              </div>

              {/* Question pour l'étudiant */}
              <div className="bg-dark-700/50 rounded-xl p-3 mb-3 border border-dark-600">
                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-dark-200 leading-relaxed">{item.question}</p>
                </div>
              </div>

              {/* Toggle correction */}
              {isTeacherMode ? (
                <>
                  <button
                    onClick={() => toggleCardExpansion(index)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-xl text-neon-green text-sm font-medium hover:bg-neon-green/20 transition-all"
                  >
                    {expandedCards.has(index) ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Masquer la correction
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Afficher la correction
                      </>
                    )}
                  </button>

                  {expandedCards.has(index) && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-neon-cyan mb-1">Analyse</p>
                            <p className="text-sm text-dark-200">{item.insight}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-neon-green/10 border border-neon-green/30 rounded-xl p-3">
                        <div className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-neon-green mb-1">À retenir</p>
                            <p className="text-sm text-dark-200">{item.takeaway}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-xl text-dark-500 text-sm">
                  <Lock className="w-4 h-4" />
                  Correction réservée aux enseignants
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10 border border-neon-purple/20 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-3">
          Prêt à analyser comme un pro ?
        </h3>
        <p className="text-dark-300 max-w-2xl mx-auto mb-6">
          Ces 16 analyses couvrent les principales compétences d'un data marketer :
          performance, attribution, segmentation, prévision et optimisation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-dark-800/50 p-3 rounded-xl border border-dark-700">
            <div className="text-2xl font-bold text-neon-cyan mb-1">16</div>
            <div className="text-dark-400">Analyses</div>
          </div>
          <div className="bg-dark-800/50 p-3 rounded-xl border border-dark-700">
            <div className="text-2xl font-bold text-neon-green mb-1">8</div>
            <div className="text-dark-400">Types de graphiques</div>
          </div>
          <div className="bg-dark-800/50 p-3 rounded-xl border border-dark-700">
            <div className="text-2xl font-bold text-neon-purple mb-1">16</div>
            <div className="text-dark-400">Questions</div>
          </div>
          <div className="bg-dark-800/50 p-3 rounded-xl border border-dark-700">
            <div className="text-2xl font-bold text-neon-pink mb-1">∞</div>
            <div className="text-dark-400">Insights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveDashboard;
