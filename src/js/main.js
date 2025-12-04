// ------------------ BASE PATH ------------------
const BASE = "/peoplesBlog/";

// ------------------ ELEMENTS ------------------
const headerEl = document.getElementById("header");
const footerEl = document.getElementById("footer");

// ------------------ HEADER ------------------
headerEl.innerHTML = `
  <div class="navbar">
    <div class="logo">
      <a href="${BASE}src/index.html">
        <img id="siteLogo" src="${BASE}src/images/logo.png" alt="People's Blogs Logo" class="logo">
      </a>
      <span>People's Blogs</span>
    </div>

    <button id="menu" aria-label="Toggle navigation" class="menu-btn">&#9776;</button>

    <nav>
      <ul class="navigation">
        <li><a href="${BASE}src/index.html" class="nav-link">Home</a></li>
        <li><a href="${BASE}src/about.html" class="nav-link">About</a></li>
        <li><a href="${BASE}src/addForm.html" class="nav-link">Add Post</a></li>
        <li><a href="${BASE}src/reviews.html" class="nav-link">Reviews</a></li>
      </ul>
    </nav>
  </div>
`;

// ------------------ MOBILE NAV ------------------
const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navigation");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
    menuBtn.classList.toggle("show");
  });
}

// ------------------ ACTIVE LINK ------------------
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (currentPage === linkPage) {
    link.classList.add("active");
  }
});

// ------------------ FOOTER ------------------
footerEl.innerHTML = `
  <p>&copy; <span id="currentYear"></span> 🌸 Saidi Talatala 🌸 | People's Blogs. All rights reserved</p>
  <p id="lastModifiedDate"></p>
`;

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent =
  "Last Modified: " + document.lastModified;
