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


const giftScene =
    document.querySelector(".gift-scene");

const giftCover =
    document.getElementById("gift-cover");

const giftVideo =
    document.getElementById("gift-video");


const passwordArea =
    document.getElementById("password-area");

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

let giftIsOpening = false;

let touchStartY = 0;

let touchEndY = 0;

let wheelLocked = false;

let giftFallbackTimer = null;


/* =========================================
   GENERAL SCREEN CHANGE
========================================= */

function changeScreen(
    currentScreen,
    nextScreen,
    delay = 780
) {

    currentScreen.classList.add(
        "fade-out"
    );


    setTimeout(() => {

        currentScreen.classList.add(
            "hidden"
        );

        currentScreen.classList.remove(
            "fade-out"
        );

        nextScreen.classList.remove(
            "hidden"
        );

    }, delay);

}


/* =========================================
   WRONG PASSWORD
========================================= */

function wrongPassword() {

    errorMessage.textContent =
        "Δεν είναι αυτό... ξαναπροσπάθησε.";


    passwordInput.value = "";


    passwordPill.classList.remove(
        "shake"
    );


    /*
        Forces the animation to restart
        if the password is wrong again.
    */

    void passwordPill.offsetWidth;


    passwordPill.classList.add(
        "shake"
    );


    if (
        !window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        passwordInput.focus();

    }

}


/* =========================================
   PASSWORD CHECK
========================================= */

function checkPassword() {

    if (giftIsOpening) {
        return;
    }


    const enteredPassword =
        passwordInput.value.trim();


    if (
        enteredPassword !== PASSWORD
    ) {

        wrongPassword();

        return;

    }


    errorMessage.textContent = "";

    openGift();

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
   CINEMATIC GIFT OPENING
========================================= */

function openGift() {

    if (giftIsOpening) {
        return;
    }


    giftIsOpening = true;


    passwordInput.blur();


    /*
        Hide the password area
        and begin the visual sequence.
    */

    giftScene.classList.add(
        "opening"
    );


    /*
        Show the video above
        the static gift cover.
    */

    giftVideo.classList.add(
        "visible"
    );


    giftCover.classList.add(
        "hidden-cover"
    );


    /*
        Always restart video
        from the beginning.
    */

    try {

        giftVideo.currentTime = 0;

    }

    catch (error) {

        /*
            Some browsers may not allow
            changing currentTime before
            metadata is loaded.
        */

    }


    const playPromise =
        giftVideo.play();


    /*
        Safety fallback:
        if for any reason the video
        does not emit the ended event,
        we still continue.
    */

    giftFallbackTimer =
        setTimeout(
            finishGiftOpening,
            7600
        );


    /*
        If playback fails completely,
        continue gracefully instead
        of leaving the page stuck.
    */

    if (
        playPromise &&
        typeof playPromise.catch ===
        "function"
    ) {

        playPromise.catch(() => {

            setTimeout(
                finishGiftOpening,
                800
            );

        });

    }

}


/* =========================================
   FINISH GIFT OPENING
========================================= */

function finishGiftOpening() {

    if (!giftIsOpening) {
        return;
    }


    clearTimeout(
        giftFallbackTimer
    );


    /*
        The animation ends on an
        ivory paper/card frame.

        We now replace the video with
        the real HTML intro screen,
        which has the same visual idea.
    */

    passwordScreen.classList.add(
        "hidden"
    );


    introScreen.classList.remove(
        "hidden"
    );


    resetGift();

}


/*
    When the MP4 ends normally,
    move into the intro.
*/

giftVideo.addEventListener(
    "ended",
    finishGiftOpening
);


/* =========================================
   RESET GIFT
========================================= */

function resetGift() {

    giftVideo.pause();


    try {

        giftVideo.currentTime = 0;

    }

    catch (error) {

        /*
            Ignore browser timing issue.
        */

    }


    giftScene.classList.remove(
        "opening"
    );


    giftVideo.classList.remove(
        "visible"
    );


    giftCover.classList.remove(
        "hidden-cover"
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


    setTimeout(
        showStory,
        850
    );

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
            ).padStart(
                2,
                "0"
            );


        storyText.classList.add(
            "visible"
        );

    }, 330);

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

        }, 950);

    }

    else {

        isTransitioning = true;


        changeScreen(
            storyScreen,
            finalScreen
        );


        setTimeout(() => {

            isTransitioning = false;

        }, 1100);

    }

}


/* =========================================
   PREVIOUS STORY
========================================= */

function previousStory() {

    if (
        isTransitioning ||
        currentStoryIndex <= 0
    ) {

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

        /*
            Story controls only work
            while story screen is visible.
        */

        if (
            storyScreen.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        /*
            Enter or Space = next
        */

        if (
            event.key === "Enter" ||
            event.code === "Space"
        ) {

            event.preventDefault();

            nextStory();

            return;

        }


        /*
            Right / down = next
        */

        if (
            event.key === "ArrowDown" ||
            event.key === "ArrowRight"
        ) {

            event.preventDefault();

            nextStory();

            return;

        }


        /*
            Left / up = previous
        */

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
   CLICK ANYWHERE ON STORY
========================================= */

storyScreen.addEventListener(
    "click",
    function(event) {

        /*
            Do not trigger navigation
            if later we add buttons,
            links or interactive elements.
        */

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


    /*
        Swipe up = next
    */

    if (distance > 0) {

        nextStory();

    }

    /*
        Swipe down = previous
    */

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
    Tell the browser to preload the video.
*/

giftVideo.load();


/*
    On desktop, focus the password
    immediately.

    On mobile we avoid automatically
    opening the keyboard.
*/

if (
    !window.matchMedia(
        "(pointer: coarse)"
    ).matches
) {

    passwordInput.focus();

}
