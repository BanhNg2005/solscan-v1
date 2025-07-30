// connect from NodeJS
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface AuthResponse {
    message?: string;
    userId?: number;
    error?: string;
}

export interface VerifyResponse {
    message?: string;
    user?: {
        userId: number;
        email: string;
    };
    error?: string;
}

export const solanaAPI = {
    /**
     * Get Solana price
     */
    price: async (): Promise<{ price?: number; error?: string }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/sol/price`, {
                credentials: 'include'
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Price fetch error:', error);
            return { price: undefined, error: 'Network error' };
        }
    },

    change24h: async (): Promise<{ change24h?: number; error?: string }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/sol/price`, {
                credentials: 'include'
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Change fetch error:', error);
            return { change24h: undefined, error: 'Network error' };
        }
    },

    network: async (): Promise<{ slotHeight?: number; blockHeight?: number; error?: string; }> => {
        try {
            const response = await fetch(`${API_BASE_URL}/sol/network`, {
                credentials: 'include'
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Network fetch error:', error);
            return { slotHeight: undefined, blockHeight: undefined, error: 'Network error' };
        }
    }
};

export default solanaAPI;