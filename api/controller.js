'use strict';

var properties = require('../package.json');
var distance = require('../service/distance');
var operations = require('../service/operations');

var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.license
        }
        res.json(aboutInfo);
    },
    getDistance: function (req, res) {
        distance.find(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    operate: function (req, res) {
        var result = null;
        switch (req.params.method) {
            case 'sum':
                result = operations.sum(req, res);
                break;
            case 'mul':
                result = operations.mult(req, res);
                break;
            case 'rest':
                result = operations.rest(req, res);
                break;
        }
        var resp = {
            result: result
        }
        res.json(resp);
    }
};

module.exports = controllers;