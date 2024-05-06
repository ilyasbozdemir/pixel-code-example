// components/CodeGenerator.tsx
"use client";

import { useEffect, useState } from "react";

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

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="space-y-5">
          <div className="p-3 bg-white shadow rounded-lg">
            <p className="font-sans">
              Aşağıdaki üretilen kodu herhangi bir HTML dosyasının head etiketi
              içine yerleştirip test edebilirsiniz.
            </p>
            <div className="p-3 flex flex-column gap-4 items-center">
              <button
                className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                onClick={generateRandomCode}
              >
                {
                  code ==="" ?"Kod Üret" : "Yeni Kod Üret"
                }
              </button>
              <button
                className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
                  code === "" && "disabled:opacity-50 cursor-not-allowed"
                }`}
                onClick={() => {
                  navigator.clipboard.writeText(generateScriptCode(code));
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
    </>
  );
};

export default CodeGenerator;
