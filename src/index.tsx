import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Fresh Cycle | Agencia de Marketing Digital</title>
  <meta name="description" content="Impulsamos tu negocio con diseños profesionales, tráfico pago y generación de leads. Asunción, Paraguay.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
  <link rel="stylesheet" href="/static/styles.css">
</head>
<body>

  <!-- ===================== NAVBAR ===================== -->
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
        <span class="logo-text">THE FRESH CYCLE</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">
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

  <!-- ===================== HERO ===================== -->
  <section class="hero" id="inicio">
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
        <div class="hero-badge animate-in" style="animation-delay:0.1s">
          <span class="badge-dot"></span>
          Agencia de Marketing Digital · Asunción, PY
        </div>
        <h1 class="hero-title animate-in" style="animation-delay:0.2s">
          IMPULSAMOS<br>TU NEGOCIO
        </h1>
        <p class="hero-sub animate-in" style="animation-delay:0.35s">
          Diseños profesionales + Tráfico Pago + Sistemas digitales.<br>
          Cada cliente es único, cada estrategia es personalizada.
        </p>
        <div class="hero-actions animate-in" style="animation-delay:0.5s">
          <a href="#contacto" class="btn btn-primary">
            <i class="fab fa-whatsapp"></i> Consulta Gratis
          </a>
          <a href="#servicios" class="btn btn-ghost">
            Ver Servicios <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="hero-stats animate-in" style="animation-delay:0.65s">
          <div class="stat">
            <span class="stat-number" data-target="80">0</span><span class="stat-symbol">+</span>
            <span class="stat-label">Clientes</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number" data-target="150">0</span><span class="stat-symbol">+</span>
            <span class="stat-label">Proyectos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number" data-target="3">0</span><span class="stat-symbol">x</span>
            <span class="stat-label">ROI Promedio</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <a href="#servicios"><i class="fas fa-chevron-down"></i></a>
    </div>
  </section>

  <!-- ===================== LOGOS / CONFIANZA ===================== -->
  <section class="trust-bar">
    <div class="container">
      <p class="trust-label">PLATAFORMAS CON LAS QUE TRABAJAMOS</p>
      <div class="trust-logos">
        <div class="trust-item"><i class="fab fa-meta"></i> Meta Ads</div>
        <div class="trust-item"><i class="fab fa-google"></i> Google Ads</div>
        <div class="trust-item"><i class="fab fa-tiktok"></i> TikTok Ads</div>
        <div class="trust-item"><i class="fab fa-instagram"></i> Instagram</div>
        <div class="trust-item"><i class="fab fa-facebook"></i> Facebook</div>
        <div class="trust-item"><i class="fab fa-wordpress"></i> WordPress</div>
      </div>
    </div>
  </section>

  <!-- ===================== SERVICIOS ===================== -->
  <section class="section" id="servicios">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Lo que hacemos</span>
        <h2 class="section-title">Nuestros <span class="text-green">Servicios</span></h2>
        <p class="section-sub">Soluciones digitales completas para llevar tu marca al siguiente nivel</p>
      </div>
      <div class="services-grid">

        <div class="service-card service-card--featured">
          <div class="service-icon">
            <i class="fas fa-palette"></i>
          </div>
          <div class="service-badge-tag">Más Popular</div>
          <h3>Diseños Profesionales</h3>
          <p>Posts, Stories, Reels, Flyers, Banners y toda la identidad visual de tu marca. Diseños listos para publicar, personalizados a tu estilo.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Posts + Stories para redes sociales</li>
            <li><i class="fas fa-check"></i> Diseño de identidad de marca</li>
            <li><i class="fas fa-check"></i> Material impreso y digital</li>
            <li><i class="fas fa-check"></i> Plantillas personalizadas</li>
          </ul>
          <a href="#precios" class="service-link">Ver paquetes <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Tráfico Pago</h3>
          <p>Maximiza tu alcance y convierte visitas en clientes reales. Gestión profesional de campañas en Meta Ads, Google Ads y TikTok Ads.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Estrategia y planificación</li>
            <li><i class="fas fa-check"></i> Creación de campañas</li>
            <li><i class="fas fa-check"></i> Generación de leads</li>
            <li><i class="fas fa-check"></i> Reportes mensuales</li>
          </ul>
          <a href="#contacto" class="service-link">Consultar inversión <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <h3>Sistemas Digitales</h3>
          <p>Sitios web, landing pages, e-commerce y CRMs. Tecnología al servicio de tu negocio para automatizar y escalar tus ventas.</p>
          <ul class="service-list">
            <li><i class="fas fa-check"></i> Sitios web profesionales</li>
            <li><i class="fas fa-check"></i> Landing pages de alta conversión</li>
            <li><i class="fas fa-check"></i> Tiendas online (e-commerce)</li>
            <li><i class="fas fa-check"></i> CRM y automatización</li>
          </ul>
          <a href="#contacto" class="service-link">Solicitar cotización <i class="fas fa-arrow-right"></i></a>
        </div>

      </div>
    </div>
  </section>

  <!-- ===================== COMO FUNCIONA ===================== -->
  <section class="section section--dark" id="proceso">
    <div class="container">
      <div class="section-header">
        <span class="section-tag section-tag--light">Proceso</span>
        <h2 class="section-title section-title--light">¿Cómo <span class="text-gold">trabajamos?</span></h2>
        <p class="section-sub section-sub--light">Simple, rápido y con resultados medibles</p>
      </div>
      <div class="process-grid">
        <div class="process-step">
          <div class="process-num">01</div>
          <div class="process-icon"><i class="fas fa-comments"></i></div>
          <h4>Consulta Gratuita</h4>
          <p>Nos reunimos para entender tu negocio, tus objetivos y tu presupuesto.</p>
        </div>
        <div class="process-arrow"><i class="fas fa-chevron-right"></i></div>
        <div class="process-step">
          <div class="process-num">02</div>
          <div class="process-icon"><i class="fas fa-lightbulb"></i></div>
          <h4>Estrategia</h4>
          <p>Diseñamos una estrategia personalizada para maximizar tus resultados.</p>
        </div>
        <div class="process-arrow"><i class="fas fa-chevron-right"></i></div>
        <div class="process-step">
          <div class="process-num">03</div>
          <div class="process-icon"><i class="fas fa-rocket"></i></div>
          <h4>Ejecución</h4>
          <p>Ponemos en marcha el plan: diseños, campañas y sistemas digitales.</p>
        </div>
        <div class="process-arrow"><i class="fas fa-chevron-right"></i></div>
        <div class="process-step">
          <div class="process-num">04</div>
          <div class="process-icon"><i class="fas fa-chart-bar"></i></div>
          <h4>Resultados</h4>
          <p>Medimos, optimizamos y escalamos. Tu éxito es nuestra meta.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PORTAFOLIO ===================== -->
  <section class="section" id="portafolio">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Nuestro trabajo</span>
        <h2 class="section-title">Portafolio <span class="text-green">Reciente</span></h2>
        <p class="section-sub">Proyectos reales, resultados reales</p>
      </div>

      <div class="portfolio-filter">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="diseno">Diseño</button>
        <button class="filter-btn" data-filter="web">Web</button>
        <button class="filter-btn" data-filter="ads">Ads</button>
      </div>

      <div class="portfolio-grid" id="portfolioGrid">

        <div class="portfolio-item" data-category="diseno">
          <div class="portfolio-img portfolio-img--1">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Diseño de Marca</span>
              <h4>Identidad Visual Corporativa</h4>
              <p>Branding completo para empresa local</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="web">
          <div class="portfolio-img portfolio-img--2">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Sitio Web</span>
              <h4>Landing Page de Alta Conversión</h4>
              <p>+340% de conversiones en 30 días</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--3">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Meta Ads</span>
              <h4>Campaña de Generación de Leads</h4>
              <p>Costo por lead reducido en 60%</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="diseno">
          <div class="portfolio-img portfolio-img--4">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Redes Sociales</span>
              <h4>Pack de Contenido Mensual</h4>
              <p>30 piezas profesionales / mes</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="web">
          <div class="portfolio-img portfolio-img--5">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">E-commerce</span>
              <h4>Tienda Online Completa</h4>
              <p>Integración de pagos y envíos</p>
            </div>
          </div>
        </div>

        <div class="portfolio-item" data-category="ads">
          <div class="portfolio-img portfolio-img--6">
            <div class="portfolio-overlay">
              <span class="portfolio-cat">Google Ads</span>
              <h4>Campaña de Búsqueda</h4>
              <p>ROI de 4.2x en el primer mes</p>
            </div>
          </div>
        </div>

      </div>

      <div class="portfolio-cta">
        <p>¿Quieres ver más trabajos o hablar sobre tu proyecto?</p>
        <a href="#contacto" class="btn btn-primary">Hablemos <i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </section>

  <!-- ===================== NOSOTROS ===================== -->
  <section class="section section--cream" id="nosotros">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual">
          <div class="about-card-main">
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
            <p class="about-quote">"Cada cliente es único,<br>cada estrategia es personalizada."</p>
          </div>
          <div class="about-metrics">
            <div class="about-metric">
              <i class="fas fa-star"></i>
              <div>
                <strong>4.9/5</strong>
                <span>Satisfacción</span>
              </div>
            </div>
            <div class="about-metric">
              <i class="fas fa-clock"></i>
              <div>
                <strong>24h</strong>
                <span>Respuesta</span>
              </div>
            </div>
          </div>
        </div>
        <div class="about-text">
          <span class="section-tag">Sobre nosotros</span>
          <h2 class="section-title" style="text-align:left; margin-top:12px">Somos <span class="text-green">The Fresh Cycle</span></h2>
          <p class="about-desc">Somos una agencia de marketing digital con sede en Asunción, Paraguay. Nuestra misión es simple: <strong>aumentar las ventas de nuestros clientes usando tecnología</strong> y estrategias digitales de alto impacto.</p>
          <p class="about-desc">Creemos que cada negocio tiene una historia única que merece ser contada de forma profesional. Por eso, tratamos a cada cliente de manera individual, creando soluciones a medida que generan resultados reales y medibles.</p>
          <div class="about-values">
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-bullseye"></i></div>
              <div>
                <strong>Orientados a Resultados</strong>
                <p>Cada acción que tomamos tiene un objetivo claro y medible.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-users"></i></div>
              <div>
                <strong>Cliente al Centro</strong>
                <p>Tu negocio es nuestra prioridad. Atención personalizada siempre.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon"><i class="fas fa-bolt"></i></div>
              <div>
                <strong>Tecnología e Innovación</strong>
                <p>Usamos las herramientas más actuales para mantenerte un paso adelante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PRECIOS ===================== -->
  <section class="section" id="precios">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Inversión</span>
        <h2 class="section-title">Paquetes de <span class="text-green">Diseño</span></h2>
        <p class="section-sub">Precios claros, sin sorpresas. Elige el plan que mejor se adapte a tu negocio.</p>
      </div>
      <div class="pricing-note">
        <i class="fas fa-info-circle"></i>
        Los planes de <strong>Tráfico Pago y Sistemas Digitales</strong> se cotizan según la inversión y necesidades de cada cliente.
        <a href="#contacto">Consulta gratis aquí.</a>
      </div>
      <div class="pricing-grid">

        <div class="pricing-card">
          <div class="pricing-header">
            <span class="pricing-icon"><i class="fas fa-seedling"></i></span>
            <h3>Starter</h3>
            <p class="pricing-tagline">Ideal para empezar</p>
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
          <a href="#contacto" class="btn btn-outline">Comenzar <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="pricing-card pricing-card--featured">
          <div class="pricing-popular">MÁS POPULAR</div>
          <div class="pricing-header">
            <span class="pricing-icon"><i class="fas fa-fire"></i></span>
            <h3>Pro</h3>
            <p class="pricing-tagline">Para marcas en crecimiento</p>
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
          <a href="#contacto" class="btn btn-primary">Comenzar <i class="fas fa-arrow-right"></i></a>
        </div>

        <div class="pricing-card">
          <div class="pricing-header">
            <span class="pricing-icon"><i class="fas fa-crown"></i></span>
            <h3>Premium</h3>
            <p class="pricing-tagline">Para empresas exigentes</p>
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
            <li><i class="fas fa-check"></i> Estrategia de contenido</li>
            <li><i class="fas fa-check"></i> Entrega express</li>
          </ul>
          <a href="#contacto" class="btn btn-outline">Comenzar <i class="fas fa-arrow-right"></i></a>
        </div>

      </div>
    </div>
  </section>

  <!-- ===================== TESTIMONIOS ===================== -->
  <section class="section section--dark" id="testimonios">
    <div class="container">
      <div class="section-header">
        <span class="section-tag section-tag--light">Testimonios</span>
        <h2 class="section-title section-title--light">Lo que dicen <span class="text-gold">nuestros clientes</span></h2>
      </div>
      <div class="testimonials-grid">

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"The Fresh Cycle transformó completamente la presencia digital de mi negocio. En solo 2 meses, dupliqué mis ventas gracias a las campañas de Meta Ads y los diseños profesionales."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: #C9A962">M</div>
            <div>
              <strong>María González</strong>
              <span>Dueña de tienda de ropa, Asunción</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card testimonial-card--featured">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"Excelente equipo, súper profesionales. Me hicieron el sitio web y la landing page en tiempo récord. Los resultados hablan solos: 3x más consultas desde que lanzamos la página."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: #1B4D3E">C</div>
            <div>
              <strong>Carlos Rodríguez</strong>
              <span>Constructor y desarrollador inmobiliario</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">"Lo mejor es que sienten que conocen tu negocio. El diseño de mi marca quedó perfecto y el tráfico de Google Ads superó todas mis expectativas. 100% recomendados."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: #1A1A1A">A</div>
            <div>
              <strong>Ana Martínez</strong>
              <span>Clínica estética, Asunción</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ===================== CTA BANNER ===================== -->
  <section class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text">
        <h2>¿Listo para impulsar tu negocio?</h2>
        <p>Agenda una consulta gratuita hoy. Sin compromiso, sin costo.</p>
      </div>
      <a href="#contacto" class="btn btn-white">
        <i class="fab fa-whatsapp"></i> Consulta Gratis Ahora
      </a>
    </div>
  </section>

  <!-- ===================== CONTACTO ===================== -->
  <section class="section" id="contacto">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Hablemos</span>
        <h2 class="section-title">Empecemos <span class="text-green">tu proyecto</span></h2>
        <p class="section-sub">Contáctanos hoy y recibe una consulta completamente gratis</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
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
             target="_blank" class="btn btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Escribir por WhatsApp
          </a>
        </div>
        <div class="contact-form-wrap">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label>Nombre *</label>
              <input type="text" placeholder="Tu nombre completo" required>
            </div>
            <div class="form-group">
              <label>WhatsApp / Teléfono *</label>
              <input type="tel" placeholder="+595 9X XXX XXXX" required>
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

  <!-- ===================== FOOTER ===================== -->
  <footer class="footer">
    <div class="container footer-inner">
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
          <span class="logo-text">THE FRESH CYCLE</span>
        </a>
        <p>Impulsamos tu negocio con tecnología, diseño y estrategia digital.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="footer-links">
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
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2026 The Fresh Cycle. Todos los derechos reservados. · Asunción, Paraguay</p>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/595981234567?text=Hola!%20Quiero%20una%20consulta%20gratuita" 
     class="whatsapp-float" target="_blank" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
