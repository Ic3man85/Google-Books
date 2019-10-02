import axios from "axios";


export default {

searchBooks: function (query) {

    return axios.post('/api/search', {query: query});
}


}