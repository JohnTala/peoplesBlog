import { loadPartial } from './utils.js';

// Use Vite base URL
const basePath = import.meta.env.BASE_URL + 'partials/';

// Load header
loadPartial('header', `${basePath}header.html`, () => {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }
});

// Load footer
loadPartial('footer', `${basePath}footer.html`);

// Dynamic year and last modified
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
