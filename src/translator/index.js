
const express = require("express");
const cors = require('cors');
const errorMiddleware = require("../shared/middlewares/errors.middleware");
const translatorRoutes = require('./routes/translator.routes');


const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', translatorRoutes)
app.use(errorMiddleware)

module.exports = app;



