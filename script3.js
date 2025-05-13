// script.js
function playClick() {
  const clickSound = document.getElementById("click-sound");
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// Optional: call this to attach click sound to all links/buttons
function attachClickSoundToAll() {
  document.querySelectorAll("a, button, .world").forEach(el => {
    el.addEventListener("click", playClick);
  });
}
