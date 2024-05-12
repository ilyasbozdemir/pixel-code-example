export const dynamic = "force-dynamic"; // defaults to auto
import { promises as fs } from "fs";

export async function GET(request: Request, response: Response) {
  const bundleCode = await fs.readFile(
    process.cwd() + "/src/lib/bundle.js",
    "utf8"
  );

  return new Response(bundleCode, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "text/javascript, charset=utf-8",
    },
  });
}
