import Papa from 'papaparse';
import { AnalyticsData, CSVValidationError, CSVImportResult, AnalyticsDataSummary } from '../types/analytics';

/**
 * Valide les données CSV pour s'assurer qu'elles sont au format attendu
 * Compatible avec les formats de Search Console et Analytics
 */
export const validateCSVData = (
  parsedData: Array<Record<string, string>>,
): CSVImportResult => {
  const errors: CSVValidationError[] = [];
  const validData: AnalyticsData[] = [];

  // Vérifiez si le CSV est vide
  if (!parsedData || parsedData.length === 0) {
    errors.push({
      row: 0,
      column: 'global',
      message: 'Le fichier CSV est vide ou mal formaté'
    });
    return { data: [], errors, isValid: false };
  }

  // Filtrer les lignes de métadonnées (commençant par #)
  const filteredData = parsedData.filter(row => {
    // Vérifier si une des clés ou valeurs commence par #
    for (const [key, value] of Object.entries(row)) {
      if (key.trim().startsWith('#') || (typeof value === 'string' && value.trim().startsWith('#'))) {
        return false;
      }
    }
    return true;
  });

  // Si toutes les lignes ont été filtrées, retourner une erreur
  if (filteredData.length === 0) {
    errors.push({
      row: 0,
      column: 'global',
      message: 'Aucune donnée valide après filtrage des métadonnées'
    });
    return { data: [], errors, isValid: false };
  }

  // Obtenir la première ligne pour déterminer le format
  const firstRow = filteredData[0];
  const headers = Object.keys(firstRow).map(key => key.toLowerCase().trim());
  
  // Déterminer le type de données en fonction des en-têtes
  const isSearchConsoleFormat = 
    headers.some(h => h.includes('chemin') || h === 'path' || h.includes('url')) &&
    headers.some(h => h.includes('vues') || h === 'views' || h.includes('impressions'));
    
  const isAnalyticsFormat = 
    headers.some(h => h.includes('date')) &&
    (headers.some(h => h.includes('session')) || headers.some(h => h.includes('utilisateur')) || headers.some(h => h.includes('user')));

  const isGA4Format = 
    (headers.some(h => h.includes('chemin') || h.includes('path') || h.includes('page')) &&
    headers.some(h => h.includes('durée') || h.includes('engagement') || h.includes('time')));

  // Si c'est le format Google Analytics 4
  if (isGA4Format) {
    // Trouver les correspondances d'en-tête pour les colonnes GA4
    const pathColumn = findHeaderMatch(headers, ['chemin', 'path', 'page', 'url', 'écran', 'screen']);
    const viewsColumn = findHeaderMatch(headers, ['vues', 'views', 'impressions', 'clics']);
    const usersColumn = findHeaderMatch(headers, ['utilisateurs', 'users', 'actifs', 'activeusers', 'utilisateurs actifs']);
    const engagementColumn = findHeaderMatch(headers, ['durée', 'engagement', 'temps', 'time', 'duration']);
    const eventsColumn = findHeaderMatch(headers, ['événements', 'events', 'nombre d\'événements', 'eventcount']);
    
    // Valider chaque ligne
    filteredData.forEach((row, index) => {
      try {
        // Standardiser les noms des colonnes (en minuscules)
        const standardizedRow: Record<string, string> = {};
        Object.entries(row).forEach(([key, value]) => {
          standardizedRow[key.toLowerCase().trim()] = value;
        });

        const rowNumber = index + 1;
        
        // Récupérer les valeurs (avec des noms de colonnes potentiellement différents)
        const path = standardizedRow[pathColumn];
        let views = standardizedRow[viewsColumn];
        let users = standardizedRow[usersColumn];
        let engagementTime = standardizedRow[engagementColumn];
        
        // Gérer les valeurs vides ou "-" comme zéro
        views = views === '-' || views === '' ? '0' : views;
        users = users === '-' || users === '' ? '0' : users;
        engagementTime = engagementTime === '-' || engagementTime === '' ? '0' : engagementTime;
        
        // Enlever le "s" pour les durées
        if (engagementTime && engagementTime.endsWith('s')) {
          engagementTime = engagementTime.replace('s', '');
        }
        
        // Validation de base
        if (!path || path.trim() === '') {
          errors.push({
            row: rowNumber,
            column: 'path',
            message: 'Le chemin de la page est manquant'
          });
        }
        
        // Créer l'objet de données
        if (!errors.some(error => error.row === rowNumber)) {
          const analyticsData: AnalyticsData = {
            path: path,
            views: parseFloat(views) || 0,
            activeUsers: parseFloat(users) || 0,
            averageEngagementTime: parseFloat(engagementTime) || 0
          };
          
          // Ajouter d'autres métriques si elles existent
          if (standardizedRow[eventsColumn] && standardizedRow[eventsColumn] !== '-') {
            analyticsData.eventCount = parseFloat(standardizedRow[eventsColumn]) || 0;
          }
          
          // Ajouter des propriétés supplémentaires pour toutes les colonnes du CSV
          Object.entries(standardizedRow).forEach(([key, value]) => {
            if (value !== '-' && isPositiveNumber(value) && !analyticsData[key]) {
              analyticsData[key] = parseFloat(value);
            } else if (!analyticsData[key] && value !== '-') {
              analyticsData[key] = value;
            }
          });
          
          validData.push(analyticsData);
        }
      } catch (error) {
        errors.push({
          row: index + 1,
          column: 'global',
          message: `Erreur lors de l'analyse de la ligne: ${error instanceof Error ? error.message : String(error)}`
        });
      }
    });
  }
  // Si c'est le format Search Console
  else if (isSearchConsoleFormat) {
    // Trouver les correspondances d'en-tête pour les colonnes Search Console
    const pathColumn = findHeaderMatch(headers, ['chemin', 'path', 'url', 'page']);
    const viewsColumn = findHeaderMatch(headers, ['vues', 'views', 'impressions', 'clics']);
    const usersColumn = findHeaderMatch(headers, ['utilisateurs', 'users', 'actifs', 'activeusers', 'utilisateurs actifs']);
    const engagementColumn = findHeaderMatch(headers, ['durée', 'engagement', 'temps', 'time', 'duration']);
    const eventsColumn = findHeaderMatch(headers, ['événements', 'events', 'nombre d\'événements', 'eventcount']);
    
    // Valider chaque ligne
    filteredData.forEach((row, index) => {
      try {
        // Standardiser les noms des colonnes (en minuscules)
        const standardizedRow: Record<string, string> = {};
        Object.entries(row).forEach(([key, value]) => {
          standardizedRow[key.toLowerCase().trim()] = value;
        });

        const rowNumber = index + 1;
        
        // Récupérer les valeurs (avec des noms de colonnes potentiellement différents)
        const path = standardizedRow[pathColumn];
        const views = standardizedRow[viewsColumn];
        const users = standardizedRow[usersColumn];
        const engagementTime = standardizedRow[engagementColumn];
        
        // Validation de base
        if (!path || path.trim() === '') {
          errors.push({
            row: rowNumber,
            column: 'path',
            message: 'Le chemin de la page est manquant'
          });
        }
        
        // Valider que les métriques sont des nombres
        if (!views || !isPositiveNumber(views)) {
          errors.push({
            row: rowNumber,
            column: 'views',
            message: `'${views}' n'est pas un nombre valide pour les vues`
          });
        }
        
        // Créer l'objet de données
        if (!errors.some(error => error.row === rowNumber)) {
          const analyticsData: AnalyticsData = {
            path: path,
            views: parseFloat(views),
            activeUsers: users ? parseFloat(users) : 0,
            averageEngagementTime: engagementTime ? parseFloat(engagementTime) : 0
          };
          
          // Ajouter d'autres métriques si elles existent
          if (standardizedRow[eventsColumn]) {
            analyticsData.eventCount = parseFloat(standardizedRow[eventsColumn]);
          }
          
          // Ajouter des propriétés supplémentaires pour toutes les colonnes du CSV
          Object.entries(standardizedRow).forEach(([key, value]) => {
            if (isPositiveNumber(value) && !analyticsData[key]) {
              analyticsData[key] = parseFloat(value);
            } else if (!analyticsData[key]) {
              analyticsData[key] = value;
            }
          });
          
          validData.push(analyticsData);
        }
      } catch (error) {
        errors.push({
          row: index + 1,
          column: 'global',
          message: `Erreur lors de l'analyse de la ligne: ${error instanceof Error ? error.message : String(error)}`
        });
      }
    });
  }
  // Si c'est le format Google Analytics classique
  else if (isAnalyticsFormat) {
    // Ancien code de validation pour Google Analytics
    // Vérifier les colonnes requises
    const requiredColumns = ['date', 'sessions', 'users', 'bounceRate'];
    
    // Vérifier si les en-têtes nécessaires sont présents
    if (firstRow) {
      for (const column of requiredColumns) {
        if (!headers.some(header => header.includes(column.toLowerCase()))) {
          errors.push({
            row: 0,
            column,
            message: `Colonne obligatoire '${column}' manquante dans le fichier CSV`
          });
        }
      }
    }

    // Si des colonnes obligatoires sont manquantes, on continue quand même
    // mais on prévient l'utilisateur

    // Valider chaque ligne
    filteredData.forEach((row, index) => {
      try {
        // Standardiser les noms des colonnes (en minuscules)
        const standardizedRow: Record<string, string> = {};
        Object.entries(row).forEach(([key, value]) => {
          standardizedRow[key.toLowerCase().trim()] = value;
        });

        const rowNumber = index + 1;

        // Créer l'objet de données Analytics
        const dateCol = findHeaderMatch(headers, ['date']);
        const sessionsCol = findHeaderMatch(headers, ['sessions', 'session']);
        const usersCol = findHeaderMatch(headers, ['users', 'utilisateurs', 'user']);
        const bounceRateCol = findHeaderMatch(headers, ['bounce', 'rebond', 'bouncerate']);

        const analyticsData: AnalyticsData = {
          // Utiliser des valeurs par défaut pour les champs obligatoires du nouveau format
          path: standardizedRow[dateCol] || `row_${rowNumber}`,
          views: standardizedRow[sessionsCol] ? parseInt(standardizedRow[sessionsCol], 10) : 0,
          activeUsers: standardizedRow[usersCol] ? parseInt(standardizedRow[usersCol], 10) : 0,
          averageEngagementTime: 0,
          
          // Conserver les champs originaux
          date: standardizedRow[dateCol],
          sessions: standardizedRow[sessionsCol] ? parseInt(standardizedRow[sessionsCol], 10) : 0,
          users: standardizedRow[usersCol] ? parseInt(standardizedRow[usersCol], 10) : 0
        };

        // Ajouter le taux de rebond s'il existe
        if (standardizedRow[bounceRateCol]) {
          const bounceRate = standardizedRow[bounceRateCol].replace('%', '');
          if (isPercentage(bounceRate)) {
            analyticsData.bounceRate = parseFloat(bounceRate);
          }
        }

        // Ajouter les données optionnelles si présentes
        const pageviewsCol = findHeaderMatch(headers, ['pageviews', 'pageview', 'pages vues']);
        const timeOnPageCol = findHeaderMatch(headers, ['timeonpage', 'temps sur page', 'time']);

        if (pageviewsCol && standardizedRow[pageviewsCol] && isPositiveNumber(standardizedRow[pageviewsCol])) {
          analyticsData.pageviews = parseInt(standardizedRow[pageviewsCol], 10);
        }

        if (timeOnPageCol && standardizedRow[timeOnPageCol] && isPositiveNumber(standardizedRow[timeOnPageCol])) {
          analyticsData.timeOnPage = parseFloat(standardizedRow[timeOnPageCol]);
        }

        validData.push(analyticsData);
      } catch (error) {
        errors.push({
          row: index + 1,
          column: 'global',
          message: `Erreur lors de l'analyse de la ligne: ${error instanceof Error ? error.message : String(error)}`
        });
      }
    });
  }
  // Si le format n'est pas reconnu, mais qu'il a au moins quelques colonnes
  else {
    // Essayer de traiter les données de manière générique
    filteredData.forEach((row, index) => {
      try {
        const standardizedRow: Record<string, string> = {};
        Object.entries(row).forEach(([key, value]) => {
          standardizedRow[key.toLowerCase().trim()] = value;
        });
        
        const rowNumber = index + 1;
        
        // Trouver des colonnes qui pourraient être utilisées comme identifiants et métriques
        let pathColumn = findHeaderMatch(headers, ['chemin', 'path', 'url', 'page', 'date']);
        let viewsColumn = findHeaderMatch(headers, ['vues', 'views', 'impressions', 'clics', 'sessions']);
        
        // Si rien n'est trouvé, utiliser la première colonne comme chemin
        if (!pathColumn && headers.length > 0) {
          pathColumn = headers[0];
        }
        
        // Utiliser la première colonne numérique comme vues
        if (!viewsColumn) {
          for (const header of headers) {
            if (standardizedRow[header] && 
                standardizedRow[header] !== '-' && 
                isPositiveNumber(standardizedRow[header])) {
              viewsColumn = header;
              break;
            }
          }
        }
        
        const path = standardizedRow[pathColumn];
        let views = standardizedRow[viewsColumn];
        
        // Gérer les valeurs vides ou "-" comme zéro
        views = !views || views === '-' ? '0' : views;
        
        const analyticsData: AnalyticsData = {
          path: path || `row_${rowNumber}`,
          views: parseFloat(views) || 0,
          activeUsers: 0,
          averageEngagementTime: 0
        };
        
        // Ajouter toutes les autres colonnes comme propriétés
        Object.entries(standardizedRow).forEach(([key, value]) => {
          if (key !== pathColumn && key !== viewsColumn) {
            if (value !== '-' && isPositiveNumber(value)) {
              analyticsData[key] = parseFloat(value);
            } else if (value !== '-') {
              analyticsData[key] = value;
            }
          }
        });
        
        validData.push(analyticsData);
      } catch (error) {
        errors.push({
          row: index + 1,
          column: 'global',
          message: `Erreur lors de l'analyse de la ligne: ${error instanceof Error ? error.message : String(error)}`
        });
      }
    });
  }
  
  return {
    data: validData,
    errors,
    isValid: errors.length === 0 || validData.length > 0 // On considère que c'est valide s'il y a au moins des données valides
  };
};

