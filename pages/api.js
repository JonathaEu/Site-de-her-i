import axios from "axios";

const api = axios.create({
    baseURL: 'api.tvmaze.com/search/shows?q=star%20wars'
});

export default api;