import React, { useEffect, useState } from 'react';
import '../index.css';


const profile = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
      const decoded = jwt.decode(token);
      setUsername(decoded?.username || 'Guest');
    } catch (error){
      console.error('Error decoding token', error);
    }
  }
  }, []);

    return(
  <div>
    <h1>{username}</h1>
  </div>
    )
}

export default profile;