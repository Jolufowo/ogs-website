<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OGS 2011/2012 Alumni</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <!-- Centered Navigation Bar -->
    <header class="header-container">
        <nav class="nav-bar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="https://kahoot.it" target="_blank">Play Kahoot</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-section fade-in">
        <div class="content-box">
            <h2>Connecting Old Students</h2>
            <p>Welcome to the official website of the <strong>Odogbolu Grammar School 2011/2012 Alumni Association</strong>.</p>
            <p>Stay connected, view events, and engage with fellow alumni.</p>
        </div>
    </section>

    <!-- Leaders Section -->
    <section class="leaders-section fade-in">
        <h2>Meet Our Leaders</h2>
        <div class="leaders-container">
            <div class="leader-card">
                <img src="leaders/president.jpg" alt="President" class="leader-img" onclick="openModal(this)">
                <h3>Abdul Oluwatobi Ganiu "Kayman"</h3>
                <a href="leaders/president.html" class="bio-link">View Biography</a>
            </div>
            <div class="leader-card">
                <img src="leaders/vice_president.jpg" alt="Vice President" class="leader-img" onclick="openModal(this)">
                <h3>Sofade Ayodele Olasile</h3>
                <a href="leaders/vice_president.html" class="bio-link">View Biography</a>
            </div>
            <div class="leader-card">
                <img src="leaders/secretary.jpg" alt="Secretary" class="leader-img" onclick="openModal(this)">
                <h3>Felix Fatai Odukoya</h3>
                <a href="leaders/secretary.html" class="bio-link">View Biography</a>
            </div>
            <div class="leader-card">
                <img src="leaders/pro.jpg" alt="Public Relations Officer" class="leader-img" onclick="openModal(this)">
                <h3>Adesanya Adebowale Oluwagbenga</h3>
                <a href="leaders/pro.html" class="bio-link">View Biography</a>
            </div>
        </div>
    </section>

    <!-- Events Section -->
    <section class="events-section fade-in">
        <h2>🎉 Upcoming Events - Don’t Miss Out! 🎉</h2>
        <div class="event-card" data-event-date="2025-02-13">
            <h3>💖 Reigniting Relationships - Valentine’s Celebration (February 13th)</h3>
            <p>Celebrate love, friendship, and togetherness at our special Valentine’s Day Alumni Gathering! This event is all about rekindling old friendships and creating new connections within our alumni community.</p>
            <p>🎁 Exciting gifts & surprises await!</p>
            <p>🎶 Enjoy entertainment, laughter, and unforgettable moments!</p>
        </div>
        <div class="event-card" data-event-date="2025-02-15">
            <h3>🎮 OGS Alumni Game Night - Kahoot Challenge (February 15th, Saturday)</h3>
            <p>Get ready for an electrifying night of fun, competition, and BIG prizes at the OGS Alumni Game Night on Kahoot!</p>
            <p>🕗 8:00 PM - Valentine’s Game Night 💖</p>
            <p>💡 A special Valentine-themed trivia challenge to test your knowledge on love, relationships, and all things Valentine!</p>
            <p>🕘 9:00 PM - Group Standard Game Night 🏆</p>
            <p>🌍 A general knowledge showdown covering a mix of fun and challenging questions for everyone!</p>
            <p>🏅 BIG PRIZES will be won in both games, so bring your A-game and get ready to play & win!</p>
        </div>
        <p>🔔 Stay tuned for more exciting events coming soon! Let’s keep the fun going! 🚀</p>
    </section>

    <!-- Membership Fee Announcement Section -->
    <section class="membership-fee-announcement fade-in">
        <h2>📢 OGS Alumni Monthly Membership Fee Announcement</h2>
        <p>Dear OGS Alumni,</p>
        <p>To support the growth and activities of our alumni community, a monthly membership fee of ₦2,000 has been established.</p>
        <p>💳 Payment Details:</p>
        <p>Account Name: Jimoh Titilope</p>
        <p>Account Number: 8138682604</p>
        <p>Bank: OPay</p>
        <p>Your contributions help fund reunions, events, and initiatives that strengthen our alumni network. We appreciate your commitment and support!</p>
        <p>Thank you for keeping the OGS spirit alive! 💙🎉</p>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section fade-in">
        <h2>What Our Alumni Say</h2>
        <div class="testimonial">
            <p>"OGS has given me lifelong friends and priceless memories." - Felix Odukoya</p>
        </div>
        <div class="testimonial">
            <p>"The alumni association keeps us connected and informed." - Debo Adesanya</p>
        </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info-section fade-in">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@ogs2012alumni.com">info@ogs2012alumni.com</a></p>
        <p>Phone: <a href="tel:+2348149390170">+2348149390170</a></p>
    </section>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2025 OGS Alumni. All rights reserved.</p>
        <div class="social-icons">
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
    </footer>

    <!-- Image Modal -->
    <div id="imageModal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
        <div class="zoom-controls">
            <button onclick="zoomIn()">Zoom In</button>
            <button onclick="zoomOut()">Zoom Out</button>
        </div>
    </div>
</body>
</html>
