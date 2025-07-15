import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJwt } from '@/app/utils/jwt'

// Define which routes are public and don't require authentication
const publicRoutes = ['/user/signin', '/user/signup'];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    // Get the token from cookies
    const token = request.cookies.get('auth-token')?.value;
    const payload = token ? await verifyJwt(token) : null;

    // If it's a public route
    if (isPublicRoute) {
        // If user is already authenticated and tries to access signin/signup, redirect to home
        if (payload) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    // For protected routes, check for valid token
    if (!payload) {
        const url = request.nextUrl.clone();
        url.pathname = '/user/signin';
        return NextResponse.redirect(url);
    }

    // If authenticated, allow access
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};