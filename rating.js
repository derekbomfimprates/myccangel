document.addEventListener("DOMContentLoaded", () => {
  const submitRatingButton = document.getElementById("submitRating");
  const ratingInput = document.getElementById("ratingInput");
  const ratingResponse = document.getElementById("ratingResponse");
  const correctionSection = document.createElement("div");

  correctionSection.id = "correctionSection";
  correctionSection.style.display = "none";
  correctionSection.innerHTML = `
    <p style="color: red;">You rated less than 4. Please provide your correction below:</p>
    <textarea id="correctionInput" placeholder="Write your correction here..." style="width: 80%; height: 100px;"></textarea><br>
    <button id="submitCorrection" style="margin-top: 10px;">Submit Correction</button>
  `;
  document.body.appendChild(correctionSection);

  if (submitRatingButton) {
    submitRatingButton.addEventListener("click", async () => {
      const rating = ratingInput.value.trim();

      if (/^[1-5]$/.test(rating)) {
        const selectedRating = parseInt(rating, 10);
        try {
          const response = await fetch("/rate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rating: selectedRating }),
          });

          const data = await response.json();
          ratingResponse.innerHTML = `<p>${data.response}</p>`;

          // Show correction section if needed
          if (data.ask_for_correction) {
            correctionSection.style.display = "block";
          } else {
            correctionSection.style.display = "none";
          }
        } catch (error) {
          ratingResponse.innerHTML = `<p style="color: red;">An error occurred while submitting your rating. Please try again later.</p>`;
        }
      } else {
        ratingResponse.innerHTML = `<p style="color: red;">Please enter a valid rating between 1 and 5.</p>`;
      }
    });
  }

  correctionSection.addEventListener("click", async (event) => {
    if (event.target.id === "submitCorrection") {
      const correctionInput = document.getElementById("correctionInput");
      const correction = correctionInput.value.trim();

      if (correction) {
        try {
          const response = await fetch("/submit_correction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correction, original_answer: "Original Answer Placeholder" }),
          });

          const data = await response.json();
          ratingResponse.innerHTML = `<p>${data.response}</p>`;
          correctionSection.style.display = "none";
          correctionInput.value = ""; // Clear correction box
        } catch (error) {
          ratingResponse.innerHTML = `<p style="color: red;">An error occurred while submitting your correction. Please try again later.</p>`;
        }
      } else {
        ratingResponse.innerHTML = `<p style="color: red;">Please provide a correction before submitting.</p>`;
      }
    }
  });
});
