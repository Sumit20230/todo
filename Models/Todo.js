const mongoose= require('mongoose');
const todoschema= new mongoose.Schema({
    title:{
        type:String,
    
    },
    description:{
        type:String,
       
    },
    creation:{
        type:Date,
       
        default:Date.now()
        
    },
    updation:{
        type:Date,
      default:Date.now()
       
    }
})
module.exports = mongoose.model("todo",todoschema);