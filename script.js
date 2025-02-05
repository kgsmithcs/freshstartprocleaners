document.addEventListener("DOMContentLoaded", function () {
    const bookingContainer = document.getElementById("bookingContainer");
    const bookingTriggers = ['bookingBtn', 'bookNowBtn'];

    // Load the booking form dynamically
    fetch("booking-form.html")
        .then(response => response.text())
        .then(html => {
            bookingContainer.innerHTML = html;
            const bookingForm = document.getElementById("bookingForm");
            const backdrop = document.querySelector(".booking-backdrop");

            // Add click handlers to both buttons
            bookingTriggers.forEach(triggerId => {
                document.getElementById(triggerId)?.addEventListener("click", function() {
                    bookingForm.classList.add("show");
                    backdrop.classList.add("show");
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                });
            });

            // Add close functionality
            document.getElementById("closeForm").addEventListener("click", closeForm);
            backdrop.addEventListener("click", closeForm);

            function closeForm() {
                bookingForm.classList.remove("show");
                backdrop.classList.remove("show");
                document.body.style.overflow = ''; // Restore scrolling
            }
        })
        .catch(error => console.error("Error loading booking form:", error));
});
