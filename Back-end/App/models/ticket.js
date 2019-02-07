const mongoose = require('mongoose')
const {Schema} = mongoose
const ticketMasterSchema = new Schema({
    name:{
        type: String,
        required:true,
        minlength: 3,
        maxlength: 10
    },
    department:{
        type: String,
        required: true,
        enum:['hr', 'sales', 'technical']
    },
    message: {
        type: String,
        required: true,
        maxlength: 200
    },
    priority:{
        type: String,
        required: true,
        enum:['high', 'medium', 'low']
    },
    status:{
        type: String,
        enum:['open', 'closed'],
        default:'open'
    },
    ticket_code : {
        type: String
        
    }
})

ticketMasterSchema.pre('save', function(next) {
    this.ticket_code = "DCT-" + Math.round(Math.random() * 100000)
    next()
  });

const TicketMaster = mongoose.model('TicketMaster', ticketMasterSchema)

module.exports = {
    TicketMaster
}