import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
const NavBar=()=>{return(
    <nav>
       <FontAwesomeIcon icon={faEarthAfrica} />
       <h5>my future travel journal</h5>
    </nav>
)};
export default NavBar;