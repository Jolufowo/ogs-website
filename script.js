// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Open Image Modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Zoom In
function zoomIn() {
    let modalImg = document.getElementById("modalImage");
    modalImg.style.transform = `scale(1.2)`;
}

// Zoom Out
function zoomOut() {
    let modalImg = document.getElementById("modalImage");
    modalImg.style.transform = `scale(1)`;
}
