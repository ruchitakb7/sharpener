const express= require('express')
const router= express.Router();


const c = require('../controller/contactus' );

router.get('/contact' , c.contact)
router.post('/success', c.getcontroller)

module.exports=router;

