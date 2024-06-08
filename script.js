document.getElementById("DOMContentLoaded", () => {
  const toggle = document.getElementsByClassName("toggleButton")[0];
  const navBar = document.getElementsByClassName("navBar__links")[0];
  const gridArea = document.getElementsByClassName("grid");
  const startButton = document.getElementById("startButton");
  const playerScore = document.getElementById("score");
  const gameLines = document.getElementById("lines");
  const playerLevel = document.getElementById("levels");
  const gameMusic = document.getElementById("music");
  const soundButton = document.getElementById("sound");

  let timerId = 0;
  let score = 0;
  let lines = 0;
  let level = 0;
  let nextRandom = 0;

  const colors = [
    "MidnightBlue",
    "HotPink",
    "LimeGreen",
    "HotOrange",
    "BrightRed",
    "DarkBrown",
    "Magenta",
  ];

  let blocks = Array.from(document.querySelectorAll(".grid div.blox"));
  const width = 10;
  console.log(blocks);

  // Function that toggles the hamburger menu
  toggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });

  // Function that toggles Music on and Off
  soundButton.addEventListener("click", () => {
    if (gameMusic.muted == false) {
      gameMusic.muted = true;
      soundButton.innerHTML = "Music Paused";
    } else {
      gameMusic.muted = false;
      gameMusic.play();
      gameMusic.volume = 0.3;
      gameMusic.loop = true;
      soundButton.innerHTML = "Music On";
    }
  });

  // Arrays for each Tetrimino
  const pTetrimino = [
    [2, 1, width + 1, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 2],
    [width * 2, width * 2 + 1, width + 1, 1],
    [0, width, width + 1, width + 2],
  ];
});
