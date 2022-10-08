import createMap from "./js/cellgrid/createmap.js";
import checkCellMates from "./js/checkCellMates/checkCellMates.js";
import nextEpoch from "./js/nextepoch/nextepoch.js";
import updateState from "./js/updatestate/updatestate.js";

const width = 3;
const height = 3;

const playGame = () => {
  const board = createMap(width, height);

  setInterval(() => {
    let currentGeneration = 1;
    const lastGeneration = 100;
    while (currentGeneration < lastGeneration) {
      for (let xAxis = 0; xAxis < board.length; xAxis++) {
        for (let yAxis = 0; yAxis < board[xAxis].length; yAxis++) {
          const cell = board[xAxis][yAxis];
          const aliveNeighbors = checkCellMates(board, cell);
          nextEpoch(aliveNeighbors, cell);
        }
      }
      updateState(board);
      currentGeneration++;
      console.clear();
      console.log(
        board.map((value) => value.map((value2) => value2.alive)).join("\n")
      );
    }
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
