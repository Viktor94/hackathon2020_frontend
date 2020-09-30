import React, { useState } from 'react';
import './Bookings.css';
import OfficeService from '../../Services/office.service';

const Bookings = () => {

    const [usersBooking, setUsersBooking] = useState([])

    const getUsersBooking = () => {
        OfficeService.getBookings()
            .then((response) => {
                setUsersBooking({ ...response })
                console.log(usersBooking.data)
                console.log(response.data.date)
            })
    }

    // function consoleLog() {
    //     if (usersBooking.data.date) {
    //         console.log(usersBooking.data.date)
    //     }
    // }

    return (
        <div className='bookings-main'>
            <h1 className='bookings-title'>Manage my bookings</h1>
            <ul className="list-group list-group-flush">
                {usersBooking.data.map(bookings =>
                    <li>
                        {bookings.date}
                    </li> 
                )}
                <li className="list-group-item">Cras justo odio
                {/* <button onClick={consoleLog}>Console log</button> */}
                </li>
                {/* <p>{ getUsersBooking() }</p> */}
            </ul>
            <button onClick={getUsersBooking} >Get bookings</button>
        </div>
    )
}

export default Bookings
