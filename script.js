// Base de datos de productos (Perfumería Árabe de Nicho)
const products = [
    {
        id: 1,
        name: "Oud Al-Malik",
        arabicName: "عود الملك",
        category: "oud",
        gender: "unisex",
        priceUSD: 180.00,
        rating: 5,
        reviewsCount: 42,
        notes: "Oud Camboyano, Cuero ahumado, Rosa Taif",
        description: "Un extracto real de oud envejecido en barricas de roble durante 12 años. Intensidad nocturna absoluta con una fijación superior a 24 horas.",
        icon: "fa-crown",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Ambar Zahra",
        arabicName: "زهرا الأنهار",
        category: "ambar",
        gender: "ella",
        priceUSD: 145.00,
        rating: 5,
        reviewsCount: 28,
        notes: "Ámbar dorado, Vainilla Bourbon, Canela de Ceylán",
        description: "Una sinfonía cálida y dulce que evoca las puestas de sol sobre los palacios orientales. Seductor y envolvente.",
        icon: "fa-sun",
        badge: "Exclusivo"
    },
    {
        id: 3,
        name: "Layali Taj",
        arabicName: "ليالي تاج",
        category: "especias",
        gender: "el",
        priceUSD: 160.00,
        rating: 4,
        reviewsCount: 35,
        notes: "Cardamomo negro, Nuez moscada, Sándalo",
        description: "Especias orientales vibrantes fundidas con maderas nobles. Diseñado para el hombre carismático y de presencia imponente.",
        icon: "fa-fire",
        badge: "Nuevo"
    },
    {
        id: 4,
        name: "Ward Dimashq",
        arabicName: "ورد دمشق",
        category: "floral",
        gender: "unisex",
        priceUSD: 130.00,
        rating: 5,
        reviewsCount: 51,
        notes: "Rosa de Damasco, Almizcle blanco, Azafrán",
        description: "La frescura mística de mil pétalos de rosa damascena cosechados al amanecer, realzados por el toque especiado del azafrán.",
        icon: "fa-spa",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Oud Saffron",
        arabicName: "زعفران عود",
        category: "oud",
        gender: "el",
        priceUSD: 195.00,
        rating: 5,
        reviewsCount: 19,
        notes: "Oud puro, Azafrán iraní, Pachulí",
        description: "Una colisión majestuosa entre el azafrán más puro del mundo y resinas oscuras de oud. Lujo nocturno en su máxima expresión.",
        icon: "fa-gem",
        badge: "Limitado"
    },
    {
        id: 6,
        name: "Musk Al-Ghazal",
        arabicName: "مسك الغزال",
        category: "ambar",
        gender: "unisex",
        priceUSD: 155.00,
        rating: 4,
        reviewsCount: 24,
        notes: "Almizcle blanco, Ámbar gris, Lirio del valle",
        description: "Suave, limpio y persistente. Un attar magnético que se funde íntimamente con la piel creando una segunda capa aromática.",
        icon: "fa-feather",
        badge: "Esencial"
    },
    {
        id: 7,
        name: "Bakhoor Royal",
        arabicName: "بخور ملكي",
        category: "especias",
        gender: "unisex",
        priceUSD: 140.00,
        rating: 5,
        reviewsCount: 31,
        notes: "Incienso sagrado, Madera de agar, Clavo",
        description: "Inspirado en los rituales aromáticos de los antiguos palacios. Un aroma balsámico, ahumado y espiritualmente profundo.",
        icon: "fa-dharmachakra",
        badge: "Artesanal"
    },
    {
        id: 8,
        name: "Jasmine Sultan",
        arabicName: "ياسمين سلطان",
        category: "floral",
        gender: "ella",
        priceUSD: 125.00,
        rating: 4,
        reviewsCount: 22,
        notes: "Jazmín sambac, Miel dorada, Ámbar",
        description: "Dulce, embriagador y misterioso. Flores blancas de jazmín nocturno maceradas en aceites ricos de miel y ámbar.",
        icon: "fa-seedling",
        badge: "Delicado"
    },
    {
        id: 9,
        name: "Khamrah",
        arabicName: "خمرة",
        category: "ambar",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Canela, dátiles, praliné, vainilla",
        description: "Una fragancia cálida y dulce con un carácter especiado y gourmand.",
        icon: "fa-mug-hot",
        badge: "Consultar"
    },
    {
        id: 10,
        name: "Yara",
        arabicName: "يارا",
        category: "floral",
        gender: "ella",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Frutas, flores, vainilla",
        description: "Un perfil femenino, suave y dulce con acordes frutales y florales.",
        icon: "fa-heart",
        badge: "Consultar"
    },
    {
        id: 11,
        name: "Asad",
        arabicName: "أسد",
        category: "especias",
        gender: "el",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Pimienta negra, tabaco, café, vainilla",
        description: "Una mezcla intensa de especias y acordes cálidos para uso diario o nocturno.",
        icon: "fa-shield-halved",
        badge: "Consultar"
    },
    {
        id: 12,
        name: "Fakhar Black",
        arabicName: "فخر الأسود",
        category: "especias",
        gender: "el",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Aromáticos, especias, maderas",
        description: "Una fragancia masculina aromática con un fondo amaderado.",
        icon: "fa-user-tie",
        badge: "Consultar"
    },
    {
        id: 13,
        name: "Bade'e Al Oud Oud for Glory",
        arabicName: "بديع العود",
        category: "oud",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Azafrán, nuez moscada, oud, pachulí",
        description: "Una composición oriental marcada por el oud y las especias.",
        icon: "fa-crown",
        badge: "Consultar"
    },
    {
        id: 14,
        name: "Ameer Al Oudh Intense Oud",
        arabicName: "أمير العود",
        category: "oud",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Oud, maderas, vainilla, humo",
        description: "Acordes ahumados y amaderados con un matiz dulce de vainilla.",
        icon: "fa-tree",
        badge: "Consultar"
    },
    {
        id: 15,
        name: "Qaed Al Fursan",
        arabicName: "قائد الفرسان",
        category: "oud",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Piña, azafrán, oud, maderas",
        description: "Una salida frutal que se combina con especias y notas amaderadas.",
        icon: "fa-horse",
        badge: "Consultar"
    },
    {
        id: 16,
        name: "Ana Abiyedh Rouge",
        arabicName: "أنا أبيض روج",
        category: "ambar",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Azafrán, almendra amarga, ámbar",
        description: "Un perfil dulce y ambarado con una apertura especiada.",
        icon: "fa-gem",
        badge: "Consultar"
    },
    {
        id: 17,
        name: "Mayar",
        arabicName: "ميار",
        category: "floral",
        gender: "ella",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Frutas, flores, almizcle",
        description: "Una fragancia floral y frutal de carácter suave y luminoso.",
        icon: "fa-flower",
        badge: "Consultar"
    },
    {
        id: 18,
        name: "Nebras",
        arabicName: "نبراس",
        category: "ambar",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Vainilla, cacao, frutos rojos",
        description: "Un aroma gourmand dulce con notas cálidas y cremosas.",
        icon: "fa-cookie-bite",
        badge: "Consultar"
    },
    {
        id: 19,
        name: "Club de Nuit Intense Man",
        arabicName: "كلوب دي نويت",
        category: "especias",
        gender: "el",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Cítricos, especias, abedul, almizcle",
        description: "Una fragancia masculina cítrica y amaderada de estela marcada.",
        icon: "fa-moon",
        badge: "Consultar"
    },
    {
        id: 20,
        name: "9PM",
        arabicName: "٩ مساءً",
        category: "ambar",
        gender: "el",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Manzana, canela, vainilla, ámbar",
        description: "Un perfil nocturno dulce y especiado con fondo ambarado.",
        icon: "fa-clock",
        badge: "Consultar"
    },
    {
        id: 21,
        name: "Hawas for Him",
        arabicName: "حواس",
        category: "especias",
        gender: "el",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Cítricos, notas acuáticas, maderas",
        description: "Una fragancia fresca con acordes acuáticos y un fondo amaderado.",
        icon: "fa-water",
        badge: "Consultar"
    },
    {
        id: 22,
        name: "Shaghaf Oud",
        arabicName: "شغف عود",
        category: "oud",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Azafrán, oud, rosa, praliné",
        description: "Una composición intensa de oud y rosa con un toque dulce.",
        icon: "fa-heart",
        badge: "Consultar"
    },
    {
        id: 23,
        name: "Amber Oud Gold Edition",
        arabicName: "عنبر عود",
        category: "ambar",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Frutas, ámbar, vainilla, maderas",
        description: "Una fragancia frutal y ambarada con un fondo cálido.",
        icon: "fa-sun",
        badge: "Consultar"
    },
    {
        id: 24,
        name: "Toscano Leather",
        arabicName: "توسكانو ليذر",
        category: "especias",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Cuero, especias, maderas",
        description: "Un perfil de cuero intenso con acordes especiados y amaderados.",
        icon: "fa-fire",
        badge: "Consultar"
    },
    {
        id: 25,
        name: "Ajwad",
        arabicName: "أجواد",
        category: "ambar",
        gender: "unisex",
        priceUSD: null,
        rating: 0,
        reviewsCount: 0,
        notes: "Frutas, rosa, almizcle, ámbar",
        description: "Un aroma dulce y frutal con un corazón floral y fondo almizclado.",
        icon: "fa-leaf",
        badge: "Consultar"
    }
];

