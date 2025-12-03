import { useState, useCallback } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { apiService } from '../services/api';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
}

/**
 * Hook personnalisé pour effectuer des appels API avec gestion d'état
 * @param endpoint - Point de terminaison de l'API
 * @param initialData - Données initiales (optionnel)
 */
export function useApi<T>(endpoint: string, initialData: T | null = null): UseApiResponse<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: initialData,
    loading: false,
    error: null
  });

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: AxiosResponse<T> = await apiService.getAll<T>(endpoint);
      setState({
        data: response.data,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error.message || 'Une erreur est survenue'
      });
    }
  }, [endpoint]);

  const setData = useCallback((newData: React.SetStateAction<T | null>) => {
    setState(prev => ({
      ...prev,
      data: typeof newData === 'function' 
        ? (newData as (prev: T | null) => T | null)(prev.data) 
        : newData
    }));
  }, []);

  return {
    ...state,
    fetchData,
    setData
  };
}

/**
 * Hook pour obtenir une ressource par ID
 */
export function useApiById<T>(
  endpoint: string, 
  id: string | number | null,
  initialData: T | null = null
): UseApiResponse<T> & { fetchById: (newId: string | number) => Promise<void> } {
  const [state, setState] = useState<ApiState<T>>({
    data: initialData,
    loading: false,
    error: null
  });

  const fetchById = useCallback(async (newId: string | number) => {
    if (!newId) return;
    
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: AxiosResponse<T> = await apiService.getById<T>(endpoint, newId);
      setState({
        data: response.data,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error.message || 'Une erreur est survenue'
      });
    }
  }, [endpoint]);

  const fetchData = useCallback(async () => {
    if (id) {
      await fetchById(id);
    }
  }, [id, fetchById]);

  const setData = useCallback((newData: React.SetStateAction<T | null>) => {
    setState(prev => ({
      ...prev,
      data: typeof newData === 'function' 
        ? (newData as (prev: T | null) => T | null)(prev.data) 
        : newData
    }));
  }, []);

  return {
    ...state,
    fetchData,
    fetchById,
    setData
  };
}

/**
 * Hook pour créer une nouvelle ressource
 */
export function useApiCreate<T, D = Record<string, unknown>>(endpoint: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const createData = useCallback(async (data: D) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: AxiosResponse<T> = await apiService.create<T, D>(endpoint, data);
      setState({
        data: response.data,
        loading: false,
        error: null
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error.message || 'Une erreur est survenue'
      });
      throw error;
    }
  }, [endpoint]);

  return {
    ...state,
    createData
  };
}

/**
 * Hook pour mettre à jour une ressource existante
 */
export function useApiUpdate<T, D = Record<string, unknown>>(endpoint: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const updateData = useCallback(async (id: string | number, data: D) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: AxiosResponse<T> = await apiService.update<T, D>(endpoint, id, data);
      setState({
        data: response.data,
        loading: false,
        error: null
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error.message || 'Une erreur est survenue'
      });
      throw error;
    }
  }, [endpoint]);

  return {
    ...state,
    updateData
  };
}

/**
 * Hook pour supprimer une ressource
 */
export function useApiDelete<T>(endpoint: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const deleteData = useCallback(async (id: string | number) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: AxiosResponse<T> = await apiService.delete<T>(endpoint, id);
      setState({
        data: response.data,
        loading: false,
        error: null
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        loading: false,
        error: error.message || 'Une erreur est survenue'
      });
      throw error;
    }
  }, [endpoint]);

  return {
    ...state,
    deleteData
  };
}

export default useApi; 