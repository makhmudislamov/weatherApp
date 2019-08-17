const router = require('express').Router(),
    weatherControls = require('../controllers/weather'),
    errHandler = require('../utils/error-handler');

router.get('/weather', errHandler(weatherControls.weatherNow));