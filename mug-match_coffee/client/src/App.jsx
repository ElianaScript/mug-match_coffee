import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage';
import Favorites from './pages/Favorites copy';
import CoffeeShops from './pages/CoffeeShops copy';
import Profile from './pages/ProfileSettings';
import Quiz from './pages/CoffeeQuiz';
import Navbar from './components/navbar';
import './index.css';

const App = () => {
  return  (
    <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/quiz' element={<CoffeeQuiz />} />
            <Route path='/coffeeshops' element={<CoffeeShops />} />
    </Routes>
    </>
  );
};

export default App;