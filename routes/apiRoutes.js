const axios = require('axios');
// const db = require('../models');

module.exports = function (app) {

    app.post("/api/search", (req,res) => {
        
        let bookTitle = req.body.query;

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
            .then(response => {
                res.json(response.data.items)
            })
            .catch(err => {
                res.json({error: err});
            });
    });

}
