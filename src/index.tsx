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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
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
    <div class="hero-bg-pattern">
      <svg class="hero-fc-1" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8L8 0H28L20 8H0Z" fill="currentColor"/>
        <path d="M0 8V28L8 20V8H0Z" fill="currentColor" opacity="0.7"/>
        <path d="M8 20L16 12H36L28 20H8Z" fill="currentColor"/>
        <path d="M24 8L32 0H52L44 8H24Z" fill="currentColor" opacity="0.85"/>
        <path d="M44 8V28L52 20V0L44 8Z" fill="currentColor" opacity="0.6"/>
        <path d="M28 20V44L36 36V12L28 20Z" fill="currentColor" opacity="0.7"/>
        <path d="M8 28L16 20V36L8 44V28Z" fill="currentColor" opacity="0.5"/>
        <path d="M16 36H36L28 44H8L16 36Z" fill="currentColor"/>
      </svg>
      <svg class="hero-fc-2" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8L8 0H28L20 8H0Z" fill="currentColor"/>
        <path d="M0 8V28L8 20V8H0Z" fill="currentColor" opacity="0.7"/>
        <path d="M8 20L16 12H36L28 20H8Z" fill="currentColor"/>
        <path d="M24 8L32 0H52L44 8H24Z" fill="currentColor" opacity="0.85"/>
        <path d="M44 8V28L52 20V0L44 8Z" fill="currentColor" opacity="0.6"/>
        <path d="M28 20V44L36 36V12L28 20Z" fill="currentColor" opacity="0.7"/>
        <path d="M8 28L16 20V36L8 44V28Z" fill="currentColor" opacity="0.5"/>
        <path d="M16 36H36L28 44H8L16 36Z" fill="currentColor"/>
      </svg>
      <svg class="hero-fc-3" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    <div class="container hero-content">
      <div class="hero-text">
        <div class="hero-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Agencia de Marketing Digital · Asunción, PY</span>
        </div>
        <h1 class="hero-title">IMPULSAMOS</h1>
        <p class="hero-title-line2">tu negocio.</p>
        <div class="hero-divider"></div>
        <p class="hero-sub">
          Diseños profesionales, tráfico pago y sistemas digitales.<br>
          Cada cliente es único — cada estrategia, personalizada.
        </p>
        <div class="hero-actions">
          <a href="#contacto" class="btn btn-gold">
            <i class="fab fa-whatsapp"></i> Consulta Gratis
          </a>
          <a href="#servicios" class="btn btn-ghost">
            Ver Servicios <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="80">0</span>
              <span class="stat-symbol">+</span>
            </div>
            <span class="stat-label">Clientes</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="150">0</span>
              <span class="stat-symbol">+</span>
            </div>
            <span class="stat-label">Proyectos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <div class="stat-value">
              <span class="stat-number" data-target="3">0</span>
              <span class="stat-symbol">×</span>
            </div>
            <span class="stat-label">ROI Promedio</span>
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
        <p class="section-sub">Soluciones digitales completas para llevar tu marca al siguiente nivel</p>
      </div>

      <div class="services-grid">
        <div class="service-card service-card--featured">
          <div class="service-number">01</div>
          <div class="service-icon-wrap"><i class="fas fa-palette"></i></div>
          <h3>Diseños<br>Profesionales</h3>
          <p>Posts, Stories, Reels, Flyers y toda la identidad visual de tu marca. Diseños listos para publicar, 100% personalizados.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Posts + Stories para redes sociales</li>
            <li><i class="fas fa-check"></i> Diseño de identidad de marca</li>
            <li><i class="fas fa-check"></i> Material impreso y digital</li>
            <li><i class="fas fa-check"></i> Plantillas personalizadas</li>
          </ul>
          <a href="#precios" class="service-link">Ver paquetes <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="service-number">02</div>
          <div class="service-icon-wrap"><i class="fas fa-chart-line"></i></div>
          <h3>Tráfico<br>Pago</h3>
          <p>Maximiza tu alcance y convierte visitas en clientes reales. Gestión profesional de campañas y generación de leads.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Meta Ads y Google Ads</li>
            <li><i class="fas fa-check"></i> Estrategia y planificación</li>
            <li><i class="fas fa-check"></i> Generación de leads</li>
            <li><i class="fas fa-check"></i> Reportes mensuales</li>
          </ul>
          <a href="#contacto" class="service-link">Consultar inversión <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="service-number">03</div>
          <div class="service-icon-wrap"><i class="fas fa-laptop-code"></i></div>
          <h3>Sistemas<br>Digitales</h3>
          <p>Sitios web, landing pages, e-commerce y CRMs. Tecnología al servicio de tu negocio para automatizar y escalar.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Sitios web profesionales</li>
            <li><i class="fas fa-check"></i> Landing pages de alta conversión</li>
            <li><i class="fas fa-check"></i> E-commerce completo</li>
            <li><i class="fas fa-check"></i> CRM y automatización</li>
          </ul>
          <a href="#contacto" class="service-link">Solicitar cotización <i class="fas fa-arrow-right"></i></a>
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
      <div class="process-grid">
        <div class="process-step">
          <div class="process-num">01</div>
          <div class="process-icon"><i class="fas fa-comments"></i></div>
          <h4>Consulta Gratuita</h4>
          <p>Nos reunimos para entender tu negocio, objetivos y presupuesto. Sin costo, sin compromiso.</p>
        </div>
        <div class="process-step">
          <div class="process-num">02</div>
          <div class="process-icon"><i class="fas fa-lightbulb"></i></div>
          <h4>Estrategia</h4>
          <p>Diseñamos una estrategia personalizada para maximizar resultados según tu industria y mercado.</p>
        </div>
        <div class="process-step">
          <div class="process-num">03</div>
          <div class="process-icon"><i class="fas fa-rocket"></i></div>
          <h4>Ejecución</h4>
          <p>Ponemos en marcha el plan con diseños, campañas y sistemas digitales de alta calidad.</p>
        </div>
        <div class="process-step">
          <div class="process-num">04</div>
          <div class="process-icon"><i class="fas fa-chart-bar"></i></div>
          <h4>Resultados</h4>
          <p>Medimos, optimizamos y escalamos. Reportes claros para que veas el ROI en tiempo real.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ PORTAFOLIO ═══════════════════ -->
  <section class="section section--gray" id="portafolio">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm eyebrow-text-sm--dark">Nuestro trabajo</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title">Portafolio <em>reciente</em></h2>
        <p class="section-sub">Proyectos reales para clientes reales — resultados medibles</p>
      </div>

      <div class="portfolio-filter">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="diseno">Diseño</button>
        <button class="filter-btn" data-filter="web">Web & Email</button>
        <button class="filter-btn" data-filter="ads">Ads & Campaña</button>
        <button class="filter-btn" data-filter="marca">Branding</button>
      </div>

      <div class="portfolio-grid" id="portfolioGrid">

        <div class="portfolio-item" data-category="diseno">
          <div class="portfolio-img portfolio-img--1">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/ccNUg98O" alt="LBH Home & Hotel - Toallas Verano Sale" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · Redes Sociales</span>
              <h4>LBH Home &amp; Hotel</h4>
              <p>Campaña "Verano Sale" — Toallas 30% OFF</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--2">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/xGOqNK9w" alt="LBH - 3 Cuotas Sin Interés" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · Promoción</span>
              <h4>LBH — 3 Cuotas Sin Interés</h4>
              <p>Post tipográfico de alto impacto</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--3">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/dINlCKAH" alt="TAG Publicidad - VP Pantallas LED" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · Tecnología</span>
              <h4>TAG Publicidad</h4>
              <p>Campaña VP Pantallas Full HD</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="diseno">
          <div class="portfolio-img portfolio-img--4">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/K0DN7yr0" alt="TAG - Uniformes Corporativos" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · B2B</span>
              <h4>TAG — Uniformes Corporativos</h4>
              <p>Bordado Premium para grandes marcas</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--5">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/aMr4O4kS" alt="Vitrine Motors - Nuevos Vehículos" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · Automotriz</span>
              <h4>Vitrine Motors</h4>
              <p>+50 vehículos nuevos esta semana</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="web">
          <div class="portfolio-img portfolio-img--6">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/FheVzaAL" alt="VitalPet - Email Marketing" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Email Marketing</span>
              <h4>VitalPet</h4>
              <p>Template responsive para Gmail y Outlook</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="marca">
          <div class="portfolio-img portfolio-img--1">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/WmblHbWG" alt="TAG - Regalos Empresariales" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño · Corporativo</span>
              <h4>TAG — Regalos Empresariales</h4>
              <p>Personalización Premium de artículos</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--2">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/cA91NeG6" alt="TAG - Uniformes y Merchandising Story" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Story / Vertical Ad</span>
              <h4>TAG — Cotiza Ahora</h4>
              <p>Story vertical para uniformes &amp; merchandising</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="marca">
          <div class="portfolio-img portfolio-img--3">
            <img class="portfolio-thumb" src="https://www.genspark.ai/api/files/s/ixv4e1gv" alt="The Fresh Cycle - Branding Papelería" loading="lazy">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Branding Premium</span>
              <h4>The Fresh Cycle</h4>
              <p>Identidad visual aplicada en papelería de lujo</p>
            </div>
          </div>
        </div>

      </div>

      <div class="portfolio-cta">
        <p>¿Quieres que hagamos algo así para tu marca?</p>
        <a href="#contacto" class="btn btn-primary">Hablemos <i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </section>

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
          <p class="about-desc">Creemos que cada negocio tiene una historia única que merece ser contada de forma profesional. Tratamos a cada cliente de manera individual, creando soluciones a medida que generan resultados reales y medibles.</p>
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
        <div class="pricing-card">
          <div class="pricing-header">
            <span class="pricing-badge">🌱</span>
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
          <a href="#contacto" class="btn btn-outline btn-full">Comenzar →</a>
        </div>

        <div class="pricing-card pricing-card--featured">
          <div class="pricing-popular">Más Popular</div>
          <div class="pricing-header">
            <span class="pricing-badge">🔥</span>
            <h3>Pro</h3>
            <p class="pricing-tagline">Para marcas en crecimiento activo</p>
          </div>
          <div class="pricing-price">
            <span class="price-currency">USD</span>
            <span class="price-amount">349</span>
            <span class="price-period">/mes</span>
          </div>
          <ul class="pricing-features">
            <li><i class="fas fa-check"></i> 20 posts para redes sociales</li>
            <li><i class="fas fa-check"></i> 16 stories diseñadas</li>
            <li><i class="fas fa-check"></i> 4 Reels / Videos cortos</li>
            <li><i class="fas fa-check"></i> Revisiones ilimitadas</li>
            <li><i class="fas fa-check"></i> Entrega en 3 días hábiles</li>
            <li><i class="fas fa-check"></i> Diseño de marca incluido</li>
            <li><i class="fas fa-check"></i> Soporte prioritario</li>
          </ul>
          <a href="#contacto" class="btn btn-gold btn-full">Comenzar →</a>
        </div>

        <div class="pricing-card">
          <div class="pricing-header">
            <span class="pricing-badge">👑</span>
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
          <a href="#contacto" class="btn btn-outline btn-full">Comenzar →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ TESTIMONIOS ═══════════════════ -->
  <section class="section section--dark" id="testimonios">
    <div class="container">
      <div class="section-header">
        <div class="section-eyebrow">
          <span class="eyebrow-line-sm"></span>
          <span class="eyebrow-text-sm">Testimonios</span>
          <span class="eyebrow-line-sm"></span>
        </div>
        <h2 class="section-title section-title--light">Lo que dicen <em>nuestros clientes</em></h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <span class="testimonial-quote-icon">"</span>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">The Fresh Cycle transformó completamente la presencia digital de mi negocio. En solo 2 meses, dupliqué mis ventas gracias a las campañas de Meta Ads y los diseños profesionales.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background:#C9A962">M</div>
            <div>
              <strong>María González</strong>
              <span>Tienda de ropa · Asunción</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card testimonial-card--featured">
          <span class="testimonial-quote-icon">"</span>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">Me hicieron el sitio web y la landing page en tiempo récord. Los resultados son increíbles: 3× más consultas desde que lanzamos. Equipo súper profesional.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background:#1B4D3E">C</div>
            <div>
              <strong>Carlos Rodríguez</strong>
              <span>Inmobiliaria · Paraguay</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <span class="testimonial-quote-icon">"</span>
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">El diseño de mi marca quedó perfecto y el tráfico de Google Ads superó todas mis expectativas. ROI de 4× en el primer mes. 100% recomendados.</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background:#2a6354">A</div>
            <div>
              <strong>Ana Martínez</strong>
              <span>Clínica estética · Asunción</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════ CTA BANNER ═══════════════════ -->
  <section class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text">
        <h2>¿Listo para impulsar<br>tu negocio?</h2>
        <p>Agenda una consulta gratuita hoy. Sin compromiso, sin costo.</p>
      </div>
      <a href="#contacto" class="btn btn-white">
        <i class="fab fa-whatsapp"></i> Consulta Gratis Ahora
      </a>
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
              <label>Servicio de interés *</label>
              <select required>
                <option value="">Selecciona un servicio...</option>
                <option>Paquetes de Diseño</option>
                <option>Tráfico Pago (Meta Ads / Google Ads)</option>
                <option>Sitio Web o Landing Page</option>
                <option>E-commerce</option>
                <option>CRM / Automatización</option>
                <option>Pack Completo</option>
              </select>
            </div>
            <div class="form-group">
              <label>Mensaje</label>
              <textarea rows="4" placeholder="Cuéntanos sobre tu negocio y tus objetivos..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">
              Enviar Consulta <i class="fas fa-paper-plane"></i>
            </button>
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
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Uso</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita"
     class="whatsapp-float" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
