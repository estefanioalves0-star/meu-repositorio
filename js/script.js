// Centralized store settings: replace these values when checkout and contact details are ready.
const CHECKOUT_URL = "{{GUMROAD_CHECKOUT_URL}}";
const WHATSAPP_NUMBER = "{{WHATSAPP_NUMBER}}";
const LANDING_PAGE_PRICE = "{{LANDING_PAGE_PRICE}}";
const PROMPT_PACK_PRICE = "{{PROMPT_PACK_PRICE}}";
const LANDING_PAGE_NAME = "{{LANDING_PAGE_NAME}}";

const landingPages = [
  {
    id: "arcform",
    name: LANDING_PAGE_NAME.includes("{{") ? "Arcform — Studio de design" : LANDING_PAGE_NAME,
    category: "DESIGN & CRIATIVIDADE",
    price: LANDING_PAGE_PRICE,
    shortDescription: "Uma presença digital elegante para estúdios, consultores e marcas criativas.",
    description: "Apresente seu trabalho com uma experiência editorial, sofisticada e fácil de explorar. Ideal para marcas criativas que querem uma presença digital à altura das suas ideias.",
    longDescription: "Apresente seus produtos e serviços em uma página única, com hierarquia visual clara, conteúdo estratégico e uma jornada intuitiva do primeiro contato à ação. A estrutura Arcform foi pensada para estúdios, profissionais criativos e consultores que querem comunicar valor com personalidade.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Interior contemporâneo com materiais naturais e design sofisticado",
    rating: "★★★★★"
  },
  {
    id: "elevate",
    name: "Elevate — Consultoria premium",
    category: "CONSULTORIA & SERVIÇOS",
    price: LANDING_PAGE_PRICE,
    shortDescription: "Uma página objetiva para transformar expertise em novas conversas.",
    description: "Uma experiência profissional para apresentar seus serviços, construir confiança e convidar clientes ideais para dar o próximo passo.",
    longDescription: "A Elevate organiza a sua oferta em uma narrativa clara: para quem você trabalha, como gera valor e qual é o próximo passo. Uma estrutura flexível para consultorias, especialistas e negócios de serviços.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Escritório moderno com espaço de trabalho iluminado",
    rating: "★★★★★"
  },
  {
    id: "atelier",
    name: "Atelier — Produto & lifestyle",
    category: "E-COMMERCE & LIFESTYLE",
    price: LANDING_PAGE_PRICE,
    shortDescription: "Uma vitrine de marca pensada para destacar produtos e histórias.",
    description: "Design editorial e uma apresentação cuidadosa para marcas de produto que valorizam cada detalhe da experiência.",
    longDescription: "Crie uma primeira impressão marcante com espaços generosos para imagens, narrativa de marca e apresentação de produto. Atelier combina flexibilidade com uma linguagem visual acolhedora e premium.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Ambiente de lifestyle com mobiliário de design e luz natural",
    rating: "★★★★★"
  }
];

const promptPacks = [
  {
    id: "landing-page-prompts",
    name: "200 AI Prompts for High-Converting Landing Pages",
    category: "MARKETING & COPYWRITING",
    promptCategory: "Marketing & Copywriting",
    count: 200,
    price: PROMPT_PACK_PRICE,
    shortDescription: "Da proposta de valor à chamada para ação: um guia para escrever com mais intenção.",
    description: "Uma coleção prática para planejar, escrever e aprimorar páginas com a ajuda da IA — sem começar do zero.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Caderno aberto e ferramentas de escrita em uma mesa de trabalho",
    badge: "MAIS ESCOLHIDO"
  },
  {
    id: "digital-marketing-prompts",
    name: "200 Digital Marketing Prompts",
    category: "ESTRATÉGIA DIGITAL",
    promptCategory: "Estratégia & Marketing",
    count: 200,
    price: PROMPT_PACK_PRICE,
    shortDescription: "Planeje campanhas, conteúdo e estratégias com um ponto de partida mais claro.",
    description: "Uma biblioteca de instruções práticas para apoiar seu planejamento e acelerar o trabalho de marketing digital.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Equipe criativa trabalhando em uma estratégia",
    badge: "PRÁTICO & DIRETO"
  },
  {
    id: "business-prompts",
    name: "100 AI Prompts for Business Growth",
    category: "NEGÓCIOS & CRESCIMENTO",
    promptCategory: "Negócios & Crescimento",
    count: 100,
    price: PROMPT_PACK_PRICE,
    shortDescription: "Explore oportunidades, organize ideias e dê mais direção ao próximo passo.",
    description: "Prompts versáteis para empreendedores que querem usar IA como apoio no planejamento e na operação do negócio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Análise digital e métricas em uma tela de trabalho",
    badge: "PARA EMPREENDEDORES"
  }
];

function isPlaceholder(value) {
  return typeof value === "string" && /^\{\{.+\}\}$/.test(value);
}

function productCard(product, type) {
  const isPrompt = type === "prompts";
  const href = isPrompt
    ? `prompt-details.html?id=${encodeURIComponent(product.id)}`
    : `landing-page.html?id=${encodeURIComponent(product.id)}`;
  const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
  const count = isPrompt ? `<span class="prompt-count">${product.count}<small> PROMPTS</small></span>` : "";
  const ratingOrCount = isPrompt
    ? `<span class="product-rating-label">${product.count} prompts</span>`
    : `<span class="stars" aria-label="Avaliação visual: 5 de 5 estrelas">${product.rating}</span>`;

  return `<article class="product-card${isPrompt ? " prompt-card" : ""}">
    <a class="product-art" href="${href}" tabindex="-1" aria-hidden="true">
      <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
      <span class="product-category">${product.category}</span>${badge}${count}
    </a>
    <div class="product-card-body">
      <div class="product-card-top"><h3>${product.name}</h3><span class="product-price">${product.price}</span></div>
      <p>${product.shortDescription}</p>
      <div class="product-card-footer">${ratingOrCount}<a href="${href}">${isPrompt ? "Ver detalhes" : "Ver landing page"} <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>`;
}

