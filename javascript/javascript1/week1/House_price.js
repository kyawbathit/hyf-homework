//Housey pricey (A house price estimator)
const volume = [[8 * 10 * 10],[5 * 11 * 8]];
const garden = [100, 70];
const paidPrice = [2500000,1100000];


function estimatePrice (paidPrice, volume, garden) {
  const currentRate = volume * 2.5 * 1000 + garden * 300;
  if (paidPrice < currentRate) { 
  console.log ("It is quite cheap.");
} else {
  console.log ("It is a bit expensive.");
}
};
estimatePrice(paidPrice[0], volume[0], garden[0]); //expensive
estimatePrice(paidPrice[1], volume[1], garden[1]); //cheap