import React from 'react';
import GradientBackground from '../components/GradientBackground';

const CoffeeShops = () => {
    return (
        <GradientBackground>
            <div className="text-center text-white text-3xl font-bold mt-6">Nearby Coffee Shops</div>
            <p className="text-center text-white mt-4 italic">Find the best coffee spots near you!</p>
        </GradientBackground>
    );
};

export default CoffeeShops;