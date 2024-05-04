export const dynamic = "force-dynamic"; // defaults to auto

let codePageViews: Record<string, number> = {};

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const code = queryParams.get("code");

  if (code) {
    codePageViews[code] = (codePageViews[code] || 0) + 1;
  }

  const responseData = {
    codePageViews,
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
