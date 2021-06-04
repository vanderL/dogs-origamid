import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';


import { UserStorage } from './Context/UserContext';
import ProtectedRouter from './Helper/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='login/*' element={<Login />} />
            <ProtectedRouter path ='conta/*' element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
