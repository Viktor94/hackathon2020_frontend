import React, { useState } from 'react';
import './Booking.css';
import AuthService from '../../Services/user.service';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Booking = () => {
    const currentUser = AuthService.getCurrentUser()

    const [selectedDate, setSelectedDate] = useState('')
    
    const handleSelectedDay = (day) => {
        let date = new Date(day);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let correctDateFormat = dt + '/' + month + '/' + year
        console.log(correctDateFormat)
        setSelectedDate({ selectedDay: day })
        // console.log(selectedDate)
    }

    return (
        <div className='booking-container'>
            <div className='daypicker-main'>
            {selectedDate.selectedDay ? (
                <h4>You selected {selectedDate.selectedDay.toLocaleDateString()}</h4>
            ) : (
                    <h4>Please select a day.</h4>
                )}
            <DayPicker onDayClick={handleSelectedDay} />       
        </div>            
            <div className='usage-bar'>
                <h5>7/10 desks are booked for this date</h5>
            </div>
            <button className='book-date-button'>Book this date</button>
            <p>{ currentUser.token.substring(0, 10) }</p>
            <p>{ currentUser.userName }</p>
        </div>
    )
}

export default Booking
