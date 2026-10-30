const WHATSAPP_NUMBER = "244962054093";

const landingPages = [
  {
    id: "arcform",
    name: "Arcform — Studio de design",
    category: "DESIGN & CRIATIVIDADE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Uma presença digital elegante para estúdios, consultores e marcas criativas.",
    description: "Apresente seu trabalho com uma experiência editorial, sofisticada e fácil de explorar. Ideal para marcas criativas que querem uma presença digital à altura das suas ideias.",
    longDescription: "Apresente seus produtos e serviços em uma página única, com hierarquia visual clara, conteúdo estratégico e uma jornada intuitiva do primeiro contato à ação. A estrutura Arcform foi pensada para estúdios, profissionais criativos e consultores que querem comunicar valor com personalidade.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Interior contemporâneo com materiais naturais e design sofisticado",
    rating: "★★★★★",
    preview: {
      theme: "arcform",
      brand: "arcform",
      eyebrow: "ESTÚDIO CRIATIVO INDEPENDENTE",
      headline: "Design com intenção. Marcas com presença.",
      description: "Criamos identidades e experiências digitais para ideias que merecem ser vistas de um novo ângulo.",
      imageAlt: "Interior contemporâneo com materiais naturais",
      services: ["Identidade de marca", "Direção de arte", "Experiências digitais"],
      statement: "Boas marcas não precisam falar mais alto. Precisam dizer algo que importa."
    }
  },
  {
    id: "elevate",
    name: "Elevate — Consultoria premium",
    category: "CONSULTORIA & SERVIÇOS",
    price: null,
    checkoutUrl: "",
    shortDescription: "Uma página objetiva para transformar expertise em novas conversas.",
    description: "Uma experiência profissional para apresentar seus serviços, construir confiança e convidar clientes ideais para dar o próximo passo.",
    longDescription: "A Elevate organiza a sua oferta em uma narrativa clara: para quem você trabalha, como gera valor e qual é o próximo passo. Uma estrutura flexível para consultorias, especialistas e negócios de serviços.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Escritório moderno com espaço de trabalho iluminado",
    rating: "★★★★★",
    preview: {
      theme: "elevate",
      brand: "ELEVATE",
      eyebrow: "CONSULTORIA ESTRATÉGICA",
      headline: "Clareza para decidir. Estratégia para avançar.",
      description: "Ajudamos negócios ambiciosos a transformar desafios complexos em crescimento sustentável.",
      imageAlt: "Escritório moderno com espaço de trabalho iluminado",
      services: ["Estratégia de crescimento", "Transformação digital", "Aconselhamento executivo"],
      statement: "O próximo nível do seu negócio começa com uma decisão mais bem informada."
    }
  },
  {
    id: "atelier",
    name: "Atelier — Produto & lifestyle",
    category: "E-COMMERCE & LIFESTYLE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Uma vitrine de marca pensada para destacar produtos e histórias.",
    description: "Design editorial e uma apresentação cuidadosa para marcas de produto que valorizam cada detalhe da experiência.",
    longDescription: "Crie uma primeira impressão marcante com espaços generosos para imagens, narrativa de marca e apresentação de produto. Atelier combina flexibilidade com uma linguagem visual acolhedora e premium.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Ambiente de lifestyle com mobiliário de design e luz natural",
    rating: "★★★★★",
    preview: {
      theme: "atelier",
      brand: "ATELIER / OBJECTS",
      eyebrow: "OBJETOS FEITOS PARA FICAR",
      headline: "Peças singulares. Feitas para a vida real.",
      description: "Descubra uma coleção de objetos cuidadosos, materiais honestos e formas que tornam o dia a dia especial.",
      imageAlt: "Ambiente acolhedor com mobiliário de design e luz natural",
      services: ["Materiais conscientes", "Produção em pequenas séries", "Envio cuidadoso"],
      statement: "Acreditamos que os objetos que escolhemos mudam a forma como vivemos os nossos espaços."
    }
  }
];

