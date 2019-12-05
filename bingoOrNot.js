// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.



const bingo = a => {
    
    let bingo = [2,7,9,14,15];

    a.forEach((e,i) => {
    
        bingo = bingo.filter(item => e !== item);

    });

    return bingo.length === 0 ? "WIN" : "LOSE";
}





console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

//community's solutions:


const bingo2 = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';


function bingo3(a) {
    return a.map(e=>(e + 9).toString(36).toUpperCase()).join("").match(/(?=.*B)(?=.*I)(?=.*N)(?=.*G)(?=.*O).+/)?"WIN":"LOSE";
  }


  function bingo4(a) {
    // your winning code here
    a.sort((a, b) =>  a > b);
    return /2\d*7\d*9\d*14\d*15/g.test(a.join("")) ? "WIN" : "LOSE";
  }