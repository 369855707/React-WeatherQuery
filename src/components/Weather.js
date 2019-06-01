import React from 'react'

const Weather = (props) => {
    return (
        <div className="weather__info">
            {props.city && props.country && <p className="weather__key">location : {props.city}, {props.country}</p>}
            {props.temperature && <p className="weather__key">temperature : {props.temperature}</p>}
            {props.humidity && <p className="weather__key">humidity : {props.humidity}</p>}
            {props.description && <p className="weather__key">description : {props.description}</p>}
            {props.error && <p className="weather__key">error : {props.error}</p>}
        </div>
    )
}
export default Weather;