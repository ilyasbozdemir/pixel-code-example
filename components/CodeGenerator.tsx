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
        API_BASE_URL +
        `/api/pixel?code=${encodeURIComponent(code)}`
      }">
      </script>

      <script src="${
        API_BASE_URL +
        `/api/script?code=${encodeURIComponent(code)}`
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
      <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        <h3 className="text-lg font-semibold mb-2">Script Kodu</h3>
        <div className="relative">
          <code className="block whitespace-pre-wrap break-all">
            {scriptCode}
          </code>
          <button
            className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => {
              navigator.clipboard.writeText(scriptCode);
              alert("Kod panoya kopyalandı!");
            }}
          >
            Kopyala
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generateRandomCode}
      >
        Kod Üret
      </button>

      {code && (
        <div className="mt-4">
          <ScriptCode code={code} />
        </div>
      )}
    </div>
  );
};

export default CodeGenerator;