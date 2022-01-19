import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Data from './Data';
import NavBar from './components/NavBar'
import Cards from './components/Cards.js'


const App =()=>{
    let cards = Data.map((element,index)=>{return(
            <Cards key={index} {...element} />
    )})
    return(
    <>
        <NavBar />
        {cards}
    </>
)};


ReactDOM.render(<App />, document.querySelector('#root'));