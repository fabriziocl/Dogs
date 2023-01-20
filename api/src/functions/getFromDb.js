const { Dog, Temperament } = require('../db')

const getFromDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attibutes: ['name'],
            through: {
                attibutes: []
            }
        }
    })
}

module.exports = getFromDb