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
