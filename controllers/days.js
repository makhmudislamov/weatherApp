const Day = require('../models/day'),
    Mood = require('../models/mood');

const createDay = async (req, res) => {
    const day = new Day(req.body);
    await day.save();
    res.send('Day saved');
};

const allDays = async (req, res) => {
    const days = await Day.find();
    res.send(days);
};

const readDay = async (req, res) => {
    const day = await Day.findOne({ _id: req.params.dayId });
    res.send(day);
};

const addMoodToDay = async (req, res) => {
    const mood = new Mood(req.body);
    const day = await Day.findOne({ _id: req.params.dayId });
    day.moods.unshift(mood);
    res.sendStatus(200);
};

const deleteDay = async (req, res) => {
    await Day.findOneAndDelete({ _id: req.params.dayId })
    res.send('Day delted.')
};

module.exports = {
    createDay,
    allDays,
    readDay,
    addMoodToDay,
    deleteDay
}