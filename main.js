const commonServiceFeatures = [
  { icon: "clipboardCheck", title: "Documented SOPs", description: "Operating routines built for review, continuity, and handover." },
  { icon: "desktopAnalytics", title: "Digital reporting", description: "Structured visibility into incidents, attendance, and escalation." },
  { icon: "usersGroup", title: "Verified workforce", description: "Background checks, onboarding, and role-specific training." },
  { icon: "clock24", title: "Response readiness", description: "Supervision and escalation designed for critical environments." },
];

const siteData = {
  phone: "+91 87797 11055",
  phoneHref: "tel:+918779711055",
  whatsapp: "+91 98702 79603",
  whatsappHref: "https://wa.me/919870279603",
  email: "info@completesolutions.co.in",
  emailHref: "mailto:info@completesolutions.co.in",
  address: "Corporate Office Mumbai, 1st Floor, Vinay Bhavya Complex, A-102, 159, CST Road, Kalina, Santacruz East, Mumbai, Maharashtra \u2013 400098",
  psara: "PSA/L/44/MH/2023/AUG/3/3227",
  iso: "2024031235",
  nabh: "[PLACEHOLDER: NABH training reference]",
  coordinates: { lat: "19.0753", lng: "72.8552" },
  assets: {
    homepageHero: { src: "/assets/images/image-10.png", title: "Security guard night patrol", usage: "Homepage hero background", ratio: "16 / 9" },
    housekeepingHero: { src: "/assets/images/image-09.png", title: "Housekeeping corridor", usage: "Housekeeping service page hero", ratio: "16 / 9" },
    cctv: { src: "/assets/images/image-08.png", title: "CCTV control room", usage: "Security hero and tech section", ratio: "4 / 3" },
    maintenance: { src: "/assets/images/image-07.png", title: "Maintenance technician with checklist", usage: "Maintenance service page hero", ratio: "4 / 3" },
    pestControl: { src: "/assets/images/image-06.png", title: "Pest control PPE in kitchen", usage: "Pest Control service page hero", ratio: "4 / 3" },
    property: { src: "/assets/images/image-05.png", title: "Property manager site walkthrough", usage: "Property Management hero", ratio: "4 / 3" },
    workforce: { src: "/assets/images/image-04.png", title: "Uniformed staff lineup", usage: "About workforce section", ratio: "4 / 3" },
    compliance: { src: "/assets/images/image-03.png", title: "Compliance audit desk flat-lay", usage: "About certifications and trust strip", ratio: "3 / 2" },
    itPark: { src: "/assets/images/image-02.png", title: "IT technology park campus", usage: "Industries IT Parks card", ratio: "16 / 9" },
    manufacturing: { src: "/assets/images/image-01.png", title: "Industrial manufacturing floor", usage: "Industries Manufacturing card", ratio: "16 / 9" },
    banking: { src: "/assets/images/image-11.png", title: "Bank branch entrance with security guard", usage: "Industries Banking card", ratio: "16 / 9" },
    residential: { src: "/assets/images/image-12.png", title: "Residential society gate", usage: "Industries Residential card", ratio: "16 / 9" },
  },
  stats: [
    { value: "30+", label: "Years in operation" },
    { value: "[XX]M+", label: "Sq ft managed daily" },
    { value: "[XX]%", label: "Client retention rate" },
    { value: "[XXXX]+", label: "Operational personnel" },
    { value: "[XX]+", label: "Active client locations" },
  ],
  tech: [
    { icon: "qrcode", title: "QR/GPS patrol tracking", text: "Structured patrol and attendance visibility." },
    { icon: "building", title: "VMS integration", text: "Visitor movement tied to site protocols." },
    { icon: "clipboard", title: "Digital escalation logs", text: "Incident trails ready for review." },
    { icon: "users", title: "Biometric attendance", text: "Verified workforce presence." },
    { icon: "dashboard", title: "Client dashboard", text: "[PLACEHOLDER: platform/software details]" },
  ],
  services: {
    security: {
      title: "Professional security services in Mumbai",
      eyebrow: "Security services",
      metaTitle: "Security Services Mumbai - Trained Guards & Patrol | Complete Solutions",
      description: "Complete Solutions delivers high-reliability security solutions for environments where safety, compliance, and operational continuity are critical.",
      image: "cctv",
      intro: [
        "With over 30 years of experience, we have evolved from a conventional manpower provider into a compliance-driven security partner for hospitals, corporate offices, manufacturing facilities, banks, and residential communities.",
        "Our accountability, visibility, and response readiness are supported by QR/GPS patrol monitoring, digital incident reporting, VMS integration, and structured escalation logs. [PLACEHOLDER: Add technology platform/software details]",
      ],
      features: commonServiceFeatures,
      subServices: [
        { title: "Guarding services", description: "Trained personnel for corporate offices, hospitals, residential communities, industrial facilities, banks, and retail spaces." },
        { title: "Industrial security", description: "Perimeter, material movement, and asset protection for manufacturing, warehouse, and logistics environments." },
        { title: "Executive protection", description: "Discreet executive and VVIP security for controlled movement and enhanced protection." },
        { title: "Event security", description: "Crowd management and venue security for corporate events and high-footfall gatherings." },
        { title: "Security audit", description: "Risk assessments that identify access control gaps and operational vulnerabilities." },
        { title: "Fire and safety support", description: "Emergency preparedness, response coordination, and protocol support." },
        { title: "Investigation support", description: "Structured incident assistance with reporting and discretion." },
      ],
      bullets: [
        "High-reliability security operations",
        "Compliance-ready reporting",
        "Sector-specific deployment expertise",
        "Continuous supervision",
        "Technology-enabled accountability",
      ],
      closing: "Complete Solutions: high-reliability security services built for environments where failure is not an option.",
      assessmentLabel: "Request a security assessment",
    },
    housekeeping: {
      title: "Professional housekeeping services in Mumbai",
      eyebrow: "Housekeeping services",
      metaTitle: "Commercial Housekeeping Services Mumbai | Complete Solutions",
      description: "Complete Solutions delivers professional housekeeping services for environments where hygiene standards, safety, and compliance readiness must hold every day.",
      image: "housekeepingHero",
      intro: [
        "Our teams are trained to manage corporate, industrial, healthcare, commercial, and residential environments using structured inspection systems and SOP-driven hygiene management.",
      ],
      features: commonServiceFeatures,
      subServices: [
        "Corporate and commercial housekeeping",
        "Industrial housekeeping",
        "Healthcare housekeeping",
        "Deep cleaning services",
        "Facade and glass cleaning",
        "Pantry and washroom upkeep",
        "Waste handling coordination",
        "Floor care and machine cleaning",
        "Move-in and post-project cleaning",
      ].map((title) => ({ title, description: "Structured housekeeping delivery with supervised quality checks and documented routines." })),
      bullets: [
        "Professionally managed teams",
        "SOP-driven quality control",
        "Advanced cleaning methods",
        "Low-disruption scheduling",
        "Digitally monitored supervision",
      ],
      closing: "Complete Solutions: housekeeping systems for environments where standards must be maintained without exception.",
      assessmentLabel: "Request a housekeeping assessment",
    },
    maintenance: {
      title: "Facility maintenance services in Mumbai",
      eyebrow: "Maintenance services",
      metaTitle: "Facility Maintenance Services Mumbai | Complete Solutions",
      description: "Complete Solutions provides facility maintenance services designed to reduce downtime and keep critical infrastructure functional.",
      image: "maintenance",
      intro: [
        "Preventive maintenance, rapid response, and structured reporting help clients identify operational risks before they become disruption.",
      ],
      features: commonServiceFeatures,
      subServices: [
        "Mechanical and electrical maintenance",
        "Plumbing and carpentry",
        "Fire and safety systems",
        "Operation and maintenance",
        "HVAC maintenance",
        "Project management support",
      ].map((title) => ({ title, description: "Planned and responsive maintenance support with clear escalation and reporting." })),
      bullets: [
        "Fast-response support",
        "24/7 operational availability",
        "Preventive maintenance planning",
        "Managed technical teams",
        "Structured tracking",
      ],
      closing: "Complete Solutions: facility maintenance built to keep critical environments running without interruption.",
      assessmentLabel: "Request a maintenance system assessment",
    },
    "office-support": {
      title: "Office support services in Mumbai",
      eyebrow: "Office support services",
      metaTitle: "Office Support & Staffing Services Mumbai | Complete Solutions",
      description: "Complete Solutions delivers professionally managed office support services for organisations that require operational efficiency and workforce reliability.",
      image: "workforce",
      intro: [
        "Our support teams function as an extension of the client\u2019s operational framework, backed by supervision, reporting protocols, and role-specific readiness.",
      ],
      features: commonServiceFeatures,
      subServices: [
        "Reception and front office",
        "Transportation management",
        "Back office support",
        "Helpdesk services",
        "Mailroom and document management",
        "Payroll management support",
      ].map((title) => ({ title, description: "Professionally supervised workplace support for consistent daily operations." })),
      bullets: [
        "Workplace-ready personnel",
        "Scalable deployment",
        "Process-oriented administration",
        "Consistent supervision",
        "Corporate and healthcare experience",
      ],
      closing: "Complete Solutions: office support services for organisations where operational efficiency matters every day.",
      assessmentLabel: "Get an operational support assessment",
    },
    "pest-control": {
      title: "Pest control services in Mumbai",
      eyebrow: "Pest control and sanitization",
      metaTitle: "Pest Control Services Mumbai | Complete Solutions",
      description: "Complete Solutions provides pest control and sanitization services for environments where hygiene, infection prevention, and operational safety are essential.",
      image: "pestControl",
      intro: [
        "Our teams use protocol-led implementation, supervised deployment, and structured hygiene reporting for residential, commercial, healthcare, and industrial facilities.",
      ],
      features: commonServiceFeatures,
      subServices: [
        "Residential sanitization",
        "Corporate and office disinfection",
        "Industrial and commercial sanitization",
        "Infectious disease response sanitization",
        "Pest control services",
      ].map((title) => ({ title, description: "Controlled hygiene and pest prevention support for sensitive environments." })),
      bullets: [
        "Pandemic-response experience",
        "Approved disinfection practices",
        "Trained sanitization professionals",
        "Scalable services",
        "Responsive support",
      ],
      closing: "Complete Solutions: hygiene and pest control services built for environments where safety cannot be compromised.",
      assessmentLabel: "Request a sanitization assessment",
    },
    "property-management": {
      title: "Property management services Mumbai",
      eyebrow: "Property management",
      metaTitle: "Property Management Services Mumbai | Complete Solutions",
      description: "Complete Solutions delivers end-to-end property management services that protect, maintain, and enhance residential and commercial assets.",
      image: "property",
      intro: [
        "Inspection systems, tenant coordination, compliance documentation, and repair management help owners reduce operational friction and protect long-term value.",
      ],
      features: commonServiceFeatures,
      subServices: [
        "Property maintenance and repair",
        "Rent collection and lease management",
        "Regular property inspections",
        "Tenant screening and management",
        "Legal compliance documentation",
        "Vacant property care and security",
      ].map((title) => ({ title, description: "Coordinated property operations with documented checks and owner visibility." })),
      bullets: [
        "Managed property operations",
        "Reliable maintenance coordination",
        "Tenant and lease support",
        "Inspection discipline",
        "Documentation support",
      ],
      closing: "Complete Solutions: property management focused on stability, maintenance quality, and long-term asset preservation.",
      assessmentLabel: "Get a property operations assessment",
    },
  },
  industries: [
    { slug: "it-parks", title: "IT parks and corporate offices", text: "Workplace experience depends on invisible operational continuity.", image: "itPark" },
    { slug: "manufacturing", title: "Manufacturing and industrial", text: "Security and maintenance systems for facilities where downtime has a price tag.", image: "manufacturing" },
    { slug: "banking", title: "Banking and financial services", text: "High-trust environments where every security protocol is non-negotiable.", image: "banking" },
    { slug: "residential", title: "Residential and housing societies", text: "Community safety and consistency delivered every morning and every night.", image: "residential" },
  ],
};

