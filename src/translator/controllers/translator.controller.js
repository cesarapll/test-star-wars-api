const TranslatorService = require('../services/translator.service');


const controller = {
    getPersonById: async (req, res, next) => {
        const { id } = req.params;
        try {
            const personTranslated = await TranslatorService.getPersonTranslatedById(id);
            return res.json(personTranslated);
        } catch (error) {
            next(error)
        }
    },
    getFilmById: async (req, res, next) => {
        const { id } = req.params;
        try {
            const filmTranslated = await TranslatorService.getFilmTranslatedById(id);
            return res.json(filmTranslated);
        } catch (error) {
            next(error)
        }
    },
    getStarships: async (req, res, next) => {
        try {
            const starshipsTranslated = await TranslatorService.getStarshipsTranslated();
            return res.json(starshipsTranslated);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = controller
