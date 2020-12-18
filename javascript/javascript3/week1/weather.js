const main = document.querySelector('main');
const cityInput = document.getElementById('city');
const para = document.querySelector('p');
const getData = document.getElementById('weather-btn');

getData.addEventListener('click', getWeatherData);

//Fire Event from Enter
cityInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        getWeatherData (); 
    }
})
// Reach API
function getWeatherData (){
    const cityName = cityInput.value.toLowerCase();
    const api = "https://api.openweathermap.org/data/2.5/weather?q=";
    const key = "&appid=0f5d1d4ac034115ef7ae1bcdcada3527";
    const metric = "&units=metric";
    const url = api + cityName + key + metric;
    console.log(url);
        if (cityName === "") {
            para.innerText = 'Type a city name first.';
        } else {
            para.innerText = "";
            fetchData(url)
        };
}
// Fetch Weather Data for all
function fetchData (url) {
    fetch(url)
    .then(result => {
        if (result.ok) {
          return result.json(); 
        } else {
            para.innerText = "Incorrect city name";
        }
      })
    .then (data => {
        showWeather(data);
   })
}
// Change Background Images
function changeBgImg(data){
    let mainData = data.weather[0].main;
        mainData === "Clear"?
          main.style.backgroundImage = "url('images/clearsky.png')"
        : mainData === "Clouds"?
          main.style.backgroundImage = "url('images/cloudy.png')"
        : mainData === "Rain" || mainData === "Drizzle" || mainData === "Mist"?
          main.style.backgroundImage = "url('images/rain.png')"
        : mainData === "Storm"?
          main.style.backgroundImage = "url('images/thunderstorm.jpg')"
        : mainData === "Snow"?
          main.style.backgroundImage = "url('images/snowing.png')"
        : main.style.backgroundImage = "url('images/main.png')"
}

// Apply Weather Data in HTML
function showWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("wind-speed");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    const dateSunrise = new Date(data.sys.sunrise * 1000);
    const dateSunset = new Date(data.sys.sunset * 1000);
    
    const formatTime = (time) => 
    time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit" });

    temperature.innerHTML = Math.floor(data.main.temp) + "&#8451";
    weatherInfo.innerHTML = data.weather[0].description;
    windSpeed.innerHTML = "Wind speed: " + Math.floor(data.wind.speed) + " m/s";
    cityName.innerHTML = data.name;
    humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
    sunrise.innerHTML = "Sunrise " + formatTime(dateSunrise);
    sunset.innerHTML = "Sunset " + formatTime(dateSunset);
    changeBgImg(data); 
}

// Get Current Location
const getLocation = document.getElementById('current-location');
getLocation.addEventListener('click', getDataForCurrentLocation);
const currentLocation = () => 
    new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(function(position) {
        const coords = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        resolve(coords);
      }); 
    });
  
// Get Weather Data for Current Location
function getDataForCurrentLocation() {
    currentLocation().then(coords => {
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      const currentCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0f5d1d4ac034115ef7ae1bcdcada3527&units=metric`;
      fetchData(currentCityUrl)
    });
  }


  
  
