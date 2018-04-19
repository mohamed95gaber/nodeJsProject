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
  user.create(req.body, function (err, inserteddata) {
    if (err){return handleError(err);}
    res.json(inserteddata);
  })

 });

 router.delete('/delete/:_id', function(req, res, next) {
   console.log(req.params._id);
  user.deleteOne({ "_id":req.params._id }, function (err,data) {
    if(!err) return res.json(data);
    else{
      console.log(err);
    }

  });

  // user.remove({_id: req.params._id }).exec( function (err,data) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.send(data);
  //   // removed!
  // });
  // user.findByIdAndRemove(req.params._id, function(err,data) {
  //   if (data) {
  //           res.json({"data":data})
  //   }
  //   else {
  //           res.send(err);
  //   }
  // });
});

module.exports = router;