const iconSet = {
  clipboardCheck: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"></path><path d="M9 14l2 2l4 -4"></path></svg>
  `,
  desktopAnalytics: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M9 12v-4"></path><path d="M12 12v-1"></path><path d="M15 12v-2"></path></svg>
  `,
  usersGroup: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path></svg>
  `,
  clock24: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0"></path><path d="M12 7v5"></path><path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"></path><path d="M18 15v2a1 1 0 0 0 1 1h1"></path><path d="M21 15v6"></path></svg>
  `,
  qrcode: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"></path><path d="M7 17l0 .01"></path><path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"></path><path d="M7 7l0 .01"></path><path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"></path><path d="M17 7l0 .01"></path><path d="M14 14l3 0"></path><path d="M20 14l0 .01"></path><path d="M14 14l0 3"></path><path d="M14 20l3 0"></path><path d="M17 17l3 0"></path><path d="M20 17l0 3"></path></svg>
  `,
  building: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path><path d="M13 7l0 .01"></path><path d="M17 7l0 .01"></path><path d="M17 11l0 .01"></path><path d="M17 15l0 .01"></path></svg>
  `,
  clipboard: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"></path><path d="M9 14l2 2l4 -4"></path></svg>
  `,
  users: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path></svg>
  `,
  dashboard: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path><path d="M9 12v-4"></path><path d="M12 12v-1"></path><path d="M15 12v-2"></path><path d="M12 12v-1"></path></svg>
  `,
};

function assetCard(assetKey) {
  const asset = siteData.assets[assetKey];
  return `
    <figure class="asset" style="aspect-ratio: ${asset.ratio};">
      <img src="${asset.src}" alt="${asset.title}">
    </figure>
  `;
}

function headerTemplate() {
  const services = [
    ["Security", "/services/security.html"],
    ["Housekeeping", "/services/housekeeping.html"],
    ["Maintenance", "/services/maintenance.html"],
    ["Office Support", "/services/office-support.html"],
    ["Pest Control", "/services/pest-control.html"],
    ["Property Management", "/services/property-management.html"],
  ];

  return `
    <header class="header">
      <div class="container header-inner">
        <a class="brand" href="/index.html">
          <span class="brand-mark">
            <img src="/assets/logo/Logo-2048x1468.png" alt="Complete Solutions logo">
          </span>
          <span class="brand-name">Complete Solutions</span>
        </a>
        <nav class="nav" aria-label="Primary">
          <div class="nav-services">
            <button class="nav-services__trigger" type="button" aria-expanded="false">
              <span>Services</span>
              <svg class="nav-chevron" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"></path></svg>
            </button>
            <div class="nav-dropdown">
              ${services.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
            </div>
          </div>
          <a href="/industries.html">Industries</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </nav>
        <div class="header-actions">
          <a class="btn btn-assessment header-assessment" href="/contact.html#assessment">Request an assessment</a>
          <a class="btn btn-quote header-contact" href="/contact.html#quote">Get in touch</a>
          <button class="mobile-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu-backdrop" data-mobile-menu-close></div>
      <aside class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" aria-hidden="true">
        <div class="mobile-menu__top">
          <a class="brand" href="/index.html">
            <span class="brand-mark"><img src="/assets/logo/Logo-2048x1468.png" alt="Complete Solutions logo"></span>
            <span class="brand-name">Complete Solutions</span>
          </a>
        </div>
        <nav class="mobile-menu__nav" aria-label="Mobile primary">
          <div class="mobile-menu__services">
            <button class="mobile-services__trigger" type="button" aria-expanded="false" aria-controls="mobile-services-submenu" data-mobile-services-toggle>
              <span>Services</span>
              <svg class="nav-chevron" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"></path></svg>
            </button>
            <div class="mobile-services__submenu" id="mobile-services-submenu" hidden>
              <a href="/services/security.html">Security Services</a>
              <a href="/services/housekeeping.html">Housekeeping Services</a>
              <a href="/services/maintenance.html">Maintenance Services</a>
              <a href="/services/office-support.html">Office Support Services</a>
              <a href="/services/pest-control.html">Sanitization &amp; Pest Control Services</a>
              <a href="/services/property-management.html">Property Management Services</a>
            </div>
          </div>
          <a href="/industries.html">Industries</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </nav>
        <a class="mobile-menu__whatsapp" href="${siteData.whatsappHref}">WhatsApp</a>
        <a class="btn btn-assessment mobile-menu__quote" href="/contact.html#quote">Get a quote</a>
      </aside>
    </header>
  `;
}

function footerTemplate() {
  return `
    <footer class="footer">
      <div class="container footer-main">
        <div>
          <a class="brand" href="/index.html">
            <span class="brand-mark">
              <img src="/assets/logo/Logo-2048x1468.png" alt="Complete Solutions logo">
            </span>
            <span class="brand-name">Complete Solutions</span>
          </a>
          <div class="footer-copy">
            <p>High-reliability facility management built on discipline, auditability, and systems thinking.</p>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <div class="footer-links">
            <a href="/services/security.html">Security</a>
            <a href="/services/housekeeping.html">Housekeeping</a>
            <a href="/services/maintenance.html">Maintenance</a>
            <a href="/services/office-support.html">Office Support</a>
            <a href="/services/pest-control.html">Pest Control</a>
            <a href="/services/property-management.html">Property Management</a>
          </div>
        </div>
        <div>
          <h3>Quick links</h3>
          <div class="footer-links">
            <a href="/about.html">About</a>
            <a href="/industries.html">Industries</a>
            <a href="/contact.html">Contact</a>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-links">
            <a href="${siteData.phoneHref}">Phone: ${siteData.phone}</a>
            <a href="${siteData.whatsappHref}">WhatsApp: ${siteData.whatsapp}</a>
            <a href="${siteData.emailHref}">Email: ${siteData.email}</a>
            <span>Office: ${siteData.address}</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <span>Copyright ${new Date().getFullYear()} Complete Solutions. All rights reserved.</span>
          <div class="footer-certifications" aria-label="Licenses and certifications">
            <a class="footer-certification-pill" href="/licenses.html">PSARA ${siteData.psara}</a>
            <a class="footer-certification-pill" href="/licenses.html">ISO 9001 ${siteData.iso}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function setActiveNav() {
  const path = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const normalized = href.replace(/\/index\.html$/, "/");
    if (path === normalized || (normalized !== "/" && path.startsWith(normalized.replace(".html", "")))) {
      link.classList.add("is-active");
    }
  });
}

