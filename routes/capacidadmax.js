const {Router} = require('express')

const router= Router()

router.get('/capacidadmax', (req,res) => res.send('GET para Capacidad Maxima'))
router.post('/capacidadmax', (req,res) => res.send('POST para Capacidad Maxima'))
router.put('/capacidadmax', (req,res) => res.send('PUT para Capacidad Maxima'))
router.delete('/capacidadmax', (req,res) => res.send('DELETE para Capacidad Maxima'))

module.exports= router