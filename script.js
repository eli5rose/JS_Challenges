const firstGuy = {
    name: 'Bernard',
    weight: 78, 
    height: 1.69,
    bmiBernard:  function () {
        return (this.weight / (this.height * this.height)).toFixed(1);
    }
   };

 

   const secondGuy = {
    name: 'Marcel',
    weight: 92, 
    height: 1.95,
    bmiMarcel:  function () {
        return (this.weight / (this.height * this.height)).toFixed(1); 
    }
   };

if (firstGuy.bmiBernard() > secondGuy.bmiMarcel()) {
    console.log(`The BMI of ${firstGuy.name} (${firstGuy.bmiBernard()}) is higher than that of  ${secondGuy.name} (${secondGuy.bmiMarcel()})`);
} else {
    console.log(`The BMI of ${secondGuy.name} (${secondGuy.bmiMarcel()}) is higher than that of ${firstGuy.name} (${firstGuy.bmiBernard()})`);  
};

