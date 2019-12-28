// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


const findShort = s => s.split(" ").map(e => e.length).sort((a,b) => a-b)[0];


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//cw's solution


const findShort2 = s => Math.min(...s.split(' ').map(x => x.length));