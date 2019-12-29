// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'



function addLetters(...letters) {

    if([...letters].length === 0) return 'z';

    let sum = 0;

    letters.forEach(e => {

        sum += e.charCodeAt(0)-96;
        
    });
 
    return String.fromCharCode(sum % 26 === 0 ? 122 : sum % 26 + 96);

}



console.log(addLetters('s', 'g' ));



//cw's solutions:

function addLetters2(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}