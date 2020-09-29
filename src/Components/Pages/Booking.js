import React from 'react';
import './Booking.css';
import Daypicker from '../Functions/Daypicker';

const Booking = () => {
    return (
        <div className='booking-container'>
            <Daypicker />
            <div className='usage-bar'>
                <h5>7/10 desks are booked for this date</h5>
            </div>
            <button className='book-date-button'>Book this date</button>
        </div>
    )
}

export default Booking
