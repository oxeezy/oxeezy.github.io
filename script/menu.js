const menu = [
    {
        name: 'Signature Drinks',
        kicker: 'Cool & Creamy',
        description: 'Refreshing handcrafted beverages with bold flavors.',
        products: [
            {
                name: 'Oreo Frappe',
                description: 'Creamy Oreo frappe topped with whipped cream and cookie crumbs.',
                price: 5.25,
                image: '/images/MENY/Drinks.png',
                tag: 'Best Seller'
            },
            {
                name: 'Matcha Frappe',
                description: 'Smooth matcha blended with milk and ice for a refreshing finish.',
                price: 5.50,
                image: '/images/MENY/Drinks.png',
                tag: 'New'
            },
            {
                name: 'Caramel Frappe',
                description: 'Sweet caramel, creamy milk, and whipped topping in every sip.',
                price: 5.40,
                image: '/images/MENY/Drinks.png'
            },
            {
                name: 'Mocha Frappe',
                description: 'A chocolate-coffee blend with a rich and creamy texture.',
                price: 5.35,
                image: '/images/MENY/Drinks.png'
            },
            {
                name: 'Iced Americano',
                description: 'Bold espresso poured over ice for a clean and refreshing coffee.',
                price: 3.95,
                image: '/images/MENY/Drinks.png'
            },
            {
                name: 'Strawberry Milk',
                description: 'Sweet strawberry flavor blended with chilled creamy milk.',
                price: 4.25,
                image: '/images/MENY/Drinks.png'
            }
        ]
    },

    {
        name: 'Pastries',
        kicker: 'Baked Fresh',
        description: 'Buttery, soft, and perfect with your favorite drink.',
        products: [
            {
                name: 'Butter Croissant',
                description: 'Flaky, golden, and baked fresh every morning.',
                price: 3.50,
                image: '/images/MENY/pastry.png',
                tag: 'Popular'
            },
            {
                name: 'Cinnamon Roll',
                description: 'Soft pastry swirled with cinnamon and topped with sweet glaze.',
                price: 3.75,
                image: '/images/MENY/pastry.png'
            },
            {
                name: 'Blueberry Muffin',
                description: 'Soft muffin filled with juicy blueberries and a crumbly top.',
                price: 3.25,
                image: '/images/MENY/pastry.png'
            },
            {
                name: 'Chocolate Danish',
                description: 'Layered pastry filled with rich chocolate cream.',
                price: 3.80,
                image: '/images/MENY/pastry.png'
            },
            {
                name: 'Cheese Ensaymada',
                description: 'Soft buttery bread topped with sugar and grated cheese.',
                price: 3.60,
                image: '/images/MENY/pastry.png'
            }
        ]
    },

    {
        name: 'Burgers',
        kicker: 'Hot & Juicy',
        description: 'Grilled favorites stacked with bold flavors.',
        products: [
            {
                name: 'Classic Cheeseburger',
                description: 'Beef patty, melted cheese, lettuce, tomato, and signature sauce.',
                price: 6.50,
                image: '/images/MENY/food.png',
                tag: 'Classic'
            },
            {
                name: 'Bacon Smash Burger',
                description: 'Smashed beef patty, crispy bacon, cheese, and smoky sauce.',
                price: 7.95,
                image: '/images/MENY/food.png',
                tag: 'New'
            },
            {
                name: 'Crispy Chicken Burger',
                description: 'Crispy chicken fillet with slaw and creamy garlic sauce.',
                price: 7.25,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Veggie Burger',
                description: 'Seasoned vegetable patty with fresh greens and tangy sauce.',
                price: 6.95,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Double Cheese Burger',
                description: 'Two beef patties, double cheese, onions, pickles, and sauce.',
                price: 8.50,
                image: '/images/MENY/food.png'
            }
        ]
    },

    {
        name: 'Ramen',
        kicker: 'Warm & Comforting',
        description: 'Rich broths, tender noodles, and satisfying toppings.',
        products: [
            {
                name: 'Classic Shoyu Ramen',
                description: 'Savory soy broth with noodles, egg, vegetables, and sliced meat.',
                price: 8.95,
                image: '/images/MENY/39bd92e435dfc608fdf33d60ee673b74-removebg-preview.png',
                tag: 'Favorite'
            },
            {
                name: 'Spicy Miso Ramen',
                description: 'Rich miso broth with chili, noodles, corn, egg, and spring onions.',
                price: 9.25,
                image: '/images/MENY/39bd92e435dfc608fdf33d60ee673b74-removebg-preview.png',
                tag: 'Spicy'
            },
            {
                name: 'Tonkotsu Ramen',
                description: 'Creamy pork broth with noodles, egg, mushrooms, and green onions.',
                price: 9.50,
                image: '/images/MENY/39bd92e435dfc608fdf33d60ee673b74-removebg-preview.png'
            },
            {
                name: 'Chicken Ramen',
                description: 'Light chicken broth with tender chicken, noodles, and vegetables.',
                price: 8.75,
                image: '/images/MENY/39bd92e435dfc608fdf33d60ee673b74-removebg-preview.png'
            },
            {
                name: 'Vegetable Ramen',
                description: 'Flavorful vegetable broth with noodles, tofu, corn, and greens.',
                price: 8.25,
                image: '/images/MENY/39bd92e435dfc608fdf33d60ee673b74-removebg-preview.png'
            }
        ]
    },

    {
        name: 'Food & Sides',
        kicker: 'Quick Bites',
        description: 'Easy snacks and savory extras for any time of day.',
        products: [
            {
                name: 'Loaded Fries',
                description: 'Crispy fries topped with cheese sauce, bacon, and spring onions.',
                price: 4.95,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Chicken Tenders',
                description: 'Crispy chicken strips served with your choice of dipping sauce.',
                price: 6.25,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Club Sandwich',
                description: 'Layered chicken, bacon, lettuce, tomato, and creamy dressing.',
                price: 6.75,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Cheesy Nachos',
                description: 'Corn chips covered with cheese sauce, salsa, and jalapeños.',
                price: 5.25,
                image: '/images/MENY/food.png'
            },
            {
                name: 'Crispy Onion Rings',
                description: 'Golden onion rings with a crunchy coating and dipping sauce.',
                price: 4.50,
                image: '/images/MENY/food.png'
            }
        ]
    }
];


