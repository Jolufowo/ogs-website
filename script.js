// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Image Modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.style.transform = "scale(1)";
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Zoom Controls
function zoomIn() {
    let modalImg = document.getElementById("modalImage");
    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    modalImg.style.transform = `scale(${currentScale + 0.2})`;
}

function zoomOut() {
    let modalImg = document.getElementById("modalImage");
    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    if (currentScale > 1) {
        modalImg.style.transform = `scale(${currentScale - 0.2})`;
    }
}

// Keyboard Controls
document.addEventListener("keydown", function(event) {
    let modal = document.getElementById("imageModal");
    if (modal.style.display === "flex") {
        if (event.key === "Escape") closeModal();
        if (event.key === "+") zoomIn();
        if (event.key === "-") zoomOut();
    }
});
