const express= require('express')
const router= express.Router();

const path=require('path');

//import { contact } from '../controller/contactus';
const err = require('../controller/404' );

router.get('/' , err.e)

module.exports=router;