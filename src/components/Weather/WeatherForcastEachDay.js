import './WeatherForcastEachDay.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
// import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
// import { faCloud } from '@fortawesome/free-solid-svg-icons'
// import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

// const iconSwitch = (elem) =>{
//     switch(elem) {
//         case 'Rain':
//             return '<FontAwesomeIcon icon={faCloud}/>';
//         case 'Snow':
//             return '<FontAwesomeIcon icon={faCloud}/>';
//         case 'Clear':
//             return '<FontAwesomeIcon icon={faCloud}/>';
//         case 'Clouds':
//             return '<FontAwesomeIcon icon={faCloud}/>';
//         default:
//             return '<FontAwesomeIcon icon={faCloud}/>';
//     }
// }

const WeatherForcastEachDay = (props) =>{
    const dt_timestamp = props.date
    const date = new Date(dt_timestamp * 1000).toString()
    const dayOfWeek = date.split(' ')[0]
    // const weatherIcon = iconSwitch(props.weather[0]['main'])
    const weather = props.weather[0]['main']
    
    return(
        <li className="forcast">
            <span className="forcast__day">{dayOfWeek}</span>
            <span className="forcast__icon"><FontAwesomeIcon icon={faSun} /></span>
            <span className="forcast__temperature">{props.temp}°</span>
            <span className="forcast__weather">{weather}</span>
        </li>
    )
}



export default WeatherForcastEachDay