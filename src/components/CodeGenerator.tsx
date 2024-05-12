// components/CodeGenerator.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const CodeGenerator: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://pixel-code-example.vercel.app"
      : "http://localhost:3000";

  const generateScriptCode = (code: string) => {
    return `
      <script>
        document.addEventListener("DOMContentLoaded", (event) => {
          console.log("DOM fully loaded and parsed");
        });
      </script>
      <script src="${
        API_BASE_URL + `/api/pixel?code=${encodeURIComponent(code)}`
      }">
      </script>

      <script src="${
        API_BASE_URL + `/api/script?code=${encodeURIComponent(code)}`
      }">
      </script>

      <iframe
      src="${
        API_BASE_URL + `/api/modal-script?code=${encodeURIComponent(code)}`
      }"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
    ></iframe>
    
    `;
  };

  const generateRandomCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCode = "";
    const codeLength = 10;
    for (let i = 0; i < codeLength; i++) {
      randomCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCode(randomCode);
  };

  const ScriptCode: React.FC<{ code: string }> = ({ code }) => {
    const scriptCode = generateScriptCode(code);

    return (
      <>
        <div className="p-4 bg-gray-100 border border-gray-300 rounded">
          <h3 className="text-lg font-semibold mb-2">Script Kodu</h3>

          <code className="block whitespace-pre-wrap break-all">
            {scriptCode}
          </code>
        </div>
      </>
    );
  };

  const [customerName, setCustomerName] = useState("");

  // Müşteri adı ve kodu ile birlikte URL oluştur
  const url = `${API_BASE_URL}/api/pixel?code=${encodeURIComponent(
    code
  )}&customerName=${encodeURIComponent(customerName)}`;

  const scriptUrl = `${API_BASE_URL}/api/script?code=${encodeURIComponent(
    code
  )}`;

  const scriptModalUrl = `${API_BASE_URL}/api/modal-script?code=${encodeURIComponent(
    code
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // GET isteği yap
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // İsteğin başarılı olduğunu kontrol et
        console.log("GET isteği başarıyla yapıldı.");
      } else {
        console.error("GET isteği başarısız oldu.");
      }
    } catch (error) {
      console.error("GET isteği sırasında bir hata oluştu:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="space-y-5">
                <button
                  className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold  mr-4 px-4 py-4 my-3 rounded"
                  onClick={generateRandomCode}
                >
                  {code === "" ? "Kod Üret" : "Yeni Kod Üret"}
                </button>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="customerName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter customer name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-1 px-3 rounded"
                    >
                      Create Customer
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="space-y-5">
                <div className="flex gap-4 ">
                  <div className="space-y-5">
                    <div className="p-3 bg-white shadow rounded-lg">
                   <>
                   <p className="font-sans">
                        <Link
                          href={url}
                          target="_blank"
                          className="text-violet-500 my-[10px]"
                        >
                          {"  Üretilen Linke Git -> "}
                          {url}
                        </Link>
                      </p>
                      <p className="font-sans">
                        <Link
                          href={scriptUrl}
                          target="_blank"
                          className="text-violet-500 my-[10px]"
                        >
                          {"  Üretilen Linke Git -> "}
                          {scriptUrl}
                        </Link>
                      </p>
                      <p className="font-sans">
                        <Link
                          href={scriptModalUrl}
                          target="_blank"
                          className="text-violet-500 my-[10px]"
                        >
                          {"  Üretilen Linke Git -> "}
                          {scriptModalUrl}
                        </Link>
                      </p>
                      <p className="font-sans p-3 text-gray-500">
                      şimdi modal script calısıyor aslında  iframe ile o tagı head içine atılırsa,
                      gösterir ama burda bir sorun var,
                      fb pixel ve ya google analytics gibi pixel kodlarında  wiindow ve document nesnelerini de kendilerine gönderiyorlar o kısımda olursa su an sorun kalkıyor
                      </p>
                   </>
                      <p className="font-sans text-gray-500">
                        üretilen koda ait ne kadar cok istek atılırsa pageviews
                        değeri o kadar artar.
                      </p>
                      <hr />
                      <p className="font-sans">
                        Aşağıdaki üretilen kodu herhangi bir HTML dosyasının
                        head etiketi içine yerleştirip test edebilirsiniz.
                      </p>
                      <div className="p-3  flex-row  justify-between items-center">
                        <button
                          className={`bg-indigo-700 hover:bg-indigo-500 text-white font-bold  px-4 py-4 my-3 rounded ${
                            code === "" &&
                            "disabled:opacity-50 cursor-not-allowed"
                          }`}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              generateScriptCode(code)
                            );
                            alert("Kod panoya kopyalandı!");
                          }}
                          disabled={code === "" ? true : false}
                        >
                          Kopyala
                        </button>

                        <div>
                          {code && (
                            <div>
                              <ScriptCode code={code} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeGenerator;
