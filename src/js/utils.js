// main.js

import { loadPartial } from './utils.js';

// Fix accidental duplicated /pages/pages/ URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}

// Determine base path for partials depending on page depth
const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// Load header and footer dynamically
loadPartial('header', `${basePath}partials/header.html`, initHeader);
loadPartial('footer', `${basePath}partials/footer.html`);

// Function to initialize header after it's loaded
function initHeader() {
  setupHamburger();
  updateLogoPath();
}

// Hamburger menu toggle
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

// Update logo path based on page depth
function updateLogoPath() {
  const isInsidePages = window.location.pathname.includes('/pages/');
  const logo = document.querySelector('header img.logo');

  if (logo) {
    logo.src = isInsidePages
      ? '../assets/images/logo.png'
      : 'assets/images/logo.png';
  }
}

// DOMContentLoaded actions
document.addEventListener('DOMContentLoaded', () => {
  // Update current year dynamically
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Update last modified date
  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
