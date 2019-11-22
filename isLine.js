// Kata Task
// You are given a grid, which always includes exactly two end-points indicated by X

// You simply need to return true/false if you can detect a one and only one "valid" line joining those points.

// A line can have the following characters :

// - = left / right
// | = up / down
// + = corner
// Rules for valid lines
// The most basic kind of valid line is when the end-points are already adjacent
// X
// X
// XX
// The corner character (+) must be used for all corners (but only for corners).
// It must be possible to follow the line with no ambiguity (lookahead of just one step, and never treading on the same spot twice).
// The line may take any path between the two points.
// Sometimes a line may be valid in one direction but not the other. Such a line is still considered valid.
// Every line "character" found in the grid must be part of the line. If extras are found then the line is not valid.
// Examples
// Good lines
// X---------X
// X
// |
// |
// X
//    +--------+
// X--+        +--+
//                |
//                X
//    +-------------+
//    |             |
// X--+      X------+    
//    +-------+
//    |      +++---+
// X--+      +-+   X
// Bad lines
// X-----|----X
// X
// |
// +
// X
//    |--------+
// X---        ---+
//                |
//                X
//    +------ 
//    |              
// X--+      X  
//       +------+
//       |      |
// X-----+------+
//       |
//       X
// Hint
// Imagine yourself walking a path where you can only see your very next step. Can you know which step you must take, or not?


