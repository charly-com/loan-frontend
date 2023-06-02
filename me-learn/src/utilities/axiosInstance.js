const axios = require('axios');
const url = "http://localhost:8000"
// process.env.NODE_ENV === "production" ? 
// "https://srinivas-loan-management.herokuapp.com" : "http://localhost:8000";

const axiosInstance = axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: url
})

module.exports = {axiosInstance};