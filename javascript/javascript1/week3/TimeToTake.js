//Time to Take
const travelInfo = {
  speed: 50,
  distance: 432,
};
function calTimeToTake(travelInfo) {
  const timeInMinute = (travelInfo.distance / travelInfo.speed) * 60;
  const hours = (timeInMinute / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours} hours and ${rminutes} minutes.`;
}

const travelTime = calTimeToTake(travelInfo);
console.log(travelTime); // '8 hour(s) and 38 minute(s).'




