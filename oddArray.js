// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.



function findOdd(A) {
  
    let indexes = [];
    let oddInt = null;

    A.map((num, ind) => {

        indexes[ind] = 0;
        
        A.map(n => n === num ? indexes[ind]++ : null)

        if(indexes[ind] % 2 != 0) oddInt = ind;

    });

    return A[oddInt];

}



let test = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

console.log(test.length);

console.log(findOdd(test));

console.log(4/2 != 0);



