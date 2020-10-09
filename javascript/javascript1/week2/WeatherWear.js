//Weather To Wear
const clothes = ["Short and T-shirt", "Jeans and Raincoat", "Tight inside and Fur Coat"];
function chooseWithWeather (temperature){
  if (temperature <= 15) {
    return clothes[2];
  } else if (temperature > 15 && temperature <= 25) {
    return clothes[1];
  } else {
    return clothes[0];
  }
}
const clothesToWear = chooseWithWeather(30);
console.log(clothesToWear); //"Short and T-shirt"