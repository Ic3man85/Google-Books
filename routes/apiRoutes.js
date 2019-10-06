const axios = require('axios');
const path = require("path");
const db = require('../models');

module.exports = function (app) {
    
    app.post("/search", (req, res) => {
        
        let title = req.body.query;
        
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
        .then(response => res.send(response.data.items))
        .catch(err => {
                res.send({ error: err });
            });
        });
        
        app.post("/api/books", (req, res) => {
            
            db.Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
        });
        
        app.get("/api/books", (req, res) => {
            
            db.Book.find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
        });
        
        app.put("/api/books/:id", (req, res) => {
            
            db.Book.remove({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
        });
        
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "./client/build/index.html"));
        });
        
    }
    