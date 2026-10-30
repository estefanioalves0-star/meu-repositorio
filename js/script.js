const WHATSAPP_NUMBER = "244962054093";

const landingPages = [
  {
    id: "ai-startup",
    name: "AI Startup — Landing Page",
    category: "ARTIFICIAL INTELLIGENCE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Showcase your AI product with a clear, conversion-focused landing page.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Abstract artificial intelligence technology",
    preview: {
      theme: "ai",
      brand: "nova.ai",
      eyebrow: "YOUR NEW AI WORK PARTNER",
      headline: "Your best ideas. Ready in minutes.",
      heroCta: "Discover nova.ai",
      description: "Create, write, and organize your work with an AI assistant that understands what you need.",
      shortDescription: "Create content, automate tasks, and work smarter with an AI assistant.",
      imageAlt: "AI assistant interface on a laptop",
      statement: "Less repetitive work. More time for the work that matters.",
      sectionTag: "AI-POWERED PRODUCTIVITY",
      sectionLabel: "A SMARTER WAY TO WORK",
      sectionHeadline: "From first idea to finished work.",
      sectionDescription: "An easy-to-use AI platform with practical tools to help your team move forward with confidence.",
      services: [
        { title: "AI assistant", description: "Get useful, contextual answers for the tasks on your plate every day." },
        { title: "Content creation", description: "Turn a brief into copy, ideas, and campaigns in just a few steps." },
        { title: "Automated workflows", description: "Spend less time on repetitive tasks and more time growing your business." }
      ],
      trust: ["For marketing teams", "For everyday creators", "For growing businesses"],
      processHeading: "From idea to outcome, step by step.",
      steps: [
        { title: "Choose your goal", description: "Start with the task or challenge you want to solve." },
        { title: "Give your assistant context", description: "Share the information it needs to guide its response." },
        { title: "Review and personalize", description: "Adapt the results to your expertise and brand." }
      ],
      cta: "Discover a simpler way to work."
    }
  },
  {
    id: "saas",
    name: "SaaS — Landing Page",
    category: "SOFTWARE & PRODUCTIVITY",
    price: null,
    checkoutUrl: "",
    shortDescription: "Show how your software brings projects, teams, and tasks together in one place.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Software dashboard with charts and organized information",
    preview: {
      theme: "saas",
      brand: "flowdesk",
      eyebrow: "YOUR TEAM'S WORKSPACE",
      headline: "Projects moving forward. Your whole team in sync.",
      heroCta: "Explore the platform",
      description: "Plan projects, track tasks, and keep everyone in the loop—without jumping between tools.",
      shortDescription: "Organize projects, tasks, and teams with intuitive software.",
      imageAlt: "Software dashboard with charts and organized information",
      statement: "Work runs smoother when everyone knows what to do next.",
      sectionTag: "PROJECT MANAGEMENT SOFTWARE",
      sectionLabel: "EVERYTHING YOUR TEAM NEEDS",
      sectionHeadline: "A workflow that just makes sense.",
      sectionDescription: "Track progress from the first plan to the final task without losing focus.",
      services: [
        { title: "Plan with clarity", description: "Organize projects, deadlines, and priorities in one easy-to-read dashboard." },
        { title: "Track progress", description: "See the status of every task without disrupting your team's momentum." },
        { title: "Work together", description: "Share updates and keep conversations connected to the work." }
      ],
      trust: ["Projects in one place", "Priorities always visible", "Built for modern teams"],
      processHeading: "A workflow that keeps up with your team.",
      steps: [
        { title: "Create your project", description: "Set the goal, assign owners, and define the next steps." },
        { title: "Organize your tasks", description: "Assign work and keep priorities visible." },
        { title: "Track every step", description: "Check progress and adjust the plan as needed." }
      ],
      cta: "Bring your next project together in one place."
    }
  },
  {
    id: "marketing-agency",
    name: "Marketing Agency — Landing Page",
    category: "MARKETING & ADVERTISING",
    price: null,
    checkoutUrl: "",
    shortDescription: "Present your paid ads, SEO, and social media services with a results-driven offer.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Marketing team planning a campaign in a meeting",
    preview: {
      theme: "agency",
      brand: "PULSE / GROWTH",
      eyebrow: "STRATEGIC, CREATIVE MARKETING",
      headline: "More than reach. Growth you can measure.",
      heroCta: "See how we can help",
      description: "We help ambitious brands find their audience and turn attention into customers.",
      shortDescription: "Paid ads, SEO, and social media to attract customers and grow.",
      imageAlt: "Marketing team planning a campaign in a meeting",
      statement: "Great campaigns start with a clear understanding of the business.",
      sectionTag: "DIGITAL MARKETING SERVICES",
      sectionLabel: "SERVICES FOR EVERY STAGE",
      sectionHeadline: "Strategy that connects your brand with the right people.",
      sectionDescription: "An integrated plan to attract qualified attention, build trust, and support growth.",
      services: [
        { title: "Paid advertising", description: "Meta and Google campaigns aligned with your business goals." },
        { title: "SEO and content", description: "Help customers find your brand when they're looking for a solution." },
        { title: "Social media", description: "Build a consistent presence that turns followers into a community." }
      ],
      trust: ["Facebook & Instagram Ads", "SEO & content", "Social media strategy"],
      processHeading: "Strategy, execution, and optimization.",
      steps: [
        { title: "We learn your business", description: "We get to know your offer, your goals, and the audience you want to reach." },
        { title: "We build your strategy", description: "We choose the channels and messaging that fit your business." },
        { title: "We launch and optimize", description: "We run your campaigns and look for ways to improve performance." }
      ],
      cta: "Let's talk about growing your brand."
    }
  },
  {
    id: "real-estate",
    name: "Real Estate — Landing Page",
    category: "REAL ESTATE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Showcase properties, schedule tours, and help clients find their next home.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contemporary home with a garden and pool",
    preview: {
      theme: "real-estate",
      brand: "HORIZON / REALTY",
      eyebrow: "THOUGHTFULLY SELECTED HOMES",
      headline: "The right place can change everything.",
      heroCta: "Explore properties",
      description: "Find homes and apartments selected for the space, location, and details that matter most.",
      shortDescription: "Showcase properties and make it easy to schedule a tour.",
      imageAlt: "Contemporary home with a garden and pool",
      statement: "Finding a home is more than choosing an address. It's imagining what could happen there.",
      sectionTag: "BUY OR RENT",
      sectionLabel: "A COLLECTION TO EXPLORE",
      sectionHeadline: "Spaces with the potential to feel like yours.",
      sectionDescription: "Personal guidance, clear information, and carefully selected properties to make your search easier.",
      services: [
        { title: "Homes with character", description: "Discover homes with room to live, natural light, and thoughtful details." },
        { title: "Well-located apartments", description: "Explore options close to the places and services you rely on every day." },
        { title: "Guided property tours", description: "Schedule a tour and explore each space at your own pace." }
      ],
      trust: ["Buying and renting", "Personal guidance", "Guided property tours"],
      processHeading: "Guidance from your first search to your tour.",
      steps: [
        { title: "Tell us what you're looking for", description: "Share your preferred location, property type, and must-haves." },
        { title: "Explore your options", description: "Browse properties selected to match what you're looking for." },
        { title: "Schedule a tour", description: "See the space in person and get answers along the way." }
      ],
      cta: "Tell us what you're looking for. We'll help you find it."
    }
  },
  {
    id: "dental-clinic",
    name: "Dental Clinic — Landing Page",
    category: "HEALTHCARE & DENTISTRY",
    price: null,
    checkoutUrl: "",
    shortDescription: "Showcase your dental team and services, and make it easy for new patients to book.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bright, modern dental office ready to welcome patients",
    preview: {
      theme: "dental",
      brand: "EVERWELL / DENTAL",
      eyebrow: "DENTAL CARE THAT PUTS YOU FIRST",
      headline: "A healthier smile starts here.",
      heroCta: "Explore our services",
      description: "A caring team, clear answers, and personalized dental care at every visit.",
      shortDescription: "Showcase your services, team, and appointments with a welcoming design.",
      imageAlt: "Bright, modern dental office",
      statement: "Every smile is unique. Your care should be, too.",
      sectionTag: "COMPREHENSIVE DENTAL CARE",
      sectionLabel: "CARE FOR EVERY SMILE",
      sectionHeadline: "Expertise, comfort, and personal attention.",
      sectionDescription: "Explore our services and find the right first step with support from our team.",
      services: [
        { title: "New patient exams", description: "A thoughtful conversation to understand your needs and explain your options." },
        { title: "Preventive care", description: "Routine cleanings and guidance to help protect your oral health." },
        { title: "Cosmetic dentistry", description: "Explore available treatments with clear information and professional care." }
      ],
      trust: ["Preventive care", "Personalized treatment", "Easy appointment scheduling"],
      processHeading: "Clear guidance at every step of your care.",
      steps: [
        { title: "Choose a service", description: "Explore our services and tell us what brings you in." },
        { title: "Schedule a consultation", description: "Book a time to talk with our dental team." },
        { title: "Explore your options", description: "Get clear guidance on the care that's right for you." }
      ],
      cta: "Our team is here to help you smile with confidence."
    }
  },
  {
    id: "coaching-consulting",
    name: "Coaching & Consulting — Landing Page",
    category: "COACHING & CONSULTING",
    price: null,
    checkoutUrl: "",
    shortDescription: "Present your coaching or consulting services and turn interested visitors into clients.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Consultant guiding a team through a planning session",
    preview: {
      theme: "coaching",
      brand: "NORTH / ADVISORY",
      eyebrow: "A CLEARER PATH TO YOUR NEXT MILESTONE",
      headline: "Make your next move your best one yet.",
      heroCta: "Explore the approach",
      description: "Get thoughtful guidance, practical strategies, and a partner who helps you turn your goals into meaningful progress.",
      shortDescription: "Showcase your coaching services, expertise, and client journey.",
      imageAlt: "Consultant guiding a team through a planning session",
      statement: "The right perspective can turn a big goal into a clear next step.",
      sectionTag: "COACHING & CONSULTING",
      sectionLabel: "SUPPORT THAT MOVES YOU FORWARD",
      sectionHeadline: "A thoughtful plan, built around you.",
      sectionDescription: "From defining the challenge to taking action, get focused support that meets you where you are.",
      services: [
        { title: "One-on-one coaching", description: "Create space to work through challenges and build a plan that fits your goals." },
        { title: "Business consulting", description: "Get an outside perspective on your strategy, operations, and next opportunities." },
        { title: "Leadership development", description: "Build the skills and confidence to lead your team through what's next." }
      ],
      trust: ["Personalized guidance", "Practical strategies", "Built around your goals"],
      processHeading: "A clear path from conversation to action.",
      steps: [
        { title: "Start with a conversation", description: "Share what's working, what's challenging, and where you want to go." },
        { title: "Build your plan", description: "Set clear priorities and practical steps that fit your situation." },
        { title: "Keep making progress", description: "Put your plan into action and adjust as your goals evolve." }
      ],
      cta: "Ready to make your next move?"
    }
  },
  {
    id: "ecommerce-product",
    name: "E-commerce Product — Landing Page",
    category: "E-COMMERCE",
    price: null,
    checkoutUrl: "",
    shortDescription: "Showcase a standout product with persuasive details and a clear path to purchase.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Red athletic sneaker photographed against a bright background",
    preview: {
      theme: "ecommerce",
      brand: "FORM / GOODS",
      eyebrow: "MADE FOR YOUR EVERYDAY",
      headline: "The details make all the difference.",
      heroCta: "Explore the collection",
      description: "Meet a thoughtfully designed essential that brings comfort, quality, and everyday versatility together.",
      shortDescription: "Highlight product benefits, design details, and a focused shopping experience.",
      imageAlt: "Red athletic sneaker photographed against a bright background",
      statement: "Good design earns its place in your everyday routine.",
      sectionTag: "DESIGNED WITH PURPOSE",
      sectionLabel: "A CLOSER LOOK",
      sectionHeadline: "Thoughtful from the first detail.",
      sectionDescription: "Show customers what makes your product special with clear, helpful information at every step.",
      services: [
        { title: "Made for everyday", description: "Show how your product fits naturally into the moments that matter." },
        { title: "Quality you can see", description: "Highlight materials, craftsmanship, and the details behind the design." },
        { title: "A simpler way to shop", description: "Give customers the information they need to feel confident choosing." }
      ],
      trust: ["Thoughtful design", "Quality materials", "Easy online shopping"],
      processHeading: "Everything you need to choose with confidence.",
      steps: [
        { title: "Find your fit", description: "Explore product details, options, and sizing information." },
        { title: "Choose your favorite", description: "Pick the style and details that work best for you." },
        { title: "Make it yours", description: "Place your order through a simple, secure checkout." }
      ],
      cta: "Find your new everyday favorite."
    }
  },
  {
    id: "law-firm",
    name: "Law Firm — Landing Page",
    category: "LEGAL SERVICES",
    price: null,
    checkoutUrl: "",
    shortDescription: "Build trust with a clear overview of your legal practice, expertise, and client services.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Law books and legal documents on a desk",
    preview: {
      theme: "law",
      brand: "HARTWELL / LAW",
      eyebrow: "THOUGHTFUL COUNSEL. CLEAR NEXT STEPS.",
      headline: "When it matters, know where you stand.",
      heroCta: "Explore our practice",
      description: "Get clear guidance and responsive legal support from a team focused on understanding your needs.",
      shortDescription: "Present your practice areas, legal team, and client intake process.",
      imageAlt: "Law books and legal documents on a desk",
      statement: "A clear understanding of your options is a powerful place to start.",
      sectionTag: "LEGAL COUNSEL",
      sectionLabel: "HOW WE CAN HELP",
      sectionHeadline: "Experience grounded in your needs.",
      sectionDescription: "Learn about our areas of practice and how we work to guide clients through important decisions.",
      services: [
        { title: "Business law", description: "Practical counsel for business formation, contracts, and day-to-day decisions." },
        { title: "Estate planning", description: "Thoughtful planning to help you prepare for the future and protect what matters." },
        { title: "Family law", description: "Clear, considerate guidance through personal legal matters and transitions." }
      ],
      trust: ["Clear communication", "Client-focused counsel", "Practical next steps"],
      processHeading: "A considered approach at every stage.",
      steps: [
        { title: "Tell us what brings you here", description: "Share a brief overview so we can understand what kind of help you need." },
        { title: "Discuss your options", description: "Connect with our team to learn about possible next steps for your situation." },
        { title: "Move forward with clarity", description: "Get guidance on the process, timing, and information you'll need." }
      ],
      cta: "Let's talk about the right next step."
    }
  },
  {
    id: "roofing-home-services",
    name: "Roofing & Home Services — Landing Page",
    category: "ROOFING & HOME SERVICES",
    price: null,
    checkoutUrl: "",
    shortDescription: "Showcase your home improvement services and make it easy to request an estimate.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Home service professional inspecting a residential roof",
    preview: {
      theme: "home-services",
      brand: "TRUEFRAME / HOME",
      eyebrow: "LOCAL SERVICE. QUALITY YOU CAN SEE.",
      headline: "Take care of home, starting at the top.",
      heroCta: "Explore our services",
      description: "Get straightforward estimates and dependable home services from a team that takes pride in its work.",
      shortDescription: "Promote roofing, repairs, and home services with a clear quote request path.",
      imageAlt: "Home service professional inspecting a residential roof",
      statement: "A well-cared-for home starts with a team you can count on.",
      sectionTag: "ROOFING & HOME IMPROVEMENT",
      sectionLabel: "HELP FOR YOUR HOME",
      sectionHeadline: "Reliable work, from the first call to the final walkthrough.",
      sectionDescription: "From roof repairs to exterior upgrades, find the right service and know what to expect.",
      services: [
        { title: "Roof repair", description: "Address leaks, storm damage, and wear with a careful inspection and repair plan." },
        { title: "Roof replacement", description: "Explore durable roofing options and get guidance on your replacement project." },
        { title: "Exterior improvements", description: "Improve and protect your home with siding, gutters, and other exterior services." }
      ],
      trust: ["Clear estimates", "Quality-focused work", "Local service team"],
      processHeading: "Know what to expect from start to finish.",
      steps: [
        { title: "Tell us about your project", description: "Share the service you need and a few details about your home." },
        { title: "Schedule an estimate", description: "Choose a convenient time for a visit and project assessment." },
        { title: "Review your options", description: "Get a clear scope of work and discuss the next steps with our team." }
      ],
      cta: "Let's take a closer look at your project."
    }
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness — Landing Page",
    category: "GYM & FITNESS",
    price: null,
    checkoutUrl: "",
    shortDescription: "Promote your gym, classes, and trainers with an inviting path to get started.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern gym with fitness equipment",
    preview: {
      theme: "fitness",
      brand: "GROUND / FITNESS",
      eyebrow: "YOUR GOALS. YOUR PACE. YOUR COMMUNITY.",
      headline: "Build strength for the life you want.",
      heroCta: "Explore membership",
      description: "Find expert coaching, welcoming classes, and the space to make fitness part of your routine.",
      shortDescription: "Showcase gym facilities, group classes, and personal training options.",
      imageAlt: "Modern gym with fitness equipment",
      statement: "Progress isn't one-size-fits-all. Your fitness journey shouldn't be either.",
      sectionTag: "A PLACE TO MOVE FORWARD",
      sectionLabel: "FIND YOUR WAY TO MOVE",
      sectionHeadline: "Training that fits your goals and your life.",
      sectionDescription: "Explore flexible ways to train, build healthy habits, and find support at every level.",
      services: [
        { title: "Strength training", description: "Use well-equipped training areas to build strength at your own pace." },
        { title: "Group classes", description: "Find motivation and community in classes for a range of fitness levels." },
        { title: "Personal training", description: "Work one-on-one with a trainer on a plan tailored to your goals." }
      ],
      trust: ["All fitness levels welcome", "Experienced trainers", "Flexible training options"],
      processHeading: "A welcoming first step, whatever your goal.",
      steps: [
        { title: "Explore the gym", description: "See the spaces, equipment, and training options available." },
        { title: "Find your fit", description: "Choose a membership, class, or training plan that works for you." },
        { title: "Get moving", description: "Meet the team and start building a routine at your own pace." }
      ],
      cta: "Ready to find your place to move?"
    }
  }
];

