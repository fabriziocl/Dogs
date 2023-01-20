const getFromApi = require('./getFromApi')
const getFromDb = require('./getFromDb')

const getAllDogs = async () => {
    const apiInfo = await getFromApi()
    const dbInfo = await getFromDb()
    const allInfo = apiInfo.concat(dbInfo)
    return allInfo
}

module.exports = getAllDogs