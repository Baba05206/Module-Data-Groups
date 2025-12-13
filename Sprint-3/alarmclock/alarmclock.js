// Constants for time conversion
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;

let intervalId;

/**
 * Formats time in seconds to MM:SS format
 */
function formatTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
  const seconds = totalSeconds % SECONDS_PER_MINUTE;

  return (
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  const errorMsg = document.getElementById("alarmError");

  // Reset alarm sound + flashing background before new countdown
  pauseAlarm();

  let raw = input.value.trim();

  // Clear previous error
  errorMsg.textContent = "";

  // STRONG VALIDATION: must be digits only
  if (!/^\d+$/.test(raw)) {
    heading.innerText = "Time Remaining: 00:00";
    errorMsg.textContent =
      "Invalid input. Please enter a whole number of seconds (e.g., 10, 30, 120). Decimals and text are not allowed.";
    return;
  }

  let totalSeconds = Number(raw);

  // Prevent extremely large or zero values
  if (totalSeconds === 0 || totalSeconds > 86400) {
    heading.innerText = "Time Remaining: 00:00";
    errorMsg.textContent =
      "Please enter a value between 1 and 86,400 seconds. Examples: 10, 45, 300.";
    return;
  }

  // Reset any existing countdown
  clearInterval(intervalId);

  heading.innerText = formatTimeDisplay(totalSeconds);

  intervalId = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      heading.innerText = formatTimeDisplay(0);
      clearInterval(intervalId);
      playAlarm();
      return;
    }

    heading.innerText = formatTimeDisplay(totalSeconds);
  }, MILLISECONDS_PER_SECOND);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });

  // Allow Enter key to trigger alarm
  document.getElementById("alarmSet").addEventListener("keyup", (e) => {
    if (e.key === "Enter") setAlarm();
  });
}

function playAlarm() {
  audio.play();
  document.body.classList.add("alarm-active");
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("alarm-active");
}

window.onload = setup;
