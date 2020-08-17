//Housey pricey (A house price estimator)
const volume = [[8 * 10 * 10],[5 * 11 * 8]];
const garden = [100, 70];
const paidPrice = [2500000,1100000];


function estimatePrice (paidPrice, volume, garden) {
  if (paidPrice < volume * 2.5 * 1000 + garden * 300) { 
  console.log ("It's quite cheap.");
} else {
  console.log ("It's a bit expensive.");
}
};
estimatePrice(paidPrice[0], volume[0], garden[0]); //expensive
estimatePrice(paidPrice[1], volume[1], garden[1]); //cheap