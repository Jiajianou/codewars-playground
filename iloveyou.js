// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



function howMuchILoveYou(nbPetals) {

    const pedals = {1:"I love you", 2:"a little", 3:"a lot", 4:"passionately", 5:"madly", 6:"not at all"};

    return pedals[nbPetals%6=== 0 ? 6 : nbPetals%6];


}



console.log(howMuchILoveYou(7));


const howMuchILoveYou2=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6];
const howMuchILoveYou3 = n => ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(n - 1) % 6]