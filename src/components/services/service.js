import axios from 'axios';

export const getAppData = () => {
    return axios.get('https://api.linkpreview.net/?key=123456&q=https://www.google.com').then((data) => {
        console.log(data);
    });
}
;