const promptPackInfo = [
  ["100-ai-business-prompts", "100 AI Prompts for Business Growth", 100, "Business & Growth", "Practical prompts for automation, customer service, operations, and strategy."],
  ["100-email-marketing-prompts", "100 AI Prompts for Email Marketing", 100, "Email Marketing", "Grow your list, build customer relationships, recover carts, and plan launches."],
  ["100-facebook-ads-prompts", "100 AI Prompts for High-Converting Facebook Ads", 100, "Digital Advertising", "Create clearer ads for entrepreneurs, online stores, and affiliates."],
  ["100-instagram-prompts", "100 AI Prompts for Instagram Content", 100, "Social Media", "Create Reels, carousels, captions, and content calendars."],
  ["100-market-research-prompts", "100 AI Prompts for Market Research", 100, "Market Research", "Explore competitors, customer personas, idea validation, and pricing."],
  ["100-shopify-prompts", "100 AI Prompts for Shopify Store Growth", 100, "E-commerce", "Improve product pages, organic discovery, upsells, and store growth."],
  ["200-ai-prompts-for-resumes-and-job-interviews", "200 AI Prompts for Resumes and Job Interviews", 200, "Career", "Build stronger resumes, tailor applications, and prepare for interviews with confidence."],
  ["200-copywriting-prompts", "200 AI Prompts for Persuasive Copywriting", 200, "Copywriting", "Write more persuasive marketing messages, compelling stories, and sales copy."],
  ["200-digital-marketing-prompts", "200 AI Prompts for Digital Marketing", 200, "Digital Marketing", "Plan, create, evaluate, and improve your digital marketing."],
  ["200-prompts-for-high-conversing-landing-pages", "200 AI Prompts for High-Converting Landing Pages", 200, "Landing Pages", "Create strategic pages that turn attention into action."],
  ["200-web-development-prompts", "200 AI Prompts for Web Development", 200, "Web Development", "Build accessible, responsive web experiences that are easy to maintain."],
  ["250-ai-prompts-for-email-marketing", "250 AI Prompts for Email Marketing", 250, "Email Marketing", "Write welcome emails, promotions, cart recovery messages, and nurture sequences."],
  ["250-ai-prompts-for-real-estate-agents", "250 AI Prompts for Real Estate Agents", 250, "Real Estate", "Create real estate marketing, client follow-ups, and everyday content."],
  ["300-ai-prompts-for-ecommerce-product-listings", "300 AI Prompts for E-commerce Product Listings", 300, "E-commerce", "Improve product titles, descriptions, FAQs, photography, and product pages."],
  ["300-ai-prompts-for-sales-copy-that-converts", "300 AI Prompts for Sales Copy That Converts", 300, "Sales & Copywriting", "A practical library for online sellers, copywriters, and entrepreneurs."],
  ["300-ai-prompts-for-stunning-product-images", "300 AI Prompts for Stunning Product Images", 300, "Product Imagery", "Plan product photography, settings, art direction, and commercial images."],
  ["365-ai-prompts-to-run-your-small-business", "365 AI Prompts to Run Your Small Business", 365, "Small Business", "Prompts for customer service, marketing, sales, and day-to-day operations."],
  ["400-ai-prompts-for-youtube-creators", "400 AI Prompts for YouTube Creators", 400, "YouTube Creation", "Develop video ideas, scripts, titles, thumbnails, and channel growth plans."],
  ["500-ai-prompts-for-professional-websites-and-landing-pages", "500 AI Prompts for Professional Websites & Landing Pages", 500, "Websites & Landing Pages", "Plan page strategy, structure, copy, visual concepts, and conversion."],
  ["500-social-media-growth-prompts", "500 AI Prompts for Social Media Growth", 500, "Social Media", "Practical content ideas for small businesses, freelancers, and creators."]
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
  imageAlt: `Cover of ${name}, designed from the document's first page`,
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
    ? `<a href="${href}">View details <span aria-hidden="true">↗</span></a>`
    : `<a href="${previewHref}">View demo <span aria-hidden="true">↗</span></a><a href="${productWhatsAppHref(product)}" target="_blank" rel="noopener noreferrer">Customize <span aria-hidden="true">↗</span></a>`;

  return `<article class="product-card${isPrompt ? " prompt-card" : ""}">
    <a class="product-art" href="${isPrompt ? href : previewHref}" aria-label="${isPrompt ? `View details for ${product.name}` : `Preview ${product.name}`}">
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
  const normalizedQuery = query.trim().toLocaleLowerCase("en-US");
  const collections = [
    { type: "landing", items: landingPages, track: document.querySelector('[data-track="landing"]') },
    { type: "prompts", items: promptPacks, track: document.querySelector('[data-track="prompts"]') }
  ];

  collections.forEach(({ type, items, track }) => {
    if (!track) return;
    const filtered = items.filter((product) =>
      `${product.name} ${product.category} ${product.shortDescription}`.toLocaleLowerCase("en-US").includes(normalizedQuery)
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
  return product.price || "Price coming soon";
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
    link.textContent = "Buy";
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
  const message = `Hi! I'd like to request customization for the "${product.name}" landing page. Demo link: ${productPreviewUrl(product)}`;
  return whatsappHref(message);
}

