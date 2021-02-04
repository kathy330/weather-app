import React from 'react'
import './Weather.scss'
import Axios from 'axios'
import WeatherHeadLeft from './WeatherHeadLeft'
import WeatherHeadRight from './WeatherHeadRight'
import WeatherBodyLeft from './WeatherBodyLeft'
import WeatherBodyRight from './WeatherBodyRight'

const API_key = '0ef1aad5c4bd678425b05befd8035017';

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curTemp: '',
            city: this.props.city,
            humidity: '',
            weatherDesc: '',
            wind: '',
            forcast: []
        }
    }

    async componentDidMount() {
        // call API
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_key}&units=metric`;
        const res = await Axios.get(api)
        const {data: { main: { temp, humidity } } } = res
        const {data: { weather: { description } } } = res
        const {data: { wind: { speed } } } = res 
        const {data: { coord: { lat, lon } } } = res 
        const apiForcast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,&appid=${API_key}&units=metric`;
        const resForcast = await Axios.get(apiForcast)
        const {data: { daily } }= resForcast
        this.setState({
            curTemp: temp,
            humidity: humidity,
            weatherDesc: description,
            wind: speed,
            forcast: daily.slice(1,6)
        })
        
    }

    render(){
        return(
            <div className="weather">
                <div className="weather__head">
                    <WeatherHeadLeft curTemp={this.state.curTemp} weatherDesc={this.state.weatherDesc}
                    humidity={this.state.humidity} wind={this.state.wind}/>
                    <WeatherHeadRight city={this.state.city}/>
                </div>
                <div className="weather__body">     
                    <WeatherBodyLeft />
                    <WeatherBodyRight forcast={this.state.forcast}/>
                </div>
            </div>
        )
    }
}

export default Weather