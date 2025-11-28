import { loadPartial } from './utils.js';

// Fix accidental duplicated /pages/pages/ URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}

// Determine correct base path for partials
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// Load header and footer
loadPartial('header', `${basePath}partials/header.html`, initHeader);
loadPartial('footer', `${basePath}partials/footer.html`);

// Initialize header after it's loaded
function initHeader() {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }

  // Fix logo path depending on page depth
  const logo = document.querySelector('header img.logo');
  if (logo) {
    logo.src = window.location.pathname.includes('/pages/')
      ? '../assets/images/logo.png'
      : 'assets/images/logo.png';
  }
}

// Combine DOMContentLoaded listeners
document.addEventListener('DOMContentLoaded', () => {
  // Current year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Last modified date
  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
