import React from 'react'

function Location({ weather, dateGenerator }) {
    return (
        <div className="location-box">
            <div className="location">{weather.location.name}</div>
            <div className="country">{weather.location.country}</div>
            <div className="date">{dateGenerator(new Date())}</div>
        </div>
    )
}

export default Location