const promptPackInfo = [
  ["100-ai-business-prompts", "100 AI Prompts for Business Growth", 100, "Negócios & crescimento", "Prompts práticos para automação, atendimento ao cliente, operações e estratégia."],
  ["100-email-marketing-prompts", "100 AI Prompts for Email Marketing", 100, "Email marketing", "Planeje crescimento de listas, relacionamento com clientes, recuperação de carrinhos e lançamentos."],
  ["100-facebook-ads-prompts", "100 AI Prompts for High-Converting Facebook Ads", 100, "Publicidade digital", "Crie anúncios mais claros para empreendedores, lojas online e afiliados."],
  ["100-instagram-prompts", "100 AI Prompts for Instagram Content", 100, "Redes sociais", "Desenvolva Reels, carrosséis, legendas e calendários de conteúdo."],
  ["100-market-research-prompts", "100 AI Prompts for Market Research", 100, "Pesquisa de mercado", "Explore concorrentes, personas, validação de ideias e preços."],
  ["100-shopify-prompts", "100 AI Prompts for Shopify Store Growth", 100, "E-commerce", "Melhore páginas de produto, descoberta orgânica, vendas adicionais e crescimento da loja."],
  ["200-ai-prompts-for-resumes-and-job-interviews", "200 AI Prompts for Resumes and Job Interviews", 200, "Carreira", "Prepare currículos mais fortes, candidaturas personalizadas e entrevistas com confiança."],
  ["200-copywriting-prompts", "200 AI Prompts for Persuasive Copywriting", 200, "Copywriting", "Escreva mensagens de marketing mais persuasivas, histórias relevantes e textos de venda."],
  ["200-digital-marketing-prompts", "200 AI Prompts for Digital Marketing", 200, "Marketing digital", "Planeje, crie, avalie e melhore ações de marketing digital."],
  ["200-prompts-for-high-conversing-landing-pages", "200 AI Prompts for High-Converting Landing Pages", 200, "Landing pages", "Crie páginas estratégicas que transformam atenção em ação."],
  ["200-web-development-prompts", "200 AI Prompts for Web Development", 200, "Desenvolvimento web", "Apoie a criação de experiências web acessíveis, responsivas e fáceis de manter."],
  ["250-ai-prompts-for-email-marketing", "250 AI Prompts for Email Marketing", 250, "Email marketing", "Escreva boas-vindas, promoções, recuperação de carrinhos e sequências de relacionamento."],
  ["250-ai-prompts-for-real-estate-agents", "250 AI Prompts for Real Estate Agents", 250, "Imobiliário", "Crie marketing imobiliário, acompanhamento de clientes e conteúdos para o dia a dia."],
  ["300-ai-prompts-for-ecommerce-product-listings", "300 AI Prompts for E-commerce Product Listings", 300, "E-commerce", "Melhore títulos, descrições, perguntas frequentes, fotografias e páginas de produto."],
  ["300-ai-prompts-for-sales-copy-that-converts", "300 AI Prompts for Sales Copy That Converts", 300, "Vendas & copywriting", "Uma biblioteca prática para vendedores online, redatores e empreendedores."],
  ["300-ai-prompts-for-stunning-product-images", "300 AI Prompts for Stunning Product Images", 300, "Imagem de produto", "Oriente fotografia de produto, cenários, direção visual e imagens comerciais."],
  ["365-ai-prompts-to-run-your-small-business", "365 AI Prompts to Run Your Small Business", 365, "Pequenos negócios", "Prompts para atendimento, marketing, vendas e a rotina de pequenos negócios."],
  ["400-ai-prompts-for-youtube-creators", "400 AI Prompts for YouTube Creators", 400, "Criação para YouTube", "Desenvolva ideias de vídeos, roteiros, títulos, thumbnails e crescimento do canal."],
  ["500-ai-prompts-for-professional-websites-and-landing-pages", "500 AI Prompts for Professional Websites & Landing Pages", 500, "Websites & landing pages", "Planeje estratégia, estrutura de páginas, textos, propostas visuais e conversão."],
  ["500-social-media-growth-prompts", "500 AI Prompts for Social Media Growth", 500, "Redes sociais", "Ideias práticas de conteúdo para pequenos negócios, freelancers e criadores."]
];

const promptPacks = promptPackInfo.map(([id, name, count, promptCategory, shortDescription]) => ({
  id,
  name,
  count,
  category: promptCategory.toLocaleUpperCase("en-US"),
  promptCategory,
  price: null,
  checkoutUrl: "",
  shortDescription,
  description: shortDescription,
  image: `assets/prompt-covers/${id}.webp`,
  imageAlt: `Capa do PDF ${name}, usando a primeira página do documento`,
  badge: ""
}));

function isPlaceholder(value) {
  return typeof value === "string" && /^\{\{.+\}\}$/.test(value);
}

