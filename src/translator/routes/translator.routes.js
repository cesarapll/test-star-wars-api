const router = require('express').Router();
const TranslatorController = require('../controllers/translator.controller');

/**
 * @openapi
 * /api/translations/people/{id}:
 *   get:
 *     summary: Get a person by id with translated properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the person to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       404:
 *         description: Person not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error getting person
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/people/:id', TranslatorController.getPersonById);
/**
 * @openapi
 * /api/translations/films/{id}:
 *   get:
 *     summary: Get a film by id with translated properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the film to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       404:
 *         description: Film not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error getting film
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/films/:id', TranslatorController.getFilmById);
/**
 * @openapi
 * /api/translations/starships:
 *   get:
 *     summary: Get starships from database with translated properties
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/starships', TranslatorController.getStarships);

module.exports = router