import type {NextAuthConfig} from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
    pages: (
        {
            signIn: "/user/signin",
            error: "/user/signin", // Error code passed in query string as ?error=
        } 
    ), 
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            // If the user is authenticated, allow access to the page
            if (auth?.user) {
                return true;
            }

            // If the user is not authenticated, redirect to the sign-in page
            nextUrl.pathname = "/user/signin";
            return NextResponse.redirect(nextUrl);
        }
    },
} as NextAuthConfig;