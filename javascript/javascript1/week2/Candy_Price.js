//Candy Price

const boughtCandy = [];
const sweet = 0.5;
const chocolate = 0.7;
const toffee = 1.1;
const chewinggum = 0.03;
function addCandy (candyType, weight) {
  let kr = candyType * weight;
  return boughtCandy.push(kr);
}
addCandy(toffee, 20);
addCandy(chocolate, 10);
addCandy(sweet, 10);
addCandy(chewinggum, 25);
console.log(boughtCandy); // [ 22, 7, 5, 0.75 ]

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
   let total = 0;
   for (let i  = 0; i < boughtCandy.length; i++){
      total  += boughtCandy[i];
   }
  if (amountToSpend > total) {
    console.log(`You can buy more, so please do!`);
  } else {
    console.log(`Enough candy for you!`);
  }
}
console.log(amountToSpend); // 30.048191952125602
canBuyMoreCandy(); //'Enough candy for you!'