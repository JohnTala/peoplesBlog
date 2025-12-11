// display.js

const reviewList = document.getElementById("reviewList");

// Load reviews from localStorage
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function renderReviews() {
  if (reviews.length === 0) {
    reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet. Be the first to submit one!</p>";
    return;
  }

  // Sort newest first
  const sortedReviews = [...reviews].sort((a, b) => b.timestamp - a.timestamp);

  reviewList.innerHTML = sortedReviews
    .map(
      (r) => `
      <div class="review-card">
        <h3>${r.name}</h3>
        <p class="rating">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
        <p class="date"><em>${new Date(r.timestamp).toLocaleDateString()}</em></p>
        <p class="message">${r.message}</p>
        <button class="delete-btn" data-id="${r.id}">Delete</button>
      </div>
    `
    )
    .join("");

  // Attach delete event listeners
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      reviews = reviews.filter((r) => r.id !== id);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      renderReviews(); // Re-render after deletion
    });
  });
}

// Initial render
renderReviews();
