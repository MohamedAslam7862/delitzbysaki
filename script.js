// =============================================================================
// CONTENT: product catalogue
// Edit this list to change product names, prices, descriptions, images, and options.
// =============================================================================
const PRODUCTS = [
  { id: "mini-cookie", name: "Mini Cookie", category: "treats", price: 110, unit: "100 g", description: "Bite-sized chocolate chip cookies with crisp edges and a soft centre.", image: "assets/product-mini-cookie.jpg", bestseller: true, egglessAvailable: true, exactPrice: true },
  { id: "mini-cookie-nutella-dip", name: "Mini Cookie + Nutella Dip", category: "treats", price: 130, unit: "100 g + 20 g dip", description: "Bite-sized chocolate chip cookies served with a rich Nutella dip.", image: "assets/product-mini-cookie-nutella-dip.jpg", egglessAvailable: true, exactPrice: true },
  { id: "cookie-pie", name: "Cookie Pie", category: "treats", price: 250, unit: "150 g", description: "A thick chocolate chip cookie pie with a warm, gooey chocolate centre.", image: "assets/product-cookie-pie.jpg", bestseller: true, egglessAvailable: true, exactPrice: true, options: [{ id: "150g", label: "150 g", price: 250 }, { id: "250g", label: "250 g", price: 375 }] },
  { id: "fudge-brownie", name: "Fudge Brownie", category: "treats", price: 350, unit: "250 g", description: "Deep chocolate brownie with a crackly top and an intensely fudgy middle.", image: "assets/product-fudge-brownie.jpg", bestseller: true, egglessAvailable: true, exactPrice: true, options: [{ id: "250g", label: "250 g", price: 350 }, { id: "500g", label: "500 g", price: 650 }, { id: "1kg", label: "1 kg", price: 1250 }] },
  { id: "nutella-brownie", name: "Nutella Brownie", category: "treats", price: 400, unit: "250 g", description: "Our fudgy brownie finished with a generous swirl of Nutella.", image: "assets/product-nutella-brownie.jpg", egglessAvailable: true, exactPrice: true, options: [{ id: "250g", label: "250 g", price: 400 }, { id: "500g", label: "500 g", price: 700 }, { id: "1kg", label: "1 kg", price: 1450 }] },
  { id: "scoop-cookie-milk", name: "Scoop Cookie — Milk Chocolate", category: "treats", price: 160, unit: "one dessert cup", description: "Soft, scoopable cookie treat packed with creamy milk chocolate chunks.", image: "assets/product-scoop-milk-chocolate.jpg", egglessAvailable: true },
  { id: "scoop-cookie-nutella", name: "Scoop Cookie with Nutella", category: "treats", price: 250, unit: "150 g", description: "Soft scoop cookie topped with a rich Nutella swirl.", image: "assets/product-scoop-nutella.jpg", egglessAvailable: true, exactPrice: true, options: [{ id: "150g", label: "150 g", price: 250 }, { id: "250g", label: "250 g", price: 399 }] },
  { id: "cookie-fries", name: "Cookie Fries", category: "treats", price: 220, unit: "box with dip", description: "Crisp chocolate chip cookie sticks made for dipping into chocolate sauce.", image: "assets/product-cookie-fries.jpg", egglessAvailable: true },
  { id: "brookie", name: "Brookie", category: "treats", price: 350, unit: "250 g", description: "One indulgent treat with a fudgy brownie base and cookie top.", image: "assets/product-brookie.jpg", bestseller: true, egglessAvailable: true, exactPrice: true, options: [{ id: "250g", label: "250 g", price: 350 }, { id: "500g", label: "500 g", price: 675 }, { id: "1kg", label: "1 kg", price: 1350 }] },
  { id: "single-brownie", name: "Single Brownie", category: "treats", price: 50, unit: "50 g", description: "A freshly baked classic brownie, individually packed for gifting or snacking.", image: "assets/product-single-brownie.jpg", egglessAvailable: true, exactPrice: true },
  { id: "single-nutella-brownie", name: "Single Nutella Brownie", category: "treats", price: 65, unit: "50 g", description: "An individually packed fudgy brownie finished with creamy Nutella.", image: "assets/product-single-nutella-brownie.jpg", egglessAvailable: true, exactPrice: true },
  { id: "single-cookie", name: "Classic Cookie", category: "treats", price: 35, unit: "30 g", description: "A golden chocolate chip cookie with crisp edges and a soft centre.", image: "assets/product-single-cookie.jpg", egglessAvailable: true, exactPrice: true },
  { id: "nutella-cookie", name: "Nutella Cookie", category: "treats", price: 50, unit: "30 g", description: "A golden cookie with a rich, creamy Nutella centre.", image: "assets/product-nutella-cookie.jpg", egglessAvailable: true, exactPrice: true },

  { id: "brownies-classic", name: "Brownies — Classic", category: "brownies", price: 499, unit: "box of 6", description: "Six classic fudgy brownies with delicate crackly tops.", image: "assets/product-brownies-classic.jpg", egglessAvailable: true },
  { id: "brownies-chocolate", name: "Brownies — Chocolate", category: "brownies", price: 549, unit: "box of 6", description: "Extra-chocolate brownies loaded with rich chocolate chunks.", image: "assets/product-brownies-chocolate.jpg", bestseller: true, egglessAvailable: true },
  { id: "brownies-almond", name: "Brownies — Almond", category: "brownies", price: 579, unit: "box of 6", description: "Fudgy brownies topped with crisp, toasted almond flakes.", image: "assets/product-brownies-almond.jpg", egglessAvailable: true },

  { id: "ragi-classic", name: "Ragi Cookies — Classic", category: "ragi", price: 249, unit: "box of 6", description: "Wholesome finger millet cookies with a rustic crunch and gentle sweetness.", image: "assets/product-ragi-classic.jpg", egglessAvailable: true },
  { id: "ragi-chocolate", name: "Ragi Cookies — Chocolate", category: "ragi", price: 279, unit: "box of 6", description: "Chocolate ragi cookies dotted with rich chocolate chips.", image: "assets/product-ragi-chocolate.jpg", egglessAvailable: true },
  { id: "ragi-almond", name: "Ragi Cookies — Almond", category: "ragi", price: 299, unit: "box of 6", description: "Crunchy ragi cookies generously finished with toasted almonds.", image: "assets/product-ragi-almond.jpg", egglessAvailable: true },
  { id: "ragi-mini-classic", name: "Ragi Mini Cookies — Classic", category: "ragi", price: 219, unit: "box of 12", description: "Bite-sized ragi cookies with a delicate crunch.", image: "assets/product-ragi-mini-classic.jpg", egglessAvailable: true },
  { id: "ragi-mini-chocolate", name: "Ragi Mini Cookies — Chocolate", category: "ragi", price: 249, unit: "box of 12", description: "Mini chocolate ragi cookies with rich cocoa flavour.", image: "assets/product-ragi-mini-chocolate.jpg", egglessAvailable: true },
  { id: "ragi-mini-almond", name: "Ragi Mini Cookies — Almond", category: "ragi", price: 269, unit: "box of 12", description: "Bite-sized ragi cookies topped with chopped toasted almonds.", image: "assets/product-ragi-mini-almond.jpg", egglessAvailable: true },

  { id: "jowar-classic", name: "Jowar Cookies — Classic", category: "jowar", price: 239, unit: "box of 6", description: "Light, crisp sorghum cookies with a comforting homemade flavour.", image: "assets/product-jowar-classic.jpg", egglessAvailable: true },
  { id: "jowar-chocolate", name: "Jowar Cookies — Chocolate", category: "jowar", price: 269, unit: "box of 6", description: "Cocoa-rich jowar cookies with small dark chocolate chips.", image: "assets/product-jowar-chocolate.jpg", egglessAvailable: true },
  { id: "jowar-almond", name: "Jowar Cookies — Almond", category: "jowar", price: 289, unit: "box of 6", description: "Crisp jowar cookies finished with toasted almond slivers.", image: "assets/product-jowar-almond.jpg", egglessAvailable: true },
  { id: "jowar-mini-classic", name: "Jowar Mini Cookies — Classic", category: "jowar", price: 209, unit: "box of 12", description: "Bite-sized classic jowar cookies with a delicate crunch.", image: "assets/product-jowar-mini-classic.jpg", egglessAvailable: true },
  { id: "jowar-mini-chocolate", name: "Jowar Mini Cookies — Chocolate", category: "jowar", price: 239, unit: "box of 12", description: "Mini cocoa jowar cookies dotted with tiny chocolate chips.", image: "assets/product-jowar-mini-chocolate.jpg", egglessAvailable: true },
  { id: "jowar-mini-almond", name: "Jowar Mini Cookies — Almond", category: "jowar", price: 259, unit: "box of 12", description: "Mini jowar cookies with a generous toasted almond topping.", image: "assets/product-jowar-mini-almond.jpg", egglessAvailable: true },

  { id: "festive-single-box", name: "Festive Single Box", category: "specials", price: 149, unit: "1 piece gift box", description: "One brownie in a festive gift box, neatly wrapped and ready to share.", image: "assets/special-single-box.jpg", leadTimeDays: 10, egglessAvailable: true },
  { id: "festive-two-box", name: "Festive 2-Piece Box", category: "specials", price: 279, unit: "2 piece gift box", description: "A pair of rich brownies presented in a festive keepsake box.", image: "assets/special-two-box.jpg", leadTimeDays: 10, egglessAvailable: true },
  { id: "festive-four-box", name: "Festive 4-Piece Box", category: "specials", price: 499, unit: "4 piece gift box", description: "A gift-ready assortment of four brownies and cookies.", image: "assets/special-four-box.jpg", leadTimeDays: 10, egglessAvailable: true, bestseller: true },
  { id: "festive-six-box", name: "Festive 6-Piece Box", category: "specials", price: 699, unit: "6 piece gift box", description: "Our generous festive hamper with six assorted brownies and cookies.", image: "assets/special-six-box.jpg", leadTimeDays: 10, egglessAvailable: true }
];

