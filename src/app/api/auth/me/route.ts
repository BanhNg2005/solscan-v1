import { NextResponse } from 'next/server';
import { parseAuthCookie, verifyJwt } from '@/app/utils/jwt';

export async function GET() {
    try {
        const token = await parseAuthCookie();

        if (!token) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const payload = await verifyJwt(token);

        if (!payload) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        return NextResponse.json({ 
            user: {
                id: payload.userId,
                email: payload.email
            }
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}