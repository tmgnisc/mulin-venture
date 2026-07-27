import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next|_next/static|_next/image|favicon|icon\\.png|logo|brand).*)',
  ],
}