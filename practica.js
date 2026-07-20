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