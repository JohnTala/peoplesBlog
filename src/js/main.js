//  Fix accidental duplicated /pages/pages/ URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}

import { loadPartial } from './utils.js';

// Detect correct path for partials
const basePath = window.location.pathname.includes('/pages/')
  ? '../'
  : '';

// Load header + footer
loadPartial('header', `${basePath}partials/header.html`, setupHamburger);
loadPartial('footer', `${basePath}partials/footer.html`);

// 🎉 This runs AFTER the header loads
function setupHamburger() {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }
}


// Fix logo path automatically depending on page depth
document.addEventListener("DOMContentLoaded", () => {

  const isInsidePages = window.location.pathname.includes('/pages/');
  const logo = document.querySelector('header img.logo');

  if (logo) {
    logo.src = isInsidePages
      ? '../assets/images/logo.png'
      : 'assets/images/logo.png';
  }

});


// Example: dynamic current year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});

