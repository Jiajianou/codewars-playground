// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.



function shiftLeft(s, t){

    let counter = 0;

    while (s.length > 0 || t.length > 0){

        if(s.substring(1) === t){

            counter++;
        }

        //unfinished



    }


    return counter;

   


    
}

console.log(shiftLeft("test", "west"));

console.log(shiftLeft("test", "yes"));