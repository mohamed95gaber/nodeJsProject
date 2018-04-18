var express = require('express');
var user = require('../models/usermodel.js');
var m1 = require('../MidelWare/midelware.js');

var router = express.Router();
var app=express();


/* GET users listing. */
app.use(m1);
router.get('/', function(req, res, next) {
  user.find({},function(err,data){
    res.json(data);
  });
 
});

router.post('/add', function(req, res, next) {
  debugger;
  user.create(req.body, function (err, inserteddata) {
    if (err){return handleError(err);}
    res.json(inserteddata);
  })

 });

//  router.get('/delete', function(req, res, next) {
//   user.delete({},function(err,data){
//     res.json(data);

//   });
 

module.exports = router;

