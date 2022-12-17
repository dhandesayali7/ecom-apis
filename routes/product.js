var express = require('express');
var multer = require('multer');

var router = express.Router();
var ProductController = require("../controllers/ProductController");
 
 var storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, './uploads')
  },
  filename: function (req,file,cb){
    const uniquePrefix = Date.now() + '-' + Math.random()
    cb(null, uniquePrefix + '-' +file.originalname)

  }
 })
 var upload = multer({ storage});


 var cpUpload  = upload.single('image');

 

// -http methods-//
// post for create
// put for update
// get for fetch all or single ReadableByteStreamContraller
// delect for delect

router.post('/', cpUpload,function (req, res, next) {
 
  ProductController.createProduct(req, res, next);
});

//localhost: 3000 / product / 3563535;//

router.put('/:Id', cpUpload ,function (req, res, next) {
  ProductController.updateProduct(req, res, next);
});

router.post('/getAll', function (req, res, next) {
  ProductController.getAllProduct(req, res, next);
});

router.get('/:Id', function (req, res, next) {
  ProductController.getSingleProduct(req, res, next);
});

router.delete('/:Id', function (req, res, next) {
  ProductController.deleteProduct(req, res, next);
});

module.exports = router;
