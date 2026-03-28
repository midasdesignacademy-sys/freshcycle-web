/* ============================================
   THE FRESH CYCLE — JavaScript Premium v2
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════
     1. NAVBAR — scroll + active indicator
     ═══════════════════════════════════════════ */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Indicador de seção ativa na navbar
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  const updateActiveNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navItems.forEach(a => {
      const match = a.getAttribute('href') === `#${current}`;
      a.classList.toggle('nav-active', match);
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ═══════════════════════════════════════════
     2. MOBILE NAV
     ═══════════════════════════════════════════ */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    const spans  = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.querySelectorAll('span').forEach(s => {
        s.style.transform = ''; s.style.opacity = '';
      });
    });
  });

  /* ═══════════════════════════════════════════
     3. SMOOTH SCROLL
     ═══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
      }
    });
  });

  /* ═══════════════════════════════════════════
     4. COUNTER ANIMATION
     ═══════════════════════════════════════════ */
  const counters = document.querySelectorAll('.stat-number[data-target]');
  let countersStarted = false;
  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.target);
    const duration = 2000;
    const start    = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  const hero = document.querySelector('.hero');
  if (hero) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        setTimeout(() => counters.forEach(animateCounter), 1000);
      }
    }, { threshold: 0.4 }).observe(hero);
  }

  /* ═══════════════════════════════════════════
     5. SCROLL REVEAL
     ═══════════════════════════════════════════ */
  const revealTargets = document.querySelectorAll(
    '.pf-card, .service-card, .testimonial-card, .pricing-card, .process-step, .value-item, .about-metric, .contact-item, .trust-item, .showcase-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...(entry.target.parentElement?.children || [])];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealTargets.forEach(el => revealObs.observe(el));

  /* ═══════════════════════════════════════════
     6. PORTFÓLIO — FILTROS
     ═══════════════════════════════════════════ */
  const filterBtns     = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      let visibleCount = 0;
      portfolioItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          const delay = visibleCount * 60;
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity    = '1';
            item.style.transform  = 'translateY(0)';
          }, delay);
          visibleCount++;
        } else {
          item.style.transition = 'opacity 0.2s ease';
          item.style.opacity    = '0';
          setTimeout(() => {
            item.classList.add('hidden');
            item.style.transition = '';
            item.style.opacity    = '';
            item.style.transform  = '';
          }, 200);
        }
      });
    });
  });

  /* ═══════════════════════════════════════════
     7. LIGHTBOX
     ═══════════════════════════════════════════ */
  const lightbox = document.getElementById('pfLightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbTitle  = document.getElementById('lbTitle');
  const lbDesc   = document.getElementById('lbDesc');
  const lbClose  = document.getElementById('lbClose');
  const lbPrev   = document.getElementById('lbPrev');
  const lbNext   = document.getElementById('lbNext');

  let lbItems     = [];
  let lbCurrent   = 0;

  const buildLbItems = (filter = 'all') => {
    lbItems = [...portfolioItems]
      .filter(item => filter === 'all' || item.dataset.category === filter)
      .filter(item => !item.classList.contains('hidden'));
  };

  const openLightbox = (item) => {
    buildLbItems();
    lbCurrent = lbItems.indexOf(item);
    showLbItem(lbCurrent);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  const showLbItem = (idx) => {
    const item = lbItems[idx];
    if (!item) return;
    const img   = item.dataset.img   || '';
    const title = item.dataset.title || '';
    const desc  = item.dataset.desc  || '';
    lbImg.style.opacity   = '0';
    lbImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
      lbImg.src            = img;
      lbTitle.textContent  = title;
      lbDesc.textContent   = desc;
      lbImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      lbImg.style.opacity    = '1';
      lbImg.style.transform  = 'scale(1)';
    }, 150);
    // Prev/Next visibility
    lbPrev.style.opacity = idx > 0 ? '1' : '0.3';
    lbNext.style.opacity = idx < lbItems.length - 1 ? '1' : '0.3';
  };

  // Abrir ao clicar no zoom ou na imagem
  document.querySelectorAll('.pf-zoom, .pf-img-wrap img').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const item = el.closest('.portfolio-item');
      if (item) openLightbox(item);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  lbPrev?.addEventListener('click', () => {
    if (lbCurrent > 0) { lbCurrent--; showLbItem(lbCurrent); }
  });
  lbNext?.addEventListener('click', () => {
    if (lbCurrent < lbItems.length - 1) { lbCurrent++; showLbItem(lbCurrent); }
  });

  // Teclado
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { if (lbCurrent > 0) { lbCurrent--; showLbItem(lbCurrent); } }
    if (e.key === 'ArrowRight') { if (lbCurrent < lbItems.length - 1) { lbCurrent++; showLbItem(lbCurrent); } }
  });

  /* ═══════════════════════════════════════════
     8. CONTACT FORM → WHATSAPP
     ═══════════════════════════════════════════ */
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;

    const name    = form.querySelector('input[type="text"]')?.value  || '';
    const phone   = form.querySelector('input[type="tel"]')?.value   || '';
    const service = form.querySelector('input[name="servicio"]:checked')?.value || '';
    const msg     = form.querySelector('textarea')?.value            || '';

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled  = true;

    const waMsg = encodeURIComponent(
      `¡Hola The Fresh Cycle! Me contacto desde la web.\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      `🎯 *Servicio:* ${service || 'No especificado'}\n` +
      `💬 *Mensaje:* ${msg || 'Sin mensaje adicional'}`
    );

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> ¡Listo! Redirigiendo...';
      btn.style.background = '#25D366';
      setTimeout(() => {
        window.open(`https://wa.me/595981234567?text=${waMsg}`, '_blank');
        btn.innerHTML        = orig;
        btn.disabled         = false;
        btn.style.background = '';
        form.reset();
      }, 900);
    }, 800);
  });

  /* ═══════════════════════════════════════════
     9. WHATSAPP FLOAT — pulse attention
     ═══════════════════════════════════════════ */
  const waFloat = document.querySelector('.whatsapp-float');
  if (waFloat) {
    // Aparece após 3s
    setTimeout(() => waFloat.classList.add('visible'), 3000);
    // Pulse periódico
    setInterval(() => {
      waFloat.classList.add('pulse-anim');
      setTimeout(() => waFloat.classList.remove('pulse-anim'), 1000);
    }, 8000);
  }

  /* ═══════════════════════════════════════════
     10. HERO CURSOR SPOTLIGHT
     ═══════════════════════════════════════════ */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', e => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      heroSection.style.setProperty('--mx', `${x}%`);
      heroSection.style.setProperty('--my', `${y}%`);
    });
  }

  /* ═══════════════════════════════════════════
     11. SERVICE CHIPS — seleção visual
     ═══════════════════════════════════════════ */
  document.querySelectorAll('.chip-option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.chip-option').forEach(c => c.classList.remove('selected'));
      if (radio.checked) radio.closest('.chip-option')?.classList.add('selected');
    });
  });

});

