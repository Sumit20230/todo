const mongoose=require('mongoose');
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    }).then(()=>{
        console.log(`connected to the database`);
    })
    .catch((e)=>{
        console.log(e);
    });
}
module.exports=dbConnect