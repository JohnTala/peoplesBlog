// reviews.mjs

const form = document.getElementById("reviewForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newReview = {
    id: Date.now(),
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    rating: Number(form.rating.value),
    message: form.message.value.trim(),
    timestamp: Date.now()
  };

  // Load existing reviews
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.unshift(newReview); // Newest first
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Redirect to display.html after submitting
  window.location.href = "display.html";
});
