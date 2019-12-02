// The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:

// Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.

// The angel then vanishes in an explosion of white light.

// Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.

// He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.

// He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.

// Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.

// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.

// Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

// HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4



const fib5 = n => {

    const phi = (Math.sqrt(5) + 1) / 2;

    return BigInt(Math.floor((phi**n - (((-1)**n)/(phi**n))) / Math.sqrt(5)));
}

const fib = n => {

    const phi = (Math.sqrt(5) + 1) / 2;

    let f = ((phi**n) - Math.cos(n*Math.PI)*(phi**(-n)))/Math.sqrt(5);

    return BigInt(Math.floor(f));
}



const fib3 = n => {

    let keyN = [0,1];

    const findFibPos = (N=n) => {

        let result = keyN[N];

        if(typeof result !== 'number'){

            result =  BigInt(findFibPos(N-1)) + BigInt(findFibPos(N-2));
            keyN[N] = result;
        }

        return BigInt(result);
    }

    const findFibNeg = (N=n) => {

        N = Math.abs(N);

        let result = keyN[N];

        if(typeof result !== 'number'){

            result =  BigInt(findFibPos(N+1)) - BigInt(findFibPos(N+2));
            keyN[N] = result;
        }

        return BigInt(result);

    }

    return  n >= 0 ? findFibPos(n) : findFibNeg(n);
}



const fib4 = n => {

   let a = BigInt(0);
   let b = BigInt(1);

   for(let i = 31; i >=0; i--){

        let d = a * (b * BigInt(2) - a);
        let e = a * a + b * b;

        a=d;
        b=e;

        if(((n>>i)&1) !== 0){

            let c = BigInt(a+b);
            a=b;
            b=c;
        }
   }

   return a;

}




console.log(fib(1000));



//community's solution:

const memo = fn => ( cache => n => n in cache ? cache[n] : cache[n] = fn(n) ) ( [0n,1n] ) ;
const even = n => ! (n&1) ;
const F = memo( n =>
  n%3===0 ? ( n => 5n * F(n)**3n + 3n * ( even(n) ? 1n : -1n ) * F(n) ) ( n/3 ) :
  n%3===1 ? ( n => F(n+1)**3n + 3n * F(n+1) * F(n)**2n - F(n)**3n ) ( (n-1)/3 ) :
            ( n => F(n+1)**3n + 3n * F(n+1)**2n * F(n) + F(n)**3n ) ( (n-2)/3 )
);
const fib6 = n => n>=0 ? F(n) : even(n) ? -F(-n) : F(-n) ;



function fib7(n) {
    return BigInt(n > 0 ? 1 : Math.pow(-1, Math.abs(n) % 2 + 1)) * _fib(Math.abs(n))[0]
  }
  
  // Using fast doubling identities
  // f(2n) = f(n)[2f(n+1) - f(N)]
  // f(2n+1) = f(n+1)^2 + f(n)^2
  function _fib(n) {
    if (n === 0) return [0n, 1n]
    else {
      // recurse for i + 2 levels, where 2^i <= n
      // the last 2 levels are for n = [0, 1]
      const [fn, fn1] = _fib(Math.floor(n / 2))
      const f2n = fn * (2n * fn1 - fn)
      const f2n1 = fn1 ** 2n + fn ** 2n
      return n % 2 === 0 ? [f2n, f2n1] : [f2n1, f2n + f2n1]
    }
  }


  const fib8 = n => n < 0 && n % 2 === 0? -_fib(n)[0] : _fib(n)[0]

const _fib = n => {
  if (n === 0) return [0n, 1n]
  
  const [a, b] = _fib(~~(n / 2))
  const c = BigInt(a * (b * 2n - a))
  const d = BigInt(a * a + b * b)
  if (n % 2 === 0) return [c, d]
  return [d, c + d]
}