/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather() {
  try {
    if (!inputBox.value) {
      inputBox.value = "Jamaica";
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxlQUFlO0FBQzFFLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQSx5Q0FBeUMsaUNBQWlDO0FBQzFFO0FBQ0EscUNBQXFDLCtCQUErQjtBQUNwRTtBQUNBLHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQSxzQ0FBc0MsK0JBQStCO0FBQ3JFO0FBQ0Esc0NBQXNDLCtCQUErQjtBQUNyRSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBLG9DQUFvQyxlQUFlO0FBQ25ELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0QsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCOztBQUVsRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlucHV0Qm94LnZhbHVlKSB7XG4gICAgICBpbnB1dEJveC52YWx1ZSA9IFwiSmFtYWljYVwiO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtpbnB1dEJveC52YWx1ZX0mQVBQSUQ9NjJhYjQ1NzIzM2I4YzY4ZTk0ZWY0NGU5YjdiZTg4MmQmdW5pdHM9bWV0cmljYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEuY29kID09PSBcIjQwNFwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgaW5wdXRCb3gudmFsdWUgPSBcIlwiO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxEYXRhKCkge1xuICBnZXRXZWF0aGVyKCk7XG4gIGNpdHlOYW1lRGF0YSgpO1xuICB0ZW1wRGF0YSgpO1xuICBjb3VudHJ5RGF0YSgpO1xuICBza3lEYXRhKCk7XG4gIHdpbmREYXRhKCk7XG4gIGljb25EYXRhKCk7XG4gIGlucHV0Qm94LnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKS5pbm5lclRleHQgPSBcIlwiO1xufVxuXG5jb25zdCBpbnB1dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhbGxEYXRhKCk7XG59KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGFsbERhdGEoKTtcbn0pO1xuXG4vLyBUZW1wZXJhdHVyZXNcbmZ1bmN0aW9uIHRlbXBEYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XG4gICAgdGVtcC5pbm5lclRleHQgPSBgVGVtcDogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKX3CsENgO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNsaWtlXCIpO1xuICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSBgRmVlbHMgbGlrZTogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKX3CsENgO1xuICAgIGNvbnN0IHRlbXBtaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBtaW5cIik7XG4gICAgdGVtcG1pbi5pbm5lclRleHQgPSBgTWluIHRlbXA6ICR7TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pfcKwQ2A7XG4gICAgY29uc3QgdGVtcG1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcG1heFwiKTtcbiAgICB0ZW1wbWF4LmlubmVyVGV4dCA9IGBNYXggdGVtcDogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCl9wrBDYDtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIik7XG4gICAgcHJlc3N1cmUuaW5uZXJUZXh0ID0gYFByZXNzdXJlOiAke01hdGgucm91bmQoZGF0YS5tYWluLnByZXNzdXJlKX1gO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbiAgICBodW1pZGl0eS5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7TWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpfSVgO1xuICB9KTtcbn1cbnRlbXBEYXRhKCk7XG5cbi8vIENpdHkgbmFtZVxuZnVuY3Rpb24gY2l0eU5hbWVEYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIik7XG4gICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xuICB9KTtcbn1cbmNpdHlOYW1lRGF0YSgpO1xuXG4vLyBDb3VudHJ5IFN1bnJpc2UgU3Vuc2V0XG5mdW5jdGlvbiBjb3VudHJ5RGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5yaXNlXCIpO1xuICAgIHN1bnJpc2UuaW5uZXJUZXh0ID0gYExvbmdpdHV0ZTogJHtkYXRhLmNvb3JkLmxvbn1gO1xuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Vuc2V0XCIpO1xuICAgIHN1bnNldC5pbm5lclRleHQgPSBgTGF0aXR1ZGU6ICR7ZGF0YS5jb29yZC5sYXR9YDtcbiAgfSk7XG59XG5jb3VudHJ5RGF0YSgpO1xuXG4vLyBTa3kgZGVzY3JpcHRpb25cbmZ1bmN0aW9uIHNreURhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgfSk7XG59XG5za3lEYXRhKCk7XG5cbi8vIFdpbmQgZGF0YVxuZnVuY3Rpb24gd2luZERhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcbiAgICB3aW5kLmlubmVyVGV4dCA9IGBXaW5kOiAke01hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKX0gS20vaGA7XG4gIH0pO1xufVxuXG53aW5kRGF0YSgpO1xuXG5mdW5jdGlvbiBpY29uRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kSW1nXCIpO1xuICAgIGNvbnN0IGljb25JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbi1pbWdcIik7XG4gICAgaWNvbkltYWdlLnNyYyA9IGBpY29ucy8ke2RhdGEud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXG4gICAgaWYgKGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjAxZFwiKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCJpbWFnZXMvc3VubnlkYXkyLmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoZGF0YS53ZWF0aGVyWzBdLmljb24gPT09IFwiMDRuXCIpIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcImltYWdlcy9jbG91ZHluaWdodC5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjAzZFwiKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCJpbWFnZXMvY2xvZHlkYXkuanBnXCI7XG4gICAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwM25cIikge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL2Nsb3VkeW5pZ2h0LmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIxMGRcIiB8fFxuICAgICAgZGF0YS53ZWF0aGVyWzBdLmljb24gPT09IFwiMDlkXCJcbiAgICApIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcImltYWdlcy9yYWluZGF5LmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIxMG5cIiB8fFxuICAgICAgZGF0YS53ZWF0aGVyWzBdLmljb24gPT09IFwiMDluXCJcbiAgICApIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcImltYWdlcy9yYWlubmlnaHQuanBnXCI7XG4gICAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwMW5cIikge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL2NsZWFybmlnaHQuanBnXCI7XG4gICAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwMm5cIikge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL2Nsb3VkeW5pZ2h0LmpwZ1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmljb25EYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=