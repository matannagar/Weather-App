import React from 'react'

function Details({ weather }) {
    return (
        <div className="info">
            <ul className="nav">
                <li>
                    Percipation<br />
                    {(weather.current.percip_mm !== 0.0) ? (<b>0 mm</b>) : (<b>{weather.current.percip_mm} mm</b>)}
                </li>
                <li>
                    Humidity<br />
                    <b>{weather.current.humidity}%</b>
                </li>
                <li>
                    Wind <br />
                    <b>{weather.current.wind_kph} km/h</b>
                </li>
            </ul>
        </div>
    )
}

export default Details
