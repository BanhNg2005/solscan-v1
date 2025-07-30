// This logic ensures the base URL is always correct, without a trailing slash.
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3001')).replace(/\/+$/, '');

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
            const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            return await response.json();
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
            const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            return await response.json();
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
            const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
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
            const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
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