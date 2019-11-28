// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".



const meeting = s => s.toUpperCase().split(";")
                                    .map(e => e.split(":"))
                                    .sort((a,b) => {
                                        if(a[1] > b[1]){
                                            return 1;
                                        } else if (a[1] < b[1]) return -1;

                                        if(a[0] > b[0]) {
                                            return 1;
                                        } else if (a[0] < a[0]) return -1;})
                                    .map(e => `(${e[1]}, ${e[0]})`)
                                    .join("");


console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));

console.log(meeting("Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve"));




//other people's solutions: from code wars solution collections:

function meeting2(s) {
    let string = s.toUpperCase().split(';')
                  .map(x => x.split(':').reverse().join(', '))
                  .sort()
                  .join(')(')
    return '(' + string + ')'
  }


  function meeting3(s) {
    return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
}



const meeting4 = s =>
  s.toUpperCase() // can harmlessly uppercase the whole thing
    .split(';') // split into array of people
    .map(person => { // turn each into an object of matching first / last names
      const [first, last] = person.split(':');
      return { first, last }
    })
    .sort((a, b) => ( // ugh, but
      a.last === b.last
        ? a.first === b.first 
          ? 0 
          : a.first > b.first ? 1 : -1
        : a.last > b.last ? 1 : -1
    ))
    .map(p => `(${p.last}, ${p.first})`) // turn each back into a string
    .join('') // and stick them back together :)


    const meeting5 = s => {
        return s.toUpperCase()
               .replace(/(\w+):(\w+)/g, "($2, $1)")
               .split(';')
               .sort()
               .join('')
      };