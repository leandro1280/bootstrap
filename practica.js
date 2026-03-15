// Initialize Animate On Scroll (AOS)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 50, // Offset (in px) from the original trigger point
        duration: 800, // Values from 0 to 3000, with step 50ms
        easing: 'ease-out-cubic', // Default easing for AOS animations
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
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
    }
  });

  // Toggle current item
  const isActive = item.classList.contains('active');
  const innerContent = item.querySelector('.accordion-content');
  
  if (isActive) {
      item.classList.remove('active');
      if (innerContent) innerContent.style.maxHeight = '0';
  } else {
      item.classList.add('active');
      if (innerContent) innerContent.style.maxHeight = innerContent.scrollHeight + 'px';
  }
}