// =============================================================================
// CONTENT: customer order gallery
// Add image file names from assets/ in the order you want to display them.
// =============================================================================
const GALLERY = [
    "order-31.jpg",
    "order-31-1.jpg",
    "order-32.jpg",
    "order-32-1.jpg",
    "order-32-2.jpg",
    "order-32-3.jpg",
    "order-33.jpg",
    "order-33-1.jpg",
    "order-34-a.jpg",
    "order-34-b.jpg",
    "order-34-c.jpg",
    "order-34-d.jpg",
    "order-34-e.jpg",
    "order-34-f.jpg",
    "order-34-g.jpg",
    "order-34-h.jpg",
    "order-34-i.jpg",
    "order-34-j.jpg"
];

// =============================================================================
// SETTINGS AND CURRENT PAGE STATE
// =============================================================================
const WHATSAPP = "919629905786";
const CART_KEY = "deliz-static-cart";

let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
let category = "all";
let diet = "all";
let lightboxIndex = 0;

const app = document.querySelector("#app");

// =============================================================================
// HELPERS: formatting and product lookup
// =============================================================================
const money = n =>
    `₹${Number(n).toLocaleString("en-IN")}`;

const product = id =>
    PRODUCTS.find(p => p.id === id);

const selected = (p, oid) =>
    p.options?.find(o => o.id === oid) ||
    p.options?.[0] ||
    {
        id: "default",
        label: p.unit,
        price: p.price
    };

