// utils.js


export function loadPartial(targetId, url, callback) {
  const targetEl = document.getElementById(targetId);

  if (!targetEl) {
    console.warn(`Element with ID "${targetId}" not found.`);
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      targetEl.innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}