// Estado de la aplicación
let cart = [];
let currentCurrency = localStorage.getItem('fraganciasNsCurrency') || 'USD';
let currentFilter = 'all';
let currentGender = 'all';
let currentSearch = '';

const exchangeRates = {
    USD: 1,
    EUR: 0.92
};

const currencySymbols = {
    USD: '$',
    EUR: '€'
};

const storeWhatsApp = '584123028058';

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    try {
        const savedCart = JSON.parse(localStorage.getItem('fraganciasNsCart') || '[]');
        if (Array.isArray(savedCart)) {
            cart = savedCart.filter(item =>
                products.some(product => product.id === item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0
            ).map(item => ({ ...products.find(product => product.id === item.id), quantity: item.quantity }));
        }
    } catch (error) {
        console.error('No se pudo recuperar el carrito guardado.', error);
    }
    if (!Object.prototype.hasOwnProperty.call(exchangeRates, currentCurrency)) {
        currentCurrency = 'USD';
    }
    document.getElementById('currencySelect').value = currentCurrency;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

function setupEventListeners() {
    // Filtros de categoría (Notas)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('filter-active'));
            btn.classList.add('filter-active');
            currentFilter = btn.getAttribute('data-filter');
            renderProducts();
        });
    });

    // Filtros de género
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gender-btn').forEach(button => button.classList.remove('gender-active'));
            btn.classList.add('gender-active');
            currentGender = btn.getAttribute('data-gender');
            renderProducts();
        });
    });

    // Buscador en tiempo real
    const searchInput = document.getElementById('searchInput');
    const searchMobileInput = document.getElementById('searchMobileInput');
    
    [searchInput, searchMobileInput].forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                currentSearch = e.target.value.toLowerCase().trim();
                [searchInput, searchMobileInput].forEach(search => {
                    if (search && search !== e.target) search.value = e.target.value;
                });
                renderProducts();
            });
        }
    });

    // Selector de moneda
    document.getElementById('currencySelect').addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        localStorage.setItem('fraganciasNsCurrency', currentCurrency);
        renderProducts();
        updateCartUI();
    });

    // Menú hamburguesa móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden') === false;
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Carrito Drawer
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const cartPanel = document.getElementById('cartPanel');

    cartBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('pointer-events-none', 'opacity-0');
        cartPanel.classList.remove('translate-x-full');
        cartDrawer.setAttribute('aria-hidden', 'false');
    });

    [cartOverlay, closeCart].forEach(el => {
        el.addEventListener('click', closeCartDrawer);
    });

    // Modal Vista Rápida
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.addEventListener('click', closeModal);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    document.querySelectorAll('[data-close-checkout]').forEach(button => {
        button.addEventListener('click', closeCheckout);
    });
    document.getElementById('checkoutForm').addEventListener('submit', sendWhatsAppReceipt);
    document.getElementById('paymentMethod').addEventListener('change', () => {
        document.getElementById('paymentMethodError').classList.add('hidden');
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeModal();
            closeCartDrawer();
            closeCheckout();
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value.trim();
        const msg = document.getElementById('newsletterMsg');
        if (email) {
            const subscriptions = JSON.parse(localStorage.getItem('fraganciasNsSubscriptions') || '[]');
            if (!subscriptions.includes(email)) subscriptions.push(email);
            localStorage.setItem('fraganciasNsSubscriptions', JSON.stringify(subscriptions));
            msg.textContent = "Suscripción guardada en este navegador (modo demostración).";
            msg.classList.remove('hidden');
            newsletterForm.reset();
            setTimeout(() => { msg.classList.add('hidden'); }, 7000);
        }
    });
}

