const express = require('express')
const { TicketMaster } = require('../models/ticket')
const {ObjectID} = require('mongodb')
const router = express.Router()

const validateId = (req,res,next)=>{
    let id = req.params.id
    if(!ObjectID.isValid(id)){
        res.send({
            notice: 'invalid object id'
        })
    }else{
        next()
    }
}

router.get('/', function(req,res){
    TicketMaster.find()
    .then((tickets) => {
        res.send(tickets)
    })
    .catch((err) => res.send(err))
}) 

router.post('/', function(req, res){
    const body= req.body
    const ticket = new TicketMaster(body)
    ticket.save()
        .then((ticket) => {
            res.send(ticket)
        })
        .catch((err) =>{
            res.send(err)
        })
})

router.put('/:id',validateId, function(req, res){
	const id = req.params.id
	const body = req.body
	TicketMaster.findByIdAndUpdate(id, body, function(err, body){
        if(err){
            res.send(err)
        }
    }).then((body) =>{
        res.send(body)
    }).catch((err) => {
        res.send(err)
    })
		
	
})

module.exports = {
    ticketsController : router
}