function renderCatalog(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
  const collections = [
    { type: "landing", items: landingPages, track: document.querySelector('[data-track="landing"]') },
    { type: "prompts", items: promptPacks, track: document.querySelector('[data-track="prompts"]') }
  ];

  collections.forEach(({ type, items, track }) => {
    if (!track) return;
    const filtered = items.filter((product) =>
      `${product.name} ${product.category} ${product.shortDescription}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery)
    );
    track.innerHTML = filtered.map((product) => productCard(product, type)).join("");
    const count = document.querySelector(`[data-count="${type}"]`);
    const empty = document.querySelector(`[data-empty="${type}"]`);
    if (count) count.textContent = `${filtered.length.toString().padStart(2, "0")} ${type === "landing" ? "experiências" : "coleções"}`;
    if (empty) empty.hidden = filtered.length !== 0;
  });

  observeReveals();
}

function getProductFromUrl(products) {
  const id = new URLSearchParams(window.location.search).get("id");
  return products.find((product) => product.id === id) || products[0];
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setImage(selector, source, alt) {
  document.querySelectorAll(selector).forEach((image) => {
    image.src = source;
    image.alt = alt;
  });
}

function checkoutHref(productId) {
  if (!isPlaceholder(CHECKOUT_URL)) return CHECKOUT_URL;
  return `contact.html?assunto=compra&produto=${encodeURIComponent(productId)}`;
}

function setBuyLinks(productId) {
  document.querySelectorAll("[data-buy-link]").forEach((link) => {
    link.href = checkoutHref(productId);
  });
}

function personalizationHref() {
  const phoneDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (phoneDigits.length >= 8 && phoneDigits.length <= 15) {
    return `https://wa.me/${phoneDigits}`;
  }
  return "contact.html?assunto=personalizacao";
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = personalizationHref();
  });
}

function initLandingDetail() {
  const page = document.querySelector('[data-detail="landing"]');
  if (!page) return;
  const product = getProductFromUrl(landingPages);
  setText("[data-product-name]", product.name);
  setText("[data-product-category]", product.category);
  setText("[data-product-price]", product.price);
  setText("[data-product-description]", product.description);
  setText("[data-long-description]", product.longDescription);
  setText("[data-product-index]", `${String(landingPages.indexOf(product) + 1).padStart(2, "0")} / ${String(landingPages.length).padStart(2, "0")}`);
  setImage("[data-cover-image]", product.image, product.imageAlt);
  setImage("[data-showcase-one]", product.image, `Detalhe da experiência visual ${product.name}`);
  setImage("[data-showcase-two]", product.image, `Mais detalhes do design ${product.name}`);
  setBuyLinks(product.id);
  document.title = `${product.name} — Northstar Studio`;
}

function initPromptDetail() {
  const page = document.querySelector('[data-detail="prompt"]');
  if (!page) return;
  const product = getProductFromUrl(promptPacks);
  setText("[data-product-name]", product.name);
  setText("[data-product-category]", product.category);
  setText("[data-product-price]", product.price);
  setText("[data-product-description]", product.description);
  setText("[data-prompt-count]", `${product.count}\nPROMPTS`);
  setText("[data-prompt-count-inline]", `${product.count} prompts`);
  setText("[data-prompt-count-text]", `${product.count} prompts cuidadosamente organizados`);
  setText("[data-prompt-category]", product.promptCategory);
  setImage("[data-cover-image]", product.image, product.imageAlt);
  setBuyLinks(product.id);
  document.title = `${product.name} — Northstar Studio`;
}

function observeReveals() {
  const revealElements = document.querySelectorAll(".reveal:not([data-reveal-observed])");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => {
    element.dataset.revealObserved = "true";
    observer.observe(element);
  });
}

function initCarouselControls() {
  document.querySelectorAll("[data-carousel-prev], [data-carousel-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.hasAttribute("data-carousel-next") ? 1 : -1;
      const trackId = button.getAttribute("data-carousel-next") || button.getAttribute("data-carousel-prev");
      const track = document.getElementById(trackId);
      if (!track) return;
      const firstCard = track.querySelector(".product-card");
      if (!firstCard) return;
      track.scrollBy({ left: direction * (firstCard.getBoundingClientRect().width + 20), behavior: "smooth" });
    });
  });
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
      nav.classList.remove("is-open");
    });
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const topic = form.elements.namedItem("topic");
  const requestedSubject = params.get("assunto");
  if (topic && requestedSubject === "personalizacao") topic.value = "Personalização de landing page";
  if (topic && requestedSubject === "compra") topic.value = "Dúvida sobre um produto";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const subject = `[Northstar Studio] ${formData.get("topic")}`;
    const body = [
      `Nome: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      `Assunto: ${formData.get("topic")}`,
      "",
      formData.get("message")
    ].join("\n");
    const mailto = `mailto:hello@northstar.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    const note = form.querySelector("[data-form-note]");
    if (note) note.textContent = "Seu aplicativo de e-mail está sendo aberto com a mensagem preparada.";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = year;
  });

  const search = document.querySelector("#global-search");
  if (search) {
    renderCatalog();
    search.addEventListener("input", () => renderCatalog(search.value));
  }

  initLandingDetail();
  initPromptDetail();
  initCarouselControls();
  initNavigation();
  initWhatsappLinks();
  initContactForm();
  observeReveals();
});
