const WHATSAPP_NUMBER = "244962054093";

const landingPages = [
  {
    id: "ai-startup",
    name: "AI Startup — Landing Page",
    category: "INTELIGÊNCIA ARTIFICIAL",
    price: null,
    checkoutUrl: "",
    shortDescription: "Apresente uma ferramenta de inteligência artificial com uma demo clara e focada na conversão.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Visual abstrato de tecnologia e inteligência artificial",
    preview: {
      theme: "ai",
      brand: "nova.ai",
      eyebrow: "A SUA NOVA PARCEIRA DE INTELIGÊNCIA ARTIFICIAL",
      headline: "As suas melhores ideias. Prontas em minutos.",
      heroCta: "Descubra o nova.ai",
      description: "Crie, escreva e organize o seu trabalho com uma assistente de IA que entende aquilo de que precisa.",
      shortDescription: "Crie conteúdo, automatize tarefas e trabalhe com uma assistente de IA.",
      imageAlt: "Interface de inteligência artificial num computador portátil",
      statement: "Menos tarefas repetitivas. Mais tempo para fazer o trabalho que importa.",
      sectionTag: "PRODUTIVIDADE COM IA",
      sectionLabel: "UMA FORMA MAIS INTELIGENTE DE TRABALHAR",
      sectionHeadline: "Da primeira ideia ao trabalho concluído.",
      sectionDescription: "Uma plataforma de IA simples de usar, com ferramentas práticas para ajudar a sua equipa a avançar com confiança.",
      services: [
        { title: "Assistente de IA", description: "Obtenha respostas úteis com contexto para as tarefas do seu dia a dia." },
        { title: "Criação de conteúdo", description: "Transforme um briefing em textos, ideias e campanhas em poucos passos." },
        { title: "Fluxos automatizados", description: "Passe menos tempo em tarefas repetitivas e mais tempo a fazer crescer o negócio." }
      ],
      trust: ["Para equipas de marketing", "Para quem cria todos os dias", "Para negócios em crescimento"],
      processHeading: "Da ideia ao resultado, passo a passo.",
      steps: [
        { title: "Escolha o seu objetivo", description: "Comece pela tarefa ou desafio que quer resolver." },
        { title: "Dê contexto à assistente", description: "Partilhe as informações necessárias para orientar a resposta." },
        { title: "Revise e personalize", description: "Ajuste o resultado ao seu conhecimento e à sua marca." }
      ],
      cta: "Experimente uma forma mais simples de trabalhar."
    }
  },
  {
    id: "saas",
    name: "SaaS — Landing Page",
    category: "SOFTWARE & PRODUTIVIDADE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Mostre como o seu software organiza projetos, equipas e tarefas num só lugar.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Painel de software com gráficos e informação organizada",
    preview: {
      theme: "saas",
      brand: "flowdesk",
      eyebrow: "O ESPAÇO DE TRABALHO DA SUA EQUIPA",
      headline: "Projetos em movimento. Toda a equipa alinhada.",
      heroCta: "Explore a plataforma",
      description: "Planeie projetos, acompanhe tarefas e mantenha cada pessoa a par — sem perder tempo a saltar entre ferramentas.",
      shortDescription: "Organize projetos, tarefas e equipas com um software intuitivo.",
      imageAlt: "Painel de software com gráficos e informação organizada",
      statement: "O trabalho corre melhor quando toda a gente sabe o que fazer a seguir.",
      sectionTag: "SOFTWARE DE GESTÃO DE PROJETOS",
      sectionLabel: "TUDO O QUE A SUA EQUIPA PRECISA",
      sectionHeadline: "Um fluxo de trabalho que faz sentido.",
      sectionDescription: "Do primeiro plano à tarefa concluída, acompanhe o progresso sem perder o foco.",
      services: [
        { title: "Planeie com clareza", description: "Organize projetos, prazos e prioridades num painel fácil de consultar." },
        { title: "Acompanhe o progresso", description: "Veja o estado de cada tarefa sem interromper o ritmo da equipa." },
        { title: "Trabalhe em conjunto", description: "Partilhe atualizações e mantenha conversas junto do trabalho." }
      ],
      trust: ["Projetos num só lugar", "Prioridades sempre visíveis", "Feito para equipas modernas"],
      processHeading: "Um fluxo de trabalho que acompanha a sua equipa.",
      steps: [
        { title: "Crie o projeto", description: "Defina o objetivo, os responsáveis e os próximos passos." },
        { title: "Organize as tarefas", description: "Distribua o trabalho e mantenha as prioridades visíveis." },
        { title: "Acompanhe cada etapa", description: "Consulte o progresso e atualize o plano quando necessário." }
      ],
      cta: "Organize o próximo projeto num só lugar."
    }
  },
  {
    id: "marketing-agency",
    name: "Marketing Agency — Landing Page",
    category: "MARKETING & PUBLICIDADE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Apresente os seus serviços de anúncios, SEO e redes sociais com uma proposta orientada a resultados.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Equipa de marketing a planear uma campanha numa reunião",
    preview: {
      theme: "agency",
      brand: "PULSE / GROWTH",
      eyebrow: "MARKETING COM ESTRATÉGIA E CRIATIVIDADE",
      headline: "Mais do que alcance. Crescimento que se mede.",
      heroCta: "Veja como podemos ajudar",
      description: "Ajudamos marcas ambiciosas a encontrar o seu público e a transformar atenção em clientes.",
      shortDescription: "Anúncios, SEO e redes sociais para atrair clientes e crescer.",
      imageAlt: "Equipa de marketing a planear uma campanha numa reunião",
      statement: "Boas campanhas começam com uma compreensão clara do negócio.",
      sectionTag: "SERVIÇOS DE MARKETING DIGITAL",
      sectionLabel: "SERVIÇOS PARA CADA FASE",
      sectionHeadline: "Estratégia que liga a marca às pessoas certas.",
      sectionDescription: "Um plano integrado para atrair atenção qualificada, construir confiança e apoiar o crescimento.",
      services: [
        { title: "Anúncios pagos", description: "Campanhas de Meta e Google alinhadas com os seus objetivos de negócio." },
        { title: "SEO e conteúdo", description: "Ajude os seus clientes a encontrar a marca quando procuram uma solução." },
        { title: "Redes sociais", description: "Uma presença consistente que transforma seguidores em comunidade." }
      ],
      trust: ["Facebook & Instagram Ads", "SEO & conteúdo", "Estratégia para redes sociais"],
      processHeading: "Estratégia, execução e acompanhamento.",
      steps: [
        { title: "Conhecemos o negócio", description: "Percebemos a sua oferta, os seus objetivos e o público que quer alcançar." },
        { title: "Definimos a estratégia", description: "Escolhemos os canais e a mensagem mais adequados ao projeto." },
        { title: "Lançamos e acompanhamos", description: "Executamos as campanhas e analisamos o que pode ser melhorado." }
      ],
      cta: "Vamos falar sobre o crescimento da sua marca."
    }
  },
  {
    id: "real-estate",
    name: "Real Estate — Landing Page",
    category: "IMOBILIÁRIO",
    price: null,
    checkoutUrl: "",
    shortDescription: "Destaque imóveis, agende visitas e ajude clientes a encontrar o próximo lar.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Moradia contemporânea com jardim e piscina",
    preview: {
      theme: "real-estate",
      brand: "HORIZON / IMÓVEIS",
      eyebrow: "IMÓVEIS SELECIONADOS COM CRITÉRIO",
      headline: "O lugar certo muda a forma de viver.",
      heroCta: "Descubra os imóveis",
      description: "Encontre casas e apartamentos escolhidos com atenção ao espaço, à localização e ao que realmente importa.",
      shortDescription: "Apresente imóveis e facilite pedidos de visita com uma página elegante.",
      imageAlt: "Moradia contemporânea com jardim e piscina",
      statement: "Encontrar uma casa não é só escolher um endereço. É imaginar o que pode acontecer ali.",
      sectionTag: "COMPRAR OU ARRENDAR",
      sectionLabel: "UMA SELEÇÃO PARA DESCOBRIR",
      sectionHeadline: "Espaços com potencial para se tornarem seus.",
      sectionDescription: "Acompanhamento próximo, informação clara e imóveis selecionados para facilitar a sua procura.",
      services: [
        { title: "Casas com carácter", description: "Descubra moradias com espaço, luz natural e detalhes bem pensados." },
        { title: "Apartamentos bem localizados", description: "Explore opções próximas de serviços, transportes e do seu dia a dia." },
        { title: "Visitas acompanhadas", description: "Marque uma visita e conheça cada espaço ao seu próprio ritmo." }
      ],
      trust: ["Compra e arrendamento", "Aconselhamento próximo", "Visitas com acompanhamento"],
      processHeading: "Uma procura acompanhada do início à visita.",
      steps: [
        { title: "Partilhe o que procura", description: "Indique a localização, o tipo de imóvel e os detalhes importantes." },
        { title: "Explore as opções", description: "Veja imóveis selecionados de acordo com aquilo que procura." },
        { title: "Marque uma visita", description: "Conheça o espaço e esclareça as suas dúvidas com acompanhamento." }
      ],
      cta: "Conte-nos o que procura. Ajudamos a encontrar."
    }
  },
  {
    id: "dental-clinic",
    name: "Dental Clinic — Landing Page",
    category: "SAÚDE & MEDICINA DENTÁRIA",
    price: null,
    checkoutUrl: "",
    shortDescription: "Apresente tratamentos e a equipa da clínica com clareza e convide novos pacientes a marcar.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Consultório dentário moderno, luminoso e preparado para receber pacientes",
    preview: {
      theme: "dental",
      brand: "SORRISO / CLÍNICA",
      eyebrow: "MEDICINA DENTÁRIA COM CUIDADO E PROXIMIDADE",
      headline: "Cuidar do seu sorriso pode ser simples.",
      heroCta: "Conheça os tratamentos",
      description: "Uma equipa atenciosa, explicações claras e cuidados personalizados em cada visita.",
      shortDescription: "Mostre tratamentos, equipa e marcações numa página acolhedora.",
      imageAlt: "Consultório dentário moderno e luminoso",
      statement: "Cada sorriso é único. O cuidado também deve ser.",
      sectionTag: "CUIDADOS DE SAÚDE ORAL",
      sectionLabel: "CUIDADOS PARA CADA SORRISO",
      sectionHeadline: "Atenção, experiência e conforto.",
      sectionDescription: "Conheça os cuidados da clínica e escolha um primeiro passo com acompanhamento da nossa equipa.",
      services: [
        { title: "Consulta de avaliação", description: "Uma conversa cuidadosa para conhecer as suas necessidades e explicar as opções." },
        { title: "Higiene oral", description: "Cuidados preventivos e orientação para manter a saúde oral no dia a dia." },
        { title: "Estética dentária", description: "Conheça as opções disponíveis com informação clara e acompanhamento profissional." }
      ],
      trust: ["Prevenção & higiene oral", "Tratamentos personalizados", "Marcação simples"],
      processHeading: "Cuidados explicados com atenção em cada etapa.",
      steps: [
        { title: "Escolha o cuidado", description: "Consulte as áreas clínicas e indique o motivo da sua visita." },
        { title: "Marque uma avaliação", description: "Agende um horário para conversar com a equipa da clínica." },
        { title: "Conheça as opções", description: "Receba informação clara sobre os cuidados adequados a si." }
      ],
      cta: "A nossa equipa está pronta para o receber."
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
    : `<span class="product-rating-label">DEMO COMPLETA</span>`;
  const actions = isPrompt
    ? `<a href="${href}">Ver detalhes <span aria-hidden="true">↗</span></a>`
    : `<a href="${previewHref}">Ver demo <span aria-hidden="true">↗</span></a><a href="${productWhatsAppHref(product)}" target="_blank" rel="noopener noreferrer">Personalizar <span aria-hidden="true">↗</span></a>`;

  return `<article class="product-card${isPrompt ? " prompt-card" : ""}">
    <a class="product-art" href="${isPrompt ? href : previewHref}" aria-label="${isPrompt ? `Ver detalhes de ${product.name}` : `Visualizar ${product.name}`}">
      <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
      <span class="product-category">${product.category}</span>${badge}${count}
    </a>
    <div class="product-card-body">
      <div class="product-card-top"><h3>${product.name}</h3></div>
      <p>${product.shortDescription}</p>
      ${isPrompt ? `<div class="product-card-price">${priceLabel(product)}</div>` : ""}
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
        ? (filtered.length === 1 ? "demo" : "demos")
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
  if (value === undefined || value === null) return;
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setProductPrice(product) {
  document.querySelectorAll("[data-product-price]").forEach((element) => {
    element.textContent = product.price || "";
    element.hidden = !product.price;
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
    link.textContent = "Comprar";
  });
}

function whatsappHref(message) {
  const phoneDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

function productPreviewUrl(product) {
  return new URL(`landing-preview.html?id=${encodeURIComponent(product.id)}`, window.location.href).href;
}

function productWhatsAppHref(product) {
  const message = `Olá! Gostaria de pedir a personalização da landing page "${product.name}". Link da demo: ${productPreviewUrl(product)}`;
  return whatsappHref(message);
}

function setProductWhatsappLinks(product, previewUrl) {
  const message = `Olá! Gostaria de pedir a personalização da landing page "${product.name}". Link da demo: ${previewUrl}`;
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
  setProductPrice(product);
  setText("[data-product-description]", product.preview.description);
  setText("[data-long-description]", product.preview.sectionDescription);
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
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.description)}</p>
    </article>`).join("");
  const steps = preview.steps.map((step, index) => `
    <article class="live-step">
      <span>0${index + 1}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.description)}</p>
    </article>`).join("");
  const trust = preview.trust.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

  root.innerHTML = `
    <div class="live-site live-theme-${preview.theme}">
      <header class="live-nav">
        <a class="live-brand" href="#top">${escapeHtml(preview.brand)}</a>
        <nav aria-label="Navegação da prévia">
          <a href="#sobre">Sobre</a><a href="#servicos">Soluções</a><a href="#contacto">Contacto</a>
        </nav>
        <a class="live-nav-cta" href="#contacto">Fale connosco <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <section class="live-hero" id="top">
          <div class="live-hero-copy">
            <span class="live-eyebrow">${escapeHtml(preview.eyebrow)}</span>
            <h1>${escapeHtml(preview.headline)}</h1>
            <p>${escapeHtml(preview.description)}</p>
            <div class="live-hero-actions">
              <a class="live-cta" href="#servicos">${escapeHtml(preview.heroCta)} <span aria-hidden="true">↗</span></a>
              <a class="live-cta live-cta-secondary" data-buy-link href="#">Comprar</a>
            </div>
            <span class="live-note">${escapeHtml(preview.sectionTag)}</span>
          </div>
          <div class="live-hero-image">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(preview.imageAlt)}">
            <span class="live-image-caption">${escapeHtml(product.name)}</span>
          </div>
          <span class="live-hero-number" aria-hidden="true">01</span>
        </section>
        <section class="live-trust" aria-label="Destaques">
          ${trust}
        </section>
        <section class="live-statement" id="sobre">
          <span class="live-eyebrow">${escapeHtml(preview.sectionTag)}</span>
          <p>${escapeHtml(preview.statement)}</p>
        </section>
        <section class="live-services" id="servicos">
          <div class="live-section-heading">
            <div><span class="live-eyebrow">${escapeHtml(preview.sectionLabel)}</span><h2>${escapeHtml(preview.sectionHeadline)}</h2></div>
            <p>${escapeHtml(preview.sectionDescription)}</p>
          </div>
          <div class="live-service-grid">${services}</div>
        </section>
        <section class="live-process" id="processo">
          <div class="live-section-heading">
            <div><span class="live-eyebrow">COMO FUNCIONA</span><h2>${escapeHtml(preview.processHeading)}</h2></div>
            <p>Uma sequência clara para conhecer a solução e perceber como a demo pode ser adaptada ao seu negócio.</p>
          </div>
          <div class="live-step-grid">${steps}</div>
        </section>
        <section class="live-contact" id="contacto">
          <div><span class="live-eyebrow">VAMOS CONVERSAR</span><h2>${escapeHtml(preview.cta)}</h2></div>
          <div class="live-contact-actions">
            <p>Este é um modelo demonstrativo. Peça a personalização para adaptar o conteúdo, as imagens e a identidade à sua marca.</p>
            <div class="live-contact-actions-row">
              <a class="live-cta" data-product-whatsapp href="#">Pedir personalização <span aria-hidden="true">↗</span></a>
              <a class="live-cta live-cta-secondary" data-buy-link href="#">Comprar</a>
            </div>
          </div>
        </section>
      </main>
      <footer class="live-footer"><span>${escapeHtml(preview.brand)}</span><span>Modelo demonstrativo · Northstar Studio</span><a href="#top">Voltar ao topo ↑</a></footer>
    </div>`;

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
