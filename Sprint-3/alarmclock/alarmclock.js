// Constants for time conversion
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;

let intervalId;

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

  heading.innerText =
    "Time Remaining: " +
    String(Math.floor(totalSeconds / SECONDS_PER_MINUTE)).padStart(2, "0") +
    ":" +
    String(totalSeconds % SECONDS_PER_MINUTE).padStart(2, "0");

  intervalId = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      heading.innerText = "Time Remaining: 00:00";
      clearInterval(intervalId);
      playAlarm();
      return;
    }

    heading.innerText =
      "Time Remaining: " +
      String(Math.floor(totalSeconds / SECONDS_PER_MINUTE)).padStart(2, "0") +
      ":" +
      String(totalSeconds % SECONDS_PER_MINUTE).padStart(2, "0");
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
