const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.png",
];

//Write your code here
let currentIndex = 0;
let slideshowIntervalId = null;

const carouselImage = document.querySelector("#carousel-img");
const forwardButton = document.querySelector("#forward-btn");
const backwardButton = document.querySelector("#backward-btn");

const autoForwardButton = document.querySelector("#auto-forward");
const autoBackwardButton = document.querySelector("#auto-backward");
const stopButton = document.querySelector("#stop");

function updateImage() {
  carouselImage.src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

forwardButton.addEventListener("click", moveForward);
backwardButton.addEventListener("click", moveBackward);

// ---- AUTOMATIC SLIDESHOW ----

function startAutoSlideshow(direction) {
  stopAutoSlideshow(); // clear any previous interval

  // Disable auto buttons
  autoForwardButton.disabled = true;
  autoBackwardButton.disabled = true;

  slideshowIntervalId = setInterval(() => {
    direction === "forward" ? moveForward() : moveBackward();
  }, 2000);
}

function stopAutoSlideshow() {
  clearInterval(slideshowIntervalId);
  slideshowIntervalId = null;

  // Re-enable buttons
  autoForwardButton.disabled = false;
  autoBackwardButton.disabled = false;
}

autoForwardButton.addEventListener("click", () =>
  startAutoSlideshow("forward")
);
autoBackwardButton.addEventListener("click", () =>
  startAutoSlideshow("backward")
);
stopButton.addEventListener("click", stopAutoSlideshow);
