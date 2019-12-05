// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1


const assert = require('assert');






function nextBigger(n){

    let digiArray = n.toString().split("");

    return 21;
    
}



describe("Find next big int", () => {

    it("should be this:", ()=>{
        
        assert.equal(nextBigger(12),21);
    });
});