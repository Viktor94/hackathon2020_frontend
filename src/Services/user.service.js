import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/https://hackathon-back.herokuapp.com/";

const login = (password, userName) => {
  return axios
    .post(API_URL + "/users/login", {
        password,
        userName,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
      }
      return response.data;
    })
    .then(() => {
        localStorage.setItem('userName', userName)
    });
};

const logout = (userName) => {
    localStorage.removeItem(userName);
};

const getCurrentUser = () => {
  return JSON.parse(JSON.stringify(localStorage));
};

export default {
  login,
  logout,
  getCurrentUser,
};
