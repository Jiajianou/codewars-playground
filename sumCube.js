// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:

// sumCubes(2) // 9
// // sum of the cubes of 1 and 2 is 1 + 8



const sumCubes = n => Array(n).fill(1).map((_,i)=> Math.pow((i+1),3)).reduce((acc,val)=>acc+val);

sumCubes2=n=>n<2?1:n**3+sumCubes(n-1)

function sumCubes3(n) {
    return (n * (n + 1) / 2) ** 2;
  }

  const sumCubes4 = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);



console.log(sumCubes(2));