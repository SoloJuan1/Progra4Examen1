const {Router} = require('express')

const router= Router()

router.get('/fecha', (req,res) => res.send('GET para Fecha'))
router.post('/fecha', (req,res) => res.send('POST para Fecha'))
router.put('/fecha', (req,res) => res.send('PUT para Fecha'))
router.delete('/fecha', (req,res) => res.send('DELETE para Fecha'))

module.exports= router