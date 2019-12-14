// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.




function switcher2(x){

    return x.map(e => e==27 ? "!" : e==28 ? "?" : e==29 ? " " : String.fromCharCode(97 + (26-e))).join("");
}


const switcher = x => x.map(e => e==27 ? "!" : e==28 ? "?" : e==29 ? " " : String.fromCharCode(97 + (26-e))).join("");


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log(switcher([11,27,17,14,19,24,10,10,4,24,28]));



const switcher3=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")


switcher4=x=>x.map(i=>'_zyxwvutsrqponmlkjihgfedcba!? '[i]).join``