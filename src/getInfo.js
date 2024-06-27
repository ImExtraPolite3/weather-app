async function currentInfo(location) {
  const getInfo = await fetch('https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=' + location, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(() => {
      console.log('please enter city name');
    });
}

export { currentInfo }