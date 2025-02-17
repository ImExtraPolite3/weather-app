import { useState, useEffect } from 'react';

function App() {
  const [getApi, setApi] = useState(null);
  const [locationText, setLocationText] = useState('');
  const [getLocation, setLocation] = useState('new york');

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a9fa1babbb44465cbd753452242606&q=${getLocation}`
    )
      .then((response) => response.json())
      .then((json) => setApi(json))
      .catch((error) => console.log(error));
  });

  const HourlyInfo = ({ time }) => {
    return time.map((info, index) => {
      return <p key={index}>{info.time}</p>;
    });
  };

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
            <h1>{getApi.current.temp_f}</h1>
            <p>{getApi.location.name}</p>
            <HourlyInfo time={getApi.forecast.forecastday[0].hour} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
