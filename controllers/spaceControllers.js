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

        const reservations = await user.getSpaces()

        res.json({reservations})
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

spaceControllers.reserveSpace = async (req, res) => {
    try {
        
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}



module.exports = spaceControllers