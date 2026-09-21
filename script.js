const PASSWORD = "marios";


/* =========================================
   STORY
========================================= */

const storyScenes = [

  {
    theme: "opening",

    kicker: "Για αρχή...",

    lines: [
      "Χρόνια πολλά, Μάριε μου.",
      "Δεν θα σου ευχηθώ τα τετριμμένα...",
      "Άλλωστε ξέρω ότι δεν σου αρέσουν.",
      "Αντ' αυτού ήθελα να σου φτιάξω κάτι πιο μοναδικό.",
      "(Καιρό είχα.)"
    ]
  },


  {
    theme: "words",

    kicker: "Κάπου εδώ αλλάζει λίγο το πράγμα...",

    lines: [
      "Αν και η ελληνική γλώσσα είναι τόσο υπέροχη και πλούσια...",
      "κάποιες φορές τα λόγια μοιάζουν φτωχά.",
      "Και κάπου εδώ ίσως καταλάβεις και το 18,1 στην Έκθεση στις Πανελλήνιες.",
      "Από κοντά κομπλάρω.",
      "Δεν εκφράζομαι πάντα όπως θα ήθελα.",
      "Οπότε ίσως αυτός να είναι ο μόνος τρόπος να σου πω κάποια πράγματα ακριβώς όπως τα νιώθω."
    ]
  },


  {
    theme: "confession",

    kicker: "Αυτά που δύσκολα λέγονται από κοντά.",

    lines: [
      "Σε αγάπησα περισσότερο από τον εαυτό μου.",
      "Περισσότερο από οποιονδήποτε άλλο.",
      "Ένιωσα για εσένα κάτι πρωτόγνωρο.",
      "Κάτι που δεν είχα νιώσει ποτέ ξανά.",
      "Κάτι μοναδικό."
    ]
  },


  {
    theme: "confession-deep",

    kicker: "Και ίσως αυτό να είναι το πιο δύσκολο κομμάτι.",

    lines: [
      "Ξέρω ότι εσύ το βλέπεις διαφορετικά.",
      "Αλλά για μένα αυτό που ένιωσα για σένα δεν ήταν ποτέ απλώς πλατωνικό.",
      "Μόνο εγώ ξέρω πόσο πολύ σε αγαπώ.",
      "Και ίσως ούτε εγώ να μπορώ πραγματικά να το εξηγήσω με λόγια."
    ]
  },


  {
    theme: "life",

    kicker: "Η ζωή, βέβαια, έχει τα δικά της σχέδια.",

    lines: [
      "Ξέρω ότι η ζωή δεν μας δίνει πάντα τα πράγματα όπως θα τα θέλαμε.",
      "Καμιά φορά είναι σκληρή.",
      "Αλλά είναι και όμορφη.",
      "Και ίσως κάποια πράγματα να μην μπορούν να είναι όπως τα φανταστήκαμε.",
      "Αυτό όμως δεν αλλάζει το πόσο σημαντικός είσαι για μένα."
    ]
  },


  {
    theme: "care",

    kicker: "Αυτό θέλω κυρίως να θυμάσαι.",

    lines: [
      "Θέλω μόνο να ξέρεις ότι υπάρχει ένας άνθρωπος που νοιάζεται πραγματικά για εσένα.",
      "Που χαίρεται όταν είσαι καλά.",
      "Που θέλει να σε βλέπει ευτυχισμένο.",
      "Και που θα σε αγαπάει με τον δικό του τρόπο."
    ]
  },


  {
    theme: "hope",

    kicker: "Και κάτι τελευταίο πριν προχωρήσεις...",

    lines: [
      "Κάποιες φορές στενοχωριέμαι όταν νιώθω ότι απομακρύνεσαι.",
      "Ή όταν συνειδητοποιώ ότι δεν μπορώ να είμαι μέρος της ζωής σου όσο θα ήθελα.",
      "Όχι γιατί δεν θέλω να περνάς καλά.",
      "Το αντίθετο.",
      "Απλώς γιατί θέλω να είμαι κι εγώ ένα μικρό κομμάτι της ζωής σου.",
      "Μακάρι να σε έχω για πολλά ακόμη χρόνια στη ζωή μου.",
      "Με όποιον τρόπο μας επιτρέψει η ζωή."
    ]
  }

];


/* =========================================
   POEM
========================================= */

