/* ============================================================
   Bike Pulse — shared Header & Footer (single source of truth)
   Mirrors Elementor global header/footer templates.
   ============================================================ */

/* ---- Inline icon library (Lucide-style, 24x24, stroke) ---- */
const IC = {
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  // brand / topic icons
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  gavel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 12.5-8 8a2.12 2.12 0 0 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/></svg>',
  // contact / misc
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7z"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
  // socials
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17.34v-6.9H6.06v6.9h2.28zM7.2 9.42a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm10.14 7.92v-3.78c0-2.04-1.09-2.99-2.54-2.99-1.17 0-1.7.64-1.99 1.1v-.94h-2.27c.03.64 0 6.9 0 6.9h2.27v-3.85c0-.2.01-.41.07-.55.17-.41.54-.83 1.18-.83.83 0 1.16.63 1.16 1.56v3.67h2.29z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.12C19.05 4.9 12 4.9 12 4.9s-7.05 0-8.9.48A3 3 0 0 0 1 7.5 31 31 0 0 0 .52 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.12c1.85.48 8.9.48 8.9.48s7.05 0 8.9-.48A3 3 0 0 0 23 16.5 31 31 0 0 0 23.48 12 31 31 0 0 0 23 7.5zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>',
};
window.IC = IC;

/* ---- Navigation model ---- */
const NAV = [
  { label: "Sobre nós", key: "sobre", href: "sobre.html", children: [
    { t: "A ABP", d: "Quem somos e a nossa história", href: "sobre.html#a-abp", ic: IC.info },
    { t: "Parcerias", d: "Marcas e instituições parceiras", href: "parcerias.html", ic: IC.handshake },
    { t: "Relatórios", d: "Dados e estudos do setor", href: "relatorios.html", ic: IC.doc },
    { t: "Bolsa de Emprego", d: "Oportunidades no setor", href: "bolsa-emprego.html", ic: IC.briefcase },
  ]},
  { label: "Associados", key: "associados", href: "associados.html", children: [
    { t: "Benefícios", d: "Vantagens exclusivas", href: "associados.html#beneficios", ic: IC.gift },
    { t: "Categorias", d: "Tipos de associado", href: "associados.html#categorias", ic: IC.layers },
    { t: "Formulário de Adesão", d: "Junte-se à ABP", href: "associados.html#adesao", ic: IC.edit },
  ]},
  { label: "Formação", key: "formacao", href: "formacao.html", children: [
    { t: "Cursos", d: "Capacitação técnica", href: "formacao.html#cursos", ic: IC.cap },
    { t: "Certificações", d: "Reconhecimento oficial", href: "formacao.html#certificacoes", ic: IC.award },
  ]},
  { label: "Notícias", key: "noticias", href: "noticias.html", children: [
    { t: "Legislação", d: "O que muda no setor", href: "noticias.html#legislacao", ic: IC.gavel },
    { t: "Mercado", d: "Tendências e dados", href: "noticias.html#mercado", ic: IC.trend },
    { t: "Mobilidade Urbana", d: "Cidades em movimento", href: "noticias.html#mobilidade", ic: IC.leaf },
  ]},
  { label: "Eventos", key: "eventos", href: "eventos.html" },
  { label: "Contactos", key: "contactos", href: "contactos.html" },
];

/* ---- Render header ---- */
function buildHeader() {
  const active = document.body.dataset.page || "";
  const items = NAV.map(item => {
    const isActive = item.key === active ? " active" : "";
    if (item.children) {
      const dd = item.children.map(c => `
        <a class="dropdown-link" href="${c.href}">
          <span class="dropdown-ico">${c.ic}</span>
          <span class="dropdown-txt"><b>${c.t}</b><span>${c.d}</span></span>
        </a>`).join("");
      return `<li class="nav-item has-dd${isActive}">
        <a class="nav-link" href="${item.href}">${item.label} ${IC.chevron}</a>
        <div class="nav-dropdown">${dd}</div>
      </li>`;
    }
    return `<li class="nav-item${isActive}"><a class="nav-link" href="${item.href}">${item.label}</a></li>`;
  }).join("");

  return `
  <header class="site-header" id="siteHeader">
    <nav class="nav" aria-label="Navegação principal">
      <a class="nav-logo" href="index.html" aria-label="Bike Pulse — página inicial">
        <img src="assets/logo-color.png" alt="Associação Bike Pulse">
      </a>
      <ul class="nav-menu" id="navMenu">${items}
        <li class="nav-cta-mobile"><a class="btn btn-primary btn-block" href="associados.html#adesao">Aderir à ABP</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn btn-primary btn-sm" href="associados.html#adesao">Aderir à ABP</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false"><span></span></button>
    </nav>
  </header>
  <div class="header-shim" aria-hidden="true"></div>`;
}

/* ---- Render footer ---- */
function buildFooter() {
  const col = (title, links) => `
    <div class="footer-col">
      <h5>${title}</h5>
      <ul>${links.map(l => `<li><a href="${l[1]}">${l[0]}</a></li>`).join("")}</ul>
    </div>`;

  return `
  <footer class="site-footer">
    <div class="container container-wide">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="assets/logo-white.png" alt="Associação Bike Pulse" onerror="this.src='assets/logo-color.png'">
          <p>Associação Portuguesa de Comércio de Bicicletas e Serviços. Unimos empresas e entusiastas para fazer pulsar a mobilidade ciclável em Portugal.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">${IC.linkedin}</a>
            <a href="#" aria-label="Instagram">${IC.instagram}</a>
            <a href="#" aria-label="Facebook">${IC.facebook}</a>
            <a href="#" aria-label="YouTube">${IC.youtube}</a>
          </div>
        </div>
        ${col("Associação", [["Sobre nós","sobre.html"],["Objetivos","sobre.html#objetivos"],["Visão Estratégica","sobre.html#visao"],["Parcerias","parcerias.html"],["Contactos","contactos.html"]])}
        ${col("Para Associados", [["Benefícios","associados.html#beneficios"],["Categorias","associados.html#categorias"],["Formulário de Adesão","associados.html#adesao"],["Formação","formacao.html"],["Bolsa de Emprego","bolsa-emprego.html"]])}
        ${col("Recursos", [["Notícias","noticias.html"],["Eventos ABP","eventos.html"],["Relatórios","relatorios.html"],["Legislação","noticias.html#legislacao"],["Mercado","noticias.html#mercado"]])}
      </div>
      <div class="footer-bottom">
        <span>© 2026 Associação Bike Pulse. Todos os direitos reservados.</span>
        <div class="fb-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos & Condições</a>
          <a href="#">Estatutos</a>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---- Inject ---- */
document.getElementById("header-root")?.insertAdjacentHTML("beforeend", buildHeader());
document.getElementById("footer-root")?.insertAdjacentHTML("beforeend", buildFooter());
