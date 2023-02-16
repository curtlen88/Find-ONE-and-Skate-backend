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
    console.log("these are the req params", req.params.id);
    try {
        const spotDetails = await db.Spot.findById(req.params.id)
        if (!spotDetails) {
            res.status(404).json({ msg: 'spot not found' })
            return 
        }
        console.log("this it the spot", spotDetails)
        res.json({ spotDetails })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// POST /Spots -- find or create a new spot
router.post('/', async (req, res) => {
    console.log("req.body -----", req.body)
    console.log("req.body.image -----", req.body.image)
    try {
        const newSpot = await db.Spot.findOneAndUpdate(
            { lat: req.body.lat, lng: req.body.lng },
            {
                name: req.body.name, description: req.body.description, $push: { images: req.body.image, videos: req.body.video } 
            },
            { new: true, upsert: true }
        )
        res.json({ newSpot })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// PUT /Spots/:id -- update route
router.post('/:id', async (req, res) => {
    console.log("req.body -----", req.body)
    console.log("req.body.image -----", req.body.image)
    console.log("req.params.id -----", req.params.id)
    try {
        const updatedSpot = await db.Spot.findByIdAndUpdate(req.params.id, {
            $push: { images: req.body.image }
        }, { new: true });
        res.json({ updatedSpot })
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