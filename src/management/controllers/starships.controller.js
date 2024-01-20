const StarshipService = require('../services/starships.service');

const controller = {
    createStarship: async (req, res) => {
        try {
            const starshipToCreate = req.body;


            const newStarship = await StarshipService.createStarship(starshipToCreate);

            res.status(201).json({ message: 'Starship created successfully', starship: newStarship });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = controller