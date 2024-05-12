export const dynamic = "force-dynamic"; // defaults to auto
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://pixel-code-example.vercel.app"
    : "http://localhost:3000";

    

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const code = queryParams.get("code");

  const scriptCode = `


  function snq(event, code) {
    if (event === "init") {
      console.log("Tracking initiated for code: " + code);
    } else if (event === "event") {
      sendPixelRequest(code);
    } else {
      console.error("Unsupported event:", event);
    }
  }
  
  async function sendPixelRequest(code) {
    const url = "http://localhost:3000/api/pixel?code=test_user_CODE&customerName=test_user";
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to send pixel request");
      }
      console.log("Pixel request sent successfully.");
    } catch (error) {
      console.error("Error sending pixel request:", error);
    }
  }
`;

  return new Response(scriptCode, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "text/javascript, charset=utf-8",
    },
  });
}
