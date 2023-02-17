'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const humanBeingSchema = require('./humanBeing');
const automobileSchema = require('./automobile');
const Collection = require('./collection-class');

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DB_URL;

const db = new Sequelize(DB_URL);
const humanBeingModel = humanBeingSchema(db, DataTypes);
const automobileModel = automobileSchema(db, DataTypes);
const humanCollection = new Collection(humanBeingModel);
const autoCollection = new Collection(automobileModel);


module.exports = { db, humanBeingModel, automobileModel, humanCollection, autoCollection };