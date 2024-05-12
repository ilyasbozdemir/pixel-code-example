"use strict";
(function () {
    var POPUP_API_URL = "http://localhost:3000/handler";
    var API_URL = "http://localhost:3000/";
    var CDN_URL = "http://localhost:3000/cdn";
    var STORE_PATH = "accounts";
    var ENCRYPTION_SECRET_KEY = "71e50ec1b38dc029b660312dcd15412e";
    var DASHBOARD_URL = "http://localhost:3000/app";
    // Popup için HTML oluşturma
    var popupHTML = "\n        <div id=\"popupContainer\" style=\"position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\">\n            <h2>Popup Ba\u015Fl\u0131\u011F\u0131</h2>\n            <p>Popup i\u00E7eri\u011Fi buraya gelecek.</p>\n            <button id=\"closeButton\">Kapat</button>\n        </div>\n    ";
    // Popup HTML'ini sayfaya ekleme
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    // Kapatma butonunu seçme
    var closeButton = document.getElementById('closeButton');
    // Kapatma butonuna tıklama olayı ekleme
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', function () {
        var popupContainer = document.getElementById('popupContainer');
        if (popupContainer) {
            popupContainer.remove(); // Popupı kapat
        }
    });
})();
