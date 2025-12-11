import"./main-BFu__7O1.js";import{g as c}from"./utils-BVycY-BD.js";const a=document.querySelector(".preview"),l="https://jsonplaceholder.typicode.com/posts/";let n=[];document.addEventListener("DOMContentLoaded",async()=>{const t=JSON.parse(localStorage.getItem("localPosts"))||[];let e=await c(l);e=e.map(o=>({...o,timestamp:Date.now()-Math.floor(Math.random()*99999999)})),n=[...t,...e],n.sort((o,s)=>s.timestamp-o.timestamp),r(n)});function r(t){if(t.length===0){a.innerHTML="<p>No posts found.</p>";return}a.innerHTML=t.map(e=>`
      <div class="preview_post">
        <h3>${e.title}</h3>
        <p>${e.body.slice(0,100)}...</p>
        <a href="singlepost.html?id=${e.id}">Read more</a>
        <p><em>${new Date(e.timestamp).toDateString()}</em></p>
      </div>
    `).join("")}const i=document.querySelector(".search"),d=i.querySelector("input");i.addEventListener("submit",t=>{t.preventDefault()});d.addEventListener("input",t=>{const e=t.target.value.toLowerCase(),o=n.filter(s=>s.title.toLowerCase().includes(e)||s.body.toLowerCase().includes(e));r(o)});
