(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d="/peoplesBlog/assets/logo-By2rnrGI.png",n="/peoplesBlog/",u=document.querySelector("header"),f=document.querySelector("footer");u.innerHTML=`
  <div class="navbar">
    <div class="logo-nav">
      <a href="${n}index.html">
        <img id="siteLogo" src="${d}" alt="People's Blogs Logo" class="logo">
      </a>
    </div>

    <button id="menu" aria-label="Toggle navigation" class="menu-btn">&#9776;</button>

    <nav>
      <ul class="navigation">
        <li><a href="${n}index.html" class="nav-link">Home</a></li>
        <li><a href="${n}about.html" class="nav-link">About</a></li>
        <li><a href="${n}addForm.html" class="nav-link">Add Post</a></li>
        <li><a href="${n}reviews.html" class="nav-link">Reviews</a></li>
      </ul>
    </nav>
  </div>
`;const i=document.getElementById("menu"),a=document.querySelector(".navigation");i&&a&&i.addEventListener("click",()=>{a.classList.toggle("show"),i.classList.toggle("show")});const g=window.location.pathname.split("/").pop();document.querySelectorAll(".nav-link").forEach(l=>{const o=l.getAttribute("href").split("/").pop();g===o&&l.classList.add("active")});f.innerHTML=`
  <p>&copy; <span id="currentYear"></span> 🌸 Saidi Talatala 🌸 | People's Blogs. All rights reserved</p>
  <p id="lastModifiedDate"></p>
`;document.getElementById("currentYear").textContent=new Date().getFullYear();document.getElementById("lastModifiedDate").textContent="Last Modified: "+document.lastModified;
