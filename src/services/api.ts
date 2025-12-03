import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Créer une instance Axios avec une configuration de base
const api = axios.create({
  baseURL: 'https://api.example.com', // Remplacer par l'URL de l'API réelle
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    // Vous pouvez ajouter un token d'authentification ici
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Gérer les erreurs globalement
    if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code d'état
      // qui ne fait pas partie de la plage 2xx
      console.error('Erreur de réponse:', error.response.status, error.response.data);
      
      // Gérer les erreurs d'authentification
      if (error.response.status === 401) {
        // Rediriger vers la page de connexion ou rafraîchir le token
        console.log('Session expirée, veuillez vous reconnecter');
        // Exemple: window.location.href = '/login';
      }
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Erreur de requête:', error.request);
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error('Erreur:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Type générique pour les données d'API
interface ApiData {
  [key: string]: unknown;
}

// Export des méthodes d'API communes
export const apiService = {
  // Méthodes GET
  getAll: <T = ApiData>(endpoint: string): Promise<AxiosResponse<T>> => api.get<T>(endpoint),
  getById: <T = ApiData>(endpoint: string, id: string | number): Promise<AxiosResponse<T>> => api.get<T>(`${endpoint}/${id}`),
  
  // Méthodes POST
  create: <T = ApiData, D = ApiData>(endpoint: string, data: D): Promise<AxiosResponse<T>> => api.post<T>(endpoint, data),
  
  // Méthodes PUT/PATCH
  update: <T = ApiData, D = ApiData>(endpoint: string, id: string | number, data: D): Promise<AxiosResponse<T>> => api.put<T>(`${endpoint}/${id}`, data),
  partialUpdate: <T = ApiData, D = ApiData>(endpoint: string, id: string | number, data: D): Promise<AxiosResponse<T>> => api.patch<T>(`${endpoint}/${id}`, data),
  
  // Méthode DELETE
  delete: <T = ApiData>(endpoint: string, id: string | number): Promise<AxiosResponse<T>> => api.delete<T>(`${endpoint}/${id}`),
  
  // Méthode personnalisée pour les requêtes complexes
  custom: <T = ApiData>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => api<T>(config)
};

export default api; 