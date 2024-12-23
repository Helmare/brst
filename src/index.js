import Alpine from 'alpinejs';
import './style.css';
import javascriptLogo from '/javascript.svg';
import viteLogo from '/vite.svg';

// Store vite references.
Alpine.store('refs', {
  viteLogo: viteLogo,
  javascriptLogo,
});

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();
