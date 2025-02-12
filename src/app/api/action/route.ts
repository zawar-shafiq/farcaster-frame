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
      <body>
        <h1>Action Completed!</h1>
        <p>You've clicked the button successfully.</p>
      </body>
    </html>
  `, 
    { headers: { "Content-Type": "text/html" } }
  );
}