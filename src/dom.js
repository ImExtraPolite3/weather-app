import searchInfo from "./getInfo";

function getInfo() {
  const user = document.getElementById('user');
  const submit = document.querySelector('.submit');

  searchInfo('new york');
  submit.addEventListener('click', (event) => {
    if (user.value === '') {
      event.preventDefault();
    } 
    showLoading();
    searchInfo(user.value);
    user.value = '';
    showAllInfo();
  });
}

function showLoading() {
  const info = document.querySelector('.all-info');
  const loading = document.querySelector('.loading');

  info.classList.add('hide');
  loading.classList.remove('hide');
}

function showAllInfo() {
  const info = document.querySelector('.all-info');
  const loading = document.querySelector('.loading');

  info.classList.remove('hide');
  loading.classList.add('hide');
}

function displayLocationName(grabLocationName) {
  const location = document.querySelector('.location-name');

  location.textContent = grabLocationName;
}

function displayLocalTime(grabTime) {
  const time = document.querySelector('.local-time');

  time.textContent = 'Local time: ' + grabTime;
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
    const eachForecastTime = document.createElement('p');
    eachForecastTime.classList.add('forecast-time');
    const degreeContainer = document.createElement('div');
    const eachForecastImg = document.createElement('img');
    eachForecastImg.classList.add('forecast-img');
    const eachForecastDegree = document.createElement('h2');
    eachForecastDegree.classList.add('forecast-degree');
    all_forecast.appendChild(eachForecast);
    eachForecast.appendChild(eachForecastTime);
    eachForecast.appendChild(degreeContainer);
    degreeContainer.appendChild(eachForecastDegree);
    degreeContainer.appendChild(eachForecastImg);
  }
}

function grabForecasts(grabForecastDates, grabForecastImg, grabForecastDegree, num) {
  const allForecastTime = document.querySelectorAll('.forecast-time');
  const allForecastImg = document.querySelectorAll('.forecast-img');
  const allForecastDegree = document.querySelectorAll('.forecast-degree');

  allForecastTime[num].textContent = grabForecastDates;
  allForecastImg[num].src = grabForecastImg;
  allForecastDegree[num].textContent = grabForecastDegree + '°F';
}

export { getInfo, displayLocationName, displayLocalTime, displayDegreeInfo, displayFeelsLike, createAllForecastDiv, grabForecasts };