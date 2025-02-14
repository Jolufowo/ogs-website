// Open Image Modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Mark Past Events
function markPastEvents() {
    const currentDate = new Date();
    document.querySelectorAll('.event-card').forEach(card => {
        let eventDate = new Date(card.getAttribute('data-event-date'));
        if (currentDate > eventDate) {
            card.style.opacity = "0.5";
            card.innerHTML += "<p class='past-event'>Past Event</p>";
        }
    });
}
document.addEventListener('DOMContentLoaded', markPastEvents);
