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
const starshipRoutes = require('./routes/starships.routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', starshipRoutes)
app.use(errorMiddleware)

const { connectMySqlDB } = require("../shared/providers/mysql-client");
const handler = serverless(app)

module.exports.handler = async (event, context) => {
    await connectMySqlDB();
    return handler(event, context)
};