function generateMenu() {

    const productContainer = document.querySelector('.product-container');

    menu.forEach((category) => {

        let productsHTML = '';

        category.products.forEach((product) => {

            let tagHTML = '';

            if (product.tag) {

                let tagClass = '';

                if (product.tag === 'New') {
                    tagClass = 'new-tag';
                }

                if (product.tag === 'Spicy') {
                    tagClass = 'spicy-tag';
                }

                tagHTML = `
                    <span class="product-tag ${tagClass}">
                        ${product.tag}
                    </span>
                `;
            }


            productsHTML += `
                <article class="cards">

                    ${tagHTML}

                    <div class="image-container-card">
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <div class="description-card">

                        <h3>${product.name}</h3>

                        <p>${product.description}</p>

                        <div class="card-footer">

                            <strong>$${product.price.toFixed(2)}</strong>

                            <button 
                                type="button" 
                                class="menu-order-btn">
                                Order Now
                            </button>

                        </div>

                    </div>

                </article>
            `;
        });


        productContainer.innerHTML += `
            <section class="menu-category">

                <div class="category-header">

                    <div>

                        <span class="section-kicker">
                            ${category.kicker}
                        </span>

                        <h2>
                            ${category.name}
                        </h2>

                        <p>
                            ${category.description}
                        </p>

                    </div>


                    <div class="slider-controls">

                        <button 
                            class="slider-btn slider-prev" 
                            type="button">

                            <i class="fa-solid fa-chevron-left"></i>

                        </button>


                        <button 
                            class="slider-btn slider-next" 
                            type="button">

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>

                    </div>

                </div>


                <div class="menu-slider">

                    ${productsHTML}

                </div>

            </section>
        `;
    });
}


function initOrderButtons() {

    const orderButtons = document.querySelectorAll('.menu-order-btn');

    orderButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const card = button.closest('.cards');

            const nameElement = card.querySelector(
                '.description-card h3'
            );

            const priceElement = card.querySelector(
                '.description-card strong'
            );


            const name = nameElement.innerText;

            const priceText = priceElement.innerText;


            const price = Number(
                priceText
                    .replace('$', '')
                    .replace(',', '')
            );


            addToCart(name, price);

        });
    });
}


document.addEventListener('DOMContentLoaded', () => {

    generateMenu();

    initOrderButtons();

});