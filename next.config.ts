import type { NextConfig } from "next";

// Next.js App Router injects its own inline <script> tags on every page for
// React Server Component hydration (`self.__next_f.push(...)`) — their content
// differs per request/page, so they can't be pinned with a fixed SHA-256 hash,
// and a hash-only script-src (no 'unsafe-inline' fallback) silently blocks them,
// breaking hydration entirely (blank content, stuck loading states, dead JS).
// A nonce-based CSP is the only way to allow those *and* keep 'unsafe-inline'
// off, but it requires per-request dynamic rendering everywhere. For this
// mostly-static catalog site we take the standard, static-rendering-compatible
// tradeoff instead: 'unsafe-inline' on script-src, with the external-domain
// allowlist still restricting which *third-party* script origins can load.
const CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://storage.googleapis.com https://www.facebook.com;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com;
  frame-src 'self' https://www.googletagmanager.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  // CSP is skipped in development: Turbopack/webpack's dev runtime (HMR,
  // React Refresh, the error overlay) relies on inline/eval'd scripts that
  // don't matter for a non-public dev server, and gating it here avoids
  // fighting the dev toolchain for zero real security benefit.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: CSP }]
    : []),
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Next.js only serves qualities explicitly allowlisted here; 75 is the
    // built-in default and 80 is what the shrine/review carousel images request.
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/poonsinshop-images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
