import Axios from 'axios';

const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

// instance.defaults.headers.common['Authorization'] = 'USER TOKEN'

export default instance;