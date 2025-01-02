const mongoose= require('mongoose');

const carSchema= new mongoose.Schema({
    carName: {
        type: String,
        required:true,
    },
    pricePerDay:{
        type:Number,
        required:true,
    },
    availability:[
        {
            data:{
                type:Date,
                required:true,
            },
            isAvailable:{
                type:Boolean,
                default:true,
            }
        }
    ],
    location:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
});

const Car= mongoose.model('Car', carSchema);

module.exports= Car;