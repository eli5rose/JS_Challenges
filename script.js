
// First round and result

let scoreDauphins1 = 96;
let scoreDauphins2 = 108;
let scoreDauphins3 = 89;

let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let scoreAverageDauphins1 = (96 + 108 + 89)/3;
console.log ("The average score of the Dauphins in the first round is : "  + scoreAverageDauphins1.toFixed(2));

let scoreAverageKoalas1 = (88 + 91 + 110)/3;
console.log ("The average score of the Koalas in the first round is : "  + scoreAverageKoalas1.toFixed(2));

if (scoreAverageDauphins1 > scoreAverageKoalas1){
    console.log ( "In the first round, Dauphins are the winners");}
else if(scoreAverageDauphins1 < scoreAverageKoalas1){
    console.log ("In the first round, Koalas are winners");}
else (scoreAverageDauphins1 = scoreAverageKoalas1) 
    console.log ("In the first round, Dauphins and Koalas are equal");

// SEcond round and result

let scoreDauphins4 = 97;
let scoreDauphins5 = 112;
let scoreDauphins6 = 101;

let scoreKoalas4 = 109;
let scoreKoalas5 = 95;
let scoreKoalas6 = 123;

let scoreAverageDauphins2 = (97 + 112 + 101)/3;
console.log ("The average score of the Dauphins in the second round is : "  + scoreAverageDauphins2.toFixed(2));

let scoreAverageKoalas2 = (109 + 95 + 106)/3;
console.log ("The average score of the Koalas in the second round is : "  + scoreAverageKoalas2.toFixed(2));

if (scoreAverageDauphins2 > scoreAverageKoalas2){
    console.log ( "In the second round, Dauphins are the winners");}
else if(scoreAverageDauphins2 < scoreAverageKoalas2){
    console.log ("In the second round, Koalas are winners");}
else (scoreAverageDauphins2 = scoreAverageKoalas2) 
    console.log ("As a result, in the second round, Dauphins and Koalas are equal");

 // Third round and result

let scoreDauphins7 = 97;
let scoreDauphins8 = 112;
let scoreDauphins9 = 101;

let scoreKoalas7 = 109;
let scoreKoalas8 = 95;
let scoreKoalas9 = 106;

let scoreAverageDauphins3 = (97 + 112 + 101)/3;
console.log ("The average score of the Dauphins in the third round is : "  + scoreAverageDauphins2.toFixed(2));

let scoreAverageKoalas3 = (109 + 95 + 106)/3;
console.log ("The average score of the Koalas in the third round is : "  + scoreAverageKoalas2.toFixed(2));

if (scoreAverageDauphins3 > scoreAverageKoalas3){
    console.log ( "As a result, in the third round, Dauphins are the winners");}
else if(scoreAverageDauphins3 < scoreAverageKoalas3){
    console.log ("As a result, in the third round, Koalas are winners");}
else (scoreAverageDauphins3 = scoreAverageKoalas3) 
    console.log ("As a result, in the third round, Dauphine and Koalas are equal");

// Include a new rule: a team can only win if their score is over 100. Otherwise, there is no winner.

let totalScoreAverageDauphins = (scoreAverageDauphins1 + scoreAverageDauphins2 + scoreAverageDauphins3) /3;
const totalScoreAverageKoalas = (scoreAverageKoalas1 + scoreAverageKoalas2 + scoreAverageKoalas3) /3;
console.log("The total average of the Dauphins in all three rounds is : " + totalScoreAverageDauphins.toFixed(2), "and the total average of the Koalas in all three rounds is : " + totalScoreAverageKoalas.toFixed(2));

if (totalScoreAverageDauphins > 100 || totalScoreAverageKoalas > 100) {
    if (totalScoreAverageDauphins > totalScoreAverageKoalas) {
        console.log("The Dauphins win!!!");
    } 
    else if (totalScoreAverageDauphins === totalScoreAverageKoalas) {
        console.log("Dauphins and Koalas are equal");
    } 
    else {
        console.log("The Koalas win!!!");
    }
} 
else {
    console.log("There's no winner");
} 