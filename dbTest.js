const models = require('./models')


const additional = async () => {

    const learn = await models.space.findOne({
        where: {
            name: '03'
        }
    })

    const sustain = await models.space.findOne({
        where: {
            name: '14'
        }
    })

    const arrive = await models.space.findOne({
        where: {
            name: '15'
        }
    })

    const assemble = await models.space.findOne({
        where: {
            name: '16'
        }
    })    

    const support = await models.workstyle.findOne({
        where: {
            name: 'Support'
        }
    })

    const saved1 = await support.addSpace(learn)
    const saved2 = await support.addSpace(sustain)
    const saved3 = await support.addSpace(arrive)
    const saved4 = await support.addSpace(assemble)
}

additional()


const workstyles = async () => {
    const Thinker = await models.workstyle.findOne({
        where: {
            name: 'The Thinker'
        }
    })

    const focus1 = await models.space.findOne({
        where: {
            name: '04',
        }
    })
    const focus2 = await models.space.findOne({
        where: {
            name: '05',
        }
    })

    const save1 = await Thinker.addSpace(focus1)
    const save2 = await Thinker.addSpace(focus2)


    const Builder = await models.workstyle.findOne({
        where: {
            name: 'The Builder'
        }
    })

    const work1 = await models.space.findOne({
        where: {
            name: '01',
        }
    })
    const work2 = await models.space.findOne({
        where: {
            name: '02',
        }
    })

    const save3 = await Builder.addSpace(work1)
    const save4 = await Builder.addSpace(work2)

    const Designer = await models.workstyle.findOne({
        where: {
            name: 'The Designer'
        }
    })

    const create1 = await models.space.findOne({
        where: {
            name: '10',
        }
    })
    const create2 = await models.space.findOne({
        where: {
            name: '11',
        }
    })

    const save5 = await Designer.addSpace(create1)
    const save6 = await Designer.addSpace(create2)

    const Developer = await models.workstyle.findOne({
        where: {
            name: 'The Developer'
        }
    })

    const break1 = await models.space.findOne({
        where: {
            name: '06',
        }
    })
    const break2 = await models.space.findOne({
        where: {
            name: '07',
        }
    })

    const save7 = await Developer.addSpace(break1)
    const save8 = await Developer.addSpace(break2)

    const Counselor = await models.workstyle.findOne({
        where: {
            name: 'The Counselor'
        }
    })

    const meet1 = await models.space.findOne({
        where: {
            name: '12',
        }
    })
    const meet2 = await models.space.findOne({
        where: {
            name: '13',
        }
    })

    const save9 = await Counselor.addSpace(meet1)
    const save10 = await Counselor.addSpace(meet2)

    const Connector = await models.workstyle.findOne({
        where: {
            name: 'The Connector'
        }
    })

    const gather1 = await models.space.findOne({
        where: {
            name: '08',
        }
    })
    const gather2 = await models.space.findOne({
        where: {
            name: '09',
        }
    })

    const save11 = await Connector.addSpace(gather1)
    const save12 = await Connector.addSpace(gather2)

}

workstyles()