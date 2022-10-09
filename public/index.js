import createMap from "./js/cellgrid/createmap.js";
import checkCellMates from "./js/checkCellMates/checkCellMates.js";
import nextEpoch from "./js/nextepoch/nextepoch.js";
import updateState from "./js/updatestate/updatestate.js";

const width = 3;
const height = 3;

const playGame = () => {
  const board = createMap(width, height);
  const spinnerFlat = board.flat(2);

  const cellSlots = document.getElementsByClassName("cell");

  setInterval(() => {
    // let currentGeneration = 1;
    // const lastGeneration = 100;
    // while (currentGeneration < lastGeneration) {
    for (let xAxis = 0; xAxis < board.length; xAxis++) {
      for (let yAxis = 0; yAxis < board[xAxis].length; yAxis++) {
        const cell = board[xAxis][yAxis];
        const aliveNeighbors = checkCellMates(board, cell);
        nextEpoch(aliveNeighbors, cell);

        spinnerFlat.forEach((life, index) => {
          cellSlots[index].className = "cell";
          if (life.alive) {
            cellSlots[index].classList.toggle("cell--alive");
          } else {
            cellSlots[index].classList.remove("cell--alive");
          }
        });
      }
    }
    updateState(board);
  }, 1000);
};

playGame();

// setTimeout(() => {
//   console.clear();
//   let string = "";
//   for (let y = 0; y < 3; y++) {
//     for (let x = 0; x < 3; x++) {
//       const cell = board[y][x];
//       string += cell.icon;
//     }
//     string += "\n";
//   }
//   console.log(string);
// }, 100);
