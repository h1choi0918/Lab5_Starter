// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const sel = document.getElementById("voice-select");
  const img = document.querySelector('img[src="assets/images/smiling.png"]');
  const btn = document.querySelector('button');
  const tts = document.getElementById("text-to-speak");
  
  const synth = window.speechSynthesis;
  
  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      sel.appendChild(option);
    }
  });

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const voices = synth.getVoices();
    const utterThis = new SpeechSynthesisUtterance(tts.value);
    const option = sel.selectedOptions[0].getAttribute('data-name');

    if (sel.value != "select" && tts.value != "") { //Don't play until TTS is selected or no input
      for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === option) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utterThis);
      utterThis.onstart = (event) => {img.src="assets/images/smiling-open.png";}
      utterThis.onend = (event) => { img.src="assets/images/smiling.png"; }
    }
  });
}