'use strict';

const {start} = require('./src/server');
require('dotenv').config();

const { db } = require('./src/models');
db.sync()
.then(() => {
  start();
  console.log('Connected to database: api-server');
})
.catch(err => console.error(err));

