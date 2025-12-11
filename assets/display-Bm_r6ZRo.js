import"./main-BFu__7O1.js";const s=document.getElementById("reviewList");let t=JSON.parse(localStorage.getItem("reviews"))||[];function a(){if(t.length===0){s.innerHTML="<p style='text-align:center;'>No reviews yet. Be the first to submit one!</p>";return}const n=[...t].sort((e,i)=>i.timestamp-e.timestamp);s.innerHTML=n.map(e=>`
      <div class="review-card">
        <h3>${e.name}</h3>
        <p class="rating">${"★".repeat(e.rating)}${"☆".repeat(5-e.rating)}</p>
        <p class="date"><em>${new Date(e.timestamp).toLocaleDateString()}</em></p>
        <p class="message">${e.message}</p>
        <button class="delete-btn" data-id="${e.id}">Delete</button>
      </div>
    `).join(""),document.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",()=>{const i=Number(e.dataset.id);t=t.filter(r=>r.id!==i),localStorage.setItem("reviews",JSON.stringify(t)),a()})})}a();
