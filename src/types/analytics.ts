export interface AnalyticsData {
  // Champs obligatoires
  path: string;                     // Chemin de la page
  views: number;                    // Vues (dans le format Search Console)
  activeUsers: number;              // Utilisateurs actifs
  averageEngagementTime: number;    // Durée d'engagement (temps passé sur la page)
  
  // Champs optionnels ou anciens (pour la rétrocompatibilité)
  date?: string;                   // Date (pour l'ancien format)
  sessions?: number;               // Sessions (pour l'ancien format)
  users?: number;                  // Utilisateurs (pour l'ancien format)
  bounceRate?: number;             // Taux de rebond (pour l'ancien format)
  pageviews?: number;              // Pages vues
  timeOnPage?: number;             // Temps sur page
  eventCount?: number;             // Nombre d'événements
  eventClicks?: number;            // Événements clés
  revenue?: number;                // Revenu total
  
  // Accepter d'autres propriétés
  [key: string]: string | number | undefined;
}

export interface AnalyticsColumn {
  id: string;
  header: string;
  accessor: keyof AnalyticsData | ((row: AnalyticsData) => string | number);
  isNumeric?: boolean;
  sortable?: boolean;
  filterable?: boolean;
}

export interface CSVValidationError {
  row: number;
  column: string;
  message: string;
}

export interface CSVImportResult {
  data: AnalyticsData[];
  errors: CSVValidationError[];
  isValid: boolean;
}

export interface AnalyticsDataSummary {
  totalViews: number;          // Total des vues
  totalUsers: number;          // Total des utilisateurs
  avgEngagementTime: number;   // Temps d'engagement moyen
  totalPaths: number;          // Nombre total de chemins
  mostVisitedPath: string;     // Chemin le plus visité
} 