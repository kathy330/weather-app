import React from 'react'
import './WeatherBodyRight.scss'
import WeatherForcastEachDay from './WeatherForcastEachDay'

class WeatherBodyRight extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
           <div className="weather__body--right">
                <ul className="weather__forcast">
                    {this.props.forcast.map((eachDay, index ) => {     
                        // Return the element. Also pass key     
                        return (<WeatherForcastEachDay key={index}
                        date={eachDay.dt} temp={eachDay.temp.day}
                        weather={eachDay.weather}/>) 
                    })}
                </ul>
            </div>
        )
    }
}

export default WeatherBodyRight