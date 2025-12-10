// addForm.mjs
import { getPosts } from "./utils.js";

const form = document.querySelector(".postForm");
const API = "https://jsonplaceholder.typicode.com/posts/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value;
  const body = form.body.value;

  const newPost = { title, body };

  // Send to API (fake, but OK)
  const created = await getPosts(API, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" }
  });

  // Give post a simple ID
  newPost.id = created.id || Date.now();

  // Store locally
  const stored = JSON.parse(localStorage.getItem("posts")) || [];
  stored.push(newPost);
  localStorage.setItem("posts", JSON.stringify(stored));

  // Go home
  window.location.href = "index.html";
});
