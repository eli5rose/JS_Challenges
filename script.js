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

console.log(calcTip(150));

const bills = [125, 555, 44];
let tips = [];
let totals = [];

bills.forEach(element => {
    let res = calcTip(element);
    tips.push(res);
});

for(let i = 0; i < bills.length; i++){
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);