function productCard(product, type) {
  const isPrompt = type === "prompts";
  const href = isPrompt
    ? `prompt-details.html?id=${encodeURIComponent(product.id)}`
    : `landing-page.html?id=${encodeURIComponent(product.id)}`;
  const previewHref = `landing-preview.html?id=${encodeURIComponent(product.id)}`;
  const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
  const count = isPrompt ? `<span class="prompt-count">${product.count}<small> PROMPTS</small></span>` : "";
  const ratingOrCount = isPrompt
    ? `<span class="product-rating-label">${product.count} prompts</span>`
    : `<span class="stars" aria-label="Avaliação visual: 5 de 5 estrelas">${product.rating}</span>`;
  const actions = isPrompt
    ? `<a href="${href}">Ver detalhes <span aria-hidden="true">↗</span></a>`
    : `<a href="${href}">Detalhes</a><a href="${previewHref}">Visualizar <span aria-hidden="true">↗</span></a>`;

  return `<article class="product-card${isPrompt ? " prompt-card" : ""}">
    <a class="product-art" href="${isPrompt ? href : previewHref}" aria-label="${isPrompt ? `Ver detalhes de ${product.name}` : `Visualizar ${product.name}`}">
      <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
      <span class="product-category">${product.category}</span>${badge}${count}
    </a>
    <div class="product-card-body">
      <div class="product-card-top"><h3>${product.name}</h3></div>
      <p>${product.shortDescription}</p>
      <div class="product-card-price">${priceLabel(product)}</div>
      <div class="product-card-footer">${ratingOrCount}<div class="product-card-actions">${actions}</div></div>
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
    if (count) {
      const noun = type === "landing"
        ? (filtered.length === 1 ? "experiência" : "experiências")
        : (filtered.length === 1 ? "prompt pack" : "prompt packs");
      count.textContent = `${filtered.length.toString().padStart(2, "0")} ${noun}`;
    }
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

function priceLabel(product) {
  return product.price || "Preço a definir";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function setImage(selector, source, alt) {
  document.querySelectorAll(selector).forEach((image) => {
    image.src = source;
    image.alt = alt;
  });
}

function setBuyLinks(product) {
  document.querySelectorAll("[data-buy-link]").forEach((link) => {
    if (product.checkoutUrl && !isPlaceholder(product.checkoutUrl)) {
      link.href = product.checkoutUrl;
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
      link.classList.remove("is-unavailable");
      return;
    }

    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.classList.add("is-unavailable");
    link.textContent = "Checkout em breve";
  });
}

function whatsappHref(message) {
  const phoneDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

function productPreviewUrl(product) {
  return new URL(`landing-preview.html?id=${encodeURIComponent(product.id)}`, window.location.href).href;
}

function setProductWhatsappLinks(product, previewUrl) {
  const message = `Olá! Gostaria de pedir a personalização da landing page "${product.name}". Link da página: ${previewUrl}`;
  document.querySelectorAll("[data-product-whatsapp]").forEach((link) => {
    link.href = whatsappHref(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]:not([data-product-whatsapp])").forEach((link) => {
    link.href = whatsappHref("Olá! Gostaria de falar sobre os produtos da Northstar Studio.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function initLandingDetail() {
  const page = document.querySelector('[data-detail="landing"]');
  if (!page) return;
  const product = getProductFromUrl(landingPages);
  setText("[data-product-name]", product.name);
  setText("[data-product-category]", product.category);
  setText("[data-product-price]", priceLabel(product));
  setText("[data-product-description]", product.description);
  setText("[data-long-description]", product.longDescription);
  setText("[data-product-index]", `${String(landingPages.indexOf(product) + 1).padStart(2, "0")} / ${String(landingPages.length).padStart(2, "0")}`);
  setImage("[data-cover-image]", product.image, product.imageAlt);
  setImage("[data-showcase-one]", product.image, `Detalhe da experiência visual ${product.name}`);
  setImage("[data-showcase-two]", product.image, `Mais detalhes do design ${product.name}`);
  setBuyLinks(product);
  document.querySelectorAll("[data-preview-link]").forEach((link) => {
    link.href = productPreviewUrl(product);
  });
  setProductWhatsappLinks(product, productPreviewUrl(product));
  document.title = `${product.name} — Northstar Studio`;
}

function initLandingPreview() {
  const root = document.querySelector("[data-landing-preview]");
  if (!root) return;

  const product = getProductFromUrl(landingPages);
  const preview = product.preview;
  const services = preview.services.map((service, index) => `
    <article class="live-service">
      <span>0${index + 1}</span>
      <h3>${escapeHtml(service)}</h3>
      <p>Uma abordagem cuidadosa, pensada para dar forma ao próximo passo da sua marca.</p>
    </article>`).join("");

  root.innerHTML = `
    <div class="live-site live-theme-${preview.theme}">
      <header class="live-nav">
        <a class="live-brand" href="#top">${escapeHtml(preview.brand)}</a>
        <nav aria-label="Navegação da prévia">
          <a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#contacto">Contacto</a>
        </nav>
        <a class="live-nav-cta" href="#contacto">Vamos conversar <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <section class="live-hero" id="top">
          <div class="live-hero-copy">
            <span class="live-eyebrow">${escapeHtml(preview.eyebrow)}</span>
            <h1>${escapeHtml(preview.headline)}</h1>
            <p>${escapeHtml(preview.description)}</p>
            <div class="live-hero-actions">
              <a class="live-cta" href="#servicos">Conheça a nossa abordagem <span aria-hidden="true">↗</span></a>
              <a class="live-cta live-cta-secondary" data-buy-link href="#">Comprar este modelo</a>
            </div>
            <span class="live-price" data-product-price>${escapeHtml(priceLabel(product))}</span>
            <span class="live-note">Estratégia · Design · Experiência</span>
          </div>
          <div class="live-hero-image">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(preview.imageAlt)}">
            <span class="live-image-caption">${escapeHtml(product.name)}</span>
          </div>
          <span class="live-hero-number" aria-hidden="true">01</span>
        </section>
        <section class="live-statement" id="sobre">
          <span class="live-eyebrow">UMA IDEIA, COM DIREÇÃO</span>
          <p>${escapeHtml(preview.statement)}</p>
        </section>
        <section class="live-services" id="servicos">
          <div class="live-section-heading">
            <div><span class="live-eyebrow">O QUE FAZEMOS</span><h2>Um bom começo<br>muda tudo.</h2></div>
            <p>Uma estrutura de apresentação clara e flexível, pronta para receber a história e a oferta da sua marca.</p>
          </div>
          <div class="live-service-grid">${services}</div>
        </section>
        <section class="live-contact" id="contacto">
          <div><span class="live-eyebrow">PRONTO PARA O PRÓXIMO PASSO?</span><h2>Vamos criar algo<br>com significado.</h2></div>
          <div class="live-contact-actions">
            <p>Esta é uma prévia demonstrativa do modelo. Peça a personalização para adaptar conteúdo, imagens e identidade à sua marca.</p>
            <span class="live-price" data-product-price>${escapeHtml(priceLabel(product))}</span>
            <a class="live-cta" data-buy-link href="#">Comprar este modelo</a>
            <a class="live-cta live-cta-secondary" data-product-whatsapp href="#">Pedir personalização pelo WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <footer class="live-footer"><span>${escapeHtml(preview.brand)}</span><span>Prévia de modelo · Northstar Studio</span><a href="#top">Voltar ao topo ↑</a></footer>
    </div>`;

  setText("[data-product-price]", priceLabel(product));
  setBuyLinks(product);
  setProductWhatsappLinks(product, productPreviewUrl(product));
  document.title = `Prévia: ${product.name} — Northstar Studio`;
}

function initPromptDetail() {
  const page = document.querySelector('[data-detail="prompt"]');
  if (!page) return;
  const product = getProductFromUrl(promptPacks);
  setText("[data-product-name]", product.name);
  setText("[data-product-category]", product.category);
  setText("[data-product-price]", priceLabel(product));
  setText("[data-product-description]", product.description);
  setText("[data-prompt-count]", `${product.count}\nPROMPTS`);
  setText("[data-prompt-count-inline]", `${product.count} prompts`);
  setText("[data-prompt-count-text]", `${product.count} prompts cuidadosamente organizados`);
  setText("[data-prompt-category]", product.promptCategory);
  setImage("[data-cover-image]", product.image, product.imageAlt);
  setBuyLinks(product);
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
  initLandingPreview();
  initPromptDetail();
  initCarouselControls();
  initNavigation();
  initWhatsappLinks();
  initContactForm();
  observeReveals();
});
