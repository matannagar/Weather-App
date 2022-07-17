import React from 'react'

function Coordinates({ weather }) {
    return (
        <div className="coordinates">
            <b>Latitude:</b> {weather.location.lat}<br />
            <b>Longitude:</b> {weather.location.lon}<br />
            <b>Accurate to:</b> {weather.location.localtime}
        </div>
    )
}

export default Coordinates
