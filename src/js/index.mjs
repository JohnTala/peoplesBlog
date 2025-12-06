const myPreview = document.querySelector('.preview');
const my_url = `https://jsonplaceholder.typicode.com/posts/`;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resp = await fetch(my_url);
        const data = await resp.json();
        console.log(data[0].title);

        // Example: show first post title
        //myPreview.textContent = data[0].title;

    } catch (error) {
        console.error("Fetch error:", error);
    }
});
