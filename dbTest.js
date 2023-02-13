require('dotenv').config()
const db = require('./models')
db.connect()

const userTest = async () => {
  try {
    // CREATE
    const newUser = new db.User({
      name: 'bing',
      email: 'bing@bang.com',
      password: 'bingbang'
    })
  
    await newUser.save()
    console.log('newUser', newUser)

    // READ
    const foundUser =  await db.User.findOne({
      name: newUser.name
    })

    console.log('foundUser', foundUser)

    // UPDATE
    foundUser.name = 'bangBang'

    await foundUser.save()

    const findUserAgain = await db.User.findOne({
      name: 'bangBang'
    })

    console.log('findUserAgain', findUserAgain)

    // DESTROY
    const deleteUser = await db.User.deleteOne({
      name: 'bangBang'
    })

    console.log('deleteUser', deleteUser)

    // we done
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

userTest()