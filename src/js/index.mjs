
import { getPosts } from "./utils.js";

const myPreview = document.querySelector(".preview");
const my_url = "https://jsonplaceholder.typicode.com/posts/";
const today = new Date();

document.addEventListener("DOMContentLoaded", async () => {

  //try to load from localStorage
  const cached_posts=localStorage.getItem("posts")
  if(cached_posts){
    const posts=JSON.parse(cached_posts)
    renderPosts(posts)
  }

  //fetch from Api
  const posts = await getPosts(my_url);

  //save to LocalStorage
  localStorage.setItem("posts",JSON.stringify(posts))

  renderPosts(posts)

  
});

function renderPosts(posts){
 myPreview.innerHTML = posts
    .map(
      (post) => `
        <div class="preview_post" key=${post.id}>
          <h2>${post.title}</h2>
          <p>${post.body.slice(0, 100)}...</p>
          <a href="singlepost.html?id=${post.id}">Read More...</a>
          <p><em>${today.toDateString()}</em></p>
        </div>
      `
    )
    .join("");
}
