const boughtCandy = [];
const candyTypes = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewinggum: 0.03,
}

function addCandy (candyType, weight) {
  let kr = candyType * weight;
  return boughtCandy.push(kr);
}
addCandy(candyTypes.toffee, 20);
addCandy(candyTypes.chocolate, 10);
addCandy(candyTypes.sweet, 10);
addCandy(candyTypes.chewinggum, 25);
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
console.log(Math.round(amountToSpend)); // 85
canBuyMoreCandy(); //'Enough candy for you!'