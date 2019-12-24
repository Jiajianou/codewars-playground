// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



const squareDigits = num => parseInt(num.toString().split("").reduce((acc,val) => acc + parseInt(val)**2, ""));




console.log(squareDigits(9119));


//cw's solutions:


function squareDigits2(num){
    //may the code be with you
    return +(num + "").replace(/\d/g, matched => matched * matched)
  }



  function squareDigits3(num){
    return +num.toString().split('').map(v=>[0,1,4,9,16,25,36,49,64,81][v]).join('');
  }