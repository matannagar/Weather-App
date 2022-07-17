import React from 'react'
import image from '../assets/logo.jpg'

function Logo() {
    return (
        <div className="logo">
            <img alt="logo" src={image} height={100} width={150} />
        </div>
    )
}

export default Logo
