import './style.css';

async function weatherInfo(location) {
  const getInfo = await fetch('https://api.weatherapi.com/v1/current.json?key=a9fa1babbb44465cbd753452242606&q=' + location, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.location.name);
    });
}

function getLocationName() {
  const location = prompt('what location?:');

  weatherInfo(location);
}

getLocationName();

