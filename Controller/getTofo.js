const Todo=require('../Models/Todo');
exports.getTodo=async(req,res)=>{
    try{
const todos=await Todo.find({});
res.status(200).json({success:true,data:todos})
    }catch(e)
    {
console.log(e);
    }
}

exports.getTodobyId=async (req,res,id)=>{
    try{
        
        const todos=await Todo.findById({_id:req.params.id});
        if(!todos)
        return res.status(400).json({success:false,msg:"No todo found"});
        res.status(200).json({success:true,data:todos});
    }catch(e)
    {
     console.log(e);
    }
}