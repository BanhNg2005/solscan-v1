import { NextResponse } from 'next/server';
import { parseAuthCookie, verifyJwt } from '@/app/utils/jwt';

export async function GET(request: Request) {
    // Get the JWT from the cookie
    const token = await parseAuthCookie();

    // If the token is not present, redirect to the signin page
    if (!token) {
        const url = new URL('/user/signin', request.url);
        return NextResponse.redirect(url);
    }

    // Verify the JWT
    const payload = await verifyJwt(token);

    // If the token is invalid, redirect to the signin page
    if (!payload) {
        const url = new URL('/user/signin', request.url);
        return NextResponse.redirect(url);
    }

    // Return the user data
    return NextResponse.json({ user: payload });
}