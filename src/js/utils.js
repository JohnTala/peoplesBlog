// utils.js
export async function getPosts(url, options = {}) {
  try {
    const resp = await fetch(url, options);
    return await resp.json();
  } catch (err) {
    console.error("Request failed", err);
    return null;
  }
}
