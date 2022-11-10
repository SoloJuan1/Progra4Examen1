const {Router} = require('express')

const router= Router()

router.get('/horario', (req,res) => res.send('GET para Horario'))
router.post('/horario', (req,res) => res.send('POST para Horario'))
router.put('/horario', (req,res) => res.send('PUT para Horario'))
router.delete('/horario', (req,res) => res.send('DELETE para Horario'))

module.exports= router