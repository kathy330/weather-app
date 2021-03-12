import {Sun, Rain, Cloud, Snow} from './Icons'

const iconSwitch = (props) =>{
    switch(props) {
        case 'Rain':
            return Rain;
        case 'Snow':
            return Snow;
        case 'Clear':
            return Sun;
        case 'Clouds':
            return Cloud;
        default:
            return Cloud;
    }
}

const WeatherForcastEachDay = (props) =>{
    const dt_timestamp = props.date
    const date = new Date(dt_timestamp * 1000).toString()
    const dayOfWeek = date.split(' ')[0]
    const weatherIcon = iconSwitch(props.weather[0]['main'])
    const weather = props.weather[0]['main']
    
    return(
        <li className="forcast">
            <span className="forcast__day">{dayOfWeek}</span>
            <span className="forcast__icon">{weatherIcon}</span>
            <span className="forcast__temperature">{props.temp}°</span>
            <span className="forcast__weather">{weather}</span>
        </li>
    )
}

export default WeatherForcastEachDay