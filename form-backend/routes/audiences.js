const express = require("express");
const router = express.Router();
const Audience = require("../models/audience");
const audience = require("../models/audience");

//GET ALL
router.get("/", async (req, res) => {
  try {
    const audiences = await Audience.find();
    res.json(audiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET ONE
router.get("/:id", getAudience, (req, res) => {
  res.json(res.audience);
});

//CREATE
router.post("/", async (req, res) => {
  const audience = new Audience({
    customers: req.body.customers,
    requirements: req.body.requirements,
    excluded: req.body.excluded,
    positions: req.body.positions,
  });

  try {
    const newAudience = await audience.save()
    res.status(201).json(newAudience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//UPDATE
router.patch("/:id", getAudience, async (req, res) => {
  if(req.body.customers != null) {
    res.audience.customers = req.body.customers
  }
  if(req.body.requirements != null) {
    res.audience.requirements = req.body.requirements
  }
  if(req.body.excluded != null) {
    res.audience.excluded = req.body.excluded
  }
  if(req.body.positions != null) {
    res.audience.positions = req.body.positions
  }

  try {
    const updatedAudience = await res.audience.save()
    res.json(updatedAudience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE
router.delete("/:id", getAudience, async (req, res) => {
  try {
    await res.audience.deleteOne()
    res.json({message: 'Deleted audience'})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getAudience(req, res, next) {
  let audience
  try {
    audience = await Audience.findById(req.params.id)
    if(!audience) {
      return res.status(404).json({message: 'Cannot find audience'})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.audience = audience
  next()
}

module.exports = router;
