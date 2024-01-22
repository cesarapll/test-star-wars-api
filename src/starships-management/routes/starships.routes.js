const StarshipController = require("../controllers/starships.controller");

const router = require("express").Router();
/**
 * @openapi
 * /api/starships:
 *   post:
 *     summary: Create a starship
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               cost_in_credits:
 *                 type: string
 *               crew:
 *                 type: string
 *               passengers:
 *                 type: string
 *               cargo_capacity:
 *                 type: string
 *               consumables:
 *                 type: string
 *               starship_class:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object 
 */
router.post("/", StarshipController.createStarship);

module.exports = router;
