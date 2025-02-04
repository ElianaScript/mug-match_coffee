import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/explore';
import Post from './pages/post';
import Profile from './pages/profile';
import Quiz from './pages/quiz';
import NavTabs from './components/navtabs';
import './index.css';

const App = () => {
  return  (
    <>
         <NavTabs />
         <Routes>
            <Route path='/' element={<Explore/>} />
            <Route path='/post' element={<Post/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/quiz' element={<Quiz/>} />
    </Routes>
    </>
  );
};

export default App;