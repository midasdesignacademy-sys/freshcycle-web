/* ============================================
   THE FRESH CYCLE — Premium JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar ───
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  const handleScroll = () => {
    const curr = window.scrollY;
    if (curr > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = curr;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── Mobile nav ───
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
      const spans = navToggle.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // ─── Counter animation ───
  const counters = document.querySelectorAll('.stat-number[data-target]');
  let countersStarted = false;

  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.target);
    const duration = 2000;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.floor(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      setTimeout(() => counters.forEach(animateCounter), 1000);
    }
  }, { threshold: 0.4 });
  const hero = document.querySelector('.hero');
  if (hero) heroObserver.observe(hero);

  // ─── Scroll reveal ───
  const revealTargets = document.querySelectorAll(
    '.service-card, .portfolio-item, .testimonial-card, .pricing-card, .process-step, .value-item, .about-metric, .contact-item, .trust-item'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...(entry.target.parentElement?.children || [])];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 70);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObs.observe(el));

  // ─── Portfolio filter ───
  const filterBtns     = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      portfolioItems.forEach((item, i) => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, i * 40);
          });
        } else {
          item.classList.add('hidden');
          item.style.transition = '';
          item.style.opacity = '';
          item.style.transform = '';
        }
      });
    });
  });

  // ─── Active nav link ───
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const updateActiveNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active-nav', a.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ─── Contact form → WhatsApp ───
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn   = form.querySelector('button[type="submit"]');
    const orig  = btn.innerHTML;

    const name    = form.querySelector('input[type="text"]')?.value || '';
    const phone   = form.querySelector('input[type="tel"]')?.value  || '';
    const service = form.querySelector('select')?.value             || '';
    const msg     = form.querySelector('textarea')?.value           || '';

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled  = true;

    const waMsg = encodeURIComponent(
      `¡Hola The Fresh Cycle! Me contacto desde la web.\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📞 *Teléfono:* ${phone}\n` +
      `🎯 *Servicio:* ${service}\n` +
      `💬 *Mensaje:* ${msg || 'Sin mensaje adicional'}`
    );

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> ¡Listo! Redirigiendo...';
      btn.style.background = '#25D366';
      setTimeout(() => {
        window.open(`https://wa.me/595981234567?text=${waMsg}`, '_blank');
        btn.innerHTML = orig;
        btn.disabled  = false;
        btn.style.background = '';
        form.reset();
      }, 900);
    }, 800);
  });

  // ─── Smooth scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
      }
    });
  });

  // ─── Subtle hero parallax ───
  const heroBg = document.querySelector('.hero-bg-pattern');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    }, { passive: true });
  }

  // ─── Logo cursor glow effect on hero ───
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

});