/* ═══════════════════════════════════════════
   12. MODAL LEGAL — Privacidade e Termos
   ═══════════════════════════════════════════ */
const legalTexts = {
  privacy: {
    title: 'Política de Privacidad',
    body: `
      <p>En <strong>The Fresh Cycle</strong> respetamos tu privacidad y nos comprometemos a proteger tus datos personales.</p>
      <h4>Datos que recopilamos</h4>
      <p>Solo recopilamos la información que nos proporcionás voluntariamente a través de nuestro formulario de contacto: nombre, WhatsApp, email y servicio de interés.</p>
      <h4>¿Cómo usamos tus datos?</h4>
      <p>Tus datos se utilizan exclusivamente para contactarte en respuesta a tu consulta. <strong>Nunca vendemos ni compartimos tu información</strong> con terceros.</p>
      <h4>Almacenamiento</h4>
      <p>Los datos del formulario son enviados directamente a nuestro WhatsApp y no se almacenan en ningún servidor. No utilizamos cookies de rastreo.</p>
      <h4>Tus derechos</h4>
      <p>Podés solicitar la eliminación de tus datos en cualquier momento contactándonos por email a <a href="mailto:info@thefreshcycle.com">info@thefreshcycle.com</a>.</p>
      <p><em>Vigente desde enero de 2026 &middot; Asunción, Paraguay</em></p>
    `
  },
  terms: {
    title: 'Términos de Uso',
    body: `
      <p>Al utilizar el sitio web de <strong>The Fresh Cycle</strong>, aceptas los siguientes términos:</p>
      <h4>Servicios</h4>
      <p>Los servicios ofrecidos (diseño, tráfico pago y sistemas digitales) son prestados según los paquetes acordados por escrito entre el cliente y The Fresh Cycle.</p>
      <h4>Pagos y cancelación</h4>
      <p>Los pagos son mensuales. No existe permanencia obligatoria. El cliente puede cancelar con 15 días de anticipación al próximo ciclo de facturación.</p>
      <h4>Propiedad intelectual</h4>
      <p>Todos los diseños y materiales creados son propiedad del cliente una vez realizado el pago completo del servicio.</p>
      <h4>Limitación de responsabilidad</h4>
      <p>The Fresh Cycle no se hace responsable por resultados de campañas que dependan de factores externos como algoritmos de plataformas o estacionalidad del mercado.</p>
      <h4>Contacto</h4>
      <p>Para consultas sobre estos términos: <a href="mailto:info@thefreshcycle.com">info@thefreshcycle.com</a></p>
      <p><em>Vigente desde enero de 2026 · Asunción, Paraguay</em></p>
    `
  }
};

function openLegalModal(type) {
  const modal   = document.getElementById('legalModal');
  const content = document.getElementById('legalContent');
  const data    = legalTexts[type];
  if (!modal || !data) return;
  content.innerHTML = `<h3>${data.title}</h3>${data.body}`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('legalClose')?.addEventListener('click', closeLegalModal);
document.getElementById('legalModal')?.addEventListener('click', e => {
  if (e.target.id === 'legalModal') closeLegalModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('legalModal')?.classList.contains('open')) {
    closeLegalModal();
  }
});
