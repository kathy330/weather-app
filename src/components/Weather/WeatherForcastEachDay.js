import React from 'react'
import './WeatherForcastEachDay.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
class WeatherForcastEachDay extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        const dt_timestamp = this.props.date
        const date = new Date(dt_timestamp * 1000).toString()
        const dayOfWeek = date.split(' ')[0]
        const weather = this.props.weather[0]['main']
        return(
            <li className="forcast">
                <span className="forcast__day">{dayOfWeek}</span>
                <span className="forcast__icon"><FontAwesomeIcon icon={faSun}/></span>
                <span className="forcast__temperature">{this.props.temp}°</span>
                <span className="forcast__weather">{weather}</span>
            </li>
        )
    }
}

export default WeatherForcastEachDay