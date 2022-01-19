import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Cards =({img,location,locationLink,locationName,date,discription})=>{return(
    <main>
        <img src={img}/>
        <section>
            <div className="location">
                <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                <p>{location}</p>
                <a href={locationLink} >View on Google Maps</a>
            </div>
            <h1>{locationName}</h1>
            <h4>{date}</h4>
            <p>{discription}</p>
        </section>
    </main>
)};




export default Cards;