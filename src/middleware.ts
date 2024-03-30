import { NextRequest, NextResponse } from "next/server";
    
export default function ola(request: NextRequest) {
    const token = request.cookies.get('driverToken')?.value
    const signInURL = new URL('/driver/login', request.url)
    if (!token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.next()
        }
        return NextResponse.redirect(signInURL)
    }
}

export const config = {
    matcher: ['/dashboard/:path*']
}
