# AGENT.md — Jesús, el Rey de Reyes
# Máximo 500 líneas | Última actualización: 2026-03-25

## 🎯 Identidad del Proyecto
- Nombre: Jesús, el Rey de Reyes
- Tipo: Aplicación web educativa cristiana para niños (3-10 años)
- Objetivo: Enseñar valores cristianos mediante historias, canciones, libros y juegos
- Audiencia: Niños hispanohablantes y sus familias

## 🛠️ Stack Tecnológico
- HTML5 semántico
- CSS3 con Custom Properties (variables), sin preprocesadores
- JavaScript vanilla ES6+ (sin frameworks en MVP)
- PWA (manifest.json + Service Worker)
- Vitest para unit testing
- Playwright para E2E testing
- GitHub Actions para CI/CD
- Vite como bundler/dev server

## 🧠 Principios de Desarrollo
1. **Mobile-first siempre**: Diseñar para 480px primero, luego escalar
2. **Accesibilidad por defecto**: WCAG 2.1 AA como mínimo en todo
3. **Performance primero**: Presupuesto de Lighthouse >90 en todas las categorías
4. **Modularidad por feature**: Cada sección es independiente y reutilizable
5. **IA-friendly**: Código claro, bien comentado, fácil de iterar con LLMs
6. **Progressive Enhancement**: Funciona sin JS, mejora con capabilities
7. **Offline-first**: PWA funcional incluso sin conexión

## 📜 Estándares de Código
### Nomenclatura
- Variables/funciones/clases: `camelCase` en inglés (ej: `currentStory`, `playSong`)
- Constantes: `UPPER_SNAKE_CASE` (ej: `MAX_STORIES_PER_PAGE`)
- Archivos: `kebab-case` (ej: `story-player.js`)
- Clases CSS: `kebab-case` (ej: `.story-card`)
- Data attributes: `data-[descripción]` (ej: `data-story-id`)

### Comentarios
- Comentarios de negocio/lógica: **Español** (explican el *por qué*)
- Comentarios técnicos: **Inglés** (explican el *cómo*)
- Evitar comentarios obvios; enfocarse en decisiones no triviales
- JSDoc para funciones públicas complejas

## 🔄 Convenciones de Commits (Conventional Commits)
- `feat:` Nueva característica para el usuario
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Formatting (no afecta funcionalidad)
- `refactor:` Cambio de estructura sin cambiar comportamiento
- `test:` Añadir o corregir tests
- `chore:` Cambios en build process, herramientas, etc.

## ♿ Checklist de Accesibilidad (WCAG 2.1 AA)
- [ ] Contraste mínimo 4.5:1 para texto normal, 3:1 para grande
- [ ] Área táctil mínima 44x44px para elementos interactivos
- [ ] Navegación completa por teclado (tab order lógico)
- [ ] Todos los elementos interactivos tienen foco visible
- [ ] Imágenes informativas tienen `alt` descriptivo
- [ ] ARIA labels usados solo cuando necesario y correctamente

## 🚫 Prohibiciones Específicas
- No usar frameworks CSS (Bootstrap, Tailwind, etc.)
- No usar bibliotecas de JS para DOM manipulation
- No usar preprocesadores CSS (Sass, Less, etc.)
- No usar `alert()`, `prompt()`, `confirm()` en producción
- No tener console.log en código de producción