function applyLightSurfaceAlternation() {
  document.querySelectorAll(".site-shell").forEach((shell) => {
    let lightIndex = 0;

    Array.from(shell.children).forEach((block) => {
      if (!block.matches("section, main")) return;

      block.removeAttribute("data-light-surface");

      if (block.matches(".hero, .section-dark")) return;

      lightIndex += 1;
      block.dataset.lightSurface = lightIndex % 2 === 1 ? "white" : "beige";
    });
  });
}

function mountLayout() {
  const desktopNavMinWidth = 900;

  document.querySelectorAll("[data-site-header]").forEach((node) => {
    node.innerHTML = headerTemplate();
  });
  document.querySelectorAll("[data-site-footer]").forEach((node) => {
    node.innerHTML = footerTemplate();
  });
  setActiveNav();
  applyLightSurfaceAlternation();
  const toggle = document.querySelector(".mobile-toggle");
  const header = document.querySelector(".header");
  const menu = document.querySelector(".mobile-menu");
  const closeTargets = document.querySelectorAll("[data-mobile-menu-close], .mobile-menu a");
  const desktopServices = document.querySelector(".nav-services");
  const desktopServicesTrigger = document.querySelector(".nav-services__trigger");
  const mobileServices = document.querySelector(".mobile-menu__services");
  const mobileServicesToggle = document.querySelector("[data-mobile-services-toggle]");
  const mobileServicesSubmenu = document.querySelector(".mobile-services__submenu");
  let previousFocus = null;

  const setDesktopServicesOpen = (open) => {
    if (!desktopServices || !desktopServicesTrigger) return;
    desktopServices.classList.toggle("is-open", open);
    desktopServicesTrigger.setAttribute("aria-expanded", String(open));
  };

  const setMobileServicesOpen = (open) => {
    if (!mobileServices || !mobileServicesToggle || !mobileServicesSubmenu) return;
    mobileServices.classList.toggle("is-open", open);
    mobileServicesToggle.setAttribute("aria-expanded", String(open));
    mobileServicesSubmenu.hidden = !open;
  };

  desktopServicesTrigger?.addEventListener("click", () => {
    if (window.innerWidth < desktopNavMinWidth) return;
    setDesktopServicesOpen(!desktopServices.classList.contains("is-open"));
  });

  mobileServicesToggle?.addEventListener("click", (event) => {
    if (window.innerWidth >= desktopNavMinWidth) return;
    event.preventDefault();
    setMobileServicesOpen(!mobileServices.classList.contains("is-open"));
  });

  document.addEventListener("click", (event) => {
    if (desktopServices && !desktopServices.contains(event.target)) setDesktopServicesOpen(false);
  });

  if (toggle && header && menu) {
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const updateHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    const setMenuOpen = (open) => {
      header.classList.toggle("mobile-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menu.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("menu-open", open);
      if (!open) setMobileServicesOpen(false);

      if (open) {
        previousFocus = document.activeElement;
        const firstFocusable = menu.querySelector(focusableSelector);
        if (firstFocusable) requestAnimationFrame(() => firstFocusable.focus());
      } else if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };

    toggle.addEventListener("click", () => setMenuOpen(!header.classList.contains("mobile-open")));
    closeTargets.forEach((target) => target.addEventListener("click", () => setMenuOpen(false)));
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && desktopServices?.classList.contains("is-open")) {
        setDesktopServicesOpen(false);
        desktopServicesTrigger.focus();
      }
      if (!header.classList.contains("mobile-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [toggle, ...menu.querySelectorAll(focusableSelector)].filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= desktopNavMinWidth) {
        if (header.classList.contains("mobile-open")) setMenuOpen(false);
        setMobileServicesOpen(false);
      } else {
        setDesktopServicesOpen(false);
      }
    });
  }
}

