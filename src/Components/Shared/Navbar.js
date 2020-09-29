import React from 'react';
import { useHistory } from 'react-router';
import './Navbar.css';

const Navbar = ({ visibility }) => {
    const history = useHistory();

    function navigateToHome() {
        history.push('/home')
    }

    function navigateToMyBookings() {
        history.push('/bookings')
    }

    function logoutUser() {
        history.push('/')
    }

    // let visibility = null;
    // let logedOut = true;
    // if (logedOut) {
    //     visibility = {visibility: 'hidden'}
    // } else {
    //     visibility = null;
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={visibility}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="nav-link" onClick={navigateToHome}>Home <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={navigateToMyBookings}>My bookings</button>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="nav-link" onClick={logoutUser}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
