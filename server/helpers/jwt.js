const jwt = require('jsonwebtoken')
const secretCode = "rahasia"

const tokenGenerator = (user) =>{
    const { id,name, email } = user
    let token = jwt.sign({
        id, name, email
    },secretCode)
    return token

}
const tokenVerifier = token => {
    let decoded = jwt.verify(token,secretCode)
    return decoded
}

module.exports = {tokenGenerator,tokenVerifier}