// =============================================================================
// CART: browser storage, cart feedback, and item updates
// =============================================================================
function save(){

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    document.querySelector("#cart-count").textContent =
        cart.reduce((s,x) => s + x.qty, 0);
}

function toast(text){

    const el = document.querySelector("#toast");

    el.textContent = text;

    el.classList.add("show");

    setTimeout(
        () => el.classList.remove("show"),
        1800
    );
}

function add(
    id,
    optionId = "default",
    qty = 1,
    go = false
){

    const p = product(id);
    const o = selected(p, optionId);

    const found =
        cart.find(
            x =>
                x.id === id &&
                x.optionId === o.id
        );

    if(found){

        found.qty += qty;

    }else{

        cart.push({
            id,
            optionId:o.id,
            qty
        });
    }

    save();

    toast(`${p.name} added to your box`);

    if(go)
        location.hash = "#cart";
}

function dietOf(p){

    return ["ragi","jowar"].includes(p.category)
        ? "healthy"
        : "regular";
}

// =============================================================================
// REUSABLE UI TEMPLATES
// =============================================================================
function card(p){

    const o = selected(p);

    return `
        <article class="product-card">

            <a href="#product/${p.id}">
                <img
                    src="${p.image}"
                    alt="${p.name}"
                    loading="lazy"
                >
            </a>

            <div class="product-info">

                <div class="badges">

                    ${
                        p.bestseller
                        ? '<span class="badge">Bestseller</span>'
                        : ''
                    }

                    <span class="badge">
                        ${
                            dietOf(p) === "healthy"
                            ? "Healthy"
                            : "Regular"
                        }
                    </span>

                </div>

                <a href="#product/${p.id}">
                    <h3>${p.name}</h3>
                </a>

                <p class="desc">
                    ${p.description}
                </p>

                <div class="product-meta">

                    <div>

                        <span class="price">
                            ${p.options ? "From " : ""}
                            ${money(o.price)}
                        </span>

                        <div class="unit">
                            ${o.label}
                            ${
                                p.exactPrice
                                ? " · Menu price"
                                : " · Estimated"
                            }
                        </div>

                    </div>

                </div>

                <div class="card-actions">

                    <a
                        class="btn secondary"
                        href="#product/${p.id}">
                        View
                    </a>

                    <button
                        class="btn"
                        data-add="${p.id}">
                        Add
                    </button>

                </div>

            </div>

        </article>
    `;
}

function intro(title,text){

    return `
        <section class="page-intro">

            <div class="container">

                <h1>${title}</h1>

                <p class="lead">
                    ${text}
                </p>

            </div>

        </section>
    `;
}

