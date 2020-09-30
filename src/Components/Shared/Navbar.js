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
        localStorage.clear();
    }

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
                        <button className="nav-link logout-button" onClick={logoutUser}>Logout
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
