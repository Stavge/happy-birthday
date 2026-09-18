const PASSWORD = "marios";

const story = [
    "Δεν θα σου ευχηθώ τα τετριμμένα.",
    "Άλλωστε ξέρω ότι δεν σου αρέσουν.",
    "Αντ' αυτού, ήθελα να σου φτιάξω κάτι λίγο πιο μοναδικό.",
    "Κάτι που να είναι μόνο για εσένα.",
    "Κάποια πράγματα είναι δύσκολο να ειπωθούν.",
    "Δύσκολο να εκφραστούν.",
    "Ίσως γιατί κάποιες φορές οι λέξεις μοιάζουν πολύ μικρές.",
    "Όπως το πόσο πολύ σε αγάπησα όλα αυτά τα χρόνια.",
    "Δεν μπόρεσες να το καταλάβεις.",
    "Με παρεξήγησες.",
    "Προσπάθησες να βγάλεις τα δικά σου συμπεράσματα.",
    "Ναι... δεν είμαι ο πιο νορμάλ άνθρωπος.",
    "Αλλά σε αγάπησα πραγματικά.",
    "Ειλικρινά.",
    "Με όλη μου την καρδιά.",
    "Και θέλω να ξέρεις κάτι.",
    "Ότι, ό,τι κι αν γίνει...",
    "έχεις έναν άνθρωπο που νοιάζεται πραγματικά για εσένα."
];

const passwordScreen =
    document.getElementById("password-screen");

const introScreen =
    document.getElementById("intro-screen");

const storyScreen =
    document.getElementById("story-screen");

const finalScreen =
    document.getElementById("final-screen");


const envelopeScene =
    document.querySelector(".envelope-scene");

const passwordPill =
    document.getElementById("password-pill");

const passwordInput =
    document.getElementById("password-input");

const unlockButton =
    document.getElementById("unlock-button");

const errorMessage =
    document.getElementById("error-message");


const startButton =
    document.getElementById("start-button");

const storyText =
    document.getElementById("story-text");

const progressNumber =
    document.getElementById("progress-number");

const replayButton =
    document.getElementById("replay-button");


let currentStoryIndex = 0;
let isTransitioning = false;
let envelopeIsOpening = false;
let touchStartY = 0;
let touchEndY = 0;
let wheelLocked = false;


/* =========================================
   GENERAL SCREEN CHANGE
========================================= */

function changeScreen(currentScreen, nextScreen, delay = 780) {

    currentScreen.classList.add("fade-out");

    setTimeout(() => {

        currentScreen.classList.add("hidden");
        currentScreen.classList.remove("fade-out");
        nextScreen.classList.remove("hidden");

    }, delay);

}


/* =========================================
   PASSWORD
========================================= */

function wrongPassword() {

    errorMessage.textContent =
        "Δεν είναι αυτό... ξαναπροσπάθησε.";

    passwordInput.value = "";

    passwordPill.classList.remove("shake");
    void passwordPill.offsetWidth;
    passwordPill.classList.add("shake");

    if (!window.matchMedia("(pointer: coarse)").matches) {
        passwordInput.focus();
    }

}


function checkPassword() {

    if (envelopeIsOpening) {
        return;
    }

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword !== PASSWORD) {
        wrongPassword();
        return;
    }

    errorMessage.textContent = "";
    openEnvelope();

}


unlockButton.addEventListener("click", checkPassword);

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            checkPassword();
        }

    }
);


/* =========================================
   OPEN ENVELOPE SEQUENCE
========================================= */

function openEnvelope() {

    if (envelopeIsOpening) {
        return;
    }

    envelopeIsOpening = true;
    passwordInput.blur();

    envelopeScene.classList.add("opening");

    /*
        1. Small pulse on the wax seal
    */
    setTimeout(() => {
        envelopeScene.classList.add("seal-pulse");
    }, 250);

    /*
        2. Seal disappears / "breaks"
    */
    setTimeout(() => {
        envelopeScene.classList.add("seal-open");
    }, 950);

    /*
        3. Flap opens
    */
    setTimeout(() => {
        envelopeScene.classList.add("flap-open");
    }, 1450);

    /*
        4. Letter rises
    */
    setTimeout(() => {
        envelopeScene.classList.add("letter-rise");
    }, 2250);

    /*
        5. Letter becomes the focus
    */
    setTimeout(() => {
        envelopeScene.classList.add("letter-focus");
    }, 3200);

    /*
        6. Zoom into the letter
    */
    setTimeout(() => {
        envelopeScene.classList.add("letter-zoom");
    }, 4100);

    /*
        7. Move into intro screen
    */
    setTimeout(() => {

        passwordScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");

        resetEnvelope();

    }, 5600);

}


