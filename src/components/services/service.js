import axios from 'axios';
const data = require('Assets/fakeData.json');
export const getAppData = () => {
    return data;
    return axios.get('https://api.linkpreview.net/?key=123456&q=https://www.google.com').then((data) => {
        console.log(data);
    });
};

export const getAppCategories = () => {
    return ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'];
};
