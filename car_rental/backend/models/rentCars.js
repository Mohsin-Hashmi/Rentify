import mongoose from "mongoose";
const rentCars= new mongoose.Schema({
    carName:{
        type:String,
        require,
    },
    rentPrice:{
        type:Number,
        require,
    },
    carLocation:{
        type:String,
        require,
    }
    

})