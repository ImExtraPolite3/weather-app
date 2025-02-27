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
    const currentTime = new Date();
    const timeToString = `${currentTime.getFullYear()}-0${
      currentTime.getUTCMonth() + 1
    }-${currentTime.getDate()} ${
      currentTime.getHours() - 1
    }:${currentTime.getMinutes()}`;

    return time
      .map((info) => info)
      .filter((newArray) => newArray.time > timeToString)
      .map((newInfo, index) => {
        return (
          <div className="each-time" key={index}>
            <p>{newInfo.time}</p>
            <div>
              <h3>{newInfo.temp_f}°</h3>
              <img src={newInfo.condition.icon} alt="" />
            </div>
          </div>
        );
      });
  };

  return (
    <>
      {getApi !== null && (
        <div className="container">
          <div className="all-content">
            <div className="header">
              <h1>Weather App</h1>
              <div className="search">
                <input
                  type="text"
                  onChange={(e) => setLocationText(e.target.value)}
                />
                <button
                  onClick={() => {
                    setLocation(locationText);
                  }}
                >
                  search
                </button>
              </div>
            </div>
            <div className="content">
              <div className="current-info">
                {/* <p>{locationText}</p> */}
                <h1>{getApi.current.temp_f}°</h1>
                <p>{getApi.location.name}</p>
              </div>
              <div className="future-info">
                <HourlyInfo time={getApi.forecast.forecastday[0].hour} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
