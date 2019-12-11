// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text 's' to new borrower speak. Help save the next generation!


function borrow2(s){

    return s;

}

const borrow = s => s.split("").filter(e => e.match(/[a-z]/i)).map(e => e.toLowerCase()).join("");





console.log(borrow('WhAt! FiCK! DaMn CAke?'));




//cw's solutions:

const borrow3 = s => s.toLowerCase().replace(/\W/g,'');