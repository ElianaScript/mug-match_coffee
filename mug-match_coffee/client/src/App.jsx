import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage';
import Favorites from './pages/Favorites copy';
import CoffeeShops from './pages/CoffeeShops copy';
import Settings from './pages/ProfileSettings';
import CoffeeQuiz from './pages/CoffeeQuiz';
import Navbar from './components/navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Matches from './pages/CoffeeMatches';
import './index.css';

function App() {
  return  (
    <>
      <Navbar />
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/quiz' element={<CoffeeQuiz />} />
            <Route path='/coffeeshops' element={<CoffeeShops />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/matches' element={<Matches />} />
    </Routes>
    </>
  );
};

export default App;