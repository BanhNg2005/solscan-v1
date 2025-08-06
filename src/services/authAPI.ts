// Environment-aware API base URL configuration
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

export const authAPI = {
    /**
     * Sign in user
     */
    signin: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            
            console.log('Signin response status:', response.status);
            const data = await response.json();
            console.log('Signin response data:', data);
            return data;
        } catch (error) {
            console.error('Signin error:', error);
            return { error: 'Network error' };
        }
    },

    /**
     * Sign up user
     */
    signup: async (email: string, password: string): Promise<AuthResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            
            console.log('Signup response status:', response.status);
            const data = await response.json();
            console.log('Signup response data:', data);
            return data;
        } catch (error) {
            console.error('Signup error:', error);
            return { error: 'Network error' };
        }
    },

    /**
     * Log out user
     */
    logout: async (): Promise<AuthResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Logout error:', error);
            return { error: 'Network error' };
        }
    },

    /**
     * Verify current user token
     */
    verify: async (): Promise<VerifyResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/verify`, {
                credentials: 'include'
            });
            return await response.json();
        } catch (error) {
            console.error('Verify error:', error);
            return { error: 'Network error' };
        }
    },
};

export default authAPI;