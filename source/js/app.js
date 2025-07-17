const player = document.querySelector("audio");
const playBtn = document.querySelector(".play i");
const nextBtn = document.querySelector(".forward");
const prevBtn = document.querySelector(".back-forward");
const cover = document.querySelector("img");
const title = document.querySelector("h1");

const songs = [
  {
    src: "./public/musics/bende-naf-ta-khate-saf.mp3",
    cover: "./public/cover1.jpg",
    title: "بند ناف تا خط صاف - یاس",
  },
  {
    src: "./public/musics/sefareshi.mp3",
    cover: "./public/cover2.jpg",
    title: "سفارشی - یاس",
  },
  {
    src: "./public/musics/sarkoob.mp3",
    cover: "./public/cover3.jpg",
    title: "سرکوب - یاس",
  },
];

let currentSong = 0;
function togglePlay() {
  if (player.paused) {
    player.play();
    playBtn.classList.replace("fa-play", "fa-pause");
  } else {
    player.pause();
    playBtn.classList.replace("fa-pause", "fa-play");
  }
}

function changeSong(index) {
  currentSong = index;
  player.src = songs[currentSong].src;
  cover.src = songs[currentSong].cover;
  title.textContent = songs[currentSong].title;
  player.play();
  playBtn.classList.replace("fa-play", "fa-pause");
}

function nextSong() {
  let next = currentSong + 1;
  if (next > songs.length) next = 0;
  changeSong(next);
}

function prevSong() {
  let prev = currentSong - 1;
  if (prev < 0) prev = songs.length - 1;
  changeSong(prev);
}

function skip(seconds) {
  player.currentTime += seconds;
}

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
document
  .querySelector(".ten-sec-forward")
  .addEventListener("click", () => skip(10));
document
  .querySelector(".ten-sec-back-forward")
  .addEventListener("click", () => skip(-10));
changeSong(0);
