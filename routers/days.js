const router = require('express').Router(),
    dayControls = require('../controllers/days'),
    errHandler = require('../utils/error-handler');


router.post('/day', errHandler(dayControls.createDay));

router.get('/days', errHandler(dayControls.allDays));

router.route('/day/:dayId')
    .get(errHandler(dayControls.readDay))
    .put(errHandler(dayControls.addMoodToDay))
    .delete(errHandler(dayControls.deleteDay));