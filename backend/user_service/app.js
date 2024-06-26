const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
  return res.json({message:"Welcome to user_management service for code editor"})
})

module.exports = app;
