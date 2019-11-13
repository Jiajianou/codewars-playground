// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

// Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

// Return an empty array if N < 1 or N is not int / number

// Examples:

// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

// 1    2    3    
// 8    9    4    
// 7    6    5    
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

// 1   2   3   4   5    
// 16  17  18  19  6    
// 15  24  25  20  7    
// 14  23  22  21  8    
// 13  12  11  10  9



function createSpiral(N) {

    if(N < 1 || typeof N !== "number") return [];

    let spiral = new Array(N).fill(" ").map(() => new Array(N).fill(" "));

    let colStart = 0, colEnd = N-1, rowStart = 0, rowEnd = N-1, counter = 1;



    for (let i = 0; i < N; i++){

        for(let j = colStart; j <= colEnd; j++){
            spiral[rowStart][j] = counter;
            counter++;
        }

        rowStart++;

        for(let j = rowStart; j <= rowEnd; j++){
            spiral[j][colEnd] = counter;
            counter++;
        }

        colEnd--;

        for(let j = colEnd; j >= colStart; j--){
            spiral[rowEnd][j] = counter;
            counter++;
        }

        rowEnd--;

        for(let j = rowEnd; j >= rowStart; j--){
            spiral[j][colStart] = counter;
            counter++;
        }

        colStart++;

    }


    return spiral;

}


console.log(createSpiral(5));