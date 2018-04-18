const mongoose=require('mongoose');

let dbvar='mongodb://localhost:27017/zoo-management';

if(process.env.NODE_ENV === "production"){
    console.log("anahena");
    dbvar="mongodb://admin:admin@ds149309.mlab.com:49309/zoo-management";
}

let conn=mongoose.connect(dbvar,(err)=>{
    debugger;
});