function homeCard(p){

    const o = selected(p);

    return `
        <article class="product-card home-product-card">

            <a href="#product/${p.id}">
                <img
                    src="${p.image}"
                    alt="${p.name}"
                    loading="lazy"
                >
            </a>

            <div class="product-info">

                <div class="home-card-top">

                    <a href="#product/${p.id}">
                        <h3>${p.name}</h3>
                    </a>

                    ${
                        p.bestseller
                        ? '<span class="badge">Bestseller</span>'
                        : ''
                    }

                </div>

                <div class="unit home-unit">
                    ${o.label}
                </div>

                <p class="desc">
                    ${p.description}
                </p>

                ${
                    p.egglessAvailable
                    ? '<p class="home-availability">Eggless available</p>'
                    : ''
                }

                ${
                    p.options
                    ? `
                        <div class="home-options">

                            ${
                                p.options.map(
                                    (x,i) => `
                                        <button
                                            class="filter-btn ${i === 0 ? "active" : ""}"
                                            data-home-option="${p.id}|${x.id}">
                                            ${x.label} · ${money(x.price)}
                                        </button>
                                    `
                                ).join("")
                            }

                        </div>
                    `
                    : ''
                }

                <div class="home-card-bottom">

                    <div>

                        <span class="price">
                            ${money(o.price)}
                        </span>

                        <div class="unit home-price-label">
                            Menu price
                        </div>

                    </div>

                    <button
                        class="btn"
                        data-add="${p.id}">
                        Order
                    </button>

                </div>

            </div>

        </article>
    `;
}

