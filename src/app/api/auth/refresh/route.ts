import { parseAuthCookie } from "@/app/user/route";

export async function POST(request: Request) {
    const refreshToken = parseAuthCookie(request.headers.get('cookie'));
}