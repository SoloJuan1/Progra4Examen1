// Correr node app.js para iniciar servidor
require('dotenv').config()
const Server = require('./models/server')
const server= new Server()

server.listen()

/*
Rutas para ver los objetos
../fecha
../capacidadmax
../horario
../lugar

*/