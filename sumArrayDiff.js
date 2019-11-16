// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).


function sumOfDifferences(arr) {

    if (arr.length === 0 || arr.length === 1) return 0;
    

    let sorted = arr.sort((a, b) => b - a);

    let counter = 0;

    let out = [];

    while(typeof sorted[counter+1] != "undefined"){

        out.push(sorted[counter] - sorted[counter+1]);

        counter++;

    }

    return out.reduce((acc,val) => acc + val);
}


console.log(sumOfDifferences([1, 2, 10]));



function sumOfDifferences2(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences3 = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);