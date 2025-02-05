document.addEventListener("DOMContentLoaded", function () {
    const bookingContainer = document.getElementById("bookingContainer");
    const bookingTriggers = ['bookingBtn', 'bookNowBtn'];

    // Load the booking form dynamically
    fetch("booking-form.html")
        .then(response => response.text())
        .then(html => {
            bookingContainer.innerHTML = html;
            
            // Add click handlers to both buttons
            bookingTriggers.forEach(triggerId => {
                document.getElementById(triggerId)?.addEventListener("click", function() {
                    document.getElementById("bookingForm").classList.add("show");
                });
            });

            // Add close functionality
            document.getElementById("closeForm").addEventListener("click", function () {
                document.getElementById("bookingForm").classList.remove("show");
            });
        })
        .catch(error => console.error("Error loading booking form:", error));

    // Remove the automatic 5-second popup
});
