const StarshipService = require('../services/starships.service');

const controller = {
    createStarship: async (req, res, next) => {
        try {
            const starshipToCreate = req.body;
            const newStarship = await StarshipService.create(starshipToCreate);
            res.status(201).json({ message: 'Starship created successfully', starship: newStarship });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = controller