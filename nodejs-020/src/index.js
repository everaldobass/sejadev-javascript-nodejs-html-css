// Importar o express
const express = require('express')
// Importar Controller
import userController from './controllers/userController'

const app = express()
const port = 3002

// Usar o controler
app.use('/user', userController)



app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`)
})