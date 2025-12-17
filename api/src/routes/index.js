const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const dogs = require('./dogs');
const temperaments = require('./temperaments');
const ping = require('./ping');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/ping', ping);
router.use('/dogs', dogs);
router.use('/temperaments', temperaments)

module.exports = router;
