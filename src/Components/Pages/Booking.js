import React, { useEffect, useState } from 'react';
import './Booking.css';
// import AuthService from '../../Services/user.service';
import OfficeService from '../../Services/office.service';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Booking = () => {
    // const currentUser = AuthService.getCurrentUser();
    const [selectedDate, setSelectedDate] = useState("");
    const [bookedUsers, setBookedUsers] = useState([]);

    const handleSelectedDay = (day) => {
        setSelectedDate({ selectedDay: day });
        console.log(selectedDate.selectedDay);
    }

    let freeSpots = bookedUsers.numberOfFreeSpots || 0;
    let totalSpots = 50 || bookedUsers.officeCapacity

    const checkDate = async () => {
        await OfficeService.checkOfficeUse(selectedDate.selectedDay.toLocaleDateString())
            .then((response) => {
                // console.log(response.usersInOffice)
                setBookedUsers({ ...response })
                // console.log(bookedUsers)
            }, (error) => {
                return error
            })
    };

    const bookOffice = () => {
        OfficeService.bookOfficeSpot(selectedDate.selectedDay.toLocaleDateString())
            .then((response) => {
                console.log('OfficeDay booked');
                alert('Day booked')
            }, (error) => {
                return error
            })
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
                <h5 className='office-books'>
                    {freeSpots}/{totalSpots} desks are booked for this date
                </h5>
            </div>
            <button className='book-date-button' onClick={checkDate}>Check date</button>
            <button className='book-date-button' onClick={bookOffice}>Book this date</button>
            {/* <p>{currentUser.token.substring(0, 10)}</p> */}
            {/* <p>{currentUser.userName}</p> */}
        </div>
    )
}

export default Booking
