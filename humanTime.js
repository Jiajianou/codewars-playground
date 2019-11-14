// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.




function formatDuration (seconds) {

    if(seconds === 0) return "now";

    let timeObj = [{name:"year",value:0}, {name:"day",value:0}, {name:"hour",value:0}, {name:"minute",value:0}, {name:"second",value:0}];

    while(seconds >= 60){

        if(seconds >= 31536000){
            timeObj[0].value++;
            seconds -= 31536000;  
        } else if (seconds >= 86400){
            timeObj[1].value++;
            seconds -= 86400;
        } else if(seconds >= 3600){
            timeObj[2].value++;
            seconds -= 3600;
        } else if(seconds >= 60){
            timeObj[3].value++;
            seconds -= 60;       
        }
    }

    timeObj[4].value = seconds;

    const format = (value, name) => value === 0 ? null : value === 1 ? "1 " + name : value + " " + name + "s"; 

    let output = [];

    timeObj.forEach(obj=> obj.value != 0 ? output.push(format(obj.value, obj.name)): null);
    
    if(output.length === 1){
        return output.join("");
    }

    if(output.length >= 2){

        let outString = "";
        
        for(let i = 0; i < output.length; i++){

            if(i === output.length - 1){

                outString += " and " + output[i];

            } else {

                if(i === 0){
                    outString += output[i];
                } else {
                    outString += ", " + output[i];
                }
            }
                    
        }

        return outString;
    }   
}


let test = 36620000;
let test2 = 3662;


console.log(formatDuration(test));
console.log(formatDuration(test2));