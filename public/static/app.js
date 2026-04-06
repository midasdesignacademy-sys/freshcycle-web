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
     4. PORTFOLIO — Infinite scroll (CSS-driven)
     Nenhum JS necessário — animação via CSS.
  ────────────────────────────────────────── */


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
     6. CONTACT FORM — handled by wizard (section 14)
  ────────────────────────────────────────── */


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
  const pricingGrid = document.querySelector('.pricing-grid');

  if (pricingGrid) {
    const cards = pricingGrid.querySelectorAll('.price-card');

    // Set initial hidden state
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = card.classList.contains('price-card--popular')
        ? 'translateY(20px) scale(1.02)'
        : 'translateY(24px)';
      card.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    });

    const priceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;


        // Stagger cards
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = card.classList.contains('price-card--popular')
              ? 'translateY(-8px) scale(1.02)'
              : 'translateY(0)';
          }, 120 + i * 110);
        });

        priceObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    priceObserver.observe(pricingGrid);
  }

  /* ──────────────────────────────────────────
     11. ACCORDION — touch/click toggle (mobile)
  ────────────────────────────────────────── */
  const svcAccordion = document.querySelector('.svc-accordion');
  if (svcAccordion) {
    const svcPanels = svcAccordion.querySelectorAll('.svc-panel');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
      // Open first panel by default on touch
      svcPanels[0]?.classList.add('is-active');

      svcPanels.forEach(panel => {
        panel.addEventListener('click', () => {
          const wasActive = panel.classList.contains('is-active');
          svcPanels.forEach(p => p.classList.remove('is-active'));
          if (!wasActive) panel.classList.add('is-active');
        });
      });
    }
  }

  /* ──────────────────────────────────────────
     12. PRICING TOGGLE — removed (no fixed plans)
  ────────────────────────────────────────── */

  /* ──────────────────────────────────────────
     13. FOUNDERS CAROUSEL — auto-advance 6s
  ────────────────────────────────────────── */
  const aboutCarousel = document.getElementById('aboutCarousel');
  if (aboutCarousel) {
    const slides = aboutCarousel.querySelectorAll('.ac-slide');
    const dots   = aboutCarousel.querySelectorAll('.ac-dot');
    let current  = 0;
    let timer    = null;

    const goTo = (idx) => {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    };

    const startAuto = () => {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 6000);
    };

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.index, 10));
        startAuto();
      });
    });

    startAuto();
  }


  /* ──────────────────────────────────────────
     14. WIZARD — Multi-step contact form
  ────────────────────────────────────────── */
  const wizardBox = document.querySelector('.wizard-box');
  if (wizardBox) {
    // State
    const state = { service: '', businessName: '', rubro: '', challenge: '', meetingType: '', name: '', phone: '' };
    let currentStep = 1;
    const totalSteps = 4;

    // Elements
    const progressBar = document.getElementById('wzProgressBar');
    const stepLabel   = document.getElementById('wzStepLabel');
    const steps       = document.querySelectorAll('.wz-step');
    const successEl   = document.getElementById('wzSuccess');
    const successName = document.getElementById('wzSuccessName');
    const successWa   = document.getElementById('wzSuccessWa');

    // Update progress bar + step dots
    function updateProgress(step) {
      const pct = (step / totalSteps) * 100;
      progressBar.style.width = pct + '%';
      stepLabel.textContent = 'Paso ' + step + ' de ' + totalSteps;

      // Dots
      wizardBox.querySelectorAll('.wz-dot').forEach(dot => {
        const n = parseInt(dot.dataset.dot, 10);
        dot.classList.toggle('is-active', n === step);
        dot.classList.toggle('is-done', n < step);
      });
      wizardBox.querySelectorAll('.wz-dot-line').forEach((line, i) => {
        line.classList.toggle('is-done', i + 1 < step);
      });
    }

    // Toggle button enabled state + gold class
    function setBtnReady(btn, ready) {
      btn.disabled = !ready;
      btn.classList.toggle('wz-ready', ready);
    }

    // Go to step
    function goToStep(n) {
      steps.forEach(s => s.classList.remove('is-active'));
      const target = document.getElementById('wzStep' + n);
      if (target) {
        target.classList.add('is-active');
        currentStep = n;
        updateProgress(n);
      }
    }

    // ── STEP 1: Service selection ──
    const wzOptions = document.querySelectorAll('.wz-option');
    const wzNext1   = document.getElementById('wzNext1');

    wzOptions.forEach(btn => {
      btn.addEventListener('click', () => {
        wzOptions.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        state.service = btn.dataset.value;
        setBtnReady(wzNext1, true);
      });
    });

    wzNext1?.addEventListener('click', () => goToStep(2));

    // ── STEP 2: Business info ──
    const wzBusinessName = document.getElementById('wzBusinessName');
    const wzRubro        = document.getElementById('wzRubro');
    const wzChallenge    = document.getElementById('wzChallenge');
    const wzNext2        = document.getElementById('wzNext2');
    const wzBack2        = document.getElementById('wzBack2');

    const checkStep2 = () => {
      setBtnReady(wzNext2, wzBusinessName?.value.trim().length > 0);
    };

    wzBusinessName?.addEventListener('input', () => {
      state.businessName = wzBusinessName.value.trim();
      checkStep2();
    });

    wzRubro?.addEventListener('input', () => { state.rubro = wzRubro.value.trim(); });
    wzChallenge?.addEventListener('input', () => { state.challenge = wzChallenge.value.trim(); });

    wzNext2?.addEventListener('click', () => goToStep(3));
    wzBack2?.addEventListener('click', () => goToStep(1));

    // ── STEP 3: Meeting type ──
    const wzMeetingCards = document.querySelectorAll('.wz-meeting-card');
    const wzNext3        = document.getElementById('wzNext3');
    const wzBack3        = document.getElementById('wzBack3');

    wzMeetingCards.forEach(card => {
      card.addEventListener('click', () => {
        wzMeetingCards.forEach(c => c.classList.remove('is-selected'));
        card.classList.add('is-selected');
        state.meetingType = card.dataset.value;
        setBtnReady(wzNext3, true);
      });
    });

    wzNext3?.addEventListener('click', () => goToStep(4));
    wzBack3?.addEventListener('click', () => goToStep(2));

    // ── STEP 4: Contact info ──
    const wzName   = document.getElementById('wzName');
    const wzPhone  = document.getElementById('wzPhone');
    const wzSubmit = document.getElementById('wzSubmit');
    const wzBack4  = document.getElementById('wzBack4');

    const checkStep4 = () => {
      setBtnReady(wzSubmit, wzName?.value.trim().length > 0 && wzPhone?.value.trim().length > 0);
    };

    wzName?.addEventListener('input', () => {
      state.name = wzName.value.trim();
      checkStep4();
    });
    wzPhone?.addEventListener('input', () => {
      state.phone = wzPhone.value.trim();
      checkStep4();
    });

    wzBack4?.addEventListener('click', () => goToStep(3));

    // Submit
    wzSubmit?.addEventListener('click', () => {
      if (!state.name || !state.phone) return;

      // Build WhatsApp message
      const msg = encodeURIComponent(
        'Hola! Soy ' + state.name + '\n' +
        (state.businessName ? 'Tengo ' + state.businessName + (state.rubro ? ' (' + state.rubro + ')' : '') + ' y me interesa ' + state.service + '.\n' : 'Me interesa ' + state.service + '.\n') +
        'Prefiero reunirnos ' + state.meetingType + '.\n' +
        (state.challenge ? 'Mi situacion actual: ' + state.challenge + '\n' : '') +
        'Mi WhatsApp es ' + state.phone + '.'
      );

      const waUrl = 'https://wa.me/595981234567?text=' + msg;

      // Show success
      steps.forEach(s => s.classList.remove('is-active'));
      progressBar.style.width = '100%';
      stepLabel.textContent = '¡Todo listo!';
      wizardBox.querySelectorAll('.wz-dot').forEach(dot => {
        dot.classList.remove('is-active');
        dot.classList.add('is-done');
      });
      wizardBox.querySelectorAll('.wz-dot-line').forEach(line => line.classList.add('is-done'));
      successName.textContent = state.name.split(' ')[0];
      successWa.href = waUrl;
      successEl.classList.add('is-active');

      // Open WhatsApp after brief delay
      setTimeout(() => window.open(waUrl, '_blank'), 600);
    });

    // Initialize
    updateProgress(1);
  }

  console.log('🌿 The Fresh Cycle — v3 loaded');
});
