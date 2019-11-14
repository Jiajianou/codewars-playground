// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]




const moveZeros = (arr) => {

    const movedArray =[];
    let counter = 0;

    arr.forEach(element => {

        if(element !== 0){

            movedArray.push(element);

        } else counter++;

    });

    for(let i=0; i<counter; i++){
        movedArray.push(0);
    }

    return movedArray;

}


let test = [false,1,0,1,2,0,1,3,"a"];

console.log(moveZeros(test));