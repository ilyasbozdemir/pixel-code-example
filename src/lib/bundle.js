/**
 * @license
 * Copyright İlyas Bozdemir, https://ilyasbozdemir.dev </>
 * Available under MIT License
 * <https://github.com/ilyasbozdemir/pixel-code-example/blob/main/LICENSE>
 */
"use strict";
(function () {
    //
    var BASE_URL = "http://localhost:3000" || "https://pixel-code-example.vercel.app";
    var POPUP_API_URL = "".concat(BASE_URL, "/api/handler");
    var API_URL = BASE_URL;
    var CDN_URL = "".concat(BASE_URL, "/cdn");
    var DASHBOARD_URL = "".concat(BASE_URL, "/app");
    var ENCRYPTION_SECRET_KEY = "71e50ec1b38dc029b660312dcd15412e";
    var scriptTag = document.querySelector("script[src=\"".concat(BASE_URL, "/api/bundle\"]"));
    var customerId = null;
    if (scriptTag) {
        customerId = scriptTag.getAttribute("data-id");
        if (customerId) {
            console.log("data-id değeri:", customerId);
        }
        else {
            console.log("script etiketi içinde data-id özelliği bulunamadı.");
        }
    }
    else {
        console.log("Script etiketi bulunamadı.");
    }
    function createPopup(message) {
        var popupHTML = "\n      <div id=\"popupContainer\" style=\"position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\">\n          <h2>Popup Ba\u015Fl\u0131\u011F\u0131</h2>\n          <p>".concat(message, "</p>\n          <button id=\"closeButton\">Kapat</button>\n      </div>\n    ");
        document.body.insertAdjacentHTML("beforeend", popupHTML);
        var closeButton = document.getElementById("closeButton");
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
            var popupContainer = document.getElementById("popupContainer");
            if (popupContainer) {
                popupContainer.remove();
            }
        });
    }
    createPopup("customerId: ".concat(customerId));
    /*
    
    */
})();
