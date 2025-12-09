// // src/js/index.mjs

// import { getPosts } from "./utils.js";

// const myPreview = document.querySelector(".preview");
// const my_url = "https://jsonplaceholder.typicode.com/posts/";
// const today=new Date();
// document.addEventListener("DOMContentLoaded", async () => {
//   const posts = await getPosts(my_url);

//   console.log(posts);

//   myPreview.innerHTML = posts
//     .map(post => `
//         <div class="preview_post" key=${post.id}>
//         <h2>${post.title}</h2>
//         <p>${post.body.slice(0,200)}...</p>
//        <a href="singlepost.html?id=${post.id}">Read More...</a>
//         <p><em>${today.toDateString()}</em></p>
//         </div>
//         `)
//     .join("");
// });

// src/js/index.mjs
import { getPosts } from "./utils.js";

const myPreview = document.querySelector(".preview");
const my_url = "https://jsonplaceholder.typicode.com/posts/";
const today = new Date();

document.addEventListener("DOMContentLoaded", async () => {

  // 1️⃣ Try to load from localStorage
  const cached = localStorage.getItem("posts");
  if (cached) {
    const posts = JSON.parse(cached);
    renderPosts(posts);
  }

  // 2️⃣ Fetch fresh posts from API
  const posts = await getPosts(my_url);

  // 3️⃣ Save to localStorage
  localStorage.setItem("posts", JSON.stringify(posts));

  // 4️⃣ Render new posts
  renderPosts(posts);
});

function renderPosts(posts) {
  myPreview.innerHTML = posts
    .map(
      (post) => `
        <div class="preview_post" key=${post.id}>
          <h2>${post.title}</h2>
          <p>${post.body.slice(0, 200)}...</p>
          <a href="singlepost.html?id=${post.id}">Read More...</a>
          <p><em>${today.toDateString()}</em></p>
        </div>
      `
    )
    .join("");
}
