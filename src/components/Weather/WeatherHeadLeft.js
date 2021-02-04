import React from 'react'
import './WeatherHeadLeft.scss'
class WeatherHeadLeft extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="weather__head--left">
                <span className="current__temp">{this.props.curTemp}°</span>
                <span className="current__status">{this.props.weatherDesc}</span>
                <ul className="current__details"> 
                    <li className="current__details--style">
                        <p>Humidity </p>
                        <p className="current__details--small">{this.props.humidity}%</p>
                    </li>
                    <li className="current__details--style">
                        <p>Wind </p>
                        <p className="current__details--small">{this.props.wind} m/s</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default WeatherHeadLeft