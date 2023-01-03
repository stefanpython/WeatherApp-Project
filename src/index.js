async function getWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Nigeria&APPID=62ab457233b8c68e94ef44e9b7be882d&units=metric"
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const searchValue = document.querySelector("#searchInput");
//   console.log(searchValue.value);
// });

// Temperatures
function tempData() {
  getWeather().then((data) => {
    const temp = document.getElementById("temp");
    temp.innerText = `Temp: ${Math.round(data.main.temp)}°C`;
    const feelsLike = document.getElementById("feelslike");
    feelsLike.innerText = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    const tempmin = document.getElementById("tempmin");
    tempmin.innerText = `Min temp: ${Math.round(data.main.temp_min)}°C`;
    const tempmax = document.getElementById("tempmax");
    tempmax.innerText = `Min temp: ${Math.round(data.main.temp_max)}°C`;
    const pressure = document.getElementById("pressure");
    pressure.innerText = `Pressure: ${Math.round(data.main.pressure)}`;
    const humidity = document.getElementById("humidity");
    humidity.innerText = `Humidity: ${Math.round(data.main.humidity)}%`;
  });
}
tempData();

// City name
function cityNameData() {
  getWeather().then((data) => {
    const cityName = document.getElementById("city-name");
    cityName.innerText = data.name;
  });
}
cityNameData();

// Country Sunrise Sunset
function countryData() {
  getWeather().then((data) => {
    const sunrise = document.getElementById("sunrise");
    sunrise.innerText = `Longitute: ${data.coord.lon}`;
    const sunset = document.getElementById("sunset");
    sunset.innerText = `Latitude: ${data.coord.lat}`;
  });
}
countryData();

// Sky description
function skyData() {
  getWeather().then((data) => {
    const description = document.getElementById("description");
    description.innerText = data.weather[0].description;
  });
}
skyData();

// Wind data
function windData() {
  getWeather().then((data) => {
    // data.wind.speed
    const wind = document.getElementById("wind");
    wind.innerText = `Wind: ${Math.round(data.wind.speed)} Km/h`;
  });
}

windData();

function iconData() {
  getWeather().then((data) => {
    // data.weather[0].icon
    const iconImage = document.getElementById("icon-img");
    iconImage.src = `icons/${data.weather[0].icon}.png`;
  });
}

iconData();
