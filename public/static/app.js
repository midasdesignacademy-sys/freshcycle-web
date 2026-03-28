/* ============================================
   THE FRESH CYCLE — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    // Animate hamburger to X
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav on link click (mobile)
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  // ---- Counter animation (hero stats) ----
  const counters = document.querySelectorAll('.stat-number[data-target]');
  let countersStarted = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const update = () => {
        current = Math.min(current + step, target);
        counter.textContent = Math.floor(current);
        if (current < target) requestAnimationFrame(update);
        else counter.textContent = target;
      };
      requestAnimationFrame(update);
    });
  };

  // Trigger when hero is visible
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        setTimeout(animateCounters, 800);
      }
    }, { threshold: 0.3 });
    heroObserver.observe(heroSection);
  }

  // ---- Scroll reveal ----
  const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .pricing-card, .process-step, .value-item, .about-metric');
  
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger animation for grid items
        const siblings = [...entry.target.parentElement.children];
        const index = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- Portfolio Filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portfolioItems.forEach((item, i) => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.classList.remove('hidden');
          item.style.animation = `fadeIn 0.4s ease ${i * 0.05}s forwards`;
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const activateNavLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', activateNavLink, { passive: true });

  // ---- Contact Form ----
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const service = contactForm.querySelector('select').value;
    const message = contactForm.querySelector('textarea').value;

    // Show loading
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;

    // Build WhatsApp message
    const waMessage = encodeURIComponent(
      `¡Hola! Me contacto desde la web de The Fresh Cycle.\n\n` +
      `👤 Nombre: ${name}\n` +
      `📞 Teléfono: ${phone}\n` +
      `🎯 Servicio: ${service}\n` +
      `💬 Mensaje: ${message || 'Sin mensaje adicional'}`
    );

    // Simulate sending then redirect to WhatsApp
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado! Redirigiendo...';
      btn.style.background = '#25D366';
      setTimeout(() => {
        window.open(`https://wa.me/595981234567?text=${waMessage}`, '_blank');
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 1000);
    }, 1000);
  });

  // ---- Smooth scroll for anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Parallax subtle on hero ---- 
  const heroPattern = document.querySelector('.hero-bg-pattern');
  if (heroPattern) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroPattern.style.transform = `translateY(${scrollY * 0.15}px)`;
    }, { passive: true });
  }

});
