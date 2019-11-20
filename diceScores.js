// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

const score = dice => {

    const scoreCard = {"11":100,"31":1000,"15":50,"35":500,"32":200,"33":300,"34":400,"36":600,"25":100,"21":200};

    let rawGroups = [...new Set(dice)].map( e => "" + dice.reduce((acc,val)=> val === e ? acc + 1: acc + 0, 0) + e);

    let filtered = [];

    rawGroups.forEach(e => {
        
        if(parseInt(e.charAt(0))>3){
            filtered.push("3"+e.charAt(1));
            filtered.push(parseInt(e.charAt(0)) - 3 + e.charAt(1));
        }else{
            filtered.push(e);
        }

    });

    return filtered.reduce((acc, dice) => scoreCard.hasOwnProperty(dice) ? acc + scoreCard[dice] : acc + 0, 0);
 
}






console.log(score( [2, 3, 4, 6, 2]));

console.log(score( [1, 1, 1, 3, 1] ));




function score2( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
  }


  function score3( dice ) {
    if (dice.length !== 5) return 0;
    
    let diceStr = dice.sort().join('');
    let score = 0;
    const rules = [
      { reg: /111/, score: 1000 },
      { reg: /666/, score: 600 },
      { reg: /555/, score: 500 },
      { reg: /444/, score: 400 },
      { reg: /333/, score: 300 },
      { reg: /222/, score: 200 },
      { reg: /1/,   score: 100 },
      { reg: /5/,   score: 50 },
    ];
    
    rules.forEach(rule => {
      while (rule.reg.test(diceStr)) {
        diceStr = diceStr.replace(rule.reg, '');
        score += rule.score;
      }
    });
    
    return score;
  }


  function score4( dice ) {
    var score = [0, 0, 0, 0, 0, 0];
  
    dice.forEach(function(die) {
      ++score[die - 1];
    });
  
    return score.reduce(function(total, n, i) {
      switch (i + 1) {
        case 1:
          return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);
  
        case 5:
          return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);
  
        default:
          return total + (Math.floor(n / 3) * (i + 1) * 100);
      }
    }, 0);
  }


  function score5( dice ) {
    var v = {
      111: 1000,
      222: 200,
      333: 300,
      444: 400,
      555: 500,
      666: 600,
      1: 100,
      5: 50
    };
    
    var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
    return s.reduce(function (a, e) {
      return a + v[e];
    }, 0);
  }


  function score6(dice) {
    var retval = 0;
    
    for(let i = 1; i <= 6; i++) {
      let d = dice.filter((v) => { return v == i; }).length;
      if(!d) continue;
  
      if(i == 1) retval += (d / 3 | 0) * 1000 + (100 * (d % 3));
      else retval += (d / 3 | 0) * 100 * i;
      
      if(i == 5) retval += (d % 3) * 50;
    }
  
    return retval;
  }