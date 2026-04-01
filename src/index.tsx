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
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
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
      <ul class="nav-links" id="navLinks">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#contacto" class="nav-cta"><i class="fab fa-whatsapp"></i> Consulta Gratis</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
  <section class="hero" id="inicio">
    <div class="hero-bg-shapes" aria-hidden="true">
      <div class="hbs hbs-1"></div>
      <div class="hbs hbs-2"></div>
      <div class="hbs hbs-3"></div>
    </div>

    <div class="container hero-layout">
      <!-- Texto -->
      <div class="hero-text">
        <div class="hero-pill" data-anim="fade-up" data-delay="0">
          <span class="hero-pill-dot"></span>
          Asunción, Paraguay · Digital Agency
        </div>

        <h1 class="hero-h1" data-anim="fade-up" data-delay="120">
          Diseño, tráfico<br>
          <em>y tecnología</em><br>
          que convierten.
        </h1>

        <p class="hero-sub" data-anim="fade-up" data-delay="240">
          Transformamos marcas en motores de ventas.<br>
          Estrategia construida desde cero — solo para tu negocio.
        </p>

        <div class="hero-actions" data-anim="fade-up" data-delay="360">
          <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" target="_blank" class="btn btn-gold">
            <i class="fab fa-whatsapp"></i> Consulta Gratis
          </a>
          <a href="#portafolio" class="btn btn-ghost">
            Ver trabajos <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <div class="hero-stats" data-anim="fade-up" data-delay="480">
          <div class="hstat">
            <span class="hstat-val"><span class="counter" data-target="80">0</span><sup>+</sup></span>
            <span class="hstat-lbl">Clientes activos</span>
          </div>
          <div class="hstat-sep"></div>
          <div class="hstat">
            <span class="hstat-val"><span class="counter" data-target="150">0</span><sup>+</sup></span>
            <span class="hstat-lbl">Proyectos entregados</span>
          </div>
          <div class="hstat-sep"></div>
          <div class="hstat">
            <span class="hstat-val"><span class="counter" data-target="3">0</span><sup>×</sup></span>
            <span class="hstat-lbl">ROI promedio</span>
          </div>
        </div>
      </div>

      <!-- Visual: showcase stacked cards -->
      <div class="hero-visual" data-anim="fade-left" data-delay="200">
        <div class="showcase-wrap">
          <div class="sc-card sc-main">
            <img src="https://www.genspark.ai/api/files/s/ixv4e1gv" alt="The Fresh Cycle Branding" loading="eager">
            <div class="sc-label"><span class="sc-cat">Branding Premium</span><span class="sc-name">The Fresh Cycle</span></div>
          </div>
          <div class="sc-card sc-top">
            <img src="https://www.genspark.ai/api/files/s/aMr4O4kS" alt="Vitrine Motors" loading="lazy">
            <div class="sc-label"><span class="sc-cat">Automotriz</span><span class="sc-name">Vitrine Motors</span></div>
          </div>
          <div class="sc-card sc-bot">
            <img src="https://www.genspark.ai/api/files/s/dINlCKAH" alt="TAG Publicidad" loading="lazy">
            <div class="sc-label"><span class="sc-cat">Campaña B2B</span><span class="sc-name">TAG Publicidad</span></div>
          </div>
          <div class="sc-badge">
            <i class="fas fa-arrow-trend-up"></i>
            <div><strong>+240%</strong><span>alcance orgánico</span></div>
          </div>
          <div class="sc-badge-2">
            <i class="fas fa-star"></i>
            <div><strong>4.9/5</strong><span>satisfacción</span></div>
          </div>
        </div>
      </div>
    </div>

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

      <div class="services-grid" data-anim="fade-up" data-delay="100">

        <!-- Card Destaque -->
        <div class="svc-card svc-featured">
          <div class="svc-badge-top">Más solicitado</div>
          <div class="svc-number">01</div>
          <div class="svc-icon-wrap svc-icon-gold"><i class="fas fa-palette"></i></div>
          <h3 class="svc-title">Diseños <em>Profesionales</em></h3>
          <p class="svc-desc">Posts, Stories, Reels, Flyers y toda la identidad visual. Diseños que comunican, convierten y se destacan en el feed.</p>
          <ul class="svc-list">
            <li><i class="fas fa-check-circle"></i> Posts + Stories para redes sociales</li>
            <li><i class="fas fa-check-circle"></i> Identidad de marca completa</li>
            <li><i class="fas fa-check-circle"></i> Reels y videos animados</li>
            <li><i class="fas fa-check-circle"></i> Material impreso y digital</li>
            <li><i class="fas fa-check-circle"></i> Plantillas editables entregadas</li>
          </ul>
          <a href="#precios" class="svc-cta svc-cta--gold">Ver paquetes y precios <i class="fas fa-arrow-right"></i></a>
        </div>

        <!-- Card 2 -->
        <div class="svc-card">
          <div class="svc-number">02</div>
          <div class="svc-icon-wrap"><i class="fas fa-chart-line"></i></div>
          <h3 class="svc-title">Tráfico Pago <em>&amp; Leads</em></h3>
          <p class="svc-desc">Campañas en Meta Ads, Google Ads y TikTok Ads con estrategia y optimización continua.</p>
          <ul class="svc-list">
            <li><i class="fas fa-check-circle"></i> Meta Ads · Google Ads · TikTok Ads</li>
            <li><i class="fas fa-check-circle"></i> Generación de leads calificados</li>
            <li><i class="fas fa-check-circle"></i> Reportes mensuales de ROI</li>
            <li><i class="fas fa-check-circle"></i> Inversión según tu presupuesto</li>
          </ul>
          <a href="#contacto" class="svc-cta">Consultar inversión <i class="fas fa-arrow-right"></i></a>
        </div>

        <!-- Card 3 -->
        <div class="svc-card">
          <div class="svc-number">03</div>
          <div class="svc-icon-wrap"><i class="fas fa-laptop-code"></i></div>
          <h3 class="svc-title">Sistemas <em>Digitales</em></h3>
          <p class="svc-desc">Sitios web, landing pages y e-commerce diseñados para convertir visitantes en clientes.</p>
          <ul class="svc-list">
            <li><i class="fas fa-check-circle"></i> Sitios web profesionales</li>
            <li><i class="fas fa-check-circle"></i> Landing pages de alta conversión</li>
            <li><i class="fas fa-check-circle"></i> E-commerce completo</li>
            <li><i class="fas fa-check-circle"></i> CRM y automatización</li>
          </ul>
          <a href="#contacto" class="svc-cta">Solicitar cotización <i class="fas fa-arrow-right"></i></a>
        </div>

      </div>
    </div>
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
        <div class="process-line" aria-hidden="true"></div>

        <div class="process-step">
          <div class="ps-circle"><span>01</span></div>
          <div class="ps-icon"><i class="fas fa-comments"></i></div>
          <h4>Consulta Gratuita</h4>
          <p>Reunión sin costo para entender tu negocio, objetivos y presupuesto.</p>
          <span class="ps-time"><i class="fas fa-clock"></i> Día 1</span>
        </div>

        <div class="process-step">
          <div class="ps-circle"><span>02</span></div>
          <div class="ps-icon"><i class="fas fa-lightbulb"></i></div>
          <h4>Estrategia Personalizada</h4>
          <p>Diseñamos un plan a medida según tu industria, audiencia y metas.</p>
          <span class="ps-time"><i class="fas fa-clock"></i> Días 2–3</span>
        </div>

        <div class="process-step">
          <div class="ps-circle"><span>03</span></div>
          <div class="ps-icon"><i class="fas fa-rocket"></i></div>
          <h4>Ejecución &amp; Lanzamiento</h4>
          <p>Creamos diseños, campañas y sistemas con velocidad y calidad premium.</p>
          <span class="ps-time"><i class="fas fa-clock"></i> Semana 1</span>
        </div>

        <div class="process-step">
          <div class="ps-circle"><span>04</span></div>
          <div class="ps-icon"><i class="fas fa-chart-bar"></i></div>
          <h4>Resultados &amp; Escalamiento</h4>
          <p>Medimos, optimizamos y escalamos. ROI visible en tiempo real.</p>
          <span class="ps-time"><i class="fas fa-clock"></i> Mes 1+</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ PORTAFOLIO ═══════════════════════════════ -->
  <section class="section" id="portafolio">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill">Nuestro trabajo</div>
        <h2 class="sec-title">Portafolio <em>reciente</em></h2>
        <p class="sec-sub">Proyectos reales · Clientes reales · Resultados medibles</p>
      </div>

      <!-- Filtros -->
      <div class="pf-filters" data-anim="fade-up" data-delay="80">
        <button class="pf-filter active" data-filter="all">Todos <span>9</span></button>
        <button class="pf-filter" data-filter="diseno"><i class="fas fa-palette"></i> Diseño</button>
        <button class="pf-filter" data-filter="ads"><i class="fas fa-bullhorn"></i> Ads</button>
        <button class="pf-filter" data-filter="web"><i class="fas fa-globe"></i> Web &amp; Email</button>
        <button class="pf-filter" data-filter="marca"><i class="fas fa-gem"></i> Branding</button>
      </div>

      <!-- Carrossel -->
      <div class="pf-carousel-wrap" data-anim="fade-up" data-delay="160">
        <button class="pf-arrow pf-arrow-prev" id="pfPrev" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
        <button class="pf-arrow pf-arrow-next" id="pfNext" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>

        <div class="pf-track" id="pfTrack">

          <!-- 1 -->
          <div class="pf-slide" data-cat="diseno">
            <div class="pf-card" data-title="LBH Home & Hotel — Verano Sale" data-desc="Campaña Verano Sale · Toallas 30% OFF. Diseño minimalista con tipografía bold y paleta coral/teal." data-img="https://www.genspark.ai/api/files/s/ccNUg98O" data-result="+180% engagement">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/ccNUg98O" alt="LBH Verano Sale" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-diseno">Diseño Social</span>
                <h3>Campaña "Verano Sale"</h3>
                <p>LBH Home &amp; Hotel · Post de alto impacto</p>
                <div class="pf-metric"><i class="fas fa-chart-line"></i> +180% engagement</div>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="pf-slide" data-cat="diseno">
            <div class="pf-card" data-title="LBH — 3 Cuotas Sin Interés" data-desc="Post tipográfico de alto impacto con layout limpio y jerarquía visual clara." data-img="https://www.genspark.ai/api/files/s/xGOqNK9w" data-result="">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/xGOqNK9w" alt="LBH 3 Cuotas" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-diseno">Diseño Social</span>
                <h3>3 Cuotas Sin Interés</h3>
                <p>LBH Home &amp; Hotel · Post tipográfico</p>
              </div>
            </div>
          </div>

          <!-- 3 -->
          <div class="pf-slide" data-cat="ads">
            <div class="pf-card" data-title="TAG Publicidad — VP Pantallas LED" data-desc="Campaña tech con estética bold: degradado rojo profundo, acento cyan, ilustración 3D de pantalla LED." data-img="https://www.genspark.ai/api/files/s/dINlCKAH" data-result="+320% alcance B2B">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/dINlCKAH" alt="TAG Pantallas LED" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-ads">Campaña Ads</span>
                <h3>VP Pantallas Full HD</h3>
                <p>TAG Publicidad · Campaña B2B</p>
                <div class="pf-metric"><i class="fas fa-users"></i> +320% alcance B2B</div>
              </div>
            </div>
          </div>

          <!-- 4 -->
          <div class="pf-slide" data-cat="diseno">
            <div class="pf-card" data-title="TAG — Uniformes Corporativos" data-desc="Post premium oscuro para uniformes con bordado. Flat-lay editorial, paleta vino y blanco." data-img="https://www.genspark.ai/api/files/s/K0DN7yr0" data-result="">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/K0DN7yr0" alt="TAG Uniformes" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-diseno">Diseño B2B</span>
                <h3>Uniformes — Bordado Premium</h3>
                <p>TAG Publicidad · Editorial corporativo</p>
              </div>
            </div>
          </div>

          <!-- 5 -->
          <div class="pf-slide" data-cat="ads">
            <div class="pf-card" data-title="Vitrine Motors — Nuevos Esta Semana" data-desc="Campaña automotriz de alto impacto. Fondo oscuro con iluminación naranja, siluetas de vehículos." data-img="https://www.genspark.ai/api/files/s/aMr4O4kS" data-result="+12k visualizaciones">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/aMr4O4kS" alt="Vitrine Motors" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-ads">Campaña Automotriz</span>
                <h3>+50 Vehículos Nuevos</h3>
                <p>Vitrine Motors · Lanzamiento semanal</p>
                <div class="pf-metric"><i class="fas fa-eye"></i> +12k visualizaciones</div>
              </div>
            </div>
          </div>

          <!-- 6 -->
          <div class="pf-slide" data-cat="web">
            <div class="pf-card" data-title="VitalPet — Email Marketing" data-desc="Template de email marketing responsive con diseño limpio, botón CTA naranja y layout de 3 columnas." data-img="https://www.genspark.ai/api/files/s/FheVzaAL" data-result="">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/FheVzaAL" alt="VitalPet Email" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-web">Email Marketing</span>
                <h3>Template Email Responsive</h3>
                <p>VitalPet · Compatible Gmail &amp; Outlook</p>
              </div>
            </div>
          </div>

          <!-- 7 -->
          <div class="pf-slide" data-cat="marca">
            <div class="pf-card" data-title="TAG — Regalos Empresariales" data-desc="Flat-lay de lujo sobre fondo burgundy oscuro. Artículos personalizados: cuadernos, lapiceras, USB, termos." data-img="https://www.genspark.ai/api/files/s/WmblHbWG" data-result="">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/WmblHbWG" alt="TAG Regalos" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-marca">Branding Corporativo</span>
                <h3>Regalos Empresariales</h3>
                <p>TAG Publicidad · Personalización premium</p>
              </div>
            </div>
          </div>

          <!-- 8 -->
          <div class="pf-slide" data-cat="ads">
            <div class="pf-card" data-title="TAG — Cotiza Ahora (Story)" data-desc="Story ad vertical con fondo crimson, diagonal de luz, mockups de uniformes y merchandising." data-img="https://www.genspark.ai/api/files/s/cA91NeG6" data-result="">
              <div class="pf-img-wrap pf-img-vertical">
                <img src="https://www.genspark.ai/api/files/s/cA91NeG6" alt="TAG Story" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-ads">Story · Vertical Ad</span>
                <h3>Cotiza Ahora</h3>
                <p>TAG Publicidad · Story uniforme &amp; merch</p>
              </div>
            </div>
          </div>

          <!-- 9 -->
          <div class="pf-slide" data-cat="marca">
            <div class="pf-card" data-title="The Fresh Cycle — Identidad Visual" data-desc="Identidad de marca aplicada en papelería de lujo. Verde foresta, crema y dorado. Cuadernos, tarjeteros, lapicera dorada con monograma FC." data-img="https://www.genspark.ai/api/files/s/ixv4e1gv" data-result="Identidad propia">
              <div class="pf-img-wrap">
                <img src="https://www.genspark.ai/api/files/s/ixv4e1gv" alt="TFC Branding" loading="lazy">
                <div class="pf-overlay"><button class="pf-zoom-btn"><i class="fas fa-expand-alt"></i></button></div>
              </div>
              <div class="pf-info">
                <span class="pf-tag pf-tag-marca">Branding Premium</span>
                <h3>Identidad Visual Completa</h3>
                <p>The Fresh Cycle · Papelería de lujo</p>
                <div class="pf-metric pf-metric-gold"><i class="fas fa-award"></i> Identidad de marca propia</div>
              </div>
            </div>
          </div>

        </div><!-- /pf-track -->

        <!-- Dots -->
        <div class="pf-dots" id="pfDots"></div>
      </div>

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

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true">
    <button class="lb-close" id="lbClose"><i class="fas fa-times"></i></button>
    <button class="lb-nav lb-prev" id="lbPrev"><i class="fas fa-chevron-left"></i></button>
    <button class="lb-nav lb-next" id="lbNext"><i class="fas fa-chevron-right"></i></button>
    <div class="lb-content">
      <img id="lbImg" src="" alt="">
      <div class="lb-caption">
        <h4 id="lbTitle"></h4>
        <p id="lbDesc"></p>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════ NOSOTROS ═══════════════════════════════ -->
  <section class="section section-cream" id="nosotros">
    <div class="container">
      <div class="about-wrap">

        <div class="about-visual" data-anim="fade-right">
          <div class="about-card-main">
            <div class="about-logo-lg">
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
          <div class="about-metrics">
            <div class="about-metric">
              <div class="am-icon"><i class="fas fa-star"></i></div>
              <div><strong>4.9/5</strong><span>Satisfacción</span></div>
            </div>
            <div class="about-metric">
              <div class="am-icon"><i class="fas fa-clock"></i></div>
              <div><strong>24h</strong><span>Respuesta</span></div>
            </div>
            <div class="about-metric">
              <div class="am-icon"><i class="fas fa-handshake"></i></div>
              <div><strong>100%</strong><span>Retención</span></div>
            </div>
          </div>
        </div>

        <div class="about-text" data-anim="fade-up" data-delay="100">
          <div class="sec-pill">Sobre nosotros</div>
          <h2 class="sec-title">Somos <em>The Fresh Cycle</em></h2>
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

          <div class="about-team">
            <div class="team-avatars">
              <div class="team-av">AN</div>
              <div class="team-av">MR</div>
              <div class="team-av">LC</div>
            </div>
            <p><strong>Equipo especializado &amp; dedicado</strong><br>Diseñadores, estrategas y desarrolladores enfocados en tu crecimiento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ PRECIOS ═══════════════════════════════ -->
  <section class="section" id="precios">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill">Inversión</div>
        <h2 class="sec-title">Paquetes de <em>diseño</em></h2>
        <p class="sec-sub">Precios transparentes, sin sorpresas. Elige el plan ideal para tu negocio.</p>
      </div>

      <div class="pricing-note" data-anim="fade-up" data-delay="60">
        <i class="fas fa-info-circle"></i>
        Los planes de <strong>Tráfico Pago y Sistemas Digitales</strong> se cotizan según necesidades.
        <a href="#contacto">→ Consulta gratis</a>
      </div>

      <div class="pricing-grid" data-anim="fade-up" data-delay="120">

        <!-- Starter -->
        <div class="price-card">
          <div class="price-header">
            <div class="price-emoji">🌱</div>
            <h3>Starter</h3>
            <p>Ideal para empezar tu presencia digital</p>
          </div>
          <div class="price-amount">
            <span class="price-currency">USD</span>
            <span class="price-number">199</span>
            <span class="price-per">/mes</span>
          </div>
          <ul class="price-features">
            <li class="yes"><i class="fas fa-check"></i> 12 posts para redes sociales</li>
            <li class="yes"><i class="fas fa-check"></i> 8 stories diseñadas</li>
            <li class="yes"><i class="fas fa-check"></i> 2 revisiones por pieza</li>
            <li class="yes"><i class="fas fa-check"></i> Entrega en 5 días hábiles</li>
            <li class="yes"><i class="fas fa-check"></i> Formatos para todas las redes</li>
            <li class="no"><i class="fas fa-times"></i> Diseño de marca</li>
            <li class="no"><i class="fas fa-times"></i> Reels / Videos</li>
          </ul>
          <a href="#contacto" class="btn btn-outline btn-full">Empezar Ahora</a>
        </div>

        <!-- Pro FEATURED -->
        <div class="price-card price-featured">
          <div class="price-popular"><i class="fas fa-fire"></i> Más Popular</div>
          <div class="price-header">
            <div class="price-emoji">⚡</div>
            <h3>Pro</h3>
            <p>Para marcas que quieren crecer de verdad</p>
          </div>
          <div class="price-amount">
            <span class="price-currency">USD</span>
            <span class="price-number">349</span>
            <span class="price-per">/mes</span>
          </div>
          <div class="price-saving">Ahorrás USD 150 vs. contratar por separado</div>
          <ul class="price-features">
            <li class="yes"><i class="fas fa-check-circle"></i> <strong>20 posts</strong> para redes sociales</li>
            <li class="yes"><i class="fas fa-check-circle"></i> <strong>16 stories</strong> diseñadas</li>
            <li class="yes"><i class="fas fa-check-circle"></i> <strong>4 Reels</strong> / Videos cortos</li>
            <li class="yes"><i class="fas fa-check-circle"></i> Revisiones <strong>ilimitadas</strong></li>
            <li class="yes"><i class="fas fa-check-circle"></i> Entrega en <strong>3 días hábiles</strong></li>
            <li class="yes"><i class="fas fa-check-circle"></i> Diseño de <strong>marca incluido</strong></li>
            <li class="yes"><i class="fas fa-check-circle"></i> Soporte prioritario <strong>24h</strong></li>
          </ul>
          <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20el%20plan%20Pro%20de%20The%20Fresh%20Cycle" target="_blank" class="btn btn-gold btn-full">
            <i class="fab fa-whatsapp"></i> Quiero el Plan Pro
          </a>
          <p class="price-guarantee"><i class="fas fa-shield-alt"></i> Sin permanencia · Cancelá cuando quieras</p>
        </div>

        <!-- Premium -->
        <div class="price-card">
          <div class="price-header">
            <div class="price-emoji">👑</div>
            <h3>Premium</h3>
            <p>Para empresas exigentes y en expansión</p>
          </div>
          <div class="price-amount">
            <span class="price-currency">USD</span>
            <span class="price-number">599</span>
            <span class="price-per">/mes</span>
          </div>
          <ul class="price-features">
            <li class="yes"><i class="fas fa-check"></i> 30+ piezas mensuales</li>
            <li class="yes"><i class="fas fa-check"></i> Stories + Reels ilimitados</li>
            <li class="yes"><i class="fas fa-check"></i> Diseño de campañas publicitarias</li>
            <li class="yes"><i class="fas fa-check"></i> Material impreso y digital</li>
            <li class="yes"><i class="fas fa-check"></i> Gestor de cuenta dedicado</li>
            <li class="yes"><i class="fas fa-check"></i> Estrategia de contenido mensual</li>
            <li class="yes"><i class="fas fa-check"></i> Entrega express garantizada</li>
          </ul>
          <a href="#contacto" class="btn btn-outline btn-full">Empezar Ahora</a>
        </div>

      </div>

      <!-- Trust bar preços -->
      <div class="pricing-trust" data-anim="fade-up" data-delay="160">
        <div class="pt-item"><i class="fas fa-lock"></i> Sin permanencia</div>
        <div class="pt-sep"></div>
        <div class="pt-item"><i class="fas fa-undo"></i> Cancelá cuando quieras</div>
        <div class="pt-sep"></div>
        <div class="pt-item"><i class="fas fa-comments"></i> Soporte en español</div>
        <div class="pt-sep"></div>
        <div class="pt-item"><i class="fas fa-bolt"></i> Entrega en 3–5 días</div>
        <div class="pt-sep"></div>
        <div class="pt-item"><i class="fas fa-file-invoice-dollar"></i> Factura incluida</div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ TESTIMONIOS CARRUSEL ═══════════════════════════════ -->
  <section class="section section-dark" id="testimonios">
    <div class="container">
      <div class="section-header" data-anim="fade-up">
        <div class="sec-pill sec-pill--light">Resultados reales</div>
        <h2 class="sec-title sec-title--light">Lo que dicen <em>nuestros clientes</em></h2>
        <p class="sec-sub sec-sub--light">Resultados reales de negocios reales en Paraguay</p>
      </div>

      <div class="testi-carousel" data-anim="fade-up" data-delay="100">
        <div class="testi-track" id="testiTrack">

          <div class="testi-slide">
            <div class="testi-card">
              <div class="testi-result"><i class="fas fa-chart-line"></i> +200% ventas en 2 meses</div>
              <div class="testi-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="testi-text">"Desde que empecé con The Fresh Cycle, mis ventas se duplicaron. Los diseños son increíbles y las campañas de Meta Ads realmente funcionan. Respondieron siempre el mismo día."</p>
              <div class="testi-author">
                <div class="testi-av" style="background:linear-gradient(135deg,#C9A962,#a88640)">MG</div>
                <div>
                  <strong>María G.</strong>
                  <span>Boutique de ropa · Asunción</span>
                  <span class="testi-service">Diseño + Meta Ads</span>
                </div>
              </div>
            </div>
          </div>

          <div class="testi-slide">
            <div class="testi-card testi-card-featured">
              <div class="testi-result testi-result-gold"><i class="fas fa-users"></i> 3× más consultas</div>
              <div class="testi-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="testi-text">"Me hicieron el sitio web y la landing page en tiempo récord. Desde el lanzamiento, triplicamos las consultas de clientes nuevos. Equipo profesional, entrega puntual."</p>
              <div class="testi-author">
                <div class="testi-av" style="background:linear-gradient(135deg,#1B4D3E,#2a6354)">CR</div>
                <div>
                  <strong>Carlos R.</strong>
                  <span>Inmobiliaria · Asunción</span>
                  <span class="testi-service">Landing Page + Web</span>
                </div>
              </div>
            </div>
          </div>

          <div class="testi-slide">
            <div class="testi-card">
              <div class="testi-result"><i class="fas fa-dollar-sign"></i> ROI 4× en el primer mes</div>
              <div class="testi-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="testi-text">"El diseño de marca quedó exactamente como lo imaginé. Las campañas de Google Ads superaron todas mis expectativas. El mejor dinero que invertí en marketing."</p>
              <div class="testi-author">
                <div class="testi-av" style="background:linear-gradient(135deg,#2a6354,#1B4D3E)">AM</div>
                <div>
                  <strong>Ana M.</strong>
                  <span>Clínica estética · Asunción</span>
                  <span class="testi-service">Branding + Google Ads</span>
                </div>
              </div>
            </div>
          </div>

          <div class="testi-slide">
            <div class="testi-card">
              <div class="testi-result"><i class="fas fa-bolt"></i> +85% tráfico web en 30 días</div>
              <div class="testi-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="testi-text">"Hicieron toda nuestra identidad visual y el e-commerce. El resultado superó todas las expectativas. Nuestros clientes comentan que el sitio se ve muy profesional."</p>
              <div class="testi-author">
                <div class="testi-av" style="background:linear-gradient(135deg,#a88640,#C9A962)">JP</div>
                <div>
                  <strong>Juan P.</strong>
                  <span>Tienda de electrónica · Asunción</span>
                  <span class="testi-service">E-commerce + Branding</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Controles -->
        <div class="testi-controls">
          <button class="testi-arrow" id="testiPrev"><i class="fas fa-chevron-left"></i></button>
          <div class="testi-dots" id="testiDots"></div>
          <button class="testi-arrow" id="testiNext"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>

      <!-- Métricas -->
      <div class="trust-metrics" data-anim="fade-up" data-delay="200">
        <div class="tm-item">
          <strong>4.9</strong>
          <div class="tm-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <span>Calificación promedio</span>
        </div>
        <div class="tm-sep"></div>
        <div class="tm-item"><strong>24h</strong><span>Tiempo de respuesta</span></div>
        <div class="tm-sep"></div>
        <div class="tm-item"><strong>100%</strong><span>Clientes que repiten</span></div>
        <div class="tm-sep"></div>
        <div class="tm-item"><strong>0</strong><span>Clientes insatisfechos</span></div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ CTA BANNER ═══════════════════════════════ -->
  <section class="cta-band">
    <div class="cta-band-bg" aria-hidden="true"></div>
    <div class="container cta-band-inner">
      <div class="cta-band-text">
        <div class="cta-band-pill"><span class="cta-dot"></span> Atendiendo nuevos clientes esta semana</div>
        <h2>¿Tu competencia ya<br>está online?</h2>
        <p>Consulta <strong>gratuita</strong> · Sin compromiso · Respondemos en menos de <strong>24h</strong></p>
      </div>
      <div class="cta-band-action">
        <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" target="_blank" class="btn btn-white">
          <i class="fab fa-whatsapp"></i> Consulta Gratuita Ahora
        </a>
        <span class="cta-band-micro">Sin tarjeta · Sin permanencia</span>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════ CONTACTO ═══════════════════════════════ -->
  <section class="section" id="contacto">
    <div class="container">
      <div class="contact-wrap">

        <!-- Info -->
        <div class="contact-info" data-anim="fade-right">
          <div class="sec-pill">Contacto</div>
          <h2 class="sec-title">Hablemos de<br><em>tu proyecto</em></h2>
          <p class="contact-sub">Respondemos en menos de 24 horas. Sin compromiso, sin presión.</p>

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

          <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" target="_blank" class="btn btn-gold" style="margin-top:32px;width:100%;justify-content:center">
            <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
          </a>
        </div>

        <!-- Formulario -->
        <div class="contact-form-box" data-anim="fade-up" data-delay="100">
          <h3 class="form-title">Empecemos tu <em>proyecto</em></h3>
          <p class="form-sub">Completa el formulario y te contactamos en menos de 24 horas</p>

          <form class="contact-form" id="contactForm">
            <div class="form-row-2">
              <div class="fg">
                <label>Nombre *</label>
                <input type="text" placeholder="Tu nombre completo" required>
              </div>
              <div class="fg">
                <label>WhatsApp *</label>
                <input type="tel" placeholder="+595 9X XXX XXXX" required>
              </div>
            </div>
            <div class="fg">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com">
            </div>

            <div class="fg">
              <label>Servicio de interés</label>
              <div class="service-chips">
                <label class="chip">
                  <input type="radio" name="servicio" value="Diseño & Contenido" required>
                  <span><i class="fas fa-palette"></i> Diseño</span>
                </label>
                <label class="chip">
                  <input type="radio" name="servicio" value="Tráfico Pago">
                  <span><i class="fas fa-chart-line"></i> Tráfico Pago</span>
                </label>
                <label class="chip">
                  <input type="radio" name="servicio" value="Sitio Web">
                  <span><i class="fas fa-laptop-code"></i> Web</span>
                </label>
                <label class="chip">
                  <input type="radio" name="servicio" value="Pack Completo">
                  <span><i class="fas fa-star"></i> Pack Completo</span>
                </label>
              </div>
            </div>

            <div class="fg">
              <label>Mensaje <span class="lbl-opt">(opcional)</span></label>
              <textarea rows="3" placeholder="¿Algo más que quieras contarnos?"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full">
              Enviar Consulta <i class="fab fa-whatsapp"></i>
            </button>
            <p class="form-trust"><i class="fas fa-shield-alt"></i> Sin compromiso · Respondemos en &lt;24h · 100% gratuita</p>
          </form>
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
            <li><a href="#precios">Precios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
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

  <!-- Notificação de formulário enviado -->
  <div class="form-toast" id="formToast">
    <i class="fas fa-check-circle"></i>
    <span>¡Mensaje enviado! Te contactamos en &lt;24h.</span>
  </div>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
