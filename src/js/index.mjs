// index.mjs
import { getPosts} from "./utils.js";

const preview = document.querySelector(".preview");
const API = "https://jsonplaceholder.typicode.com/posts/";

document.addEventListener("DOMContentLoaded", async () => {
  let posts = JSON.parse(localStorage.getItem("posts"));

  // If no local posts → fetch from API once
  if (!posts) {
    posts = await getPosts(API);
    localStorage.setItem("posts", JSON.stringify(posts));
  }

  render(posts);
});

function render(posts) {
  preview.innerHTML = posts
    .map((p, index) => `
      <div class="postCard">
        <h2>${p.title}</h2>
        <p>${p.body.slice(0, 80)}...</p>
        <a href="singlePost.html?id=${index}">Read More</a>
      </div>
    `)
    .join("");
}
