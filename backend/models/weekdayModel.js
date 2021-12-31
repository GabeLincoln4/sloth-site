const mongoose = require('mongoose');

const weekdaysSchema = {
    title: String,
    activity: String
}

const Weekday = mongoose.model("Weekday", weekdaysSchema);

module.exports = Weekday;