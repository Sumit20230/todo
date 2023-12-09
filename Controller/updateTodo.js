const Todo=require('../Models/Todo');

exports.updateTodo=async(req,res)=>{
    try{
    const todo=await Todo.findById({_id:req.params.id});
    todo.updation=Date.now();
    if(!todo){
        return "error";
    }
    res.status(200).json({success:true,data:todo});
}catch(e)
{
    console.log(e);
}
}