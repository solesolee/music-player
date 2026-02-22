const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const progressFill = document.getElementById("progress-fill");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.src = "image/pause.svg";
  } else {
    audio.pause();
    playIcon.src = "image/play.svg";
  }
});

/* UPDATE PROGRESS BAR */
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const progressPercent = (currentTime / duration) * 100;
  progressFill.style.width = progressPercent + "%";
});
