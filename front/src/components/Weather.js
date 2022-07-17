import React from 'react'

function Weather({ weather }) {
    return (
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
    )
}

export default Weather
