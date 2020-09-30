import axios from "axios";
import AuthService from "./user.service";

// const API_URL = "https://hackathon-back.herokuapp.com";
const user = AuthService.getCurrentUser();

const checkOfficeUse = () => {
    return axios
        .post("/office/check-date", {
            date,
            headers: { "Authorization": user.token } 
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