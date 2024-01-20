const express = require('express');
const TranslatorService = require('../services/translator.service');
const app = express();


const controller = {
    getPersonById: async (req, res) => {
        const { id } = req.params;
        try {
            const personTranslated = await TranslatorService.getPersonTranslatedById(id);
            return res.json(personTranslated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    getFilmById: async (req, res) => {
        const { id } = req.params;
        try {
            const filmTranslated = await TranslatorService.getFilmTranslatedById(id);
            return res.json(filmTranslated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = controller
