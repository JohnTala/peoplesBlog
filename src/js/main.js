// src/js/main.js
import logo from '../images/logo.png';

const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

// Detect base path (Vite dev vs production)
const base = import.meta.env.PROD ? '/peoplesBlog/' : '/';

// ------------------ HEADER ------------------
headerEl.innerHTML = `
  <div class="navbar">
    <div class="logo">
      <a href="${base}">
        <img id="siteLogo" src="${logo}" alt="People's Blogs Logo" class="logo">
      </a>
      <span>People's Blogs</span>
    </div>

    <button id="menu" aria-label="Toggle navigation" class="menu-btn">&#9776;</button>

    <nav>
      <ul class="navigation">
        <li><a href="${base}" class="nav-link">Home</a></li>
        <li><a href="${base}pages/about.html" class="nav-link">About</a></li>
        <li><a href="${base}pages/addForm.html" class="nav-link">Add Post</a></li>
        <li><a href="${base}pages/reviews.html" class="nav-link">Reviews</a></li>
      </ul>
    </nav>
  </div>
`;

// Mobile menu
const menuBtn = document.getElementById('menu');
const navList = document.querySelector('.navigation');

if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    menuBtn.classList.toggle('show');
  });
}

// Active nav link
const currentPath = window.location.pathname.replace(base, '/');
document.querySelectorAll('.nav-link').forEach(link => {
  const linkPath = link.getAttribute('href').replace(base, '/');
  if (currentPath === linkPath || (currentPath === '/' && linkPath === '/')) {
    link.classList.add('active');
  }
});

// ------------------ FOOTER ------------------
footerEl.innerHTML = `
  <p>&copy; <span id="currentYear"></span> 🌸 Saidi Talatala 🌸 | People's Blogs. All rights reserved</p>
  <p id="lastModifiedDate"></p>
`;

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModifiedDate').textContent =
  'Last Modified: ' + document.lastModified;
