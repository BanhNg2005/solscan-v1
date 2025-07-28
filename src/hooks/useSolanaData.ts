import { useState, useEffect, useCallback } from 'react';
import { solanaApi, SolanaData } from '../services/solanaApi';

interface UseSolanaDataOptions {
  refreshInterval?: number; // in milliseconds
  autoRefresh?: boolean;
}

interface UseSolanaDataReturn {
  data: SolanaData | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  lastUpdated: Date | null;
}

export const useSolanaData = (options: UseSolanaDataOptions = {}): UseSolanaDataReturn => {
  const { refreshInterval = 30000, autoRefresh = true } = options; // Default: 30 seconds
  
  const [data, setData] = useState<SolanaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      if (!data) setLoading(true); // Only show loading on initial load
      
      const result = await solanaApi.getAllData();
      setData(result);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      console.error('Error fetching Solana data:', err);
    } finally {
      setLoading(false);
    }
  }, [data]);

  const refresh = useCallback(async () => {
    setLoading(true);
    await fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval, autoRefresh]);

  return {
    data,
    loading,
    error,
    refresh,
    lastUpdated,
  };
};

// Hook for individual data types
import { SolSupply, EpochInfo, NetworkStats, StakeInfo } from '../services/solanaApi';

export const useSolSupply = () => {
  const [data, setData] = useState<SolSupply | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const supply = await solanaApi.getSolSupply();
        setData(supply);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch supply data');
      } finally {
        setLoading(false);
      }
    };

    fetchSupply();
  }, []);

  return { data, loading, error };
};

export const useEpochInfo = () => {
  const [data, setData] = useState<EpochInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpoch = async () => {
      try {
        const epoch = await solanaApi.getEpochInfo();
        setData(epoch);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch epoch data');
      } finally {
        setLoading(false);
      }
    };

    fetchEpoch();
  }, []);

  return { data, loading, error };
};

export const useNetworkStats = () => {
  const [data, setData] = useState<NetworkStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNetwork = async () => {
      try {
        const network = await solanaApi.getNetworkStats();
        setData(network);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch network data');
      } finally {
        setLoading(false);
      }
    };

    fetchNetwork();
  }, []);

  return { data, loading, error };
};

export const useStakeInfo = () => {
  const [data, setData] = useState<StakeInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStake = async () => {
      try {
        const stake = await solanaApi.getStakeInfo();
        setData(stake);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stake data');
      } finally {
        setLoading(false);
      }
    };

    fetchStake();
  }, []);

  return { data, loading, error };
};
