// js/singlepost.mjs
import { getPosts } from "./utils.js";

const singlePostEl = document.querySelector(".single-post");
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

if (!postId) {
  singlePostEl.innerHTML = `<p class="error">No post ID provided.</p>`;
  throw new Error("Missing post ID");
}

document.addEventListener("DOMContentLoaded", async () => {
  const posts = await getPosts(API_URL);
  const post = posts.find(p => p.id === Number(postId));

  if (!post) {
    singlePostEl.innerHTML = `<p class="error">Post not found.</p>`;
    return;
  }

  singlePostEl.innerHTML = `
    <article class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <a href="index.html" class="back-btn">← Back to Homepage</a>
    </article>
  `;
});
