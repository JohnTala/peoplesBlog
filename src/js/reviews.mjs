// reviews.mjs

// Select form and container
const form = document.getElementById("reviewForm");

// Optional: preview container for submitted reviews on the same page
const reviewPreview = document.createElement("div");
reviewPreview.className = "reviews-preview";
document.querySelector(".review-form").appendChild(reviewPreview);

// Load existing reviews
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
renderReviews(reviews);

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newReview = {
    id: Date.now(), // unique id
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    rating: Number(form.rating.value),
    message: form.message.value.trim(),
    timestamp: Date.now()
  };

  // Add new review at the top
  reviews.unshift(newReview);

  // Save to localStorage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Re-render reviews preview
  renderReviews(reviews);

  // Reset the form
  form.reset();
});

// Function to render reviews (preview on same page)
function renderReviews(reviewsArray) {
  if (reviewsArray.length === 0) {
    reviewPreview.innerHTML = "<p>No reviews yet. Be the first to submit one!</p>";
    return;
  }

  reviewPreview.innerHTML = reviewsArray
    .map(
      (r) => `
      <div class="review-card">
        <h4>${r.name} - ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</h4>
        <p><em>${new Date(r.timestamp).toLocaleDateString()}</em></p>
        <p>${r.message}</p>
      </div>
    `
    )
    .join("");
}
