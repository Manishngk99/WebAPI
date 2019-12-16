var express = require('express')

var imageController = require('./controllers/imageController')

var app = express();

app.post('/image',imageController.imageName,imageController.uploadImage);
app.post('/images',imageController.imageNames,imageController.uploadImages);
app.listen('3023');