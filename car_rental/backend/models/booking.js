const mongoose= require('mongoose');

const bookingSchema= new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required:true
    },
    pickupDate:{
        type:Date,
        required:true,
    },
    returnDate:{
        type:Date,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending", "Confirmed", "Cancelled"],
        default:"Pending"
    },
})

const Booking= mongoose.model('Booking', bookingSchema);
module.exports= Booking;