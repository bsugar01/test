const express = require('express');
const router = express.Router();
const db = require('../models/db_controller'); // Your DB functions

router.get('/', function (req, res) {
  db.getallappointment(function (err, result) {
    if (err) {
      console.error(err);
      res.send('Error retrieving patients');
    } else {
      res.render('patients', { patients: result });
    }
  });
});

module.exports = router;
