// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


const snail = (arr) => {

    if(arr.length === 0 || arr[0].length === 0) return [];
    

    let N = arr.length;

    let colStart = 0, colEnd = N-1, rowStart = 0, rowEnd = N-1;

    let out = [];


    for (let i = 0; i < N; i++){

        for(let j = colStart; j <= colEnd; j++){
            out.push(arr[colStart][j]);
            
        }

        rowStart++;

        for(let j = rowStart; j <= rowEnd; j++){
            out.push(arr[j][rowEnd]);
         
        }

        colEnd--;

        for(let j = colEnd; j >= colStart; j--){
            out.push(arr[rowEnd][j]);
            
        }

        rowEnd--;

        for(let j = rowEnd; j >= rowStart; j--){
            out.push(arr[j][colStart]);
           
        }

        colStart++;

    }
    return out;

}


const snail2 = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }


  function snail3(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }


  snail4 = function(array) {
    var res = [];
    while(array.length) {
      res = res.concat(array.shift())
      array = expand(array);
    }
    return res;
  }
  
  
  function expand(matrix){
      return matrix.reduce(function(res, arr, i){
          arr.forEach(function(n, j){
              if (!res[j]) res[j] = [];
              res[j][i] = n;
          })
          return res;
      }, []).reverse();
  }


console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));