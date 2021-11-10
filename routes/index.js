const express= require('express');
const router=express.Router();

// route for base page
const base=require('../controllers/base_controller');
router.get('/',base.base);

//for user page 
router.use('/user',require('./user'));



console.log('router loaded');
module.exports=router;
