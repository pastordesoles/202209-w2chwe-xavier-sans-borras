import createMap from "./js/cellgrid/createmap.js";
import checkCellMates from "./js/checkCellMates/checkCellMates.js";

const width = 3;
const height = 3;

const grid = createMap(width, height);

const cellPositionX = 2;
const cellPositionY = 2;
const cellInspected = grid[cellPositionX][cellPositionY];
checkCellMates(grid, cellInspected);
