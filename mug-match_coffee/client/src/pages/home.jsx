import React, { useState, useEffect } from 'react';
import '../index.css';

const home = () => {
    const [coffeeOfDay, setCoffeeOfDay] = useState(null);
    const apiUrl = import.meta.VITE_TOKEN_HERE_HOME;

    useEffect(() => {
        const fetchCoffee = async () => {
            try {
                const response = await fetch (apiUrl)
                const data = await response.json();
                setCoffeeOfDay(data);
            } catch (error) {
                console.error('Error fetching coffee of the day', error);
            }
        };
        fetchCoffee();
    }, [apiUrl]);

    return (
        <div>
            <h1>-`✮´- Coffee of the day -`✮´- </h1>
        </div>
    )
}

export default home;