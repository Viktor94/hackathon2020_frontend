import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://cors-anywhere.herokuapp.com/https://hackathon-back.herokuapp.com/";

const checkOfficeUse = (date) => {
    return axios
        .post(API_URL + "/office/check-date", {
            date,
        }, { headers: authHeader() })
        .then((response) => {
            console.log(response.data)
            if (response.data.date) {
                localStorage.setItem('date', JSON.stringify(response.data.date));
            }
            return response.data;
        })
};

const bookOfficeSpot = (date) => {
    return axios
        .post(API_URL + "/office/reserve", {
            date,
        }, { headers: authHeader() })
        .then((response) => {
            return response.data;
        })
}

const getBookings = async () => {
    return await axios.get(API_URL + "/office/bookings",
        { headers: authHeader() })
        .then((response) => {
            return response.data
        });
};

export default {
    checkOfficeUse,
    bookOfficeSpot,
    getBookings
};