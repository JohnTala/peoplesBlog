export async function loadPartial(elementId, url, callback) {
  const el = document.querySelector(elementId === 'header' ? 'header' : 'footer');
  if (!el) return;

  try {
    const res = await fetch(url);
    const html = await res.text();
    el.innerHTML = html;

    if (callback) callback();
  } catch (err) {
    console.error(`Failed to load partial ${url}:`, err);
  }
}
