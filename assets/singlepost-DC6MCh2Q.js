import"./main-B0qF9uNd.js";import{g as n}from"./utils-De4iNX3m.js";const t=document.querySelector(".single-post"),r="https://jsonplaceholder.typicode.com/posts/",a=new URLSearchParams(window.location.search),s=a.get("id");if(!s)throw t.innerHTML='<p class="error">No post ID provided.</p>',new Error("Missing post ID");document.addEventListener("DOMContentLoaded",async()=>{const o=(await n(r)).find(e=>e.id===Number(s));if(!o){t.innerHTML='<p class="error">Post not found.</p>';return}t.innerHTML=`
    <article class="single-post">
      <h2>${o.title}</h2>
      <p>${o.body}</p>
      <a href="index.html" class="back-btn">Back to Homepage</a>
    </article>
  `});