/**
 * Trouve la correspondance d'en-tête parmi les en-têtes possibles
 */
function findHeaderMatch(headers: string[], possibleMatches: string[]): string {
  for (const match of possibleMatches) {
    const foundHeader = headers.find(h => h.includes(match.toLowerCase()));
    if (foundHeader) return foundHeader;
  }
  return '';
}

/**
 * Parse un fichier CSV et retourne les données
 * @param file Le fichier CSV à analyser
 * @returns Les données CSV parsées et validées
 */
export const parseCSVFile = (file: File): Promise<CSVImportResult> => {
  console.log(`Parsing CSV file: ${file.name}, size: ${file.size}bytes, type: ${file.type}`);
  
  return new Promise((resolve, reject) => {
    try {
      // Configuration de l'analyseur Papa Parse
      const config = {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header: string) => header.trim(),
        encoding: 'UTF-8',
        complete: (result: Papa.ParseResult<Record<string, string>>) => {
          console.log(`CSV Parse complete: ${result.data.length} rows, ${result.errors.length} parse errors`);
          
          if (result.errors.length > 0) {
            console.warn('Parse errors:', result.errors);
          }
          
          // Même en cas d'erreurs, on continue avec les données valides
          if (result.data.length > 0) {
            try {
              // Afficher un échantillon des données pour le débogage
              if (result.data.length > 0) {
                console.log('Sample data (first row):', result.data[0]);
              }
              
              // Valider les données et les transformer au format attendu
              const validationResult = validateCSVData(result.data);
              console.log(`Validation complete: ${validationResult.data.length} valid rows, ${validationResult.errors.length} validation errors`);
              
              resolve(validationResult);
            } catch (validationError) {
              console.error('Error during validation:', validationError);
              reject(validationError);
            }
          } else {
            // Si aucune donnée valide n'a été trouvée
            const error = new Error('Aucune donnée valide trouvée dans le fichier CSV');
            console.error(error);
            reject(error);
          }
        },
        error: (error: Error) => {
          console.error('Papa Parse error:', error);
          reject(error);
        }
      };

      // Essayer de détecter le délimiteur automatiquement
      Papa.parse(file, config);
      
    } catch (error) {
      console.error('Unexpected error during CSV parsing:', error);
      reject(error);
    }
  });
};

