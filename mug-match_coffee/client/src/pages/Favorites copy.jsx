import React from 'react';
import GradientBackground from '../components/GradientBackground';

const Favorites = () => {
    return (
        <GradientBackground>
            <div className="text-center text-white text-3xl font-bold mt-6">Your Favorites</div>
            <p className="text-center text-white mt-4 italic">Save and view your favorite coffee drinks and shops!</p>
        </GradientBackground>
    );
};

export default Favorites;