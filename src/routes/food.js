'use strict';

const express = require('express');
const { foodInterface } = require('../models');

const router = express.Router();

// POST-CREATE
router.post('/food', async (req, res, next) => {
    let food = req.body;
    let response = await foodInterface.create(food);
    res.status(200).send(response);
});

// GET-READ
router.get('/food', async (req, res, next) => {
    let allFoods = await foodInterface.readAll();
    res.status(200).send(allFoods);
});

// GET one
router.get('/food/:id', async (req, res, next) => {
    let { id } = req.params;
    let oneFood = await foodInterface.readOne(id);
    res.status(200).send(oneFood);
});

// PUT-UPDATE
router.put('/food/:id', async (req, res, next) => {
    let { id } = req.params;
    await foodInterface.update(id);
    let updatedFood = await foodInterface.readOne(id);
    res.status(200).send(updatedFood);
});

// DELETE
router.delete('/food/:id', async (req, res, next) => {
    let { id } = req.params;
    let deletedFood = await foodInterface.delete(id);
    res.status(200).send(deletedFood);
});

module.exports = router;
