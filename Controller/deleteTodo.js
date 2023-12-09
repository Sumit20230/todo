const Todo=require('../Models/Todo');
exports.deleteTodo=(req,res)=>{
    try{
    let id = req.params.id;
    Todo.findByIdAndDelete({_id:id});
    return res.status(500).json({
        message:
        " deleting todo successfully"
    })
}
catch(e)
{
    console.log(e);
}
}