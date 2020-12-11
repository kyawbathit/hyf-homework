
//Log out after 2.5 Seconds
setTimeout (() =>
console.log('Called after 2.5 Seconds'), 2500);

//Log out Delay
function delayLogout (delay, string) {
    setTimeout(() => console.log(string), delay * 1000)
};
delayLogout(3, 'This string logged after 3 seconds');
delayLogout(5, 'This string logged after 5 seconds');

//Delayed Button
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    delayLogout(5, 'Called after 5 seconds');
});

//Callback
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');
const planetLogger = function (logPlanetFunction) {
    logPlanetFunction();
};

planetLogger(earthLogger); //'Earth'
planetLogger(saturnLogger); //'Saturn'

//Logging location Button
const btn2 = document.getElementById('location-btn');
btn2.addEventListener('click', findYourLocation);
function findYourLocation (){
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition (position) {
    console.log(`Latitude: ${position.coords.latitude}`);
    console.log(`Longitude: ${position.coords.longitude}`);
}
 
//Google Map (not working as it's lacking an API key)
let map;
function setMap () {
    map = new google.maps.Map(document.getElementById('map-div'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 14
  });
 };

 //Run After Delay
function runAfterDelay (delay, callback) {
    setTimeout (callback, delay * 1000);
}

runAfterDelay(3, function () {
    console.log('logged after 3 sec.');
})
runAfterDelay(4, () =>
    console.log(3 * 2));

//Double Click
window.addEventListener('dblclick', () =>{
    console.log("Double Click");
});


//Joke Creator
function jokeCreator (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke = function () { 
      console.log("if(youWant() === true) { \n\ youCan()\n\} else {\n\youCant()\n\};")
    };
    logBadJoke = function () {
      console.log("A journalist asks a programmer:\n\ What makes code bad? \n\The programmer replies: No comment!")
    };
      if (shouldTellFunnyJoke) {
      logFunnyJoke();
      } else {
      logBadJoke();
      }
  }
  jokeCreator(true);
  jokeCreator(false);

//An Array of Functions
const functionArray = [
    add = () => console.log(3 + 3),
    subs = () => console.log(8 - 1),
    mult = () => console.log(2 * 4)]
    for (let i = 0; i < functionArray.length; i++){
        functionArray[i]();
    }

//Alternative
//for (let key in functionArray) {
  //functionArray[key]()
//}

//Functions as var vs regular one
const simpleFunction = () => console.log('A var function');
function makeSimpleFunction () {
  console.log('A regular function');
};
simpleFunction ()//can be called only after the declaration
makeSimpleFunction () //can be called before or after creation

//Functions as an object
const objectifiedFunction = {'add': () => console.log("This is object key value.")};
objectifiedFunction.add();