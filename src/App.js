import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/Pages/Login';
import Booking from './Components/Pages/Booking';
import Bookings from './Components/Pages/Bookings';

function App() {

  // let visibility = {visibility: 'hidden'};
  let visibility = null;

  // const [ visibility, setVisibility ] = useState({ visibility: 'hidden' })
  // setVisibility({ visibility: null })
  // const showNavbar = () => {
  //   setVisibility({ visibility: null })
  // }

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Navbar visibility={visibility} />
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Booking} />
          <Route exact path='/bookings' component={Bookings} />
        </Switch>
      </div>
    </Router>

    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar visibility={visibility}/>
    //     <Route exact path='/' component={Login}  />
    //     <Route exact path='/home' component={Booking} />
    //     <Route exact path='/bookings' component={Bookings} />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
