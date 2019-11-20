// Introduction
//  	The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

 

// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// Kata Series
// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.


const wave = s => {

    let waves = s.split("").reduce((acc, char) => char.match(/[a-z]/i) ? acc + 1 : acc + 0, 0);

    let lastWave = 0;

    let out =[];

    Array(waves).fill(s.toLowerCase()).forEach((s, i) => {

            for(let last = lastWave; last < s.length; last++){

                if(s.charAt(last).match(/[a-z]/i)){

                    out.push(s.substr(0, last) + s.charAt(last).toUpperCase(last) + s.substr(last + 1));
                    lastWave = last + 1;
                    break;                 
                };
            }
    });

    return out;

};


function wave2(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}


var wave3=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)


function wave4(str) {
    return str.split('').map((l, i, a) => {
      let c = a.slice();
      c[i] = c[i].toUpperCase();
      return c.join('');
    }).filter((w, i) => w[i] !== ' ');
  }


  function wave5(s){
    // Code here
    let w=[]
    for(let i=0;i<s.length;i++){
      w.push(s.substring(0,i)+s.charAt(i).toUpperCase()+s.slice(i+1))
  
    }
    return w.filter(x=>x!=s);
  }



console.log(wave(" gap "));

console.log(wave("Two words"));