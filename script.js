// Open Image Modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.style.transform = "scale(1)"; // Reset zoom level
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Zoom In Function
function zoomIn() {
    let modalImg = document.getElementById("modalImage");
    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    modalImg.style.transform = `scale(${currentScale + 0.2})`;
}

// Zoom Out Function
function zoomOut() {
    let modalImg = document.getElementById("modalImage");
    let currentScale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
    if (currentScale > 1) {
        modalImg.style.transform = `scale(${currentScale - 0.2})`;
    }
}

// Close Modal when Clicking Outside Image
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};
