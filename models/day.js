const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: { type: Date, required: true },
    formatted: { type: String, required: true },
    weather: { type: String, required: true },
    moods: [Object],
});

module.exports = mongoose.model('Day', DaySchema);