import axios from 'axios';
const data = require('Assets/fakeData.json');
export const getAppData = () => {
    return axios.get('https://localhost:4000/api');
};

export const getAppCategories = () => {
    return axios.get('https://localhost:4000/tags');
};
