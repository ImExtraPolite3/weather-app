import { displayDegreeInfo, displayFeelsLike, displayLocalTime, displayLocationName, grabForecasts } from "./dom";

export default async function searchInfo(location) {
  const getInfo = await fetch('https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=' + location, {mode: 'cors'})
  const info = await getInfo.json();

  try {
    displayLocationName(`${info.location.name}, ${info.location.country}`);
    displayLocalTime(info.location.localtime);
    displayDegreeInfo(info.current.temp_f, info.current.condition.icon, info.current.condition.text);
    displayFeelsLike(info.current.feelslike_f);
    for (let i = 0; i < 24; i++) {
      grabForecasts(info.forecast.forecastday[0].hour[i].time, info.forecast.forecastday[0].hour[i].condition.icon, info.forecast.forecastday[0].hour[i].temp_f, i);
    }
  } catch {
    confirm('Sorry, something went wrong. Please try again');
  }
}