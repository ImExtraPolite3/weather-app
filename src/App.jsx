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
  }, [getLocation]);

  const HourlyInfo = ({ time }) => {
    const currentTime = new Date().toLocaleString('en-GB');

    let filtered = time
      .map((info) => info.time)
      .filter((newArray) => newArray > '2025-02-19 02:00');

    console.log(currentTime);
    console.log(filtered);

    // return time.map((info, index) => {
    //   return (
    //     <div className="each-time" key={index}>
    //       <p>{info.time}</p>
    //       <div>
    //         <h3>{info.temp_f}°</h3>
    //         <img src={info.condition.icon} alt="" />
    //       </div>
    //     </div>
    //   );
    // }).filter((newInfo) => {
    // });
  };

  return (
    <>
      {getApi !== null && (
        <div className="container">
          <div className="header">
            <h1>Weather App</h1>
            <div className="search">
              <input
                type="text"
                onChange={(e) => setLocationText(e.target.value)}
              />
              <button onClick={() => setLocation(locationText)}>search</button>
            </div>
          </div>
          <div className="content">
            <div className="current-info">
              <h1>{getApi.current.temp_f}°</h1>
              <p>{getApi.location.name}</p>
            </div>
            <div className="future-info">
              <HourlyInfo time={getApi.forecast.forecastday[0].hour} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
