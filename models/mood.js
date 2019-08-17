const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MoodSchema = new Schema({
    mood: { type: String, required: true },
    comment: { type: String }
});

module.exports = mongoose.model('Mood', MoodSchema);