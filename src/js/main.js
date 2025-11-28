import { loadPartial } from './utils.js';

// Fix accidental duplicate /pages/pages/ URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}

// Determine base path for partials
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// Load partials
loadPartial('header', `${basePath}partials/header.html`, hamburgerMenu);
loadPartial('footer', `${basePath}partials/footer.html`);

// Hamburger menu
function hamburgerMenu() {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }
}

// DOMContentLoaded: combine logo, current year, last modified
document.addEventListener('DOMContentLoaded', () => {
  const isInsidePages = window.location.pathname.includes('/pages/');
  
  const logo = document.querySelector('header img.logo');
  if (logo) logo.src = isInsidePages ? '../assets/images/logo.png' : 'assets/images/logo.png';

  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
