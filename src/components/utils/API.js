import axios from "axios";
const URL = "https://randomuser.me/api/";
const APIKEY = "?key=89K6-65ZL-EOEI-KFDQ";
const URLPARAMS = "&results=25&seed=huskiesarecute&page=3";
const queryUrl = URL + APIKEY + URLPARAMS;


export default {
    search: function (query) {
        return axios.get(queryUrl)
    }
}