var express = require('express');
var router = express.Router();

var Group = require('../models/Group.js');

/* GET /Groups listing. */
router.get('/', function(req, res, next) {
  Group.find(function (err, Groups) {
    if (err) return next(err);
    res.json(Groups);
  });
});

/* POST /Groups */
router.post('/', function(req, res, next) {
  Group.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Groups/id */
router.get('/:id', function(req, res, next) {
  Group.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Groups/:id */
router.put('/:id', function(req, res, next) {
  Group.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Groups/:id */
router.delete('/:id', function(req, res, next) {
  Group.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
