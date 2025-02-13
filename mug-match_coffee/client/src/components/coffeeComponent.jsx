import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Coffee = () => {
  const [coffeeImage, setCoffeeImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await axios.get('https://coffee.alexflipnote.dev/coffee');
        setCoffeeImage(response.data.file); 
        setLoading(false);
      } catch (err) {
        setError('Failed to load coffee data');
        setLoading(false);
      }
    };
    fetchCoffee();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <img src={coffeeImage} alt="Random Coffee" />
    </div>
  );
};

export default Coffee;
