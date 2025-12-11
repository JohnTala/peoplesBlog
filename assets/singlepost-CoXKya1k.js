import"./main-BFu__7O1.js";import{g as c}from"./utils-BVycY-BD.js";const s=document.querySelector(".single-post"),l="https://jsonplaceholder.typicode.com/posts/",r=new URLSearchParams(window.location.search),o=Number(r.get("id"));o||(s.innerHTML="<p>Invalid Post.</p>");document.addEventListener("DOMContentLoaded",async()=>{const n=JSON.parse(localStorage.getItem("localPosts"))||[];let e=n.find(t=>t.id===o);if(e||(e=await c(l+o)),!e){s.innerHTML="<p>Post not found.</p>";return}s.innerHTML=`
    <article class="singlePostCard">
      <h2>${e.title}</h2>
      <p>${e.body}</p>
      <a href="index.html" class="back-btn">← Back</a>
      ${n.some(t=>t.id===o)?'<button class="delete-btn">Delete</button>':""}
    </article>
  `;const a=document.querySelector(".delete-btn");a&&a.addEventListener("click",()=>{if(!confirm("Delete this post?"))return;const t=n.filter(i=>i.id!==o);localStorage.setItem("localPosts",JSON.stringify(t)),alert("Post deleted!"),window.location.href="index.html"})});
