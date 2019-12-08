// You are a skier (marked below by the 'X'). You have made it to the Olympics! Well done.

// \_\_\_X\_
// \*\*\*\*\*\
// \*\*\*\*\*\*\
// \*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\*\\.\_\_\_\_/
// Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a value of 5 (5 rows of stars). Speed is mountain height * 1.5.

// The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be to two dp.

// You must return the length of the resulting jump as a string in the following format:

// Jump < 10 = 'X metres: He's crap!'
// Jump > 10 && < 25 = 'X metres: He's ok!'
// Jump > 10 && < 50 = 'X metres: He's flying!'
// Jump > 50 = 'X metres: Gold!!'

// In this case the right answer would be '33.75 metres: He's flying!'

// Sadly it takes a lot of time to make arrays look like mountains, so the tests wont all look so nice. To give an example, the above mountain would look as follows in most cases:

// [*****, ******, *******, ********, *********]


function skiJump(mountain){

    const jump = ((mountain.length * (mountain.length * 1.5) * 9)/10).toFixed(2);

    const between = (min,max) => min < jump && jump <= max;

    return between(0,10) ? `${jump} metres: He's crap!`: between(10,25) ? `${jump} metres: He's ok!` : between(25,50) ? `${jump} metres: He's flying!` : `${jump} metres: Gold!!`;

}   


console.log(skiJump(['*', '**', '***']));




//cw solutions:

function skiJump2(mountain){
    const height=mountain.length;
    const speed=height*1.5;
    const length=((height*speed*9)/10).toFixed(2);
    if (length<10) return `${length} metres: He's crap!`
    if (length<25) return `${length} metres: He's ok!`
    if (length<50) return `${length} metres: He's flying!`
    return `${length} metres: Gold!!`
  
  }


  const skiJump3 = mountain => {
    const jump = ((mountain.length * (mountain.length * 1.5) * 9) / 10).toFixed(2);
    let comment = ``;
    switch(true) {
      case (jump > 10 && jump <= 25):
        comment = `He's ok!`;
        break;
      case (jump > 25 && jump <= 50):
        comment = `He's flying!`;
        break;
      case (jump > 50):
        comment = `Gold!!`;
        break;
      default:
        comment = `He's crap!`;
        break;
    }
    return `${jump} metres: ${comment}`;
  }