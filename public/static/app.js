/* ================================================================
   THE FRESH CYCLE — JavaScript v3
   Modules: Navbar · Scroll Animations · Counters
            Portfolio Carousel + Filters + Lightbox
            Testimonials Carousel · Contact Form · Legal Modal
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────
     1. NAVBAR — scroll + mobile menu
  ────────────────────────────────────────── */
  const navbar     = document.getElementById('navbar');
  const navToggle  = document.getElementById('navToggle');
  const navLinks   = document.getElementById('navLinks');
  const navItems   = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections   = document.querySelectorAll('section[id]');

  // Scroll: adiciona classe .scrolled
  const handleNavScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Active link no scroll
  const updateActiveNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 150) current = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('nav-active', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Mobile toggle
  navToggle?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Fecha ao clicar em link
  navItems.forEach(a => {
    a.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      navToggle?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', e => {
    if (navLinks?.classList.contains('open')
        && !navLinks.contains(e.target)
        && !navToggle?.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });


  /* ──────────────────────────────────────────
     2. SCROLL ANIMATIONS (Intersection Observer)
  ────────────────────────────────────────── */
  const animEls = document.querySelectorAll('[data-anim]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(() => {
        el.classList.add('is-visible');
      }, delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  animEls.forEach(el => observer.observe(el));


  /* ──────────────────────────────────────────
     3. COUNTERS (hero stats)
  ────────────────────────────────────────── */
  const counters = document.querySelectorAll('.counter');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const start  = performance.now();

      const easeOut = t => 1 - Math.pow(1 - t, 3);

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOut(progress) * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));


  /* ──────────────────────────────────────────
     4. PORTFOLIO — Filtros + Carrossel + Lightbox
  ────────────────────────────────────────── */
  const pfTrack   = document.getElementById('pfTrack');
  const pfPrev    = document.getElementById('pfPrev');
  const pfNext    = document.getElementById('pfNext');
  const pfDotsWrap = document.getElementById('pfDots');
  const pfFilters = document.querySelectorAll('.pf-filter');
  const pfSlides  = Array.from(document.querySelectorAll('.pf-slide'));

  let pfIndex       = 0;
  let pfVisible     = [];   // slides visíveis após filtro
  let pfSlidesPerView = getSlidesPerView();

  function getSlidesPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 1;
    return 3;
  }

  // Filtro
  function applyFilter(cat) {
    pfIndex = 0;
    pfSlides.forEach(slide => {
      const match = cat === 'all' || slide.dataset.cat === cat;
      slide.classList.toggle('hidden', !match);
    });
    pfVisible = pfSlides.filter(s => !s.classList.contains('hidden'));
    buildDots();
    renderCarousel();
  }

  pfFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      pfFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // Dots
  function buildDots() {
    if (!pfDotsWrap) return;
    const pages = Math.ceil(pfVisible.length / pfSlidesPerView);
    pfDotsWrap.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'pf-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Página ${i + 1}`);
      dot.addEventListener('click', () => {
        pfIndex = i * pfSlidesPerView;
        pfIndex = Math.min(pfIndex, Math.max(0, pfVisible.length - pfSlidesPerView));
        renderCarousel();
        updateDots();
      });
      pfDotsWrap.appendChild(dot);
    }
  }

  function updateDots() {
    if (!pfDotsWrap) return;
    const dots = pfDotsWrap.querySelectorAll('.pf-dot');
    const page = Math.floor(pfIndex / pfSlidesPerView);
    dots.forEach((d, i) => d.classList.toggle('active', i === page));
  }

  function renderCarousel() {
    if (!pfTrack) return;
    // Calcula offset com base nos slides visíveis
    const gapPx = 24;
    const trackWidth = pfTrack.parentElement?.clientWidth || 0;
    const slideWidth = (trackWidth - gapPx * (pfSlidesPerView - 1)) / pfSlidesPerView;

    // Move apenas slides visíveis
    pfVisible.forEach((slide, i) => {
      slide.style.display = '';
    });

    const offset = pfIndex * (slideWidth + gapPx);
    pfTrack.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }

  function pfGoNext() {
    const maxIndex = Math.max(0, pfVisible.length - pfSlidesPerView);
    pfIndex = Math.min(pfIndex + pfSlidesPerView, maxIndex);
    renderCarousel();
    updateDots();
  }
  function pfGoPrev() {
    pfIndex = Math.max(0, pfIndex - pfSlidesPerView);
    renderCarousel();
    updateDots();
  }

  pfNext?.addEventListener('click', pfGoNext);
  pfPrev?.addEventListener('click', pfGoPrev);

  // Touch/swipe no carrossel
  let pfTouchStart = 0;
  pfTrack?.addEventListener('touchstart', e => {
    pfTouchStart = e.touches[0].clientX;
  }, { passive: true });
  pfTrack?.addEventListener('touchend', e => {
    const diff = pfTouchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? pfGoNext() : pfGoPrev();
    }
  });

  // Resize
  window.addEventListener('resize', () => {
    pfSlidesPerView = getSlidesPerView();
    pfIndex = 0;
    buildDots();
    renderCarousel();
  });

  // Init
  applyFilter('all');


  /* ──── Lightbox ──── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbTitle  = document.getElementById('lbTitle');
  const lbDesc   = document.getElementById('lbDesc');
  const lbClose  = document.getElementById('lbClose');
  const lbPrev   = document.getElementById('lbPrev');
  const lbNext   = document.getElementById('lbNext');

  let lbItems   = [];
  let lbCurrent = 0;

  function openLightbox(items, index) {
    lbItems   = items;
    lbCurrent = index;
    showLbItem(lbCurrent);
    lightbox?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function showLbItem(i) {
    const item = lbItems[i];
    if (!item || !lbImg) return;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = item.img;
      lbImg.alt = item.title;
      if (lbTitle) lbTitle.textContent = item.title;
      if (lbDesc)  lbDesc.textContent  = item.desc;
      lbImg.style.opacity = '1';
    }, 150);
    lbImg.style.transition = 'opacity 0.2s';
  }

  function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  }

  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  lbPrev?.addEventListener('click', () => {
    lbCurrent = (lbCurrent - 1 + lbItems.length) % lbItems.length;
    showLbItem(lbCurrent);
  });
  lbNext?.addEventListener('click', () => {
    lbCurrent = (lbCurrent + 1) % lbItems.length;
    showLbItem(lbCurrent);
  });

  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  { lbCurrent = (lbCurrent - 1 + lbItems.length) % lbItems.length; showLbItem(lbCurrent); }
    if (e.key === 'ArrowRight') { lbCurrent = (lbCurrent + 1) % lbItems.length; showLbItem(lbCurrent); }
  });

  // Botões de zoom em cada card
  document.querySelectorAll('.pf-zoom-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card  = btn.closest('.pf-card');
      if (!card) return;

      // Coleta todos os cards visíveis na ordem atual
      const visibleCards = pfVisible
        .map(slide => slide.querySelector('.pf-card'))
        .filter(Boolean);

      const items = visibleCards.map(c => ({
        img:   c.dataset.img   || c.querySelector('img')?.src || '',
        title: c.dataset.title || '',
        desc:  c.dataset.desc  || '',
      }));

      const allCards = document.querySelectorAll('.pf-card');
      let index = 0;
      allCards.forEach((c, i) => { if (c === card) index = i; });

      // Recalcula index dentro dos visíveis
      const visibleIdx = visibleCards.indexOf(card);
      openLightbox(items, Math.max(0, visibleIdx));
    });
  });

  // Clique no card também abre lightbox
  document.querySelectorAll('.pf-card').forEach(card => {
    card.addEventListener('click', () => {
      const btn = card.querySelector('.pf-zoom-btn');
      btn?.click();
    });
  });


  /* ──────────────────────────────────────────
     5. TESTIMONIALS — Carrossel automático
  ────────────────────────────────────────── */
  const testiTrack  = document.getElementById('testiTrack');
  const testiPrev   = document.getElementById('testiPrev');
  const testiNext   = document.getElementById('testiNext');
  const testiDotsEl = document.getElementById('testiDots');
  const testiSlides = document.querySelectorAll('.testi-slide');

  let testiIndex    = 0;
  const testiTotal  = testiSlides.length;
  let testiAuto;

  // Dots
  function buildTestiDots() {
    if (!testiDotsEl) return;
    testiDotsEl.innerHTML = '';
    for (let i = 0; i < testiTotal; i++) {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
      dot.addEventListener('click', () => {
        testiIndex = i;
        renderTesti();
        resetTestiAuto();
      });
      testiDotsEl.appendChild(dot);
    }
  }

  function renderTesti() {
    if (!testiTrack) return;
    testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
    // Atualiza dots
    testiDotsEl?.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === testiIndex);
    });
  }

  function testiGoNext() {
    testiIndex = (testiIndex + 1) % testiTotal;
    renderTesti();
  }
  function testiGoPrev() {
    testiIndex = (testiIndex - 1 + testiTotal) % testiTotal;
    renderTesti();
  }

  testiNext?.addEventListener('click', () => { testiGoNext(); resetTestiAuto(); });
  testiPrev?.addEventListener('click', () => { testiGoPrev(); resetTestiAuto(); });

  function startTestiAuto() {
    testiAuto = setInterval(testiGoNext, 5000);
  }
  function resetTestiAuto() {
    clearInterval(testiAuto);
    startTestiAuto();
  }

  // Touch/swipe nos testimonials
  let testiTouchStart = 0;
  testiTrack?.addEventListener('touchstart', e => {
    testiTouchStart = e.touches[0].clientX;
    clearInterval(testiAuto);
  }, { passive: true });
  testiTrack?.addEventListener('touchend', e => {
    const diff = testiTouchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? testiGoNext() : testiGoPrev();
    }
    startTestiAuto();
  });

  buildTestiDots();
  renderTesti();
  startTestiAuto();

  // Pausa ao hover
  const testiCarousel = document.querySelector('.testi-carousel');
  testiCarousel?.addEventListener('mouseenter', () => clearInterval(testiAuto));
  testiCarousel?.addEventListener('mouseleave', startTestiAuto);


  /* ──────────────────────────────────────────
     6. CONTACT FORM
  ────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  const formToast   = document.getElementById('formToast');

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const nome     = contactForm.querySelector('input[type="text"]')?.value || '';
    const whatsapp = contactForm.querySelector('input[type="tel"]')?.value || '';
    const servico  = data.get('servicio') || '';
    const email    = contactForm.querySelector('input[type="email"]')?.value || '';
    const mensagem = contactForm.querySelector('textarea')?.value || '';

    // Monta mensagem WhatsApp
    const waMsg = encodeURIComponent(
      `Hola! 👋 Vengo desde el sitio web.\n\n` +
      `*Nombre:* ${nome}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      (email    ? `*Email:* ${email}\n` : '') +
      (servico  ? `*Servicio:* ${servico}\n` : '') +
      (mensagem ? `*Mensaje:* ${mensagem}\n` : '') +
      `\nQuiero una consulta gratuita.`
    );

    window.open(`https://wa.me/595981234567?text=${waMsg}`, '_blank');

    // Toast
    formToast?.classList.add('show');
    setTimeout(() => formToast?.classList.remove('show'), 4000);
    contactForm.reset();
  });


  /* ──────────────────────────────────────────
     7. MODAL LEGAL
  ────────────────────────────────────────── */
  const legalModal   = document.getElementById('legalModal');
  const legalClose   = document.getElementById('legalClose');
  const legalContent = document.getElementById('legalContent');

  const legalTexts = {
    privacy: `
      <h2>Política de Privacidad</h2>
      <p>En <strong>The Fresh Cycle</strong>, nos comprometemos a proteger la información personal de nuestros clientes y visitantes.</p>
      <p><strong>Datos recopilados:</strong> Solo recopilamos datos que usted nos proporciona voluntariamente a través de nuestros formularios de contacto (nombre, WhatsApp, email).</p>
      <p><strong>Uso de datos:</strong> Sus datos son utilizados exclusivamente para contactarle en relación con los servicios solicitados. No vendemos ni compartimos datos con terceros.</p>
      <p><strong>Retención:</strong> Conservamos sus datos mientras mantengamos una relación comercial activa. Puede solicitar la eliminación en cualquier momento.</p>
      <p><strong>Contacto:</strong> Para cualquier consulta sobre privacidad: <a href="mailto:info@thefreshcycle.com">info@thefreshcycle.com</a></p>
      <p><em>Última actualización: Enero 2026</em></p>
    `,
    terms: `
      <h2>Términos de Uso</h2>
      <p>Al utilizar el sitio web de <strong>The Fresh Cycle</strong>, usted acepta los siguientes términos:</p>
      <p><strong>Servicios:</strong> The Fresh Cycle ofrece servicios de marketing digital, diseño, tráfico pago y sistemas digitales. Los precios y alcances se definen en propuestas individuales.</p>
      <p><strong>Propiedad intelectual:</strong> Todo el contenido de este sitio es propiedad de The Fresh Cycle. Los diseños entregados al cliente son de su propiedad una vez completado el pago.</p>
      <p><strong>Pagos:</strong> Los términos de pago se acuerdan en cada contrato. No existen contratos de permanencia obligatoria salvo que se especifique lo contrario.</p>
      <p><strong>Cancelación:</strong> El cliente puede cancelar los servicios en cualquier momento con aviso previo de 15 días.</p>
      <p><strong>Jurisdicción:</strong> Estos términos se rigen por las leyes de la República del Paraguay.</p>
      <p><em>Última actualización: Enero 2026</em></p>
    `
  };

  window.openLegalModal = function(type) {
    if (!legalModal || !legalContent) return;
    legalContent.innerHTML = legalTexts[type] || '';
    legalModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  legalClose?.addEventListener('click', () => {
    legalModal?.classList.remove('open');
    document.body.style.overflow = '';
  });

  legalModal?.addEventListener('click', e => {
    if (e.target === legalModal) {
      legalModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });


  /* ──────────────────────────────────────────
     8. SCROLL SUAVE para links internos
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // altura navbar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ──────────────────────────────────────────
     9. PROCESS STEPS — animação de entrada
  ────────────────────────────────────────── */
  const processSteps = document.querySelectorAll('.process-step');
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 120);
      processObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(24px)';
    step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    processObserver.observe(step);
  });


  /* ──────────────────────────────────────────
     10. PRICING CARDS — stagger animation
  ────────────────────────────────────────── */
  const priceCards = document.querySelectorAll('.price-card');
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.price-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = card.classList.contains('price-featured')
            ? 'translateY(-8px) scale(1.02)'
            : 'translateY(0)';
        }, i * 100);
      });
      priceObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  const pricingGrid = document.querySelector('.pricing-grid');
  if (pricingGrid) {
    priceCards.forEach(card => {
      const base = card.classList.contains('price-featured')
        ? 'translateY(8px) scale(1.02)'
        : 'translateY(16px)';
      card.style.opacity = '0';
      card.style.transform = base;
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    priceObserver.observe(pricingGrid);
  }

  console.log('🌿 The Fresh Cycle — v3 loaded');
});
