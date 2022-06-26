'use strict';

const express = require('express');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const foodRoute = require('./routes/food');
const personRoute = require('./routes/person');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(personRoute);
app.use(foodRoute);
app.use(logger);

app.use('*', error404Handler);
app.use(error500Handler);

module.exports = {
    server: app,
    start: () => app.listen(PORT, console.log(`Listening on port ${PORT}`)),
};
