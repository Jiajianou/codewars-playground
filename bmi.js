// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {

    const bmi = weight / (height**2);

    if(bmi <= 18.5) return "Underweight";
    if(bmi <= 25.0) return "Normal";
    if(bmi <= 30.0) return "Overweight";

    return "Obese";

}


const bmi2 = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";


const bmi3 = (w, h) => (w = w / h / h) > 30 ? 'Obese' : w > 25 ? 'Overweight' : w > 18.5 ? 'Normal' : 'Underweight';


console.log(bmi(80, 1.80));



