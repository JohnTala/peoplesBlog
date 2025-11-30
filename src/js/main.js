// import { loadPartial } from './utils.js';

// // Fix accidental duplicated /pages/pages/ URLs
// if (window.location.pathname.includes('/pages/pages/')) {
//   const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
//   window.location.replace(corrected);
// }

// // Detect correct path for partials
// const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

// // Load header + footer
// loadPartial('header', `${basePath}partials/header.html`, () => {
//   // Hamburger menu setup
//   const menuBtn = document.getElementById('menu');
//   const navList = document.querySelector('.navigation');
//   if (menuBtn && navList) {
//     menuBtn.addEventListener('click', () => {
//       menuBtn.classList.toggle('show');
//       navList.classList.toggle('show');
//     });
//   }

//   // Fix logo path depending on page depth
//   const isInsidePages = window.location.pathname.includes('/pages/');
//   const logo = document.querySelector('header img.logo');
//   if (logo) {
//     logo.src = isInsidePages
//       ? '../assets/images/logo.png'
//       : 'assets/images/logo.png';
//   }
// });

// loadPartial('footer', `${basePath}partials/footer.html`);

// // DOMContentLoaded for year & last modified
// document.addEventListener('DOMContentLoaded', () => {
//   const yearSpan = document.getElementById('currentYear');
//   if (yearSpan) yearSpan.textContent = new Date().getFullYear();

//   const lastModified = document.getElementById('lastModifiedDate');
//   if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
// });



// Fix accidental duplicated /pages/pages/ URLs
if (window.location.pathname.includes('/pages/pages/')) {
  const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
  window.location.replace(corrected);
}

import { loadPartial } from './utils.js';

// Determine relative path to partials
const basePath = window.location.pathname.includes('/pages/') ? '../partials/' : './partials/';

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

// Update year & last modified
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
