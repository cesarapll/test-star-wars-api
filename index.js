"use strict";
const serverless = require('serverless-http');

const { swagger } = require('./swagger')
const express = require("express");
const cors = require('cors');
const errorMiddleware = require("./src/shared/middlewares/errors.middleware");
const translatorRoutes = require('./src/translator/routes/translator.routes');
const starshipRoutes = require('./src/starships-management/routes/starships.routes');


const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
router.use('/translations', translatorRoutes)
router.use('/starships', starshipRoutes)

app.use('/api', router)


app.get('/', (req, res) => {
    res.send('Bienvenido a la prueba API Star Wars')
})
app.use(errorMiddleware)

const { connectMySqlDB } = require("./src/shared/providers/mysql-client");

swagger(app);
const handler = serverless(app)


module.exports.handler = async (event, context) => {
    try {
        console.log(event.pathParameters)
        console.log("Connecting to database...")
        await connectMySqlDB()
        return handler(event, context)
    } catch (error) {
        console.error('Error connecting to database:', error)
    }
}