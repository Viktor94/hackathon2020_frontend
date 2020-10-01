import axios from "axios";
import AuthService from "./user.service";

// const API_URL = "https://hackathon-back.herokuapp.com";

const user = AuthService.getCurrentUser();

const canteenApply = () => {
    return axios
        .post("/canteen/apply", 
         {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            return response.data;
        });
};

const canteenFinish = () => {
    return axios
        .post("/canteen/finish", 
         {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            return response.data;
        });
};

const canteenStatus = () => {
    return axios
        .get("/canteen/status", 
         {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            return response.data;
        });
};

const canteenConfigure = (maxCanteenCapacity, lunchtimeInMinute) => {
    return axios
        .put("/canteen/configure", {
            maxCanteenCapacity,
            lunchtimeInMinute
        }, {
            headers: { 'Authorization': 'Bearer ' + user.token.slice(1, -1) }
        })
        .then((response) => {
            return response.data;
        });
};

export default {
    canteenApply,
    canteenFinish,
    canteenStatus,
    canteenConfigure
};