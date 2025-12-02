

// // Fix accidental duplicated /pages/pages/ URLs
// if (window.location.pathname.includes('/pages/pages/')) {
//   const corrected = window.location.pathname.replace('/pages/pages/', '/pages/');
//   window.location.replace(corrected);
// }
// import { loadPartial } from './utils.js';


// // Determine path to partials based on page location
// const isInPages = window.location.pathname.includes('/pages/');
// const basePath = isInPages ? '../partials/' : './partials/';

// loadPartial('header', `${basePath}header.html`, () => {
//   const menuBtn = document.getElementById('menu');
//   const navList = document.querySelector('.navigation');
//   if (menuBtn && navList) {
//     menuBtn.addEventListener('click', () => {
//       menuBtn.classList.toggle('show');
//       navList.classList.toggle('show');
//     });
//   }
// });

// loadPartial('footer', `${basePath}footer.html`);

// document.addEventListener('DOMContentLoaded', () => {
//   const yearSpan = document.getElementById('currentYear');
//   if (yearSpan) yearSpan.textContent = new Date().getFullYear();

//   const lastModified = document.getElementById('lastModifiedDate');
//   if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
// });

import { loadPartial } from './utils.js';

// Load header/footer from public/partials (absolute paths)
loadPartial('header', '/partials/header.html', () => {
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }
});

loadPartial('footer', '/partials/footer.html');

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById('lastModifiedDate');
  if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
});
