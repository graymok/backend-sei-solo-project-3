const spaceRoutes = require('express').Router()
const spaceControllers = require('../controllers/spaceControllers')

spaceRoutes.get('/all', spaceControllers.getAllSpaces)
spaceRoutes.get('/detail/:id', spaceControllers.getSingleSpace)
spaceRoutes.get('/dashboard', spaceControllers.getReservations)
spaceRoutes.post('/reserve', spaceControllers.reserveSpace)
spaceRoutes.post('/remove', spaceControllers.deleteReservation)

module.exports = spaceRoutes