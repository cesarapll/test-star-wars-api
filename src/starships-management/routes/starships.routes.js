const StarshipController = require('../controllers/starships.controller');

const router = require('express').Router();

router.post('/', StarshipController.createStarship);

module.exports = router;