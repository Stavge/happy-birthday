/* =========================================
   SETTINGS
========================================= */

/*
   TEMPORARY PASSWORD

   We will replace this with proper encryption
   in Version 2.

   For now, type:

   marios

*/

const PASSWORD = "marios";


/* =========================================
   STORY CONTENT
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

const passwordScreen = document.getElementById("password-screen");
const introScreen = document.getElementById("intro-screen");
const storyScreen = document.getElementById("story-screen");
const finalScreen = document.getElementById("final-screen");

const passwordInput = document.getElementById("password-input");
const unlockButton = document.getElementById("unlock-button");
const errorMessage = document.getElementById("error-message");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");

const storyText = document.getElementById("story-text");
const progressNumber = document.getElementById("progress-number");

const replayButton = document.getElementById("replay-button");


/* =========================================
   SCREEN TRANSITION
========================================= */

function changeScreen(currentScreen, nextScreen) {

    currentScreen.classList.add("fade-out");

    setTimeout(() => {

        currentScreen.classList.add("hidden");
        currentScreen.classList.remove("fade-out");

        nextScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 900);
}


/* =========================================
   PASSWORD
========================================= */

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === PASSWORD) {

        errorMessage.textContent = "";

        changeScreen(passwordScreen, introScreen);

    } else {

        errorMessage.textContent = "Δεν είναι αυτό... ξαναπροσπάθησε.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


unlockButton.addEventListener("click", checkPassword);


passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkPassword();

    }

});


/* =========================================
   START STORY
========================================= */

startButton.addEventListener("click", function() {

    changeScreen(introScreen, storyScreen);

    setTimeout(() => {

        showStory();

    }, 1000);

});


/* =========================================
   STORY ENGINE
========================================= */

let currentStoryIndex = 0;


function showStory() {

    storyText.classList.remove("visible");

    setTimeout(() => {

        storyText.textContent = story[currentStoryIndex];

        progressNumber.textContent =
            String(currentStoryIndex + 1).padStart(2, "0");

        storyText.classList.add("visible");

    }, 400);

}


/* =========================================
   NEXT STORY
========================================= */

nextButton.addEventListener("click", function() {

    if (currentStoryIndex < story.length - 1) {

        currentStoryIndex++;

        showStory();

    } else {

        changeScreen(storyScreen, finalScreen);

    }

});


/* =========================================
   REPLAY
========================================= */

replayButton.addEventListener("click", function() {

    currentStoryIndex = 0;

    changeScreen(finalScreen, introScreen);

});


/* =========================================
   INITIAL STATE
========================================= */

passwordInput.focus();