/**
 * Convertit les données brutes en format AnalyticsData
 */
function convertToAnalyticsData(parsedData: Record<string, string>[]): AnalyticsData[] {
  return parsedData
    .map((item, index) => {
      // Trouver la colonne qui contient le chemin de page
      let pathColumn = '';
      let pathValue = '';
      
      Object.entries(item).forEach(([key, value]) => {
        if (
          (key.toLowerCase().includes('page') || 
           key.toLowerCase().includes('chemin') || 
           key.toLowerCase().includes('path') || 
           key.toLowerCase().includes('écran')) && 
          value
        ) {
          pathColumn = key;
          pathValue = value;
        }
      });
      
      // S'il n'y a pas de colonne de chemin, utiliser la première colonne ou un index
      if (!pathValue) {
        const firstKey = Object.keys(item)[0];
        pathValue = item[firstKey] || `item_${index}`;
      }
      
      const analyticsData: AnalyticsData = {
        path: pathValue,
        views: 0,
        activeUsers: 0,
        averageEngagementTime: 0
      };
      
      // Parcourir toutes les colonnes pour trouver des métriques
      Object.entries(item).forEach(([key, value]) => {
        if (key !== pathColumn && value) {
          // Nettoyer et convertir en nombre si possible
          const cleanValue = value.replace(/\s/g, '').replace(',', '.');
          const numValue = parseFloat(cleanValue);
          
          if (!isNaN(numValue)) {
            // Affecter aux métriques appropriées selon le nom de colonne
            if (key.toLowerCase().includes('utilisateur') || key.toLowerCase().includes('user')) {
              analyticsData.activeUsers = numValue;
            } else if (
              key.toLowerCase().includes('session') || 
              key.toLowerCase().includes('vue') || 
              key.toLowerCase().includes('view') || 
              key.toLowerCase().includes('affichage')
            ) {
              analyticsData.views = numValue;
            } else if (
              key.toLowerCase().includes('engagement') || 
              key.toLowerCase().includes('durée') || 
              key.toLowerCase().includes('temps') || 
              key.toLowerCase().includes('time')
            ) {
              analyticsData.averageEngagementTime = numValue;
            } else {
              // Stocker comme métrique générique
              analyticsData[key] = numValue;
            }
          } else {
            // Stocker la valeur comme chaîne
            analyticsData[key] = value;
          }
        }
      });
      
      return analyticsData;
    })
    .filter(item => {
      // Filtrer les entrées sans métriques
      return item.views > 0 || item.activeUsers > 0 || 
        Object.values(item).some(v => typeof v === 'number' && v > 0);
    });
}

