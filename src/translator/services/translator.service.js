const starWarsApiClient = require('../providers/star-wars-api-client');
const Straship = require('../../shared/models/starship');
const { translations } = require("../common/constants");
const { translateObject } = require('../common/utils');
const { NotFoundError, InternalServerError } = require('../../shared/utils/errors');

const service = {
    getPersonTranslatedById: async (id) => {
        try {
            const { data } = await starWarsApiClient.get(`/people/${id}`);
            return translateObject(data, translations)
        } catch (error) {
            if (error.response.status === 404) throw new NotFoundError("Person not found")
            else throw new InternalServerError("Error getting person")
        }
    },
    getFilmTranslatedById: async (id) => {
        try {
            const { data } = await starWarsApiClient.get(`/films/${id}`);
            return translateObject(data, translations)
        } catch (error) {
            if (error.response.status === 404) throw new NotFoundError("Film not found")
            else throw new InternalServerError("Error getting film")
        }
    },
    getStarshipsTranslated: async () => {

        const starships = await Straship.findAll();
        if (!starships) throw new NotFoundError("Starships not found")
        return starships.map(({ dataValues: starship }) => translateObject(starship, translations))

    }
}

module.exports = service;