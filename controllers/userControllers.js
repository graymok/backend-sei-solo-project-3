const models = require('../models')
const userControllers = {}
const jwt = require('jsonwebtoken')



userControllers.createUser = async (req, res) => {
    try {
        const workstyle = await models.workstyle.findOne({
            where: {
                code: req.body.workstyle
            }
        })
        
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        const setWorkstyle = await user.setWorkstyle(workstyle)

        const encryptedId = jwt.sign( { userId: user.id }, process.env.JWT_SECRET)

        res.json({message: 'Signup successful!', user: {
            id: encryptedId,
            name: user.name,
            email: user.email,
            workstyle: workstyle.name,
            workstyleDetail: workstyle.description
        }})

    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

userControllers.loginUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

        const workstyle = await user.getWorkstyle()

        const encryptedId = jwt.sign ( { userId: user.id }, process.env.JWT_SECRET)

        if ( user.verifyPassword(req.body.password) ) {
            res.json({message: 'Login successful', user: {
                id: encryptedId,
                name: user.name,
                email: user.email,
                workstyle: workstyle.name,
                workstyleDetail: workstyle.description
            }})
        } else {
            res.status(400)
            res.json({error: 'Login failed'})
        }

    } catch (error) {
        console.log(error)
        res.status(400)
    }

}

userControllers.verifyUser = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne ({
            where: {
                id: decryptedId.userId
            }
        })

        const workstyle = await user.getWorkstyle()

        const encryptedId = jwt.sign ( { userId: user.id }, process.env.JWT_SECRET)

        res.json({message: 'User verified', user: {
            id: encryptedId,
            name: user.name,
            email: user.email,
            workstyle: workstyle.name,
            workstyleDetail: workstyle.description
        }})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}





module.exports = userControllers