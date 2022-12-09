const express = require('express')
const app = express()
const port = 3001


// Rotas
app.get('/', (req, res) => {
    res.send("Olá mundo! ")
})

app.post('/', (req, res) => {

    res.send("Método POST")
    
});

app.put('/user',(req, res) => {
    res.send("Método PUT")
})


app.delete('/user', (req, res)=> {
    res.send("Método Deletar")
})

//
app.listen(port, () => { 
    console.log(`Servidor iniciado ${port}`)
})