//Housey pricey (A house price estimator)
//Peter

const volumeInMeters = [[8*10*10],[5*11*8]];
const gardenSizeInM2 = [100, 70];
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300 >= 2500000) 
    { console.log ("It's worthwhile for Peter.");
} else {
    console.log ("Peter paid too much.");
}
if (volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300 >= 1100000) 
    { console.log ("Julia paid quite cheap.");
} else {
    console.log ("Julia should not buy it.");
}