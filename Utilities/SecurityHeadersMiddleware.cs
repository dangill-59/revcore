using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System.Threading.Tasks;

namespace Utilities
{
    /// <summary>
    /// Middleware that adds security headers to HTTP responses to protect against common web vulnerabilities.
    /// </summary>
    public class SecurityHeadersMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IWebHostEnvironment _environment;

        public SecurityHeadersMiddleware(RequestDelegate next, IWebHostEnvironment environment)
        {
            _next = next;
            _environment = environment;
        }

        public async Task Invoke(HttpContext context)
        {
            // X-Frame-Options: Prevent clickjacking attacks
            // DENY: prevents any domain from framing the content
            // Alternative: SAMEORIGIN (allows only same origin)
            context.Response.Headers["X-Frame-Options"] = "SAMEORIGIN";

            // X-Content-Type-Options: Prevent MIME sniffing
            // Ensures browsers respect the declared Content-Type
            context.Response.Headers["X-Content-Type-Options"] = "nosniff";

            // X-XSS-Protection: Enable browser XSS filtering (legacy browsers)
            // Modern browsers use CSP instead, but this provides backward compatibility
            context.Response.Headers["X-XSS-Protection"] = "1; mode=block";

            // Referrer-Policy: Control referrer information
            // strict-origin-when-cross-origin: Send full URL for same-origin, origin only for cross-origin
            context.Response.Headers["Referrer-Policy"] = "strict-origin-when-cross-origin";

            // Permissions-Policy: Control browser features
            // Restricts access to sensitive APIs (geolocation, camera, microphone, etc.)
            context.Response.Headers["Permissions-Policy"] =
                "geolocation=(), camera=(), microphone=(), payment=()";

            // Content-Security-Policy: Mitigate XSS and data injection attacks
            // This is a balanced policy that allows the application to function while providing security
            // Note: May need adjustment based on specific application requirements

            // In development, allow HTTP localhost for local testing
            // In production, enforce HTTPS only
            string imgSrc = _environment.IsDevelopment()
                ? "img-src 'self' data: https: http://localhost:*; "
                : "img-src 'self' data: https:; ";

            string connectSrc = _environment.IsDevelopment()
                ? "connect-src 'self' ws: wss: http://localhost:* https://localhost:*; "
                : "connect-src 'self' ws: wss:; ";

            var csp = "default-src 'self'; " +
                      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +  // Allow inline scripts (needed for many SPAs)
                      "style-src 'self' 'unsafe-inline'; " +                  // Allow inline styles
                      imgSrc +                                                 // Environment-aware image sources
                      "font-src 'self' data:; " +                             // Allow fonts from self and data URLs
                      connectSrc +                                             // Environment-aware connect sources
                      "frame-ancestors 'self'; " +                            // Only allow same-origin framing
                      "base-uri 'self'; " +                                   // Restrict base tag URLs
                      "form-action 'self'";                                   // Only allow form submissions to same origin

            context.Response.Headers["Content-Security-Policy"] = csp;

            await _next(context);
        }
    }
}
