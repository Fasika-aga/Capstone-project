import { Router } from " express";
import db from "../db/c"

// routes/gemstones.js

const express = require('express');
const router = express.Router();
const Gemstone = require('../models/Gemstone');

// Create a new gemstone
router.post('/', async (req, res) => {
  try {
    const gemstone = new Gemstone(req.body);
    await gemstone.save();
    res.status(201).send(gemstone);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all gemstones
router.get('/', async (req, res) => {
  try {
    const gemstones = await Gemstone.find();
    res.send(gemstones);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single gemstone by ID
router.get('/:id', async (req, res) => {
  try {
    const gemstone = await Gemstone.findById(req.params.id);
    if (!gemstone) {
      return res.status(404).send({ message: 'Gemstone not found' });
    }
    res.send(gemstone);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a gemstone by ID
router.patch('/:id', async (req, res) => {
  try {
    const gemstone = await Gemstone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gemstone) {
      return res.status(404).send({ message: 'Gemstone not found' });
    }
    res.send(gemstone);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a gemstone by ID
router.delete('/:id', async (req, res) => {
  try {
    const gemstone = await Gemstone.findByIdAndDelete(req.params.id);
    if (!gemstone) {
      return res.status(404).send({ message: 'Gemstone not found' });
    }
    res.send({ message: 'Gemstone deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
