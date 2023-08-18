// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
//const mongoose = require('mongoose')
const app = express()

// Configurações
    // Body Parser
        app.use(bodyparser.urlencoded({extended: true}))
        app.use(bodyparser.json())

    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    //  Mongoose
        // Em breve

// Rotas



// Outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log('Servidor rodando!')
})