import React from 'react';
import '../index.css';
import Coffee from '../assets/coffee.png'
const home = () => {
    return (
        <div>
            <img src={Coffee} alt="coffee" className="image1"/>
            <h1>-`✮´- Coffee of the day -`✮´- </h1>
        </div>
    )
}

export default home;