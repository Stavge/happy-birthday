/* =========================================
   SETTINGS
========================================= */

const PASSWORD = "marios";


/* =========================================
   STORY
========================================= */

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


/* =========================================
   ELEMENTS
========================================= */

const passwordScreen =
    document.getElementById("password-screen");

const introScreen =
    document.getElementById("intro-screen");

const storyScreen =
    document.getElementById("story-screen");

const finalScreen =
    document.getElementById("final-screen");


const giftScene =
    document.querySelector(".gift-scene");

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


/* =========================================
   STATE
========================================= */

let currentStoryIndex = 0;

let isTransitioning = false;

let giftIsOpening = false;

let touchStartY = 0;

let touchEndY = 0;


/* =========================================
   SCREEN TRANSITION
========================================= */

function changeScreen(currentScreen, nextScreen) {

    currentScreen.classList.add("fade-out");

    setTimeout(() => {

        currentScreen.classList.add("hidden");

        currentScreen.classList.remove("fade-out");

        nextScreen.classList.remove("hidden");

    }, 900);

}


/* =========================================
   PASSWORD
========================================= */

function checkPassword() {

    if (giftIsOpening) {
        return;
    }

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === PASSWORD) {

        errorMessage.textContent = "";

        openGift();

    }

    else {

        errorMessage.textContent =
            "Δεν είναι αυτό... ξαναπροσπάθησε.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


unlockButton.addEventListener(
    "click",
    checkPassword
);


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
   V3 — OPEN GIFT
========================================= */

function openGift() {

    giftIsOpening = true;

    passwordInput.blur();

    giftScene.classList.add("unlocking");


    /*
        1. Ribbon loosens
    */

    setTimeout(() => {

        giftScene.classList.add(
            "ribbon-open"
        );

    }, 450);


    /*
        2. Lid opens
    */

    setTimeout(() => {

        giftScene.classList.add(
            "box-open"
        );

    }, 1450);


    /*
        3. Card rises
    */

    setTimeout(() => {

        giftScene.classList.add(
            "card-rise"
        );

    }, 2350);


    /*
        4. Everything fades back.
           Card becomes the focus.
    */

    setTimeout(() => {

        giftScene.classList.add(
            "card-focus"
        );

    }, 3650);


    /*
        5. Card moves toward camera.
    */

    setTimeout(() => {

        giftScene.classList.add(
            "card-zoom"
        );

    }, 4550);


    /*
        6. Reveal existing intro screen.
    */

    setTimeout(() => {

        passwordScreen.classList.add(
            "hidden"
        );

        introScreen.classList.remove(
            "hidden"
        );

        resetGift();

    }, 5850);

}


/* =========================================
   RESET GIFT
========================================= */

function resetGift() {

    giftScene.classList.remove(
        "unlocking",
        "ribbon-open",
        "box-open",
        "card-rise",
        "card-focus",
        "card-zoom"
    );

    passwordInput.value = "";

    giftIsOpening = false;

}


/* =========================================
   START STORY
========================================= */

startButton.addEventListener(
    "click",
    startStory
);


function startStory() {

    currentStoryIndex = 0;

    changeScreen(
        introScreen,
        storyScreen
    );


    setTimeout(() => {

        showStory();

    }, 1000);

}


/* =========================================
   SHOW STORY
========================================= */

function showStory() {

    storyText.classList.remove(
        "visible"
    );


    setTimeout(() => {

        storyText.textContent =
            story[currentStoryIndex];

        progressNumber.textContent =
            String(
                currentStoryIndex + 1
            ).padStart(2, "0");


        storyText.classList.add(
            "visible"
        );

    }, 350);

}


/* =========================================
   NEXT STORY
========================================= */

function nextStory() {

    if (isTransitioning) {
        return;
    }


    if (
        currentStoryIndex <
        story.length - 1
    ) {

        isTransitioning = true;

        currentStoryIndex++;

        showStory();


        setTimeout(() => {

            isTransitioning = false;

        }, 1000);

    }

    else {

        isTransitioning = true;

        changeScreen(
            storyScreen,
            finalScreen
        );


        setTimeout(() => {

            isTransitioning = false;

        }, 1200);

    }

}


/* =========================================
   PREVIOUS STORY
========================================= */

function previousStory() {

    if (isTransitioning) {
        return;
    }


    if (currentStoryIndex > 0) {

        isTransitioning = true;

        currentStoryIndex--;

        showStory();


        setTimeout(() => {

            isTransitioning = false;

        }, 1000);

    }

}


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
            Story controls should only
            work while story is visible.
        */

        if (
            storyScreen.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key === "Enter" ||
            event.code === "Space"
        ) {

            event.preventDefault();

            nextStory();

        }


        if (
            event.key === "ArrowDown" ||
            event.key === "ArrowRight"
        ) {

            event.preventDefault();

            nextStory();

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowLeft"
        ) {

            event.preventDefault();

            previousStory();

        }

    }
);


/* =========================================
   MOUSE WHEEL
========================================= */

let wheelLocked = false;


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

        }, 1100);

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
   MOBILE TOUCH
========================================= */

storyScreen.addEventListener(
    "touchstart",
    function(event) {

        touchStartY =
            event.changedTouches[0].screenY;

    },
    {
        passive: true
    }
);


storyScreen.addEventListener(
    "touchend",
    function(event) {

        touchEndY =
            event.changedTouches[0].screenY;

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const distance =
        touchStartY - touchEndY;

    const minimumSwipe = 45;


    if (
        Math.abs(distance) <
        minimumSwipe
    ) {

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

        changeScreen(
            finalScreen,
            introScreen
        );

    }
);


/* =========================================
   INITIAL STATE
========================================= */

/*
   On desktop it is convenient to focus
   immediately. On touch devices we avoid
   automatically opening the keyboard.
*/

if (
    !window.matchMedia(
        "(pointer: coarse)"
    ).matches
) {

    passwordInput.focus();

}
