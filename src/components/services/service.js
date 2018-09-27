import axios from 'axios';
const data = require('Assets/fakeData.json');
export const getAppData = () => {
    return axios.get('https://localhost:4000/api');
};

export const getAppCategories = () => {
    return ['all', 'cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'];
};
