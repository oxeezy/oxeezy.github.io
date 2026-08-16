// ========================================
// PAGE LOADED
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    // ========================================
// STICKY HEADER
// ========================================

   const header = document.querySelector('header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

    });


    // ========================================
    // 1. HAMBURGER MENU
    // ========================================

    const hamburger =
        document.querySelector(".hamburger");

    const topul =
        document.querySelector(".topul");


    if (hamburger && topul) {

        hamburger.addEventListener("click", function() {

            topul.classList.toggle("open");

            hamburger.classList.toggle("active");

        });


        const menuLinks =
            topul.querySelectorAll("a");


        menuLinks.forEach(function(link) {

            link.addEventListener("click", function() {

                topul.classList.remove("open");

                hamburger.classList.remove("active");

            });

        });

    }



    // ========================================
    // 2. PRICING TOGGLE
    // ========================================

    const pricingSection =
        document.querySelector(".pricing-section");

    const priceToggle =
        document.querySelector(".price-toggle");


    if (pricingSection && priceToggle) {

        priceToggle.addEventListener("click", function() {

            pricingSection.classList.toggle(
                "bundle-mode"
            );

            priceToggle.classList.toggle(
                "bundle"
            );

        });

    }



    // ========================================
    // 3. ADD TO CART BUTTONS
    // ========================================

    const addToCartButtons =
        document.querySelectorAll(".pricing-order-btn");


    addToCartButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const name =
                button.getAttribute("data-name");


            const price =
                Number(
                    button.getAttribute("data-price")
                );


            addToCart(name, price);

        });

    });



    // ========================================
    // 4. "ORDER NOW" BUTTONS
    // ========================================

    const orderButtons =
        document.querySelectorAll(".index-order-btn");


    orderButtons.forEach(function(button) {

        button.addEventListener("click", function(event) {

            event.preventDefault();

            window.location.href =
                "menu-page.html";

        });

    });



    // ========================================
    // 5. CART BUTTON
    // ========================================

    const cartTrigger =
        document.querySelector("#cartTrigger");


    const checkoutOverlay =
        document.querySelector("#checkoutOverlay");


    if (cartTrigger && checkoutOverlay) {

        cartTrigger.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                checkoutOverlay.classList.add(
                    "open"
                );


                document.body.style.overflow =
                    "hidden";


                renderCheckout();

            }
        );

    }



    // ========================================
    // 6. CLOSE CART
    // ========================================

    const checkoutClose =
        document.querySelector("#checkoutClose");


    if (checkoutClose && checkoutOverlay) {

        checkoutClose.addEventListener(
            "click",
            function() {

                checkoutOverlay.classList.remove(
                    "open"
                );

                document.body.style.overflow =
                    "";

            }
        );

    }



    // ========================================
    // 7. CLICK OUTSIDE CART TO CLOSE
    // ========================================

    if (checkoutOverlay) {

        checkoutOverlay.addEventListener(
            "click",
            function(event) {

                if (event.target === checkoutOverlay) {

                    checkoutOverlay.classList.remove(
                        "open"
                    );

                    document.body.style.overflow =
                        "";

                }

            }
        );

    }



    // ========================================
    // 8. ESCAPE KEY TO CLOSE CART
    // ========================================

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {

                if (checkoutOverlay) {

                    checkoutOverlay.classList.remove(
                        "open"
                    );

                    document.body.style.overflow =
                        "";

                }

            }

        }
    );



    // ========================================
    // 9. SCROLL TO TOP BUTTON
    // ========================================

    const scrollTopButton =
        document.querySelector(".scroll-top-btn");


    if (scrollTopButton) {

        window.addEventListener(
            "scroll",
            function() {

                if (window.scrollY > 800) {

                    scrollTopButton.classList.add(
                        "visible"
                    );

                } else {

                    scrollTopButton.classList.remove(
                        "visible"
                    );

                }

            }
        );


        scrollTopButton.addEventListener(
            "click",
            function() {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    // ========================================
    // 10. UPDATE CART NUMBER
    // ========================================

    updateCartBadge();

});



// ========================================
// CART STORAGE NAME
// ========================================

const cartKey = "fourS_cart";



// ========================================
// GET CART
// ========================================

function getCart() {

    const savedCart =
        localStorage.getItem(cartKey);


    if (savedCart) {

        return JSON.parse(savedCart);

    } else {

        return [];

    }

}



// ========================================
// SAVE CART
// ========================================

function saveCart(cart) {

    localStorage.setItem(

        cartKey,

        JSON.stringify(cart)

    );


    updateCartBadge();

}



// ========================================
// ADD TO CART
// ========================================

function addToCart(name, price) {

    const cart =
        getCart();


    let productFound =
        false;


    // Check every item in the cart

    for (
        let i = 0;
        i < cart.length;
        i++
    ) {

        if (cart[i].name === name) {

            cart[i].qty++;

            productFound = true;

        }

    }


    // If product isn't already in cart

    if (productFound === false) {

        cart.push({

            name: name,

            price: price,

            qty: 1

        });

    }


    saveCart(cart);


    showToast(
        name + " added to cart!"
    );

}



// ========================================
// UPDATE CART BADGE
// ========================================

function updateCartBadge() {

    const badge =
        document.querySelector(".cart-badge");


    if (!badge) {

        return;

    }


    const cart =
        getCart();


    let totalQuantity =
        0;


    for (
        let i = 0;
        i < cart.length;
        i++
    ) {

        totalQuantity +=
            cart[i].qty;

    }


    badge.innerHTML =
        totalQuantity;


    if (totalQuantity > 0) {

        badge.style.display =
            "flex";

    } else {

        badge.style.display =
            "none";

    }

}



// ========================================
// CHANGE QUANTITY
// ========================================

function changeQuantity(name, amount) {

    const cart =
        getCart();


    for (
        let i = 0;
        i < cart.length;
        i++
    ) {

        if (cart[i].name === name) {

            cart[i].qty =
                cart[i].qty + amount;


            if (cart[i].qty <= 0) {

                cart.splice(i, 1);

            }

        }

    }


    saveCart(cart);


    renderCheckout();

}



// ========================================
// RENDER CHECKOUT
// ========================================

function renderCheckout() {

    const cart =
        getCart();


    const itemsContainer =
        document.querySelector("#checkoutItems");


    const emptyMessage =
        document.querySelector("#checkoutEmpty");


    const totalElement =
        document.querySelector("#checkoutTotal");


    const checkoutForm =
        document.querySelector("#checkoutForm");


    // If checkout doesn't exist on this page

    if (
        !itemsContainer ||
        !emptyMessage ||
        !totalElement ||
        !checkoutForm
    ) {

        return;

    }


    // Clear old cart display

    itemsContainer.innerHTML = "";



    // ========================================
    // EMPTY CART
    // ========================================

    if (cart.length === 0) {

        emptyMessage.style.display =
            "block";


        checkoutForm.style.display =
            "none";


        totalElement.innerHTML =
            "$0.00";


        return;

    }



    // ========================================
    // CART HAS ITEMS
    // ========================================

    emptyMessage.style.display =
        "none";


    checkoutForm.style.display =
        "flex";


    let subtotal =
        0;



    // ========================================
    // LOOP THROUGH CART
    // ========================================

    cart.forEach(function(item) {


        subtotal =
            subtotal +
            (item.price * item.qty);



        const itemElement =
            document.createElement("div");


        itemElement.className =
            "checkout-line";


        itemElement.innerHTML = `

            <div class="checkout-left">

                <span class="checkout-line-name">
                    ${item.name}
                </span>

                <span class="checkout-qty">
                    x${item.qty}
                </span>

            </div>


            <div class="checkout-right">

                <button
                    class="qty-minus"
                    data-name="${item.name}">
                    -
                </button>


                <button
                    class="qty-plus"
                    data-name="${item.name}">
                    +
                </button>


                <span class="checkout-line-price">
                    $${(
                        item.price * item.qty
                    ).toFixed(2)}
                </span>

            </div>

        `;


        itemsContainer.appendChild(
            itemElement
        );

    });



    // ========================================
    // MINUS BUTTONS
    // ========================================

    const minusButtons =
        itemsContainer.querySelectorAll(
            ".qty-minus"
        );


    minusButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const name =
                    button.getAttribute(
                        "data-name"
                    );


                changeQuantity(
                    name,
                    -1
                );

            }
        );

    });



    // ========================================
    // PLUS BUTTONS
    // ========================================

    const plusButtons =
        itemsContainer.querySelectorAll(
            ".qty-plus"
        );


    plusButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const name =
                    button.getAttribute(
                        "data-name"
                    );


                changeQuantity(
                    name,
                    1
                );

            }
        );

    });



    // ========================================
    // TAX
    // ========================================

    const tax =
        subtotal * 0.08;


    const total =
        subtotal + tax;


    totalElement.innerHTML =
        "$" +
        total.toFixed(2) +
        " (incl. 8% tax)";

}



