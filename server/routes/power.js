const express = require('express');
const router = express.Router();
const power_supply = require('../models/power_supply_model');

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    power_supply.getById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  } else {
    power_supply.get(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', function (req, res, next) {
  power_supply.add(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

router.delete('/:id', function (req, res, next) {
  power_supply.delete(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', function (req, res, next) {
  power_supply.update(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/power-name/:value?', function (req, res, next) {
  power_supply.searchByName(req.params.value, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows.rows);
    }
  });
});

module.exports = router;
