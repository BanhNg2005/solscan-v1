const getApiBaseUrl = () => {
    // If explicitly set via environment variable, use that
    if (process.env.NEXT_PUBLIC_API_URL) {
        return process.env.NEXT_PUBLIC_API_URL;
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
            return 'https://207.148.74.22/api';
        } else {
            // Fallback: use current origin (for custom domains)
            return window.location.origin;
        }
    } else {
        // Server-side rendering fallback
        return process.env.NODE_ENV === 'production' 
            ? 'https://207.148.74.22/api' 
            : 'http://localhost:3001';
    }
};

const API_BASE_URL = getApiBaseUrl();

export const latestTsxAPI = {
    // get latest 8 transactions in frontend
    latestTxsFE: async (): Promise<{ transactions?: [];signature?: string; slot?: number; time: number; error?: string; }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/txs/latest-frontend`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            return { time: Date.now(), error: 'Network error' };
        }
    },
}