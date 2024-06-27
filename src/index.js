import './style.css';

function test(city_name, country_name) {
  return { city_name, country_name };
}

async function weatherInfo(location) {
  const getInfo = await fetch('https://api.weatherapi.com/v1/current.json?key=a9fa1babbb44465cbd753452242606&q=' + location, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const testSomething = test(response.location.name, response.location.country);

      console.log(testSomething.city_name);
    })
    .catch(() => {
      console.log('please enter city name');
    });
}

function getLocationName() {
  const location = prompt('what location?:');

  weatherInfo(location);
}

getLocationName();

