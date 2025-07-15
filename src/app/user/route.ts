import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function parseAuthCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  
  const cookies = cookieHeader.split(';').map(cookie => cookie.trim());
  const authCookie = cookies.find(cookie => cookie.startsWith('auth='));
  
  return authCookie ? authCookie.split('=')[1] : null;
}

export function verifyJwt(token: string): { userId: string; username: string } | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    return { userId: payload.userId, username: payload.username };
  } catch (error) {
    return null;
  }
}