import axios from 'axios';
const data = require('Assets/fakeData.json');
export const getAppData = () => {
    return data;
    return axios.get('https://api.linkpreview.net/?key=123456&q=https://www.google.com').then((data) => {
        console.log(data);
    });
}
;
