import searchInfo from "./getInfo";

function getInfo() {
  const user = document.getElementById('user');
  const submit = document.querySelector('.submit');

  searchInfo('new york');
  submit.addEventListener('click', () => {
    searchInfo(user.value);
  });
}

function displayLocationName(grabLocationName) {
  const location = document.querySelector('.location-name');

  location.textContent = grabLocationName;
}

function displayLocalTime(grabTime) {
  const time = document.querySelector('.local-time');

  time.textContent = grabTime;
}

function displayDegreeInfo(grabDegree, grabWeatherImg, grabWeather) {
  const degree = document.querySelector('.degree');
  const weatherImg = document.querySelector('.weather-img');
  const weather = document.querySelector('.weather');

  degree.textContent = grabDegree + '°F';
  weatherImg.src = grabWeatherImg;
  weather.textContent = grabWeather; 
}

function displayFeelsLike(grabFeelsLike) {
  const feelLike = document.querySelector('.feels-like');

  feelLike.textContent = 'Feels like: ' + grabFeelsLike + '°F';
}

function createAllForecastDiv() {
  const all_forecast = document.querySelector('.all-forecast');

  for (let i = 0; i < 24; i++) {
    const eachForecast = document.createElement('div');
    eachForecast.classList.add('forecasts');
    all_forecast.appendChild(eachForecast);
  }
}

function grabForecasts() {
  
}

export { getInfo, displayLocationName, displayLocalTime, displayDegreeInfo, displayFeelsLike, createAllForecastDiv };