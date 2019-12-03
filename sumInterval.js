// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19


function sumIntervals(intervals){

    let sorted = intervals.sort((a,b) => a[0] - b[0]);

    let unique = [sorted.shift()];

    const hasOverlap = (a, b) => {
        if((b[0] > a[0]) && (b[0]) > a[1]) return false;
        return true;
    };

    const combine = (a, b) => b[1]>a[1] ? [a[0], b[1]] : [a[0], a[1]];

    let i = 0;

    while(sorted.length>0){

        let head = sorted.shift();

        if(hasOverlap(unique[i], head)){
            unique[i] = combine(unique[i],head);
        } else{
            unique.push(head);
            i++;
        }

    }

    return unique.reduce((acc,val) => acc + (val[1]-val[0]),0);
  
}

var test = [[1,4],[7, 10],[3, 5]];

let test2 = [ [ -388, 477 ],
[ 217, 468 ],
[ -125, -50 ],
[ -182, 477 ],
[ -242, 81 ],
[ 101, 229 ],
[ 448, 461 ],
[ 200, 228 ],
[ -277, 51 ],
[ 407, 466 ],
[ -34, 365 ],
[ 113, 365 ],
[ 238, 297 ],
[ -206, -202 ] ];

let test3 = [ [ 2, 9 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ];

console.log(sumIntervals(test3));



//community's top solutions:


function sumIntervals2(intervals){
    var numbers = [];
    intervals.forEach( function(interval) {
      for (var i = interval[0] ; i < interval[1] ; i++) {
        if (numbers.indexOf(i) == -1) numbers.push(i);
      }
    });
    return numbers.length;
  }


  function sumIntervals3(intervals){
    return intervals
      .sort(function(a, b){
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      })
      .reduce(function(acc, interval) {
        if (interval[1] > acc.top) {
          acc.total += interval[1] - Math.max(interval[0], acc.top);
        }
        acc.top = Math.max(interval[1], acc.top);
        return acc;
      }, {total: 0, top: 0})
      .total;
  }


  function sumIntervals4(intervals){
    var numbers = {};
    intervals.forEach(function(x) {
      for (var i = x[0]; i < x[1]; i++) {
        numbers[i] = i;
      }
    });
    return Object.keys(numbers).length;
  }


  const sumIntervals5 = intervals => (
    new Set(intervals.reduce((arr, [start, end]) =>
      [...[...Array(end - start)].map((_, i) => i + start), ...arr], [])).size
  );