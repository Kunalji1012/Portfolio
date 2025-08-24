// script.js
// This script handles interactive features for the portfolio.

document.addEventListener('DOMContentLoaded', () => {

    // =====================================
    // 1. Pre-loader
    // =====================================
    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    // =====================================
    // 2. Dark Mode Toggle
    // =====================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for a saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // =====================================
    // 3. Scroll-to-Top Button
    // =====================================
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // =====================================
    // 4. Reveal on Scroll Animation
    // =====================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 150) {
                el.classList.add('active');
            } else {
                // Optional: remove 'active' class when scrolling back up
                // el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on page load to check initial position

});