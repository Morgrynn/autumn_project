const express = require('express');
const router = express.Router();
const memory = require('../models/memory_model');

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    memory.getById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  } else {
    memory.get(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', function (req, res, next) {
  memory.add(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

router.delete('/:id', function (req, res, next) {
  memory.delete(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', function (req, res, next) {
  memory.update(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/memory-name/:value?', function (req, res, next) {
  memory.searchByName(req.params.value, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows.rows);
    }
  });
});

module.exports = router;
