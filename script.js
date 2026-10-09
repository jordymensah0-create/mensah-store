/* MENSAH Store — réglages simples regroupés ici. */
const CONFIG = {
  // Numéro WhatsApp au format international, chiffres seulement. Exemple fictif 2250700000000.
  whatsappNumber: "2290157587158",
  phoneDisplay: "0157587158",
  email: "jordymensah0@gmail.com",
  location: "Cotonou /Abomey-Calavi",
  // Remplacez # par vos vrais profils pour les afficher.
  socials: [{ name: "Whatssap", url: "https://wa.me/2290157587158" }, { name: "Facebook", url: "https://www.facebook.com/marketplace/jules Mensah.php" }, { name: "TikTok", url: "#" }]
};

// Catalogue d'exemples fictifs : copiez un bloc pour ajouter un article.
// Photo : nom du fichier dans images/. Prix en FCFA. available : true ou false.
const PRODUCTS = [
  { name: "Montre-connecte", price: 9000, description: "montre connectée D93 Ultra (11 en 1).", category: "Montre", photo: "montre-connecte.png.jpeg", available: true, badge: "Coup de cœur" },
  { name: "Revetement mural", price: 2000, description: "Un revêtement mural décoratif autocollant effet brique.77,5cmm la longueur et 71 cm la largeur est à 2k l’unité donc vous pouvez en prendre plusieurs", category: "Autocollant", photo: "revetement mural.png.jpeg", available: true, badge: "Nouveau" },
  { name: "Agradisseur-d'ecran", price: 2000, description: "Agrandisseur d'écran pour mettre vos film ou série en mode télévision pour un grand public.", category: "Aceesoir pour téléphone", photo: "agradisseur-d'ecran.png.jpeg", available: true, badge: "Bon plan" },
  { name: "Etagere", price: 4000, description: "Etagère d'angle en acier inoxydable(2 en 1) pour cuisine et salle de bain.", category: "Etagère", photo: "etagere.png.jpeg", available: true, badge: "Nouveau" },
  { name: "Montre-connecte", price: 14000, description: "L’essentiel au quotidien, dans une finition soignée.", category: "Montre", photo: "1montre-connecte.png.jpeg", available: true, badge: "Essentiel" },
  { name: "Gourde", price: 3000, description: "Gourde avec paille et filtre.", category: "Gourde", photo: "gourde.png.jpeg", available: true, badge: "Coup de cœur" },
  { name: "Meubles-chaussure", price: 10000, description: "Meuble chaussure (2en 1) avec penderie.4 tiroire pour 16 paires + crochets pour sac,chapeaux et vestes.", category: "Maison", photo: "meubles-chaussure.png.jpeg", available: true, badge: "Nouveauté" },
  { name: "Micro K11 2 en 1", price: 3000, description: "Micro cravate sans fil 2en1 (iPhone+Android) Branche et filme, son  clair sans bruit.", category: "Acessoire Téléphone", photo: "micro-cravate.png.jpeg", available: true, badge: "BEST-SELLER" }
];

const productGrid = document.querySelector("#product-grid");
const filterContainer = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "Toutes";

function formatPrice(price) { return `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`; }
function whatsappLink(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
function renderFilters() {
  const categories = ["Toutes", ...new Set(PRODUCTS.map((p) => p.category))];
  filterContainer.innerHTML = categories.map((category) => `<button class="filter-button${category === activeCategory ? " active" : ""}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === activeCategory}">${escapeHtml(category)}</button>`).join("");
}
function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase("fr");
  const visible = PRODUCTS.filter((p) => (activeCategory === "Toutes" || p.category === activeCategory) && `${p.name} ${p.description} ${p.category}`.toLocaleLowerCase("fr").includes(term));
  productGrid.innerHTML = visible.map((p) => {
    const message = `Bonjour MENSAH Store, je souhaite commander : ${p.name} — ${formatPrice(p.price)}.\n\nQuantité souhaitée :\nVille ou quartier :\nBesoin de livraison (oui/non) :\n\nMerci !`;
    return `<article class="product-card"><div class="product-image"><img src="images/${encodeURIComponent(p.photo)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='images/selection.svg';"><span class="product-badge">${escapeHtml(p.badge || p.category)}</span><span class="availability${p.available ? "" : " unavailable"}">${p.available ? "Disponible" : "Indisponible"}</span></div><div class="product-info"><span class="product-category">${escapeHtml(p.category)}</span><h3 class="product-title">${escapeHtml(p.name)}</h3><p class="product-description">${escapeHtml(p.description)}</p><div class="product-bottom"><span class="product-price">${formatPrice(p.price)}</span><a class="order-button" href="${whatsappLink(message)}" target="_blank" rel="noopener noreferrer"${p.available ? "" : " aria-disabled=\"true\" tabindex=\"-1\""} ${p.available ? "" : "onclick=\"return false\""}>${p.available ? "Commander" : "Indisponible"} <span aria-hidden="true">↗</span></a></div></div></article>`;
  }).join("");
  emptyState.hidden = visible.length > 0;
}
function setupContact() {
  const exampleNumber = !CONFIG.whatsappNumber || CONFIG.whatsappNumber === "2250700000000";
  const phone = document.querySelector("#phone-link");
  phone.textContent = exampleNumber ? "Numéro à renseigner" : CONFIG.phoneDisplay;
  phone.href = exampleNumber ? "#contact" : `tel:${CONFIG.whatsappNumber}`;
  const email = document.querySelector("#email-link");
  email.textContent = CONFIG.email.includes("exemple.com") ? "Adresse à renseigner" : CONFIG.email;
  email.href = CONFIG.email.includes("exemple.com") ? "#contact" : `mailto:${CONFIG.email}`;
  document.querySelector("#location-text").textContent = CONFIG.location || "À renseigner par le vendeur";
  const hello = "Bonjour MENSAH Store, j’aimerais en savoir plus sur vos articles.";
  ["#contact-whatsapp", "#floating-whatsapp"].forEach((selector) => {
    const link = document.querySelector(selector); link.href = whatsappLink(hello); link.target = "_blank"; link.rel = "noopener noreferrer";
  });
  const delivery = document.querySelector("#delivery-button");
  delivery.href = whatsappLink("Bonjour MENSAH Store, je souhaite demander une livraison.\n\nNom :\nArticles souhaités :\nQuantité :\nVille ou quartier :\nPoint de livraison souhaité :\n\nMerci de me confirmer les zones desservies, les frais et les délais.");
  delivery.target = "_blank"; delivery.rel = "noopener noreferrer";
  document.querySelector("#social-links").innerHTML = CONFIG.socials.filter((s) => s.url && s.url !== "#").map((s) => `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.name)} ↗</a>`).join("");
}

filterContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]"); if (!button) return;
  activeCategory = button.dataset.category; renderFilters(); renderProducts();
});
searchInput.addEventListener("input", renderProducts);
document.querySelector("#reset-filters").addEventListener("click", () => { activeCategory = "Toutes"; searchInput.value = ""; renderFilters(); renderProducts(); searchInput.focus(); });
document.querySelector("#year").textContent = new Date().getFullYear();
setupContact(); renderFilters(); renderProducts();
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open)); menuToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu"); navigation.classList.toggle("open", open);
});
navigation.addEventListener("click", (event) => { if (event.target.closest("a")) { navigation.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Ouvrir le menu"); } });
const backTop = document.querySelector("#back-top-button");
window.addEventListener("scroll", () => backTop.classList.toggle("visible", window.scrollY > 500), { passive: true });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
