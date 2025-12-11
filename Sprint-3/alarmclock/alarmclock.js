// Constants for time conversion
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;

let intervalId;

/**
 * Formats time in seconds to MM:SS format
 * @param {number} totalSeconds - The time in seconds to format
 * @returns {string} Formatted time string in "Time Remaining: MM:SS" format
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

  let totalSeconds = Number(input.value);

  // Input validation: check for invalid or non-positive numbers
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    heading.innerText = "Please enter a valid positive number of seconds";
    return;
  }

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
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
