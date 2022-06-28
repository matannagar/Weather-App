import React, { useState } from 'react'

const api = {
  key: "f0590670e28f43129d763516222806",
  base: "https://api.weatherapi.com/v1/"
}


function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
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

  const dateBuilder = (d) => {
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
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.location != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.location.name}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {weather.current.temp_c}°c
              </div>
              {/* <div className="weather">{weather.weather[0].main}</div> */}
            </div>
          </div>
        ) : ('')}
      </main>

    </div>
  );
}

export default App;
