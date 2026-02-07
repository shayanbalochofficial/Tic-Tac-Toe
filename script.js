const boxEls = document.querySelectorAll(".box");
const statusEl = document.querySelector(".status");
const restartBtnEl = document.querySelector(".restartBtn");

let x = "<img src='x-letter.svg'>";
let o = "<img src='o-letter.svg'>";

//Winning combination
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = "X";
let running = false;

init();
//Functin init
function init() {
  boxEls.forEach((box) => box.addEventListener("click", boxClick));
  restartBtnEl.addEventListener("click", restartGame);
  running = true;
}
