const spaceRoutes = require('express').Router()
const spaceControllers = require('../controllers/spaceControllers')

spaceRoutes.get('/all', spaceControllers.getAllSpaces)
spaceRoutes.get('/:id', spaceControllers.getSingleSpace)
spaceRoutes.get('/reservations', spaceControllers.getReservations)
spaceRoutes.post('/reserve', spaceControllers.reserveSpace)

module.exports = spaceRoutes