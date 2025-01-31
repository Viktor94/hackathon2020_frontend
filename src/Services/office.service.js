import axios from "axios";
import AuthService from "./user.service";

const API_URL = "https://cors-anywhere.herokuapp.com/https://hackathon-back.herokuapp.com";

const user = AuthService.getCurrentUser();

const checkOfficeUse = (date) => {
    return axios
        .post(`${API_URL}/office/check-date`, {
            date,
        }, {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            if (response.data.date) {
                localStorage.setItem('date', JSON.stringify(response.data.date));
            }
            return response.data;
        })
};

const bookOfficeSpot = (date) => {
    return axios
        .post(`${API_URL}/office/reserve`, {
            date,
        }, {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            return response.data;
        })
}

const getBookings = async () => {
    return await axios.get(`${API_URL}/office/bookings`,
        {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        }).then((response) => {
            return response.data
        });
};

export default {
    checkOfficeUse,
    bookOfficeSpot,
    getBookings
};