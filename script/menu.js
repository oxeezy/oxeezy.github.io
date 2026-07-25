/* ===========================================
   4S COFFEE — MENU PAGE SCRIPT
   Only what's unique to menu-page.html.
   Cart, checkout, header, and hamburger logic
   all live in script.js (shared across pages).
   =========================================== */

/* ---- WIRE ORDER NOW BUTTONS ON MENU CARDS ---- */
function initOrderButtons() {
    document.querySelectorAll(".menu-order-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var card = btn.closest(".cards");

            if (!card) return;

            var nameElement = card.querySelector(".description-card h3");
            var priceElement = card.querySelector(".description-card strong");

            if (!nameElement || !priceElement) return;

            var name = nameElement.textContent.trim();

            var priceText = priceElement.textContent.trim();

            var price = parseFloat(
                priceText
                    .replace("$", "")
                    .replace("₱", "")
                    .replace(",", "")
            );

            if (isNaN(price)) {
                console.error("Invalid product price:", priceText);
                return;
            }

            addToCart(name, price);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initOrderButtons();
});