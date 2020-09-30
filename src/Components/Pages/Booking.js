import React, { useEffect, useState } from 'react';
import './Booking.css';
import AuthService from '../../Services/user.service';
import OfficeService from '../../Services/office.service';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Booking = () => {
    const currentUser = AuthService.getCurrentUser();
    const [selectedDate, setSelectedDate] = useState("");
    const [usersInOffice, setUsersInOffice] = useState("");

    const handleSelectedDay = (day) => {
        setSelectedDate({ selectedDay: day })
        console.log(selectedDate.selectedDay)
    }

    const checkDate = (e) => {
        e.preventDefault();
        OfficeService.checkOfficeUse(selectedDate.selectedDay.toLocaleDateString())
            .then((response) => {
                console.log(response)
            }, (error) => {
                return error
            })
    };

    // useEffect(() => {
    //     handleSelectedDay()
    // }, [correctDateFormat])

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
            <button className='book-date-button' onClick={checkDate} >Book this date</button>
            <p>{currentUser.token.substring(0, 10)}</p>
            <p>{currentUser.userName}</p>
        </div>
    )
}

export default Booking
