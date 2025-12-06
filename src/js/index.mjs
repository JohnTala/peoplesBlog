// src/js/index.mjs

import { getPosts } from "./utils.js";

const myPreview = document.querySelector(".preview");
const my_url = "https://jsonplaceholder.typicode.com/posts/";
const today=new Date();
document.addEventListener("DOMContentLoaded", async () => {
  const posts = await getPosts(my_url);

  console.log(posts);

  myPreview.innerHTML = posts
    .map(post => `
        <div class="preview_post" key=${post.id}>
        <h2>${post.title}</h2>
        <p>${post.body.slice(0,200)}...</p>
       <a href="singlepost.html?id=${post.id}">Read More...</a>
        <p><em>${today.toDateString()}</em></p>
        </div>
        `)
    .join("");
});
