import axios from 'axios';

const axiosQuotes = axios.create({
   baseURL: 'https://quotes-penluq.firebaseio.com/'
});

export default axiosQuotes;