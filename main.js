/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxlQUFlO0FBQzFFLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQSx5Q0FBeUMsaUNBQWlDO0FBQzFFO0FBQ0EscUNBQXFDLCtCQUErQjtBQUNwRTtBQUNBLHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQSxzQ0FBc0MsK0JBQStCO0FBQ3JFO0FBQ0Esc0NBQXNDLCtCQUErQjtBQUNyRSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBLG9DQUFvQyxlQUFlO0FBQ25ELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0QsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCOztBQUVsRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWlucHV0Qm94LnZhbHVlKSB7XG4gICAgICBpbnB1dEJveC52YWx1ZSA9IFwiTG9uZG9uXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2lucHV0Qm94LnZhbHVlfSZBUFBJRD02MmFiNDU3MjMzYjhjNjhlOTRlZjQ0ZTliN2JlODgyZCZ1bml0cz1tZXRyaWNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICh3ZWF0aGVyRGF0YS5jb2QgPT09IFwiNDA0XCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIikuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEubWVzc2FnZTtcbiAgICB9XG5cbiAgICBpbnB1dEJveC52YWx1ZSA9IFwiXCI7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbERhdGEoKSB7XG4gIGdldFdlYXRoZXIoKTtcbiAgY2l0eU5hbWVEYXRhKCk7XG4gIHRlbXBEYXRhKCk7XG4gIGNvdW50cnlEYXRhKCk7XG4gIHNreURhdGEoKTtcbiAgd2luZERhdGEoKTtcbiAgaWNvbkRhdGEoKTtcbiAgaW5wdXRCb3gudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XG59XG5cbmNvbnN0IGlucHV0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuXCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGFsbERhdGEoKTtcbn0pO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYWxsRGF0YSgpO1xufSk7XG5cbi8vIFRlbXBlcmF0dXJlc1xuZnVuY3Rpb24gdGVtcERhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgICB0ZW1wLmlubmVyVGV4dCA9IGBUZW1wOiAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXApfcKwQ2A7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc2xpa2VcIik7XG4gICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwQ2A7XG4gICAgY29uc3QgdGVtcG1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcG1pblwiKTtcbiAgICB0ZW1wbWluLmlubmVyVGV4dCA9IGBNaW4gdGVtcDogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbil9wrBDYDtcbiAgICBjb25zdCB0ZW1wbWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wbWF4XCIpO1xuICAgIHRlbXBtYXguaW5uZXJUZXh0ID0gYE1heCB0ZW1wOiAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KX3CsENgO1xuICAgIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcbiAgICBwcmVzc3VyZS5pbm5lclRleHQgPSBgUHJlc3N1cmU6ICR7TWF0aC5yb3VuZChkYXRhLm1haW4ucHJlc3N1cmUpfWA7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9IGBIdW1pZGl0eTogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSl9JWA7XG4gIH0pO1xufVxudGVtcERhdGEoKTtcblxuLy8gQ2l0eSBuYW1lXG5mdW5jdGlvbiBjaXR5TmFtZURhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKTtcbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG4gIH0pO1xufVxuY2l0eU5hbWVEYXRhKCk7XG5cbi8vIENvdW50cnkgU3VucmlzZSBTdW5zZXRcbmZ1bmN0aW9uIGNvdW50cnlEYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bnJpc2VcIik7XG4gICAgc3VucmlzZS5pbm5lclRleHQgPSBgTG9uZ2l0dXRlOiAke2RhdGEuY29vcmQubG9ufWA7XG4gICAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRcIik7XG4gICAgc3Vuc2V0LmlubmVyVGV4dCA9IGBMYXRpdHVkZTogJHtkYXRhLmNvb3JkLmxhdH1gO1xuICB9KTtcbn1cbmNvdW50cnlEYXRhKCk7XG5cbi8vIFNreSBkZXNjcmlwdGlvblxuZnVuY3Rpb24gc2t5RGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICB9KTtcbn1cbnNreURhdGEoKTtcblxuLy8gV2luZCBkYXRhXG5mdW5jdGlvbiB3aW5kRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICAgIHdpbmQuaW5uZXJUZXh0ID0gYFdpbmQ6ICR7TWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpfSBLbS9oYDtcbiAgfSk7XG59XG5cbndpbmREYXRhKCk7XG5cbmZ1bmN0aW9uIGljb25EYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEud2VhdGhlclswXS5pY29uKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRJbWdcIik7XG4gICAgY29uc3QgaWNvbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uLWltZ1wiKTtcbiAgICBpY29uSW1hZ2Uuc3JjID0gYGljb25zLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG5cbiAgICBpZiAoZGF0YS53ZWF0aGVyWzBdLmljb24gPT09IFwiMDFkXCIpIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcImltYWdlcy9zdW5ueWRheTIuanBnXCI7XG4gICAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwNG5cIikge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL2Nsb3VkeW5pZ2h0LmpwZ1wiO1xuICAgIH0gZWxzZSBpZiAoZGF0YS53ZWF0aGVyWzBdLmljb24gPT09IFwiMDNkXCIpIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcImltYWdlcy9jbG9keWRheS5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjAzblwiKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCJpbWFnZXMvY2xvdWR5bmlnaHQuanBnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjEwZFwiIHx8XG4gICAgICBkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwOWRcIlxuICAgICkge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL3JhaW5kYXkuanBnXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjEwblwiIHx8XG4gICAgICBkYXRhLndlYXRoZXJbMF0uaWNvbiA9PT0gXCIwOW5cIlxuICAgICkge1xuICAgICAgYmFja2dyb3VuZEltYWdlLnNyYyA9IFwiaW1hZ2VzL3JhaW5uaWdodC5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjAxblwiKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCJpbWFnZXMvY2xlYXJuaWdodC5qcGdcIjtcbiAgICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlclswXS5pY29uID09PSBcIjAyblwiKSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCJpbWFnZXMvY2xvdWR5bmlnaHQuanBnXCI7XG4gICAgfVxuICB9KTtcbn1cblxuaWNvbkRhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==