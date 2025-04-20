export type Language = 'it' | 'en';

export const translations = {
  it: {
    // Header
    home: 'Home',
    menu: 'Menù',
    cart: 'Carrello',
    admin: 'Amministrazione',
    fineDining: 'Esperienza gastronomica di alta classe',

    // Home Page
    welcomeTo: 'Benvenuti al White Castle',
    experienceDining: 'Vivi un\'esperienza culinaria in un\'atmosfera elegante',
    description1: 'White Castle è una destinazione gastronomica di alto livello che offre una cucina squisita realizzata con ingredienti freschissimi. I nostri chef talentuosi combinano tecniche tradizionali con approcci innovativi per creare esperienze culinarie indimenticabili.',
    description2: 'Che tu ci stia raggiungendo per un pranzo informale, una cena intima o semplicemente per goderti la nostra selezione di vini pregiati e birre artigianali, non vediamo l\'ora di servirti e superare le tue aspettative.',
    viewMenu: 'Visualizza il Menù',
    todaysSpecial: 'Specialità del Giorno',
    specialDescription: 'La selezione dello chef cambia ogni giorno, con i migliori ingredienti di stagione',
    viewTodaysSpecial: 'Vedi la Specialità del Giorno',
    openingHours: 'Orari di Apertura',
    mondayToThursday: 'Lunedì - Giovedì: 11:00 - 22:00',
    fridayToSaturday: 'Venerdì - Sabato: 11:00 - 23:00',
    sunday: 'Domenica: 10:00 - 21:00',
    reservationsRecommended: 'Prenotazione consigliata',
    onlineOrdering: 'Ordinazione Online',
    orderOnlineDesc: 'Sfoglia il nostro menù e ordina online per ritiro o consegna',
    orderNow: 'Ordina Ora',

    // Menu Page
    ourMenu: 'Il Nostro Menù',
    exploreMenu: 'Esplora la nostra selezione di piatti e bevande accuratamente preparati',
    lunch: 'Pranzo',
    dinner: 'Cena',
    drinks: 'Bevande',
    beers: 'Birre',
    wines: 'Vini',
    addToCart: 'Aggiungi al Carrello',
    noItems: 'Nessun prodotto disponibile in questa categoria al momento.',

    // Cart Page
    yourCart: 'Il Tuo Carrello',
    emptyCart: 'Il Tuo Carrello è Vuoto',
    emptyCartDesc: 'Sembra che non hai ancora aggiunto prodotti al carrello.',
    browseMenu: 'Sfoglia il Menù',
    clearCart: 'Svuota Carrello',
    orderSummary: 'Riepilogo Ordine',
    items: 'prodotti',
    subtotal: 'Subtotale',
    tax: 'IVA',
    delivery: 'Consegna',
    total: 'Totale',
    checkout: 'Procedi al Pagamento',
    
    // Checkout Page
    paymentInfo: 'Informazioni di Pagamento',
    paymentMethods: 'Metodi di Pagamento',
    googlePay: 'Paga con Google Pay',
    paymentProcessing: 'Elaborazione del pagamento...',
    paymentSuccess: 'Pagamento completato con successo!',
    paymentError: 'Errore durante il pagamento. Riprova.',
    orderDetails: 'Dettagli Ordine',
    deliveryAddress: 'Indirizzo di Consegna',
    deliveryTime: 'Orario di Consegna',
    confirmOrder: 'Conferma Ordine',
    orderConfirmed: 'Ordine confermato',
    orderConfirmedMessage: 'Grazie per il tuo ordine! Riceverai presto una conferma via email.',
    backToMenu: 'Torna al Menù',
    continueToCheckout: 'Continua al Checkout',

    // Admin Page
    menuAdmin: 'Amministrazione Menù',
    addNewItem: 'Aggiungi Nuovo Prodotto',
    editItem: 'Modifica Prodotto',
    itemName: 'Nome Prodotto',
    description: 'Descrizione',
    price: 'Prezzo (€)',
    category: 'Categoria',
    imageUrl: 'URL Immagine (opzionale)',
    addItem: 'Aggiungi Prodotto',
    updateItem: 'Aggiorna Prodotto',
    cancelEdit: 'Annulla Modifica',
    currentItems: 'Prodotti Attuali',
    noItemsAdded: 'Nessun prodotto è stato ancora aggiunto.',
    
    // Login Page
    loginTitle: 'Accesso Amministratore',
    loginUsername: 'Nome Utente',
    loginPassword: 'Password',
    loginSubmit: 'Accedi',
    loginProcessing: 'Accesso in corso...',
    loginError: 'Si è verificato un errore durante l\'accesso. Riprova.',
    loginInvalidCredentials: 'Credenziali non valide. Riprova.',
    loginRequiredFields: 'Inserisci nome utente e password.',
    loginAdminOnly: 'Questa area è riservata agli amministratori del ristorante.',
    logout: 'Disconnetti',
    adminArea: 'Area Amministrazione',
    adminWelcome: 'Benvenuto nell\'area amministrazione',

    // Footer
    address: 'Indirizzo',
    phone: 'Telefono',
    email: 'Email',
    quickLinks: 'Link Rapidi',
    rights: 'Tutti i diritti riservati.',
    
    // Language Selector
    language: 'Lingua',
    italian: 'Italiano',
    english: 'Inglese'
  },
  
  en: {
    // Header
    home: 'Home',
    menu: 'Menu',
    cart: 'Cart',
    admin: 'Administration',
    fineDining: 'Fine dining experience',

    // Home Page
    welcomeTo: 'Welcome to White Castle',
    experienceDining: 'Experience fine dining in an elegant atmosphere',
    description1: 'White Castle is a premium dining destination offering exquisite cuisine made with the freshest ingredients. Our talented chefs combine traditional techniques with innovative approaches to create unforgettable culinary experiences.',
    description2: 'Whether you\'re joining us for a casual lunch, an intimate dinner, or simply to enjoy our selection of fine wines and craft beers, we look forward to serving you and exceeding your expectations.',
    viewMenu: 'View Our Menu',
    todaysSpecial: 'Today\'s Special',
    specialDescription: 'Chef\'s selection changes daily, featuring the finest seasonal ingredients',
    viewTodaysSpecial: 'View Today\'s Special',
    openingHours: 'Opening Hours',
    mondayToThursday: 'Monday - Thursday: 11:00 AM - 10:00 PM',
    fridayToSaturday: 'Friday - Saturday: 11:00 AM - 11:00 PM',
    sunday: 'Sunday: 10:00 AM - 9:00 PM',
    reservationsRecommended: 'Reservations recommended',
    onlineOrdering: 'Online Ordering',
    orderOnlineDesc: 'Browse our menu and place your order online for pickup or delivery',
    orderNow: 'Order Now',

    // Menu Page
    ourMenu: 'Our Menu',
    exploreMenu: 'Explore our carefully crafted selection of dishes and beverages',
    lunch: 'Lunch',
    dinner: 'Dinner',
    drinks: 'Drinks',
    beers: 'Beers',
    wines: 'Wines',
    addToCart: 'Add to Cart',
    noItems: 'No items available in this category at the moment.',

    // Cart Page
    yourCart: 'Your Cart',
    emptyCart: 'Your Cart is Empty',
    emptyCartDesc: 'Looks like you haven\'t added any items to your cart yet.',
    browseMenu: 'Browse Menu',
    clearCart: 'Clear Cart',
    orderSummary: 'Order Summary',
    items: 'items',
    subtotal: 'Subtotal',
    tax: 'Tax',
    delivery: 'Delivery',
    total: 'Total',
    checkout: 'Proceed to Checkout',
    
    // Checkout Page
    paymentInfo: 'Payment Information',
    paymentMethods: 'Payment Methods',
    googlePay: 'Pay with Google Pay',
    paymentProcessing: 'Processing payment...',
    paymentSuccess: 'Payment completed successfully!',
    paymentError: 'Error processing payment. Please try again.',
    orderDetails: 'Order Details',
    deliveryAddress: 'Delivery Address',
    deliveryTime: 'Delivery Time',
    confirmOrder: 'Confirm Order',
    orderConfirmed: 'Order Confirmed',
    orderConfirmedMessage: 'Thank you for your order! You will receive a confirmation email shortly.',
    backToMenu: 'Back to Menu',
    continueToCheckout: 'Continue to Checkout',

    // Admin Page
    menuAdmin: 'Menu Administrator',
    addNewItem: 'Add New Menu Item',
    editItem: 'Edit Menu Item',
    itemName: 'Item Name',
    description: 'Description',
    price: 'Price ($)',
    category: 'Category',
    imageUrl: 'Image URL (optional)',
    addItem: 'Add Item',
    updateItem: 'Update Item',
    cancelEdit: 'Cancel Edit',
    currentItems: 'Current Menu Items',
    noItemsAdded: 'No menu items have been added yet.',
    
    // Login Page
    loginTitle: 'Administrator Login',
    loginUsername: 'Username',
    loginPassword: 'Password',
    loginSubmit: 'Sign In',
    loginProcessing: 'Signing in...',
    loginError: 'An error occurred during login. Please try again.',
    loginInvalidCredentials: 'Invalid credentials. Please try again.',
    loginRequiredFields: 'Please enter both username and password.',
    loginAdminOnly: 'This area is restricted to restaurant administrators only.',
    logout: 'Logout',
    adminArea: 'Administration Area',
    adminWelcome: 'Welcome to the administration area',

    // Footer
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    quickLinks: 'Quick Links',
    rights: 'All rights reserved.',
    
    // Language Selector
    language: 'Language',
    italian: 'Italian',
    english: 'English'
  }
};

export default translations; 