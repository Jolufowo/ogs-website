// ===========================
// 🚀 SCRIPT.JS – ENHANCED FEATURES
// ===========================

// ✅ Toggle Dark Mode Function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// ✅ Load Dark Mode Preference
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// ✅ Contact Form Submission (Simulated)
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("📩 Your message has been sent successfully! We will get back to you soon.");
            contactForm.reset();
        });
    }
});

// ✅ Open Image Modal
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.style.transform = "scale(1)"; // Reset zoom level
}

// ✅ Close Image Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// ✅ Zoom In & Out for Image Modal
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

// ✅ Close Modal when Clicking Outside
window.onclick = function (event) {
    let modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};

// ✅ Mark Past Events on Announcement Page
function markPastEvents() {
    const currentDate = new Date();
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
        const eventDate = new Date(card.getAttribute("data-event-date"));
        if (currentDate > eventDate) {
            const pastEventLabel = document.createElement("p");
            pastEventLabel.className = "past-event";
            pastEventLabel.innerText = "⏳ Past Event";
            card.appendChild(pastEventLabel);
        }
    });
}

// ✅ Run Mark Past Events on Page Load
document.addEventListener("DOMContentLoaded", markPastEvents);

// ✅ Smooth Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
    let backToTopBtn = document.createElement("button");
    backToTopBtn.id = "backToTop";
    backToTopBtn.innerHTML = "⬆ Back to Top";
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.background = "#007BFF";
    backToTopBtn.style.color = "#fff";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.onscroll = function () {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
});

// ✅ Alumni Spotlight Rotation
document.addEventListener("DOMContentLoaded", function () {
    let alumni = [
        "🌟 Abdul Oluwatobi Ganiu - Logistics Expert",
        "📚 Sofade Ayodele Olasile - Educator & Entrepreneur",
        "🏨 Felix Fatai Odukoya - Hospitality Manager",
        "🎼 Adesanya Adebowale Oluwagbenga - PR Officer & Musician"
    ];
    document.getElementById("spotlightText").innerText = alumni[Math.floor(Math.random() * alumni.length)];
});

// ✅ Search Alumni Functionality
function searchAlumni() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let items = document.querySelectorAll("#alumniList li");
    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}

// ✅ Dynamic Time Greeting
document.addEventListener("DOMContentLoaded", function () {
    let greeting = document.createElement("p");
    let now = new Date();
    let hour = now.getHours();
    let message = "👋 Welcome!";
    
    if (hour >= 5 && hour < 12) {
        message = "🌅 Good Morning, Alumni!";
    } else if (hour >= 12 && hour < 18) {
        message = "🌞 Good Afternoon, Alumni!";
    } else {
        message = "🌙 Good Evening, Alumni!";
    }

    greeting.innerText = message;
    greeting.style.fontSize = "18px";
    greeting.style.fontWeight = "bold";
    greeting.style.marginTop = "10px";
    document.querySelector(".header-container").appendChild(greeting);
});

// ✅ Countdown Timer for Special Events
document.addEventListener("DOMContentLoaded", function () {
    const eventDate = new Date("February 15, 2025 20:00:00").getTime();
    const countdownEl = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            countdownEl.innerHTML = "🎉 Event is LIVE now!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        countdownEl.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m until Event!`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// ✅ Scroll Animation Effect (Fades in elements on scroll)
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        let elements = document.querySelectorAll(".fade-in");
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
