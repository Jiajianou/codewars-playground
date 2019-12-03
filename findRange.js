// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org


function solution(list){

    let output = "";
    let interval = [];
    list.push(list[list.length-1]);


    for(let i = 0; i < list.length-1; i++){

        if(list[i+1] === list[i]+1){

            interval.push(list[i]);
            continue;

        } else {

            if(interval.length>0){
                interval.push(list[i]);

                if(interval.length===2){

                    output+=`,${interval[0]},${interval[1]}`;
                    interval=[];
                    continue;


                }else{

                    output+=`,${interval[0]}-${interval[interval.length-1]}`;
                    interval=[];
                    continue;

                }

            }

            output+=`,${list[i]}`;
        }
    }

    return output.replace(/(^,)|(,$)/g, "");
    
}



let test1 = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];

let test2 = [ -71,
    -68,
    -67,
    -64,
    -63,
    -61,
    -60,
    -57,
    -54,
    -52,
    -50,
    -49,
    -47,
    -46,
    -45,
    -44,
    -41,
    -39,
    -38 ];



console.log(solution(test2));




//community's top solutions:

function solution2(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }



 function solution3(list){
    var s = '';
    var l = list.length;
    for(var i=0; i<l; i++){
      if(list[i] == list[i+2]-2) {
        s += list[i] + '-';
        for(i; i<l; i++){
          if(list[i] != list[i+2]-2) break;
        }
      } else {
        s += list[i];
        if(i != l-1) s += ',';
      }
    }
    return s;
  }


  function solution4(list) {
    for (var a = [], i = 0; i < list.length;) {
      for (var j = 1; i + j < list.length && list[i+j] == list[i] + j; j++);
      if (j >= 3) { a.push( `${list[i]}-${list[i+j-1]}` ); i += j; } 
      else a.push(list[i++]);
    }
    return a.join(',');
  }



  function solution5(nums){
    nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
       return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
   }