// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"


function solution(input, markers) {

    const lines = input.split("\n");

    lines.forEach((line, index) => {

        line.split("").forEach((char,i) => {

            if(markers.includes(char)){
                lines[index] = line.slice(0, line.indexOf(char)).trim();
            }
        });
       
    });

    return lines.join("\n");
  
}



function solution2(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
  }

  function solution3(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }

  function solution4(input, markers){
    return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
  }



console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));

