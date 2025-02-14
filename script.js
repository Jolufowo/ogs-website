document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    // Restore Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Open Image Modal
    window.openModal = function(img) {
        let modal = document.getElementById("imageModal");
        let modalImg = document.getElementById("modalImage");
        modal.style.display = "flex";
        modalImg.src = img.src;
    };

    // Close Modal
    window.closeModal = function() {
        document.getElementById("imageModal").style.display = "none";
    };
});
