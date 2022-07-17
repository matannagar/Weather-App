import React, { useState } from 'react'
import Coordinates from './components/Coordinates'
import Introduction from './components/Introduction'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import Location from './components/Location'
import Weather from './components/Weather'

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
        // If you want to do it locally: `http://localhost:3001/getWeatherCity/?city=${query}`
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
          <Logo />
          <Introduction />
          <SearchBar
            query={query}
            setQuery={setQuery}
            search={search}
          />

          {(typeof weather.location !== "undefined") ? (
            <Coordinates weather={weather} />
          ) : ("")}
        </div>
        {/* left-side */}

        {/* RIGHT SIDE */}
        <div className="split right">
          {/*
          check if there is a response, if not leave the page empty
           */}
          {(typeof weather.location != "undefined") ? (
            <div className="outer-box">
              <Location
                weather={weather}
                dateGenerator={dateGenerator}
              />

              <Weather weather={weather} />
            </div>
          ) : ('')}

        </div>
        {/* right-side */}
      </main>

    </div >
  );
}

export default App;
