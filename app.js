const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//MIDDLEWARE
app.use(bodyParser.json());

//ROUTES
app.get('/', (req,res)=>{
    res.send("hello");
});

//POSTS ROUTE
app.use('/posts', require('./routes/posts'));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, ()=>{console.log("DB CONNECTED")})


//LISTEN
app.listen(3000);