// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.



function divCon(x){

    let intSum = x.reduce((acc,val) => Number.isInteger(val) ? acc + val : acc + 0, 0); 
    let strSum = x.reduce((acc,val) => !Number.isInteger(val) ? acc + parseInt(val) : acc + 0, 0);

    return intSum - strSum;
}



console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));



//cw's solutions:


const divCon2=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0);

function divCon3(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }


  console.log(+"5");