'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const humanRouter = require('./routes/humanBeing');
const vehicleRouter = require('./routes/automobile')
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(logger);
app.use(humanRouter);
app.use(vehicleRouter);

app.get('/', (req, res) => {
  res.status(200).send('Speak friend and enter');
});

app.use(notFoundHandler);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

module.exports = { start, app };
