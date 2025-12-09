// js/singlepost.mjs
import { getPosts } from "./utils.js";

const singlePostEl = document.querySelector(".single-post");
const API_URL = "https://jsonplaceholder.typicode.com/posts/";
 const deleteBtn = document.querySelector(".delete-btn");


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
    <article class="single-post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <a href="index.html" class="back-btn">Back to Homepage</a>
      <button class="delete-btn">Delete</button>
    </article>
  `;

 
  deleteBtn.addEventListener("click", async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(API_URL + postId, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully!");
      window.location.href = "index.html"; // redirect to homepage
    } catch (error) {
      console.error(error);
      alert("Something went wrong while deleting.");
    }
  });
});
