/**
 * Header Navigation Component
 * Maneja la navegación entre las secciones principales del MVP
 */
export class HeaderNav {
  constructor() {
    this.header = document.querySelector('.header');
    this.navButtons = this.header?.querySelectorAll('.header__nav-button');
    this.activeSection = null;
    
    this.init();
  }

  bindEvents() {
    this.navButtons?.forEach(button => {
      button.addEventListener('click', () => this.handleNavClick(button));
      
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleNavClick(button);
        }
      });
    });
    
    window.addEventListener('hashchange', () => this.syncWithURL());
  }

  init() {
    this.bindEvents();
    const initialSection = this.getSectionFromURL() || 'historias';
    this.setActiveSection(initialSection);
  }

  handleNavClick(button) {
    const section = button.dataset.section;
    this.setActiveSection(section);
    
    const event = new CustomEvent('sectionChange', {
      detail: { section },
      bubbles: true,
      composed: true
    });
    this.header?.dispatchEvent(event);
  }

  setActiveSection(section) {
    this.navButtons?.forEach(btn => {
      btn.setAttribute('aria-pressed', 'false');
      btn.classList.remove('header__nav-button--active');
    });
    
    const targetButton = this.header?.querySelector(
      `.header__nav-button[data-section="${section}"]`
    );
    
    if (targetButton) {
      targetButton.setAttribute('aria-pressed', 'true');
      targetButton.classList.add('header__nav-button--active');
      this.activeSection = section;
    }
  }

  getSectionFromURL() {
    const hash = window.location.hash.substring(1);
    const validSections = ['historias', 'canciones', 'libros', 'juegos'];
    return validSections.includes(hash) ? hash : null;
  }

  syncWithURL() {
    const section = this.getSectionFromURL();
    if (section && section !== this.activeSection) {
      this.setActiveSection(section);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new HeaderNav());
} else {
  new HeaderNav();
}