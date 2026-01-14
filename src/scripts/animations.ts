// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add stagger delay based on index
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, index * 100);
      
      // Unobserve after animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
  
  // Parallax effect for hero image
  const heroImage = document.querySelector('.hero-parallax') as HTMLElement;
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }
});