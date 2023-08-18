const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    googleId:{type:String,required:false,unique:true},
    //password:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

const User = new mongoose.model('user',userSchema);
module.exports = User;