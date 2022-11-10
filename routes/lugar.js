const {Router} = require('express')

const router= Router()

router.get('/lugar', (req,res) => res.send('GET para Lugar'))
router.post('/lugar', (req,res) => res.send('POST para Lugar'))
router.put('/lugar', (req,res) => res.send('PUT para Lugar'))
router.delete('/lugar', (req,res) => res.send('DELETE para Lugar'))

module.exports= router