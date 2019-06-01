import React, { Component } from 'react'

class WeatherClass extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>location : {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>temperature : {this.props.temperature}</p>}
                {this.props.humidity && <p>humidity : {this.props.humidity}</p>}
                {this.props.description && <p>description : {this.props.description}</p>}
                {this.props.error && <p>error : {this.props.error}</p>}
            </div>
        )
    }
}

export default WeatherClass