document.addEventListener("DOMContentLoaded", function () {
    const bookingContainer = document.getElementById("bookingContainer");

    // Load the booking form dynamically
    fetch("booking-form.html")
        .then(response => response.text())
        .then(html => {
            bookingContainer.innerHTML = html;

            // Show the form after 3 seconds
            setTimeout(function () {
                document.getElementById("bookingForm").classList.add("show");
            }, 3000);

            // Add close functionality
            document.getElementById("closeForm").addEventListener("click", function () {
                document.getElementById("bookingForm").classList.remove("show");
            });
        })
        .catch(error => console.error("Error loading booking form:", error));
});
