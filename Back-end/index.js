const express = require('express')
const app = express()
const {mongoose} = require('./config/db')
const {ticketsController} = require('./app/controllers/tickets_controller')

const port = 3001


app.use(express.json())

app.get('/', function(req, res){
    res.send('Welcome to the Ticket Master')
})

app.use('/tickets', ticketsController)



app.listen(port, function(){
    console.log(`listening to the port`, port)
})