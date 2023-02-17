'use strict'

const express = require('express');
const { automobileModel, autoCollection } = require('../models');
const router = express.Router();

router.get('/vehicle', async (req, res, next) => {
  try {
    const vehicle = await autoCollection.read();
    res.status(201).send(vehicle);
  } catch (error) {
    next(error);
  }
});

router.get('/vehicle/:id', async (req, res, next) => {
  try {
    const vehicle = await autoCollection.read(req.params.id);
    res.status(200).send(vehicle);
  } catch (error) {
    next(error);
  }

})

router.post('/vehicle', async (req, res, next) => {
  try {
    console.log('POST body:', req.body);
    const newVehicle = await autoCollection.create(req.body);
    res.status(201).send(newVehicle);
  } catch (error) {
    next(error);
  }
});

router.put('/vehicle/:id', async (req, res, next) => {
  try {
    console.log('PUT body:', req.body);
    const newVehicle = await autoCollection.update(req.params.id, req.body);
    res.status(200).send(newVehicle);
  } catch (error) {
    next(error);
  }
});
router.delete('/vehicle/:id', async (req, res, next) => {
  try {
    await autoCollection.delete(req.params.id);
    res.status(200).send(`Item #${req.params.id} is no more.`);
  } catch (error) {
    next(error);
  }
});


module.exports = router;