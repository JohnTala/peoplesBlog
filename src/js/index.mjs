import { getPosts } from "./utils.js";

const container = document.querySelector(".preview");

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

let allPosts = [];

document.addEventListener("DOMContentLoaded", async () => {
  // Load local posts
  const localPosts = JSON.parse(localStorage.getItem("localPosts")) || [];

  // Load API posts
  let apiPosts = await getPosts(API_URL);

  // Add timestamp for sorting (API has none)
  apiPosts = apiPosts.map((p) => ({
    ...p,
    timestamp: Date.now() - Math.floor(Math.random() * 99999999)
  }));

  // Merge API + local posts
  allPosts = [...localPosts, ...apiPosts];

  // Sort newest first
  allPosts.sort((a, b) => b.timestamp - a.timestamp);

  renderPosts(allPosts);
});

// Render posts to the container
function renderPosts(posts) {
  if (posts.length === 0) {
    container.innerHTML = "<p>No posts found.</p>";
    return;
  }

  container.innerHTML = posts
    .map(
      (post) => `
      <div class="preview_post">
        <h3>${post.title}</h3>
        <p>${post.body.slice(0, 100)}...</p>
        <a href="singlepost.html?id=${post.id}">Read more</a>
        <p><em>${new Date(post.timestamp).toDateString()}</em></p>
      </div>
    `
    )
    .join("");
}

const searchForm = document.querySelector(".search");
const searchInput = searchForm.querySelector("input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
});

// Real-time search
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
  );

  renderPosts(filteredPosts);
});

