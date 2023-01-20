const { Router } = require('express');
const router = Router();
const {Temperament} = require('../db')
const axios = require('axios')
require('dotenv').config();
const {API_KEY} = process.env

router.get('/', async (req, res) => {
    const tempers = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const ropes = await tempers.data

    const temp = [...new Set(ropes.map(e => e.temperament).toString().split(",").map(e=>{
        if (e[0] == " ") return e.slice(1)
        return e
      }))]

      temp.forEach(e=>{
        Temperament.findOrCreate({
            where: {
                name: e
            }
        })
      })

      const everyTemp = await Temperament.findAll()
    res.status(200).send(everyTemp)
})

module.exports = router