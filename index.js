//initial setup
const express=require('express');
const app=express();
const port=8000;




//listen setup
app.listen(port,function(err){
  if (err){
    console.log(`Error in running the server :$(port)`);
  }

  console.log(`Successful in running the server:$(port)`);
});
