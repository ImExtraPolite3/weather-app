import { displayDegreeInfo, displayFeelsLike, displayLocalTime, displayLocationName } from "./dom";

export default async function searchInfo(location) {
  const getInfo = await fetch('https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=' + location, {mode: 'cors'})
  const info = await getInfo.json();
  const test = 0;

  displayLocationName(`${info.location.name}, ${info.location.country}`);
  displayLocalTime(info.location.localtime);
  displayDegreeInfo(info.current.temp_f, info.current.condition.icon, info.current.condition.text);
  displayFeelsLike(info.current.feelslike_f);
  for (let i = 0; i < 24; i++) {
    console.log(info.forecast.forecastday[0].hour[i].time);
  }
}