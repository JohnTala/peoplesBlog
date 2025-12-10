// display.js

const reviewList = document.getElementById("reviewList");

// Load reviews from localStorage
const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// Render reviews
function renderReviews(reviewsArray) {
  if (reviewsArray.length === 0) {
    reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet. Be the first to submit one!</p>";
    return;
  }

  // Sort newest first
  reviewsArray.sort((a, b) => b.timestamp - a.timestamp);

  reviewList.innerHTML = reviewsArray
    .map(
      (r) => `
      <div class="review-card">
        <h3>${r.name}</h3>
        <p class="rating">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
        <p class="date"><em>${new Date(r.timestamp).toLocaleDateString()}</em></p>
        <p class="message">${r.message}</p>
      </div>
    `
    )
    .join("");
}

renderReviews(reviews);
