const express=require('express');
const router=express.Router();

//initial controller
const user_page=require('../controllers/user_controller');
router.get('/',user_page.user);


module.exports=router;