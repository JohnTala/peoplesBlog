// addForm.mjs
import { getPosts } from "./utils.js";

const form = document.querySelector(".postForm");
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newPost = {
    title: form.title.value,
    body: form.body.value,
    timestamp: Date.now(),
  };

  // Send to API (fake API always returns an object with id: 101)
  const created = await getPosts(API_URL, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });

  // Use API ID or fallback
  newPost.id = created?.id || Date.now();

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem("localPosts")) || [];
  existing.push(newPost);
  localStorage.setItem("localPosts", JSON.stringify(existing));

  window.location.href = "index.html";
});
