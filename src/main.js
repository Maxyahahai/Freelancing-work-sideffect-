// src/main.js
import './style.css';

// Optional: JS interactions for hero buttons
const heroButtons = document.querySelectorAll('#hero button');
heroButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Sideffect says hello 😎');
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('opacity-0', 'translate-y-8');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});