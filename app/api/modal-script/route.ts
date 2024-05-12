export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, response: Response) {
  const scriptCode = `
    // JavaScript kodu - Modal veya popup oluşturma
    function openModal() {
      // Modal veya popup içeriği
      const modalContent = '<div style="background-color: white; padding: 20px;">Bu bir modal içeriğidir. Kapatmak için <button onclick="closeModal()">buraya tıklayın</button></div>';
      
      // Modal veya popup elementi oluşturma
      const modalElement = document.createElement('div');
      modalElement.innerHTML = modalContent;
      modalElement.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.5); z-index: 1000; padding: 20px;';

      // Modalı sayfaya ekleme
      document.body.appendChild(modalElement);
    }

    function closeModal() {
      const modalElement = document.querySelector('.modal');
      if (modalElement) {
        modalElement.remove();
      }
    }
  `;

  return new Response(scriptCode, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
