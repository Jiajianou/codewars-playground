// In this kata you have to create all permutations of an input s and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.


function permutations(s) {

    let output = [];

    if(s.length === 1) {

        output.push(s);

        return output;
        
    };

    for (var i = 0; i < s.length; i++) {

        var first = s[i];
        var left = s.substring(0, i) + s.substring(i + 1);
        var inner = permutations(left);

        for (var j = 0; j < inner.length; j++) {

          output.push(first + inner[j]);

        }

    }

    return Array.from(new Set(output));  
}



console.log(permutations('aabb'));



//codewars 


function permutations2(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
   }

   function permutations3(string) {
    var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
    if(string.length == 1) return [string];
    arr.forEach(function(v, i, arr) {
      if(heads.indexOf(v) == -1) {
        heads.push(v);
        tmp.splice(tmp.indexOf(v), 1);
        permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
        tmp.push(v);
      }
    });
    return out;
  }


  const unique = xs => [ ...new Set(xs) ]
  const concat = (a, b) => [ ...a, ...b ] 
  const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]
  
  const permute = (x, i, xs) => 
    combinations(drop(i)(xs)).map(y => x + y)
  
  const combinations = s =>
    s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)
  
  const permutations4 = s => unique(combinations(s))


  function permutations5(string) {
    if (string.length <= 1) {
      return [string];
    }
    var perms = [];
    for (var i = 0; i < string.length; i++) {
      perms = perms.concat(permutations(string.substring(0, i) + string.substring(i + 1)).map(function(e) {
        return string[i] + e;
      }).filter(function(e) {
        return perms.indexOf(e) === -1;
      }));
    }
    return perms;
  }


  function permutations6(chs) {
    return [...new Set(
        Array.from( heapsPerms((chs+'').split('')),
        str => str.join('') )
    )];
}


function *heapsPerms(chs, n = chs.length) {
    if (n <= 1) yield chs.slice();
    else for (let i = 0; i < n; i++) {
        yield *heapsPerms(chs, n-1);
        swap(chs, (n % 2 !== 0) ? 0 : i, n-1);
    }
}


function swap(iterable, i, j) {
    [iterable[i], iterable[j]] = [iterable[j], iterable[i]];
}

const permutations6 = (str) => 
 str.length === 1 ? 
   [str] : Array.from(new Set(
    [...str].map((char, i) => 
      permutations(str.slice(0, i) + str.slice(i + 1))
        .map(p => char + p)
    ).reduce((a, b) => a.concat(b), [])
  ));