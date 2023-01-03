async function getWeather() {
  try {
    if (!inputBox.value) {
      inputBox.value = "London";
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&APPID=62ab457233b8c68e94ef44e9b7be882d&units=metric`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    if (weatherData.cod === "404") {
      document.querySelector(".error").innerText = weatherData.message;
    }

    inputBox.value = "";
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function allData() {
  getWeather();
  cityNameData();
  tempData();
  countryData();
  skyData();
  windData();
  iconData();
  inputBox.value = "";
  document.querySelector(".error").innerText = "";
}

const inputBox = document.getElementById("searchInput");
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  allData();
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  allData();
});

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
    tempmax.innerText = `Max temp: ${Math.round(data.main.temp_max)}°C`;
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
    const wind = document.getElementById("wind");
    wind.innerText = `Wind: ${Math.round(data.wind.speed)} Km/h`;
  });
}

windData();

function iconData() {
  getWeather().then((data) => {
    console.log(data.weather[0].icon);
    const backgroundImage = document.getElementById("backgroundImg");
    const iconImage = document.getElementById("icon-img");
    iconImage.src = `icons/${data.weather[0].icon}.png`;

    if (data.weather[0].icon === "01d") {
      backgroundImage.src = "images/sunnyday2.jpg";
    } else if (data.weather[0].icon === "04n") {
      backgroundImage.src = "images/cloudynight.jpg";
    } else if (data.weather[0].icon === "03d") {
      backgroundImage.src = "images/clodyday.jpg";
    } else if (data.weather[0].icon === "03n") {
      backgroundImage.src = "images/cloudynight.jpg";
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "09d"
    ) {
      backgroundImage.src = "images/rainday.jpg";
    } else if (
      data.weather[0].icon === "10n" ||
      data.weather[0].icon === "09n"
    ) {
      backgroundImage.src = "images/rainnight.jpg";
    } else if (data.weather[0].icon === "01n") {
      backgroundImage.src = "images/clearnight.jpg";
    } else if (data.weather[0].icon === "02n") {
      backgroundImage.src = "images/cloudynight.jpg";
    }
  });
}

iconData();
