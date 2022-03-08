
let scoreDauphins1 = [44,23,71]
let scoreDauphins2 = [85,54,41]
let scoreKoalas1 = [65,54,49]
let scoreKoalas2 = [23,34,27]

function calcAverage(array) {
    return array.reduce((a, b) => a + b ) / array.length;
}

var sum = function(array) {
    var total = 0;
    for (var i=0; i<array.length; i++) {
      total += array[i];
    }
    return total;
  };
  

console.log("The first average score for the Dauphins is " + calcAverage(scoreDauphins1))

console.log("The second average score for the Dauphins is " + calcAverage(scoreDauphins2))

console.log("The first average score for the Koalas is " + calcAverage(scoreKoalas1))

console.log("The second average score for the Koalas is " + calcAverage(scoreKoalas2))

let DauphinsTeam1 = [calcAverage(scoreDauphins1)]
console.log(DauphinsTeam1);
let KoalasTeam1 = [calcAverage(scoreKoalas1)]
console.log(KoalasTeam1);

function checkWinner (DauphinsTeam1, KoalasTeam1) {
  if (DauphinsTeam1 > KoalasTeam1) {
    console.log(`The Dauphins win ${DauphinsTeam1} vs ${KoalasTeam1}`);
  } else if (DauphinsTeam1 < KoalasTeam1) {
    console.log(`The Koalas win ${KoalasTeam1} vs ${DauphinsTeam1}`);
  }
}
 checkWinner(DauphinsTeam1, KoalasTeam1);