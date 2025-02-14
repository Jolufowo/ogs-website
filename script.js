// DARK MODE TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if user previously enabled Dark Mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.removeItem("dark-mode");
        }
    });

    // Call function to handle event status updates
    updateEventStatus();
});

// FUNCTION: Move past events to Announcements & Keep Active Events
function updateEventStatus() {
    const currentDate = new Date(); // Get today's date
    const eventsSection = document.querySelector(".events-section");
    const announcementsSection = document.querySelector(".announcements-section");

    document.querySelectorAll(".event-card").forEach(card => {
        const eventDate = new Date(card.getAttribute("data-event-date"));
        const statusElement = card.querySelector(".status");

        if (eventDate < currentDate) {
            // If the event is in the past, move it to the Announcements page
            statusElement.innerText = "Past Event";
            statusElement.style.color = "red";

            if (announcementsSection) {
                announcementsSection.appendChild(card);
            } else {
                card.style.display = "none"; // Hide on homepage
            }
        } else {
            // If the event is still active, keep it on homepage
            statusElement.innerText = "Active Event";
            statusElement.style.color = "green";

            if (eventsSection) {
                eventsSection.appendChild(card);
            }
        }
    });
}
