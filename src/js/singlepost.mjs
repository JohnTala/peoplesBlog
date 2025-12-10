// singlePost.mjs
import { getPosts} from "./utils.js";

const container = document.querySelector(".single-post");
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

const params = new URLSearchParams(window.location.search);
const postId = Number(params.get("id"));

if (!postId) {
  container.innerHTML = `<p>Invalid Post.</p>`;
}

document.addEventListener("DOMContentLoaded", async () => {
  
  // Load local posts
  const localPosts = JSON.parse(localStorage.getItem("localPosts")) || [];
  let post = localPosts.find((p) => p.id === postId);

  // If not in localStorage → load from API
  if (!post) {
    const apiPost = await getPosts(API_URL + postId);
    post = apiPost;
  }

  if (!post) {
    container.innerHTML = `<p>Post not found.</p>`;
    return;
  }

  // Render post
  container.innerHTML = `
    <article class="singlePostCard">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <a href="index.html" class="back-btn">← Back</a>
      ${
        // Only local posts can be deleted
        localPosts.some(p => p.id === postId)
          ? `<button class="delete-btn">Delete</button>`
          : ``
      }
    </article>
  `;

  // Delete button logic (local only)
  const deleteBtn = document.querySelector(".delete-btn");

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (!confirm("Delete this post?")) return;

      const updated = localPosts.filter((p) => p.id !== postId);
      localStorage.setItem("localPosts", JSON.stringify(updated));

      alert("Post deleted!");
      window.location.href = "index.html";
    });
  }
});
