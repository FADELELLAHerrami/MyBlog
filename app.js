const express = require('express');
const router = require('./router/routerBlog');
const mongoose = require('mongoose');
var multer = require('multer');

// const dotenv = require('dotenv');
// dotenv.config();
// const dataBaseURL = process.env.dataBaseURL;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost/blogs")
.then(()=>console.log('connected'))
.catch(()=>console.log('not connected'));

app.set('view engine', 'pug');




app.use('/', router);


const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))