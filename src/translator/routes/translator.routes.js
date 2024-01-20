const router = require('express').Router();
const TranslatorController = require('../controllers/translator.controller');

router.get('/people/:id', TranslatorController.getPersonById);

router.get('/films/:id', TranslatorController.getFilmById);

module.exports = router