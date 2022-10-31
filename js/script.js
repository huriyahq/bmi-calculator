// instructions for user
document.getElementById("instructions").innerHTML = "Fill in the form below to calculate your BMI.";
// get input values from index.html and save in variables
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const result = document.getElementById("result");
// when button is clicked calculateBMI() function runs
function calculateBMI() {
    // turn strings to numbers using .value
    // divide heightInput by 100 to turn cm to metres
    const height = (heightInput.value) / 100;
    const weight = weightInput.value;
    const bmi = (weight / (height * height)).toFixed(1);
    // change innterText on page to display BMI result
    // call message() function to get text for BMI range
    result.innerHTML = `Your BMI is ${bmi}.<br/> ${message(bmi)}`;
}
// function to check BMI range
function message(bmi) {
    let range = "";
    // if BMI is less than 18.5
    // message: you're in the underweight range
    if (bmi < 18.5) {
        range = "You're in the underweight range.";
        document.body.style.backgroundColor = "#AD6172";
        return range;
    } 
    // if BMI between 18.5 and 24.9
    // message: you're in the healthy weight range
    else if (bmi <= 24.9) {
        range = "You're in the healthy weight range.";
        document.body.style.backgroundColor = "#C7D9B7";
        return range;
    }
    // if BMI between 25 and 29.9
    // message: you're in the overweight range
    else if (bmi <= 29.9) {
        range = "You're in the overweight range.";
        document.body.style.backgroundColor = "#E4A86F";
        return range;
    }
    // if BMI between 30 and 39.9 
    // message: you're in the obese range
    else if ((bmi <= 39.9) || (bmi > 39.9)) {
        range = "You're in the obese range.";
        document.body.style.backgroundColor = "#AD6172";
        return range;
    }
    // return nothing (empty string) if BMI doesn't fit the above
    else {
        return range;
    }
}
// reset input boxes
function reset() {
    heightInput.value = "";
    weightInput.value = "";
    result.innerHTML = "";
    document.body.style.backgroundColor = "#FFF";
}