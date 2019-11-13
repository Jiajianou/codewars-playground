// Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

// You will just get much bigger numbers, so good luck bruteforcing your way through it ;)
function add(s1,s2){

    let sum = "";  
  
    let s1Len = s1.length;
    let s2Len = s2.length;

   
    if(s2Len > s1Len ){
        let temp = s2;
        s2 = s1;
        s1 = temp;
    }

    let carry = 0;  
    let a, b, temp, digitSum;

    for (let i = 0; i < s1.length; i++) {
        a = parseInt(s1.charAt(s1.length - 1 - i));      
        b = parseInt(s2.charAt(s2.length - 1 - i));      
        b = (b) ? b : 0;                                    
        temp = (carry + a + b).toString();                  
        digitSum = temp.charAt(temp.length - 1);            
        carry = parseInt(temp.substr(0, temp.length - 1));  
        carry = (carry) ? carry : 0;                        

        sum = (i === s1.length - 1) ? temp + sum : digitSum + sum;  

    }

    return sum; 

}


function lastFibDigit(n){

    let current = 1, prev = 1, temp=0;
    
    while (n > 2){

        temp = current;
        current = add(current.toString(), prev.toString());
        prev = temp;
        n--;
    }

    return parseInt(current.toString().slice(-1));
   

}



function lastFibDigit2(n){

    let num = 60;

    let lastDigitArray = [1,1];

    let current = 1, prev = 1, temp=0;
    
    while (num > 2){

        temp = current;
        current = current + prev;
        prev = temp;

        lastDigitArray.push(parseInt(current.toString().slice(-1)));

        num--;
    }

    return lastDigitArray[n%60-1];

}



function lastFibDigit3(n){

    let lastDigitArray = [1,1];
    let current = 1, prev = 1, temp=0;

    for (let i = 2; i < 60; i++){

        temp = current;
        current = current + prev;
        prev = temp;
        lastDigitArray.push(parseInt(current.toString().slice(-1)));
    }

    return lastDigitArray[n%60 === 0 ? 59 : n%60-1];
}

//21:6
//302:1
//4003:7

console.log(lastFibDigit3(21));


