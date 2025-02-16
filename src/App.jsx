import { useState, useEffect } from 'react';

function App() {
  const [getApi, setApi] = useState(null);
  const [locationText, setLocationText] = useState('');
  const [getLocation, setLocation] = useState('London');

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=${getLocation}`
    )
      .then((response) => response.json())
      .then((json) => setApi(json))
      .catch((error) => console.log(error));
  });

  return (
    <>
      {getApi !== null && (
        <div className="container">
          <div className="search">
            <input
              type="text"
              onChange={(e) => setLocationText(e.target.value)}
            />
            <button onClick={() => setLocation(locationText)}>search</button>
          </div>
          <div className="content">
            <p>{getApi.location.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
