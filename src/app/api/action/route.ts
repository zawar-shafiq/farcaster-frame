import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("Frame action triggered:", request.url);

  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta property="og:title" content="Action Completed!" />
        <meta property="og:image" content="https://yourdomain.com/success.png" />
      </head>
      <body></body>
    </html>
  `, 
    { headers: { "Content-Type": "text/html" } }
  );
}