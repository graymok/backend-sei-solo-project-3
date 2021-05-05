const models = require('../models')
const spaceControllers = {}
const jwt = require('jsonwebtoken')

spaceControllers.getAllSpaces = async (req, res) => {
    try {
        const spaces = await models.space.findAll()

        res.json({spaces})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

spaceControllers.getSingleSpace = async (req, res) => {
    try {
        const space = await models.space.findOne({
            where: {
                id: req.params.id
            }
        })

        const workstyle = await models.workstyle.findOne({
            where: {
                id: space.workstyleId
            }
        })

        res.json({space: {
            id: space.id,
            name: space.name,
            description: space.description,
            capacity: space.capacity,
            type: space.type,
            image: space.image,
            workstyle: workstyle.name,
            workstyleDetail: workstyle.description
        }})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

spaceControllers.getReservations = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const reservations = await models.reservation.findAll({
            where: {
                userId: user.id
            },
            include: [
                {
                    model: models.space
                }
            ]
        })

        res.json({reservations})
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

spaceControllers.reserveSpace = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const space = await models.space.findOne({
            where: {
                id: req.body.spaceId
            }
        })

        const checkReservation = await models.reservation.findOne({
            where: {
                spaceId: space.id,
                date: req.body.date
            }
        })

        const checkUserReservation = await models.reservation.findOne({
            where: {
                userId: user.id,
                spaceId: space.id,
                date: req.body.date
            }
        })

        if ( checkReservation !== null && checkUserReservation !== null ) {
            res.json({reserved: 'user'})
        } else if ( checkReservation !== null && checkUserReservation === null ) {
            res.json({reserved: 'failure'})
        } else {
            const reserveSpace = await user.addSpace(space)

            const reservation = await models.reservation.findOne({
                where: {
                    userId: user.id,
                    spaceId: space.id
                }
            })

            const reserveDate = await reservation.update({
                date: req.body.date
            })

            console.log(reservation)

            res.json({reserved: 'success'})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}



module.exports = spaceControllers