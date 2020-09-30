import axios from "axios";
import AuthService from "./user.service";

// const API_URL = "https://hackathon-back.herokuapp.com";
const user = AuthService.getCurrentUser();
const userTOk = user.token

const checkOfficeUse = (date) => {
    return axios
        .post("/office/check-date", {
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

export default {
    checkOfficeUse
};