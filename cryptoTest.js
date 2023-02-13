const bcrypt = require('bcryptjs')

const testCrypto = async () => {
  try {
    // test hashing
    const password = 'hello'
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    console.log('hashed password', hashedPassword)
  
    // match the hashed password to a string
    const matchPasswords = await bcrypt.compare('hello', hashedPassword)
    console.log('matchedPasswords', matchPasswords)
  } catch (error) {
    console.log(error)
  }
}

testCrypto()