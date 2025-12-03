import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartData {
  labels: string[];
  datasets: any[];
}

interface InteractiveChartsProps {
  onQuestionClick: (question: string, answer: string) => void;
}

const InteractiveCharts: React.FC<InteractiveChartsProps> = ({ onQuestionClick }) => {
  const roasChartRef = useRef<HTMLCanvasElement>(null);
  const cpcChartRef = useRef<HTMLCanvasElement>(null);
  const trafficChartRef = useRef<HTMLCanvasElement>(null);
  const conversionChartRef = useRef<HTMLCanvasElement>(null);
  const chartInstances = useRef<Chart[]>([]);

  useEffect(() => {
    // Nettoyer les graphiques existants
    chartInstances.current.forEach(chart => chart.destroy());
    chartInstances.current = [];

    // Configuration générale
    Chart.defaults.font.family = 'system-ui, -apple-system, sans-serif';
    Chart.defaults.color = '#64748b';

    // Graphique 1: ROAS par jour
    if (roasChartRef.current) {
      const roasChart = new Chart(roasChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
          datasets: [{
            label: 'ROAS',
            data: [4.2, 4.8, 5.1, 4.9, 4.6, 2.8, 2.3],
            backgroundColor: [
              '#10b981', '#10b981', '#10b981', '#10b981', '#10b981', '#ef4444', '#ef4444'
            ],
            borderRadius: 4,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'ROAS (Return on Ad Spend)',
                font: { size: 12 }
              },
              grid: { color: '#f1f5f9' }
            },
            x: {
              grid: { display: false }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc',
              borderColor: '#475569',
              borderWidth: 1
            }
          }
        }
      });
      chartInstances.current.push(roasChart);
    }

    // Graphique 2: CPC par canal
    if (cpcChartRef.current) {
      const cpcChart = new Chart(cpcChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Twitter Ads'],
          datasets: [{
            data: [0.85, 1.24, 3.45, 0.62, 2.18],
            backgroundColor: [
              '#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#06b6d4'
            ],
            borderWidth: 0,
            hoverBorderWidth: 2,
            hoverBorderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { 
                padding: 15,
                usePointStyle: true,
                font: { size: 11 }
              }
            },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc',
              callbacks: {
                label: function(context) {
                  return context.label + ': ' + context.parsed + '€';
                }
              }
            }
          }
        }
      });
      chartInstances.current.push(cpcChart);
    }

    // Graphique 3: Évolution du trafic
    if (trafficChartRef.current) {
      const trafficChart = new Chart(trafficChartRef.current, {
        type: 'line',
        data: {
          labels: Array.from({length: 30}, (_, i) => `J${i + 1}`),
          datasets: [{
            label: 'Visiteurs uniques',
            data: [
              5200, 5400, 5100, 4900, 5300, 4800, 4600,
              5500, 5800, 5600, 5400, 5700, 5200, 4900,
              5100, 3200, 3400, 3100, 3300, 3500, 3800,
              4100, 4400, 4600, 4800, 5000, 5200, 5100, 5300, 5400
            ],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#6366f1',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              title: {
                display: true,
                text: 'Nombre de visiteurs',
                font: { size: 12 }
              },
              grid: { color: '#f1f5f9' }
            },
            x: {
              title: {
                display: true,
                text: 'Jours du mois',
                font: { size: 12 }
              },
              grid: { display: false }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc'
            }
          }
        }
      });
      chartInstances.current.push(trafficChart);
    }

    // Graphique 4: Conversion par appareil
    if (conversionChartRef.current) {
      const conversionChart = new Chart(conversionChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Desktop', 'Mobile', 'Tablette'],
          datasets: [{
            label: 'Taux de conversion (%)',
            data: [3.8, 2.1, 4.2],
            backgroundColor: ['#059669', '#dc2626', '#7c3aed'],
            borderRadius: 6,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Taux de conversion (%)',
                font: { size: 12 }
              },
              grid: { color: '#f1f5f9' }
            },
            x: {
              grid: { display: false }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc',
              callbacks: {
                label: function(context) {
                  return context.parsed.y + '%';
                }
              }
            }
          }
        }
      });
      chartInstances.current.push(conversionChart);
    }

    return () => {
      chartInstances.current.forEach(chart => chart.destroy());
    };
  }, []);

  const questions = [
    {
      question: "Quel jour de la semaine a la rentabilité la plus faible ?",
      answer: "Dimanche avec un ROAS de 2.3:1, suivi du samedi (2.8:1). Le weekend est clairement moins performant car les audiences sont moins en mode 'achat' et plus en mode 'divertissement'."
    },
    {
      question: "Quel canal marketing a le CPC le plus élevé ?",
      answer: "LinkedIn Ads avec 3.45€ par clic, soit 4x plus cher que TikTok (0.62€). Normal car LinkedIn cible un audience B2B premium mais il faut s'assurer que la LTV justifie ce coût."
    },
    {
      question: "Sur quelle période observe-t-on une baisse significative du trafic ?",
      answer: "Entre les jours 15 et 21, avec une chute de 5100 à 3100 visiteurs (-40%). Cela pourrait correspondre à une pause de campagnes ou un problème technique."
    },
    {
      question: "Quel type d'appareil convertit le mieux ?",
      answer: "La tablette avec 4.2% de taux de conversion, devant le desktop (3.8%) et mobile (2.1%). Surprenant mais logique : expérience hybride entre confort desktop et mobilité."
    },
    {
      question: "Pourquoi le ROAS est-il plus faible le weekend selon vous ?",
      answer: "Comportement utilisateur différent : weekend = loisirs, détente, moins d'intention d'achat immédiate. Aussi, concurrence publicitaire peut être différente avec d'autres secteurs actifs."
    },
    {
      question: "Quel canal présente le plus de potentiel d'optimisation ?",
      answer: "TikTok Ads : CPC très bas (0.62€) mais il faudrait vérifier le taux de conversion. Si decent, c'est le canal à scaler. Si faible, optimiser le ciblage/créas."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique ROAS */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4 text-center">ROAS par jour de la semaine</h4>
          <div className="h-64 relative">
            <canvas ref={roasChartRef}></canvas>
          </div>
        </div>

        {/* Graphique CPC */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4 text-center">Coût par clic (CPC) par canal</h4>
          <div className="h-64 relative">
            <canvas ref={cpcChartRef}></canvas>
          </div>
        </div>

        {/* Graphique Trafic */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4 text-center">Évolution du trafic sur 30 jours</h4>
          <div className="h-64 relative">
            <canvas ref={trafficChartRef}></canvas>
          </div>
        </div>

        {/* Graphique Conversion */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4 text-center">Taux de conversion par appareil</h4>
          <div className="h-64 relative">
            <canvas ref={conversionChartRef}></canvas>
          </div>
        </div>
      </div>

      {/* Questions interactives */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-amber-900 mb-4 text-lg">Questions d'analyse (cliquez pour révéler les réponses)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q, index) => (
            <button
              key={index}
              onClick={() => onQuestionClick(q.question, q.answer)}
              className="text-left p-4 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <span className="font-medium text-amber-900 text-sm">
                {index + 1}. {q.question}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;
