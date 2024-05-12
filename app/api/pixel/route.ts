export const dynamic = "force-dynamic"; // defaults to auto

interface CustomerData {
  name: string;
  code: string;
  pageviews: number;
}

let customerData: Record<string, CustomerData> = {};

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const code = queryParams.get("code");
  const customerName = queryParams.get("customerName");

  if (customerName) {
    if (!customerData[customerName]) {
      customerData[customerName] = {
        name: customerName,
        code: code || "", // Kod varsa, kodu ata; yoksa boş bir değer ata
        pageviews: 1,
      };
    } else {
      customerData[customerName].pageviews += 1;
    }
  } else if (code) {
    const matchedCustomer = Object.values(customerData).find(customer => customer.code === code);
    if (matchedCustomer) {
      // Eğer müşteri bulunduysa, sayfa görüntüleme sayısını artır
      matchedCustomer.pageviews += 1;
    }
  }

  const responseData = {
    customerData,
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
