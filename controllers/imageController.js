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
}

module.exports = {
    imageName,
    uploadImage
}