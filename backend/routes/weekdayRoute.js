const express = require('express');
const router = express.Router();
const Weekday = require('../models/weekdayModel.js');

router.route("/weekdays").get(function(req, res){
    Weekday.find()
           .then(foundWeekdays=> res.json(foundWeekdays))
})

module.exports = router;