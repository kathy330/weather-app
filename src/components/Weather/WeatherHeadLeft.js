const WeatherHeadLeft = (props) => {
    return(
        <div className="weather__head--left">
            <span className="current__temp">{props.curTemp}°</span>
            <span className="current__status">{props.weatherDesc}</span>
            <ul className="current__details"> 
                <li className="current__details--style">
                    <p>Humidity </p>
                    <p className="current__details--small">{props.humidity}%</p>
                </li>
                <li className="current__details--style">
                    <p>Wind </p>
                    <p className="current__details--small">{props.wind} m/s</p>
                </li>
            </ul>
        </div>
    );
}

export default WeatherHeadLeft