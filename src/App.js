import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/Pages/Login';
import Booking from './Components/Pages/Booking';
import Bookings from './Components/Pages/Bookings';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Navbar />
            <Booking />
          </Route>
          <Route exact path='/bookings'>
            <Navbar />
            <Bookings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <BrowserRouter>
//   <div className="App">
//     <Navbar visibility={visibility}/>
//     <Route exact path='/' component={Login}  />
//     <Route exact path='/home' component={Booking} />
//     <Route exact path='/bookings' component={Bookings} />
//   </div>
// </BrowserRouter>