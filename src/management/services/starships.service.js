const Starship = require('../models/starship');

const service = {
    createStarship: async (starship) => {
        const savedStarship = await Starship.create(starship);
        if (!savedStarship) throw new Error('Error creating starship');
        return savedStarship;
    }
}

module.exports = service;