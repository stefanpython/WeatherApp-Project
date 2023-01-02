async function getWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Bucharest&APPID=62ab457233b8c68e94ef44e9b7be882d&units=metric"
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function aData() {
  getWeather().then((data) => {
    console.log(data);
    // Temperatures
    console.log(data.main);
    // data.main.temp
    // data.main.feels_like
    // data.main.temp_min
    // data.main.temp_max
    // data.main.pressure
    // data.main.humidity

    // Name
    console.log(data.name);

    // Sys
    console.log(data.sys);
    // data.sys.country
    // data.sys.sunrise - convert to new Date()
    // data.sys.sunset - convert

    // Sky status
    console.log(data.weather[0]);
    // data.weather[0].description

    // Wind
    console.log(data.wind);
    // data.wind.speed
    // data.wind.deg

    // Coordonates
    console.log(data.coord);
    // data.coord.lon
    // data.coord.lat
  });
}
aData();

// Temperatures
function tempData() {
  getWeather().then((data) => {
    // data.main.temp
    // data.main.feels_like
    // data.main.temp_min
    // data.main.temp_max
    // data.main.pressure
    // data.main.humidity
  });
}
tempData();

// City name
function cityNameData() {
  getWeather((data) => {
    // data.name
  });
}
cityNameData();

// Country Sunrise Sunset
function countryData() {
  getWeather().then((data) => {
    // data.sys.country
    // data.sys.sunrise - convert to new Date()
    // data.sys.sunset - convert
  });
}
countryData();

// Sky description
function skyData() {
  getWeather().then((data) => {
    // data.weather[0].description
  });
}
skyData();

// Wind data
function windData() {
  getWeather().then((data) => {
    // data.wind.speed
    // data.wind.deg
  });
}

windData();

// Coordonates data
function coordonatesData() {
  getWeather().then((data) => {
    // data.coord.lon
    // data.coord.lat
  });
}
coordonatesData();

function iconData() {
  getWeather().then((data) => {
    // data.weather[0].icon
  });
}

iconData();