function resetEnvelope() {

    envelopeScene.classList.remove(
        "opening",
        "seal-pulse",
        "seal-open",
        "flap-open",
        "letter-rise",
        "letter-focus",
        "letter-zoom"
    );

    passwordInput.value = "";
    envelopeIsOpening = false;

}


/* =========================================
   START STORY
========================================= */

startButton.addEventListener("click", startStory);

function startStory() {

    currentStoryIndex = 0;

    changeScreen(introScreen, storyScreen);

    setTimeout(showStory, 850);

}


/* =========================================
   STORY
========================================= */

function showStory() {

    storyText.classList.remove("visible");

    setTimeout(() => {

        storyText.textContent =
            story[currentStoryIndex];

        progressNumber.textContent =
            String(currentStoryIndex + 1).padStart(2, "0");

        storyText.classList.add("visible");

    }, 330);

}


function nextStory() {

    if (isTransitioning) {
        return;
    }

    if (currentStoryIndex < story.length - 1) {

        isTransitioning = true;
        currentStoryIndex++;
        showStory();

        setTimeout(() => {
            isTransitioning = false;
        }, 950);

    }

    else {

        isTransitioning = true;
        changeScreen(storyScreen, finalScreen);

        setTimeout(() => {
            isTransitioning = false;
        }, 1100);

    }

}


function previousStory() {

    if (isTransitioning || currentStoryIndex <= 0) {
        return;
    }

    isTransitioning = true;
    currentStoryIndex--;
    showStory();

    setTimeout(() => {
        isTransitioning = false;
    }, 950);

}


/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (storyScreen.classList.contains("hidden")) {
            return;
        }

        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
            nextStory();
            return;
        }

        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            event.preventDefault();
            nextStory();
            return;
        }

        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            event.preventDefault();
            previousStory();
        }

    }
);


/* =========================================
   MOUSE WHEEL
========================================= */

storyScreen.addEventListener(
    "wheel",
    function(event) {

        event.preventDefault();

        if (wheelLocked) {
            return;
        }

        wheelLocked = true;

        if (event.deltaY > 0) {
            nextStory();
        }

        else if (event.deltaY < 0) {
            previousStory();
        }

        setTimeout(() => {
            wheelLocked = false;
        }, 1050);

    },
    {
        passive: false
    }
);


/* =========================================
   CLICK ANYWHERE
========================================= */

storyScreen.addEventListener(
    "click",
    function(event) {

        if (
            event.target.closest("button") ||
            event.target.closest("a") ||
            event.target.closest("input")
        ) {
            return;
        }

        nextStory();

    }
);


/* =========================================
   MOBILE SWIPE
========================================= */

storyScreen.addEventListener(
    "touchstart",
    function(event) {
        touchStartY = event.changedTouches[0].screenY;
    },
    {
        passive: true
    }
);

storyScreen.addEventListener(
    "touchend",
    function(event) {
        touchEndY = event.changedTouches[0].screenY;
        handleSwipe();
    },
    {
        passive: true
    }
);

function handleSwipe() {

    const distance = touchStartY - touchEndY;
    const minimumSwipe = 45;

    if (Math.abs(distance) < minimumSwipe) {
        return;
    }

    if (distance > 0) {
        nextStory();
    }

    else {
        previousStory();
    }

}


/* =========================================
   REPLAY
========================================= */

replayButton.addEventListener(
    "click",
    function() {

        currentStoryIndex = 0;
        changeScreen(finalScreen, introScreen);

    }
);


/* =========================================
   INITIAL STATE
========================================= */

if (!window.matchMedia("(pointer: coarse)").matches) {
    passwordInput.focus();
}
