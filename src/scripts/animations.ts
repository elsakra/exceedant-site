import { animate, inView, scroll } from '@motionone/dom';

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Hero animations on load
  document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content
    const heroHeadline = document.querySelector('.hero-headline');
    const heroSubheadline = document.querySelector('.hero-subheadline');
    const heroCTA = document.querySelector('.hero-cta');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroHeadline) {
      animate(heroHeadline, 
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
        { duration: 0.8, easing: 'ease-out' }
      );
    }
    
    if (heroSubheadline) {
      animate(heroSubheadline,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.8, delay: 0.2, easing: 'ease-out' }
      );
    }
    
    if (heroCTA) {
      animate(heroCTA,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.8, delay: 0.4, easing: 'ease-out' }
      );
    }
    
    if (heroImage) {
      animate(heroImage,
        { opacity: [0, 1], transform: ['scale(0.95)', 'scale(1)'] },
        { duration: 1, delay: 0.3, easing: 'ease-out' }
      );
    }
  });
  
  // Scroll animations
  const animateOnScroll = (element: Element) => {
    animate(element,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
      { duration: 0.6, easing: 'ease-out' }
    );
  };
  
  // Observe sections
  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    inView(element, () => animateOnScroll(element), { margin: '-100px' });
  });
  
  // Stagger animations for grids
  document.querySelectorAll('.stagger-grid').forEach((grid) => {
    const items = grid.querySelectorAll('.stagger-item');
    inView(grid, () => {
      items.forEach((item, index) => {
        animate(item,
          { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
          { duration: 0.5, delay: index * 0.1, easing: 'ease-out' }
        );
      });
    }, { margin: '-100px' });
  });
  
  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
  
  // Parallax effect for hero background
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    scroll(({ y }) => {
      const parallaxSpeed = 0.5;
      const yPos = -(y.current * parallaxSpeed);
      (heroSection as HTMLElement).style.transform = `translateY(${yPos}px)`;
    }, {
      target: heroSection,
      offset: ['start start', 'end start']
    });
  }
}