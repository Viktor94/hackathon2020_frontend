import React from 'react';
import { Switch, Route } from "react-router-dom";
import { KeepAlive } from 'react-keep-alive';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/Pages/Login';
import Booking from './Components/Pages/Booking';
import Bookings from './Components/Pages/Bookings';
import Canteen from './Components/Pages/Canteen';



function App() {

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/home'>
          <Navbar />
          <KeepAlive name='calendar'>
            <Booking />
          </KeepAlive>
        </Route>
        <Route exact path='/bookings'>
          <Navbar />
          <KeepAlive name='bookings'>
            <Bookings />
          </KeepAlive>
        </Route>
        <Route exact path='/canteen'>
          <Navbar />
          <KeepAlive name='canteen'>
            <Canteen />
          </KeepAlive>
        </Route>
      </Switch>
    </div>
  );
}

export default App;