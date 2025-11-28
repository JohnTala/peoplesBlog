
export async function loadPartial(id, url, callback) {
  const target = document.getElementById(id);
  if (!target) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load partial: ${url}`);
    target.innerHTML = await response.text();

    if (callback) callback();
  } catch (err) {
    console.error(err);
  }
}
