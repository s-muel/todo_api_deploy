
require('dotenv').config();
const { response, request } = require('express');
const express = require('express');
const app = express();
//importing mongoose 
const mongoose = require('mongoose');
// importing todoController
const todoController = require('./controllers/todoController');

app.use(express.json());

const PORT = process.env. PORT || 5010

app.post('/todo',todoController.addTodo);

app.get ('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateById);
app.delete('/todo/:todoId',todoController.deleteById);
app.get('/todo/:todoId',todoController.getAllTodoId);


// listening to request on localhost port 5010
app.listen(PORT,() => {
    console.log("My server is Up and running on Port:",PORT);
    // connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        // console.log("DataBase not connect",error);
        console.log(`DataBase not connected ${error}`);
    });
});