function renderStats(target) {
  target.innerHTML = siteData.stats.map((stat) => `
    <div class="stat-card">
      <div class="value">${stat.value}</div>
      <div class="label">${stat.label}</div>
    </div>
  `).join("");
}

function renderTechCards() {
  document.querySelectorAll("[data-tech-grid]").forEach((target) => {
    target.innerHTML = siteData.tech.map((item) => `
      <article class="section-tech__card">
        <div class="section-tech__icon">${iconSet[item.icon] || ""}</div>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      </article>
    `).join("");
  });
}

function renderServicePage() {
  const slug = document.body.dataset.service;
  const service = siteData.services[slug];
  if (!service) return;

  const hero = document.querySelector("[data-service-hero]");
  const intro = document.querySelector("[data-service-intro]");
  const features = document.querySelector("[data-service-features]");
  const subs = document.querySelector("[data-service-subservices]");
  const bullets = document.querySelector("[data-service-bullets]");
  const closing = document.querySelector("[data-service-closing]");
  const assessment = document.querySelectorAll("[data-assessment-label]");
  const asset = document.querySelector("[data-service-asset]");

  if (hero) {
    hero.innerHTML = `
      <div class="hero-media"><img src="${siteData.assets[service.image].src}" alt="${service.title}"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">${service.eyebrow}</div>
          <h1 class="hero-title">${service.title}</h1>
          <p class="hero-text">${service.description}</p>
          <div class="btn-row">
            <a class="btn btn-assessment" href="/contact.html#assessment">${service.assessmentLabel}</a>
            <a class="btn btn-quote" href="/contact.html#quote">Request a site-specific quote</a>
          </div>
        </div>
      </div>
    `;
  }

  if (intro) intro.innerHTML = [service.description, ...service.intro].map((item) => `<p>${item}</p>`).join("");
  if (features) features.innerHTML = service.features.map((item) => `
    <article class="service-feature-card">
      <div class="service-feature-card__icon">${iconSet[item.icon] || ""}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
  if (subs) subs.innerHTML = service.subServices.map((item) => `
    <article class="service-subservice-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
  if (bullets) bullets.innerHTML = service.bullets.map((item) => `<li>${item}</li>`).join("");
  if (closing) closing.textContent = service.closing;
  assessment.forEach((node) => { node.textContent = service.assessmentLabel; });
  if (asset) asset.innerHTML = assetCard(service.image);
}

function renderContactDetails() {
  document.querySelectorAll("[data-phone]").forEach((node) => { node.textContent = siteData.phone; });
  document.querySelectorAll("[data-whatsapp]").forEach((node) => { node.textContent = siteData.whatsapp; });
  document.querySelectorAll("[data-email]").forEach((node) => { node.textContent = siteData.email; });
  document.querySelectorAll("[data-address]").forEach((node) => { node.textContent = siteData.address; });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[data-error-for]").forEach((node) => { node.textContent = ""; });
  const required = form.querySelectorAll("[required]");
  required.forEach((field) => {
    if (!field.value.trim()) {
      const error = form.querySelector(`[data-error-for="${field.name}"]`);
      if (error) error.textContent = "This field is required.";
      valid = false;
    }
  });
  const phone = form.querySelector('input[name="phone"]');
  const phoneDigits = phone ? phone.value.replace(/\D/g, "") : "";
  const localPhone = phoneDigits.length === 12 && phoneDigits.startsWith("91") ? phoneDigits.slice(2) : phoneDigits;
  if (phone && phone.value && !/^[6-9]\d{9}$/.test(localPhone)) {
    const error = form.querySelector('[data-error-for="phone"]');
    if (error) error.textContent = "Enter a valid 10-digit Indian mobile number.";
    valid = false;
  }
  const email = form.querySelector('input[name="email"]');
  if (email && email.value && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value.trim())) {
    const error = form.querySelector('[data-error-for="email"]');
    if (error) error.textContent = "Enter a valid email address.";
    valid = false;
  }
  return valid;
}

