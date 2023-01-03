/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0EseUNBQXlDLGlDQUFpQztBQUMxRTtBQUNBLHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQSxxQ0FBcUMsK0JBQStCO0FBQ3BFO0FBQ0Esc0NBQXNDLCtCQUErQjtBQUNyRTtBQUNBLHNDQUFzQywrQkFBK0I7QUFDckUsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQSxvQ0FBb0MsZUFBZTtBQUNuRCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0QsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRCxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPU5pZ2VyaWEmQVBQSUQ9NjJhYjQ1NzIzM2I4YzY4ZTk0ZWY0NGU5YjdiZTg4MmQmdW5pdHM9bWV0cmljXCJcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuXCIpO1xuLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hJbnB1dFwiKTtcbi8vICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUudmFsdWUpO1xuLy8gfSk7XG5cbi8vIFRlbXBlcmF0dXJlc1xuZnVuY3Rpb24gdGVtcERhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgICB0ZW1wLmlubmVyVGV4dCA9IGBUZW1wOiAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXApfcKwQ2A7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc2xpa2VcIik7XG4gICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwQ2A7XG4gICAgY29uc3QgdGVtcG1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcG1pblwiKTtcbiAgICB0ZW1wbWluLmlubmVyVGV4dCA9IGBNaW4gdGVtcDogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbil9wrBDYDtcbiAgICBjb25zdCB0ZW1wbWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wbWF4XCIpO1xuICAgIHRlbXBtYXguaW5uZXJUZXh0ID0gYE1pbiB0ZW1wOiAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KX3CsENgO1xuICAgIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcbiAgICBwcmVzc3VyZS5pbm5lclRleHQgPSBgUHJlc3N1cmU6ICR7TWF0aC5yb3VuZChkYXRhLm1haW4ucHJlc3N1cmUpfWA7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuICAgIGh1bWlkaXR5LmlubmVyVGV4dCA9IGBIdW1pZGl0eTogJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSl9JWA7XG4gIH0pO1xufVxudGVtcERhdGEoKTtcblxuLy8gQ2l0eSBuYW1lXG5mdW5jdGlvbiBjaXR5TmFtZURhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKTtcbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG4gIH0pO1xufVxuY2l0eU5hbWVEYXRhKCk7XG5cbi8vIENvdW50cnkgU3VucmlzZSBTdW5zZXRcbmZ1bmN0aW9uIGNvdW50cnlEYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bnJpc2VcIik7XG4gICAgc3VucmlzZS5pbm5lclRleHQgPSBgTG9uZ2l0dXRlOiAke2RhdGEuY29vcmQubG9ufWA7XG4gICAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRcIik7XG4gICAgc3Vuc2V0LmlubmVyVGV4dCA9IGBMYXRpdHVkZTogJHtkYXRhLmNvb3JkLmxhdH1gO1xuICB9KTtcbn1cbmNvdW50cnlEYXRhKCk7XG5cbi8vIFNreSBkZXNjcmlwdGlvblxuZnVuY3Rpb24gc2t5RGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICB9KTtcbn1cbnNreURhdGEoKTtcblxuLy8gV2luZCBkYXRhXG5mdW5jdGlvbiB3aW5kRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyBkYXRhLndpbmQuc3BlZWRcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICAgIHdpbmQuaW5uZXJUZXh0ID0gYFdpbmQ6ICR7TWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpfSBLbS9oYDtcbiAgfSk7XG59XG5cbndpbmREYXRhKCk7XG5cbmZ1bmN0aW9uIGljb25EYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vIGRhdGEud2VhdGhlclswXS5pY29uXG4gICAgY29uc3QgaWNvbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uLWltZ1wiKTtcbiAgICBpY29uSW1hZ2Uuc3JjID0gYGljb25zLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gIH0pO1xufVxuXG5pY29uRGF0YSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9