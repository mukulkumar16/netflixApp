//@ts-nocheck




import { NextResponse } from "next/server";


export default function middleware(req) {
  const user = req.cookies.get('user')?.value;
  const pathname = req.nextUrl.pathname;

  const protectedPaths = [ '/profile', '/searchresult', '/search', '/movie'];

  const isProtected = protectedPaths.some((path) =>
    pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isProtected && !user) {
    return NextResponse.redirect(new URL('/form', req.url));
  }

  return NextResponse.next();
}