function setProductWhatsappLinks(product, previewUrl) {
  const message = `Hi! I'd like to request customization for the "${product.name}" landing page. Demo link: ${previewUrl}`;
  document.querySelectorAll("[data-product-whatsapp]").forEach((link) => {
    link.href = whatsappHref(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]:not([data-product-whatsapp])").forEach((link) => {
    link.href = whatsappHref("Hi! I'd like to learn more about Northstar Studio's products.");
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
  setImage("[data-showcase-one]", product.image, `A closer look at the ${product.name} visual experience`);
  setImage("[data-showcase-two]", product.image, `More design details for ${product.name}`);
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
        <nav aria-label="Preview navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a class="live-nav-cta" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <section class="live-hero" id="top">
          <div class="live-hero-copy">
            <span class="live-eyebrow">${escapeHtml(preview.eyebrow)}</span>
            <h1>${escapeHtml(preview.headline)}</h1>
            <p>${escapeHtml(preview.description)}</p>
            <div class="live-hero-actions">
              <a class="live-cta" href="#services">${escapeHtml(preview.heroCta)} <span aria-hidden="true">↗</span></a>
              <a class="live-cta live-cta-secondary" data-buy-link href="#">Buy</a>
            </div>
            <span class="live-note">${escapeHtml(preview.sectionTag)}</span>
          </div>
          <div class="live-hero-image">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(preview.imageAlt)}">
            <span class="live-image-caption">${escapeHtml(product.name)}</span>
          </div>
          <span class="live-hero-number" aria-hidden="true">01</span>
        </section>
        <section class="live-trust" aria-label="Highlights">
          ${trust}
        </section>
        <section class="live-statement" id="about">
          <span class="live-eyebrow">${escapeHtml(preview.sectionTag)}</span>
          <p>${escapeHtml(preview.statement)}</p>
        </section>
        <section class="live-services" id="services">
          <div class="live-section-heading">
            <div><span class="live-eyebrow">${escapeHtml(preview.sectionLabel)}</span><h2>${escapeHtml(preview.sectionHeadline)}</h2></div>
            <p>${escapeHtml(preview.sectionDescription)}</p>
          </div>
          <div class="live-service-grid">${services}</div>
        </section>
        <section class="live-process" id="process">
          <div class="live-section-heading">
            <div><span class="live-eyebrow">HOW IT WORKS</span><h2>${escapeHtml(preview.processHeading)}</h2></div>
            <p>A clear path to explore the solution and see how this demo can be tailored to your business.</p>
          </div>
          <div class="live-step-grid">${steps}</div>
        </section>
        <section class="live-contact" id="contact">
          <div><span class="live-eyebrow">LET'S TALK</span><h2>${escapeHtml(preview.cta)}</h2></div>
          <div class="live-contact-actions">
            <p>This is a demo template. Request customization to tailor the content, imagery, and visual identity to your brand.</p>
            <div class="live-contact-actions-row">
              <a class="live-cta" data-product-whatsapp href="#">Request customization <span aria-hidden="true">↗</span></a>
              <a class="live-cta live-cta-secondary" data-buy-link href="#">Buy</a>
            </div>
          </div>
        </section>
      </main>
      <footer class="live-footer"><span>${escapeHtml(preview.brand)}</span><span>Demo template · Northstar Studio</span><a href="#top">Back to top ↑</a></footer>
    </div>`;

  setBuyLinks(product);
  setProductWhatsappLinks(product, productPreviewUrl(product));
  document.title = `Preview: ${product.name} — Northstar Studio`;
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
  setText("[data-prompt-count-text]", `${product.count} carefully organized prompts`);
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
    toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
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
  if (topic && requestedSubject === "customization") topic.value = "Landing page customization";
  if (topic && requestedSubject === "purchase") topic.value = "Product question";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const subject = `[Northstar Studio] ${formData.get("topic")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Topic: ${formData.get("topic")}`,
      "",
      formData.get("message")
    ].join("\n");
    const mailto = `mailto:hello@northstar.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    const note = form.querySelector("[data-form-note]");
    if (note) note.textContent = "Your email app will open with your message ready to send.";
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
