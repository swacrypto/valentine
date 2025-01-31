let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Add working sound effects & ensure they load properly
const yesSound = new Audio("https://files.gptcdn.com/magic_wand_sound.mp3");  // Sweet "YES" sound
const noSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg");  // Funny "NO" sound

yesSound.preload = "auto";  // Ensure the YES sound loads before clicking
noSound.preload = "auto";  // Preload NO sound as well

function nextSlide() {
    yesSound.currentTime = 0;  // Reset sound (fixes issue where it doesn't replay)
    yesSound.play().catch(error => console.log("YES sound blocked, user needs to interact first."));  // Play sweet YES sound

    slides[currentSlide].classList.remove("active");
    currentSlide++;
    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add("active");
    } else {
        showCelebration();
    }
}

// Funny "No" Button Alert with Sound
function forceYes() {
    noSound.currentTime = 0;  // Reset sound
    noSound.play();

    let messages = [
        "Oh no! You can't move forward until you say YES! 😡💕",
        "Try again! You must say YES! 🥺💖",
        "You really thought you could say NO? 😂",
        "No is not an option! Say YES! 😆❤️"
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// "No" button keeps running away on the last slide
document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// 🎉 Show Celebration Slide & Keep "YAY! I Love You Too" Alert
function showCelebration() {
    yesSound.currentTime = 0;  // Reset sound
    yesSound.play();  // Play the fixed "YES" sound
    alert("YAY! Love you too! ❤️🥰");  // Keeps the final "YES" dialogue box
    document.body.innerHTML = `
        <div class="celebration">
            <h1>🎊 YAY! Love you too! ❤️🥰 🎊</h1>
            <p>Now get ready for the best Valentine's Day ever! 💖</p>
        </div>
    `;
}
