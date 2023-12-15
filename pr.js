const express=require('express');
const app=express();

const login=require('./loginpage')
app.use(login);
app.listen(3034)