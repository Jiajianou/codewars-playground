// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(input){
    //TODO Have fun :)

    let spinnedArray = input.split(" ").map(word => {

        let newWord = "";
        
        if (word.length >= 5){

            for(let i = word.length - 1; i >= 0; i--){

                newWord += word[i];

            }
            
        } else {

            newWord = word;
        }

        return newWord;

    });

    return spinnedArray;
    
  }


function spinWords2(input){

    return input.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ");

}




let test = "Hey fellow warriors";

let test1 = "hey";


console.log(spinWords(test));

console.log(spinWords2(test));