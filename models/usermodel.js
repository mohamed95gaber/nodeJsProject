const mongoose=require('mongoose');
//const schema =mongoose.Schema;

const userSchema=new mongoose.Schema({
username:{
    type:String,
    lowercase:true
},
age:Number

});

const user=mongoose.model('Student',userSchema);

module.exports=user;