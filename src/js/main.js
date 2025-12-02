// Import logo (Vite will hash it on build)
import logo from '../images/logo.png';

// GitHub Pages base path
const base = '/peoplesBlog/';

// Get elements
const headerEl = document.querySelector('header');
const footerEl = document.querySelector('footer');

// Header insertion

headerEl.innerHTML = `
  <div class="navbar">
    <div class="logo">
      <a href="${base}">
        <img id="siteLogo" alt="People's Blogs Logo" class="logo-img">
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

//  Set logo image
document.getElementById('siteLogo').src = logo;

//  Mobile menu toggle
const menuBtn = document.getElementById('menu');
const navList = document.querySelector('.navigation');
menuBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
  menuBtn.classList.toggle('show');
});

//  Highlight active nav link
const current = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const path = link.getAttribute('href');
  if (current.endsWith(path.replace(base, ''))) {
    link.classList.add('active');
  }
});

//Footer insertion
footerEl.innerHTML = `
  <p>&copy; <span id="currentYear"></span> 🌸 Saidi Talatala 🌸 | People's Blogs. All rights reserved</p>
  <p id="lastModifiedDate"></p>
`;

// footer dynamic year
document.getElementById('currentYear').textContent = new Date().getFullYear();

//Footer last modified
document.getElementById('lastModifiedDate').textContent =
  "Last Modified: " + document.lastModified;
