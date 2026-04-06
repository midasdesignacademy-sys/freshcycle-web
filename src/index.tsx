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
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"></noscript>
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="stylesheet" href="/static/styles.css">
</head>
<body>

  <!-- ═══════════════════════════════ NAVBAR ═══════════════════════════════ -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="#inicio" class="nav-logo">
        <img src="/static/images/logo.webp" alt="The Fresh Cycle" class="logo-img">
        <span>THE FRESH CYCLE</span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Agenda</a></li>
        <li><a href="#contacto" class="nav-cta"><i class="fab fa-whatsapp"></i> Consulta Gratis</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
  <section class="hero" id="inicio">
    <picture class="hero-banner">
      <source srcset="/static/images/banner/BANNER_CELULAR.webp" media="(max-width: 767px)">
      <source srcset="/static/images/banner/BANNER_TABLET.webp" media="(max-width: 1199px)">
      <img src="/static/images/banner/BANNER_PC.webp" alt="The Fresh Cycle — Agencia de Marketing Digital" loading="eager" class="hero-banner-img">
    </picture>
    <div class="hero-scroll-hint">
      <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
      <span>scroll</span>
    </div>
  </section>

  <!-- ═══════════════════════════════ TRUST MARQUEE ═══════════════════════════════ -->
  <div class="trust-strip">
    <div class="trust-strip-inner">
      <div class="trust-track">
        <div class="trust-item"><i class="fab fa-meta"></i> Meta Ads</div>
        <div class="trust-item"><i class="fab fa-google"></i> Google Ads</div>
        <div class="trust-item"><i class="fab fa-tiktok"></i> TikTok Ads</div>
        <div class="trust-item"><i class="fab fa-instagram"></i> Instagram</div>
        <div class="trust-item"><i class="fab fa-wordpress-simple"></i> WordPress</div>
        <div class="trust-item"><i class="fas fa-store"></i> E-commerce</div>
        <div class="trust-item"><i class="fas fa-envelope-open-text"></i> Email Mkt</div>
        <div class="trust-item"><i class="fas fa-chart-pie"></i> Analytics</div>
        <!-- duplicado para loop continuo -->
        <div class="trust-item"><i class="fab fa-meta"></i> Meta Ads</div>
        <div class="trust-item"><i class="fab fa-google"></i> Google Ads</div>
        <div class="trust-item"><i class="fab fa-tiktok"></i> TikTok Ads</div>
        <div class="trust-item"><i class="fab fa-instagram"></i> Instagram</div>
        <div class="trust-item"><i class="fab fa-wordpress-simple"></i> WordPress</div>
        <div class="trust-item"><i class="fas fa-store"></i> E-commerce</div>
        <div class="trust-item"><i class="fas fa-envelope-open-text"></i> Email Mkt</div>
        <div class="trust-item"><i class="fas fa-chart-pie"></i> Analytics</div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════ SERVICIOS ═══════════════════════════════ -->
  <section class="section" id="servicios">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill">Lo que hacemos</div>
        <h2 class="sec-title">Nuestros <em>servicios</em></h2>
        <p class="sec-sub">Un ecosistema digital completo para que tu marca crezca de forma sostenida</p>
      </div>
    </div>

    <!-- Accordion full-width -->
    <div class="svc-accordion" data-anim="fade-up" data-delay="80">

      <!-- Panel 01 — Diseños Profesionales -->
      <div class="svc-panel svc-p1" tabindex="0">
        <div class="svc-art">
          <div class="spa-bg spa-bg--logo" style="background-image:url('/static/images/logo.png');background-size:contain;background-repeat:no-repeat;background-position:center;"></div>
        </div>
        <div class="svc-glow"></div>

        <!-- Collapsed side label -->
        <div class="svc-panel-side">
          <span class="svc-side-num">01</span>
          <span class="svc-side-label">Diseños</span>
        </div>

        <!-- Expanded body -->
        <div class="svc-panel-body">
          <div class="svc-pbadge">Más solicitado</div>
          <div class="svc-pghost">01</div>
          <h3 class="svc-ptitle">Diseños <em>Profesionales</em></h3>
          <p class="svc-pdesc">Posts, Stories, Reels, Flyers y toda la identidad visual. Diseños que comunican, convierten y se destacan en el feed.</p>
          <ul class="svc-plist">
            <li><i class="fas fa-circle"></i> Posts + Stories para redes sociales</li>
            <li><i class="fas fa-circle"></i> Identidad de marca completa</li>
            <li><i class="fas fa-circle"></i> Reels y videos animados</li>
            <li><i class="fas fa-circle"></i> Material impreso y digital</li>
            <li><i class="fas fa-circle"></i> Plantillas editables entregadas</li>
          </ul>
          <a href="#contacto" class="svc-pcta">Ver paquetes <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <!-- Panel 02 — Tráfico Pago & Leads -->
      <div class="svc-panel svc-p2" tabindex="0">
        <div class="svc-art">
          <div class="spa-bg spa-bg--logo" style="background-image:url('/static/images/portfolio/capa_trafico.webp');"></div>
          <div class="spa-screen spa-screen--traffic">
            <div class="spa-screen-bar"><span></span><span></span><span></span></div>
            <img src="/static/images/portfolio/trafico01.webp" alt="Tráfico Pago dashboard" loading="lazy">
          </div>
        </div>
        <div class="svc-glow"></div>

        <!-- Collapsed side label -->
        <div class="svc-panel-side">
          <span class="svc-side-num">02</span>
          <span class="svc-side-label">Tráfico</span>
        </div>

        <!-- Expanded body -->
        <div class="svc-panel-body">
          <div class="svc-pghost">02</div>
          <h3 class="svc-ptitle">Tráfico Pago <em>&amp; Leads</em></h3>
          <p class="svc-pdesc">Campañas en Meta Ads, Google Ads y TikTok Ads con estrategia y optimización continua para maximizar tu ROI.</p>
          <ul class="svc-plist">
            <li><i class="fas fa-circle"></i> Meta Ads · Google Ads · TikTok Ads</li>
            <li><i class="fas fa-circle"></i> Generación de leads calificados</li>
            <li><i class="fas fa-circle"></i> Reportes mensuales de ROI</li>
            <li><i class="fas fa-circle"></i> Inversión según tu presupuesto</li>
          </ul>
          <a href="#contacto" class="svc-pcta">Consultar inversión <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <!-- Panel 03 — Sistemas Digitales -->
      <div class="svc-panel svc-p3" tabindex="0">
        <div class="svc-art">
          <div class="spa-bg spa-bg--logo" style="background-image:url('/static/images/portfolio/capa_sistemas.webp');"></div>
          <div class="spa-screen spa-screen--main">
            <div class="spa-screen-bar"><span></span><span></span><span></span></div>
            <img src="/static/images/portfolio/sistemas01.webp" alt="Sitio web" loading="lazy">
          </div>
          <div class="spa-screen spa-screen--mid">
            <div class="spa-screen-bar"><span></span><span></span><span></span></div>
            <img src="/static/images/portfolio/sistemas02.webp" alt="Landing page" loading="lazy">
          </div>
          <div class="spa-screen spa-screen--back">
            <div class="spa-screen-bar"><span></span><span></span><span></span></div>
            <img src="/static/images/portfolio/sistemas03.webp" alt="E-commerce" loading="lazy">
          </div>
        </div>
        <div class="svc-glow"></div>

        <!-- Collapsed side label -->
        <div class="svc-panel-side">
          <span class="svc-side-num">03</span>
          <span class="svc-side-label">Sistemas</span>
        </div>

        <!-- Expanded body -->
        <div class="svc-panel-body">
          <div class="svc-pghost">03</div>
          <h3 class="svc-ptitle">Sistemas <em>Digitales</em></h3>
          <p class="svc-pdesc">Sitios web, landing pages y e-commerce diseñados para convertir visitantes en clientes con tecnología de vanguardia.</p>
          <ul class="svc-plist">
            <li><i class="fas fa-circle"></i> Sitios web profesionales</li>
            <li><i class="fas fa-circle"></i> Landing pages de alta conversión</li>
            <li><i class="fas fa-circle"></i> E-commerce completo</li>
            <li><i class="fas fa-circle"></i> Integración de pagos y logística</li>
          </ul>
          <a href="#contacto" class="svc-pcta">Solicitar cotización <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <!-- Panel 04 — CRM & Automatización -->
      <div class="svc-panel svc-p4" tabindex="0">
        <div class="svc-art">
          <div class="spa-bg spa-bg--logo" style="background-image:url('/static/images/portfolio/capa_automaciones.webp');"></div>
        </div>
        <div class="svc-glow"></div>

        <!-- Collapsed side label -->
        <div class="svc-panel-side">
          <span class="svc-side-num">04</span>
          <span class="svc-side-label">CRM</span>
        </div>

        <!-- Expanded body -->
        <div class="svc-panel-body">
          <div class="svc-pghost">04</div>
          <h3 class="svc-ptitle">CRM <em>&amp; Automatización</em></h3>
          <p class="svc-pdesc">Sistemas de gestión de clientes, automatización de seguimiento y pipelines de venta que trabajan por ti las 24h.</p>
          <ul class="svc-plist">
            <li><i class="fas fa-circle"></i> CRM personalizado para tu negocio</li>
            <li><i class="fas fa-circle"></i> Automatización de WhatsApp y Email</li>
            <li><i class="fas fa-circle"></i> Pipelines de ventas configurados</li>
            <li><i class="fas fa-circle"></i> Reportes automáticos de gestión</li>
          </ul>
          <a href="#contacto" class="svc-pcta">Explorar solución <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

    </div><!-- /svc-accordion -->
  </section>

  <!-- ═══════════════════════════════ PROCESO ═══════════════════════════════ -->
  <section class="section section-dark" id="proceso">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill sec-pill--light">Proceso</div>
        <h2 class="sec-title sec-title--light">¿Cómo <em>trabajamos?</em></h2>
        <p class="sec-sub sec-sub--light">Simple, rápido y con resultados medibles desde el primer mes</p>
      </div>

      <div class="process-steps" data-anim="fade-up" data-delay="100">

        <div class="process-step">
          <div class="ps-icon-wrap"><i class="fas fa-comments"></i></div>
          <div class="ps-num">01</div>
          <div class="ps-connector"><span class="ps-dot"></span></div>
          <div class="ps-body">
            <h4>Consulta Gratuita</h4>
            <p>Reunión sin costo para entender tu negocio, objetivos y presupuesto.</p>
            <span class="ps-time"><i class="fas fa-clock"></i> Día 1</span>
          </div>
        </div>

        <div class="process-step">
          <div class="ps-icon-wrap"><i class="fas fa-lightbulb"></i></div>
          <div class="ps-num">02</div>
          <div class="ps-connector"><span class="ps-dot"></span></div>
          <div class="ps-body">
            <h4>Estrategia Personalizada</h4>
            <p>Diseñamos un plan a medida según tu industria, audiencia y metas.</p>
            <span class="ps-time"><i class="fas fa-clock"></i> Días 2–3</span>
          </div>
        </div>

        <div class="process-step">
          <div class="ps-icon-wrap"><i class="fas fa-rocket"></i></div>
          <div class="ps-num">03</div>
          <div class="ps-connector"><span class="ps-dot"></span></div>
          <div class="ps-body">
            <h4>Ejecución &amp; Lanzamiento</h4>
            <p>Creamos diseños, campañas y sistemas con velocidad y calidad premium.</p>
            <span class="ps-time"><i class="fas fa-clock"></i> Semana 1</span>
          </div>
        </div>

        <div class="process-step">
          <div class="ps-icon-wrap"><i class="fas fa-chart-bar"></i></div>
          <div class="ps-num">04</div>
          <div class="ps-connector"><span class="ps-dot"></span></div>
          <div class="ps-body">
            <h4>Resultados &amp; Escalamiento</h4>
            <p>Medimos, optimizamos y escalamos. ROI visible en tiempo real.</p>
            <span class="ps-time"><i class="fas fa-clock"></i> Mes 1+</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ PORTAFOLIO ═══════════════════════════════ -->
  <section class="pf-section" id="portafolio">
    <div class="container" style="position:relative;z-index:1;">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill">Nuestro trabajo</div>
        <h2 class="sec-title">Portafolio <em class="pf-sub-accent">reciente</em></h2>
        <p class="sec-sub pf-sub-label">Proyectos reales <span class="pf-sep">·</span> Clientes reales <span class="pf-sep">·</span> Resultados medibles</p>
      </div>
    </div>

    <!-- Infinite scroll gallery — full width -->
    <div class="pf-gallery" aria-label="Galería de portafolio">

      <!-- Row A — scrolls left -->
      <div class="pf-row">
        <div class="pf-reel pf-reel-a">
          <!-- Original items -->
          <div class="pf-item">
            <img src="/static/images/portfolio/LBH_001.webp" alt="LBH Verano Sale" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">LBH Home &amp; Hotel</span>
              <span class="pf-item-tag">Diseño Social</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_001.webp" alt="TAG Pantallas LED" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Campaña B2B</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine01.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Automotriz</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/fc_01.webp" alt="The Fresh Cycle" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">The Fresh Cycle</span>
              <span class="pf-item-tag">Branding Premium</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital01.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Email Marketing</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_002.webp" alt="TAG Uniformes" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Diseño B2B</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine02.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Campaña Ads</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/LBH_002.webp" alt="LBH 3 Cuotas" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">LBH Home &amp; Hotel</span>
              <span class="pf-item-tag">Post Tipográfico</span>
            </div>
          </div>
          <!-- Duplicated for seamless loop -->
          <div class="pf-item">
            <img src="/static/images/portfolio/LBH_001.webp" alt="LBH Verano Sale" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">LBH Home &amp; Hotel</span>
              <span class="pf-item-tag">Diseño Social</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_001.webp" alt="TAG Pantallas LED" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Campaña B2B</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine01.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Automotriz</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/fc_01.webp" alt="The Fresh Cycle" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">The Fresh Cycle</span>
              <span class="pf-item-tag">Branding Premium</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital01.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Email Marketing</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_002.webp" alt="TAG Uniformes" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Diseño B2B</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine02.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Campaña Ads</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/LBH_002.webp" alt="LBH 3 Cuotas" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">LBH Home &amp; Hotel</span>
              <span class="pf-item-tag">Post Tipográfico</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row B — scrolls right -->
      <div class="pf-row">
        <div class="pf-reel pf-reel-b">
          <!-- Original items -->
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_003.webp" alt="TAG Regalos" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Branding Corporativo</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine03.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Story Vertical</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/fc_02.webp" alt="The Fresh Cycle Branding" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">The Fresh Cycle</span>
              <span class="pf-item-tag">Identidad Visual</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital02.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Diseño Social</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_004.webp" alt="TAG Story Ad" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Story · Vertical Ad</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine04.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Campaña Automotriz</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/DENT_001.webp" alt="Dental" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Clínica Dental</span>
              <span class="pf-item-tag">Diseño Salud</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital03.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Campaña Ads</span>
            </div>
          </div>
          <!-- Duplicated for seamless loop -->
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_003.webp" alt="TAG Regalos" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Branding Corporativo</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine03.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Story Vertical</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/fc_02.webp" alt="The Fresh Cycle Branding" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">The Fresh Cycle</span>
              <span class="pf-item-tag">Identidad Visual</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital02.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Diseño Social</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/TAG_004.webp" alt="TAG Story Ad" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">TAG Publicidad</span>
              <span class="pf-item-tag">Story · Vertical Ad</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vitrine04.webp" alt="Vitrine Motors" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Vitrine Motors</span>
              <span class="pf-item-tag">Campaña Automotriz</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/DENT_001.webp" alt="Dental" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">Clínica Dental</span>
              <span class="pf-item-tag">Diseño Salud</span>
            </div>
          </div>
          <div class="pf-item">
            <img src="/static/images/portfolio/vital03.webp" alt="VitalPet" loading="lazy">
            <div class="pf-item-over">
              <span class="pf-item-client">VitalPet</span>
              <span class="pf-item-tag">Campaña Ads</span>
            </div>
          </div>
        </div>
      </div>

    </div><!-- /pf-gallery -->

    <div class="container" style="position:relative;z-index:1;">
      <div class="pf-cta-row" data-anim="fade-up">
        <div class="pf-cta-text">
          <strong>¿Tu marca merece esto?</strong>
          <span>Sin compromiso · Respuesta en 24h · 100% personalizado</span>
        </div>
        <a href="https://wa.me/595981234567?text=Hola!%20Vi%20el%20portafolio%20y%20quiero%20algo%20así%20para%20mi%20marca" target="_blank" class="btn btn-gold">
          <i class="fab fa-whatsapp"></i> Quiero algo así
        </a>
      </div>
    </div>

  </section>

  <!-- ═══════════════════════════════ NOSOTROS ═══════════════════════════════ -->
  <section class="section" id="nosotros">
    <div class="about-split">

      <!-- LEFT — dark carousel panel -->
      <div class="about-dark">
        <div class="about-carousel" id="aboutCarousel">

          <!-- Slide 0 — Agência (grupo) -->
          <div class="ac-slide ac-slide--group is-active">
            <div class="ac-group-inner">
              <img src="/static/images/logo.webp" alt="The Fresh Cycle" class="ac-group-logo">
              <blockquote class="ac-manifesto">
                <span class="ac-manifesto-line">Tu marca,</span>
                <span class="ac-manifesto-line ac-manifesto--gold"><em>nuestra pasión.</em></span>
                <span class="ac-manifesto-line">Tu crecimiento,</span>
                <span class="ac-manifesto-line ac-manifesto--gold"><em>nuestra misión.</em></span>
              </blockquote>
              <div class="ac-group-founders">
                <div class="ac-founder">
                  <div class="ac-founder-av">
                    <img src="/static/images/socios/joao-carvalho.webp" alt="João Carvalho">
                  </div>
                  <p class="ac-founder-name">João Carvalho</p>
                  <p class="ac-founder-role">Estrategia</p>
                </div>
                <div class="ac-founder">
                  <div class="ac-founder-av">
                    <img src="/static/images/socios/diego.webp" alt="Diego Segovia">
                  </div>
                  <p class="ac-founder-name">Diego Segovia</p>
                  <p class="ac-founder-role">Creatividad</p>
                </div>
                <div class="ac-founder">
                  <div class="ac-founder-av">
                    <img src="/static/images/socios/joao-paulo.webp" alt="João Paulo">
                  </div>
                  <p class="ac-founder-name">João Paulo</p>
                  <p class="ac-founder-role">Tecnología</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 1 — João Carvalho -->
          <div class="ac-slide">
            <div class="ac-photo">
              <img src="/static/images/socios/joao-carvalho.webp" alt="João Carvalho">
            </div>
            <div class="ac-overlay"></div>
            <div class="ac-body">
              <p class="ac-role">CEO &amp; Estrategia</p>
              <h3 class="ac-name">João<br>Carvalho</h3>
              <p class="ac-origin">Brasil · Argentina · Asunción, Paraguay</p>
              <p class="ac-bio">"Cada negocio tiene una historia única. Mi trabajo es encontrar la estrategia que la hace crecer."</p>
            </div>
          </div>

          <!-- Slide 2 — Diego Segovia -->
          <div class="ac-slide">
            <div class="ac-photo">
              <img src="/static/images/socios/diego.webp" alt="Diego Segovia">
            </div>
            <div class="ac-overlay"></div>
            <div class="ac-body">
              <p class="ac-role">Diseño &amp; Contenido</p>
              <h3 class="ac-name">Diego<br>Segovia</h3>
              <p class="ac-origin">Paraguay · Asunción</p>
              <p class="ac-bio">"El diseño no es decoración — es el primer mensaje que tu marca le da al mundo."</p>
            </div>
          </div>

          <!-- Slide 3 — João Paulo -->
          <div class="ac-slide">
            <div class="ac-photo">
              <img src="/static/images/socios/joao-paulo.webp" alt="João Paulo">
            </div>
            <div class="ac-overlay"></div>
            <div class="ac-body">
              <p class="ac-role">Tráfico Pago</p>
              <h3 class="ac-name">João<br>Paulo</h3>
              <p class="ac-origin">Brasil · Asunción, Paraguay</p>
              <p class="ac-bio">"Las campañas de paid media bien ejecutadas no gastan presupuesto — lo multiplican."</p>
            </div>
          </div>

          <!-- Dots -->
          <div class="ac-dots">
            <button class="ac-dot is-active" data-index="0" aria-label="The Fresh Cycle"></button>
            <button class="ac-dot" data-index="1" aria-label="João Carvalho"></button>
            <button class="ac-dot" data-index="2" aria-label="Diego Segovia"></button>
            <button class="ac-dot" data-index="3" aria-label="João Paulo"></button>
          </div>

        </div><!-- /about-carousel -->
      </div><!-- /about-dark -->

      <!-- RIGHT — cream content panel -->
      <div class="about-content">
        <div class="sec-pill">Sobre nosotros</div>
        <h2 class="sec-title about-title">Somos <em>The<br>Fresh Cycle</em></h2>
        <p class="about-desc">Somos una agencia de marketing digital con sede en <strong>Asunción, Paraguay</strong>. Nuestra misión es simple: <strong>aumentar las ventas de nuestros clientes</strong> usando tecnología y estrategias digitales de alto impacto.</p>
        <p class="about-desc">No existen fórmulas genéricas aquí — cada cliente recibe una estrategia construida desde cero, adaptada a su industria y sus objetivos.</p>

        <div class="about-trust">
          <div class="at-item"><i class="fas fa-shield-alt"></i><span>Resultados medibles desde el primer mes</span></div>
          <div class="at-item"><i class="fas fa-comments"></i><span>Comunicación directa — sin intermediarios</span></div>
          <div class="at-item"><i class="fas fa-lock-open"></i><span>Sin contratos de permanencia obligatoria</span></div>
        </div>

        <div class="about-values">
          <div class="av-item">
            <div class="av-icon"><i class="fas fa-bullseye"></i></div>
            <div>
              <strong>Orientados a Resultados</strong>
              <p>Cada acción tiene un objetivo claro y medible. Tu ROI es nuestra prioridad.</p>
            </div>
          </div>
          <div class="av-item">
            <div class="av-icon"><i class="fas fa-user-check"></i></div>
            <div>
              <strong>Atención Personalizada</strong>
              <p>No hay clientes genéricos. Cada estrategia desde cero para tu negocio.</p>
            </div>
          </div>
          <div class="av-item">
            <div class="av-icon"><i class="fas fa-bolt"></i></div>
            <div>
              <strong>Tecnología e Innovación</strong>
              <p>Las herramientas más actuales para mantenerte siempre un paso adelante.</p>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="as-item">
            <strong><span class="counter" data-target="4">0</span><span class="as-unit">.9</span></strong>
            <span>Avaliações</span>
          </div>
          <div class="as-divider"></div>
          <div class="as-item">
            <strong><span class="counter" data-target="80">0</span><span class="as-unit">+</span></strong>
            <span>Clientes</span>
          </div>
          <div class="as-divider"></div>
          <div class="as-item">
            <strong><span class="counter" data-target="3">0</span><span class="as-unit">+</span></strong>
            <span>Anos</span>
          </div>
        </div>

      </div><!-- /about-content -->

    </div><!-- /about-split -->
  </section>

  <!-- ═══════════════════════════════ SOLUCIONES ═══════════════════════════════ -->
  <section class="section section-pricing" id="precios">
    <div class="pricing-bg-grid"></div>
    <div class="container">

      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill">Cómo trabajamos</div>
        <h2 class="sec-title sec-title--light">Sin paquetes fijos.<br><em>Tu solución, a tu medida.</em></h2>
        <p class="sec-sub sec-sub--light">Cada negocio en Asunción es distinto. No vendemos planes estándar — construimos la estrategia exacta que tu negocio necesita.</p>
      </div>

      <div class="solution-grid" data-anim="fade-up" data-delay="120">

        <div class="solution-card">
          <div class="solution-num">01</div>
          <div class="solution-icon"><i class="fas fa-ear-listen"></i></div>
          <h3 class="solution-title">Diagnóstico gratuito</h3>
          <p class="solution-text">Nos juntamos, te escuchamos y analizamos tu situación actual. Sin costo, sin compromiso.</p>
        </div>

        <div class="solution-card">
          <div class="solution-num">02</div>
          <div class="solution-icon"><i class="fas fa-pen-ruler"></i></div>
          <h3 class="solution-title">Propuesta a medida</h3>
          <p class="solution-text">Diseñamos una estrategia pensada específicamente para tu negocio, tu rubro y tu presupuesto.</p>
        </div>

        <div class="solution-card">
          <div class="solution-num">03</div>
          <div class="solution-icon"><i class="fas fa-chart-line"></i></div>
          <h3 class="solution-title">Resultados que se ven</h3>
          <p class="solution-text">Ejecutamos, optimizamos y te mostramos métricas reales. Vos decidís si seguimos.</p>
        </div>

      </div>

      <div class="solution-cta-row" data-anim="fade-up" data-delay="200">
        <p class="solution-cta-label">¿Listo para dar el primer paso?</p>
        <a href="#contacto" class="btn btn-gold solution-cta-btn">Agendá tu consulta gratuita</a>
        <p class="solution-cta-micro">Presencial en tu local &nbsp;·&nbsp; Google Meet &nbsp;·&nbsp; Respondemos en menos de 24h</p>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════ CLIENTES ═══════════════════════════════ -->
  <section class="section section-dark" id="clientes">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill sec-pill--light">Empresas que confían en nosotros</div>
        <h2 class="sec-title sec-title--light">Nuestros <em>clientes</em></h2>
        <p class="sec-sub sec-sub--light">Presentes en Paraguay, Argentina y Brasil</p>
      </div>
    </div>

    <div class="cl-reel-wrapper" data-anim="fade-up" data-delay="100">
      <div class="cl-reel">
        <!-- Set 1 -->
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/america-sul-turismo.webp" alt="America Sul Turismo" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/axis-real-state.webp" alt="Axis Real State" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/ferias-facil.webp" alt="Ferias Facil" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/lbh.webp" alt="LBH" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/canaan-country-club.webp" alt="Canaan Country Club" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/tango-porteno.webp" alt="Tango Porteno" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/tag-publicidad.webp" alt="TAG Publicidad" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vitrine.webp" alt="Vitrine" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/arqui-designs.webp" alt="Arqui Designs" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/cumbres-lomas.webp" alt="Cumbres de las Lomas" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/ir-turismo.webp" alt="IR Turismo" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/holding-hsi.webp" alt="Holding HSI" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/selvano.webp" alt="Selvano" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/drimo.webp" alt="Drimo Eat and Drink" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vitrine-motors.webp" alt="Vitrine Motors" loading="lazy"></div></div>
        <div class="cl-item"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vital-pet.webp" alt="Vital Pet" loading="lazy"></div></div>
        <!-- Set 2 (duplicate for seamless loop) -->
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/america-sul-turismo.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/axis-real-state.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/ferias-facil.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/lbh.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/canaan-country-club.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/tango-porteno.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/tag-publicidad.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vitrine.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/arqui-designs.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/cumbres-lomas.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/ar.svg" alt="Argentina" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/ir-turismo.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/holding-hsi.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/selvano.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/br.svg" alt="Brasil" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/drimo.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vitrine-motors.webp" alt="" loading="lazy"></div></div>
        <div class="cl-item" aria-hidden="true"><img class="cl-flag" src="/static/images/flags/py.svg" alt="Paraguay" width="28" height="20"><div class="cl-logo-box"><img src="/static/images/clients/vital-pet.webp" alt="" loading="lazy"></div></div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ CTA BANNER ═══════════════════════════════ -->
  <section class="cta-band">
    <div class="cta-band-bg" aria-hidden="true"></div>
    <div class="container cta-band-inner">
      <div class="cta-band-text">
        <div class="cta-band-pill"><span class="cta-dot"></span> Atendiendo nuevos clientes esta semana</div>
        <h2>¿Cuánto te cuesta<br>no tener presencia digital?</h2>
        <p>Primera consulta <strong>gratis</strong> · Nos juntamos en tu local o por Google Meet · Respondemos en menos de <strong>24h</strong></p>
      </div>
      <div class="cta-band-action">
        <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" target="_blank" class="btn btn-white">
          <i class="fab fa-whatsapp"></i> Agendar consulta gratuita
        </a>
        <span class="cta-band-micro">Sin permanencia · Sin costo · Sin presión</span>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ CONTACTO ═══════════════════════════════ -->
  <section class="section section-dark" id="contacto">
    <div class="container">
      <div class="contact-wrap">

        <!-- Info -->
        <div class="contact-info" data-anim="fade-right">
          <div class="sec-pill sec-pill--light">Primera consulta</div>
          <h2 class="sec-title sec-title--light">Agendá tu reunión.<br><em>Es gratis.</em></h2>
          <p class="contact-sub">Vamos a tu local en Asunción o nos conectamos por Google Meet — vos elegís.</p>

          <div class="contact-items">
            <a href="https://wa.me/595981234567" target="_blank" class="ci-row">
              <div class="ci-icon ci-wa"><i class="fab fa-whatsapp"></i></div>
              <div><strong>WhatsApp</strong><span>+595 98 123 4567</span></div>
              <i class="fas fa-arrow-right ci-arr"></i>
            </a>
            <a href="mailto:info@thefreshcycle.com" class="ci-row">
              <div class="ci-icon ci-em"><i class="fas fa-envelope"></i></div>
              <div><strong>Email</strong><span>info@thefreshcycle.com</span></div>
              <i class="fas fa-arrow-right ci-arr"></i>
            </a>
            <a href="#" class="ci-row">
              <div class="ci-icon ci-ig"><i class="fab fa-instagram"></i></div>
              <div><strong>Instagram</strong><span>@thefreshcycle</span></div>
              <i class="fas fa-arrow-right ci-arr"></i>
            </a>
            <div class="ci-row ci-row-plain">
              <div class="ci-icon ci-map"><i class="fas fa-map-marker-alt"></i></div>
              <div><strong>Ubicación</strong><span>Asunción, Paraguay</span></div>
            </div>
          </div>

          <div class="ct-trust-row">
            <i class="fas fa-clock"></i>
            <span>Respondemos en menos de 2 horas</span>
          </div>
        </div>

        <!-- Wizard -->
        <div class="wizard-box" data-anim="fade-up" data-delay="100">

          <!-- Progreso -->
          <div class="wz-header">
            <div class="wz-progress" id="wzProgress">
              <div class="wz-progress-bar" id="wzProgressBar"></div>
            </div>
            <div class="wz-dots" id="wzDots">
              <div class="wz-dot is-active" data-dot="1"><span>1</span></div>
              <div class="wz-dot-line"></div>
              <div class="wz-dot" data-dot="2"><span>2</span></div>
              <div class="wz-dot-line"></div>
              <div class="wz-dot" data-dot="3"><span>3</span></div>
              <div class="wz-dot-line"></div>
              <div class="wz-dot" data-dot="4"><span>4</span></div>
            </div>
            <span class="wz-step-label" id="wzStepLabel">Paso 1 de 4</span>
          </div>

          <!-- PASO 1: Servicio -->
          <div class="wz-step is-active" id="wzStep1">
            <h3 class="wz-title">Primero, ¿en qué<br><em>te ayudamos?</em></h3>
            <div class="wz-options-grid">
              <button class="wz-option" data-value="Diseño &amp; Contenido">
                <i class="fas fa-palette"></i>
                <span>Diseño &amp; Contenido</span>
              </button>
              <button class="wz-option" data-value="Tráfico Pago">
                <i class="fas fa-chart-line"></i>
                <span>Tráfico Pago</span>
              </button>
              <button class="wz-option" data-value="Sitio Web / E-commerce">
                <i class="fas fa-laptop-code"></i>
                <span>Sitio Web / E-comm</span>
              </button>
              <button class="wz-option" data-value="Solución Completa">
                <i class="fas fa-bolt"></i>
                <span>Todo junto</span>
              </button>
            </div>
            <div class="wz-actions">
              <button class="wz-btn-next" id="wzNext1" disabled>Siguiente <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- PASO 2: Negocio -->
          <div class="wz-step" id="wzStep2">
            <h3 class="wz-title">Cuéntanos sobre<br><em>tu negocio</em></h3>
            <div class="fg">
              <label>¿Cómo se llama tu negocio? <span class="lbl-req">*</span></label>
              <input type="text" id="wzBusinessName" placeholder="Ej: Boutique Elena, Farmacia Central...">
            </div>
            <div class="fg">
              <label>¿A qué se dedica?</label>
              <input type="text" id="wzRubro" placeholder="Ej: Ropa, gastronomía, salud, servicios...">
            </div>
            <div class="fg">
              <label>¿Cuál es tu mayor desafío hoy? <span class="lbl-opt">(opcional)</span></label>
              <textarea id="wzChallenge" rows="3" placeholder="Ej: Tengo poca presencia en redes, no genero ventas online..."></textarea>
            </div>
            <div class="wz-actions wz-actions--between">
              <button class="wz-btn-back" id="wzBack2"><i class="fas fa-arrow-left"></i> Volver</button>
              <button class="wz-btn-next" id="wzNext2" disabled>Siguiente <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- PASO 3: Tipo reunión -->
          <div class="wz-step" id="wzStep3">
            <h3 class="wz-title">¿Cómo preferís<br><em>la reunión?</em></h3>
            <div class="wz-meeting-options">
              <button class="wz-meeting-card" data-value="presencial en tu local en Asunción">
                <div class="wz-meeting-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="wz-meeting-info">
                  <strong>Presencial en tu local</strong>
                  <span>Vamos a tu negocio en Asunción. Vos no te movés de tu lugar.</span>
                </div>
              </button>
              <button class="wz-meeting-card" data-value="Google Meet">
                <div class="wz-meeting-icon"><i class="fas fa-video"></i></div>
                <div class="wz-meeting-info">
                  <strong>Por Google Meet</strong>
                  <span>Nos conectamos online desde donde estés, a tu horario.</span>
                </div>
              </button>
            </div>
            <div class="wz-actions wz-actions--between">
              <button class="wz-btn-back" id="wzBack3"><i class="fas fa-arrow-left"></i> Volver</button>
              <button class="wz-btn-next" id="wzNext3" disabled>Siguiente <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- PASO 4: Datos de contacto -->
          <div class="wz-step" id="wzStep4">
            <h3 class="wz-title">Por último,<br><em>¿cómo te contactamos?</em></h3>
            <div class="fg">
              <label>Tu nombre <span class="lbl-req">*</span></label>
              <input type="text" id="wzName" placeholder="¿Cómo te llamás?">
            </div>
            <div class="fg">
              <label>Tu WhatsApp <span class="lbl-req">*</span></label>
              <input type="tel" id="wzPhone" placeholder="+595 9X XXX XXXX">
            </div>
            <div class="wz-actions wz-actions--between">
              <button class="wz-btn-back" id="wzBack4"><i class="fas fa-arrow-left"></i> Volver</button>
              <button class="wz-btn-submit" id="wzSubmit" disabled>
                <i class="fab fa-whatsapp"></i> Agendar mi consulta gratuita
              </button>
            </div>
            <p class="wz-trust"><i class="fas fa-lock"></i> Sin spam. Solo te contactamos para agendar.</p>
          </div>

          <!-- SUCCESS -->
          <div class="wz-success" id="wzSuccess">
            <div class="wz-success-icon"><i class="fas fa-check-circle"></i></div>
            <h3 class="wz-success-title">¡Listo, <span id="wzSuccessName">amigo</span>!</h3>
            <p class="wz-success-text">Te contactamos en menos de 24 horas para confirmar tu reunión.</p>
            <a href="#" class="btn btn-gold" id="wzSuccessWa" target="_blank">
              <i class="fab fa-whatsapp"></i> Escribir por WhatsApp ahora
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ FOOTER ═══════════════════════════════ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <a href="#inicio" class="nav-logo nav-logo--white" style="margin-bottom:16px;display:inline-flex">
            <img src="/static/images/logo.webp" alt="The Fresh Cycle" class="logo-img">
            <span>THE FRESH CYCLE</span>
          </a>
          <p>Agencia de marketing digital en Asunción, Paraguay. Impulsamos tu negocio con tecnología, diseño y estrategia.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/595981234567" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
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
            <li><a href="#servicios">CRM &amp; Automatización</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li><a href="#contacto">Agenda Gratuita</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/595981234567" target="_blank"><i class="fab fa-whatsapp" style="color:#25D366"></i> +595 98 123 4567</a></li>
            <li><a href="mailto:info@thefreshcycle.com"><i class="fas fa-envelope" style="color:var(--gold)"></i> info@thefreshcycle.com</a></li>
            <li><a href="#"><i class="fab fa-instagram" style="color:#E1306C"></i> @thefreshcycle</a></li>
            <li><span><i class="fas fa-map-marker-alt" style="color:var(--gold)"></i> Asunción, Paraguay</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 The Fresh Cycle. Todos los derechos reservados.</p>
        <div class="footer-legal">
          <a href="#" onclick="openLegalModal('privacy');return false;">Política de Privacidad</a>
          <span>·</span>
          <a href="#" onclick="openLegalModal('terms');return false;">Términos de Uso</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" class="wa-float" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
    <span class="wa-tooltip">¡Escríbenos!</span>
  </a>

  <!-- Modal Legal -->
  <div class="legal-modal" id="legalModal" role="dialog" aria-modal="true">
    <div class="legal-modal-box">
      <button class="legal-close" id="legalClose"><i class="fas fa-times"></i></button>
      <div id="legalContent"></div>
    </div>
  </div>

  <script src="/static/app.js"></script>
</body>
</html>
`)
})

export default app
