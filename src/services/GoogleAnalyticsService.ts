// Types pour les données d'analytics
interface AnalyticsMetrics {
  sessions: number;
  users: number;
  ctr?: number;
  clicks?: number;
}

interface DateRange {
  startDate: string;
  endDate: string;
}

interface GoogleAnalyticsParams {
  viewId: string;
  dateRange: DateRange;
}

interface SearchConsoleParams {
  siteUrl: string;
  dateRange: DateRange;
}

// Types pour les réponses d'API
interface AnalyticsResponse {
  result: {
    rows: Array<{
      metricValues: Array<{
        value: string;
      }>;
    }>;
  };
}

interface SearchConsoleResponse {
  result: {
    rows: Array<{
      clicks: number;
      ctr: number;
    }>;
  };
}

// Clé client pour OAuth 2.0
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || '';
const SCOPES = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/webmasters.readonly'
];

class GoogleAnalyticsService {
  private isInitialized: boolean = false;
  private tokenClient: ReturnType<typeof window.google.accounts.oauth2.initTokenClient> | null = null;

  /**
   * Initialiser le client Google
   */
  async initialize(): Promise<void> {
    console.log('Initialisation du service Google Analytics...');
    if (this.isInitialized) return;

    return new Promise((resolve, reject) => {
      try {
        // Charger la bibliothèque Google API dynamiquement
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log('Bibliothèque Google chargée');
          this.loadGapiAndInit().then(resolve).catch(reject);
        };
        script.onerror = (error) => {
          console.error('Erreur lors du chargement de la bibliothèque Google:', error);
          reject(error);
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Erreur d\'initialisation:', error);
        reject(error);
      }
    });
  }

  /**
   * Charger la bibliothèque GAPI et initialiser
   */
  private async loadGapiAndInit(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('GAPI chargé');
        // Initialiser la bibliothèque GAPI
        window.gapi.load('client', async () => {
          try {
            await window.gapi.client.init({
              apiKey: API_KEY,
              discoveryDocs: [
                'https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta',
                'https://www.googleapis.com/discovery/v1/apis/webmasters/v3/rest'
              ]
            });
            
            // Initialiser le client de token pour OAuth 2.0
            this.tokenClient = window.google.accounts.oauth2.initTokenClient({
              client_id: CLIENT_ID,
              scope: SCOPES.join(' '),
              callback: (response: { error?: string }) => {
                if (response.error) {
                  console.error('Erreur d\'authentification:', response);
                  reject(response.error);
                } else {
                  console.log('Authentification réussie');
                  this.isInitialized = true;
                  resolve();
                }
              }
            });
            
          } catch (error) {
            console.error('Erreur d\'initialisation de GAPI:', error);
            reject(error);
          }
        });
      };
      script.onerror = (error) => {
        console.error('Erreur lors du chargement de GAPI:', error);
        reject(error);
      };
      document.head.appendChild(script);
    });
  }

  /**
   * S'authentifier auprès de Google
   */
  async authenticate(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    return new Promise((resolve, reject) => {
      try {
        if (window.gapi.client.getToken()) {
          // Déjà authentifié
          resolve();
          return;
        }
        
        // Demander l'authentification
        this.tokenClient?.requestAccessToken();
        resolve();
      } catch (error) {
        console.error('Erreur d\'authentification:', error);
        reject(error);
      }
    });
  }

  /**
   * Se déconnecter de Google
   */
  signOut(): void {
    if (window.gapi.client.getToken()) {
      const token = window.gapi.client.getToken();
      if (token) {
        window.google.accounts.oauth2.revoke(token.access_token, () => {
          window.gapi.client.setToken(null);
          console.log('Déconnecté de Google');
        });
      }
    }
  }

  /**
   * Obtenir les métriques de Google Analytics pour les 30 derniers jours
   */
  async getAnalyticsData(params: GoogleAnalyticsParams): Promise<AnalyticsMetrics> {
    await this.authenticate();
    
    try {
      // Utiliser l'API Google Analytics Data (GA4)
      const response = await window.gapi.client.analyticsdata.properties.runReport({
        property: `properties/${params.viewId}`,
        dateRanges: [
          {
            startDate: params.dateRange.startDate,
            endDate: params.dateRange.endDate
          }
        ],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' }
        ]
      }) as unknown as AnalyticsResponse;
      
      const metrics = response.result.rows[0].metricValues;
      
      return {
        sessions: parseInt(metrics[0].value, 10),
        users: parseInt(metrics[1].value, 10)
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des données Analytics:', error);
      throw error;
    }
  }

  /**
   * Obtenir les métriques de Search Console pour les 30 derniers jours
   */
  async getSearchConsoleData(params: SearchConsoleParams): Promise<AnalyticsMetrics> {
    await this.authenticate();
    
    try {
      // Utiliser l'API Search Console
      const response = await window.gapi.client.webmasters.searchanalytics.query({
        siteUrl: params.siteUrl,
        requestBody: {
          startDate: params.dateRange.startDate,
          endDate: params.dateRange.endDate,
          dimensions: [],
          aggregationType: 'auto'
        }
      }) as unknown as SearchConsoleResponse;
      
      const data = response.result.rows[0];
      
      return {
        sessions: 0, // N/A pour Search Console
        users: 0, // N/A pour Search Console
        clicks: data.clicks,
        ctr: data.ctr
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des données Search Console:', error);
      throw error;
    }
  }

  /**
   * Obtenir les métriques combinées pour les 30 derniers jours
   */
  async getCombinedData(analyticsParams: GoogleAnalyticsParams, searchParams: SearchConsoleParams): Promise<AnalyticsMetrics> {
    try {
      const [analyticsData, searchData] = await Promise.all([
        this.getAnalyticsData(analyticsParams),
        this.getSearchConsoleData(searchParams)
      ]);
      
      return {
        ...analyticsData,
        ...searchData
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des données combinées:', error);
      throw error;
    }
  }

  /**
   * Obtenir les dates pour les 30 derniers jours
   */
  getLast30Days(): DateRange {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    return {
      startDate: this.formatDate(startDate),
      endDate: this.formatDate(endDate)
    };
  }
  
  /**
   * Formater une date au format YYYY-MM-DD
   */
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

// Créer une instance singleton du service
const googleAnalyticsService = new GoogleAnalyticsService();

export default googleAnalyticsService; 