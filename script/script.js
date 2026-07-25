/* ===========================================
   4S COFFEE - MAIN SCRIPT
   Shared across index.html and menu-page.html
   =========================================== */

/* ---- CART (shared, global) ---- */
var CART_KEY = "fourS_cart";

function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(name, price) {
    var cart = getCart();
    var existing = cart.find(function (i) { return i.name === name; });
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }
    saveCart(cart);
    showToast(name + " added to cart 🛒");
}

function setQty(name, qty) {
    var cart = getCart();
    if (qty <= 0) {
        cart = cart.filter(function (i) { return i.name !== name; });
    } else {
        var item = cart.find(function (i) { return i.name === name; });
        if (item) item.qty = qty;
    }
    saveCart(cart);
    renderCheckout();
}

function getCartCount() {
    return getCart().reduce(function (s, i) { return s + i.qty; }, 0);
}

function updateCartBadge() {
    var badge = document.querySelector(".cart-badge");
    if (!badge) return;
    var count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

function formatPrice(n) {
    return "$" + n.toFixed(2);
}

/* ---- TOAST (shared, global) ---- */
function showToast(message) {
    var container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add("show"); });
    setTimeout(function () {
        toast.classList.remove("show");
        setTimeout(function () { toast.remove(); }, 300);
    }, 2200);
}

/* ---- CHECKOUT MODAL (shared, global — with qty +/- buttons) ---- */
function openCheckout() {
    var overlay = document.getElementById("checkoutOverlay");
    if (overlay) {
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
        renderCheckout();
    }
}

function closeCheckout() {
    var overlay = document.getElementById("checkoutOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
}

function renderCheckout() {
    var cart = getCart();
    var itemsEl = document.getElementById("checkoutItems");
    var emptyEl = document.getElementById("checkoutEmpty");
    var totalEl = document.getElementById("checkoutTotal");
    var formEl = document.getElementById("checkoutForm");

    if (!itemsEl) return;

    itemsEl.innerHTML = "";

    if (cart.length === 0) {
        emptyEl.style.display = "block";
        formEl.style.display = "none";
        totalEl.textContent = "$0.00";
        return;
    }

    emptyEl.style.display = "none";
    formEl.style.display = "flex";

    var subtotal = 0;

    cart.forEach(function (item) {
        subtotal += item.price * item.qty;

        var line = document.createElement("div");
        line.className = "checkout-line";

        line.innerHTML = `
    <div class="checkout-left">
        <span class="checkout-line-name">${item.name}</span>
        <span class="checkout-qty">x${item.qty}</span>
    </div>

    <div class="checkout-right">
        <button class="qty-minus" data-name="${item.name}">−</button>
        <button class="qty-plus" data-name="${item.name}">+</button>
        <span class="checkout-line-price">${formatPrice(item.price * item.qty)}</span>
    </div>
`;

        itemsEl.appendChild(line);
    });

    itemsEl.querySelectorAll(".qty-minus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var name = btn.getAttribute("data-name");
            var item = getCart().find(function (i) { return i.name === name; });
            if (item) setQty(name, item.qty - 1);
        });
    });

    itemsEl.querySelectorAll(".qty-plus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var name = btn.getAttribute("data-name");
            var item = getCart().find(function (i) { return i.name === name; });
            if (item) setQty(name, item.qty + 1);
        });
    });

    var tax = subtotal * 0.08;
    var total = subtotal + tax;
    totalEl.textContent = formatPrice(total) + " (incl. 8% tax)";
}

function initCheckoutForm() {
    var form = document.getElementById("checkoutForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var modal = document.querySelector(".checkout-modal");
        var success = document.querySelector(".checkout-success");

        modal.querySelectorAll(".checkout-title, #checkoutItems, #checkoutEmpty, .checkout-total-row, #checkoutForm").forEach(function (el) {
            el.style.display = "none";
        });

        if (!success) {
            success = document.createElement("div");
            success.className = "checkout-success";
            success.innerHTML = [
                '<i class="fa-solid fa-circle-check"></i>',
                '<h2>Order Placed!</h2>',
                '<p>We\'ll have your order ready shortly.<br>Thank you for choosing 4S Coffee!</p>'
            ].join("");
            modal.appendChild(success);
        }

        success.style.display = "block";

        localStorage.removeItem(CART_KEY);
        updateCartBadge();

        setTimeout(function () {
            closeCheckout();
            setTimeout(function () {
                modal.querySelectorAll(".checkout-title, .checkout-total-row, #checkoutForm").forEach(function (el) {
                    el.style.display = "";
                });
                success.style.display = "none";
                form.reset();
                renderCheckout();
            }, 400);
        }, 3000);
    });
}

