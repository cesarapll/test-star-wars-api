const { ConflictError, InternalServerError } = require("../../shared/utils/errors");
const Starship = require("../../shared/models/starship");

const service = {
    create: async (starship) => {
        const existingStarship = await Starship.findOne({
            where: { name: starship.name },
        });

        if (existingStarship) throw new ConflictError("Starship already exists");

        const savedStarship = await Starship.create(starship);

        if (!savedStarship) throw new InternalServerError("Error creating starship");

        return savedStarship;
    },
};

module.exports = service;
