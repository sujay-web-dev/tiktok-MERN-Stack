import axios from 'axios';

const instance = axios.create({
    baseURL: "https://sujay-tiktok-mern.herokuapp.com/",
});

export default instance;