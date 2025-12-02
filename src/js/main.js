import { loadPartial } from './utils.js';

// Fix accidental /pages/pages/... URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}



// Base path for GitHub Pages project site
const basePath = '/peoplesBlog/';

// Load header/footer partials
loadPartial('header', `${basePath}partials/header.html`, () => {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  // Toggle menu
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }

  // Highlight current page
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', linkPath === currentPath);
  });
});

loadPartial('footer', `${basePath}partials/footer.html`);

// Populate dynamic year and last modified
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