function formatPrice(priceUSD) {
    const converted = priceUSD * exchangeRates[currentCurrency];
    return `${currencySymbols[currentCurrency]}${converted.toFixed(2)}`;
}

// Renderizar Catálogo de Productos
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesFilter = currentFilter === 'all' || p.category === currentFilter;
        const matchesGender = currentGender === 'all' || p.gender === currentGender;
        const matchesSearch = p.name.toLowerCase().includes(currentSearch) || 
                              p.arabicName.includes(currentSearch) || 
                              p.notes.toLowerCase().includes(currentSearch) ||
                              p.description.toLowerCase().includes(currentSearch);
        return matchesFilter && matchesGender && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16 text-white/50">
                <i class="fa-solid fa-bottle-droplet text-4xl mb-3 text-gold"></i>
                <p class="text-base">No se encontraron fragancias con los filtros seleccionados.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-dark-surface border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-neon transition-all duration-300 group shadow-lg";
        const genderLabel = { ella: 'Para ella', el: 'Para él', unisex: 'Unisex' }[p.gender];
        const priceLabel = p.priceUSD === null ? 'Consultar' : formatPrice(p.priceUSD);
        
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            starsHTML += `<i class="fa-solid fa-star ${i < p.rating ? 'text-gold' : 'text-white/20'}"></i>`;
        }
        const ratingHTML = p.reviewsCount
            ? `<div class="flex text-xs">${starsHTML}</div><span class="text-white/40 text-[11px] ml-1">(${p.reviewsCount})</span>`
            : '<span class="text-white/40 text-[11px]">Consulta disponibilidad</span>';

        card.innerHTML = `
            <div>
                <div class="relative w-full h-52 rounded-xl bg-dark-deep border border-white/5 flex flex-col items-center justify-center mb-4 overflow-hidden group-hover:border-cyan-neon/40 transition-colors">
                    <div class="absolute top-3 left-3 bg-dark-surface/90 border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-semibold text-gold uppercase tracking-wider">
                        ${p.badge}
                    </div>
                    <div class="absolute top-3 right-3 text-white/40 text-xs font-mono">
                        ${p.arabicName}
                    </div>
                    <i class="fa-solid ${p.icon} text-4xl text-cyan-neon drop-shadow-[0_0_10px_rgba(0,245,212,0.4)] group-hover:scale-110 transition-transform duration-300"></i>
                    <span class="text-[10px] uppercase tracking-widest text-white/50 mt-3 font-semibold">${genderLabel} • 100ml</span>
                </div>
                
                <div class="flex items-center justify-between mb-1">
                    <h3 class="font-bold text-base tracking-wide group-hover:text-cyan-neon transition-colors">${p.name}</h3>
                    <span class="font-bold text-gold text-base">${priceLabel}</span>
                </div>
                
                <div class="flex items-center gap-1 text-xs mb-2">
                    ${ratingHTML}
                </div>

                <p class="text-white/60 text-xs line-clamp-2 mb-4 font-light">${p.notes}</p>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                <button onclick="quickView(${p.id})" class="py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold hover:bg-white/10 transition-all text-center">
                    Vista Rápida
                </button>
                <button onclick="${p.priceUSD === null ? `contactProduct(${p.id})` : `addToCart(${p.id})`}" class="py-2.5 rounded-xl bg-violet-400 text-slate-950 font-bold text-xs hover:bg-violet-300 transition-all text-center">
                    ${p.priceUSD === null ? 'Consultar' : 'Añadir'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Vista Rápida Modal
function quickView(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="w-full h-80 rounded-2xl bg-dark-deep border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-neon/10 via-transparent to-transparent"></div>
            <i class="fa-solid ${product.icon} text-6xl text-cyan-neon drop-shadow-[0_0_15px_rgba(0,245,212,0.5)] mb-4"></i>
            <span class="text-sm font-bold tracking-widest text-gold">${product.arabicName}</span>
            <span class="text-xs text-white/50 uppercase tracking-wider mt-1">Extracto de Perfume • 100ml</span>
        </div>
        <div class="space-y-4">
            <div>
                <span class="text-xs uppercase tracking-widest text-cyan-neon font-semibold">${product.badge}</span>
                <h3 class="text-2xl font-bold tracking-tight mt-1">${product.name}</h3>
                <span class="text-2xl font-bold text-gold mt-2 block">${product.priceUSD === null ? 'Consultar precio' : formatPrice(product.priceUSD)}</span>
            </div>
            <p class="text-white/70 text-sm leading-relaxed">${product.description}</p>
            <div class="pt-2">
                <span class="text-xs text-white/40 uppercase tracking-wider font-semibold block mb-1">Notas Olfativas Principales:</span>
                <span class="text-xs bg-dark-surface border border-white/10 px-3 py-1.5 rounded-lg inline-block text-light-neutral">${product.notes}</span>
            </div>
            <button onclick="${product.priceUSD === null ? `contactProduct(${product.id}); closeModal();` : `addToCart(${product.id}); closeModal();`}" class="w-full py-3.5 rounded-xl bg-violet-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-violet-300 transition-all">
                ${product.priceUSD === null ? 'Consultar por WhatsApp' : 'Añadir al carrito'}
            </button>
        </div>
    `;

    const modal = document.getElementById('quickViewModal');
    const container = document.getElementById('modalContainer');
    modal.classList.remove('pointer-events-none', 'opacity-0');
    container.classList.remove('scale-95');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = document.getElementById('quickViewModal');
    const container = document.getElementById('modalContainer');
    modal.classList.add('pointer-events-none', 'opacity-0');
    container.classList.add('scale-95');
    modal.setAttribute('aria-hidden', 'true');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.add('pointer-events-none', 'opacity-0');
    document.getElementById('cartPanel').classList.add('translate-x-full');
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
}

