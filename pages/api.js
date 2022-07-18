import axios from "axios";

const api = axios.create({
    baseURL: 'gateway.marvel.com:443/v1/public/characters?apikey=73a123efb948c2d57d2387712f194cf8'
});

export default api;