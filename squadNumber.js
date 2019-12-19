// At the start of each season, every player in a football team is assigned their own unique squad number. Due to superstition or their history certain numbers are more desirable than others.

// Write a function generateNumber() that takes two arguments, an array of the current squad numbers (squad) and the new player's desired number (n). If the new player's desired number is not already taken, return n, else if the desired number can be formed by adding two digits between 1 and 9, return the number formed by joining these two digits together. E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

// Note: Often there will be several different ways to form a replacement number. In these cases the number with lowest first digit should be given priority. E.g. If n = 15, but squad already contains 15, return 69, not 78.



function generateNumber(squad, n){

    if(!squad.includes(n)) return n;

    let options = [];

    for(let i = 1; i < 10; i++){

        for (let j = 1; j < 10; j++){

           if(i+j===n) options.push(parseInt(i + "" + j));
        }
    }

    for(let i = 0; i<options.length; i++){

        if(!squad.includes(options[i])) return options[i];
    }

    return null;
}




console.log(generateNumber([1,2,3,4,6,9,10,11,15,29,69], 11));


//cw's solutions


generateNumber2=f=(a,n,m=n,i=9)=>a.includes(n)?f(a,+`${m-i}${i}`,n,--i):n<100&&n||null