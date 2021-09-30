const express = require('express');
const db = require('../models/workout.js');
const router = express.Router();

router.get("/workouts", async (req, res) =>

router.put("/workouts/:id", async (req, res) =>

router.post("/workouts", async (req, res) =>

module.exports = router;