const line = grid => {


    const look = (currentV, currentL, direction) => {

        try{

            if(direction==="left") return grid[currentV][currentL-1];
            if(direction==="right") return grid[currentV][currentL+1];
            if(direction==="up") return grid[currentV-1][currentL];
            if(direction==="down") return grid[currentV+1][currentL];

        }catch(err){

            if(err) return "-1";

        }

    }

    const canIGo = (direction, currentBlock, up, down, left, right) => {

        switch(currentBlock){

            case "X":           
                if((up==="|" && direction === "up") || (up=== "+" && direction ==="up") || (up === "X" && direction==="up")) return true;
                if((right==="-" && direction === "right") || (right==="+" && direction === "right") || (right === "X" && direction==="right"))return true;
                if((left==="-" && direction === "left") || (left === "+" && direction === "left")|| (left === "X" && direction==="left")) return true;
                if((down==="|" && direction === "down") || (down==="+" && direction==="down")|| (down === "X" && direction==="down")) return true;            
                break;

            case "-":          
                if((left==="-" && direction === "left") || (left === "+" && direction==="left")|| (left === "X" && direction==="left")) return true;
                if((right==="-" && direction === "right") || (right==="+" && direction==="right")|| (right === "X" && direction==="right")) return true;
                break;

            case "|":
                if(up==="X" || down==="X") return true;
                if((up === "|" && direction === "up") || (up==="+" && direction === "up")|| (up === "X" && direction==="up")) return true;
                if((down === "|" && direction === "down") || (down==="+" && direction === "down")|| (down === "X" && direction==="down")) return true;
                break;

            case "+":            
                if((up==="|" && direction === "up") || (up=== "+" && direction ==="up")|| (up === "X" && direction==="up")) return true;
                if((right==="-" && direction === "right") || (right==="+" && direction === "right")|| (right === "X" && direction==="right"))return true;
                if((left==="-" && direction === "left") || (left === "+" && direction === "left")|| (left === "X" && direction==="left")) return true;
                if((down==="|" && direction === "down") || (down==="+" && direction==="down")|| (down === "X" && direction==="down")) return true;              
                break;

            default: return false;
        }   
        
        return false;
    }

    const determine = (heading, currentBlock, up, down, left, right) => {

        let shouldGo = "nope";

        switch(heading){

            case "right":

                if(canIGo("up",currentBlock,up,down,left,right)) shouldGo = "up";
                if(canIGo("down",currentBlock,up,down,left,right)) shouldGo = "down";
                if(canIGo("right",currentBlock,up,down,left,right)) shouldGo = "right";
                break;
    
            case "up":

                if(canIGo("left",currentBlock,up,down,left,right)) shouldGo = "left";
                if(canIGo("right",currentBlock,up,down,left,right)) shouldGo = "right";
                if(canIGo("up",currentBlock,up,down,left,right)) shouldGo = "up";
                break;
            
            case "down":
            
                if(canIGo("left",currentBlock,up,down,left,right)) shouldGo = "left";
                if(canIGo("right",currentBlock,up,down,left,right)) shouldGo = "right";
                if(canIGo("down",currentBlock,up,down,left,right)) shouldGo = "down";
                break;
                
            case "left":

                if(canIGo("up",currentBlock,up,down,left,right)) shouldGo = "up";
                if(canIGo("down",currentBlock,up,down,left,right)) shouldGo = "down";
                if(canIGo("left",currentBlock,up,down,left,right)) shouldGo = "left";
                break;
                
            default: return "no";
        }
        
        if(currentBlock==="+"){
            if(left==="+" && right==="+") shouldGo = "left";
        }

        // if(currentBlock==="+"){

        //     if((heading==="right"||heading==="left" )&& up==="+" && down==="+"){
        //         shouldGo="up-down"
        //     }
        //     if((heading==="up" || heading==="down" ) && left==="+" && right==="+"){
        //         shouldGo="left-right";
        //     }
        // }
        
        if(currentBlock==="X"){
          if(up==="|"&&down==="|") shouldGo = "nope";
          if(right==="-"&&down==="|") shouldGo = "nope";
          if(right==="-"&&down==="-") shouldGo = "nope";
          if(right==="-"&&down==="X") shouldGo = "nope";
          if(right==="X"&&down==="|") shouldGo = "nope";  
          if(left==="-"&&right==="-") shouldGo = "nope";
          if(!canIGo("right",currentBlock,up,down,left,right) && !canIGo("up",currentBlock,up,down,left,right) && !canIGo("down",currentBlock,up,down,left,right)) shouldGo = "left";
        }

        return shouldGo;       
    }

   
    for(let i = 0; i < grid.length; i++){

        for(let j = 0; j<grid[0].length; j++){

            if(grid[i][j]==="X"){
           
                let v = i;
                let l = j;
                let heading = "right";
                let respawnV, respawnL;
                let fork = false;  
                          
                while(l < grid[0].length && v < grid.length){

                    let block = grid[v][l];

                    let [up,down,left,right] = [look(v,l, "up"),look(v,l, "down"),look(v,l, "left"),look(v,l, "right")];

                    console.log(determine(heading, block, up, down, left, right));

                    if((block==="X" && v !== i) || (block==="X" && l !== j)) return true;
                    if(block==="+" && heading === determine(heading, block, up, down, left, right)) return false;

                    // if(block==="+" && (determine(heading, block, up, down, left, right)==="left-right"||determine(heading, block, up, down, left, right)==="up-down")){
                    //     console.log("Droped breadcrump");
                    //     fork=true;
                    //     respawnL=l;
                    //     respawnV=v;
                    //     heading=determine(heading, block, up, down, left, right).split("-")[0];             

                    // }

                    // if(block==="+"&&determine(heading, block, up, down, left, right) === heading){

                    //     if(fork){
                    //         v=respawnV;
                    //         l=respawnL;
                    //         fork=false;
                    //         continue;
                    //     }
                    // }

                    if(determine(heading, block, up, down, left, right)==="right"){
                        heading= "right";
                        l++;
                    }

                    if(determine(heading, block, up, down, left, right)==="up"){
                        heading= "up";
                        v--;
                    }

                    if(determine(heading, block, up, down, left, right)==="down"){
                        heading= "down";
                        v++;
                    }

                    if(determine(heading, block, up, down, left, right)==="left"){
                        heading= "left";
                        l--;
                    }

                    if(determine(heading, block, up, down, left, right)==="nope"){
                        
                        return false;
                    }
                }

            }                  
        }
    }

    return false;
}













var grid = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], ['X', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'X'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

var grid2 = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', '+', '-', '-', '-', '-', '-', '-', '-', '-', '+', ' ', ' ', ' ', ' ', ' '], [' ', ' ', 'X', '-', '-', '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '+', '-', '-', '+', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
   
var grid4 = [
    "                     ",    
    "    +-------------+  ",
    "    |             |  ",
    " X--+      X------+  ",
    "                     "
    ].map(e => e.split(""));

var grid5 = [
    "                      ",    
    "   +-------+          ",
    "   |      +++---+     ",
    "X--+      +-+   X      "
    ].map(e => e.split(""));

//console.log(line(grid));
console.log(line(grid5));

// let grid6= `           
// X---------X
           
//            `.split("\n").map(e=>e.split(""));


// console.log(grid6.flat().join("")===grid.flat().join(""));
// //console.log(grid.flat());

// let s1 = `            
// X+++     
//  +++X `;




