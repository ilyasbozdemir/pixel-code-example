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

// CSS Code
const style = document.createElement('style');
style.textContent = \`
  /* CSS kodu */
  body {
    background-color: green;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
\`;
document.head.appendChild(style);

// Modal HTML oluşturma
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<p>Hello</p>';
document.body.appendChild(modal);
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
