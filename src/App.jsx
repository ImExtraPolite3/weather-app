import { useState, useEffect } from 'react';

function App() {
  const [getApi, setApi] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=London'
    )
      .then((response) => response.json())
      .then((json) => setApi(json))
      .catch((error) => console.log(error));
  });

  return <>{getApi !== null && <p>{getApi.location.name}</p>}</>;
}

export default App;
