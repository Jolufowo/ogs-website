/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Make sure the body takes the full height */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
}

/* Header & Navigation */
.header-container {
    background: #007BFF;
    padding: 15px 0;
    width: 100%;
    text-align: center;
}

.nav-bar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap; /* Allows items to wrap on smaller screens */
}

.nav-bar ul li {
    display: inline;
}

.nav-bar ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px 15px;
    display: block;
}

/* Make navigation mobile-friendly */
@media (max-width: 768px) {
    .nav-bar ul {
        flex-direction: column;
        gap: 10px;
    }

    .nav-bar ul li a {
        font-size: 16px;
        padding: 8px 12px;
    }
}

/* Hero Section */
.hero-section {
    max-width: 90%;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    background-color: #e9ecef;
    color: #333;
}

/* Leaders Section */
.leaders-container {
    display: flex;
    flex-wrap: wrap; /* Ensures responsiveness */
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

/* Leader Cards */
.leader-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 90%; /* Default width for smaller screens */
    max-width: 400px; /* Prevents it from being too large */
    text-align: center;
}

/* Leader Images */
.leader-img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

/* Testimonials Section */
.testimonials-section {
    background-color: #f8f9fa;
    padding: 60px 0;
}

blockquote {
    border-left: 5px solid #007BFF;
    padding-left: 15px;
    margin: 20px 0;
    font-style: italic;
}

/* Event Calendar */
#eventCalendar {
    margin-top: 20px;
}

/* Footer */
footer {
    margin-top: 20px;
    padding: 15px;
    background-color: #007BFF;
    color: white;
    text-align: center;
    width: 100%;
}

.footer .social-icons {
    margin-top: 10px;
}

.footer .social-icons a {
    margin: 0 10px;
    display: inline-block;
}

.footer .social-icons img {
    width: 24px;
    height: 24px;
}

/* Make text and sections readable on mobile */
@media (max-width: 600px) {
    h1 {
        font-size: 22px;
    }

    h2 {
        font-size: 18px;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
    }
}
