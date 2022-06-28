import React, { useState } from 'react'
import image from './assets/logo.jpg'

const api = {
  key: "f0590670e28f43129d763516222806",
  base: "https://api.weatherapi.com/v1/"
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = evt => {
    console.log(evt)
    if (evt.key === "Enter" || evt.type === "click") {
      fetch(`http://localhost:3001/getWeatherInfo/city?city=${query}`,
        {
          method: "GET",
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
          })
        })
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery("")
          console.log(result.location)
        })
    }
  }

  const dateGenerator = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="split left">
          <img alt="logo" src={image} height={100} width={150} />
          <div className="intro">
            Use our weather app to see the weather around the world
          </div>

          <div className="search-box">
            <input type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            <button id="check"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onClick={search}>Check</button>
          </div>
        </div>
        <div className="split right">
          {(typeof weather.location != "undefined") ? (
            <div className="outer-box">
              <div className="location-box">
                <div className="location">{weather.location.name}</div>
                <div className="country">{weather.location.country}</div>
                <div className="date">{dateGenerator(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {weather.current.temp_c}°c
                </div>
                <div className="weather">{weather.current.condition.text}</div>
                <div className="row">
                  <div className="col">
                    Percipation<br />
                    {(weather.current.percip_mm !== 0.0) ? (<b>0 mm</b>) : (<b>{weather.current.percip_mm} mm</b>)}
                  </div>
                  <div className="col">
                    Humidity<br />
                    <b>{weather.current.humidity}%</b>
                  </div>
                  <div className="col">
                    Wind <br />
                    <b>{weather.current.wind_kph} km/h</b>
                  </div>
                </div>
                {/* + weather.current.percip_mm + } */}
              </div>
            </div>
          ) : ('')}
        </div>
      </main >

    </div >
  );
}

export default App;
