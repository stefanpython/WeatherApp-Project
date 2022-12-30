/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Bucharest&APPID=62ab457233b8c68e94ef44e9b7be882d&units=metric"
  );
  const weatherData = await response.json();

  console.log(weatherData);
}

getWeather();

// function getWeatherPromise() {
//   const fetchWeather = fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=Bucharest&APPID=62ab457233b8c68e94ef44e9b7be882d&units=metric"
//   );

//   fetchWeather
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response);
//     });
// }

// getWeatherPromise();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1CdWNoYXJlc3QmQVBQSUQ9NjJhYjQ1NzIzM2I4YzY4ZTk0ZWY0NGU5YjdiZTg4MmQmdW5pdHM9bWV0cmljXCJcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufVxuXG5nZXRXZWF0aGVyKCk7XG5cbi8vIGZ1bmN0aW9uIGdldFdlYXRoZXJQcm9taXNlKCkge1xuLy8gICBjb25zdCBmZXRjaFdlYXRoZXIgPSBmZXRjaChcbi8vICAgICBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9QnVjaGFyZXN0JkFQUElEPTYyYWI0NTcyMzNiOGM2OGU5NGVmNDRlOWI3YmU4ODJkJnVuaXRzPW1ldHJpY1wiXG4vLyAgICk7XG5cbi8vICAgZmV0Y2hXZWF0aGVyXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIGdldFdlYXRoZXJQcm9taXNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=