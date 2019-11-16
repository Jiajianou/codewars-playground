class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }
}

function mostMoney(students) {

    
    let amountArray = students.map(student => student.fives * 5 + student.tens * 10 + student.twenties * 20);


    return  !!amountArray.reduce(function(a, b){ return (a === b) ? a : NaN; }) && students.length > 1 ? "all" : students[amountArray.indexOf(Math.max(...amountArray))].name;

}


const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 0, 2);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);



console.log(mostMoney([andy]));

console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]));

console.log(Math.max([1]));