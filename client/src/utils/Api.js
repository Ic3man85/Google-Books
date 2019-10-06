import axios from "axios";


export default {

searchBooks: function (query) {

    return axios.post('/search', {query: query});
},

getBooks: function () {

    return axios.get('/api/books');
},

saveBook: function () {
    
    return axios.post('/api/books');
},

deleteBook: function () {

    return axios.put('/api/books');
}


}