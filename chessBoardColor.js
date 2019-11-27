// Complete the function that returns the color of the given square on a normal, 8x8 chess board:

// chessboard

// Examples
// "a", 8  ==>  "white"
// "b", 2  ==>  "black"
// "f", 5  ==>  "white"



const mineColor = (file, rank) => ('abcdefgh'.indexOf(file) + 1) % 2 === rank % 2 ? 'black' : 'white';



console.log(mineColor('c',1));