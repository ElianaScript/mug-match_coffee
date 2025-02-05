import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

const favorites = () => {
    const [coffeeMatch, setCoffeeMatch] = useState(' ');

    useEffect(() => {
        const savedMatch = localStorage.getItem('coffeeMatch');
        if (savedMatch) {
            setCoffeeMatch(savedMatch);
        }
    }, []);

    return (
        <div>
            <h1>I 💗 these Drinks and Shops</h1>
            <p>Click the + to add a new recipe</p>
            <p>Click the 💗 to save a shop</p>
            <p>Click the 🗑️ to delete drinks or shops</p>

            {setCoffeeMatch}
            {coffeeMatch && (
    <div>
        <h2>Quiz Match: {coffeeMatch}</h2>
    </div>
            )}
    <ul>
   
            <Link to='/quiz'>Haven't taken our quiz yet? Click me!💌</Link>
   
    </ul>
</div>
    );
};

export default favorites;