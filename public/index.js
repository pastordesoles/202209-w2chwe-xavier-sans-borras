import createMap from "./js/cellgrid/createmap.js";

console.log(createMap(6, 6));

// if a living cell has more than three neighbors, it dies
// if a living cell has less than three neighbors, it dies
// if a dead cell has exactly three neighbors — it comes to life
// in other cases, the cell remains in its state
