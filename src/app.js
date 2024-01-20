const express = require('express');
const cors = require('cors');

const translatorRoutes = require('./translator/routes/translator.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', translatorRoutes)

module.exports = app;