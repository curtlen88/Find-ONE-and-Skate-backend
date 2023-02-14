const db = require('./models')

const spotCRUD = async () => {
    try {
        // Create a new spot

        // const newSpot = await db.Spot.create({
        //     name: 'The Spot',
        //     lat: 39.839485,
        //     lng: -105.094645
        // })
        // console.log(newSpot)

        // Find all spots
        const allSpots = await db.Spot.find({})
        console.log(allSpots)

        // Find one spot by name
        // const oneSpot = await db.Spot.findOne({ name: 'The Spot' })
        // console.log(oneSpot)

        // Find one spot by lat and lng
        // const oneSpot = await db.Spot.findOne({ lat: 39.839485, lng: -105.094645 })
        // console.log(oneSpot)

        // Update a spot or create a new one if it doesn't exist
        // const updatedSpot = await db.Spot.findOneAndUpdate(
        //     { name: 'The Other Spot' },
        //     { lat: 39.708574 , lng: -105.084669 },
        //     { new: true, upsert: true }
        // )
        // console.log(updatedSpot)

        // Delete a spot
        // const deletedSpot = await db.Spot.findOneAndDelete({ name: 'The Spot' })
        // console.log(deletedSpot)



    } catch (err) {
        console.log(err)
    }
}

spotCRUD()