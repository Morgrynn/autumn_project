const express = require('express');
const router = express.Router();
const storage = require('../models/storage_model');

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    storage.getById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  } else {
    storage.get(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', function (req, res, next) {
  storage.add(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

router.delete('/:id', function (req, res, next) {
  storage.delete(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', function (req, res, next) {
  storage.update(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('    storage-name/:value?', function (req, res, next) {
  storage.searchByName(req.params.value, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows.rows);
    }
  });
});

module.exports = router;
