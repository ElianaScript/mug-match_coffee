import React, { useState, useEffect } from 'react';
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { retrieveCoffeePics } from '../api/imagesAPI'; 


const LandingPage = () => {
  const navigate = useNavigate();
  const [coffeePics, setCoffeePics] = useState([]);

  useEffect(() => {
    const fetchCoffeePics = async () => {
      try {
        const data = await retrieveCoffeePics();
        setCoffeePics(data);
      } catch (error) {
        console.error('Error fetching coffee images:', error);
      }
    };

    fetchCoffeePics();
  }, []);

  return (
    <GradientBackground>
      <div className="flex justify-center mt-6 space-x-6">
        {coffeePics.length > 0 ? (
          coffeePics.map((pic, index) => (
            <img
              key={index}
              src={pic.imageUrl}
              alt={`Coffee ${index + 1}`}
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          ))
        ) : (
          <p className="text-white text-center">`✮´- Coffee of the day -`✮´- </p>
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-6">
        <Button text="Sign Up" onClick={() => navigate('/signup')} />
        <Button text="Log In" onClick={() => navigate('/login')} />
      </div>

    </GradientBackground>
  );
};

export default LandingPage;
