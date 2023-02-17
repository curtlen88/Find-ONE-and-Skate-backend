// create an instance of the express router
const express = require('express')
const router = express.Router()
const authLockedRoute = require('./authLockedRoute')

// ROUTES

// POST /favorites -- add a favorite to the users favSpots array
router.post('/', authLockedRoute, async (req, res) => {
    try {
        const user = res.locals.user
        // if (!req.body.id) {
        //     res.status(404).json({ msg: 'Spot not found' })
        //     return
        // }
        console.log("req.body.id💀-----",req.body.id)
        user.favSpots.push(req.body.id)
        await user.save()
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//GET/favorites route
router.get('/', authLockedRoute, async (req, res) => {
    try {
    console.log("res.local.user🔥----", res.locals.user)
    res.json({favSpots: res.locals.user.favSpots})
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// GEt /favorites/:id -- get a single favorite
router.get('/:id', authLockedRoute, async (req, res) => {
    try {
        const user = res.locals.user
        const favSpot = user.favSpots.find(favSpot => favSpot.id === req.params.id)
        if (!favSpot) {
            res.status(404).json({ msg: 'Favorite not found' })
            return
        }
        res.json(favSpot)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})



module.exports = router