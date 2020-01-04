// Task
// A noob programmer was given two simple tasks: sum and sort the elements of the given array arr = [a1, a2, ..., an].

// He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array arr, and it's giving him trouble since he modified it.

// Given the array shuffled, consisting of elements a1, a2, ..., an, and their sumvalue in random order, return the sorted array of original elements a1, a2, ..., an.

// Example
// For shuffled = [1, 12, 3, 6, 2], the output should be [1, 2, 3, 6].

// 1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

// For shuffled = [1, -3, -5, 7, 2], the output should be [-5, -3, 2, 7].

// Input/Output
// [input] integer array shuffled

// Array of at least two integers. It is guaranteed that there is an index i such that shuffled[i] = shuffled[0] + ... + shuffled[i - 1] + shuffled[i + 1] + ... + shuffled[n].

// Constraints:

// 2 ≤ shuffled.length ≤ 30,

// -300 ≤ shuffled[i] ≤ 300.

// [output] an integer array

// A sorted array of shuffled.length - 1 elements.


const shuffledArray2 = arr => arr.filter(e => e !== (arr.reduce((acc,val) => acc + val,0)-e)).sort((a,b) => a-b);

const shuffledArray = arr => {

    if(arr.length === 2) return [arr[0]];


    for (let i = 0; i < arr.length; i++){

        if(arr[i] ===  (arr.reduce((acc,val) => acc + val,0)-e)){

            arr.splice(i,1);
            break;
        }

    }

    return arr.sort((a,b) => a-b);


}


console.log(shuffledArray([1, 12, 3, 6, 2]));