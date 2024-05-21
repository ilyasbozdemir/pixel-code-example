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
    function showPopup(message, discountCode) {
        var popupHTML = "\n      <div id=\"popupBackdrop\" class=\"popup-backdrop\">\n        <div id=\"popupContainer\" class=\"popup-container\">\n          <h2>\uD83C\uDF89 \u00D6zel \u0130ndirim! \uD83C\uDF89</h2>\n          <p>".concat(message, "</p>\n          <p class=\"discount-code\">\u0130ndirim Kodu: <strong>").concat(discountCode, "</strong></p>\n          <button id=\"copyButton\" class=\"copy-button\">Kodu Kopyala</button>\n          <button id=\"closeButton\" class=\"close-button\">Kapat</button>\n        </div>\n      </div>\n    ");
        var style = document.createElement("style");
        style.innerHTML = "\n      .popup-backdrop {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 1000;\n      }\n  \n      .popup-container {\n        background-color: white;\n        padding: 30px;\n        border-radius: 10px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        max-width: 400px;\n        width: 80%;\n        text-align: center;\n        animation: fadeIn 0.3s ease-out;\n      }\n  \n      .popup-container h2 {\n        margin-top: 0;\n        color: #ff5733;\n      }\n  \n      .discount-code {\n        font-size: 18px;\n        color: #28a745;\n        margin: 10px 0;\n      }\n  \n      .copy-button, .close-button {\n        background-color: #007bff;\n        color: white;\n        border: none;\n        padding: 10px 20px;\n        margin-top: 20px;\n        cursor: pointer;\n        border-radius: 5px;\n        font-size: 16px;\n        margin-right: 10px;\n      }\n  \n      .copy-button:hover, .close-button:hover {\n        background-color: #0056b3;\n      }\n  \n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n          transform: scale(0.8);\n        }\n        to {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n    ";
        document.head.appendChild(style);
        document.body.insertAdjacentHTML("beforeend", popupHTML);
        var closeButton = document.getElementById("closeButton");
        var copyButton = document.getElementById("copyButton");
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
            var popupBackdrop = document.getElementById("popupBackdrop");
            if (popupBackdrop) {
                popupBackdrop.remove();
            }
        });
        copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener("click", function () {
            navigator.clipboard.writeText(discountCode).then(function () {
                alert("İndirim kodu kopyalandı!");
            });
        });
    }
    showPopup("Sadece bugün geçerli <b>%20</b> indirim fırsatını kaçırmayın!", "INDIRIM20");
})();
