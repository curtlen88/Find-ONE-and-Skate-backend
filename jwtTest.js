const jwt = require('jsonwebtoken')

const jwtTest = () => {
  // still gonna try catch
  try {
    // create jwt payload
    const payload = {
      name: 'user name',
      id: 'im a user id!'
    }
  
    // sign a jwt token
    const token = jwt.sign(payload, 'My super big secret', { expiresIn: 60 * 60 })
    console.log(token)
    
    // decode jwt token
    const decode = jwt.verify(token, 'My super big secret')
    console.log(decode)
    
  } catch(error) {
    console.log(error)
  } 
}

jwtTest()