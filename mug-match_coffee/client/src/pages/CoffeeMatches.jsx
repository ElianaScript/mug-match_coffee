import React from 'react';
import GradientBackground from '../components/GradientBackground';

const CoffeeMatches = () => {
    return (
        <GradientBackground>
            <div className="text-center text-white text-3xl font-bold mt-6">Your Coffee Matches</div>
            <p className="text-center text-white mt-4 italic">Here are your personalized coffee recommendations!</p>
        </GradientBackground>
    );
};

export default CoffeeMatches;