function contactProduct(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const link = document.createElement('a');
    link.href = `https://wa.me/${storeWhatsApp}?text=${encodeURIComponent(`Hola, quisiera consultar disponibilidad y precio de ${product.name}.`)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('pointer-events-none', 'opacity-0');
    modal.setAttribute('aria-hidden', 'true');
}

function sendWhatsAppReceipt(event) {
    event.preventDefault();
    if (cart.length === 0) {
        closeCheckout();
        return;
    }

    const formData = new FormData(event.currentTarget);
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (!paymentMethod) {
        document.getElementById('paymentMethodError').classList.remove('hidden');
        return;
    }

    const orderNumber = `NS-${Date.now().toString(36).toUpperCase()}`;
    const orderDate = new Date().toLocaleString('es-VE');
    const customerName = formData.get('name').trim();
    const customerPhone = formData.get('phone').trim();
    const paymentReference = formData.get('reference').trim();
    const hasUnpricedItems = cart.some(item => item.priceUSD === null);
    const total = hasUnpricedItems
        ? 'Por confirmar'
        : formatPrice(cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0));
    const itemLines = cart.map(item => {
        const itemTotal = item.priceUSD === null
            ? 'precio por confirmar'
            : formatPrice(item.priceUSD * item.quantity);
        return `- ${item.name} x${item.quantity}: ${itemTotal}`;
    });
    const receipt = [
        '*RECIBO DE PEDIDO - FRAGANCIAS NS*',
        `Pedido: ${orderNumber}`,
        `Fecha: ${orderDate}`,
        `Cliente: ${customerName}`,
        customerPhone ? `Teléfono: ${customerPhone}` : null,
        `Método de pago: ${paymentMethod}`,
        paymentReference ? `Referencia: ${paymentReference}` : null,
        '',
        '*Productos:*',
        ...itemLines,
        `Total: ${total}`,
        '',
        'Pedido pendiente de confirmar disponibilidad, precio y pago con la tienda.'
    ].filter(line => line !== null).join('\n');

    const whatsappLink = document.getElementById('whatsappReceiptLink');
    whatsappLink.href = `https://wa.me/${storeWhatsApp}?text=${encodeURIComponent(receipt)}`;
    whatsappLink.classList.remove('hidden');
    whatsappLink.textContent = 'Abrir el recibo en WhatsApp';
    whatsappLink.click();

    const message = document.getElementById('checkoutMessage');
    message.textContent = `Recibo ${orderNumber} preparado. En WhatsApp, revisa el mensaje y pulsa Enviar para compartirlo con la tienda.`;
    message.classList.remove('hidden');
}

