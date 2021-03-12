import WeatherForcastEachDay from './WeatherForcastEachDay'

const WeatherBodyRight = (props) => {
    return(
        <div className="weather__body--right">
            <ul className="weather__forcast">
                {props.forcast.map((eachDay, index ) => {     
                    // Return the element. Also pass key     
                    return (<WeatherForcastEachDay 
                        key={index}
                        date={eachDay.dt} 
                        temp={eachDay.temp.day}
                        weather={eachDay.weather}/>) 
                })}
            </ul>
        </div>
    )
}

export default WeatherBodyRight