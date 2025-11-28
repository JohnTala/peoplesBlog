


export async function loadPartial(id, filePath, callback) {
  try {
    const response = await fetch(filePath);
    const content = await response.text();

    document.querySelector(id).innerHTML = content;

    if (callback) callback(); // ← Run hamburger setup AFTER load
  } catch (error) {
    console.error(`Failed to load partial: ${filePath}`, error);
  }
}


// export async function loadPartial(selector, url) {
//   try {
//     const container = document.querySelector(selector);

//     if (!container) {
//       console.warn(`loadPartial(): Element "${selector}" not found in DOM.`);
//       return;
//     }

//     const response = await fetch(url);
    
//     if (!response.ok) {
//       console.error(` ERROR loading partial "${url}". Server responded with:`, response.status);
//       return;
//     }

//     const html = await response.text();
//     container.innerHTML = html;

//   } catch (err) {
//     console.error(` Failed to load partial "${url}":`, err);
//   }
// }


