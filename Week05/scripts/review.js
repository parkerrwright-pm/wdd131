const submission = new URLSearchParams(window.location.search);
const hasRequiredFields = ["product", "stars", "installation"]
    .every(field => submission.has(field) && submission.get(field));
const reviewCount = document.getElementById("review-count");

if (hasRequiredFields) {
    const storedCount = Number.parseInt(localStorage.getItem("reviewCount") ?? "0", 10);
    const updatedCount = storedCount + 1;
    localStorage.setItem("reviewCount", updatedCount.toString());
    reviewCount.textContent = `You have submitted ${updatedCount} review${updatedCount === 1 ? "" : "s"}.`;
} else {
    reviewCount.textContent = "No review was submitted.";
}
