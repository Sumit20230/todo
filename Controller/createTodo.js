const Todo=require('../Models/Todo');
exports.createTodo=async(req,res)=>{
    try{
const {title,description}=req.body;
const response=await Todo.create({title,description});
res.status(200).json({
    success:true,
})

    }catch(e)
    {
console.log(e);
    }
}