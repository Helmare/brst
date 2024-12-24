import Alpine from 'alpinejs';
import './style.css';

// Store vite references.
Alpine.store('refs', {
  viteLogo: viteLogo,
  javascriptLogo,
});

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();
