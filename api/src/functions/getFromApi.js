require('dotenv').config();
const { API_KEY } = process.env
const axios = require('axios')

const fromApi = async () => {
    try {
        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        const apiInfo = await apiUrl.data.map(e => {
            return {
                name: e.name,
                height: e.height.metric,
                weight: e.weight.metric,
                lifeSpan: e.life_span,
                image: e.image.url,
                id: e.id,
                temperament: e.temperament
            }
        })
        return apiInfo
    } catch (error) {
        console.error(error)
    }
}

module.exports = fromApi