const path = require("path");
const serverless = require('serverless-http');
require("dotenv").config({
    path: path.resolve(
        __dirname,
        process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env.test"
    ),
});
const express = require("express");
const cors = require('cors');
const errorMiddleware = require("../shared/middlewares/errors.middleware");
const translatorRoutes = require('./routes/translator.routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', translatorRoutes)
app.use(errorMiddleware)

const { connectMySqlDB } = require("../shared/providers/mysql-client");
const handler = serverless(app)

module.exports.handler = async (event, context) => {
    try {
        await connectMySqlDB();
        const result = await handler(event, context);
        return result;
    } catch (error) {
        console.error('Error in handler:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};