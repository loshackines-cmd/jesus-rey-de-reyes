/**
 * Main Application Entry Point
 * Inicializa todos los componentes del MVP
 */
import { HeaderNav } from './components/shared/header/header.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar navegación del header
  new HeaderNav();
  
  // Actualizar año en footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Manejar botón CTA del hero
  const ctaButton = document.querySelector('.hero__cta-button');
  ctaButton?.addEventListener('click', () => {
    // Navegar a la primera sección (Historias)
    const historiasSection = document.querySelector('[data-section="historias"]');
    if (historiasSection) {
      historiasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.location.hash = 'historias';
    }
  });
});

console.log('Jesús, el Rey de Reyes - App initialized');