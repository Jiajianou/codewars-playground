// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings2(s1,s2) { 

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

        console.log(sum, digitSum, carry, temp);

    }

    return sum; 

}


function sumStrings(a,b){

    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');

    console.log(a,b);

    let sum="", aLen=a.length, bLen=b.length, temp,  digitSum, carry=0, bitA, bitB;

    if(bLen > aLen){
        temp = b;
        b = a;
        a = temp;
    }

  
    for(let i = 0; i < a.length; i++){

        bitA = parseInt(a.charAt(a.length - 1 - i));
        bitB = parseInt(b.charAt(b.length - 1 - i));
        bitB = (bitB) ? bitB : 0;

        temp = (carry + bitA + bitB).toString();
        digitSum = temp.charAt(temp.length - 1);

        carry = parseInt(temp.substr(0, temp.length - 1));
        carry = (carry) ? carry : 0;

        sum = (i === a.length - 1) ? temp + sum : digitSum + sum;

    }

    return sum;
}



console.log(sumStrings('1','100'));
console.log(sumStrings('00103', '08567'));




String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  }
  
  function sumStrings3(a,b) {
    a = a.reverse(); b = b.reverse();
    var carry = 0;
    var index = 0;
    var sumDigits = [];
    while (index < a.length || index < b.length || carry != 0) {
      var aDigit = index < a.length ? parseInt(a[index]) : 0;
      var bDigit = index < b.length ? parseInt(b[index]) : 0;
      var digitSum = aDigit + bDigit + carry;
      sumDigits.push((digitSum % 10).toString());
      carry = Math.floor(digitSum / 10);
      index++;
    }
    sumDigits.reverse();
    while (sumDigits[0] == '0') sumDigits.shift();
    return sumDigits.join('');
  }


  function sumStrings4(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c > 9;
    }
    return res.replace(/^0+/, '');
  }


  function sumStrings5(a, b)
{
    var A = a.split(""), B = b.split(""), C = 0, R = "";

    while (A.length || B.length || C)
    {
        C = C + (~~A.pop() + ~~B.pop());
        R = (C % 10) + R;
        C = C > 9;
    }

    return R.replace(/^0+/, "");
}