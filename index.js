//initial setup
const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');


app.use(express.static('./assets'));

//static files extract css,js from view and upload at layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// layout usage 
app.use(expressLayouts);


//router setup
app.use('/',require('./routes'));

//views setup
app.set('view engine','ejs');
app.set('views','./views');




//listen setup
app.listen(port,function(err){
  if (err){
    console.log(`Error in running the server :${port}`);
  }

  console.log(`Successful in running the server:${port}`);
});
