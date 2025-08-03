const getApiBaseUrl = () => {
    // If explicitly set via environment variable, use that
    if (process.env.NEXT_PUBLIC_API_URL) {
        return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
    }
    
    // Auto-detect based on environment
    if (typeof window !== 'undefined') {
        // Browser environment - detect based on hostname
        const hostname = window.location.hostname;
        
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            // Local development
            return 'http://localhost:3001';
        } else if (hostname === '207.148.74.22') {
            // Production server
            return 'https://207.148.74.22';
        } else {
            // Fallback: use current origin (for custom domains)
            return window.location.origin;
        }
    } else {
        // Server-side rendering fallback
        return process.env.NODE_ENV === 'production' 
            ? 'https://207.148.74.22' 
            : 'http://localhost:3001';
    }
};

const API_BASE_URL = getApiBaseUrl();

export const solanaAPI = {
    /**
     * Get Solana price
     */
    price: async (): Promise<{ price?: number; change24h?: number; error?: string }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/sol/price`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Price fetch error:', error);
            return { error: 'Network error' };
        }
    },

    network: async (): Promise<{ slotHeight?: number; blockHeight?: number; error?: string; }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/sol/network`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Network fetch error:', error);
            return { error: 'Network error' };
        }
    },
    
    fees: async (): Promise<{ avgFee?: string; minFee?: string; maxFee?: string; error?: string; }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/sol/fees`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Fees fetch error:', error);
            return { error: 'Network error' };
        }
    },

  supply: async (): Promise<{ circulatingSupply?: number; circulatingSupplyPercentage?: number; totalSupply?: number; nonCirculatingSupply?: number; nonCirculatingSupplyPercentage?: number; error?: string }> => {
      try {
          const response = await fetch(`${API_BASE_URL}/api/sol/supply`, {
              credentials: 'include'
          });
          return await response.json();
      } catch (error) {
          console.error('Supply fetch error:', error);
          return { error: 'Network error' };
      }
  }
};

export default solanaAPI;