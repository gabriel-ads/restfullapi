const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_PRIVATE_KEY;

const createToken = (userId) => {
    const token = jwt.sign({ id: userId }, privateKey)
    return token
}

const verifyToken = (token) => {
    const result = jwt.verify(token, privateKey)
    return result
}

module.exports = {
    createToken,
    verifyToken
}