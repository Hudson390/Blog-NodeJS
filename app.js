// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
//const mongoose = require('mongoose')
const app = express()
const admin = require('./routes/admin')
const path =require('path')
const { default: mongoose } = require('mongoose')

// Configurações
    // Body Parser
        app.use(bodyparser.urlencoded({extended: true}))
        app.use(bodyparser.json())

    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    //  Mongoose
    mongoose.Promise = global.Promise
        mongoose.connect("mongodb://127.0.0.1:27017/blogapp").then(()=>{
            console.log("Conectado ao MongoDB")
        }).catch((err)=>{
            console.log("Erro ao se conectar: " + err)
        })

    // Public
        app.use(express.static(path.join(__dirname, "public")))

// Rotas
    app.use('/admin', admin)


// Outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log('Servidor rodando!')
})