function generateSoundUrl(soundName) {
  const url = `https://s3.amazonaws.com/freecodecamp/drums/${soundName}.mp3`;
  return url;
}

const volumeSlider = document.querySelector(".slider");
const volumeText = document.querySelector(".volume");
const modeToggle = document.querySelector(".mode-toggle");
const buttons = document.querySelectorAll(".btns button");
const toggle = document.querySelector(".toggle");
const audio = new Audio();

function playSound(soundUrl) {
  audio.src = soundUrl;
  audio.load();
  audio.addEventListener("loadeddata", function () {
    audio.play();
  });
}

function displaySoundName(soundName) {
  const soundMade = document.querySelector(".sound-made");
  soundMade.textContent = ` ${soundName}`;
}

function adjustVolume(volumeValue) {
  audio.volume = volumeValue;
}

let soundMappings = {
  Q: "Heater-1",
  W: "Heater-2",
  E: "Heater-3",
  A: "Heater-4_1",
  S: "Heater-6",
  D: "Dsc_Oh",
  Z: "Kick_n_Hat",
  X: "RP4_KICK_1",
  C: "Cev_H2",
};

modeToggle.addEventListener("change", function () {
  if (this.checked) {
    soundMappings = {
      Q: "Heater-1",
      W: "Heater-2",
      E: "Heater-3",
      A: "Heater-4_1",
      S: "Heater-6",
      D: "Dsc_Oh",
      Z: "Kick_n_Hat",
      X: "RP4_KICK_1",
      C: "Cev_H2",
    };
  } else {
    soundMappings = {
      Q: "Chord_1",
      W: "Chord_2",
      E: "Chord_3",
      A: "Give_us_a_light",
      S: "Dry_Ohh",
      D: "Bld_H1",
      Z: "punchy_kick_1",
      X: "side_stick_1",
      C: "snare",
    };
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const soundName = soundMappings[button.textContent];
    if (soundName && toggle.checked) {
      const soundUrl = generateSoundUrl(soundName);
      playSound(soundUrl);
      displaySoundName(soundName);

      adjustVolume(volumeSlider.value / 100);
    }
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  const soundName = soundMappings[key];
  toggle.focus();
  if (soundName && toggle.checked) {
    const soundUrl = generateSoundUrl(soundName);

    playSound(soundUrl);
    displaySoundName(soundName);

    adjustVolume(volumeSlider.value / 100);
  }
});

toggle.addEventListener("change", function () {
  const soundText = document.querySelector(".onOff");
  if (this.checked) {
    soundText.textContent = "Sound: ON";
    soundText.style.color = "green";
    enableDrum(true);
    volumeText.style.visibility = "visible";
  } else {
    soundText.textContent = "Sound: OFF";
    soundText.style.color = "red";
    enableDrum(false);
    volumeText.style.visibility = "hidden";
  }
});

function enableDrum(enabled) {
  const buttons = document.querySelectorAll(".btns button");
  buttons.forEach((button) => {
    button.disabled = !enabled;
  });
}

volumeSlider.addEventListener("input", function () {
  const volumeValue = this.value / 100;
  const soundText = document.querySelector(".volume");
  soundText.textContent = `Volume value: ${this.value}`;
  adjustVolume(volumeValue);
});
