import React, { useEffect, useState } from 'react';
import './Bookings.css';
import axios from 'axios';
const API_URL = "https://hackathon-back.herokuapp.com";

const Bookings = () => {

    const userToken = JSON.parse(JSON.stringify(localStorage.token));
    const [usersBooking, setUsersBooking] = useState([])

    useEffect(() => {
        getBookings()
    }, [userToken]);

    const getBookings = async () => {
        return await axios.get(API_URL + "/office/bookings",
            {
                headers: { 'Authorization': 'Bearer ' + userToken.slice(1, -1) }
            }).then((response) => {
                setUsersBooking({ ...response });
                console.log(response)
                return response
            });
    }

    const deleteBooking = async (date) => {
        return await axios.post(API_URL + "/office/unreserve", {
            date,
        }, {
            headers: { 'Authorization': 'Bearer ' + userToken.slice(1, -1) }
        })
        .then((response) => {
            getBookings();
            return response;
        })
    }

    console.log(usersBooking.data)

    return (
        <div className='bookings-main'>
            <h4 className='bookings-title'>Manage my bookings</h4>
            <ul className="list-group list-group-flush">
                {usersBooking.data && usersBooking.data.date.map((item, i) => {
                    return <li className="list-group-item" key={i}>
                        <div className='item-rendered'>
                            {item}
                        </div>
                        <button className='delete-button' onClick={() => deleteBooking(item)}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Bookings
