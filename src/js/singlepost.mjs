// singlePost.mjs
const container = document.querySelector(".single-post");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const posts = JSON.parse(localStorage.getItem("posts")) || [];

const post = posts[id];

if (!post) {
  container.innerHTML = "<p>Post not found.</p>";
} else {
  container.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <a href="index.html">← Back</a>
    <button class="delete">Delete</button>
  `;
}

// Delete post
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  posts.splice(id, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = "index.html";
});
