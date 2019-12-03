// Overview
// You need to help Bob be a good businessman and not charge people too much for his signs.
// Description
// Bob is running a business that creates signs for people. He can charge much less than his competitors because he charges by letter instead by the entire sign. He can take a sign and change a few letters to make a new sign much more cheaply than a competitor can make a sign from scratch.
// The only problem is Bob is not very good at pricing these changes. He wants to be able to look at a sign and a customer's request and quickly be able to give the customer an estimate for the total cost.
// Task
// Write a class SignMaster that is able to help Bob estimate prices quickly. Bob will need to be able to changePrices(prices) so that he can adapt to the changing market. He also needs to estimatePrice(oldSign, newSign) so that he can give his price estimates to his customers.
// The changePrices method takes an object that specifies the new prices. The values are the cost of doing an operation (add or remove) and the keys will be add or rem depending on the operation. Bob does not always want to change the price for both adding and removing letters, so this method should handle incomplete input. Before this method is called, the sign changes should be free.
// estimatePrice takes two strings. The first string is the old sign of the customer and the second is their request. This method should return the cost of changing the sign from the old message to the new message. If there are multiple ways to change the sign, this method should return the cheapest way.



class SignMaster {


    constructor(prices) {
        this.prices = prices || {'add': 0, 'rem': 0};
    }

    changePrices(prices) {

        this.prices = prices;
    }

    countChars(sign){

        let charCount = {}
        Array.from(new Set(sign.split(""))).forEach(c => {

            charCount[c] = 0;

            sign.split("").forEach(e => {             
                if(c===e){
                    charCount[c]++;
                }
            });
        });  
        
        return charCount;
    }

    estimatePrice(oldSign, newSign) {

        let oldCharCount = this.countChars(oldSign);
        let newCharCount = this.countChars(newSign);

        let removed = 0;
        let added = 0;

        //console.log("old", oldCharCount);
        //console.log("new", newCharCount);

        for (let key in newCharCount) {

            if (newCharCount.hasOwnProperty(key)) {

                if(oldCharCount.hasOwnProperty(key)){

                    //console.log("key:", key, "new:", newCharCount[key], "old:", oldCharCount[key]);

                    if((newCharCount[key] - oldCharCount[key]) >= 0){

                        added += newCharCount[key] - oldCharCount[key];

                    } else {

                        removed += oldCharCount[key] - newCharCount[key];
                    }

                }else{
                    
                    //console.log("added");

                    added += newCharCount[key];
                }
                
            } else {

                if(oldCharCount.hasOwnProperty(key)){

                    //remov
                    console.log("removed");
                    removed += oldCharCount[key];
                }
            }
        }

        return (removed * this.prices.rem + added * this.prices.add);
    }
}


let from = "2a2wmexpfyd92iy3c8frfy1wnrq74r93xbc5wmigbepwaqucgzhw8qia4iibkpoeq3wg6hynl8fr";

let to = "2vqv1kjt0859woskyb9v00rxjhhymratlf2yb93ugfg0sytwx8dad78pviqo8acsad655d9cw61or";

let sign = new SignMaster({ add: 29, rem: 3 });

console.log(sign.prices);
console.log(sign.estimatePrice(from,to));

//expect 1821