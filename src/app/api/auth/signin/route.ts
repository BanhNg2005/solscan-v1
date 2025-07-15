import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { SignJWT } from 'jose';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        const connection = await mysql.createConnection(dbConfig);

        // Check if user exists
        const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
        const user = (rows as any[])[0];

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        // Create JWT token
        const token = await new SignJWT({
            userId: user.id,
            email: user.email,
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(secret);

        await connection.end();

        // Create response and set cookie
        const response = NextResponse.json({ 
            message: "Signin successful", 
            userId: user.id 
        }, { status: 200 });

        // Set HTTP-only cookie
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/'
        });

        return response;
    } catch (error) {
        console.error("Error during signin:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}