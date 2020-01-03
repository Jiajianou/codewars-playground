// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


function wordsToMarks2(string){





    return "a".charCodeAt(0);


    
}


const wordsToMarks = s => s.split("").reduce((acc,val) => acc + val.charCodeAt(0)-96 ,0);






console.log(wordsToMarks("attitude"));



//cw's 

const wordsToMarks3 = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)