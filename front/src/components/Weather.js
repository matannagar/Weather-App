import React from 'react'
import Details from './Details'

function Weather({ weather }) {
    return (
        <div className="weather-box">
            <div className="temp">
                {weather.current.temp_c}°c
            </div>
            <img alt="logo" src={weather.current.condition.icon} height={100} width={150} />

            <div className="weather">{weather.current.condition.text}</div>
            <Details weather={weather} />
            {/* + weather.current.percip_mm + } */}
        </div>
    )
}

export default Weather
