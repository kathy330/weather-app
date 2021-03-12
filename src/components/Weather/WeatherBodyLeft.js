import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// class WeatherBodyLeft extends React.Component{
const WeatherBodyLeft = (props) =>{
    return(
        <div className="weather__body--left">
            <h3><FontAwesomeIcon icon={faTwitter}/>Twitter Feed</h3>
            <ul className="media">
                <li>
                    <span className="media__avatar"><FontAwesomeIcon icon={faUser}/></span>
                    <span className="media__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </li>
                <li>
                    <span className="media__avatar"><FontAwesomeIcon icon={faUser}/></span>
                    <span className="media__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </li>
            </ul>
            <div className="pagination">NEXT <FontAwesomeIcon icon={faCaretRight}/></div>
        </div>
    )
}

export default WeatherBodyLeft