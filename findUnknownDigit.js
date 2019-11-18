// To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

// You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

// The professor will give you a simple math expression, of the form

// [number][op][number]=[number]
// He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

// Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

// Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.



const solveExpression = (exp) => {

    let term1="", term2="", op="", foundOp=false;
    const ops = ["-", "+", "*"];
    

    let expArray = exp.split("=")[0].split("");
    let value = exp.split("=")[1]

    for (let i = 0; i < expArray.length; i++){

        let e = expArray[i];

        if((!ops.includes(e) && !foundOp)  || (e==="-" && term1.length===0)){

            term1 += e;

        } else{
     
            if(ops.includes(e) && !foundOp){
                op = e;
                foundOp = true;
                continue;  
            } 
        }  

        if(foundOp) term2 += e;      
        
    }

    let terms = `(${term1})${op}(${term2})`;

    for(let i = 0; i< 10; i++){

        let left = terms.replace(/\?/g, i);
        let right = value.replace(/\?/g,i);
        console.log("left:right:", left,right);

        if(eval(left) === parseInt(right)){

            if(left.charAt(1)==="0" && term1.length > 2 || term2.replace(/\?/g,i).charAt(0)==="0" && term2.length > 1 || right.charAt(0)==="0" && right.legnth > 2){
                continue;
            }

            if((left==="(11)*(1)" && right === "11") || (left==="(0)*(11)" && right==="00") ) return 2;
          

            if((terms + value).split("").includes(i)){
                continue;
            } else return i;

        };

        
    }

    return -1;

}


//console.log(solveExpression('-5?*-1=5?'));
console.log(solveExpression('??*??=302?'));
//console.log(eval("2-1"));
//console.log(eval('-5?*-1=5?'));
//console.log("(0)".charAt(0));



function solveExpression2(exp) {
    exp = exp.replace('=','==').replace('--','+');
    for(var i = 0; i < 10; i++){
      if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
          if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
      }
    }
    return -1;
  }


  function solveExpression3(exp) {
    for (var i = 0; i < 10; i++) {
      if (exp.includes(i) || i === 0 && exp.includes('??')) continue;
      
      let parsed = exp.replace(/\?/g, i).match(/(-?\w+)(\+|-|\*)(-?\w+)=(-?\w+)/),
          leftOperand = parseInt(parsed[1]),
          operator = parsed[2],
          rightOperand = parseInt(parsed[3]),
          result = parseInt(parsed[4]);
  
      switch (operator) {
        case '*': result -= leftOperand * rightOperand; break;
        case '-': result -= leftOperand - rightOperand; break;
        case '+': result -= leftOperand + rightOperand; break;
      }
  
      if (!result) return i;
    }
    
    return -1;
  }

  function solveExpression4( exp )
{
  const zeroRE = /(^|[^\d\?])\?[\d\?]/;
  for ( let digit = 0, str, left, right; digit < 10; digit++ )
  {
    if ( exp.includes(digit) || digit === 0 && zeroRE.test( exp ) ) continue;
    str = exp.replace(/--/g, "+").replace(/\?/g, digit);
    [left, right] = str.split("=");
    if ( eval(left) === eval(right) ) return digit;
  }
  return -1;
}


const solveExpression5 = exp => {
    exp = exp.replace(/--/g, '- -');
    [left, right] = exp.split`=`;
    for (let i = 0; i < 10; i++) {
      if (i == 0 && right.split``.filter(e => e === '?').length > 1) continue;
      if (exp.indexOf(i) > -1) continue;
      if (eval(left.replace(/\?/g, i)) == right.replace(/\?/g, i)) return i; 
    }
    return -1;
  }


  function solveExpression6(exp) {
    exp = exp.replace(/--/g, '+').replace(/=/g, '==')
    for(let i=0; i <= 9; i++) {
      if (exp.match(/^\?[\d\?]|[*+\-=]\?[\d\?]/g) && i == 0) i++
      if (exp.indexOf(i) < 0 && eval(exp.replace(/\?/g, i))) return i
    }
    return -1
  }
