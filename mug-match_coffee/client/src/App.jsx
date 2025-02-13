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
import MapComponent from './components/mapComponent';
import './index.css';

function App() {
  return  (
    <>
      <Navbar />
    <Routes>
            <Route path='/landingpage' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/quiz' element={<CoffeeQuiz />} />
            <Route path='/shops' element={<CoffeeShops />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
    </Routes>
    </>
  );
};

export default App;