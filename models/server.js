const express = require('express')

class Server{
    app = express()
    port = process.env.PORT
    constructor(){
    this.routes()
    }

    routes(){
        this.app.use('',require('../routes/fecha'))
        this.app.use('',require('../routes/horario'))
        this.app.use('',require('../routes/lugar'))
        this.app.use('',require('../routes/capacidadmax'))

    }

    listen(){
        this.app.listen(port,() => console.log(`Servidor Puerto: ${port}`))
    }
}

module.exports= Server