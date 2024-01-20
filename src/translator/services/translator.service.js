const starWarsApiClient = require('../providers/star-wars-api-client');
const { translations } = require("../common/constants");
const { translateObject } = require('../common/utils');

const service = {
    getPersonTranslatedById: async (id) => {
        const { data } = await starWarsApiClient.get(`/people/${id}`);
        return translateObject(data, translations)
    },
    getFilmTranslatedById: async (id) => {
        const { data } = await starWarsApiClient.get(`/films/${id}`);
        return translateObject(data, translations)
    },
}

module.exports = service;