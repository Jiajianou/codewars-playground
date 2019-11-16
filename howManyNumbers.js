// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10.

// their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with three values: [1,2,3]

// 1 - the total number of possible numbers

// 2 - the minimum number

// 3 - the maximum number

// The example given above should be:

// findAll(10, 3) => [8, "118", "334"]
// If we have only one possible number as a solution, it should output a result like the one below:

// findAll(27, 3) => [1, "999", "999"]
// If there are no possible numbers, the function should output the empty array.

// findAll(84, 4) => []
// The number of solutions climbs up when the number of digits increases.

// findAll(35, 6) => [123, '116999', '566666']
// Features of the random tests:

// Number of tests: 112
// Sum of digits value between 20 and 65
// Amount of digits between 2 and 17




const f = (arr1, arr2) => [].concat(...arr1.map(element1 => arr2.map(element2 => [].concat(element1, element2))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);


function findAll2(n, k) {

    if(n === 0 || k === 0) return [];

    let zeroToNine = Array(10).fill("").map(( _, i) => i + "");

    let cartesianList = Array(k).fill(zeroToNine);

    let possibleCombos = cartesian.apply(zeroToNine, cartesianList );

    let out = possibleCombos.filter(e => e.reduce((accum, val) => parseInt(accum) + parseInt(val)) === n).map(e => e.join("")).sort();

    out = out.filter(e => e === e.split("").sort().join("") && e.charAt(0) != "0");

    return out.length === 0 ? [] : [out.length, out[0], out[out.length - 1]];
}


function findAll3(n, k) {

    if(n === 0 || k === 0) return [];

    let zeroToNine = Array(9).fill("").map(( _, i) => i + 1 + "");
  

    let cartesianList = Array(k).fill(zeroToNine);


    let possibleCombos = cartesian.apply(zeroToNine, cartesianList );


    let out = [...new Set(possibleCombos.filter(e => e.reduce((accum, val) => parseInt(accum) + parseInt(val)) === n && e.sort()[0] != "0").map(e => e.sort().join("")))];

    console.log(out);
 
    return out.length === 0 ? [] : [out.length, out[0], out[out.length - 1]];
}


function findAll4(n, k) {

    if(n === 0 || k === 0) return [];

    let zeroToNine = Array(10).fill("").map(( _, i) => i + "");

    let cartesianList = Array(k).fill(zeroToNine);

    const cartesian = xs => ys => xs.flatMap(x => ys.map(y => [x, y]));

    let possibleCombos = cartesian.apply(zeroToNine, cartesianList);

    console.log(possibleCombos);

    // let possibleCombos = cartesian.apply(zeroToNine, cartesianList );

    // let out = [...new Set(possibleCombos.filter(e => e.reduce((accum, val) => parseInt(accum) + parseInt(val)) === n && e.sort()[0] != "0").map(e => e.sort().join("")))];
 
    // return out.length === 0 ? [] : [out.length, out[0], out[out.length - 1]];
}



function findAll(n, k){

    const count = (digits, sum) => {

        if(digits === 0) return sum === 0;
        if(sum === 0) return 1;

        let ans = 0;

        for(let i=0; i < 10; i++){
    
            if(sum-i >= 0) ans += count(digits - 1, sum - i);

        }

        return ans;
    }

    let out = 0;

    for(let i=1; i < 10; i++){
    
        if(n - i >= 0) out += count(k - 1, n - i);

        console.log(out);
        
    }

    return out;
}






//[8, '118', '334']
console.log(findAll3(17, 63));

