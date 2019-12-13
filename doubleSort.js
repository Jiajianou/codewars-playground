// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.


function dbSort(arr){

    const intArr = arr.filter(e => Number.isInteger(e));
    const strArr = arr.filter(e => !Number.isInteger(e));

    return intArr.sort((a,b) => a - b).concat(strArr.sort());
}







console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));

console.log(dbSort([1, 2, 3, 8, 11, 12, 12, 12, 12, 12, 18, 72, 82, 115, 667]));