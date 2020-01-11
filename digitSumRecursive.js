// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2


function digital_root2(n) {

    if(n.toString().length === 1) return n;

    return digital_root(n.toString().split("").reduce((acc,val) => acc + parseInt(val) ,0));
   
}

const digital_root = n => (n + "").length === 1 ? n : digital_root((n + "").split("").reduce((acc,val) => acc + parseInt(val) ,0));







console.log(digital_root(456));



//cw's 

function digital_root3(n) {
    return (n - 1) % 9 + 1;
  }

  function digital_root4(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  }



  function digital_root5(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}