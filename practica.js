// Initialize Animate On Scroll (AOS)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        offset: 50,
        duration: 700,
        easing: 'ease-out-cubic',
    });

    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Refresh AOS on load
    window.addEventListener('load', () => {
        AOS.refresh();
        setTimeout(() => {
            AOS.refresh();
            const waBtn = document.getElementById('whatsapp-btn');
            if (waBtn) {
                waBtn.style.opacity = '1';
                waBtn.style.visibility = 'visible';
                waBtn.style.display = 'flex';
            }
        }, 500);
    });

    // ── Carrusel de Abogadas (transform-based) ─────────────────────────────
    const track      = document.getElementById('lawyersTrack');
    const prevBtn    = document.getElementById('prevLawyer');
    const nextBtn    = document.getElementById('nextLawyer');
    const indicators = document.querySelectorAll('.indicator-lawyer');
    let currentIndex = 0;

    if (track && prevBtn && nextBtn) {
        const totalSlides = track.children.length;

        const goTo = (index) => {
            currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;

            // CSS transform: move track
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update tab indicators
            indicators.forEach((tab, i) => {
                const active = i === currentIndex;
                tab.classList.toggle('bg-gold-400/10',  active);
                tab.classList.toggle('border-gold-400', active);
                tab.classList.toggle('text-gold-400',   active);
                tab.classList.toggle('border-white/10', !active);
                tab.classList.toggle('text-white/30',   !active);
            });

            // Update arrow visibility
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;
        };

        prevBtn.addEventListener('click', () => { goTo(currentIndex - 1); resetAutoPlay(); });
        nextBtn.addEventListener('click', () => { goTo(currentIndex + 1); resetAutoPlay(); });

        indicators.forEach((tab, i) => {
            tab.addEventListener('click', () => { goTo(i); resetAutoPlay(); });
        });

        // ── Auto-play ──────────────────────────────────────────────────────
        const INTERVAL_MS = 30000;
        let autoPlay = null;

        const startAutoPlay = () => {
            stopAutoPlay();
            autoPlay = setInterval(() => goTo((currentIndex + 1) % totalSlides), INTERVAL_MS);
        };
        const stopAutoPlay  = () => { if (autoPlay) { clearInterval(autoPlay); autoPlay = null; } };
        const resetAutoPlay = () => { stopAutoPlay(); startAutoPlay(); };

        // Pause on hover/touch
        track.parentElement.addEventListener('mouseenter', stopAutoPlay);
        track.parentElement.addEventListener('mouseleave', startAutoPlay);
        track.parentElement.addEventListener('touchstart', stopAutoPlay,  { passive: true });
        track.parentElement.addEventListener('touchend',   startAutoPlay, { passive: true });
        // ──────────────────────────────────────────────────────────────────

        // Init
        goTo(0);
        startAutoPlay();
    }
    // ───────────────────────────────────────────────────────────────────────
});

// Accordion Toggle Logic (FAQ)
function toggleAccordion(element) {
  const item = element.parentElement;
  
  // Close other open items
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach((otherItem) => {
    if (otherItem !== item && otherItem.classList.contains('active')) {
      otherItem.classList.remove('active');
      const innerContent = otherItem.querySelector('.accordion-content');
      if (innerContent) {
        innerContent.style.maxHeight = '0';
      }
      const btn = otherItem.querySelector('button');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      const svg = otherItem.querySelector('button svg');
      if (svg) svg.classList.remove('rotate-180');
    }
  });

  // Toggle current item
  const isActive = item.classList.contains('active');
  const innerContent = item.querySelector('.accordion-content');
  const svg = element.querySelector('svg');
  
  if (isActive) {
      item.classList.remove('active');
      if (innerContent) innerContent.style.maxHeight = '0';
      element.setAttribute('aria-expanded', 'false');
      if (svg) svg.classList.remove('rotate-180');
  } else {
      item.classList.add('active');
      if (innerContent) innerContent.style.maxHeight = innerContent.scrollHeight + 'px';
      element.setAttribute('aria-expanded', 'true');
      if (svg) svg.classList.add('rotate-180');
  }
}