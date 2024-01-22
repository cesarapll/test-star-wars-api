const express = require("express");
const cors = require('cors');
const errorMiddleware = require("../shared/middlewares/errors.middleware");
const starshipRoutes = require('./routes/starships.routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', starshipRoutes)
app.use(errorMiddleware)


module.exports = app;   