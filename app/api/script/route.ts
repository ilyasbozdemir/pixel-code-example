export const dynamic = "force-dynamic"; // defaults to auto

let codePageViews: Record<string, number> = {};

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const code = queryParams.get("code");
/*
  const scriptCode = `
    
`;
*/

const scriptCode = `
// Js Code
alert('Sunucuya gönderilen code değeri : ${code}');

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
