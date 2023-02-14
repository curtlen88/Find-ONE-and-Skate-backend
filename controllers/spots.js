// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')

// ROUTES

// Get /spots -- get all spots
router.get('/', async (req, res) => {
    try {
        const allSpots = await db.Spot.find({})
        res.json(allSpots)
        console.log(allSpots)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})
// GET /Spots/:id -- show spot details
router.get('/:id', async (req, res) => {
    try {
        const spotDetails = await db.Spot.findById(req.params.id)
        if (!spotDetails) {
            res.status(404).json({ msg: 'spot not found' })
            return 
        }
        res.json({ spotDetails })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// POST /Spots -- find or create a new spot
router.post('/', async (req, res) => {
    try {
        const newSpot = await db.Spot.findOneAndUpdate(
            { name: req.body.name },
            { lat: req.body.lat, lng: req.body.lng },
            { new: true, upsert: true }
        )
        res.json({ newSpot })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// DELETE /Spots/:id -- delete route
router.delete('/:id', async (req, res) => {
    try {
        const deletedSpot = await db.Spot.findByIdAndDelete(req.params.id)
        res.json({ deletedSpot })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// exporting router
module.exports = router