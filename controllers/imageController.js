var ImageController = require('../models/ImageModel.js');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

var upload = multer({storage: storage})

var imageName = upload.single('image');

var imageNames = upload.array('images', 5);

function uploadImage(req, res, next){
    ImageController.image.create({
        image : req.file.filename
    })
    .then(function(result){
        res.send({
            status: 300,
            message: "Your image has been uploaded"
        })
    })
    .catch(function(err){
        console.log(err)
    })
    next();
}

function uploadImages(req, res, next){
    ImageController.image.multiCreate({
        image:req.files.filename
    })
     .then(function(result){
         res.send({
             status: 300,
             message: "your mulitiple images has been uploaded"
         })
     })
     .catch(function(err){
         console.log(err)
     })
     next();
}

module.exports = {
    imageName,
    uploadImage,
    imageNames,
    uploadImages
}