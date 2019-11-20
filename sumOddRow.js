// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8



const rowSumOddNumbers = n => {

    let terms = Array(n).fill(0).map((_,i) => i+1).reduce((acc,val) => acc + val, 0);
    return Array(terms).fill(1).map((_,i) => (i)*2 + 1 ).filter((_, i) => i>= terms - n ).reduce((acc, val) => acc + val, 0);

}

console.log(rowSumOddNumbers(4));


function rowSumOddNumbers2(n) {
    return Math.pow(n, 3);
  }