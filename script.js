function calcTip(bill) {
    let tip = 0;
    if (bill <= 300 && bill >=50){
    tip = (15 * bill) / 100;
    }
 else {
               tip = (20 * bill) / 100;
            }
            return tip;
 }

// console.log(calcTip(150));

// const bills = [125, 555, 44];
// let tips = [];
// let totals = [];

// bills.forEach(element => {
//     let res = calcTip(element);
//     tips.push(res);
// });

// for(let i = 0; i < bills.length; i++){
//     totals.push(bills[i] + tips[i]);
// }

// console.log(tips);
// console.log(totals);

let test = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []

for (let i = 0 ; i < test.length; i++){
    console.log(tips.push = calcTip(test[i]));
}

let totals = []
for (let i = 0 ; i < test.length; i++){
    totals.push(test[i] + tips[i]);
}

console.log(totals);

function calcAverage (array) {

    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
    }
    let result = average / array.length;
    return result;
};

console.log(calcAverage(test));