function initCustomSelects() {
  const selects = document.querySelectorAll("[data-custom-select]");
  if (!selects.length) return;

  const closeSelect = (select, restoreFocus = false) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const menu = select.querySelector(".custom-select__menu");
    if (!trigger || !menu) return;
    select.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    if (restoreFocus) trigger.focus();
  };

  const openSelect = (select) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const menu = select.querySelector(".custom-select__menu");
    const selected = select.querySelector('.custom-select__option[aria-selected="true"]');
    if (!trigger || !menu) return;
    document.querySelectorAll("[data-custom-select].is-open").forEach((node) => {
      if (node !== select) closeSelect(node);
    });
    select.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    requestAnimationFrame(() => (selected || menu.querySelector(".custom-select__option"))?.focus());
  };

  const syncSelectValue = (select, value = "") => {
    const input = select.querySelector('input[name="service"]');
    const text = select.querySelector(".custom-select__text");
    const options = Array.from(select.querySelectorAll(".custom-select__option"));
    if (!input || !text) return;

    input.value = value;
    select.classList.toggle("has-value", Boolean(value));
    text.textContent = value || "Select services";

    options.forEach((option) => {
      const selected = option.dataset.value === value;
      option.setAttribute("aria-selected", String(selected));
      option.classList.toggle("is-active", selected);
    });
  };

  selects.forEach((select) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const menu = select.querySelector(".custom-select__menu");
    const input = select.querySelector('input[name="service"]');
    const options = Array.from(select.querySelectorAll(".custom-select__option"));
    const form = select.closest("form");

    if (!trigger || !menu || !input || !options.length) return;

    syncSelectValue(select, input.value);

    trigger.addEventListener("click", () => {
      if (select.classList.contains("is-open")) {
        closeSelect(select);
      } else {
        openSelect(select);
      }
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSelect(select);
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeSelect(select);
      }
    });

    menu.addEventListener("keydown", (event) => {
      const currentIndex = options.indexOf(document.activeElement);
      if (event.key === "Escape") {
        event.preventDefault();
        closeSelect(select, true);
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        options[(currentIndex + 1 + options.length) % options.length].focus();
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        options[(currentIndex - 1 + options.length) % options.length].focus();
      }
      if (event.key === "Tab") {
        closeSelect(select);
      }
    });

    options.forEach((option) => {
      option.setAttribute("aria-selected", "false");
      option.addEventListener("click", () => {
        syncSelectValue(select, option.dataset.value || "");
        closeSelect(select);
      });
    });

    form?.addEventListener("reset", () => {
      requestAnimationFrame(() => syncSelectValue(select, ""));
    });
  });

  document.addEventListener("click", (event) => {
    selects.forEach((select) => {
      if (!select.contains(event.target)) closeSelect(select);
    });
  });
}

function attachForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const feedback = form.querySelector("[data-form-feedback]");
      if (!validateForm(form)) {
        if (feedback) {
          feedback.classList.remove("success-text");
          feedback.classList.add("error-text");
          feedback.textContent = "Please correct the highlighted fields.";
        }
        return;
      }
      if (feedback) {
        feedback.classList.remove("error-text");
        feedback.classList.add("success-text");
        feedback.textContent = "Thank you. Your request has been recorded. Our team will contact you shortly.";
      }
      form.reset();
    });
  });
}

function initIndustryShowcase() {
  const cards = document.querySelectorAll("[data-industry-card]");
  if (!cards.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  mountLayout();
  document.querySelectorAll("[data-stats]").forEach(renderStats);
  renderTechCards();
  renderServicePage();
  renderContactDetails();
  initCustomSelects();
  attachForms();
  initIndustryShowcase();
});
