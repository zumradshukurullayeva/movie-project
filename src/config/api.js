import axiosClient from './axiosClient';

const apiCalls = {
    getMovies: (type, params) => {
        return axiosClient.get(`movie/${type}`, params);
    },
    getVideos: (id) => {
        return axiosClient.get(`movie/${id}/videos`);
    },
    search: (params) => {
        return axiosClient.get(`search/movie`, params);
    },
    detail: (id, params) => {
        return axiosClient.get(`movie/${id}`, params);
    },
    actorsAndCast: (id) => {
        return axiosClient.get(`movie/${id}/credits`);
    },
    similar: (id) => {
        return axiosClient.get(`movie/${id}/similar`);
    },
}
 
export default apiCalls;