function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "auto"
    });
}

function toggleMusic() {
    const music = document.getElementById("bg-music");
    const iconImg = document.getElementById("music-icon-img");

    if (music.paused) {
        music.play();
        iconImg.src = "images/on-sound.png"; // PNG for when music is playing
    } else {
        music.pause();
        iconImg.src = "images/off-sounds.png"; // PNG for when music is muted
    }
}

const clickSound = document.getElementById("click-sound");
const bgMusic = document.getElementById('bg-music');

// Set volume to 10% (0.1) or 20% (0.2)
bgMusic.volume = 0.4;

function playClickSound() {
    clickSound.currentTime = 0; // restart sound if clicked fast
    clickSound.play();
}

// TOP TO BOTTOM
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// HOVER SOUND
const hoverAudio = document.getElementById("hover-sound");

function playHoverSound() {
    if (hoverAudio) {
        hoverAudio.loop = false; // Ensure looping is OFF
        hoverAudio.currentTime = 0; // Reset to start so it plays every time you hover
        hoverAudio.play();
    }
}

function playMeow() {
    const sound = document.getElementById("meowSound");
    if (sound) {
        sound.currentTime = 0; // Starts sound from the beginning
        sound.play();
    }
}

function stopMeow() {
    const sound = document.getElementById("meowSound");
    if (sound) {
        sound.pause(); // Pauses the sound immediately
        sound.currentTime = 0; // Resets it to the start so it's ready for next hover
    }
}

// LOGIN PASSWORD WITH CLEAR-ON-ERROR & SMOOTH FADE OUT
function checkPassword() {
    const passwordInput = document.getElementById("password-input");
    const passwordValue = passwordInput.value;
    const errorMessage = document.getElementById("error-message");
    const overlay = document.getElementById("login-overlay");

    if (passwordValue === "shimi2024") {
        document.body.classList.remove("login-active");
        window.scrollTo(0, 0);
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    } else {
        errorMessage.innerText = "Access Denied. Try again! 🫧";
        errorMessage.style.color = "red";
        
        // 1. CLEAR THE INPUT
        passwordInput.value = ""; 
        
        // 2. REFOCUS (so they can start typing again immediately)
        passwordInput.focus();
    }
}

// Allow pressing "Enter" to login
document.getElementById("password-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

// CLOCK UPDATE FUNCTION
function updateClock() {
    const clock = document.getElementById("desktop-clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? "0" + minutes : minutes;

    clock.innerText = `${hours}:${minutes} ${ampm}`;
}

// Initialize clock immediately and set interval
updateClock();
setInterval(updateClock, 1000);
