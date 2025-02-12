import React, { useState, useEffect } from 'react';
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { retrievePlaces, searchCafes, postCafes } from '../api/mapAPI';
import '../index.css';


const CoffeeShops = () => {
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await retrievePlaces();
                setPlaces(data); 
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };
        fetchPlaces();
    }, []);

    return (
        <GradientBackground>
            <h1 className="text-center text-2xl font-bold my-4">Coffee Shops to Try!</h1>

            {places.length > 0 ? (
                <ul className="text-center">
                    {places.map((place, index) => (
                        <li key={index} className="my-2 p-2 border-b">
                            {place.name} - {place.location}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">Loading coffee shops...</p>
            )}

            <div className="flex justify-center mt-6">
                <Button text="Search Cafés" onClick={() => searchCafes()} />
                <Button text="Post a Café" onClick={() => postCafes()} />
            </div>
        </GradientBackground>
    );
};

export default CoffeeShops;
