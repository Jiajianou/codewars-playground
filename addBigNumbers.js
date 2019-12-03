// We need to sum big numbers and we require your help.

// Write x function that returns the sum of two numbers. The input numbers are strings and the function must return x string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is x string of only digits
// The numbers are positives



function add(a,b) { 

    let sum = "";  
  
    let s1Len = a.length;
    let s2Len = b.length;

   
    if(s2Len > s1Len ){
        let temp = b;
        b = a;
        a = temp;
    }

    let carry = 0;  
    let x, y, temp, digitSum;

    for (let i = 0; i < a.length; i++) {
        x = parseInt(a.charAt(a.length - 1 - i));      
        y = parseInt(b.charAt(b.length - 1 - i));      
        y = (y) ? y : 0;                                    
        temp = (carry + x + y).toString();                  
        digitSum = temp.charAt(temp.length - 1);            
        carry = parseInt(temp.substr(0, temp.length - 1));  
        carry = (carry) ? carry : 0;                        

        sum = (i === a.length - 1) ? temp + sum : digitSum + sum;  
    }

    return sum; 

}



//community's solutions:



function add2(a, b) {
    var carry = 0, result = [],
        len = Math.max(a.length, b.length), i = len;
    while (i--) {
      var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
      carry = parseInt(sum / 10);
      result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    return result.join('');
  }



  function head(s) {
    return s.slice(-15)
  }
  
  function tail(s) {
    return s.slice(0, -15)
  }
  
  function add3(a, b, c) {
    if (!a && !b) {
      return c || ''
    }
    
    const ah = head(a)
    const bh = head(b)
    
    const l = Math.max(ah.length, bh.length)
    
    const s = String(Number(ah) + Number(bh) + (c || 0))
    const sc = Number(s.length > l)
    
    return add(tail(a), tail(b), sc) + s.slice(sc)
  }



  function add4(a, b) {
    const len = a.length > b.length ? a.length : b.length
    let result = ""
    let up = 0
    
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')
    
    for (var i = len - 1; i >= 0; i--) {
      const sum = Number(a[i]) + Number(b[i]) + up
      up = Math.floor(sum / 10)
      dividend = sum % 10
      result = dividend + result
    }
    
    return up ? up + result : result
  }