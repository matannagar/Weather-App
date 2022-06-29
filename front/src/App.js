import React, { useState } from 'react'
import image from './assets/logo.jpg'

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  /*
    Search function is activated either by clicking enter or clicking the search button.
    evt is a type of event that we can check before proceeding with accessing our Node.js server.
    We are extracting from the server the current weather information and placing it inside 'weather' variable.
    we then reset the query to be "" again.
  */
  const search = evt => {
    if (query !== '') {
      if (evt.key === "Enter" || evt.type === "click") {
        // If you want to do it locally: ``http://localhost:3001/getWeatherCity/?city=${query}``
        fetch(`https://weatherapplication10.herokuapp.com/getWeatherCity?city=${query}`,
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
          })
      }
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
        {/* LEFT SIDE */}
        <div className="split left">
          {/* logo */}
          <img alt="logo" src={image} height={100} width={150} />
          {/* introduction paragarph */}
          <div className="intro">
            Use our weather app to see the weather around the world
          </div>
          {/* search bar */}
          <div className="search-box">
            <input type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            {/* search button */}
            <button id="check"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onClick={search}>Check</button>
          </div>
          {(typeof weather.location !== "undefined") ? (
            <div className="bottomPage">
              <b>Latitude:</b> {weather.location.lat}<br />
              <b>Longitude:</b> {weather.location.lon}<br />
              <b>Accurate to:</b> {weather.location.localtime}
            </div>) : ("")}

        </div>
        {/* left-side */}
        {/* RIGHT SIDE */}
        <div className="split right">
          {/*
          check if there is a response, if not leave the page empty
           */}
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
                <img alt="logo" src={weather.current.condition.icon} height={100} width={150} />
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
        {/* right-side */}
      </main>

    </div >
  );
}

export default App;
