// GIVEN PARAGRAPH
const sentences = `The quick brown fox jumps over the lazy dog.
Sphinx of black quartz, judge my vow.
Pack my box with five dozen liquor jugs.
How vexingly quick daft zebras jump!`;

// ELEMENTS
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const input = document.getElementById("input");
const sentenceEl = document.getElementById("sentence");
const timerEl = document.getElementById("timer");
const resultDiv = document.getElementById("result");
const speedEl = document.getElementById("speed");
const accuracyEl = document.getElementById("accuracy");

// VARIABLES
let timeLeft = 30;
let timerInterval;

// INITIAL STATE
timerEl.textContent = "00:30";

// EVENT LISTENERS
startBtn.addEventListener("click", startTest);
retryBtn.addEventListener("click", resetTest);

// START TEST
function startTest() {
  sentenceEl.textContent = sentences;
  input.disabled = false;
  input.value = "";
  input.focus();

  startBtn.disabled = true;
  resultDiv.style.display = "none";

  timeLeft = 30;
  timerEl.textContent = "00:30";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endTest();
    }
  }, 1000);
}

// END TEST
function endTest() {
  input.disabled = true;
  startBtn.disabled = true;

  calculateResult();
  resultDiv.style.display = "block";
}

// CALCULATE SPEED & ACCURACY
function calculateResult() {
  const typedText = input.value.trim();
  const originalText = sentences.trim();

  const typedWords = typedText.split(/\s+/);
  const originalWords = originalText.split(/\s+/);

  let correctWords = 0;
  let correctChars = 0;

  // WORD CHECK
  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] === originalWords[i]) {
      correctWords++;
    }
  }

  // CHARACTER CHECK
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === originalText[i]) {
      correctChars++;
    }
  }

  const speed = Math.round((correctWords / 30) * 60);
  const accuracy =
    typedText.length === 0
      ? 0
      : Math.round((correctChars / typedText.length) * 100);

  speedEl.textContent = speed;
  accuracyEl.textContent = accuracy;
}

// RESET TEST
function resetTest() {
  clearInterval(timerInterval);

  input.value = "";
  input.disabled = false;

  sentenceEl.textContent = "";
  timerEl.textContent = "00:30";

  startBtn.disabled = false;
  resultDiv.style.display = "none";
}
