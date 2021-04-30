const userRoutes = require('express').Router()
const userControllers = require('../controllers/UserController')

userRoutes.post('/', userControllers.createUser)
userRoutes.post('/login', userControllers.loginUser)
userRoutes.get('/verify', userControllers.verifyUser)


module.exports = userRoutes