/* ---- PAGE INIT (event wiring only — everything above is reusable logic) ---- */
document.addEventListener("DOMContentLoaded", function () {

    /* 1. STICKY HEADER */
    var header = document.querySelector("header");
    var ticking = false;
    var STICKY_THRESHOLD = Number(header.dataset.stickyAt) || 900;

    function updateHeader() {
        if (scrollY > STICKY_THRESHOLD) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });

    /* 2. MOBILE HAMBURGER MENU */
    var hamburger = document.querySelector(".hamburger");
    var topul = document.querySelector(".topul");

    if (hamburger && topul) {
        hamburger.addEventListener("click", function () {
            topul.classList.toggle("open");
            hamburger.classList.toggle("active");
        });

        topul.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                topul.classList.remove("open");
                hamburger.classList.remove("active");
            });
        });
    }

    /* 3. SCROLLSPY - highlight active nav link */
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".topul a[href^='#']");

    function updateActiveLink() {
        var scrollPos = scrollY + 150;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute("id");
            var link = document.querySelector(".topul a[href='#" + id + "']");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (l) { l.classList.remove("active-link"); });
                if (link) link.classList.add("active-link");
            }
        });
    }

    window.addEventListener("scroll", function () {
        requestAnimationFrame(updateActiveLink);
    });

    /* 4. CART BADGE on load */
    updateCartBadge();

    /* "See full menu" style buttons on index.html that just redirect */
    document.querySelectorAll(".index-order-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            var toggle = document.querySelector(".price-toggle");
            var bundleSelected = toggle ? toggle.classList.contains("bundle") : false;
            localStorage.setItem("pricingMode", bundleSelected ? "bundle" : "single");
            window.location.href = "menu-page.html";
        });
    });

    /* 5. SCROLL-TO-TOP BUTTON */
    var scrollTopBtn = document.querySelector(".scroll-top-btn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            scrollTopBtn.classList.toggle("visible", scrollY > 800);
        });
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* 6. CHECKOUT MODAL WIRE-UP */
    var cartTrigger = document.getElementById("cartTrigger");
    var checkoutOverlay = document.getElementById("checkoutOverlay");
    var checkoutClose = document.getElementById("checkoutClose");

    if (cartTrigger) {
        cartTrigger.addEventListener("click", function (e) {
            e.preventDefault();
            openCheckout();
        });
    }
    if (checkoutClose) {
        checkoutClose.addEventListener("click", closeCheckout);
    }
    if (checkoutOverlay) {
        checkoutOverlay.addEventListener("click", function (e) {
            if (e.target === checkoutOverlay) closeCheckout();
        });
    }
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeCheckout();
    });

    initCheckoutForm();

    /* 7. SIMPLE PRICING TOGGLE (index.html) */
    var pricingSection = document.querySelector(".pricing-section");
    var priceToggle = document.querySelector(".price-toggle");

    if (pricingSection && priceToggle) {
        pricingSection.classList.remove("bundle-mode");
        priceToggle.classList.remove("bundle");

        priceToggle.addEventListener("click", function () {
            pricingSection.classList.toggle("bundle-mode");
            priceToggle.classList.toggle("bundle");
        });
    }

    document.querySelectorAll(".pricing-order-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var name = button.dataset.name;
            var price = Number(button.dataset.price);
            addToCart(name, price);
        });
    });

    /* 8. MENU PAGE ACCORDION (harmless no-op on index.html — no matching elements) */
    document.querySelectorAll(".menu-category-toggle").forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            var category = toggle.closest(".menu-category");
            category.classList.toggle("open");
        });
    });
});