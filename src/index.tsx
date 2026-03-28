import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Fresh Cycle | Agencia de Marketing Digital — Asunción, Paraguay</title>
  <meta name="description" content="Agencia de marketing digital en Asunción, Paraguay. Diseños profesionales, tráfico pago y sistemas digitales. Cada cliente, una estrategia única.">
  <!-- Preload critico para performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Preload das imagens críticas do hero (LCP) -->
  <link rel="preload" as="image" href="https://www.genspark.ai/api/files/s/ixv4e1gv">
  <link rel="preload" as="image" href="https://www.genspark.ai/api/files/s/aMr4O4kS">
  <!-- Subset reduzido: apenas pesos usados, display=swap para evitar FOIT -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
  <!-- FontAwesome Kit slim — apenas ícones usados -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"></noscript>
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="stylesheet" href="/static/styles.css">
</head>
<body>

  <!-- ═══════════════════ NAVBAR ═══════════════════ -->
  <nav class="navbar" id="navbar">
    <div class="container nav-inner">
      <a href="#inicio" class="nav-logo">
        <svg class="logo-svg" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8L8 0H28L20 8H0Z" fill="currentColor"/>
          <path d="M0 8V28L8 20V8H0Z" fill="currentColor" opacity="0.7"/>
          <path d="M8 20L16 12H36L28 20H8Z" fill="currentColor"/>
          <path d="M24 8L32 0H52L44 8H24Z" fill="currentColor" opacity="0.85"/>
          <path d="M44 8V28L52 20V0L44 8Z" fill="currentColor" opacity="0.6"/>
          <path d="M28 20V44L36 36V12L28 20Z" fill="currentColor" opacity="0.7"/>
          <path d="M8 28L16 20V36L8 44V28Z" fill="currentColor" opacity="0.5"/>
          <path d="M16 36H36L28 44H8L16 36Z" fill="currentColor"/>
        </svg>
        <span>THE FRESH CYCLE</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#contacto" class="nav-cta">Consulta Gratis</a></li>
      </ul>
    </div>
  </nav>

  <!-- ═══════════════════ HERO ═══════════════════ -->
  <section class="hero" id="inicio">
    <div class="hero-accent-line"></div>
    <!-- Partículas decorativas sutis (círculos/pontos) -->
    <div class="hero-particles" aria-hidden="true">
      <div class="particle p1"></div>
      <div class="particle p2"></div>
      <div class="particle p3"></div>
      <div class="particle p4"></div>
    </div>

    <div class="container hero-layout">
      <!-- ─── Coluna texto ─── -->
      <div class="hero-text">
        <div class="hero-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Agencia de Marketing Digital · Asunción, PY</span>
        </div>
        <h1 class="hero-title">
          Diseño, tráfico<br>
          <em>y tecnología</em><br>
          que convierten.
        </h1>
        <div class="hero-divider"></div>
        <p class="hero-sub">
          Transformamos seguidores en clientes reales.<br>
          Cada estrategia construida desde cero — solo para tu negocio.
        </p>
        <div class="hero-actions">
          <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" target="_blank" class="btn btn-gold">
            <i class="fab fa-whatsapp"></i> Consulta Gratis
          </a>
          <a href="#portafolio" class="btn btn-ghost">
            Ver trabajos <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="hero-trust-row">
          <span class="hero-trust-label">Sin compromiso · Respondemos en 24h</span>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="80">0</span>
              <span class="stat-symbol">+</span>
            </div>
            <span class="stat-label">Clientes activos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="150">0</span>
              <span class="stat-symbol">+</span>
            </div>
            <span class="stat-label">Proyectos entregados</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="3">0</span>
              <span class="stat-symbol">×</span>
            </div>
            <span class="stat-label">ROI promedio</span>
          </div>
        </div>
      </div>

      <!-- ─── Coluna visual: showcase de trabalhos reais ─── -->
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-showcase">
          <!-- Card principal — branding TFC -->
          <div class="showcase-card showcase-main">
            <img src="https://www.genspark.ai/api/files/s/ixv4e1gv" alt="The Fresh Cycle Branding" loading="eager">
            <div class="showcase-label">
              <span class="sc-cat">Branding Premium</span>
              <span class="sc-name">The Fresh Cycle</span>
            </div>
          </div>
          <!-- Card secundário superior -->
          <div class="showcase-card showcase-top">
            <img src="https://www.genspark.ai/api/files/s/aMr4O4kS" alt="Vitrine Motors" loading="lazy">
            <div class="showcase-label">
              <span class="sc-cat">Diseño Automotriz</span>
              <span class="sc-name">Vitrine Motors</span>
            </div>
          </div>
          <!-- Card secundário inferior -->
          <div class="showcase-card showcase-bottom">
            <img src="https://www.genspark.ai/api/files/s/dINlCKAH" alt="TAG Publicidad" loading="lazy">
            <div class="showcase-label">
              <span class="sc-cat">Campaña B2B</span>
              <span class="sc-name">TAG Publicidad</span>
            </div>
          </div>
          <!-- Badge flutuante de resultado -->
          <div class="showcase-badge">
            <i class="fas fa-chart-line"></i>
            <div>
              <strong>+240%</strong>
              <span>alcance orgánico</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-scroll">
      <a href="#servicios">
        <div class="scroll-line"></div>
        <span>scroll</span>
      </a>
    </div>
  </section>

  <!-- ═══════════════════ TRUST BAR ═══════════════════ -->
  <div class="trust-bar">
    <div class="container">
      <div class="trust-inner">
        <span class="trust-label">Trabajamos con</span>
        <div class="trust-logos">
          <div class="trust-item"><i class="fab fa-meta"></i> Meta Ads</div>
          <div class="trust-item"><i class="fab fa-google"></i> Google Ads</div>
          <div class="trust-item"><i class="fab fa-tiktok"></i> TikTok Ads</div>
          <div class="trust-item"><i class="fab fa-instagram"></i> Instagram</div>
          <div class="trust-item"><i class="fab fa-wordpress"></i> WordPress</div>
          <div class="trust-item"><i class="fas fa-store"></i> E-commerce</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ SERVICIOS ═══════════════════ -->
  <section class="section" id="servicios">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm eyebrow-text-sm--dark">Lo que hacemos</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title">Nuestros <em>servicios</em></h2>
        <p class="section-sub">Un ecosistema digital completo para que tu marca crezca de forma sostenida</p>
      </div>

      <!-- Grid assimétrico: serviço mais vendido ocupa espaço maior -->
      <div class="services-grid-v2">

        <!-- Serviço DESTAQUE — Diseño (mais vendido) -->
        <div class="svc-card svc-card--hero service-card">
          <div class="svc-badge">Más solicitado</div>
          <div class="svc-num">01</div>
          <div class="svc-icon"><i class="fas fa-palette"></i></div>
          <h3 class="svc-title">Diseños<br><em>Profesionales</em></h3>
          <p class="svc-desc">Posts, Stories, Reels, Flyers y toda la identidad visual de tu marca. Diseños que comunican, convierten y se destacan.</p>
          <ul class="svc-list">
            <li><i class="fas fa-check-circle"></i> Posts + Stories para redes sociales</li>
            <li><i class="fas fa-check-circle"></i> Identidad de marca completa</li>
            <li><i class="fas fa-check-circle"></i> Material impreso y digital</li>
            <li><i class="fas fa-check-circle"></i> Reels y videos animados</li>
            <li><i class="fas fa-check-circle"></i> Plantillas editables entregadas</li>
          </ul>
          <a href="#precios" class="svc-link svc-link--gold">
            Ver paquetes y precios <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <!-- Coluna direita com 2 cards menores -->
        <div class="svc-col">

          <div class="svc-card svc-card--secondary service-card">
            <div class="svc-num">02</div>
            <div class="svc-icon-sm"><i class="fas fa-chart-line"></i></div>
            <h3 class="svc-title-sm">Tráfico Pago <em>& Leads</em></h3>
            <p class="svc-desc-sm">Campañas en Meta Ads y Google Ads con estrategia y optimización continua. Inversión que retorna.</p>
            <ul class="svc-list-sm">
              <li><i class="fas fa-check"></i> Meta Ads · Google Ads · TikTok Ads</li>
              <li><i class="fas fa-check"></i> Generación de leads calificados</li>
              <li><i class="fas fa-check"></i> Reportes mensuales de ROI</li>
              <li><i class="fas fa-check"></i> Inversión según tu presupuesto</li>
            </ul>
            <a href="#contacto" class="svc-link">Consultar inversión <i class="fas fa-arrow-right"></i></a>
          </div>

          <div class="svc-card svc-card--secondary service-card">
            <div class="svc-num">03</div>
            <div class="svc-icon-sm"><i class="fas fa-laptop-code"></i></div>
            <h3 class="svc-title-sm">Sistemas <em>Digitales</em></h3>
            <p class="svc-desc-sm">Sitios web, landing pages, e-commerce y CRMs hechos para convertir visitantes en clientes.</p>
            <ul class="svc-list-sm">
              <li><i class="fas fa-check"></i> Sitios web profesionales</li>
              <li><i class="fas fa-check"></i> Landing pages de alta conversión</li>
              <li><i class="fas fa-check"></i> E-commerce completo</li>
              <li><i class="fas fa-check"></i> CRM y automatización</li>
            </ul>
            <a href="#contacto" class="svc-link">Solicitar cotización <i class="fas fa-arrow-right"></i></a>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ PROCESO ═══════════════════ -->
  <section class="section section--dark" id="proceso">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm">Proceso</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title section-title--light">¿Cómo <em>trabajamos?</em></h2>
        <p class="section-sub section-sub--light">Simple, rápido y con resultados medibles desde el primer mes</p>
      </div>
      <div class="process-track">
        <!-- Linha conectora horizontal (desktop) -->
        <div class="process-connector" aria-hidden="true"></div>

        <div class="process-step">
          <div class="process-step-inner">
            <div class="process-num-wrap">
              <div class="process-num">01</div>
            </div>
            <div class="process-icon"><i class="fas fa-comments"></i></div>
            <h4>Consulta<br>Gratuita</h4>
            <p>Reunión sin costo para entender tu negocio, objetivos y presupuesto. Sin compromiso.</p>
            <span class="process-time"><i class="fas fa-clock"></i> Día 1</span>
          </div>
        </div>

        <div class="process-step">
          <div class="process-step-inner">
            <div class="process-num-wrap">
              <div class="process-num">02</div>
            </div>
            <div class="process-icon"><i class="fas fa-lightbulb"></i></div>
            <h4>Estrategia<br>Personalizada</h4>
            <p>Diseñamos un plan a medida según tu industria, audiencia y metas de negocio.</p>
            <span class="process-time"><i class="fas fa-clock"></i> Días 2–3</span>
          </div>
        </div>

        <div class="process-step">
          <div class="process-step-inner">
            <div class="process-num-wrap">
              <div class="process-num">03</div>
            </div>
            <div class="process-icon"><i class="fas fa-rocket"></i></div>
            <h4>Ejecución<br>& Lanzamiento</h4>
            <p>Creamos diseños, campañas y sistemas con velocidad y calidad premium.</p>
            <span class="process-time"><i class="fas fa-clock"></i> Semana 1</span>
          </div>
        </div>

        <div class="process-step">
          <div class="process-step-inner">
            <div class="process-num-wrap">
              <div class="process-num">04</div>
            </div>
            <div class="process-icon"><i class="fas fa-chart-bar"></i></div>
            <h4>Resultados<br>& Escalamiento</h4>
            <p>Medimos, optimizamos y escalamos. ROI visible en tiempo real con reportes claros.</p>
            <span class="process-time"><i class="fas fa-clock"></i> Mes 1+</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ PORTAFOLIO ═══════════════════ -->
  <section class="section portfolio-section" id="portafolio">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm eyebrow-text-sm--dark">Nuestro trabajo</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title">Portafolio <em>reciente</em></h2>
        <p class="section-sub">Proyectos reales · Clientes reales · Resultados medibles</p>
      </div>

      <!-- Filtros premium -->
      <div class="portfolio-filter">
        <button class="filter-btn active" data-filter="all">
          <span>Todos</span>
          <span class="filter-count">9</span>
        </button>
        <button class="filter-btn" data-filter="diseno">
          <i class="fas fa-palette"></i>
          <span>Diseño Social</span>
        </button>
        <button class="filter-btn" data-filter="ads">
          <i class="fas fa-bullhorn"></i>
          <span>Campañas Ads</span>
        </button>
        <button class="filter-btn" data-filter="web">
          <i class="fas fa-envelope-open-text"></i>
          <span>Email & Web</span>
        </button>
        <button class="filter-btn" data-filter="marca">
          <i class="fas fa-gem"></i>
          <span>Branding</span>
        </button>
      </div>

      <!-- Grid portfólio rico -->
      <div class="portfolio-grid" id="portfolioGrid">

        <!-- 1 · LBH Verano Sale — Destaque (grande) -->
        <div class="portfolio-item pf-large" data-category="diseno"
             data-title="LBH Home & Hotel"
             data-desc="Campaña Verano Sale — Toallas 30% OFF. Diseño minimalista con tipografía bold y paleta coral/teal."
             data-img="https://www.genspark.ai/api/files/s/ccNUg98O">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/ccNUg98O" alt="LBH Home & Hotel - Verano Sale" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--diseno">Diseño Social</span>
                <span class="pf-client">LBH Home &amp; Hotel</span>
              </div>
              <h3 class="pf-title">Campaña "Verano Sale"</h3>
              <p class="pf-desc">Post de alto impacto — Toallas 30% OFF con 3 cuotas sin interés</p>
              <div class="pf-result">
                <i class="fas fa-chart-line"></i>
                <span>+180% engagement en redes</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 · LBH 3 Cuotas -->
        <div class="portfolio-item pf-small" data-category="diseno"
             data-title="LBH — 3 Cuotas Sin Interés"
             data-desc="Post tipográfico de alto impacto con layout limpio y jerarquía visual clara."
             data-img="https://www.genspark.ai/api/files/s/xGOqNK9w">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/xGOqNK9w" alt="LBH 3 Cuotas Sin Interés" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--diseno">Diseño Social</span>
                <span class="pf-client">LBH Home &amp; Hotel</span>
              </div>
              <h3 class="pf-title">3 Cuotas Sin Interés</h3>
              <p class="pf-desc">Post tipográfico de alto impacto</p>
            </div>
          </div>
        </div>

        <!-- 3 · TAG Pantallas LED — Destaque -->
        <div class="portfolio-item pf-large" data-category="ads"
             data-title="TAG Publicidad — VP Pantallas LED"
             data-desc="Campaña tech con estética bold: degradado rojo profundo, acento cyan, ilustración 3D de pantalla LED."
             data-img="https://www.genspark.ai/api/files/s/dINlCKAH">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/dINlCKAH" alt="TAG Publicidad - VP Pantallas LED" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--ads">Campaña Ads</span>
                <span class="pf-client">TAG Publicidad</span>
              </div>
              <h3 class="pf-title">VP Pantallas Full HD</h3>
              <p class="pf-desc">Campaña digital para venta de pantallas LED corporativas</p>
              <div class="pf-result">
                <i class="fas fa-users"></i>
                <span>+320% alcance B2B</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 · TAG Uniformes -->
        <div class="portfolio-item pf-small" data-category="diseno"
             data-title="TAG — Uniformes Corporativos"
             data-desc="Post premium oscuro para uniformes con bordado. Flat-lay editorial, paleta vino y blanco."
             data-img="https://www.genspark.ai/api/files/s/K0DN7yr0">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/K0DN7yr0" alt="TAG Uniformes Corporativos" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--diseno">Diseño B2B</span>
                <span class="pf-client">TAG Publicidad</span>
              </div>
              <h3 class="pf-title">Uniformes — Bordado Premium</h3>
              <p class="pf-desc">Editorial corporativo de lujo</p>
            </div>
          </div>
        </div>

        <!-- 5 · Vitrine Motors — Destaque -->
        <div class="portfolio-item pf-large" data-category="ads"
             data-title="Vitrine Motors — Nuevos Esta Semana"
             data-desc="Campaña automotriz de alto impacto. Fondo oscuro con iluminación naranja, siluetas de vehículos."
             data-img="https://www.genspark.ai/api/files/s/aMr4O4kS">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/aMr4O4kS" alt="Vitrine Motors - Nuevos Esta Semana" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--ads">Campaña Automotriz</span>
                <span class="pf-client">Vitrine Motors</span>
              </div>
              <h3 class="pf-title">+50 Vehículos Nuevos</h3>
              <p class="pf-desc">Campaña de alto impacto visual para lanzamiento de inventario semanal</p>
              <div class="pf-result">
                <i class="fas fa-eye"></i>
                <span>+12k visualizaciones orgánicas</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 6 · VitalPet Email -->
        <div class="portfolio-item pf-small" data-category="web"
             data-title="VitalPet — Email Marketing"
             data-desc="Template de email marketing responsive con diseño limpio, botón CTA naranja y layout de 3 columnas."
             data-img="https://www.genspark.ai/api/files/s/FheVzaAL">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/FheVzaAL" alt="VitalPet Email Marketing" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--web">Email Marketing</span>
                <span class="pf-client">VitalPet</span>
              </div>
              <h3 class="pf-title">Template Email Responsive</h3>
              <p class="pf-desc">Compatible Gmail y Outlook</p>
            </div>
          </div>
        </div>

        <!-- 7 · TAG Regalos Empresariales -->
        <div class="portfolio-item pf-small" data-category="marca"
             data-title="TAG — Regalos Empresariales Premium"
             data-desc="Flat-lay de lujo sobre fondo burgundy oscuro. Artículos personalizados: cuadernos, lapiceras, USB, termos."
             data-img="https://www.genspark.ai/api/files/s/WmblHbWG">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/WmblHbWG" alt="TAG Regalos Empresariales" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--marca">Branding Corporativo</span>
                <span class="pf-client">TAG Publicidad</span>
              </div>
              <h3 class="pf-title">Regalos Empresariales</h3>
              <p class="pf-desc">Personalización premium para grandes marcas</p>
            </div>
          </div>
        </div>

        <!-- 8 · TAG Story Cotiza Ahora -->
        <div class="portfolio-item pf-small" data-category="ads"
             data-title="TAG — Cotiza Ahora (Story Vertical)"
             data-desc="Story ad vertical con fondo crimson, diagonal de luz, mockups de uniformes y merchandising."
             data-img="https://www.genspark.ai/api/files/s/cA91NeG6">
          <div class="pf-card">
            <div class="pf-img-wrap pf-img-wrap--vertical">
              <img src="https://www.genspark.ai/api/files/s/cA91NeG6" alt="TAG Cotiza Ahora Story" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--ads">Story · Vertical Ad</span>
                <span class="pf-client">TAG Publicidad</span>
              </div>
              <h3 class="pf-title">Cotiza Ahora</h3>
              <p class="pf-desc">Story vertical para uniformes &amp; merchandising</p>
            </div>
          </div>
        </div>

        <!-- 9 · TFC Branding Premium — Destaque especial -->
        <div class="portfolio-item pf-hero" data-category="marca"
             data-title="The Fresh Cycle — Identidad Visual"
             data-desc="Identidad de marca aplicada en papelería de lujo. Verde foresta, crema y dorado. Cuadernos, tarjeteros, cable organizer, lapicera dorada con monograma FC."
             data-img="https://www.genspark.ai/api/files/s/ixv4e1gv">
          <div class="pf-card">
            <div class="pf-img-wrap">
              <img src="https://www.genspark.ai/api/files/s/ixv4e1gv" alt="The Fresh Cycle Branding Premium" loading="lazy">
              <div class="pf-overlay">
                <button class="pf-zoom" aria-label="Ver imagen"><i class="fas fa-expand"></i></button>
              </div>
            </div>
            <div class="pf-info">
              <div class="pf-meta">
                <span class="pf-tag pf-tag--marca">Branding Premium</span>
                <span class="pf-client">The Fresh Cycle</span>
              </div>
              <h3 class="pf-title">Identidad Visual Completa</h3>
              <p class="pf-desc">Papelería de lujo: cuadernos, tarjeteros, cable organizer y lapicera con monograma FC en verde foresta y dorado.</p>
              <div class="pf-result pf-result--gold">
                <i class="fas fa-award"></i>
                <span>Identidad de marca propia</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="portfolio-cta">
        <div class="portfolio-cta-inner">
          <div>
            <p class="portfolio-cta-title">¿Tu marca merece esto?</p>
            <p class="portfolio-cta-sub">Sin compromiso · Respuesta en 24h · 100% personalizado</p>
          </div>
          <a href="https://wa.me/595981234567?text=Hola!%20Vi%20el%20portafolio%20y%20quiero%20hacer%20algo%20así%20para%20mi%20marca" target="_blank" class="btn btn-gold">
            <i class="fab fa-whatsapp"></i> Quiero algo así
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── LIGHTBOX ─── -->
  <div class="pf-lightbox" id="pfLightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
    <button class="lb-close" id="lbClose" aria-label="Cerrar"><i class="fas fa-times"></i></button>
    <button class="lb-prev" id="lbPrev" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
    <button class="lb-next" id="lbNext" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
    <div class="lb-content">
      <img src="" alt="" id="lbImg">
      <div class="lb-caption">
        <h4 id="lbTitle"></h4>
        <p id="lbDesc"></p>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ NOSOTROS ═══════════════════ -->
  <section class="section section--cream" id="nosotros">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual">
          <div class="about-main-card">
            <div class="about-logo-big">
              <svg viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8L8 0H28L20 8H0Z" fill="currentColor"/>
                <path d="M0 8V28L8 20V8H0Z" fill="currentColor" opacity="0.7"/>
                <path d="M8 20L16 12H36L28 20H8Z" fill="currentColor"/>
                <path d="M24 8L32 0H52L44 8H24Z" fill="currentColor" opacity="0.85"/>
                <path d="M44 8V28L52 20V0L44 8Z" fill="currentColor" opacity="0.6"/>
                <path d="M28 20V44L36 36V12L28 20Z" fill="currentColor" opacity="0.7"/>
                <path d="M8 28L16 20V36L8 44V28Z" fill="currentColor" opacity="0.5"/>
                <path d="M16 36H36L28 44H8L16 36Z" fill="currentColor"/>
              </svg>
            </div>
            <p class="about-quote">"Tu marca, nuestra <strong>pasión</strong>.<br>Tu crecimiento, nuestra <strong>misión</strong>."</p>
          </div>
          <div class="about-cards-row">
            <div class="about-metric">
              <div class="about-metric-icon"><i class="fas fa-star"></i></div>
              <div>
                <strong>4.9/5</strong>
                <span>Satisfacción cliente</span>
              </div>
            </div>
            <div class="about-metric">
              <div class="about-metric-icon"><i class="fas fa-clock"></i></div>
              <div>
                <strong>24h</strong>
                <span>Tiempo de respuesta</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-text">
          <div class="section-eyebrow">
            <span class="eyebrow-line-sm"></span>
            <span class="eyebrow-text-sm eyebrow-text-sm--dark">Sobre nosotros</span>
          </div>
          <h2 class="section-title">Somos <em>The Fresh Cycle</em></h2>
          <p class="about-desc">Somos una agencia de marketing digital con sede en <strong>Asunción, Paraguay</strong>. Nuestra misión es simple: <strong>aumentar las ventas de nuestros clientes usando tecnología</strong> y estrategias digitales de alto impacto.</p>
          <p class="about-desc">Creemos que cada negocio tiene una historia única. No existen fórmulas genéricas aquí — cada cliente recibe una estrategia construida desde cero, adaptada a su industria y sus objetivos.</p>

          <!-- Diferencial com microcopy de segurança -->
          <div class="about-microcopy">
            <div class="microcopy-item">
              <i class="fas fa-shield-alt"></i>
              <span>Resultados medibles desde el primer mes</span>
            </div>
            <div class="microcopy-item">
              <i class="fas fa-comments"></i>
              <span>Comunicación directa — sin intermediarios</span>
            </div>
            <div class="microcopy-item">
              <i class="fas fa-lock-open"></i>
              <span>Sin contratos de permanencia obligatoria</span>
            </div>
          </div>

          <div class="about-values">
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-bullseye"></i></div>
              <div>
                <strong>Orientados a Resultados</strong>
                <p>Cada acción tiene un objetivo claro y medible. Tu ROI es nuestra prioridad.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-user-check"></i></div>
              <div>
                <strong>Atención Personalizada</strong>
                <p>No hay clientes genéricos. Cada estrategia se construye desde cero para tu negocio.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-bolt"></i></div>
              <div>
                <strong>Tecnología e Innovación</strong>
                <p>Las herramientas más actuales para mantenerte siempre un paso adelante.</p>
              </div>
            </div>
          </div>

          <!-- Equipe visual -->
          <div class="about-team-row">
            <div class="about-team-avatars">
              <div class="about-team-avatar">AN</div>
              <div class="about-team-avatar">MR</div>
              <div class="about-team-avatar">LC</div>
            </div>
            <div class="about-team-text">
              <strong>Equipo especializado &amp; dedicado</strong>
              Diseñadores, estrategas y desarrolladores enfocados en tu crecimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ PRECIOS ═══════════════════ -->
  <section class="section" id="precios">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm eyebrow-text-sm--dark">Inversión</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title">Paquetes de <em>diseño</em></h2>
        <p class="section-sub">Precios transparentes, sin sorpresas. Elige el plan ideal para tu negocio.</p>
      </div>

      <div class="pricing-note">
        <i class="fas fa-info-circle"></i>
        Los planes de <strong>Tráfico Pago y Sistemas Digitales</strong> se cotizan según la inversión y necesidades de cada cliente. &nbsp;<a href="#contacto">→ Consulta gratis aquí.</a>
      </div>

      <div class="pricing-grid">
        <!-- Starter -->
        <div class="pricing-card">
          <div class="pricing-header">
            <div class="pricing-icon">🌱</div>
            <h3>Starter</h3>
            <p class="pricing-tagline">Ideal para empezar tu presencia digital</p>
          </div>
          <div class="pricing-price">
            <span class="price-currency">USD</span>
            <span class="price-amount">199</span>
            <span class="price-period">/mes</span>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-check"></i> 12 posts para redes sociales</li>
            <li><i class="fas fa-check"></i> 8 stories diseñadas</li>
            <li><i class="fas fa-check"></i> 2 revisiones por pieza</li>
            <li><i class="fas fa-check"></i> Entrega en 5 días hábiles</li>
            <li><i class="fas fa-check"></i> Formatos para todas las redes</li>
            <li class="disabled"><i class="fas fa-times"></i> Diseño de marca</li>
            <li class="disabled"><i class="fas fa-times"></i> Reels / Videos</li>
          </ul>
          <a href="#contacto" class="btn btn-outline btn-full">Empezar Ahora</a>
        </div>

        <!-- PRO — destaque máximo -->
        <div class="pricing-card pricing-card--featured">
          <div class="pricing-popular-wrap">
            <span class="pricing-popular">🔥 Más Popular</span>
          </div>
          <div class="pricing-header">
            <div class="pricing-icon pricing-icon--gold">⚡</div>
            <h3>Pro</h3>
            <p class="pricing-tagline">Para marcas que quieren crecer de verdad</p>
          </div>
          <div class="pricing-price">
            <span class="price-currency">USD</span>
            <span class="price-amount">349</span>
            <span class="price-period">/mes</span>
          </div>
          <div class="pricing-saving">Ahorrás USD 150 vs contratar por separado</div>
          <ul class="pricing-features">
            <li><i class="fas fa-check-circle"></i> <strong>20 posts</strong> para redes sociales</li>
            <li><i class="fas fa-check-circle"></i> <strong>16 stories</strong> diseñadas</li>
            <li><i class="fas fa-check-circle"></i> <strong>4 Reels</strong> / Videos cortos</li>
            <li><i class="fas fa-check-circle"></i> Revisiones ilimitadas</li>
            <li><i class="fas fa-check-circle"></i> Entrega en <strong>3 días hábiles</strong></li>
            <li><i class="fas fa-check-circle"></i> Diseño de <strong>marca incluido</strong></li>
            <li><i class="fas fa-check-circle"></i> Soporte prioritario 24h</li>
          </ul>
          <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20el%20plan%20Pro%20de%20The%20Fresh%20Cycle" target="_blank" class="btn btn-gold btn-full">
            <i class="fab fa-whatsapp"></i> Quiero el Plan Pro
          </a>
          <p class="pricing-guarantee">✓ Sin permanencia · Cancela cuando quieras</p>
        </div>

        <!-- Premium -->
        <div class="pricing-card">
          <div class="pricing-header">
            <div class="pricing-icon">👑</div>
            <h3>Premium</h3>
            <p class="pricing-tagline">Para empresas exigentes y en expansión</p>
          </div>
          <div class="pricing-price">
            <span class="price-currency">USD</span>
            <span class="price-amount">599</span>
            <span class="price-period">/mes</span>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-check"></i> 30+ piezas mensuales</li>
            <li><i class="fas fa-check"></i> Stories + Reels ilimitados</li>
            <li><i class="fas fa-check"></i> Diseño de campañas publicitarias</li>
            <li><i class="fas fa-check"></i> Material impreso y digital</li>
            <li><i class="fas fa-check"></i> Gestor de cuenta dedicado</li>
            <li><i class="fas fa-check"></i> Estrategia de contenido mensual</li>
            <li><i class="fas fa-check"></i> Entrega express garantizada</li>
          </ul>
          <a href="#contacto" class="btn btn-outline btn-full">Empezar Ahora</a>
        </div>
      </div>

      <!-- Trust bar abaixo dos planos -->
      <div class="pricing-trust-bar">
        <div class="ptb-item"><i class="fas fa-lock"></i> Sin permanencia obligatoria</div>
        <div class="ptb-item"><i class="fas fa-undo"></i> Cancelá cuando quieras</div>
        <div class="ptb-item"><i class="fas fa-comments"></i> Soporte en español</div>
        <div class="ptb-item"><i class="fas fa-bolt"></i> Entrega en 3–5 días</div>
        <div class="ptb-item"><i class="fas fa-file-invoice-dollar"></i> Factura incluida</div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════ TESTIMONIOS ═══════════════════ -->
  <section class="section section--dark" id="testimonios">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm">Resultados reales</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title section-title--light">Lo que dicen <em>nuestros clientes</em></h2>
        <p class="section-sub section-sub--light">Resultados reales de negocios reales en Paraguay</p>
      </div>

      <div class="testimonials-grid">

        <!-- Card 1 -->
        <div class="testimonial-card">
          <div class="testimonial-result-tag">
            <i class="fas fa-chart-line"></i> +200% ventas en 2 meses
          </div>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"Desde que empecé con The Fresh Cycle, mis ventas se duplicaron. Los diseños son increíbles y las campañas de Meta Ads realmente funcionan. Respondieron siempre el mismo día."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar-initials" style="background:linear-gradient(135deg,#C9A962,#a88640)">MG</div>
            <div>
              <strong>María G.</strong>
              <span>Boutique de ropa · Asunción</span>
              <span class="testimonial-service">Diseño + Meta Ads</span>
            </div>
          </div>
        </div>

        <!-- Card 2 — destaque -->
        <div class="testimonial-card testimonial-card--featured">
          <div class="testimonial-result-tag testimonial-result-tag--gold">
            <i class="fas fa-users"></i> 3× más consultas
          </div>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"Me hicieron el sitio web y la landing page en tiempo récord. Desde el lanzamiento, triplicamos las consultas de clientes nuevos. Equipo profesional, entrega puntual."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar-initials" style="background:linear-gradient(135deg,#1B4D3E,#2a6354)">CR</div>
            <div>
              <strong>Carlos R.</strong>
              <span>Inmobiliaria · Asunción</span>
              <span class="testimonial-service">Landing Page + Web</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="testimonial-card">
          <div class="testimonial-result-tag">
            <i class="fas fa-dollar-sign"></i> ROI 4× en el primer mes
          </div>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"El diseño de marca quedó exactamente como lo imaginé. Las campañas de Google Ads superaron todas mis expectativas. El mejor dinero que invertí en marketing."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar-initials" style="background:linear-gradient(135deg,#2a6354,#1B4D3E)">AM</div>
            <div>
              <strong>Ana M.</strong>
              <span>Clínica estética · Asunción</span>
              <span class="testimonial-service">Branding + Google Ads</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Trust metrics abaixo dos testemunhos -->
      <div class="trust-metrics">
        <div class="trust-metric-item">
          <strong>4.9</strong>
          <div class="trust-stars-row">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <span>Calificación promedio</span>
        </div>
        <div class="trust-metric-divider"></div>
        <div class="trust-metric-item">
          <strong>24h</strong>
          <span>Tiempo de respuesta</span>
        </div>
        <div class="trust-metric-divider"></div>
        <div class="trust-metric-item">
          <strong>100%</strong>
          <span>Clientes que repiten</span>
        </div>
        <div class="trust-metric-divider"></div>
        <div class="trust-metric-item">
          <strong>0</strong>
          <span>Clientes insatisfechos</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ CTA BANNER com urgência ═══════════════════ -->
  <section class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text">
        <div class="cta-eyebrow">
          <span class="cta-dot"></span>
          <span>Atendiendo nuevos clientes esta semana</span>
        </div>
        <h2>¿Tu competencia ya<br>está online?</h2>
        <p>Consulta <strong>gratuita</strong> · Sin compromiso · Respondemos en menos de <strong>24h</strong></p>
      </div>
      <div class="cta-action-group">
        <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita%20con%20The%20Fresh%20Cycle" target="_blank" class="btn btn-white">
          <i class="fab fa-whatsapp"></i> Consulta Gratuita Ahora
        </a>
        <span class="cta-microcopy">Sin tarjeta de crédito · Sin permanencia</span>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ CONTACTO ═══════════════════ -->
  <section class="section" id="contacto">
    <div class="container">
      <div class="contact-grid">
        <div>
          <div class="contact-info-card">
            <p class="contact-info-title">Hablemos de tu proyecto</p>
            <p class="contact-info-sub">Respondemos en menos de 24 horas</p>
            <div class="contact-item">
              <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/595981234567" target="_blank">+595 98 123 4567</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-envelope"></i></div>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@thefreshcycle.com">info@thefreshcycle.com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fab fa-instagram"></i></div>
              <div>
                <strong>Instagram</strong>
                <a href="#" target="_blank">@thefreshcycle</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div>
                <strong>Ubicación</strong>
                <span>Asunción, Paraguay</span>
              </div>
            </div>
            <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita%20sobre%20los%20servicios%20de%20The%20Fresh%20Cycle"
               target="_blank" class="btn btn-whatsapp" style="margin-top:24px">
              <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div class="contact-form-wrap">
          <h2 class="form-title">Empecemos tu <em style="font-style:italic;color:var(--green)">proyecto</em></h2>
          <p class="form-sub">Completa el formulario y te contactamos en menos de 24 horas</p>
          <form class="contact-form" id="contactForm">
            <div class="form-row">
              <div class="form-group">
                <label>Nombre *</label>
                <input type="text" placeholder="Tu nombre completo" required>
              </div>
              <div class="form-group">
                <label>WhatsApp *</label>
                <input type="tel" placeholder="+595 9X XXX XXXX" required>
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com">
            </div>
            <div class="form-group">
              <label>Servicio de interés</label>
              <div class="service-chips">
                <label class="chip-option">
                  <input type="radio" name="servicio" value="Diseño &amp; Contenido" required>
                  <span><i class="fas fa-palette"></i> Diseño &amp; Contenido</span>
                </label>
                <label class="chip-option">
                  <input type="radio" name="servicio" value="Tráfico Pago">
                  <span><i class="fas fa-chart-line"></i> Tráfico Pago</span>
                </label>
                <label class="chip-option">
                  <input type="radio" name="servicio" value="Sitio Web / E-commerce">
                  <span><i class="fas fa-laptop-code"></i> Sitio Web</span>
                </label>
                <label class="chip-option">
                  <input type="radio" name="servicio" value="Pack Completo (Todo incluido)">
                  <span><i class="fas fa-star"></i> Pack Completo</span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label>Mensaje <span class="label-optional">(opcional)</span></label>
              <textarea rows="3" placeholder="¿Algo más que quieras contarnos?"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">
              Consulta Gratis <i class="fab fa-whatsapp"></i>
            </button>
            <p class="form-trust"><i class="fas fa-shield-alt"></i> Sin compromiso · Respondemos en menos de 24h · Consulta 100% gratuita</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ FOOTER ═══════════════════ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#inicio" class="nav-logo nav-logo--white">
            <svg class="logo-svg" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8L8 0H28L20 8H0Z" fill="currentColor"/>
              <path d="M0 8V28L8 20V8H0Z" fill="currentColor" opacity="0.7"/>
              <path d="M8 20L16 12H36L28 20H8Z" fill="currentColor"/>
              <path d="M24 8L32 0H52L44 8H24Z" fill="currentColor" opacity="0.85"/>
              <path d="M44 8V28L52 20V0L44 8Z" fill="currentColor" opacity="0.6"/>
              <path d="M28 20V44L36 36V12L28 20Z" fill="currentColor" opacity="0.7"/>
              <path d="M8 28L16 20V36L8 44V28Z" fill="currentColor" opacity="0.5"/>
              <path d="M16 36H36L28 44H8L16 36Z" fill="currentColor"/>
            </svg>
            <span>THE FRESH CYCLE</span>
          </a>
          <p>Agencia de marketing digital en Asunción, Paraguay. Impulsamos tu negocio con tecnología, diseño y estrategia.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Diseños Profesionales</a></li>
            <li><a href="#servicios">Tráfico Pago</a></li>
            <li><a href="#servicios">Sitios Web</a></li>
            <li><a href="#servicios">E-commerce</a></li>
            <li><a href="#servicios">CRM & Automatización</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 The Fresh Cycle. Todos los derechos reservados. · Asunción, Paraguay</p>
        <div class="footer-bottom-links">
          <a href="#" onclick="openLegalModal('privacy'); return false;">Política de Privacidad</a>
          <a href="#" onclick="openLegalModal('terms'); return false;">Términos de Uso</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita"
     class="whatsapp-float" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
    <span class="wa-tooltip">¡Escríbenos!</span>
  </a>

  <!-- ═══════════════════ MODAL LEGAL ═══════════════════ -->
  <div class="legal-modal" id="legalModal" role="dialog" aria-modal="true">
    <div class="legal-modal-box">
      <button class="legal-modal-close" id="legalClose" aria-label="Cerrar"><i class="fas fa-times"></i></button>
      <div id="legalContent">
        <!-- Conteúdo inserido via JS -->
      </div>
    </div>
  </div>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
