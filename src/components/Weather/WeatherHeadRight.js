import React from 'react'
import './WeatherHeadRight.scss'

class WeatherHeadRight extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="weather__head--right">
                <p className="weather__city">{this.props.city}</p>
            </div>
        )
    }
}

export default WeatherHeadRight