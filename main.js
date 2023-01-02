/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9QnVjaGFyZXN0JkFQUElEPTYyYWI0NTcyMzNiOGM2OGU5NGVmNDRlOWI3YmU4ODJkJnVuaXRzPW1ldHJpY1wiXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBUZW1wZXJhdHVyZXNcbiAgICBjb25zb2xlLmxvZyhkYXRhLm1haW4pO1xuICAgIC8vIGRhdGEubWFpbi50ZW1wXG4gICAgLy8gZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICAvLyBkYXRhLm1haW4udGVtcF9taW5cbiAgICAvLyBkYXRhLm1haW4udGVtcF9tYXhcbiAgICAvLyBkYXRhLm1haW4ucHJlc3N1cmVcbiAgICAvLyBkYXRhLm1haW4uaHVtaWRpdHlcblxuICAgIC8vIE5hbWVcbiAgICBjb25zb2xlLmxvZyhkYXRhLm5hbWUpO1xuXG4gICAgLy8gU3lzXG4gICAgY29uc29sZS5sb2coZGF0YS5zeXMpO1xuICAgIC8vIGRhdGEuc3lzLmNvdW50cnlcbiAgICAvLyBkYXRhLnN5cy5zdW5yaXNlIC0gY29udmVydCB0byBuZXcgRGF0ZSgpXG4gICAgLy8gZGF0YS5zeXMuc3Vuc2V0IC0gY29udmVydFxuXG4gICAgLy8gU2t5IHN0YXR1c1xuICAgIGNvbnNvbGUubG9nKGRhdGEud2VhdGhlclswXSk7XG4gICAgLy8gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG5cbiAgICAvLyBXaW5kXG4gICAgY29uc29sZS5sb2coZGF0YS53aW5kKTtcbiAgICAvLyBkYXRhLndpbmQuc3BlZWRcbiAgICAvLyBkYXRhLndpbmQuZGVnXG5cbiAgICAvLyBDb29yZG9uYXRlc1xuICAgIGNvbnNvbGUubG9nKGRhdGEuY29vcmQpO1xuICAgIC8vIGRhdGEuY29vcmQubG9uXG4gICAgLy8gZGF0YS5jb29yZC5sYXRcbiAgfSk7XG59XG5hRGF0YSgpO1xuXG4vLyBUZW1wZXJhdHVyZXNcbmZ1bmN0aW9uIHRlbXBEYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vIGRhdGEubWFpbi50ZW1wXG4gICAgLy8gZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICAvLyBkYXRhLm1haW4udGVtcF9taW5cbiAgICAvLyBkYXRhLm1haW4udGVtcF9tYXhcbiAgICAvLyBkYXRhLm1haW4ucHJlc3N1cmVcbiAgICAvLyBkYXRhLm1haW4uaHVtaWRpdHlcbiAgfSk7XG59XG50ZW1wRGF0YSgpO1xuXG4vLyBDaXR5IG5hbWVcbmZ1bmN0aW9uIGNpdHlOYW1lRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigoZGF0YSkgPT4ge1xuICAgIC8vIGRhdGEubmFtZVxuICB9KTtcbn1cbmNpdHlOYW1lRGF0YSgpO1xuXG4vLyBDb3VudHJ5IFN1bnJpc2UgU3Vuc2V0XG5mdW5jdGlvbiBjb3VudHJ5RGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyBkYXRhLnN5cy5jb3VudHJ5XG4gICAgLy8gZGF0YS5zeXMuc3VucmlzZSAtIGNvbnZlcnQgdG8gbmV3IERhdGUoKVxuICAgIC8vIGRhdGEuc3lzLnN1bnNldCAtIGNvbnZlcnRcbiAgfSk7XG59XG5jb3VudHJ5RGF0YSgpO1xuXG4vLyBTa3kgZGVzY3JpcHRpb25cbmZ1bmN0aW9uIHNreURhdGEoKSB7XG4gIGdldFdlYXRoZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gIH0pO1xufVxuc2t5RGF0YSgpO1xuXG4vLyBXaW5kIGRhdGFcbmZ1bmN0aW9uIHdpbmREYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vIGRhdGEud2luZC5zcGVlZFxuICAgIC8vIGRhdGEud2luZC5kZWdcbiAgfSk7XG59XG5cbndpbmREYXRhKCk7XG5cbi8vIENvb3Jkb25hdGVzIGRhdGFcbmZ1bmN0aW9uIGNvb3Jkb25hdGVzRGF0YSgpIHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyBkYXRhLmNvb3JkLmxvblxuICAgIC8vIGRhdGEuY29vcmQubGF0XG4gIH0pO1xufVxuY29vcmRvbmF0ZXNEYXRhKCk7XG5cbmZ1bmN0aW9uIGljb25EYXRhKCkge1xuICBnZXRXZWF0aGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vIGRhdGEud2VhdGhlclswXS5pY29uXG4gIH0pO1xufVxuXG5pY29uRGF0YSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9