/**
 * Convertit les données Google Analytics brutes en format AnalyticsData
 */
function convertGoogleAnalyticsData(data: Record<string, unknown>[]): AnalyticsData[] {
  // Filtrer les entrées qui ne sont pas des objets ou qui sont des métadonnées
  const validRows = data.filter(row => {
    if (typeof row !== 'object' || row === null) return false;
    
    // Vérifier s'il y a au moins une propriété non-métadonnée
    return Object.keys(row).some(key => !key.startsWith('#'));
  });
  
  console.log("Lignes valides trouvées:", validRows.length);
  
  // Analyser les données
  return validRows
    .map((row, index) => {
      const analyticsData: AnalyticsData = {
        path: `row_${index}`,
        views: 0,
        activeUsers: 0,
        averageEngagementTime: 0
      };
      
      // Extraire les données utiles
      Object.entries(row).forEach(([key, value]) => {
        // Ignorer les clés de métadonnées
        if (key.startsWith('#')) return;
        
        // Trouver le chemin de la page
        if (
          (key.toLowerCase().includes('page') || 
           key.toLowerCase().includes('chemin') || 
           key.toLowerCase().includes('path') || 
           key.toLowerCase().includes('écran')) && 
          typeof value === 'string' && 
          value.trim()
        ) {
          analyticsData.path = value.trim();
          return;
        }
        
        // Si la clé ressemble à "Source / Support" ou similaire, l'utiliser comme chemin
        if (
          (key.toLowerCase().includes('source') || 
           key.toLowerCase().includes('canal') || 
           key.toLowerCase().includes('medium') || 
           key.toLowerCase().includes('support')) && 
          typeof value === 'string' && 
          value.trim()
        ) {
          analyticsData.path = value.trim();
        }
        
        // Pour les métriques numériques
        if (typeof value === 'string') {
          // Nettoyer la valeur
          const cleanValue = value.trim().replace(/\s/g, '').replace(',', '.');
          const numValue = parseFloat(cleanValue);
          
          if (!isNaN(numValue)) {
            // Affecter aux métriques appropriées selon le nom de colonne
            if (key.toLowerCase().includes('utilisateur') || key.toLowerCase().includes('user')) {
              analyticsData.activeUsers = numValue;
            } else if (
              key.toLowerCase().includes('session') || 
              key.toLowerCase().includes('vue') || 
              key.toLowerCase().includes('view') || 
              key.toLowerCase().includes('affichage')
            ) {
              analyticsData.views = numValue;
            } else if (
              key.toLowerCase().includes('engagement') || 
              key.toLowerCase().includes('durée') || 
              key.toLowerCase().includes('temps') || 
              key.toLowerCase().includes('time')
            ) {
              analyticsData.averageEngagementTime = numValue;
            } else if (
              key.toLowerCase().includes('clicks') || 
              key.toLowerCase().includes('clics')
            ) {
              analyticsData.clicks = numValue;
            } else {
              // Stocker comme métrique générique
              analyticsData[key] = numValue;
            }
          } else if (value.trim()) {
            // Stocker comme chaîne si non-vide
            analyticsData[key] = value.trim();
          }
        }
      });
      
      return analyticsData;
    })
    .filter(item => {
      // Ne garder que les entrées avec au moins une métrique ou un chemin significatif
      return (
        item.path !== `row_${item.path.substr(4)}` || // Pas un chemin généré automatiquement
        item.views > 0 || 
        item.activeUsers > 0 || 
        Object.values(item).some(v => typeof v === 'number' && v > 0)
      );
    });
}

