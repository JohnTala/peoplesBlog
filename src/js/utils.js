// Load a partial HTML (header/footer) into the page
export async function loadPartial(elementId, url, callback) {
  const el = document.getElementById(elementId); // select by ID
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const html = await res.text();
    el.innerHTML = html;

    if (callback) callback();
  } catch (err) {
    console.error(`Failed to load partial ${url}:`, err);
  }
}
