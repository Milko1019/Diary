const db = require("../models");

// Defining methods for the entry.
module.exports = {
    findAll: function (req, res) {
        db.Entry
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Entry
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByTitle: function (req, res) {
        db.Entry
            .find({ title: req.params.title })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Entry
            .create(req.body)
            .then(dbModel => { console.log("Create method ", dbModel); res.json(dbModel) })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Entry
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Entry
            .findByIdAndDelete({ _id: req.params.id })
            .then(dbModel => { console.log("delete", dbModel); res.json(dbModel) })
            .catch(err => res.status(422).json(err));
    }
};