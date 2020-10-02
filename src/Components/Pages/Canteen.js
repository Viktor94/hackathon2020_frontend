import React, { useEffect, useState } from 'react';
import './Canteen.css';
import axios from 'axios';
import Countdown from 'react-countdown';
const API_URL = "https://cors-anywhere.herokuapp.com/https://hackathon-back.herokuapp.com/";

const Canteen = () => {

    const userToken = JSON.parse(JSON.stringify(localStorage.token));
    const [canteenStatus, setCanteenStatus] = useState([])

    const getCanteen = async () => {
        return await axios.get(API_URL + "/canteen/status",
            {
                headers: { 'Authorization': 'Bearer ' + userToken.slice(1, -1) }
            }).then((response) => {
                setCanteenStatus({ ...response });
                console.log(response)
                return response
            });
    }

    const checkinToCanteen = async () => {
        return axios
            .post(API_URL + "/canteen/apply", { },
            {
                headers: { 'Authorization': 'Bearer ' + userToken.slice(1, -1) }
            })
            .then((response) => {
                getCanteen()
                return response;
            })
    }

    const checkoutCanteen = () => {
        return axios
        .post(API_URL + "/canteen/finish", { },
        {
            headers: { 'Authorization': 'Bearer ' + userToken.slice(1, -1) }
        })
        .then((response) => {
            getCanteen()
            return response;
        });
    };

    useEffect(() => {
        getCanteen()
    }, [userToken]);

    return (
        <div className='canteen-main'>
            <h4>Users in Canteen</h4>
                <button className='canteen-btn' onClick={getCanteen}>Check Canteen<i className='fas fa-hotdog'></i></button>
                <button className='canteen-btn' onClick={checkinToCanteen}>Checkin<i className='fas fa-hotdog'></i></button>
                <button className='canteen-btn' onClick={checkoutCanteen}>Checkout<i className='fas fa-hotdog'></i></button>
                <h5 className='canteen-status'>                 
                    Free space in office: {canteenStatus.data && canteenStatus.data.freeSpace}
                </h5>
            <ul className="list-group canteen-list-main list-group-flush">
                {canteenStatus.data && canteenStatus.data.usersInCanteen.map((item, i) => {
                    return <li className="list-group-item canteen-div" key={i}>
                        <p className='user-name'>{item.userName}</p>
                        <div className='user-img'>
                            <img src={item.profileImageUrl} alt="Mountains" width="120" height="80"></img>

                        </div>
                    </li>
                })}

            {/* <Countdown date={Date.now() + 10000} /> */}
            </ul>
        </div>
    )
}

export default Canteen
