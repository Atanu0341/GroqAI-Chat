
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Middleware function with Clerk
export default clerkMiddleware((auth, req) => {
  const { userId } = auth(); // Get user ID from Clerk authentication
  const currentUrl = new URL(req.url);
  const { pathname } = currentUrl;

  // Block access to /signup if the user is logged in
  if (userId && pathname.startsWith("/sign-up")) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect logged-in users away from /signup
  }

  // Block access to /chat if the user is not logged in
  if (!userId && pathname.startsWith("/groq")) {
    return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect not logged-in users to sign-in
  }

  // Allow the request to proceed
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all pages except static files (_next) and API routes
    "/", 
    "/groq", // Ensure chat is explicitly handled
    "/sign-up", // Ensure signup is explicitly handled
  ],
};