const poemStanzas = [

  [
    "Όσες φορές κι αν προσπάθησα «τέλος» να πω,",
    "πάντα σε σένα ξαναγυρνώ.",
    "Στην ίδια λούπα τριγυρνώ,",
    "κι όσο κι αν θέλω, δεν μπορώ να βγω."
  ],

  [
    "10+ χρόνια μετά",
    "αν τύχει να σε δω ξαφνικά,",
    "η καρδιά μου χτυπά τόσο δυνατά",
    "όπως όταν σε έβλεπα για πρώτη μου φορά."
  ],

  [
    "Έχεις έναν λόγο αιχμηρό,",
    "που εγώ συχνά παρεξηγώ,",
    "μα τελικά, τις πιο πολλές φορές,",
    "κάτι ξέρεις από γκόμενους και δουλειές."
  ],

  [
    "Πλάι σου έμαθα πολλά,",
    "για τη ζωή, τα δύσκολα, τ’ απλά,",
    "για ανθρώπους, όνειρα και λεφτά,",
    "χωρίς εσένα πού θα τα μάθαινα όλα αυτά;"
  ]

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

const poemScreen =
  document.getElementById("poem-screen");

const musicScreen =
  document.getElementById("music-screen");

const questionScreen =
  document.getElementById("question-screen");

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


const storyContainer =
  document.getElementById("story-container");

const storyKicker =
  document.getElementById("story-kicker");

const storyLines =
  document.getElementById("story-lines");

const progressNumber =
  document.getElementById("progress-number");

const progressTotal =
  document.getElementById("progress-total");


const poemContainer =
  document.getElementById("poem-container");

const poemLines =
  document.getElementById("poem-lines");


const musicContinue =
  document.getElementById("music-continue");

const musicBack =
  document.getElementById("music-back");


const questionChoiceState =
  document.getElementById("question-choice-state");

const answerYes =
  document.getElementById("answer-yes");

const answerNo =
  document.getElementById("answer-no");

const questionBack =
  document.getElementById("question-back");

const questionResult =
  document.getElementById("question-result");

const questionGif =
  document.getElementById("question-gif");

const questionMessage =
  document.getElementById("question-message");

const questionTryAgain =
  document.getElementById("question-try-again");

const questionContinue =
  document.getElementById("question-continue");


const finalBack =
  document.getElementById("final-back");

const replayButton =
  document.getElementById("replay-button");


/* =========================================
   STATE
========================================= */

let envelopeIsOpening = false;

let storySceneIndex = 0;
let storyLineIndex = 0;

let poemIndex = 0;

let interactionLocked = false;

let touchStartY = 0;
let touchEndY = 0;

let wheelLocked = false;

let ignoreClickUntil = 0;


/* =========================================
   HELPERS
========================================= */

function changeScreen(
  currentScreen,
  nextScreen,
  delay = 720
) {

  currentScreen.classList.add("fade-out");

  setTimeout(() => {

    currentScreen.classList.add("hidden");

    currentScreen.classList.remove("fade-out");

    nextScreen.classList.remove("hidden");

  }, delay);

}


function isTouchDevice() {

  return window
    .matchMedia("(pointer: coarse)")
    .matches;

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

  if (!isTouchDevice()) {
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


unlockButton.addEventListener(
  "click",
  checkPassword
);


passwordInput.addEventListener(
  "keydown",

  (event) => {

    if (event.key === "Enter") {

      event.preventDefault();

      checkPassword();

    }

  }
);


/* =========================================
   ENVELOPE OPENING
========================================= */

function openEnvelope() {

  if (envelopeIsOpening) {
    return;
  }

  envelopeIsOpening = true;

  passwordInput.blur();

  envelopeScene.classList.add("opening");

  setTimeout(
    () =>
      envelopeScene.classList.add("seal-pulse"),
    250
  );

  setTimeout(
    () =>
      envelopeScene.classList.add("seal-open"),
    950
  );

  setTimeout(
    () =>
      envelopeScene.classList.add("flap-open"),
    1450
  );

  setTimeout(
    () =>
      envelopeScene.classList.add("letter-rise"),
    2250
  );

  setTimeout(
    () =>
      envelopeScene.classList.add("letter-focus"),
    3200
  );

  setTimeout(
    () =>
      envelopeScene.classList.add("letter-zoom"),
    4100
  );

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

startButton.addEventListener(
  "click",

  () => {

    resetStory();

    changeScreen(
      introScreen,
      storyScreen,
      650
    );

    setTimeout(() => {

      renderStoryScene();

      revealNextStoryLine();

    }, 720);

  }
);


function resetStory() {

  storySceneIndex = 0;

  storyLineIndex = 0;

  storyLines.innerHTML = "";

  storyScreen.className =
    "screen theme-opening hidden";

  progressTotal.textContent =
    String(storyScenes.length)
      .padStart(2, "0");

}


/* =========================================
   STORY
========================================= */

function renderStoryScene() {

  const scene =
    storyScenes[storySceneIndex];

  storyScreen.className =
    `screen theme-${scene.theme}`;

  storyKicker.textContent =
    scene.kicker;

  storyLines.innerHTML = "";

  storyLineIndex = 0;

  progressNumber.textContent =
    String(storySceneIndex + 1)
      .padStart(2, "0");

  progressTotal.textContent =
    String(storyScenes.length)
      .padStart(2, "0");

  storyContainer
    .classList
    .remove("scene-enter");

  void storyContainer.offsetWidth;

  storyContainer
    .classList
    .add("scene-enter");

}


function revealNextStoryLine() {

  if (interactionLocked) {
    return;
  }

  const scene =
    storyScenes[storySceneIndex];

  if (
    storyLineIndex <
    scene.lines.length
  ) {

    const line =
      document.createElement("p");

    line.className =
      "story-line";

    line.textContent =
      scene.lines[storyLineIndex];

    if (
      scene.theme === "hope" &&
      storyLineIndex ===
      scene.lines.length - 1
    ) {

      line.classList.add(
        "story-line-emphasis"
      );

    }

    storyLines.appendChild(line);

    requestAnimationFrame(() => {

      line.classList.add("visible");

    });

    storyLineIndex += 1;

    keepNewestStoryLineVisible();

    return;

  }

  if (
    storySceneIndex <
    storyScenes.length - 1
  ) {

    goToNextStoryScene();

    return;

  }

  startPoem();

}


function goToNextStoryScene() {

  interactionLocked = true;

  storyContainer
    .classList
    .add("scene-leave");

  setTimeout(() => {

    storySceneIndex += 1;

    renderStoryScene();

    storyContainer
      .classList
      .remove("scene-leave");

    setTimeout(() => {

      interactionLocked = false;

      revealNextStoryLine();

    }, 180);

  }, 520);

}


function keepNewestStoryLineVisible() {

  const newest =
    storyLines.lastElementChild;

  if (!newest) {
    return;
  }

  newest.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

}


/* =========================================
   POEM
========================================= */

function startPoem() {

  if (interactionLocked) {
    return;
  }

  interactionLocked = true;

  poemIndex = 0;

  poemLines.innerHTML = "";

  changeScreen(
    storyScreen,
    poemScreen,
    720
  );

  setTimeout(() => {

    interactionLocked = false;

    revealNextPoemStanza();

  }, 850);

}


function revealNextPoemStanza() {

  if (interactionLocked) {
    return;
  }

  if (
    poemIndex <
    poemStanzas.length
  ) {

    const stanza =
      document.createElement("div");

    stanza.className =
      "poem-stanza";

    poemStanzas[poemIndex]
      .forEach((text) => {

        const line =
          document.createElement("p");

        line.textContent =
          text;

        stanza.appendChild(line);

      });

    poemLines.appendChild(stanza);

    requestAnimationFrame(() => {

      stanza.classList.add("visible");

    });

    poemIndex += 1;

    stanza.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    return;

  }

  changeScreen(
    poemScreen,
    musicScreen,
    720
  );

}


/* =========================================
   MUSIC NAVIGATION
========================================= */

musicContinue.addEventListener(
  "click",

  () => {

    resetQuestion();

    changeScreen(
      musicScreen,
      questionScreen,
      720
    );

  }
);


musicBack.addEventListener(
  "click",

  () => {

    changeScreen(
      musicScreen,
      poemScreen,
      720
    );

  }
);


/* =========================================
   QUESTION
========================================= */

function resetQuestion() {

  questionChoiceState
    .classList
    .remove("hidden");

  questionResult
    .classList
    .add("hidden");

  questionMessage.textContent = "";

  questionGif.removeAttribute("src");

  questionGif.style.display = "none";

}


function showQuestionResult(type) {

  questionChoiceState
    .classList
    .add("hidden");

  questionResult
    .classList
    .remove("hidden");


  if (type === "yes") {

    questionMessage.textContent =
      "Το ήξερα... 😌";

    questionGif.alt =
      "Happy reaction";

    questionGif.src =
      "yes.gif";

  }

  else {

    questionMessage.textContent =
      "Μάλλον δεν διάβασες καλά την ερώτηση... 😒";

    questionGif.alt =
      "Reaction";

    questionGif.src =
      "no.gif";

  }

}


questionGif.addEventListener(
  "load",

  () => {

    questionGif.style.display =
      "block";

  }
);


questionGif.addEventListener(
  "error",

  () => {

    questionGif.style.display =
      "none";

  }
);


answerYes.addEventListener(
  "click",

  () => {

    showQuestionResult("yes");

  }
);


answerNo.addEventListener(
  "click",

  () => {

    showQuestionResult("no");

  }
);


questionBack.addEventListener(
  "click",

  () => {

    resetQuestion();

    changeScreen(
      questionScreen,
      musicScreen,
      720
    );

  }
);


questionTryAgain.addEventListener(
  "click",

  () => {

    resetQuestion();

  }
);


questionContinue.addEventListener(
  "click",

  () => {

    finalScreen.scrollTop = 0;

    changeScreen(
      questionScreen,
      finalScreen,
      720
    );

  }
);


/* =========================================
   FINAL → QUESTION
========================================= */

finalBack.addEventListener(
  "click",

  () => {

    resetQuestion();

    changeScreen(
      finalScreen,
      questionScreen,
      720
    );

  }
);


/* =========================================
   FULL REPLAY
========================================= */

replayButton.addEventListener(
  "click",

  () => {

    finalScreen
      .classList
      .add("fade-out");

    setTimeout(() => {

      finalScreen
        .classList
        .add("hidden");

      finalScreen
        .classList
        .remove("fade-out");

      finalScreen.scrollTop = 0;

      storySceneIndex = 0;

      storyLineIndex = 0;

      poemIndex = 0;

      storyLines.innerHTML = "";

      poemLines.innerHTML = "";

      resetQuestion();

      passwordScreen
        .classList
        .remove("hidden");

      passwordInput.value = "";

      errorMessage.textContent = "";

      if (!isTouchDevice()) {

        setTimeout(
          () => passwordInput.focus(),
          150
        );

      }

    }, 720);

  }
);


/* =========================================
   INPUT HELPERS
========================================= */

function isInteractiveStoryScreen() {

  return !storyScreen
    .classList
    .contains("hidden");

}


function isInteractivePoemScreen() {

  return !poemScreen
    .classList
    .contains("hidden");

}


function advanceCurrentExperience() {

  if (interactionLocked) {
    return;
  }

  if (
    isInteractiveStoryScreen()
  ) {

    revealNextStoryLine();

  }

  else if (
    isInteractivePoemScreen()
  ) {

    revealNextPoemStanza();

  }

}


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
  "keydown",

  (event) => {

    if (
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }

    if (
      document.activeElement ===
      passwordInput
    ) {
      return;
    }

    if (
      !isInteractiveStoryScreen() &&
      !isInteractivePoemScreen()
    ) {
      return;
    }

    event.preventDefault();

    advanceCurrentExperience();

  }
);


/* =========================================
   TAP / CLICK
========================================= */

storyContainer.addEventListener(
  "click",

  (event) => {

    if (
      Date.now() <
      ignoreClickUntil
    ) {
      return;
    }

    if (
      event.target.closest(
        "button, a, input"
      )
    ) {
      return;
    }

    revealNextStoryLine();

  }
);


poemContainer.addEventListener(
  "click",

  (event) => {

    if (
      Date.now() <
      ignoreClickUntil
    ) {
      return;
    }

    if (
      event.target.closest(
        "button, a, input"
      )
    ) {
      return;
    }

    revealNextPoemStanza();

  }
);


/* =========================================
   MOUSE WHEEL
========================================= */

function handleWheel(event) {

  if (
    !isInteractiveStoryScreen() &&
    !isInteractivePoemScreen()
  ) {
    return;
  }

  if (
    Math.abs(event.deltaY) < 18 ||
    wheelLocked
  ) {
    return;
  }

  wheelLocked = true;

  if (
    event.deltaY > 0
  ) {

    advanceCurrentExperience();

  }

  setTimeout(() => {

    wheelLocked = false;

  }, 720);

}


window.addEventListener(
  "wheel",
  handleWheel,
  {
    passive: true
  }
);


/* =========================================
   MOBILE SWIPE
========================================= */

function onTouchStart(event) {

  touchStartY =
    event
      .changedTouches[0]
      .screenY;

}


function onTouchEnd(event) {

  touchEndY =
    event
      .changedTouches[0]
      .screenY;

  const distance =
    touchStartY -
    touchEndY;

  if (
    Math.abs(distance) < 45
  ) {
    return;
  }

  if (
    distance > 0
  ) {

    event.preventDefault();

    ignoreClickUntil =
      Date.now() + 550;

    advanceCurrentExperience();

  }

}


storyScreen.addEventListener(
  "touchstart",
  onTouchStart,
  {
    passive: true
  }
);


storyScreen.addEventListener(
  "touchend",
  onTouchEnd,
  {
    passive: false
  }
);


poemScreen.addEventListener(
  "touchstart",
  onTouchStart,
  {
    passive: true
  }
);


poemScreen.addEventListener(
  "touchend",
  onTouchEnd,
  {
    passive: false
  }
);


/* =========================================
   AUTOFOCUS
========================================= */

if (!isTouchDevice()) {

  setTimeout(
    () => passwordInput.focus(),
    250
  );

}


/* =========================================
   INIT
========================================= */

resetQuestion();
