import React from 'react';
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <GradientBackground>
      <div className="text-center text-white text-4xl font-bold mt-10">Welcome to Mug Match Coffee</div>
      <p className="text-center text-white mt-4 italic">Find your perfect coffee match!</p>
      <div className="flex justify-center mt-6 space-x-6">
        <Button text="Sign Up" onClick={() => navigate('/signup')} />
        <Button text="Log In" onClick={() => navigate('/login')} />
      </div>
    </GradientBackground>
  );
};

export default LandingPage;