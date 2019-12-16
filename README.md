# WebAPI

For single Image upload:

We will be using Multer, which is the node.js middleware for uploading files. For installation add following code:

$ npm install --save multer

S0, we will be importing multer middleware as I imported in my image controller. 
var multer = require('multer');
var storage = multer.diskStorage({
	//destination function
    destination: function(req, file, cb){
        cb(null, 'upload/');
    },
	//filename function
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

var upload = multer({storage: storage})


Here we will be using disk storage which gives full control on storing files to disk. Now on Disk storage engine, we will be using two funcitons i.e. destination and filename function. 
Destination is used to determine within which folder the uploaded files should be stored. 
Filename function is used to determine what file should be named inside the folder.
Each function gets passed both request(req) and some information of file(file). And where storage contains entire file also called buffer.


For Multiple Image upload:
For multiple upload we will be creating an array function and same process applied as single Image upload steps.
var imageNames = upload.array('images', 5);


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




