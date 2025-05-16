const express = require('express');
const router = express.Router();
const db = require('../models/db_controller'); // Make sure this path is correct

router.get('/', function (req, res) {
  db.getAllPatients(function (err, result) {
    if (err) {
      console.error('Error retrieving patient details:', err);
      res.send('Error retrieving patient data');
    } else {
      res.render('patients', { patients: result }); // You will loop through patients here
    }
  });
});

module.exports = router;
