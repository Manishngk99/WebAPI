var express = require('express')

var imageController = require('./controllers/imageController')

var app = express();

app.post('/image',imageController.imageName,imageController.uploadImage);
app.listen('3023');