/**
 * Génère des statistiques récapitulatives à partir des données d'analytics
 */
export const generateAnalyticsSummary = (data: AnalyticsData[]): AnalyticsDataSummary => {
  if (data.length === 0) {
    return {
      totalViews: 0,
      totalUsers: 0,
      avgEngagementTime: 0,
      totalPaths: 0,
      mostVisitedPath: ''
    };
  }

  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  const totalUsers = data.reduce((sum, item) => sum + (item.activeUsers || 0), 0);
  
  // Calculer le temps d'engagement moyen pondéré par les vues
  const engagementTimeSum = data.reduce((sum, item) => 
    sum + (item.averageEngagementTime || 0) * item.views, 0);
  const avgEngagementTime = totalViews ? engagementTimeSum / totalViews : 0;

  // Trouver le chemin le plus visité
  let mostVisitedPath = '';
  let maxViews = 0;
  
  for (const item of data) {
    if (item.views > maxViews) {
      maxViews = item.views;
      mostVisitedPath = item.path;
    }
  }

  return {
    totalViews,
    totalUsers,
    avgEngagementTime,
    totalPaths: data.length,
    mostVisitedPath
  };
};

/**
 * Génère un exemple de données CSV pour tester
 */
export const generateSampleCSVData = (): string => {
  // Exemple au format Search Console
  const header = "Chemin de la page,Vues,Utilisateurs actifs,Durée d'engagement moyenne,Nombre d'événements\n";
  const rows = [
    "/,32364,21197,22.29,100891",
    "/la-carte,13706,10593,42.12,31513",
    "/en,12673,7865,31.53,31566",
    "/en/la-carte,5839,4341,51.37,11317",
    "/en/our-experience,2910,1717,66.25,5631",
    "/nos-experiences,2629,1790,46.99,5065"
  ];
  
  return header + rows.join("\n");
};

/**
 * Convertit les données d'analytics en CSV pour l'exportation
 */
export const convertToCSV = (data: AnalyticsData[]): string => {
  const csvData = Papa.unparse(data);
  return csvData;
};

/**
 * Valide si la valeur est un nombre positif
 */
function isPositiveNumber(value: string): boolean {
  const number = parseFloat(value);
  return !isNaN(number) && number >= 0;
}

/**
 * Valide si la valeur est un pourcentage (0-100%)
 */
function isPercentage(value: string): boolean {
  // Supprimer le symbole % s'il est présent
  const cleanValue = value.replace('%', '').trim();
  const number = parseFloat(cleanValue);
  return !isNaN(number) && number >= 0 && number <= 100;
} 