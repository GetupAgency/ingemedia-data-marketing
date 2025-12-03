import React, { useMemo, useState, useEffect } from 'react';
import { Radar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { SevenRoomsReservation } from '../services/CSVProcessingService';
import { TooltipItem } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface UpsellCrossSellChartProps {
  reservations: SevenRoomsReservation[];
  chartType?: 'radar' | 'pie';
}

// Exemples de packages par défaut pour avoir un affichage minimal
const DEFAULT_PACKAGES = [
  'Menu Dégustation',
  'Menu Business',
  'Accord Mets-Vins',
  'Apéritif Signature',
  'Dessert Premium'
];

const UpsellCrossSellChart: React.FC<UpsellCrossSellChartProps> = ({ reservations, chartType = 'radar' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    console.log("UpsellCrossSellChart received reservations:", reservations.length);
    setIsLoaded(true);
  }, [reservations]);

  // Filtrer les réservations confirmées avec dates valides
  const validReservations = useMemo(() => {
    console.log(`Filtering ${reservations.length} reservations for UpsellCrossSellChart`);
    const result = reservations.filter(r => {
      if (!r || typeof r !== 'object') return false;
      if (r.status !== 'confirmed') return false;
      // S'assurer que la date est valide
      if (!r.reservation_date || isNaN(r.reservation_date.getTime())) return false;
      return true;
    });
    console.log(`Filtered to ${result.length} confirmed reservations with valid dates`);
    return result;
  }, [reservations]);

  // Extraction des packages réservés (hors vides)
  const packages = useMemo(() => {
    const packageList = Array.from(new Set(validReservations
      .map(r => (r.package || '').trim())
      .filter(Boolean)
    ));
    
    console.log(`Found ${packageList.length} unique packages`);
    
    // Si aucun package trouvé, utiliser des exemples par défaut
    return packageList.length > 0 ? packageList : DEFAULT_PACKAGES;
  }, [validReservations]);

  // Calcul du taux d'upsell/cross-sell par package
  const packageStats = useMemo(() => {
    // Pour chaque package, on compte le nombre de réservations où il apparaît
    // et on cherche les autres packages associés dans la même réservation (cross-sell)
    const stats: Record<string, { count: number; cross: Record<string, number> }> = {};
    
    // Initialiser tous les packages connus
    packages.forEach(pkg => {
      stats[pkg] = { count: 0, cross: {} };
    });
    
    // Si nous utilisons des données par défaut, créer des statistiques factices
    if (packages.length > 0 && packages[0] === DEFAULT_PACKAGES[0] && validReservations.length === 0) {
      // Données simulées pour l'affichage
      DEFAULT_PACKAGES.forEach((pkg, i) => {
        stats[pkg] = { 
          count: Math.floor(Math.random() * 30) + 10, 
          cross: {} 
        };
        // Ajouter quelques relations de cross-sell
        DEFAULT_PACKAGES.forEach((otherPkg, j) => {
          if (i !== j && Math.random() > 0.5) {
            stats[pkg].cross[otherPkg] = Math.floor(Math.random() * 10) + 1;
          }
        });
      });
      return stats;
    }
    
    // Sinon, utiliser les vraies données
    validReservations.forEach(r => {
      const pkg = (r.package || '').trim();
      if (!pkg) return;
      
      if (!stats[pkg]) stats[pkg] = { count: 0, cross: {} };
      stats[pkg].count++;
      
      // Recherche des autres packages associés (cross-sell)
      // Ici, on suppose que le champ package peut contenir plusieurs packages séparés par une virgule
      const allPkgs = pkg.split(',').map(s => s.trim()).filter(Boolean);
      allPkgs.forEach(other => {
        if (other && other !== pkg) {
          stats[pkg].cross[other] = (stats[pkg].cross[other] || 0) + 1;
        }
      });
    });
    
    return stats;
  }, [validReservations, packages]);

  // Préparation des données pour le graphique
  const data = useMemo(() => {
    const values = packages.map(pkg => packageStats[pkg]?.count || 0);
    
    // S'assurer qu'il y a au moins une valeur non nulle
    const hasData = values.some(val => val > 0);
    if (!hasData && isLoaded && validReservations.length > 0) {
      console.warn("Aucune donnée de package trouvée dans les réservations");
    }
    
    // Coloration dynamique : vert si top 2, rouge si bottom 2, gris sinon
    const sorted = [...values].sort((a, b) => b - a);
    const max = sorted[0] || 1;
    const min = sorted[sorted.length - 1] || 0;
    const backgroundColor = values.map(val =>
      val === max ? '#10B981' : val === min ? '#EF4444' : '#A3A3A3'
    );
    
    return {
      labels: packages,
      datasets: [
        {
          label: "Nombre de réservations",
          data: values,
          backgroundColor,
          borderColor: backgroundColor,
          borderWidth: 2,
        }
      ]
    };
  }, [packages, packageStats, isLoaded, validReservations]);

  // Tooltip personnalisé pour afficher les cross-sell
  const customTooltip = (context: TooltipItem<'radar'> | TooltipItem<'pie'>) => {
    const idx = context.dataIndex;
    const pkg = data.labels[idx];
    const cross = packageStats[pkg]?.cross || {};
    const crossList = Object.entries(cross)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => `• ${name} (${count})`)
      .join('\n');
    return `${pkg}\nRéservations: ${packageStats[pkg]?.count || 0}\nCross-sell:\n${crossList || 'Aucun'}`;
  };

  // Afficher un message si aucune donnée réelle n'est disponible
  if (validReservations.length === 0 && packages[0] !== DEFAULT_PACKAGES[0] && isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Taux d'upsell & cross-sell par package</h2>
        <div className="text-center py-8 text-gray-500">
          Aucune donnée de package disponible dans les réservations.
          <br />
          <span className="text-xs mt-2 block">Assurez-vous que les réservations contiennent des informations de package.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Taux d'upsell & cross-sell par package</h2>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${chartType === 'radar' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => window.location.reload() /* à remplacer par un vrai setState si besoin */}
            disabled
          >
            Radar
          </button>
          <button
            className={`px-3 py-1 rounded ${chartType === 'pie' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => window.location.reload() /* à remplacer par un vrai setState si besoin */}
            disabled
          >
            Pie
          </button>
        </div>
      </div>
      {packages[0] === DEFAULT_PACKAGES[0] && validReservations.length === 0 && (
        <div className="mb-4 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded text-yellow-700 text-sm">
          <strong>Note :</strong> Affichage de données d'exemple. Aucune donnée de package n'a été trouvée dans les réservations.
        </div>
      )}
      {chartType === 'radar' ? (
        <Radar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: customTooltip
                }
              }
            },
            scales: {
              r: {
                beginAtZero: true,
                pointLabels: { font: { size: 14 } }
              }
            }
          }}
        />
      ) : (
        <Pie
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' as const },
              tooltip: {
                callbacks: {
                  label: customTooltip
                }
              }
            }
          }}
        />
      )}
      <div className="text-xs text-gray-500 mt-2">
        <span className="inline-block w-3 h-3 bg-green-500 mr-1 align-middle"></span> Opportunité (package le plus vendu)
        <span className="inline-block w-3 h-3 bg-red-500 mx-2 align-middle"></span> Menace (package le moins vendu)
      </div>
    </div>
  );
};

export default UpsellCrossSellChart; 