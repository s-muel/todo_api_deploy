const todoModel = require('../models/todoModel');

 async function addTodo(request,response){
   try {
    const newTodo = await todoModel.create(request.body);
    response.status(200).json(newTodo);
   } catch (error) {
       console.log("Something went wrong",error.message);
   }
}

async function getAllTodo(request,response){
    try {
        const getAll =await todoModel.find();
        response.status(200).json(getAll);
    } catch (error) {
        console.log("ffffffff")
    }
}

async function updateById (request,response){
    try {
       const update= await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
       response.status(200).json({message:"Updated"});

    } catch (error) {
        
    }

}
async function deleteById(request,response){
try {
    const delet = await todoModel.findByIdAndDelete(request.params.todoId);
    response.status(200).json(delet);
} catch (error) {
    
}
}
async function getAllTodoId(request,response){
    try {
        const gettodobyId = await todoModel.findById(request.params.todoId);
        response .status(200).json(gettodobyId );
    } catch (error) {
        console.log("something went wrong",error.message);
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
    getAllTodoId
}