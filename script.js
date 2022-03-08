'use strict';

let bill1 = 275;

// Using "If" and "Else"

if (bill1 <= 300 && bill1 >=50){
let tipPercentage = (15 * bill1)/100
console.log("The bill was $" + bill1 + "," + "the tip was $" + tipPercentage + " and the total bill was $" + (tipPercentage + bill1))
}
    else if (bill1 >= 300 && bill1 <= 50){
        let tipPercentage1 = (20 * bill1)/100
        console.log("The bill was $" + bill1 + "," + "the tip was $" + tipPercentage1 + " and the total bill was $" + (tipPercentage1 + bill1))
    }


// Using the "ternaires" 
// Rasult : same 

let tipPercentage = (15 * bill1)/100
let tipPercentage1 = (20 * bill1)/ 100
bill1 <= 300 && bill1 >=50 ? console.log("The bill was $" + bill1 + "," + "the tip was $" + tipPercentage + " and the total bill was $" + (tipPercentage + bill1)) : console.log("The bill was $" + bill1 + "," + "the tip was $" + tipPercentage1 + " and the total bill was $" + (tipPercentage1 + bill1))

// Second example

let bill2 = 40;

let tipPercentage3 = (15 * bill2)/100
let tipPercentage4 = (20 * bill2)/ 100
bill2 <= 300 && bill2 >=50 ? console.log("The bill was $" + bill2 + "," + "the tip was $" + tipPercentage3 + " and the total bill was $" + (tipPercentage3 + bill2)) : console.log("The bill was $" + bill2 + "," + "the tip was $" + tipPercentage4 + " and the total bill was $" + (tipPercentage4 + bill2))

// Third example

let bill3 = 430;
let tipPercentage5 = (15 * bill3)/100
let tipPercentage6 = (20 * bill3)/ 100
bill3 <= 300 && bill3 >=50 ? console.log("The bill was $" + bill3 + "," + "the tip was $" + tipPercentage5 + " and the total bill was $" + (tipPercentage5 + bill3)) : console.log("The bill was $" + bill3 + "," + "the tip was $" + tipPercentage6 + " and the total bill was $" + (tipPercentage6 + bill3))


