// Simple scroll animation
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Parallax effect for hexagonal background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('body::before, body::after');
  
  // Apply parallax to background layers
  const bodyBefore = document.querySelector('body');
  if (bodyBefore) {
    const speed1 = scrolled * 0.5;
    const speed2 = scrolled * 0.3;
    
    bodyBefore.style.setProperty('--scroll-offset-1', `${speed1}px`);
    bodyBefore.style.setProperty('--scroll-offset-2', `${speed2}px`);
  }
});

// Add CSS custom properties for parallax
document.documentElement.style.setProperty('--scroll-offset-1', '0px');
document.documentElement.style.setProperty('--scroll-offset-2', '0px');
