//routes/usuarios.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    //res.send({message:'hola mundo'})
  res.send('You have hit GET /usuarios endpoint')
})

module.exports = router

