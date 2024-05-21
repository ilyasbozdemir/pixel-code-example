/**
 * @license
 * Copyright İlyas Bozdemir, https://ilyasbozdemir.dev </>
 * Available under MIT License
 * <https://github.com/ilyasbozdemir/pixel-code-example/blob/main/LICENSE>
 */

"use strict";

(() => {
  //
  const BASE_URL =
    "http://localhost:3000" || "https://pixel-code-example.vercel.app";

  var POPUP_API_URL = `${BASE_URL}/api/handler`;
  var API_URL = BASE_URL;
  var CDN_URL = `${BASE_URL}/cdn`;
  var DASHBOARD_URL = `${BASE_URL}/app`;
  var ENCRYPTION_SECRET_KEY = "71e50ec1b38dc029b660312dcd15412e";

  const scriptTag = document.querySelector(
    `script[src="${BASE_URL}/api/bundle"]`
  );

  var customerId: any = null;

  if (scriptTag) {
    customerId = scriptTag.getAttribute("data-id");

    if (customerId) {
      console.log("data-id değeri:", customerId);
    } else {
      console.log("script etiketi içinde data-id özelliği bulunamadı.");
    }
  } else {
    console.log("Script etiketi bulunamadı.");
  }

  function showPopup(message: string, discountCode: string) {
    const popupHTML = `
      <div id="popupBackdrop" class="popup-backdrop">
        <div id="popupContainer" class="popup-container">
          <h2>🎉 Özel İndirim! 🎉</h2>
          <p>${message}</p>
          <p class="discount-code">İndirim Kodu: <strong>${discountCode}</strong></p>
          <button id="copyButton" class="copy-button">Kodu Kopyala</button>
          <button id="closeButton" class="close-button">Kapat</button>
        </div>
      </div>
    `;
  
    const style = document.createElement("style");
    style.innerHTML = `
      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
  
      .popup-container {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        width: 80%;
        text-align: center;
        animation: fadeIn 0.3s ease-out;
      }
  
      .popup-container h2 {
        margin-top: 0;
        color: #ff5733;
      }
  
      .discount-code {
        font-size: 18px;
        color: #28a745;
        margin: 10px 0;
      }
  
      .copy-button, .close-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 16px;
        margin-right: 10px;
      }
  
      .copy-button:hover, .close-button:hover {
        background-color: #0056b3;
      }
  
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
    document.body.insertAdjacentHTML("beforeend", popupHTML);
  
    const closeButton = document.getElementById("closeButton");
    const copyButton = document.getElementById("copyButton");
  
    closeButton?.addEventListener("click", function () {
      const popupBackdrop = document.getElementById("popupBackdrop");
      if (popupBackdrop) {
        popupBackdrop.remove();
      }
    });
  
    copyButton?.addEventListener("click", function () {
      navigator.clipboard.writeText(discountCode).then(() => {
        alert("İndirim kodu kopyalandı!");
      });
    });
  }
  
  showPopup("Sadece bugün geçerli <b>%20</b> indirim fırsatını kaçırmayın!", "INDIRIM20");

})();
