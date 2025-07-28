const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface SolSupply {
  total: number;
  circulating: number;
  nonCirculating: number;
  circulatingPercent: number;
  nonCirculatingPercent: number;
}

export interface EpochInfo {
  epoch: number;
  slotIndex: number;
  slotsInEpoch: number;
  absoluteSlot: number;
  blockHeight: number;
  transactionCount: number;
  progressPercent: number;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface NetworkStats {
  totalTransactions: number;
  blockHeight: number;
  slotHeight: number;
  tps: number;
  trueTps: number;
}

export interface StakeInfo {
  totalStake: number;
  currentStake: number;
  currentStakePercent: number;
  delinquentStake: number;
  delinquentStakePercent: number;
}

export interface SolanaData {
  solSupply: SolSupply;
  epochInfo: EpochInfo;
  networkStats: NetworkStats;
  stakeInfo: StakeInfo;
  timestamp: number;
}

class SolanaApiService {
  private async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}/solana/${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'API request failed');
      }
      
      return result.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  async getSolSupply(): Promise<SolSupply> {
    return this.fetchData<SolSupply>('supply');
  }

  async getEpochInfo(): Promise<EpochInfo> {
    return this.fetchData<EpochInfo>('epoch');
  }

  async getNetworkStats(): Promise<NetworkStats> {
    return this.fetchData<NetworkStats>('network');
  }

  async getStakeInfo(): Promise<StakeInfo> {
    return this.fetchData<StakeInfo>('stake');
  }

  async getAllData(): Promise<SolanaData> {
    return this.fetchData<SolanaData>('all');
  }
}

export const solanaApi = new SolanaApiService();

// Utility functions for formatting
export const formatNumber = (num: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

export const formatTimeRemaining = (time: { days: number; hours: number; minutes: number; seconds: number }): string => {
  return `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
};
