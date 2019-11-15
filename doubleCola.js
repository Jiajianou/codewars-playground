// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"


function whoIsNext2(names, r){

    let queue = [...names];

    let current;

    for (let i = 0; i < r; i++){

        current = queue[0];
        queue.splice(0, 1);
        queue.push(current);
        queue.push(current);
        
    }

    return current;
  
}

function whoIsNext3(names, r){

    let ppl = names.length;
    let round = 0;
    let n = ppl; 
    let who;
    let carry = 0;

    let duplicates =1;
    
    while( r - (ppl * 2**(round)) >= 0){

        round++;
        n = ppl * 2**round;

    }

    // carry = r <= ppl  ? r : r - ppl * (2**(round-1));
    carry = r <= ppl  ? r : r - n;

    console.log("carry:", carry);
    console.log("round:", round);
    console.log("n:", n);
    console.log("duplicates:", duplicates);
    

    for(let i = 0; i < ppl; i++){
        console.log("i", i);

        if( carry <= duplicates*i+duplicates){

            console.log("gt,lt:",duplicates*i, duplicates*i+duplicates  );
            who = names[i];
            break;
        }
    }


    return who;
  
}


function whoIsNext(names, r){

    let ppl = names.length, round = 0;

    let n = ppl;

    if(r <= ppl) return names[r-1];

    while(n <= r){

        round++;
        n+= ppl*2**round;
    }

    console.log("n:",n);
    console.log("n-r", n-r);
    console.log("round:", round);

    let duplicates = (ppl*2**round)/ppl;
    let carry = (ppl*2**round) - (n- r);
    let who;

    console.log("dup:", duplicates);
    console.log("carry:", carry);

    for(let i = 0; i < ppl; i++){
        console.log("i", i);

        if( carry <= duplicates*i+duplicates){

            console.log("gt,lt:",duplicates*i, duplicates*i+duplicates  );
            who = names[i];
            break;
        }
    }

    return who;
  
}


let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

console.log(whoIsNext(names, 1 ));

console.log("-------------------------");
console.log(whoIsNext(names, 5 ));
console.log("-------------------------");
console.log(whoIsNext(names, 6));
console.log("-------------------------");
console.log(whoIsNext(names, 8 ));
console.log("-------------------------");
console.log(whoIsNext(names, 52 ));



function whoIsNext4(names, r) {
    var l = names.length;
    while (r >= l) { r -= l; l *= 2; }
    return names[Math.ceil(names.length * r / l)-1];
  }


function whoIsNext5(names, r){

    var numOfGeeks = names.length;
    var loga = Math.log((r/numOfGeeks)+1) / Math.log(2);
    var completeCycles = Math.floor(loga)
    var fullCycleColas = (Math.pow(2,completeCycles)-1) * numOfGeeks;
    var currCycleSize  =  Math.pow(2,completeCycles)    * numOfGeeks;
    var geekCode = Math.ceil((r - fullCycleColas)/currCycleSize * numOfGeeks);
    
    return names[geekCode-1]
  }