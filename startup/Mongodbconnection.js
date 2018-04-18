const mongoose=require('mongoose');

let dbvar='mongodb://localhost:27017/firstproject_db';

if(process.env.NODE_ENV === "production"){
    dbvar="dah elconnection string from server";
}

let conn=mongoose.connect(dbvar,(err)=>{
    debugger;
});