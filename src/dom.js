import searchInfo from "./getInfo";

function getInfo() {
  const user = document.getElementById('user');
  const submit = document.querySelector('.submit');

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

  degree.textContent = grabDegree;
  weatherImg.src = grabWeatherImg;
  weather.textContent = grabWeather; 
}

export { getInfo, displayLocationName, displayLocalTime, displayDegreeInfo };