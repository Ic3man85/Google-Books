import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIkey = "&key=" + process.env.REACT_APP_GOOGLE_API_KEY;

export default {

search: (query) => {

    return axios.get(URL + query + APIkey);
}


}