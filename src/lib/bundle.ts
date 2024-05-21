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

  function createPopup(message: string) {
    const popupHTML = `
      <div id="popupContainer" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
          <h2>Popup Başlığı</h2>
          <p>${message}</p>
          <button id="closeButton">Kapat</button>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", popupHTML);

    const closeButton = document.getElementById("closeButton");

    closeButton?.addEventListener("click", function () {
      const popupContainer = document.getElementById("popupContainer");
      if (popupContainer) {
        popupContainer.remove();
      }
    });
  }


  createPopup(`customerId: ${customerId}`);


/*

*/


})();
