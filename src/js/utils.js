// src/js/utils.js
export async function getPosts(url) {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (err) {
    console.error("No data retrieved", err);
    return [];
  }
}