// =============================================================================
// PAGE TEMPLATES: home, shop, specials, product, cart, checkout, about, contact
// =============================================================================
function home(){

    const best =
        PRODUCTS
            .filter(
                p =>
                    p.bestseller &&
                    !p.leadTimeDays
            )
            .slice(0,4);

    return `
        <div class="page home-page">

            <!-- HOME: HERO -->
            <section class="section-warm">

                <div class="hero">

                    <div>

                        <span class="eyebrow">
                            Home bakery · Baked to order
                        </span>

                        <h1>
                            Brownies and cookies worth coming back for.
                        </h1>

                        <p>
                            Every batch is baked with the finest ingredients — rich butter,
                            real chocolate and no shortcuts. Pick your favourites and
                            order in under a minute.
                        </p>

                        <div class="actions">

                            <a class="btn" href="#shop">
                                Order now
                            </a>

                            <a class="btn secondary" href="#specials">
                                View specials
                            </a>

                        </div>

                        <div class="hero-proof" aria-label="Deliz service highlights">
                            <span><i aria-hidden="true">⌁</i><em><b>Premium</b>Ingredients</em></span>
                            <span><i aria-hidden="true">♧</i><em><b>Freshly</b>Baked</em></span>
                            <span><i aria-hidden="true">♡</i><em><b>Made</b>with Love</em></span>
                        </div>

                    </div>

                    <div class="hero-visual">
                        <span class="hero-stamp">Freshly<br>made</span>
                        <img src="assets/hero.jpg" alt="Fresh Deliz cookies and brownies">
                        <span class="hero-caption">A little box of<br>joy, baked daily.</span>
                    </div>

                </div>

            </section>

            <!-- HOME: BESTSELLERS -->
            <section class="container bestsellers-section">

                <div class="section-heading">

                    <div>

                        <h2>Bestsellers</h2>

                        <p>
                            The ones people keep re-ordering.
                        </p>

                    </div>

                    <a class="text-link" href="#shop">
                        View full menu
                    </a>

                </div>

                <div class="product-grid">
                    ${best.map(homeCard).join("")}
                </div>

            </section>

            <!-- HOME: REAL ORDERS GALLERY -->
            <section class="container gallery-showcase">

                <div class="gallery-head">

                    <h2>
                        Real orders, delivered
                    </h2>

                    <p>
                        Actual boxes packed and delivered to our customers —
                        real bakes, real smiles.
                    </p>

                    <small>
                        Click to view images
                    </small>

                </div>

                <div class="gallery">

                    ${
                        GALLERY.map(
                            (x,i) => `
                                <button
                                    data-photo="${i}"
                                    aria-label="View delivered order ${i+1}">

                                    <img
                                        src="assets/${x}"
                                        alt="Real Deliz order delivered to a customer"
                                        loading="lazy"
                                    >

                                </button>
                            `
                        ).join("")
                    }

                </div>

            </section>

            <!-- HOME: SERVICE INFORMATION -->
            <section class="container home-info-section">

                <div class="feature-grid">

                    ${
                        [
                            [
                                "Regular",
                                "Classic brownies and cookies baked fresh for every order."
                            ],
                            [
                                "Healthy",
                                "Wholesome ragi and jowar options for a lighter treat."
                            ],
                            [
                                "Eggless available",
                                "Choose egg or eggless and tell us your preference at checkout."
                            ],
                            [
                                "Baked to order",
                                "Nothing sits on a shelf. We bake after your order is placed."
                            ],
                            [
                                "Delivered chilled",
                                "Careful packing so your box arrives exactly as it left."
                            ],
                            [
                                "Festive boxes",
                                "Gift hampers and festive boxes need 10 days’ notice."
                            ]
                        ]
                        .map(
                            x => `
                                <div>

                                    <h3>${x[0]}</h3>

                                    <p>
                                        ${x[1]}
                                    </p>

                                </div>
                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        </div>
    `;
}

function shop(){

    const categories = [
        ["all","All treats"],
        ["treats","Menu treats"],
        ["brownies","Brownies"],
        ["ragi","Ragi cookies"],
        ["jowar","Jowar cookies"]
    ];

    let list =
        PRODUCTS.filter(
            p =>
                p.category !== "specials" &&
                (
                    category === "all" ||
                    p.category === category
                ) &&
                (
                    diet === "all" ||
                    diet === "eggless" && p.egglessAvailable ||
                    dietOf(p) === diet
                )
        );

    return `
        <div class="page">

            ${intro(
                "Shop brownies & cookies",
                "Choose a favourite, select its size, and build your box."
            )}

            <section class="container">

                <div class="filters">

                    <div class="filter-group">

                        ${
                            categories.map(
                                x => `
                                    <button
                                        class="filter-btn ${category === x[0] ? "active" : ""}"
                                        data-category="${x[0]}">
                                        ${x[1]}
                                    </button>
                                `
                            ).join("")
                        }

                    </div>

                    <span class="filter-divider"></span>

                    <div class="filter-group">

                        ${
                            [
                                ["all","All diets"],
                                ["regular","Regular"],
                                ["healthy","Healthy"],
                                ["eggless","Eggless available"]
                            ]
                            .map(
                                x => `
                                    <button
                                        class="filter-btn ${diet === x[0] ? "active" : ""}"
                                        data-diet="${x[0]}">
                                        ${x[1]}
                                    </button>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>

                <div class="product-grid">
                    ${list.map(card).join("")}
                </div>

            </section>

        </div>
    `;
}

function specials(){

    const list =
        PRODUCTS.filter(
            p => p.category === "specials"
        );

    return `
        <div class="page">

            ${intro(
                "Specials & festive boxes",
                "Gift-ready boxes packed with our brownies and cookies."
            )}

            <section class="container">

                <div class="notice">

                    <strong>
                        Festive orders need 10 days.
                    </strong>

                    Please order early so every box can be baked
                    and packed with care.

                </div>

                <div class="product-grid">
                    ${list.map(card).join("")}
                </div>

                <div class="special-info">

                    ${
                        [
                            [
                                "🎁",
                                "Gift-ready",
                                "Carefully packed and ready to share."
                            ],
                            [
                                "✍",
                                "Personal touches",
                                "Add your note during checkout."
                            ],
                            [
                                "📅",
                                "Plan ahead",
                                "Festive boxes need 10 days."
                            ]
                        ]
                        .map(
                            x => `
                                <div>

                                    <span>${x[0]}</span>

                                    <div>

                                        <h3>${x[1]}</h3>

                                        <p class="muted">
                                            ${x[2]}
                                        </p>

                                    </div>

                                </div>
                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        </div>
    `;
}

function detail(id){

    const p = product(id);

    if(!p)
        return empty("This treat could not be found.");

    const o = selected(p);

    return `
        <div class="page">

            <section class="container">

                <div class="product-detail">

                    <img
                        src="${p.image}"
                        alt="${p.name}"
                    >

                    <div>

                        <div class="badges">

                            <span class="badge">
                                ${
                                    dietOf(p) === "healthy"
                                    ? "Healthy"
                                    : "Regular"
                                }
                            </span>

                            ${
                                p.egglessAvailable
                                ? '<span class="badge">Eggless available</span>'
                                : ''
                            }

                        </div>

                        <h1>
                            ${p.name}
                        </h1>

                        <p class="lead">
                            ${p.description}
                        </p>

                        <div class="option-picker">

                            <label>
                                ${p.options ? "Choose a size" : "Size"}
                            </label>

                            ${
                                p.options
                                ? `
                                    <div class="filter-group">

                                        ${
                                            p.options.map(
                                                (x,i) => `
                                                    <button
                                                        class="filter-btn ${i === 0 ? "active" : ""}"
                                                        data-option="${x.id}"
                                                        data-price="${x.price}">
                                                        ${x.label} · ${money(x.price)}
                                                    </button>
                                                `
                                            ).join("")
                                        }

                                    </div>
                                `
                                : `
                                    <strong>
                                        ${p.unit}
                                    </strong>
                                `
                            }

                        </div>

                        <p
                            class="price"
                            id="detail-price"
                            style="margin-top:24px">
                            ${money(o.price)}
                        </p>

                        ${
                            p.leadTimeDays
                            ? `
                                <div class="notice">
                                    Please order this festive box
                                    10 days in advance.
                                </div>
                            `
                            : ''
                        }

                        <div class="actions">

                            <div class="qty-picker">

                                <button data-qty-minus>
                                    −
                                </button>

                                <span id="detail-qty">
                                    1
                                </span>

                                <button data-qty-plus>
                                    +
                                </button>

                            </div>

                            <button
                                class="btn"
                                data-detail-add="${p.id}">
                                Add to box
                            </button>

                            <button
                                class="btn secondary"
                                data-detail-order="${p.id}">
                                Order now
                            </button>

                        </div>

                        <ul class="bullet-list">

                            <li>
                                ✓ Baked fresh to order
                            </li>

                            <li>
                                ✓ ${
                                    p.egglessAvailable
                                    ? "Eggless available"
                                    : "Made with quality ingredients"
                                }
                            </li>

                            <li>
                                ✓ Delivered chilled for freshness
                            </li>

                        </ul>

                    </div>

                </div>

                <div class="related">

                    <h2>
                        You may also like
                    </h2>

                    <div class="product-grid">

                        ${
                            PRODUCTS
                            .filter(
                                x =>
                                    x.id !== p.id &&
                                    x.category === p.category
                            )
                            .slice(0,4)
                            .map(card)
                            .join("")
                        }

                    </div>

                </div>

            </section>

        </div>
    `;
}

function lines(){

    return cart
        .map(
            x => {

                const p = product(x.id);
                const o = selected(p,x.optionId);

                return {
                    ...x,
                    p,
                    o,
                    total:o.price * x.qty
                };
            }
        )
        .filter(x => x.p);
}

function empty(
    text = "Your box is empty."
){

    return `
        <div class="page empty">

            <h1>
                ${text}
            </h1>

            <p>
                Add brownies and cookies from our menu.
            </p>

            <a class="btn" href="#shop">
                Start shopping
            </a>

        </div>
    `;
}

function cartPage(){

    const list = lines();

    if(!list.length)
        return empty();

    const total =
        list.reduce(
            (s,x) => s + x.total,
            0
        );

    return `
        <div class="page">

            <section class="container">

                <h1>
                    Your box
                </h1>

                <p class="lead">
                    Review your treats before checkout.
                </p>

                <div class="cart-layout">

                    <div class="cart-items">

                        ${
                            list.map(
                                x => `
                                    <article class="cart-item">

                                        <img
                                            src="${x.p.image}"
                                            alt="${x.p.name}">

                                        <div class="cart-item-copy">

                                            <div class="cart-item-top">

                                                <div>

                                                    <h3>
                                                        ${x.p.name}
                                                    </h3>

                                                    <p class="unit">
                                                        ${x.o.label}
                                                        ·
                                                        ${money(x.o.price)}
                                                        each
                                                    </p>

                                                </div>

                                                <strong>
                                                    ${money(x.total)}
                                                </strong>

                                            </div>

                                            <div class="cart-item-bottom">

                                                <div class="qty-picker">

                                                    <button
                                                        data-cart-minus="${x.p.id}|${x.o.id}">
                                                        −
                                                    </button>

                                                    <span>
                                                        ${x.qty}
                                                    </span>

                                                    <button
                                                        data-cart-plus="${x.p.id}|${x.o.id}">
                                                        +
                                                    </button>

                                                </div>

                                                <button
                                                    class="btn ghost"
                                                    data-remove="${x.p.id}|${x.o.id}">
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                    </article>
                                `
                            ).join("")
                        }

                    </div>

                    <aside class="summary">

                        <h2>
                            Order summary
                        </h2>

                        <div class="summary-line">

                            <span>
                                ${list.reduce(
                                    (s,x) => s + x.qty,
                                    0
                                )}
                                items
                            </span>

                            <span>
                                ${money(total)}
                            </span>

                        </div>

                        <div class="summary-line summary-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                ${money(total)}
                            </strong>

                        </div>

                        <a
                            class="btn full"
                            href="#checkout">
                            Checkout
                        </a>

                        <p class="fine">
                            Festive boxes need 10 days.
                            Other orders need at least 48 hours.
                        </p>

                    </aside>

                </div>

            </section>

        </div>
    `;
}

function checkout(){

    const list = lines();

    if(!list.length)
        return empty();

    const total =
        list.reduce(
            (s,x) => s + x.total,
            0
        );

    return `
        <div class="page">

            <section class="container">

                <h1>
                    Checkout
                </h1>

                <p class="lead">
                    Enter your details, then send the complete order on WhatsApp.
                </p>

                <div class="checkout-layout">

                    <form
                        id="checkout-form"
                        class="form">

                        <div class="field">

                            <label for="name">
                                Name *
                            </label>

                            <input
                                id="name"
                                name="name"
                                required>

                        </div>

                        <div class="field">

                            <label for="phone">
                                Phone number *
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                inputmode="tel"
                                required>

                        </div>

                        <div class="field">

                            <label for="address">
                                Delivery address *
                            </label>

                            <textarea
                                id="address"
                                name="address"
                                required>
                            </textarea>

                        </div>

                        <div class="field">

                            <label for="date">
                                Preferred delivery date *
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                required>

                        </div>

                        <div class="field">

                            <label for="notes">
                                Notes
                            </label>

                            <textarea
                                id="notes"
                                name="notes"
                                placeholder="Eggless request, gift note, delivery instructions...">
                            </textarea>

                        </div>

                        <button
                            class="btn"
                            type="submit">
                            Confirm on WhatsApp
                        </button>

                    </form>

                    <aside class="summary checkout-summary">

                        <h2>
                            Your order
                        </h2>

                        ${
                            list.map(
                                x => `
                                    <div class="summary-line">

                                        <span>

                                            ${x.qty}
                                            ×
                                            ${x.p.name}

                                            <small class="unit">
                                                <br>
                                                ${x.o.label}
                                            </small>

                                        </span>

                                        <span>
                                            ${money(x.total)}
                                        </span>

                                    </div>
                                `
                            ).join("")
                        }

                        <div class="summary-line summary-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                ${money(total)}
                            </strong>

                        </div>

                        <p class="fine">
                            This standalone website sends orders through WhatsApp only.
                        </p>

                    </aside>

                </div>

            </section>

        </div>
    `;
}

function about(){

    return `
        <div class="page">

            ${intro(
                "Baked with care, shared with joy",
                "Deliz is a small home bakery by Saki, focused on brownies and cookies that feel homemade and special."
            )}

            <section class="container narrow">

                <img
                    class="story-image"
                    src="assets/hero.jpg"
                    alt="Freshly baked Deliz treats">

                <div class="story-grid">

                    <div>

                        <h2>
                            Our story
                        </h2>

                        <p class="lead">
                            What began as a love for baking grew into carefully made boxes for celebrations, thoughtful gifts and everyday cravings.
                        </p>

                    </div>

                    <div>

                        <h2>
                            Our promise
                        </h2>

                        <p class="lead">
                            Every batch is made to order with quality ingredients, packed neatly and delivered chilled for freshness.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    `;
}

function contact(){

    return `
        <div class="page">

            ${intro(
                "Let’s plan your order",
                "Questions, custom quantities or festive gifting? Reach out and we’ll help."
            )}

            <section class="container">

                <div class="contact-grid">

                    <a
                        class="contact-card"
                        href="https://wa.me/${WHATSAPP}"
                        target="_blank">

                        <span>
                            💬
                        </span>

                        <h3>
                            WhatsApp
                        </h3>

                        <p>
                            Message Deliz at +91 96299 05786.
                        </p>

                    </a>

                    <a
                        class="contact-card"
                        href="https://www.instagram.com/deliz_saki/"
                        target="_blank">

                        <span>
                            ◎
                        </span>

                        <h3>
                            Instagram
                        </h3>

                        <p>
                            See new bakes at @deliz_saki.
                        </p>

                    </a>

                    <div class="contact-card">

                        <span>
                            📅
                        </span>

                        <h3>
                            Order ahead
                        </h3>

                        <p>
                            Fresh orders need 48 hours.
                            Festive boxes need 10 days.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    `;
}

// =============================================================================
// ROUTING: chooses the page from the URL hash, for example #shop or #cart
// =============================================================================
function render(){

    const raw =
        location.hash.slice(1) || "home";

    const [page,id] =
        raw.split("/");

    document.title =
        `${page[0].toUpperCase() + page.slice(1)} — Deliz`;

    app.innerHTML =
        page === "home"
        ? home()
        : page === "shop"
        ? shop()
        : page === "specials"
        ? specials()
        : page === "product"
        ? detail(id)
        : page === "cart"
        ? cartPage()
        : page === "checkout"
        ? checkout()
        : page === "about"
        ? about()
        : page === "contact"
        ? contact()
        : home();

    app.focus({
        preventScroll:true
    });

    window.scrollTo(0,0);

    bind();

    save();
}

// =============================================================================
// INTERACTIONS: buttons, form controls, gallery, and keyboard behavior
// =============================================================================
function bind(){

    document
        .querySelectorAll("[data-add]")
        .forEach(
            b =>
                b.onclick =
                    () => add(b.dataset.add)
        );

    document
        .querySelectorAll("[data-category]")
        .forEach(
            b =>
                b.onclick =
                    () => {
                        category =
                            b.dataset.category;

                        render();
                    }
        );

    document
        .querySelectorAll("[data-diet]")
        .forEach(
            b =>
                b.onclick =
                    () => {
                        diet =
                            b.dataset.diet;

                        render();
                    }
        );

    document
        .querySelectorAll("[data-photo]")
        .forEach(
            b =>
                b.onclick =
                    () =>
                        openPhoto(
                            +b.dataset.photo
                        )
        );

    let chosen = "default";
    let qty = 1;

    document
        .querySelectorAll("[data-option]")
        .forEach(
            b =>
                b.onclick =
                    () => {

                        chosen =
                            b.dataset.option;

                        document
                            .querySelectorAll("[data-option]")
                            .forEach(
                                x =>
                                    x.classList.remove("active")
                            );

                        b.classList.add("active");

                        document.querySelector(
                            "#detail-price"
                        ).textContent =
                            money(
                                b.dataset.price
                            );
                    }
        );

    document
        .querySelector("[data-qty-minus]")
        ?.addEventListener(
            "click",
            () => {

                qty =
                    Math.max(
                        1,
                        qty - 1
                    );

                document.querySelector(
                    "#detail-qty"
                ).textContent =
                    qty;
            }
        );

    document
        .querySelector("[data-qty-plus]")
        ?.addEventListener(
            "click",
            () => {

                qty++;

                document.querySelector(
                    "#detail-qty"
                ).textContent =
                    qty;
            }
        );

    document
        .querySelector("[data-detail-add]")
        ?.addEventListener(
            "click",
            e =>
                add(
                    e.currentTarget.dataset.detailAdd,
                    chosen,
                    qty
                )
        );

    document
        .querySelector("[data-detail-order]")
        ?.addEventListener(
            "click",
            e =>
                add(
                    e.currentTarget.dataset.detailOrder,
                    chosen,
                    qty,
                    true
                )
        );

    document
        .querySelectorAll(
            "[data-cart-minus],[data-cart-plus],[data-remove]"
        )
        .forEach(
            b =>
                b.onclick =
                    () => {

                        const key =
                            b.dataset.cartMinus ||
                            b.dataset.cartPlus ||
                            b.dataset.remove;

                        const [id,oid] =
                            key.split("|");

                        const x =
                            cart.find(
                                y =>
                                    y.id === id &&
                                    y.optionId === oid
                            );

                        if(!x)
                            return;

                        if(
                            b.dataset.remove !== undefined ||
                            (
                                x.qty === 1 &&
                                b.dataset.cartMinus !== undefined
                            )
                        ){

                            cart =
                                cart.filter(
                                    y => y !== x
                                );

                        }else{

                            x.qty +=
                                b.dataset.cartPlus !== undefined
                                ? 1
                                : -1;
                        }

                        save();
                        render();
                    }
        );

    document
        .querySelector("#checkout-form")
        ?.addEventListener(
            "submit",
            sendOrder
        );
}

// =============================================================================
// CHECKOUT AND IMAGE LIGHTBOX
// =============================================================================
function sendOrder(e){

    e.preventDefault();

    const fd =
        new FormData(
            e.currentTarget
        );

    const list =
        lines();

    const total =
        list.reduce(
            (s,x) => s + x.total,
            0
        );

    const festive =
        list.some(
            x => x.p.leadTimeDays
        );

    const msg = [
        "Hello Deliz! I would like to place an order:",
        "",
        ...list.map(
            x =>
                `• ${x.qty} × ${x.p.name} (${x.o.label}) — ${money(x.total)}`
        ),
        "",
        `Total: ${money(total)}`,
        "",
        `Name: ${fd.get("name")}`,
        `Phone: ${fd.get("phone")}`,
        `Delivery date: ${fd.get("date")}`,
        `Address: ${fd.get("address")}`,
        `Notes: ${fd.get("notes") || "None"}`,
        "",
        festive
            ? "This order includes a festive box (10-day lead time)."
            : "Standard order lead time noted."
    ];

    window.open(
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            msg.join("\n")
        )}`,
        "_blank"
    );
}

function openPhoto(i){

    lightboxIndex = i;

    updatePhoto();

    document.querySelector(
        "#lightbox"
    ).hidden = false;

    document.body.classList.add(
        "locked"
    );
}

function updatePhoto(){

    document.querySelector(
        "#lightbox-image"
    ).src =
        `assets/${GALLERY[lightboxIndex]}`;

    document.querySelector(
        "#lightbox-image"
    ).alt =
        `Delivered Deliz order ${lightboxIndex + 1}`;

    document.querySelector(
        "#lightbox-count"
    ).textContent =
        `${lightboxIndex + 1} / ${GALLERY.length}`;
}

function closePhoto(){

    document.querySelector(
        "#lightbox"
    ).hidden = true;

    document.body.classList.remove(
        "locked"
    );
}

document.querySelector(
    ".lightbox-close"
).onclick = closePhoto;

document.querySelector(
    ".lightbox-prev"
).onclick = () => {

    lightboxIndex =
        (
            lightboxIndex -
            1 +
            GALLERY.length
        ) % GALLERY.length;

    updatePhoto();
};

document.querySelector(
    ".lightbox-next"
).onclick = () => {

    lightboxIndex =
        (
            lightboxIndex +
            1
        ) % GALLERY.length;

    updatePhoto();
};

document.addEventListener(
    "keydown",
    e => {

        if(
            document.querySelector(
                "#lightbox"
            ).hidden
        )
            return;

        if(e.key === "Escape")
            closePhoto();

        if(e.key === "ArrowLeft")
            document.querySelector(
                ".lightbox-prev"
            ).click();

        if(e.key === "ArrowRight")
            document.querySelector(
                ".lightbox-next"
            ).click();
    }
);

window.addEventListener(
    "hashchange",
    render
);

document.querySelector(
    "#year"
).textContent =
    new Date().getFullYear();

save();
render();