// ========================================
// TOAST MESSAGE
// ========================================

function showToast(message) {

    let container =
        document.querySelector(
            ".toast-container"
        );


    if (!container) {

        container =
            document.createElement("div");


        container.className =
            "toast-container";


        document.body.appendChild(
            container
        );

    }


    const toast =
        document.createElement("div");


    toast.className =
        "toast";


    toast.innerHTML =
        message;


    container.appendChild(
        toast
    );



    // Show toast

    setTimeout(function() {

        toast.classList.add(
            "show"
        );

    }, 10);



    // Hide toast

    setTimeout(function() {

        toast.classList.remove(
            "show"
        );


        setTimeout(function() {

            toast.remove();

        }, 300);

    }, 2200);

}



// ========================================
// CHECKOUT FORM
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const checkoutForm =
            document.querySelector(
                "#checkoutForm"
            );


        if (!checkoutForm) {

            return;

        }


        checkoutForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const modal =
                    document.querySelector(
                        ".checkout-modal"
                    );


                const elementsToHide =
                    modal.querySelectorAll(
                        ".checkout-title, #checkoutItems, #checkoutEmpty, .checkout-total-row, #checkoutForm"
                    );


                elementsToHide.forEach(
                    function(element) {

                        element.style.display =
                            "none";

                    }
                );



                // ========================================
                // SUCCESS MESSAGE
                // ========================================

                const successMessage =
                    document.createElement(
                        "div"
                    );


                successMessage.className =
                    "checkout-success";


                successMessage.innerHTML = `

                    <h2>
                        Order Placed!
                    </h2>

                    <p>
                        We'll have your order ready shortly.
                        <br>
                        Thank you for choosing 4S Coffee!
                    </p>

                `;


                modal.appendChild(
                    successMessage
                );


                successMessage.style.display =
                    "block";



                // ========================================
                // CLEAR CART
                // ========================================

                localStorage.removeItem(
                    cartKey
                );


                updateCartBadge();



                // ========================================
                // CLOSE AFTER 3 SECONDS
                // ========================================

                setTimeout(
                    function() {

                        const overlay =
                            document.querySelector(
                                "#checkoutOverlay"
                            );


                        if (overlay) {

                            overlay.classList.remove(
                                "open"
                            );

                        }


                        document.body.style.overflow =
                            "";



                        setTimeout(
                            function() {

                                successMessage.remove();


                                elementsToHide.forEach(
                                    function(element) {

                                        element.style.display =
                                            "";

                                    }
                                );


                                checkoutForm.reset();


                                renderCheckout();

                            },
                            400
                        );

                    },
                    3000
                );

            }
        );

    }
);