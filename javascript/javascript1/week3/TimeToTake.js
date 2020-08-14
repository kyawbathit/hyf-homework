//Time to Take
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calTimeToTake (travalInformation){
  const travelInMin = travalInformation.destinationDistance / travalInformation.speed * 60;
  const hours = (travelInMin / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return "It will take "+ rhours + " hour(s) and " + rminutes + " minute(s).";
}

const travelTime = calTimeToTake(travelInformation);
console.log(travelTime); //'It will take 8 hour(s) and 38 minute(s).'




