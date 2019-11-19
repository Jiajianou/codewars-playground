// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'


const geometricSequenceElements = (a, r, n) => Array(n).fill(a).map((e,i) => e*r**i).join(", ");

function geometricSequenceElements2(a, r, n){
    return [...Array(n)].map((_,i)=>a*r**i).join(', ')
  }

  let geometricSequenceElements3 = (a, r, n) => n === 1 ? '' + a : `${geometricSequenceElements(a, r, n - 1)}, ${a * Math.pow(r, n - 1)}`;



console.log(geometricSequenceElements(1, -2, 10));