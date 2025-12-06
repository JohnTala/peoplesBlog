import"./main-B0qF9uNd.js";import{g as o}from"./utils-De4iNX3m.js";const i=document.querySelector(".preview"),n="https://jsonplaceholder.typicode.com/posts/",s=new Date;document.addEventListener("DOMContentLoaded",async()=>{const t=await o(n);console.log(t),i.innerHTML=t.map(e=>`
        <div class="preview_post" key=${e.id}>
        <h2>${e.title}</h2>
        <p>${e.body.slice(0,200)}...</p>
       <a href="singlepost.html?id=${e.id}">Read More...</a>
        <p><em>${s.toDateString()}</em></p>
        </div>
        `).join("")});