// Gestión del Carrito
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();

    // Feedback visual rápido
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.classList.add('scale-125', 'border-violet-400');
    setTimeout(() => cartBtn.classList.remove('scale-125'), 300);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotal = document.getElementById('cartSubtotal');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    localStorage.setItem('fraganciasNsCart', JSON.stringify(cart.map(item => ({ id: item.id, quantity: item.quantity }))));

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="text-center py-12 text-white/40">
                <i class="fa-solid fa-bag-shopping text-3xl mb-2 text-white/20"></i>
                <p class="text-sm">Tu carrito está vacío.</p>
            </div>
        `;
        cartSubtotal.textContent = formatPrice(0);
        return;
    }

    let subtotalUSD = 0;
    const hasUnpricedItems = cart.some(item => item.priceUSD === null);

    cart.forEach(item => {
        if (item.priceUSD !== null) subtotalUSD += item.priceUSD * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = "flex items-center justify-between bg-dark-surface border border-white/10 p-3.5 rounded-xl";
        itemDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-dark-deep border border-white/10 flex items-center justify-center text-cyan-neon">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div>
                    <h4 class="text-xs font-bold">${item.name}</h4>
                    <span class="text-xs text-gold font-semibold">${item.priceUSD === null ? 'Consultar precio' : formatPrice(item.priceUSD)}</span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeQuantity(${item.id}, -1)" class="w-6 h-6 rounded bg-dark-deep border border-white/10 flex items-center justify-center text-xs hover:border-violet-400 transition-colors">-</button>
                <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" class="w-6 h-6 rounded bg-dark-deep border border-white/10 flex items-center justify-center text-xs hover:border-violet-400 transition-colors">+</button>
                <button onclick="removeFromCart(${item.id})" class="ml-2 text-white/40 hover:text-red-400 transition-colors">
                    <i class="fa-solid fa-trash text-xs"></i>
                </button>
            </div>
        `;
        cartItemsList.appendChild(itemDiv);
    });

    cartSubtotal.textContent = hasUnpricedItems ? 'Por confirmar' : formatPrice(subtotalUSD);
}

