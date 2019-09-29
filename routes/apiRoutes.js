// const axios = require('axios');
// const db = require('../models');

module.exports = function (app) {

    app.get("/", (req,res) => {
        res.json("something");
    })



    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
//     app.get("/search", (req, res) => {

//         let bookQuery = req.body.title.replace(/\s/g, "+");

//         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookQuery}&key=AIzaSyCdXAgp7QptaV2Lm3hmYCIXSFq1Xq_uuEM`)
//             .then(response => {
//                 res.json(response.data.item)
//             }
//             ).catch(err => {
//                 res.json({ error: err })
//             });
//     });
}
