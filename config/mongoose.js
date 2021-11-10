const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/todo_app_dev');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connection'));

db.once('open',function(){
  console.log('connection to the database');
});

module.exports=db;