function checkout() {
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutMessage = document.getElementById('checkoutMessage');
    checkoutMessage.classList.add('hidden');
    document.getElementById('whatsappReceiptLink').classList.add('hidden');
    if (cart.length === 0) {
        document.getElementById('checkoutSummary').innerHTML = '<p class="text-white/60">Tu carrito está vacío.</p>';
        checkoutForm.classList.add('hidden');
        document.getElementById('checkoutModal').classList.remove('pointer-events-none', 'opacity-0');
        document.getElementById('checkoutModal').setAttribute('aria-hidden', 'false');
        return;
    }
    if (!document.getElementById('paymentMethod').value) {
        document.getElementById('paymentMethodError').classList.remove('hidden');
        return;
    }
    document.getElementById('paymentMethodError').classList.add('hidden');
    checkoutForm.classList.remove('hidden');
    const hasUnpricedItems = cart.some(item => item.priceUSD === null);
    const total = hasUnpricedItems
        ? 'Por confirmar'
        : formatPrice(cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0));
    document.getElementById('checkoutSummary').innerHTML = cart.map(item =>
        `<div class="flex justify-between gap-4"><span>${item.name} × ${item.quantity}</span><span>${item.priceUSD === null ? 'Por confirmar' : formatPrice(item.priceUSD * item.quantity)}</span></div>`
    ).join('') + `<div class="flex justify-between gap-4 border-t border-white/10 pt-3 font-bold"><span>Método de pago</span><span>${document.getElementById('paymentMethod').value}</span></div><div class="flex justify-between gap-4 font-bold"><span>Total</span><span class="text-gold">${total}</span></div>`;
    document.getElementById('checkoutMessage').classList.add('hidden');
    document.getElementById('checkoutModal').classList.remove('pointer-events-none', 'opacity-0');
    document.getElementById('checkoutModal').setAttribute('aria-hidden', 'false');
    closeCartDrawer();
}
