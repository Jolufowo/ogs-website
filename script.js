// This script handles the functionality for the image modal, marking past events, back-to-top button, and smooth scrolling enhancements.

// === IMAGE MODAL FUNCTIONALITY ===

// Open Image Modal with Fade-in Effect
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modal.style.opacity = "0";
    modalImg.src = img.src;
    modalImg.style.transform = "scale(1)"; // Reset zoom level

    setTimeout(() => {
        modal.style.opacity = "1"; // Smooth fade-in effect
    }, 50);
}

// Close Modal with Fade-out Effect
function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Fade-out before closing
}

// Add Zoom Level Indicator
function zoomIn() {
    let modalImg = document.getElementById("modalImage");
    let zoomLabel = document.getElementById("zoomLevel");

    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    modalImg.style.transform = `scale(${currentScale + 0.2})`;

    zoomLabel.innerText = `Zoom: ${(currentScale + 0.2).toFixed(1)}x`;
}

function zoomOut() {
    let modalImg = document.getElementById("modalImage");
    let zoomLabel = document.getElementById("zoomLevel");

    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    if (currentScale > 1) {
        modalImg.style.transform = `scale(${currentScale - 0.2})`;
        zoomLabel.innerText = `Zoom: ${(currentScale - 0.2).toFixed(1)}x`;
    }
}

// Close Modal when Clicking Outside Image
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};

// === KEYBOARD SHORTCUTS ===
document.addEventListener("keydown", function(event) {
    let modal = document.getElementById("imageModal");

    if (modal.style.display === "flex") {
        if (event.key === "Escape") {
            closeModal();
        } else if (event.key === "+") {
            zoomIn();
        } else if (event.key === "-") {
            zoomOut();
        }
    }
});

// === MARK PAST EVENTS ===
function markPastEvents() {
    const currentDate = new Date();
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        const eventDate = new Date(card.getAttribute('data-event-date'));

        if (currentDate > eventDate) {
            card.style.opacity = "0.5"; // Fade out past events
            card.style.pointerEvents = "none"; // Prevent interaction

            const pastEventLabel = document.createElement('p');
            pastEventLabel.className = 'past-event';
            pastEventLabel.innerText = '✅ Completed';
            pastEventLabel.style.color = "green";
            pastEventLabel.style.fontWeight = "bold";
            card.appendChild(pastEventLabel);
        }
    });
}

// Run markPastEvents on page load
document.addEventListener('DOMContentLoaded', markPastEvents);

// === BACK TO TOP BUTTON ===
window.onscroll = function() {
    let backToTop = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll Back to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// === SMOOTH SCROLLING FOR NAVIGATION ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// === TOGGLE MOBILE MENU (HAMBURGER) ===
function toggleMenu() {
    let navBar = document.querySelector(".nav-bar ul");
    navBar.classList.toggle("active");
}
