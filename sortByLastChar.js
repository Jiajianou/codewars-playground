// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.





const last = x => {

    return x.split(" ").sort((a,b) => a.charCodeAt(a.length -1) > b.charCodeAt(b.length -1) ?  1 : a.charCodeAt(a.length -1) === b.charCodeAt(b.length -1)? 0 : -1);
}


console.log(last('man i need a taxi up to ubud'));



//cw's solutions

function last2(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }


  function last3 (words) {
    return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }


  const last4 = words => words.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1))