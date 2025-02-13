import React, { useState, useEffect } from 'react';
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { retrievePlaces } from '../api/mapAPI';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../index.css';

const CoffeeShops = () => {
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await retrievePlaces();
                if (data) {
                    setPlaces(data); 
                } else {
                    console.warn("No places data retrieved.");
                }
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };
        fetchPlaces();
    }, []);

    const handleSearchCafes = async () => {
        try {
            const data = await searchCafes();
            if (data) {
                setPlaces(data); 
            } else {
                console.warn("No cafes found.");
            }
        } catch (error) {
            console.error("Error searching cafes:", error);
        }
    };

    const handlePostCafes = async () => {
        try {
            const newCafe = {
                name: "New Coffee Spot",
                location: "Unknown",
            };
            const response = await postCafes(newCafe);
            if (response) {
                setPlaces((prevPlaces) => [...prevPlaces, response]); 
            }
        } catch (error) {
            console.error("Error posting a new cafe:", error);
        }
    };

    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 35.021534,
        lng: -80.688171,
    };

    return (
        <GradientBackground>
            <h1 className="text-center text-2xl font-bold my-4">Coffee Shops to Try!</h1>

            {places && places.length > 0 ? (
                <ul className="text-center">
                    {places.map((place, index) => (
                        <li key={index} className="my-2 p-2 border-b">
                            {place.name} - {place.location}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500"></p>
            )}

            <LoadScript googleMapsApiKey={import.meta.env.VITE_TOKEN}>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={() => setMapLoaded(true)}
                >

                {places.map((place, index) => (   
                <Marker
                key={index}
                position={{
                    lat: places.latitude ||center.lat,
                    lng: places.longitude || center.lng,
                }}
                label={places.name}
                />
            ))}
              </GoogleMap>
            </LoadScript>
        </GradientBackground>
    );
};

export default CoffeeShops;
