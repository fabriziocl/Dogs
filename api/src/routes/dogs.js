const { Router } = require('express');
const router = Router();
const { Dog, Temperament } = require('../db') 
const getAllDogs = require('../functions/getAllDogs')

router.get('/', async (req, res) => {  
    const {name} = req.query; 
    const everyDog = await getAllDogs();
    if(name){
        let dogName = await everyDog.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length ?
            res.status(200).send(dogName) :
            res.status(404).send('Dog race not found')
    } else {
        res.status(200).send(everyDog)
    }
})

router.get('/:idRaza', async (req, res) => {
    const {idRaza} = req.params;
    const everyDog = await getAllDogs();
    if(idRaza){
        let dogId = await everyDog.filter(e => e.id == idRaza)
        await dogId.length ?
        res.status(200).json(dogId) :
        res.status(404).send('Id not found')
    }
})

router.post('/', async (req, res) => {
    const { name, height, weight, lifeSpan, image, temperament } = req.body
    if(!name || !height || !weight || !lifeSpan ||!image || !temperament){
        return res.status(404).send('Data is incomplete')
    }
    try {
        const newDog = await Dog.create({
            name, height, weight, lifeSpan, image, userCreated: true
        })

        const dbTemps = await Promise.all(temperament.map(t =>
            Temperament.findOrCreate({
                where: {
                    name: t
                }
            })));
        const tempObj = dbTemps.map(([temp, created]) => temp)
        await newDog.addTemperament(tempObj)
        res.status(201).send('Dog race created successfully')
    } catch (error) {
        res.status(404).send({message: 'Error creating dog', error})
    }
})

router.put('/', async(req, res) => {
    const { name, height, weight, lifeSpan, image, temperament } = req.body
    if(!name || !height || !weight || !lifeSpan ||!image || !temperament){
        return res.status(404).send('Data is incomplete')
    }
    try{
        const updatedDog = await Dog.update({
        name: name,
        height: height,
        weight: weight,
        lifeSpan: lifeSpan,
        image: image,
        userCreated: userCreated
    },
    {
        where: {
            name: name
        }
    })
        const updatedRace = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
        updatedDog.addTemperament(updatedRace)
        res.status(201).send('Dog race updated successfully')
   } catch(error){
    console.error(error)
    res.status(404).send('Data does not meet required parameters')
   }
})

router.delete('/', async (req, res) => {
    let {name} = req.query
    const everyDbDog = getFromDb()
    try {
        if(name){
            let dogName = await everyDbDog.filter(dog => dog.name.toLowerCase() == name.toLowerCase())
            await Dog.destroy({
                where: {
                    name: name
                }
            })
            dogName.length > 0 ?
                res.status(200).send('Dog race deleted successfully') :
                res.status(404).send('Dog race not found')
    }
    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'An error ocurred'})
    }
    })

module.exports = router