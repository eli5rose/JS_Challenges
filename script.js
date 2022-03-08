let weightBernard1 = 78;
let heightBernard1 = 1.69;
let weightBernard2 = 95;
let heightBernard2 = 1.88;

let weightMarcel1 = 92;
let heightMarcel1 = 1.95;
let weightMarcel2 = 85;
let heightMarcel2 = 1.76;

let bmiBernard1 = 78 / (1.69 * 1.69);
console.log ("The first BMI of Bernard is : " +bmiBernard1);


let bmiBernard2 = 95 / (1.88 * 1.88);
console.log ("The second BMI of Bernard is : " +bmiBernard2);

let bmiMarcel1 = 92 / (1.95 * 1.95);
console.log( "The first BMI of Marcel is : " +bmiMarcel1);

let bmiMarcel2 = 85 / (1.76 * 1.76);
console.log("The second BMI of Marcel is : " +bmiMarcel2);

console.log(bmiBernard1 && bmiBernard2 > bmiMarcel1 && bmiMarcel2 ? "Bernard has a BMI higher than Marcel" : "Marcel has a BMI higher than Bernard");

console.log(bmiBernard1 > bmiMarcel1 ? "Bernard has a BMI (" + bmiBernard1.toFixed(2) + ") higher than Marcel's (" + bmiMarcel1.toFixed(2) + ")" : "Marcel has a BMI (" + bmiMarcel1.toFixed(2) + ") higher than Bernard (" + bmiBernard1.toFixed(2) + ")");

console.log(bmiBernard2 > bmiMarcel2.toFixed(2) ? "Bernard has a BMI (" + bmiBernard2.toFixed(2) + ") is higher than Marcel's (" + bmiMarcel2.toFixed(2) + ")" : "Marcel has a BMI (" + bmiMarcel2.toFixed(2)+ ") higher than Bernard (" + bmiBernard2.toFixed(2) + ")");

// We assume that Bernard and Marcel are both 40yrs old 

if (bmiBernard1 < 22) {
    console.log("Bernard is underweught");
} else if (bmiBernard1 < 27) {
    console.log("Bernard's weight is normal");

} else if (bmiBernard1 < 32) {
    console.log("Bernard is overweight");
} else if (bmiBernard1 < 42) {
    console.log("Bernard is obese");
} else {
    console.log("Bernard is overobese");
} 

if (bmiBernard2 < 22) {
    console.log("Bernard is underweught");
} else if (bmiBernard2 < 27) {
    console.log("Bernard's weight is normal");

} else if (bmiBernard2 < 32) {
    console.log("Bernard is overweight");
} else if (bmiBernard2 < 42) {
    console.log("Bernard is obese");
} else {
    console.log("Bernard is overobese");
} 

// break line

if ( bmiMarcel1< 22) {
    console.log("Marcel is underweight");
} else if (bmiMarcel1 < 27) {
    console.log("Marcel's weight is normal");
} else if (bmiMarcel1 < 32) {
    console.log("Marcel is overweight");
} else if (bmiMarcel1 < 45) {
    console.log("Marcel is obese");
} else {bmiMarcel1
    console.log("Marcel is overobese");
} 

if ( bmiMarcel2< 22) {
    console.log("Marcel is underweight");
} else if (bmiMarcel2 < 27) {
    console.log("Marcel's weight is normal");
} else if (bmiMarcel2 < 32) {
    console.log("Marcel is overweight");
} else if (bmiMarcel2 < 45) {
    console.log("Marcel is obese");
} else {bmiMarcel2
    console.log("Marcel is overobese");
} 

