const db = require("../models");

// Defining methods for the entry.
module.exports = {
    findAll: function (req, res) {
        db.Image
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Image
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Image
            .create(req.body)
            .then(dbModel =>{ console.log("Create method ",dbModel); res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Image
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};