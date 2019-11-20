// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });



const isPP = n => {

    

    for (let i = 2; i < 10; i ++){ 

        for(let j = 2; j < 10; j++){

            if(i**j === n || j**i===n) return [i,j];

        }
    }

    return null;
}

console.log(Math.sqrt(92389579776));
console.log(isPP(9));
console.log(isPP(5));



function isPP2(n) {
    for (var m = 2; m * m <= n; ++ m)
      for (var k = 2; Math.pow(m, k) <= n; ++ k)
        if (Math.pow(m, k) == n) return [m, k];
    return null;
  }


  var isPP3 = function(n){
    for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
      var k = Math.round(Math.log(n) / Math.log(m))
      if (Math.pow(m, k) == n) return [m, k];
    }
    return null;
  }

  var isPP4 = function(n){
    var res=null, x=1, p;
    while( x++<n && !res ){
      p = Math.round(Math.pow(n,1/x));
      if( Math.pow(p,x)==n ) res = [p,x]
    }
    return res
  }