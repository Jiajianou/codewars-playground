// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){

    console.log(n);

    if(n<10) return -1;

    n = n.toString();

    const swap = (index1,index2,str) => {
        let strArray = str.split("");
        let temp = strArray[index2];
        strArray[index2] = strArray[index1];
        strArray[index1] = temp;
        return strArray.join("");
    }

    let last = parseInt(n.charAt(n.length - 1));
  
    let i = n.length-1;

    while(i >= 0){
        
        if(last <= parseInt(n.charAt(i))){

            last = parseInt(n.charAt(i));
            i--;

        } else {

            return parseInt(swap(n.indexOf(last.toString()),i,n));

        }

    }


    return -1;

}







//the solution above does not work properly.
//console.log(permutations("513"));

console.log(nextBigger(513));


//top solutions: 



function nextBigger2(n){
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num;
  }
//-------

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger3(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}

//-----------


function nextBigger4(n) {
    if (n === reverseSortDigits(n)) return -1
  
    let nSorted = sortDigits(n)
    
    while (true) {
      n += 1
      if (sortDigits(n) === nSorted) return n
    }
  }
  
  function splitDigits(d) {
    return String(d).split('')
  }
  
  function sortDigits(d) {
    return Number(splitDigits(d).sort().join(''))
  }
  
  function reverseSortDigits(d) {
    return Number(splitDigits(d).sort().reverse().join(''))
  }


  //--------


  function nextBigger5(n){
    var arr = n.toString().split("").reverse();
    var i = arr.findIndex((d, _i) => d < arr[_i-1]);
    if (i === -1) { return -1; }
    var subarr = arr.slice(0, i);
    var j = subarr.findIndex((d) => d > arr[i]);
    subarr.splice(j, 1, arr[i]);
    return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
  }


  //-------
  function nextBigger(n){
    let a = +String(n).split('').sort((a,b) => b-a).join('');
    
   for (let i = n + 1; i <= a; i++) {
     if (a == +String(i).split('').sort((a,b) => b-a).join('')) return i
   }
   return -1
 }