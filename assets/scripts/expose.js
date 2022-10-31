// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const sel = document.querySelector('#horn-select');
  const img = document.querySelector('img[src="assets/images/no-image.png"]');
  const vol = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  const sound = document.getElementById("volume");
  const audio = document.querySelector('.hidden');
  const btn = document.querySelector('button');
  const jsConfetti = new JSConfetti()

  sel.addEventListener('change', (event) => {
    if (event.target.value == "air-horn") {
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    if (event.target.value == "car-horn") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    if (event.target.value == "party-horn") {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  sound.onchange = (event) => {
    audio.volume=sound.value/100.00; // Audio's volume is range [0,1], thus divide by double 100
    if (sound.value == 0) {vol.src="assets/icons/volume-level-0.svg";}
    else if (sound.value >0 && sound.value <33) {vol.src="assets/icons/volume-level-1.svg";}
    else if (sound.value >33 && sound.value <67) {vol.src="assets/icons/volume-level-2.svg";}
    else {vol.src="assets/icons/volume-level-3.svg";}
  };

  btn.addEventListener('click', (event) => {
    audio.play();
    if (sel.value == "party-horn") {
      jsConfetti.addConfetti()
    }
  });
}