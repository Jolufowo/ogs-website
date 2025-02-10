document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');

    // Countdown Timer
    const countdown = document.getElementById('countdown');
    const eventDate = new Date('2025-12-31T00:00:00Z').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timer);
            countdown.innerHTML = "EXPIRED";
        }
    }

    const timer = setInterval(updateCountdown, 1000);

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };

    // Dark Mode Toggle
    const toggleDarkModeBtn = document.querySelector('button[onclick="toggleDarkMode()"]');
    toggleDarkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function searchAlumni() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('alumniList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        li[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
    }
}
