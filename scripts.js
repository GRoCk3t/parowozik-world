// Pixel-style snowflakes with jitter
function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random horizontal position
    snowflake.style.left = Math.random() * window.innerWidth + 'px';

    // Randomize size slightly
    const size = Math.floor(Math.random() * 3) + 3; // 3-5px
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';

    // Random opacity
    snowflake.style.opacity = (Math.random() * 0.6 + 0.4).toString();

    // Random duration for variety
    const duration = Math.random() * 4 + 3; // 3-7s
    snowflake.style.animationDuration = duration + 's';

    document.body.appendChild(snowflake);

    // Remove after animation finishes
    setTimeout(() => snowflake.remove(), (duration + 1) * 1000);
}

// Create snowflakes continuously
const snowInterval = setInterval(createSnow, 100);

// Optional: expose control to stop/start snow
window.snow = {
    start: () => { if (!snowInterval) setInterval(createSnow, 100); },
    stop: () => clearInterval(snowInterval),
};
