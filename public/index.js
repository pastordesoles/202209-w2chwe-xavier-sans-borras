import createMap from "./js/cellgrid/createmap.js";
import checkCellMates from "./js/checkCellMates/checkCellMates.js";
import nextEpoch from "./js/nextepoch/nextepoch.js";
import updateState from "./js/updatestate/updatestate.js";

const width = 15;
const height = 15;

const playGame = () => {
  const board = createMap(width, height);
  const spinnerFlat = board.flat(2);

  const cellSlots = document.getElementsByClassName("cell");

  setInterval(() => {
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
