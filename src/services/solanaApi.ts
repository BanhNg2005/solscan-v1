// This logic ensures the base URL is always correct, without a trailing slash.
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001').replace(/\/+$/, '');

// ...existing code...

export const solanaAPI = {
    /**
     * Get Solana price
     */
    price: async (): Promise<{ price?: number; change24h?: number; error?: string }> => {
        try {
            // FIX: Add the /api prefix
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
            // FIX: Add the /api prefix
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
            // FIX: Add the /api prefix
            const response = await fetch(`${API_BASE_URL}/api/sol/fees`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Fees fetch error:', error);
            return { error: 'Network error' };
        }
    }
};

export default solanaAPI;