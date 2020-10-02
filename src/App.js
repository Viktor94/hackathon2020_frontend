import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/Pages/Login';
import Booking from './Components/Pages/Booking';
import Bookings from './Components/Pages/Bookings';
import Canteen from './Components/Pages/Canteen';

function App() {

  return (
    <div className='App'>
      <CacheSwitch>
        <Route exact path='/'>
          <Login />
        </Route>
        <CacheRoute exact path='/home'>
          <Navbar />
            <Booking />
        </CacheRoute>
        <CacheRoute exact path='/bookings' >
          <Navbar />
            <Bookings />
        </CacheRoute>
        <CacheRoute exact path='/canteen'>
          <Navbar />
            <Canteen />
        </CacheRoute>
      </CacheSwitch>
    </div>
  );
}

export default App;