import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta property="og:title" content="My Farcaster Frame" />
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:button:1" content="Click Me" />
        <meta property="fc:action:1" content="https://yourdomain.com/api/action" />
      </head>
      <body></body>
    </html>
  `, 
    { headers: { "Content-Type": "text/html" } }
  );
}