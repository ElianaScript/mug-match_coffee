import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from './pages/favorites';
import CoffeeShops from './pages/coffeeshops';
import Profile from './pages/profile';
import Quiz from './pages/quiz';
import NavTabs from './components/navtabs';
import './index.css';

const App = () => {
  return  (
    <>
         <NavTabs />
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/post' element={<Favorites/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/coffeeshops' element={<CoffeeShops />} />
    </Routes>
    </>
  );
};

export default App;